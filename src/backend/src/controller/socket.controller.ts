import { Lobby } from "../model/logic/game/lobby";
import { SocketOnEvent } from "../helper/enum/socketOnEvent.enum";
import { SocketEmitEvent } from "../helper/enum/socketEmitEvent.enum";

let lobbies: Lobby[] = [];

export const SocketController = (socket) => {
    socket.on(SocketOnEvent.CreateLobby, (data) => {
        const createdLobby = new Lobby(data.name, data.password, data.isPrivate);
        lobbies.push(createdLobby);

        socket.emit(SocketEmitEvent.CreatedLobby, { id: createdLobby.id, isPrivate: createdLobby.isPrivate, password: createdLobby.password });
        socket.broadcast.emit(SocketEmitEvent.UpdateLobbies);
    });

    socket.on(SocketOnEvent.GetLobbies, () => {
        const allLobbies = lobbies.map(lobby => {
            return {
                id: lobby.id,
                name: lobby.name,
                isPrivate: lobby.isPrivate,
                players: lobby.players,
                leaderId: lobby.leaderId,
                playing: lobby.playing
            }
        });

        socket.emit(SocketEmitEvent.AllLobbies, allLobbies);
    });

    socket.on(SocketOnEvent.JoinLobby, (lobbyId: string, username: string, password: string) => {
        const lobby = lobbies.find(lobby => lobby.id == lobbyId);

        if (lobby == undefined) {
            return;
        }

        const player = lobby.join(socket.id, username, password);

        if (player != null) {
            const joinedLobby = {
                id: lobby.id,
                name: lobby.name,
                isPrivate: lobby.isPrivate,
                players: lobby.players,
                leaderId: lobby.leaderId,
                playing: lobby.playing
            };

            socket.emit(SocketEmitEvent.JoinedLobby, { lobby: joinedLobby, player: player });
            socket.to(lobby.id).emit(SocketEmitEvent.UpdateLobby, joinedLobby);
            socket.join(lobby.id);
        }
    });

    socket.on(SocketOnEvent.LeaveLobby, (lobbyId: string) => {
        const lobby = lobbies.find(lobby => lobby.id == lobbyId);

        if (lobby == undefined) {
            return;
        }

        if (socket != undefined) {
            if (lobby.leave(socket.id)) {
                socket.emit(SocketEmitEvent.LeftLobby);
            }
            if (lobby.players.length <= 0) {
                const lobbyIndex = lobbies.findIndex(lobby => lobby.id == lobbyId);
                lobbies.splice(lobbyIndex, 1);
            }

            socket.leave(lobby.id);
            socket.to(lobby.id).emit(SocketEmitEvent.UpdateLobby, {
                id: lobby.id,
                name: lobby.name,
                isPrivate: lobby.isPrivate,
                players: lobby.players,
                leaderId: lobby.leaderId,
                playing: lobby.playing
            });

            socket.broadcast.emit(SocketEmitEvent.UpdateLobbies);
        }
    });

    socket.on(SocketOnEvent.SendMessage, (receivername) => {
        socket.broadcast.emit(SocketEmitEvent.NewMessage, receivername);
    });

    socket.on(SocketOnEvent.RefreshLobby, lobbyId => {
        const lobby = lobbies.find(lobby => lobby.id == lobbyId);
        if (lobby != undefined) {
            socket.to(lobby.id).emit(SocketEmitEvent.UpdateLobby, {
                id: lobby.id,
                name: lobby.name,
                isPrivate: lobby.isPrivate,
                players: lobby.players,
                leaderId: lobby.leaderId,
                playing: lobby.playing
            });
        }
    });

    socket.on(SocketOnEvent.Disconnect, () => {
        console.log(`Disconnect: ${socket.id}`);
        lobbies.forEach(lobby => {
            lobby.leave(socket.id);
            if (lobby.players.length <= 0) {
                const lobbyIndex = lobbies.findIndex(x => x.id == lobby.id);
                lobbies.splice(lobbyIndex, 1);
            }

            socket.leave(lobby.id);
            socket.to(lobby.id).emit(SocketEmitEvent.UpdateLobby, {
                id: lobby.id,
                name: lobby.name,
                isPrivate: lobby.isPrivate,
                players: lobby.players,
                leaderId: lobby.leaderId,
                playing: lobby.playing
            });
        });

        socket.broadcast.emit(SocketEmitEvent.UpdateLobbies);
    });
};
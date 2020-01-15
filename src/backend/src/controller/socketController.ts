import { Lobby } from "../model/game/lobby";

let lobbies: Lobby[] = [];

export const SocketController = (socket) => {
    socket.on("createLobby", (data) => {
        const createdLobby = new Lobby(data.name, data.password, data.isPrivate);
        lobbies.push(createdLobby);

        socket.emit("createdLobby", { id: createdLobby.id, isPrivate: createdLobby.isPrivate, password: createdLobby.password });
        socket.broadcast.emit("updateLobbies");
    });

    socket.on("getLobbies", () => {
        const allLobbies = lobbies.map(lobby => {
            return {
                id: lobby.id,
                name: lobby.name,
                isPrivate: lobby.isPrivate,
                players: lobby.players
            }
        });

        socket.emit("allLobbies", allLobbies);
    });

    socket.on("joinLobby", (lobbyId: string, username: string, password: string) => {
        const lobby = lobbies.find(lobby => lobby.id == lobbyId);

        if (lobby == undefined) {
            return;
        }

        if (lobby.join(socket.id, username, password)) {
            const joinedLobby = {
                id: lobby.id,
                name: lobby.name,
                isPrivate: lobby.isPrivate,
                players: lobby.players
            };

            socket.emit("joinedLobby", joinedLobby);
            socket.to(lobby.id).emit("updateLobby", joinedLobby);
            socket.join(lobby.id);

        }
    });

    socket.on("leaveLobby", (lobbyId: string) => {
        const lobby = lobbies.find(lobby => lobby.id == lobbyId);

        if (lobby == undefined) {
            return;
        }

        if (socket != undefined) {
            if (lobby.leave(socket.id)) {
                socket.emit("leftLobby");
            }
            if (lobby.players.length <= 0) {
                const lobbyIndex = lobbies.findIndex(lobby => lobby.id == lobbyId);
                lobbies.splice(lobbyIndex, 1);
            }

            socket.leave(lobby.id);
            socket.to(lobby.id).emit("updateLobby", {
                id: lobby.id,
                name: lobby.name,
                isPrivate: lobby.isPrivate,
                players: lobby.players
            });

            socket.broadcast.emit("updateLobbies");
        }
    });

    socket.on("sendMessage", (receivername) => {
        socket.broadcast.emit("newMessage", receivername);
    });

    socket.on("disconnect", () => {
        console.log("Socket " + socket.id + " left");
        lobbies.forEach(lobby => {
            lobby.leave(socket.id);
            if (lobby.players.length <= 0) {
                const lobbyIndex = lobbies.findIndex(x => x.id == lobby.id);
                lobbies.splice(lobbyIndex, 1);
            }

            socket.leave(lobby.id);
            socket.to(lobby.id).emit("updateLobby", {
                id: lobby.id,
                name: lobby.name,
                isPrivate: lobby.isPrivate,
                players: lobby.players
            });
        });

        socket.broadcast.emit("updateLobbies");
    });
};
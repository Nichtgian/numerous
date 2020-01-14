<template>
  <v-container>
    <v-card>
      <v-responsive>
        <v-card-title>
          <h1>Home</h1>
          <v-spacer></v-spacer>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn outlined color="error" v-on="on" @click="logout" style="margin-right: 10px;"><v-icon>mdi-arrow-left</v-icon></v-btn>
            </template>
            <span>Logout</span>
          </v-tooltip>
          <div v-if="!user.isGuest">
            <SocialMenu v-model="showSocialMenu" @openUserProfile="openUserProfile"/>
            <ProfileMenu v-model="showPlayerMenu" :userId="selectedUserId"/>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn color="primary" outlined v-on="on" @click="showSocialMenu=!showSocialMenu"><v-icon>mdi-chat-outline</v-icon></v-btn>
              </template>
              <span>Open Social Menu</span>
            </v-tooltip>
          </div>
        </v-card-title>
        <v-card-text>
          <Game></Game>
        </v-card-text>
      </v-responsive>
    </v-card>
  </v-container>
</template>

<script>
  import { UserService } from "@/services/userService";
  import router from "@/router";
  import SocialMenu from "@/components/SocialMenu";
  import ProfileMenu from "@/components/ProfileMenu";
  import Game from "@/components/Game";
  import Store from "../store";

  export default {
    name: "Home",
    components: {
      SocialMenu,
      ProfileMenu,
      Game
    },
    data: () => {
      return {
        showSocialMenu: false,
        showPlayerMenu: false,
        selectedUserId: 0,
        user: null
      };
    },
    created() {
      this.user = Store.state.user;
    },
    methods: {
      logout() {
        UserService.logout();
        router.go("login");
      },
      openUserProfile(userId) {
        this.selectedUserId = userId;
        this.showPlayerMenu = true;
      }
    },
  };
</script>

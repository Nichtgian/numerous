<template>
  <v-container>
    <v-card>
      <v-responsive>
        <v-card-title>
          <h2>Home</h2>
          <v-spacer></v-spacer>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn outlined color="error" v-on="on" @click="logout" style="margin-right: 10px;"><v-icon>mdi-arrow-left</v-icon></v-btn>
            </template>
            <span>Logout</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn color="primary" outlined v-on="on" style="margin-right: 10px;" @click="showInfoMenu=!showInfoMenu"><v-icon>mdi-book-open-outline</v-icon></v-btn>
            </template>
            <span>Show information and rules menu</span>
          </v-tooltip>
          <div v-if="!user.isGuest">
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn color="primary" outlined v-on="on" @click="showSocialMenu=!showSocialMenu"><v-icon>mdi-account-outline</v-icon></v-btn>
              </template>
              <span>Open social Menu</span>
            </v-tooltip>
          </div>
        </v-card-title>
        <v-card-text>
          <Numerous @openUserProfile="openUserProfile"></Numerous>
        </v-card-text>
      </v-responsive>
    </v-card>

    <SocialMenu v-model="showSocialMenu" @openUserProfile="openUserProfile"/>
    <ProfileMenu v-model="showPlayerMenu" :userId="selectedUserId"/>
    <InfoMenu v-model="showInfoMenu"/>
  </v-container>
</template>

<script>
  import { UserService } from "@/services/userService";
  import router from "@/router";
  import SocialMenu from "@/components/SocialMenu";
  import ProfileMenu from "@/components/ProfileMenu";
  import InfoMenu from "@/components/InfoMenu";
  import Numerous from "@/components/Numerous";
  import Store from "../store";

  export default {
    name: "Home",
    components: {
      SocialMenu,
      ProfileMenu,
      InfoMenu,
      Numerous
    },
    data: () => {
      return {
        showSocialMenu: false,
        showPlayerMenu: false,
        showInfoMenu: false,
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

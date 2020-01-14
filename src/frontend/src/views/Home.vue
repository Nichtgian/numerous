<template>
  <v-container>
    <h1>Home ss</h1>
    <v-btn outlined color="primary" width="100%" @click="showSocialMenu=!showSocialMenu">Play as Guest</v-btn>
    <SocialMenu v-model="showSocialMenu"/>
  </v-container>
</template>

<script>
  import { UserService } from "@/services/userService";
  import router from "@/router";
  import SocialMenu from "@/components/SocialMenu";

  export default {
    name: "Home",
    components: {
      SocialMenu
    },
    data: () => {
      return {
        showSocialMenu: false
      };
    },
    methods: {
      logout() {
        UserService.logout();
        router.go("login");
      }
    },
  };
</script>

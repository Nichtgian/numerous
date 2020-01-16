<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <img height="100%" alt="Vue logo" src="./assets/numerous.svg">
      <h1>Numerous</h1>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    name: "App",
    data: () => ({
    }),
  };
</script>

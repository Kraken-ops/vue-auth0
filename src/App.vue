<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-tabs v-model="tabIndex">
        <div class="d-flex align-center">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
            transition="scale-transition"
            width="40"
          />

          <v-img
            alt="Vuetify Name"
            class="shrink mt-1 hidden-sm-and-down"
            contain
            min-width="100"
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
            width="100"
          />
        </div>

        <v-spacer></v-spacer>

        <!-- <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn> -->

        <router-link to="/"
          ><v-tab class="pb-4"
            ><v-btn
              class="mr-2 mt-4"
              target="_blank"
              text
              plain
              :ripple="false"
            >
              <v-icon class="">mdi-home</v-icon>
              <span class="">Home</span>
            </v-btn></v-tab
          ></router-link
        >

        <router-link to="/about"
          ><v-tab class="pb-4"
            ><v-btn
              class="mr-2 mt-4"
              target="_blank"
              text
              plain
              :ripple="false"
            >
              <v-icon class="">mdi-information</v-icon>
              <span class="">About</span>
            </v-btn></v-tab
          ></router-link
        >

        <router-link to="/members">
          <v-tab class="pb-4"
            ><v-btn
              class="mr-2 mt-4"
              target="_blank"
              text
              plain
              :ripple="false"
            >
              <v-icon class="">mdi-account</v-icon>
              <span class="">Members</span>
            </v-btn></v-tab
          ></router-link
        >

        <v-btn
        class="mr-2 mt-4"
              target="_blank"
              text
              plain
              :ripple="false"
          @click="logout"
          v-if="this.$store.state.userIsAuthorized"
        >
          <v-icon>mdi-logout</v-icon>
          <span class="mr-2">Logout</span>
        </v-btn>
      </v-tabs>
    </v-app-bar>

    <v-main>
      <!-- {{ clientId }} -->
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import router from "./router/index";
export default {
  name: "App",

  data() {
    return {
      clientId: process.env.VUE_APP_AUTH0_CONFIG_CLIENTID,
      tabIndex: 0,
    };
  },
  mounted() {
    this.syncTab();
  },
  methods: {
    logout() {
      this.$store.dispatch("auth0Logout");
      console.log("logging out");
      this.syncTab();
    },
    syncTab() {
      if (router.currentRoute.fullPath === "/") this.tabIndex = 0;
      else if (router.currentRoute.fullPath === "/about") this.tabIndex = 1;
      else if (router.currentRoute.fullPath === "/members") this.tabIndex = 2;
      else this.tabIndex = 1;
    },
  },
};
</script>

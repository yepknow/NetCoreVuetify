<template>
  <v-app>
    <v-app-bar app color="white">
      <v-toolbar-title>NetCoreVuetify</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/" text>
        <span>Home</span>
      </v-btn>
      <v-btn to="/counter" text>
        <span>Counter</span>
      </v-btn>
      <v-btn to="/fetch-data" text>
        <span>Fetch Data</span>
      </v-btn>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App"
});
</script>

<style>
html[lang] {
  overflow-y: auto;
}
</style>

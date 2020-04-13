<template>
  <v-container>
    <h1 class="display-2 my-3">Hello, world!</h1>
    <p>Welcome to your new single-page application, built with:</p>
    <ul class="mb-4">
      <li>
        <a href="https://get.asp.net/" target="_blank">ASP.NET Core</a> and
        <a
          href="https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/"
          target="_blank"
        >C#</a> for cross-platform server-side code
      </li>
      <li>
        <a href="https://vuejs.org/" target="_blank">Vue</a> and
        <a href="https://vuex.vuejs.org/" target="_blank">Vuex</a> for client-side code
      </li>
      <li>
        <a href="https://vuetifyjs.com/" target="_blank">Vuetify</a> for layout and styling
      </li>
    </ul>
    <p>To help you get started, we've also set up:</p>
    <ul class="mb-4">
      <li>
        <span class="font-weight-bold">Client-side navigation</span>. For example, click
        <em>Counter</em> then
        <em>Back</em> to return here.
      </li>
      <li>
        <span class="font-weight-bold">Development server integration</span>. In development mode, the development server from
        <code>vue create</code> runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.
      </li>
      <li>
        <span class="font-weight-bold">Efficient production builds</span>. In production mode, development-time features are disabled, and your
        <code>dotnet publish</code> configuration produces minified, efficiently bundled JavaScript files.
      </li>
    </ul>
    <p>
      The
      <code>ClientApp</code> subdirectory is a standard Vue application based on the
      <code>vue create</code> template. If you open a command prompt in that directory, you can run
      <code>npm</code> commands such as
      <code>npm test</code> or
      <code>npm install</code>.
    </p>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Home"
});
</script>

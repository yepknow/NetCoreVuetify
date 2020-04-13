<template>
  <v-container>
    <h1 class="display-2 my-3">Counter</h1>
    <p>This is a simple example of a Vue component.</p>
    <counter-card />
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import CounterCard from "@/components/CounterCard.vue";

export default Vue.extend({
  name: "Counter",
  components: {
    CounterCard
  }
});
</script>

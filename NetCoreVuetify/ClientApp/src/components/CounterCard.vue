<template>
  <v-card>
    <v-card-text>
      <v-badge :content="label">Current count</v-badge>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" @click.prevent="increment">Increment</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapGetters } from "vuex";

export default Vue.extend({
  name: "CounterCard",
  computed: {
    ...mapGetters({
      label: "counter/label"
    })
  },
  methods: {
    ...mapActions({
      increment: ("counter/increment" as unknown) as () => void
    })
  }
});
</script>

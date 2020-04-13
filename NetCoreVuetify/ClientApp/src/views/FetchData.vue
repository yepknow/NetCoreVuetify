<template>
  <v-container>
    <h1 class="display-2 my-3">Weather forecast</h1>
    <p>
      This component demonstrates fetching data from the server and working with
      URL parameters.
    </p>
    <v-data-table class="elevation-1" :headers="headers" hide-default-footer :items="items">
      <template v-slot:footer>
        <v-row class="mx-1">
          <v-col cols="6">
            <v-btn :to="previous">Previous</v-btn>
          </v-col>
          <v-col class="text-right" cols="6">
            <v-btn :to="next">Next</v-btn>
          </v-col>
        </v-row>
      </template>
    </v-data-table>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";
import { Forecast } from "@/store/weather/Forecast";

export default Vue.extend({
  name: "FetchData",
  data: () => ({
    headers: [
      {
        text: "Date",
        value: "date"
      },
      {
        text: "Temp. (°C)",
        value: "temperatureC"
      },
      {
        text: "Temp. (°F)",
        value: "temperatureF"
      },
      {
        text: "Summary",
        value: "summary"
      }
    ],
    items: [] as Forecast[]
  }),
  computed: {
    next(): string {
      return `/fetch-data/${this.position + 5}`;
    },
    position(): number {
      return +(this.$route.params.position || 0);
    },
    previous(): string {
      return `/fetch-data/${this.position - 5}`;
    }
  },
  methods: {
    ...mapActions({
      getForecasts: ("weather/getForecasts" as unknown) as () => Promise<
        Forecast[]
      >
    })
  },
  watch: {
    $route: {
      async handler(): Promise<void> {
        this.items = await this.getForecasts();
      },
      immediate: true
    }
  }
});
</script>

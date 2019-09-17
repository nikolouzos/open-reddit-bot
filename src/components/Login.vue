<template>
  <div class="absolute-center">
    <v-card elevation="2" class="px-5 pb-5 text-center">
      <v-card-title>
        Authenticate using your Reddit account
      </v-card-title>
      <v-divider class="pb-5" />
      <v-btn
      depressed
      large
      dark
      color="#ff4500"
      @click="authenticationRequest">
        Authenticate
      </v-btn>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    authenticationRequest() {
      this.$networking.authenticationRequest()
    },
  },
});
</script>

<style lang="stylus" scoped>

</style>

<template>
  <div class="absolute-center">
    <v-card elevation="2">
      <v-card-title>
        Login using your Reddit account
      </v-card-title>
      <v-form class="text-center px-5 pb-5">
        <v-text-field
          label="Username"
          hint="fancypants"
          outlined
          type="username"
          prepend-inner-icon="mdi-account-circle-outline"
          :value="username"
        />
        <v-text-field
          label="Password"
          hint="verysecurepassword"
          outlined
          type="password"
          prepend-inner-icon="mdi-lock-outline"
          :value="password"
        />

        <v-btn
        depressed
        large
        color="primary">
            Submit
        </v-btn>
      </v-form>
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
});
</script>

<style lang="stylus" scoped></style>

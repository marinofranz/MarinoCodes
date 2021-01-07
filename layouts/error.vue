<template>
  <v-app dark>
    <h2>We couldn't find that page!<br>
    Here's what you can do:</h2>

    <br>
    <v-divider></v-divider>
    <br>

    <v-row>
      <v-col>
        <v-btn
          outlined
          color="white"
          block
          @click="goBack"
        >
          Go back
        </v-btn>
      </v-col>

      <v-col>
        <v-btn
          outlined
          color="white"
          block
          to="/"
        >
          Home
        </v-btn>
      </v-col>
    </v-row>

    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <NuxtLink to="/">
      Home page
    </NuxtLink>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
    }
  },
  methods: {
    goBack(){
      window.history.back();
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

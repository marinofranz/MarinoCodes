<template>
  <v-app dark>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      dense
      hide-on-scroll
    >
      <v-container>
        <div class="title">
          <nuxt-link to="/">Marino Franz</nuxt-link>
        </div>
        <v-spacer></v-spacer>
      </v-container>
    </v-app-bar>
    <v-main>
      <v-container class="page-container">
        <nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>{{ title }} — {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<style scoped>
  .page-container {
    margin-top: 20px;
  }

  .title a {
    color: #fff;
    cursor: pointer;
    text-decoration: none;
    transition: opacity 175ms;
  }

  .title a:hover {
    opacity: 0.7;
  }
</style>

<script>
export default {
  data () {
    return {
      title: 'Marino Franz'
    }
  }
}
</script>

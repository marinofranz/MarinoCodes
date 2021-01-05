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
        <div v-if="development">
        <v-alert
            outlined
            type="warning"
            border="left"
        >
          This website is still under development, please report bugs to Marino over on his <strong class="cursor-pointer" @click.stop="dialog = true">Discord</strong>
        </v-alert>

        <v-dialog
          v-model="dialog"
          max-width="290"
        >
          <v-card dark>
            <v-card-title>
              Discord Tag
            </v-card-title>
            <v-card-text>
              If you have any questions or concerns, please direct message
              the following Discord user:
              <br>
              <br>
              <v-divider></v-divider>
              <br>
              <strong>{{ discordTag }}</strong>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn
                color="blue darken-1"
                text
                @click="dialog = false"
              >
                OK
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        </div>

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

  .cursor-pointer {
    cursor: pointer;
  }
</style>

<script>
export default {
  data () {
    return {
      title: 'Marino Franz',
      dialog: false,
      discordTag: "Marino#0001",
      development: true
    }
  }
}
</script>

<template>
  <div>
    <v-alert
      outlined
      type="warning"
      border="left"
    >
      This website is still under development, please report bugs to Marino over on his <strong class="cursor-pointer" @click.stop="dialog = true">Discord</strong>
    </v-alert>

    <v-img
      src="/MGlow.png"
      max-height="275"
      max-width="1400"
      class="rounded-lg"
    >
      <v-overlay
        :absolute="true"
        :value="true"
        :opacity="0.30"
      >
        <h1 class="text-center">Marino</h1>
        <p class="text-center">Programmer</p>
      </v-overlay>
    </v-img>

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
</template>

<style scoped>
  .cursor-pointer {
    cursor: pointer;
  }
</style>

<script>
export default {
  data(){
    return {
      dialog: false,
      discordTag: "Marino#0001"
    }
  }
}
</script>

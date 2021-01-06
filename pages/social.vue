<template>
  <div>
    <v-img
      src="/MGlow.png"
      max-height="275"
      max-width="100000000"
      class="rounded-lg"
    >
      <v-overlay
        :absolute="true"
        :value="true"
        :opacity="0.30"
      >
        <h1 class="text-center">Marino</h1>
        <p class="text-center">Social Media</p>
      </v-overlay>
    </v-img>

    <div class="bottom-spacing"></div>

    <v-btn
      text
      icon
      color="white"
      to="https://github.com/marinofranz"
    >
      <v-icon>
        mdi-github
      </v-icon>
    </v-btn>

    <v-btn
      text
      icon
      color="white"
      to="https://twitter.com/DJMarino_"
    >
      <v-icon>
        mdi-twitter
      </v-icon>
    </v-btn>
  </div>
</template>

<style scoped>
  .cursor-pointer {
    cursor: pointer;
  }

  .bottom-spacing {
    margin-bottom: 10px;
  }
</style>

<script>
export default {
  head(){
    return {
      title: "Social Media"
    }
  }
}
</script>

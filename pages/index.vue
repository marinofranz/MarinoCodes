<template>
  <div>
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

    <div class="bottom-spacing"></div>

    <v-row>
      <v-col>
        <v-btn
          block
          elevation="2"
          dark
          to="/skills"
        >
          <v-icon left>
            mdi-star
          </v-icon>
          Skills
        </v-btn>
      </v-col>

      <v-col>
        <v-btn
          block
          elevation="2"
          dark
          to="/experience"
        >
          <v-icon left>
            mdi-briefcase
          </v-icon>
          Experience
        </v-btn>
      </v-col>

      <v-col>
        <v-btn
          block
          elevation="2"
          dark
          to="/social"
        >
          <v-icon left>
            mdi-share
          </v-icon>
          Social Media
        </v-btn>
      </v-col>
    </v-row>
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
      title: "Home"
    }
  }
}
</script>

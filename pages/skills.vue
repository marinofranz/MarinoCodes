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
        <p class="text-center">My Skills</p>
      </v-overlay>
    </v-img>

    <div class="bottom-spacing"></div>

    <v-progress-linear
      :value="javascript"
      color="amber"
      height="25"
      class="rounded-xl"
    >
      <strong>JavaScript - {{ Math.ceil(javascript) }}%</strong>
    </v-progress-linear>

    <div class="bottom-spacing"></div>

    <v-progress-linear
      :value="typescript"
      color="indigo"
      height="25"
      class="rounded-xl"
    >
      <strong>TypeScript - {{ Math.ceil(typescript) }}%</strong>
    </v-progress-linear>
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
  data(){
    return {
      head: {
        title: "Skills"
      },
      javascript: 78,
      typescript: 43
    }
  }
}
</script>

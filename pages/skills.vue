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

    <v-divider></v-divider>

    <div class="bottom-spacing"></div>

    <v-progress-linear
      v-for="skill in skills"
      :key="skill"
      :value="skill.value"
      :color="skill.color"
      height="35"
      class="rounded-xl bottom-spacing"
    >
      <strong>{{ skill.name }} - {{ Math.ceil(skill.value) }}%</strong>
    </v-progress-linear>

    <v-divider></v-divider>
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
      skills: [
        {
          name: "HTML",
          value: 90,
          color: "red"
        },
        {
          name: "JavaScript",
          value: 78,
          color: "amber"
        },
        {
          name: "Node.js",
          value: 75,
          color: "green"
        },
        {
          name: "React",
          value: 74,
          color: "#039BE5"
        },
        {
          name: "CSS",
          color: "light-blue",
          value: 72
        },
        {
          name: "Sass",
          color: "pink",
          value: 70
        },
        {
          name: "Vue.js",
          color: "#039BE5",
          value: 65
        },
        {
          name: "Nuxt.js",
          color: "#2E7D32",
          value: 62
        },
        {
          name: "TypeScript",
          value: 62,
          color: "indigo"
        },
        {
          name: "Bootstrap",
          value: 50,
          color: "deep-purple"
        },
        {
          name: "PHP",
          value: 26,
          color: "blue"
        },
        {
          name: "Python",
          value: 12,
          color: "#283593"
        },
        {
          name: "Java",
          value: 8,
          color: "orange"
        }
      ]
    }
  },
  head(){
    return {
      title: "Skills"
    }
  }
}
</script>

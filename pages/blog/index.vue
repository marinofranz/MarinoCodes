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
        <p class="text-center">Blog Posts</p>
      </v-overlay>
    </v-img>

    <br>
    <v-divider></v-divider>
    <br>
    
    {{ articles }}

    <div>
      <v-card
        v-for="article in articles"
        :key="article"
        width="1400px"
        @click="$router.push(`/blog/posts/${article.slug}`)"
        dark
        hover
        style="margin-bottom: 20px;"
      >
        <v-img height="125px" :src="article.thumbnail"></v-img>

        <v-card-title>{{ article.title }}</v-card-title>
        <v-card-subtitle>{{ article.description }}</v-card-subtitle>
      </v-card>
    </div>
  </div>
</template>

<style scoped>

</style>

<script>
export default {
  async asyncData({ $content, params }){
    const articles = await $content(params.slug)
      .sortBy("createdAt", "asc")
      .fetch();

    return {
      articles
    }
  }
}
</script>

<template>
  <article>
    <v-img
      :src="article.thumbnail"
      max-height="275"
      max-width="100000000"
      class="rounded-lg"
    >
      <v-overlay
        :absolute="true"
        :value="true"
        :opacity="0.30"
      >
        <h1 class="text-center">{{ article.title }}</h1>
        <p class="text-center">{{ article.description }}</p>
      </v-overlay>
    </v-img>

    <br>

    <h2 style="margin-bottom: 11px;">Table of Contents</h2>
    <nav class="links-nav">
      <ul class="links">
        <li v-for="link of article.toc" :key="link.id">
          <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
        </li>
      </ul>
    </nav>

    <br>

    <v-divider></v-divider>
    <br>

    <nuxt-content class="post-content" :document="article"></nuxt-content>

    <v-divider></v-divider>
    <br>

    <v-tooltip right>
      <template v-slot:activator="{ on, attrs }">
        <p style="display: inline-block;" v-bind="attrs" v-on="on"><v-icon>mdi-calendar</v-icon> {{ $formatDate(article.createdAt) }}</p>
      </template>
      <span>Created At</span>
    </v-tooltip>

    <v-btn
      class="ma-2"
      outlined
      block
      @click="$router.push('/blog')"
    >Back to Blogs page</v-btn>
  </article>
</template>

<style>
  /*
  .icon.icon-link {
    background-image: url("/icon-hashtag.svg");
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 4px;
    background-size: 20px 20px;
    filter: brightness(1) invert(1);
    transition: 115ms ease-in-out;
  }

  .icon.icon-link:hover {
    opacity: 0.7;
  }
  */

  .post-content h1, .post-content h2, .post-content h3 {
    border-left: 3px solid rgb(26, 58, 146);
    line-height: 28px;
    padding-left: 9px;
    margin: 15px 0px;
  }

  .links-nav {
    display: inline-block;
    margin-bottom: 10px;
  }

  .links {
    list-style: none;
    padding: 0 !important;
  }

  .links li {
    margin-bottom: 15px;
  }

  .links li a {
    color: white;
    background: rgb(26, 58, 146);
    border-radius: 7px;
    text-decoration: none;
    padding: 5px 10px;
    transition: 100ms ease-in-out;
  }

  .links li a:hover {
    background: rgb(23, 42, 97);
  }
</style>

<script>
export default {
  async asyncData({ $content, params }){
    const article = await $content(params.slug).fetch();
    return {
      article,
    };
  },
  head(){
    return {
      title: this.article.title
    }
  }
}
</script>

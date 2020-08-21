<template>
  <div class="section">
    <div v-if="posts.length">
      <div 
        v-for="post in posts"
        :key="post.id"
        class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">{{ post.title }}</p>
            </div>      
          </div>
          <div class="content">
            {{ post.description }}
          </div>
          
          <div class="buttons">
            <p>{{ post.createdAt }}</p>
            <b-button icon-left="file-document-edit-outline" type="is-light">Изменить</b-button>
            <b-button icon-left="delete" type="is-light">Удалить</b-button>

<!--             <b-button icon-left="hand-okay" type="is-light">28</b-button> -->
          </div>
        </div>
      </div>
    </div>

    <p v-else class="subtitle is-4">Пока нет постов...</p>

  </div>
</template>

<script>
  export default {
    name: 'post',
    data() {
      return {}
    },
    methods: {},
    computed: {
      posts() {
        return this.$store.getters.posts
      }
    },
    mounted() {}
  }
</script>

<style>

</style>


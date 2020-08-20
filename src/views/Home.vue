<template>
  <div class="home">
    <div class="hero-body">
      <Post />

      <Pagination />
    </div>
  </div>
</template>

<script>
import Post from '@/components/Post.vue'
import Pagination from '@/components/Pagination.vue'

export default {
  name: 'Home',
  components: {
    Post,
    Pagination
  }
}
</script>

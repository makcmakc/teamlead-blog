<template>
  <div class="pagination">
    <nav class="pagination" role="navigation" aria-label="pagination">
      <a class="pagination-previous">Previous</a>
      <a class="pagination-next">Next page</a>
      <ul class="pagination-list">
        <li>
          <a class="pagination-link is-current" aria-label="Goto page 1">1</a>
        </li>
        <li>
          <a class="pagination-link" aria-label="Goto page 2">2</a>
        </li>
        <li>
          <a class="pagination-link" aria-label="Goto page 3">3</a>
        </li>    
        <li>
          <span class="pagination-ellipsis">&hellip;</span>
        </li>
        <li>
          <a class="pagination-link" aria-label="Goto page 86">10</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'pagination',
    data() {
      return {}
    },
    methods: {},
    computed: {},
    mounted() {}
  }
</script>

<style>

</style>
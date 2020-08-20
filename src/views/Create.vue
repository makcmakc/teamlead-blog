<template>
  <div class="create">
    <div class="card">
      <div class="card-content">
        <b-field label="Заголовок">
            <b-input placeholder="Введите заголовок поста..." v-model="title"></b-input>
        </b-field>

        <b-field label="Текст">
            <b-input maxlength="500" type="textarea"></b-input>
        </b-field> 

        <b-button icon-left="telegram" type="is-info">Отправить</b-button>       
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'create',
    data() {
      return {
        title: ''
      }
    },
    methods: {},
    computed: {},
    mounted() {}
  }
</script>

<style>

</style>
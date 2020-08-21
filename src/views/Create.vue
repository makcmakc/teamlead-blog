<template>
  <div class="section">
    <form class="box">
      <b-field label="Заголовок">
          <b-input placeholder="Введите заголовок поста..." v-model="title"></b-input>
      </b-field>

      <b-field label="Текст">
          <b-input maxlength="500" v-model="description" type="textarea"></b-input>
      </b-field> 

      <b-button icon-left="telegram" @click.prevent="submitHandler" type="is-info">Отправить</b-button> 
    </form>      
  </div>
</template>

<script>
  export default {
    name: 'create',
    data() {
      return {
        title: '',
        description: '',
        date: new Date()
      }
    },
    methods: {
      submitHandler() {
        const post = {
          title: this.title,
          description: this.description,
          id: Date.now(),
          claps: 0,
          createdAt: new Date().toLocaleDateString(),
          updateAt: this.date,
          userId: 1
        }
        this.$store.dispatch('CREATE_POST', post)
        this.$router.push('/')
      }
    },
    computed: {},
    mounted() {}
  }
</script>

<style>

</style>
 
<template>
  <div class="card">
    <div class="card-content">
      <b-field label="Email"
        type="is-danger"
        message="This email is invalid">
        <b-input
          type="email"
          value="john@"
          maxlength="30">
        </b-input>
      </b-field>

      <b-field label="Password">
        <b-input 
          type="password"
          value="iwantmytreasure"
          password-reveal>
        </b-input>
      </b-field>
      <b-button type="is-info">Login</b-button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
          name: 'John Silver'
      }
    }
  }
</script> 

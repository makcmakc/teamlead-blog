<template>
  <div class="container">
 <b-navbar>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Medium_logo_Wordmark_Black.svg/1200px-Medium_logo_Wordmark_Black.svg.png"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </b-navbar-item>
        </template>
<!--         <template slot="start">
            <b-navbar-item href="#">
                Home
            </b-navbar-item>
            <b-navbar-item href="#">
                Documentation
            </b-navbar-item>
        </template> -->

        <template slot="end">
            <b-navbar-item tag="router-link" :to="{ path: '/login' }">
                Login
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/create'}">
                Create
            </b-navbar-item>
        </template>
    </b-navbar>
  </div>
</template>

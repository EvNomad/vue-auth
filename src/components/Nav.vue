<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
    <div class="container-fluid">
      <router-link
        to="/"
        class="navbar-brand"
      >
      Vue Auth
      </router-link>
      <div class="text-end">
        <router-link
          to="/login"
          class="btn btn-outline-light me-2"
        >
        Login
        </router-link>
        <router-link
            to="/register"
            class="btn btn-warning"
        >
        Register
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
};
</script>

<style>

</style>

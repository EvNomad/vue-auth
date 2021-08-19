<template>
  <main class="form-signin">
    <form @submit.prevent="submitHandler">
      <h1 class="h3 mb-3 fw-normal">Please sign up</h1>

      <div class="form-floating mb-3">
        <input v-model="data.name" class="form-control" placeholder="John Hui" required>
        <label for="floatingInput">Name</label>
      </div>

      <div class="form-floating mb-3">
        <input v-model="data.email"
          type="email"
          class="form-control"
          placeholder="name@example.com"
          required
        >
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating">
        <input v-model="data.password"
          type="password"
          class="form-control"
          placeholder="Password"
          required
        >
        <label for="floatingPassword">Password</label>
      </div>
      <button
      class="w-100 btn btn-lg btn-primary"
      type="submit"
      >Sign up</button>
      <div class="mt-3 mb-3">
        <router-link to="/login" class="text-muted">Already have a user?</router-link>
      </div>
    </form>
  </main>
</template>

<script>
import { reactive } from 'vue';

export default {
  name: 'Register',
  setup() {
    const data = reactive({
      name: '',
      email: '',
      password: '',
    });

    const submitHandler = () => {
      console.log(data);
    };

    return {
      data,
      submitHandler,
    };
  },
};
</script>

<style>

</style>

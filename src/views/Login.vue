<template>
  <main class="form-signin">
    <form>
      <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

      <div class="form-floating mb-3">
        <input type="email" class="form-control" placeholder="name@example.com">
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating">
        <input type="password" class="form-control" placeholder="Password">
        <label for="floatingPassword">Password</label>
      </div>

      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"> Remember me
        </label>
      </div>
      <button
      class="w-100 btn btn-lg btn-primary"
      type="submit"
      >Sign in</button>
    </form>
  </main>
</template>

<script>
export default {
  name: 'Login',
};
</script>

<style>

</style>

<template>
  <header>
      <img class="logo" src="../img/logo.png" alt="logo.png">
  </header>
</template>

<script>
export default {
    name: "Header",
}
</script>

<style>
    header {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .logo {
        width: 200px;
    }
    @media only screen and (min-width: 600px) {
        .logo {
            width: 250px;
        }
    }
</style>
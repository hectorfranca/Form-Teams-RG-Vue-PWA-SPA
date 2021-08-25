<template>
  <div class="error-container">
      <span class="error-list --hidden">Lista inválida.</span>
  </div>
</template>

<script>
export default {
    name: "Error"
}
</script>

<style>
    .error-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .error-list {
        width: 264px;
        height: 30px;
        padding-top: 5px;
        color: var(--color-white);
        background-color: var(--color-darkred);
        text-align: center;
        font-size: 18px;
        border-radius: 5px;
    }
    @media only screen and (min-width: 600px) {
        .error-list {
            width: 500px;
        }
    }
</style>
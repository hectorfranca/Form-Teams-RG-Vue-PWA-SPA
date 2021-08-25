<template>
    <div class="loading-container --hidden">
        <div class="loading"></div>
    </div>
</template>

<script>
export default {
    name: "Loading"
}
</script>

<style>
    .loading {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        margin: auto;
        width: 80px;
        height: 80px;
        background: url("../img/loading_ball.png");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        animation: loading 800ms linear infinite reverse;
    }
    @keyframes loading {
        to {
            transform: rotate(0deg);
        }
        from {
            transform: rotate(360deg);
        }
    }
</style>
<template>
  <div id="app">
    <Header></Header>
    <Error></Error>
    <List></List>
    <Teams></Teams>
    <ShuffleButton></ShuffleButton>
    <Loading></Loading>
  </div>
</template>

<script>
  import Header from "./components/Header.vue";
  import List from "./components/List.vue";
  import Teams from "./components/Teams.vue";
  import ShuffleButton from "./components/ShuffleButton.vue";
  import Loading from "./components/Loading.vue";
  import Error from "./components/Error.vue";
  
  import "./styles/global.css";

export default {
  name: 'App',
  components: {
    Header,
    List,
    Teams,
    ShuffleButton,
    Loading,
    Error
  }
}
</script>

<style>
#app {

}
</style>

<template>
  <div class="wrapper">
    <text class="title">Hello icepy</text>
    <text class="subtitle" v-on:click="getClick">{{ link }}</text>
  </div>
</template>
<script>

  const modal = weex.requireModule('modal');
  const globalEvent = weex.requireModule('globalEvent');
  export default {
    name: 'home',
    data (){
      return {
        link: 'Going DingTalk To do Application'
      }
    },
    mounted (){

    },
    methods: {
      getClick: function(){
        this.$router.push('todoapp');
      }
    }
  }
</script>
<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 750px;
    height: 1100px;
    background-color: #f8f8f8;
  }
  .title {
    font-size: 60px;
    color: #505050;
    text-align: center;
  }
  .subtitle {
    display: block;
    font-size: 30px;
    color: #AAAAAA;
    text-align: center;
    margin-top: 20px;
  }
</style>

<template>
  <div class="wrapper">
    <text class="title" v-on:click="getClick">{{ link }}</text>
    <text class="subtitle">Hello icepy,i love your playground !!!</text>
  </div>
</template>
<script>
  import { setRight,toast } from '../../lib/util.js';

  export default {
    name: 'home',
    data (){
      return {
        link: 'Going DingTalk Todo List Application'
      }
    },
    created (){
      setRight({
        show: false
      });
    },
    mounted (){

    },
    methods: {
      getClick: function(){
        this.$router.push('list');
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

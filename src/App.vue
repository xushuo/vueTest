<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h2>{{title}}</h2>
    <input v-model="newItem" @keyup.enter="addView">
    <ul>
      <li v-for="item in items" v-bind:class="{finish:item.isFinished}" v-on:click="toggleFinish(item)">{{item.label}}</li>
    </ul>
  </div>
</template>

<script>
  import Store from './store';
  export default {
    data(){
      return {
        title : '待办事项',
        items : Store.fecth(),
        newItem : ''
      }
    },
    methods : {
      toggleFinish(item){
        item.isFinished = !item.isFinished;
      },
      addView(){
        if(this.newItem != ''){
          this.items.push({label : this.newItem, isFinished : false});
        }
        this.newItem = '';
      }
    },
    watch:{
      items:{
        handler(oldVal,newVal){
          Store.save(newVal);
        },
        deep:true
      }
    }
  }
</script>

<style>
  #app{
    font-family:'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing:antialiased;
    -moz-osx-font-smoothing:grayscale;
    text-align:center;
    color:#2c3e50;
    margin-top:60px;
    width:500px;
    margin:0 auto;
  }
  .finish{
    text-decoration:line-through;
  }
</style>

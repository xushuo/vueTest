<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div v-bind:id="'list-' + id">{{id}}</div>
    <Hello-child parentMsg="this is parent msg" v-on:childMsg="listenToChild"></Hello-child>
    <h4>子组件传值：{{childMsg}}</h4>
    <h2>{{title}}</h2>
    <h4>{{ computedMsg }}</h4>
    <p v-for="(val, key , index) in object">{{ index+" : "+key+" - "+val }}</p>
    <input v-model="newItem" @keyup.enter="addView">
    <ul>
      <li v-for="(item , index ) in items" v-bind:class="{finish:item.isFinished}" v-on:click="toggleFinish(item)">{{ index+' - ' }}{{ item.label | filter }}</li>
    </ul>
  </div>
</template>

<script>
  import Store from './store';
  import HelloChild from './components/Hello';
  export default {
    data(){
      return {
        id : 123,
        title : '待办事项',
        items : Store.fecth(),
        newItem : '',
        childMsg : '',
        object: {
          FirstName: 'John',
          LastName: 'Doe',
          Age: 30
        }
      }
    },
    computed:{
      computedMsg(){
          return this.newItem.split('').reverse().join('');
      }
    },
    filters:{
      filter(val){
        if(!val) return '';
        val=val.toString();
        return val.charAt(0).toUpperCase()+val.slice(1);
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
      },
      listenToChild(msg){
        this.childMsg = msg;
      }
    },
    watch : {
      items : {
        handler(oldVal, newVal){
          Store.save(newVal);
        },
        deep : true
      }
    },
    components : {
      HelloChild
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

<template>
  <div>
    <h3>{{msg}}</h3>
    <h4>父组件传递信息：{{parentMsg}}</h4>
    <button v-on:click="toParent">子传值</button>
  </div>
</template>

<script>
  export default {
    name : 'hello',
    props : ['parentMsg'],
    data () {
      return {
        msg : 'Welcome to Your Vue.js App '
      }
    },
    methods : {
      toParent(){
          this.$emit('childMsg',this.msg);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2{
    font-weight:normal;
  }
  ul{
    list-style-type:none;
    padding:0;
  }
  li{
    display:inline-block;
    margin:0 10px;
  }
  a{
    color:#42b983;
  }
</style>

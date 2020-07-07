<template>
  <div id="app">
    <div class="navbar">
      <button id="random-button" @click="generateQuote">Random</button>
      <span class="material-icons" @click="generateQuote">
      autorenew
      </span>
    </div>
    <QuoteGenerator v-if="isGenerated"/>

    <footer>
      Arnel Joshua O. Payongayong @ DevChallenges.io
    </footer>
  </div>
</template>

<script>

import QuoteGenerator from './components/QuoteGenerator.vue'
import {bus} from './main.js';

const axios = require('axios').default;

export default {
  name: 'App',
  data(){
    return{
      isGenerated : false
    }
  },
  components: {
    QuoteGenerator
  },
  methods : {
    generateQuote(){
      axios.get('https://quote-garden.herokuapp.com/api/v2/quotes/random').then(response => {
          bus.$emit('sample',response.data)
      })
      this.isGenerated = true;
    }
  },
}
</script>

<style>
html,body{
  height:100%;
  padding:0;
  margin:0;
  font-family: 'Raleway';
}
*{
  box-sizing:border-box;
}
#app {
  width:100%;
  height:100%;
}
.navbar {
  position: fixed;
  display: flex;
  align-content: flex-end;
  justify-content: flex-end;
  margin-right: 20px;
  margin-top: 20px;
  right: 5px;
  top: 1%;
}
#random-button {
  border: none;
  background-color: transparent;
  color: black;
  font-family: 'Raleway';
}

.material-icons {
  font-size: 20px;
  color: black;
  background: transparent;
}
footer{
  position: fixed;
  bottom: 5px;
  text-align:center;
  width: 100%;
  color: white;
  background-color: #2c3e50;
  padding: 25px;
}
</style>

<template>
  <div id="app">
    <Header/>
    <Main/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer
  }
}
</script>

<style>
#app {
  height:100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

@font-face {
 font-family: "La-Belle-Aurore";
 src: url("~@/assets/font/La-Belle-Aurore.ttf") format("truetype");
}

*{
    color:rgb(228, 228, 228);
    text-decoration: none;
    list-style-type: none;
    font-size: 1.1rem;
}


p{
  margin:0;
}

/*
h1::before, h2::before, h1::after, h2::after{
  color:#626262;
  font-family: 'La-Belle-Aurore';
  font-weight: 500;
  font-size:1.5rem;
    position:relative;
  text-shadow: 2px 2px 3px rgba(21, 8, 15, 0);
}

h1::before{
  content: "<h>";
    left:-20px;
}

h1::after{
  content: "</h>";
    left:20px;
}

h2::before{
  content: "<h2>";
    left:-20px;
}

h2::after{
  content: "</h2>";
    left:20px;
}
*/
html, body{
  width:100%;
  height:100%;
  margin:0;
  padding:0;
}
h1,h2,h3,h4,h5,h6{
    color:white;
}

h2{
  padding:20px;
  font-size:2rem;
  text-shadow: 2px 2px 3px rgba(21,8,15,0.50);
}

body{
  width:100%;
  height:100%;
  background-color:#455a75;
  /*background-color:#000e2c;*/
  /*background: linear-gradient(-45deg, #040b2c, #000);*/
  background-size: 400% 400%;
  background-attachment: fixed;
	animation: gradient 30s ease infinite;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

.container{
  width:1280px;
  margin:auto;
}

@media (max-width: 1280px) {
  .container{
    width:calc(100% - 40px);
    margin-left:20px;
    margin-right:20px;
  }
}

</style>

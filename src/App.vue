<template>
  <div id="app">
    <div id="container">
      <Header/>
      <Main/>
    </div>
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

*{
    color:white;
    text-decoration: none;
    list-style-type: none;
    margin:0;
    padding:0;
}

p{
  font-size: 1.1rem;
  margin:0;
}

html, body{
  width:100%;
  height:100%;
  margin:0;
  padding:0;
}

h2{
  padding:20px;
  font-size:2rem;
  text-shadow: 2px 2px 3px rgba(21,8,15,0.50);
}

body{
  width:100%;
  height:100%;
  background-color:#000e2c ;
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

#container{
  width:1080px;
  margin:auto;
}

@media (max-width: 1080px) {
  #container{
    width:calc(100% - 40px);
    margin-left:20px;
    margin-right:20px;
  }
}

</style>

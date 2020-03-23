<template>
  <div id="app">
    <div id="container">
      <Header/>
      <Main/>
      <Footer/>
    </div>
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

body{
  width:100%;
  height:100%;
  background: linear-gradient(-45deg, #152775,rgb(28, 41, 47));
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

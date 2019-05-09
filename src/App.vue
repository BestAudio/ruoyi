<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import RyLogin from "./pages/ry-login"
export default {
  name: 'App',
  components:{
    RyLogin
  }
}
</script>

<style>
#app {
    height: 100%;
    width: 100%;
}
body,p,dl,dd,ul,ol,li,div,h1,h2,h3,h4,h5,h6,form,input,table,tr,td{
	margin:0;
	padding:0;
}
html,body{
	height: 100%;
}
body{
    font-family: "open sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 13px;
}
ul,ol{
	list-style:none;
}
img{
	border: 0;
}
a{ 
    text-decoration: none;
    color: #000;
}
body::-webkit-scrollbar{
    width: 6px;
    background-color: rgba(241, 24, 24,.1);
}
</style>

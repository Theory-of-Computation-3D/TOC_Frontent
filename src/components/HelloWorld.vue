<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <body>
    <header>
      <nav>
        <ul>
          <div class="name">
            <h1>WAT DAI</h1>
          </div>
          <li><a href="#path" class="menu">นครศรีธรรมราช</a></li>
          <li><a href="#path" class="menu">นครสวรรค์</a></li>
          <li><a href="#path" class="menu">นนทบุรี</a></li>
          <li><a href="#path" class="menu">นราธิวาท</a></li>
          <li><a href="#path" class="menu">อุทัยธานี</a></li>
          
        </ul>
      </nav>
    </header>

    <main>
      <h1>Hello</h1>
    </main>
    
  

  </body>

  
</template>

<style scoped>

* {
  
  margin: 0;
  padding: 0;
  /* font-family: monospace; */
  /* left: 0%; */
  box-sizing: border-box;
}

header {
  width: 100%;
  height: 50px;
  background-color: #03204C;  
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  position: relative;
  top: 0;
  margin: 0%;
  
}

nav {
  width: 100%;
  height: fit-content;
}

body{
  margin:0;
}

ul {
  display: flex;  
  justify-content: space-between;
}

.menu {
  list-style: none;
  display: inline-block;
  padding: 18px;
  /* color: #FFFFFF; */
  margin-right: 50px;
  margin-left: 50px;
}
ul li
{
    list-style-type: none;
}

a {
  text-decoration: none;
}

nav > ul {
  display: flex;
  /* justify-content: space-evenly; */
  flex-wrap: wrap;
  align-items: center;
  padding-inline-start: 0;
  margin-block: 0;
  height: 100%;}
nav > ul {
  display: flex;
  /* justify-content: space-evenly; */
  flex-wrap: wrap;
  align-items: center;
  padding-inline-start: 0;
  margin-block: 0;
  height: 100%;
}

nav > ul > li {
  color: #dfdfe2;

  display: block;
}

nav > ul > li:hover {
  background-color: #dfdfe2;
  color: #035C96;
  cursor: pointer;
  border-radius: 8px;
} 

li > a {
  color: #dfdfe2;
  text-decoration: none;
}  
a:hover{
  color: #03204C;
  
}
.name {
  /* justify-content: center; */
  text-align: center;
  width: 200px;
  color: #f1be32;
  /* background-color: #FFFFFF; */
  font-size: min(5vw, 1.2em);
}

main{
  /* padding-top: 50px; */
  background-color: #035C96;
  width: 100%;
  position: static;
  left: 0%;
}


</style>

<script lang="ts">
import { getJson } from "serpapi";
export default {
  inject: ['select'],
  data() {
    return {
      loading: false,
      error: null,
      amount: 0,
      pageSet: 1,
      pageCount: 1,
      //ตัวแปรข้อมูล
      post: [],
      current_temple:'วัดชลธาราสิงเห'
    }
  },
  methods: {
    getData() {
      fetch('http://127.0.0.1:7800/api/select'+this.select, {
      method: 'GET',
      headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer',
      },
    })
      .then(response => response.json())
      .then(data => this.post = data)
      .then(data => this.amount = data.length)
      
    },
    getImage() {
      
    },
    setPageCount(number:number) {
      this.pageCount = number
    },
    next() {
      if( 1+(6*this.pageSet) <= Math.round(this.amount/6) ){
        this.pageSet += 1
      } 
      // this.pageSet += 1
    },
    back() {
      if(this.pageSet > 1){
        this.pageSet -= 1
      }
    },
  },
  created() {
    this.getData()
    console.log(this.select)
  },
}
</script>

<template>
  <div class="view">
    <div class="list-box">
      <li v-for="i in 6" >
        {{post[(i-1)+(6*(pageCount-1))]}}
      </li>
    </div>
    <div class="detail">
      {{ amount }} ..{{1 + (6*(pageSet-1))}}..{{(pageSet+1)*6}}..{{ Math.round(amount/6) }}
    </div>
  </div>
  <div class="page-number">
    <button class="page-set" v-on:click="back()">
      back
    </button>
    <button class="page-btn" v-for="number in 6" v-on:click="setPageCount(number + (6*(pageSet-1)))">
      {{ number + (6*(pageSet-1)) }}
    </button>
    <button class="page-set" v-on:click="next()">
      next
    </button>
  </div>
</template>

<style scoped>
.view {
  width: 100%;
  height: 561.6px;
  display: flex;
  flex-direction: columns;
  justify-content: space-evenly;
  align-items: center;
  outline: gray solid 1px;
}

.list-box {
  width: 500px;
  height: fit-content;
  /* outline: red solid 1px; */
}

.detail{
  width: 500px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
}

img {
  width: 50px;
  height: 50px;
}

li {
  width: 400px;
  height: 75px;
  color: #03204C;
  background-color: azure;
  border: #03204C solid 1px;
  margin-bottom: 30px;
  padding: 25px;
  display: flex;
  align-items: center;
  border-radius: 25px;
  transition: 500ms;
  margin: 15px;
}

li:hover {
  /* color: white; */
  background-color: #B3CEE1;
  border: white solid 1px;
}

.page-number {
  height: 80px;
  width: 25dvw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.page-btn {
  width: fit-content;
  height: fit-content;
  font-size: larger;
  color: white;
  background-color: #03204C;
  border-radius: 8px;
  transition: 1ms;
}

.page-set{
  width: fit-content;
  height: fit-content;
  font-size: large;
  color: white;
  background-color: #03204C;
  border-radius: 8px;
  transition: 1ms;
}

</style>
<script lang="ts">
import { getJson } from "serpapi";
export default {
  inject: ['select','downloadURL'],
  data() {
    return {
      done: false,
      error: null,
      amount: 0,
      pageSet: 1,
      pageCount: 1,
      d_url: '',
      //ตัวแปรข้อมูล
      post: [],
      current_temple:'',
      image:{query:{}, relate_searches:[], image_results:[{
            "position": 1,
            "thumbnail": '',
            "sourceUrl": '',
            "title": '',
            "link": '',
            "source": ''},]},
      url: '',
      API_KEY:'c522dc80-e132-11ed-b1b2-3d17b82d536b',
    }
  },
  methods: {
    getData() {
      try {
        fetch('http://34.128.112.4:7800/api/select'+this.select, {
        method: 'GET',
        headers: {
                  'Content-Type': 'application/json',
                  'Authorization': 'Bearer',
          },
        })
        .then(response => response.json())
        .then(data => this.post = data)
        .then(data => this.amount = data.length)  
      } catch (error) {
        console.log('Error cannot fetch!!')
      }
    },
    async getImage() {
      try {
        await fetch('https://app.zenserp.com/api/v2/search?apikey='+this.API_KEY+'&q='+this.current_temple+'&tbm=isch', {
        method: 'GET'})
        .then(response => response.json())
        .then(data_image => this.image = data_image)
        .then(data_image => this.url = data_image.image_results[1].sourceUrl)
        .then(data_image => console.log(data_image))
        this.done = true
      } catch (error) {
        console.log('Error cannot fetch!!')
      }
    },
    setPageCount(number:number) {
      this.pageCount = number
      return this.pageCount
    },
    next() {
      if( 1+(6*this.pageSet) <= Math.round(this.amount/6) ){
        this.pageSet += 1
      } 
    },
    back() {
      if(this.pageSet > 1){
        this.pageSet -= 1
      }
    },
  },
  mounted() {
    this.getData()
    console.log(this.select)
    this.d_url = this.downloadURL
    console.log(this.downloadURL)
  },
  watch: {
    current_temple(newTemple,oldTemple){
      this.getImage()
    }
  },
}
</script>

<template>
  <div class="view">
    <div class="list-box">
      <li v-for="i in 6" v-on:click="current_temple = post[(i-1)+(6*(pageCount-1))]">
        {{post[(i-1)+(6*(pageCount-1))]}}
      </li>
    </div>
    <div class="detail">
      <div class="image">
        <img v-if="done != false" ref="t_img" v-bind:src=url alt=temple>
      </div>
      <div class="download">
        <h3>พบวัดทั้งหมด {{amount}} แห่ง</h3>
        <a v-bind:href=d_url target="_blank">Download CSV</a>
      </div>
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
  outline: whitesmoke solid 0.5px;
}

.list-box {
  width: 500px;
  height: fit-content;
}

.detail{
  width: 500px;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.image {
  width: 400px;
  height: 60%;
  background-color:whitesmoke;
  border-radius:20px;
}

img {
  width: 400px;
  height: 100%;
  object-fit: cover;
  border-radius:20px;
}

.download {
  width: 400px;
  height: 10%;
  background-color: transparent;
  display:flex;
  flex-direction:row;
  justify-content:space-between;
}

.download h3 {
  color:white;
  font-weight:lighter;
}

.download a {
  display: inline-block;
  padding: 15px 20px;
  text-align: center;
  text-decoration: none;
  font-size: 20px;
  border-radius: 5px;
  color: #03204C;
  outline: #03204C solid 1px;
  background-image:linear-gradient(to left,white,white 50%,#03204C 50%,#03204C);
  background-position: 100% 0;
  background-size: 200% 100%;
  transition: all .25s ease-in;;
}

.download a:hover{
  background-position: 0 0;
  color: white;
  outline: white solid 1px;
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
  user-select: none; 
  cursor: pointer;
}

li:hover {
  /* color: white; */
  background-color: #B3CEE1;
  border: white solid 1px;
}

.page-number {
  height: 80px;
  width: 30dvw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* outline:red solid 1px; */
}

.page-number button{
  width: 50px;
  height: 50px;
  background-color: #03204C;
  border-radius: 25px;
  color: white;
  transition: 500ms;
  font-size: larger;
}

.page-number button:hover{
  color: #03204C;
  background-color:#B3CEE1;
}

.btn-active {
  color: #03204C;
  background-color:#B3CEE1;
}

.page-set{
  font-size: large;
}

</style>
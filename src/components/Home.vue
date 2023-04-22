<script setup lang="ts">
import Member from './Member.vue';
import cartoon from "./assets/cartoon.png";
</script>

<template>
  <div class ="detail">
    <div class="lDetail">
      <img  class="pictemple" src="https://cdn.pixabay.com/photo/2019/07/01/11/44/chaingmai-4309820__340.jpg" alt="">
    </div>
    <div class="rDetail">
      <h1 class="textWat">WATDAI</h1>
      <h2 class="textAnoter">ค้นหาวัดที่คุณชื่นชอบ<br>แล้วไปวัดกันได้เลย!</h2>
      <div class="bodypic">
        <img class="picgiant" src="https://cdn.pixabay.com/photo/2019/10/10/11/53/giant-4539413__340.jpg" alt="sdfsd">  
      </div>
      
    </div>
  </div>

  <div class="team-text">
    <h1>ทีมงาน</h1>
  </div>
  <div class="members">
    <Member msg=""/>
  </div>
 
</template>

<style scoped>
h2 {
  color: rgb(25, 136, 221);
  background-color: transparent;
}
.team-text {
  width: inherit;
  padding-top: 10%;
  padding-bottom: 5%;
  text-align: center;
  color: white;
}
.members{
  /* padding-top: 10%; */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color:  transparent;
}
.detail{
  display: flex;
  /* height: 1em; */
  /* background-color: #B3CEE1; */
  background-color: transparent;
}
.lDetail{
  text-align: center;
  width: 50%;
  padding-top: 7% ;
  background-color: transparent;
}
.rDetail{
  /* text-align: right; */
  padding-left: 5%;
  width: 50%;
  padding-top: 5% ;
}
.textWat{
  font-size: 80px;
  height: 70px;
  color: white;
}
.textAnoter{
  font-size: 50px;
  color: white;
}
 .pictemple {
  width: 80%;
  border-radius: 10%;
}
.bodypic{
  margin-top: 2%;
  /* background-color: red; */
  text-align: right;
  margin-right: 16%;
}
.picgiant{
  width: 50%;
  border-radius: 8%;
}

</style>

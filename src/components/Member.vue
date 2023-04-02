<script setup lang="ts">
</script>

<template>
  <div>
    <div class="grid-container">
      <div class="cardname">
        <div class="circle" ><img src= "https://media.discordapp.net/attachments/874865268709527584/1087659468331950133/image.png?width=460&height=518" alt="person1" ></div>
        <h3>ชื่อ: ชินพัฒน์ ศิริยาใจ</h3>
        <h4 class="jobmember">รหัส: 63010231</h4>
        <p class="jobmember">หน้าที่: Frontend</p>
      </div>
      <div class="cardname">
        <div class="circle"><img src="https://media.discordapp.net/attachments/1087656031296966746/1087659631314219038/2.jpg?width=611&height=670" alt="person2" ></div>
        <h3>ชื่อ: ณภัทร จิรารัตนกุลชัย</h3>
        <h4 class="jobmember">รหัส: 63010279</h4>
        <p class="jobmember">หน้าที่: Frontend</p>
      </div>
      <div class="cardname">
        <div class="circle"><img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/334414947_1375856073209787_1540111623284317173_n.jpg?stp=dst-jpg_p370x247&_nc_cat=102&ccb=1-7&_nc_sid=aee45a&_nc_ohc=04ZIhrs_drYAX-nEKhQ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTdUCPuCzAIUFM2faJMD9WAMWJS3x-hIykMTZbXyLPqiA&oe=6440BF8B"></div>
        <h3>ชื่อ: ทิวัตถ์ โพธิ์ครี</h3>
        <h4 class="jobmember">รหัส: 63010382</h4>
        <p class="jobmember">หน้าที่: Frontend</p>
      </div>
    </div>
    <div class="grid-container">
      <div class="cardname">
        <div class="circle"><img src="https://media.discordapp.net/attachments/835075849719775302/1087667292776693780/IMG_20230321_162118.jpg?width=606&height=670" alt="person2" ></div>
        <h3>ชื่อ: บูรพา ทิมแดง</h3>
        <h4 class="jobmember">รหัส: 63010548</h4>
        <p class="jobmember">หน้าที่: Frontend</p>
      </div>
      <div class="cardname">
        <div class="circle"><img src="https://media.discordapp.net/attachments/835075849719775302/1087663643841273937/IMG_20230321_160654.jpg?width=607&height=670"></div>
        <h3>ชื่อ: พชรพล จารุวนาวัฒน์</h3>
        <h4 class="jobmember">รหัส: 63010630</h4>
        <p class="jobmember">หน้าที่: Frontend</p>
      </div>
      <div class="cardname">
        <div class="circle"><img src="https://media.discordapp.net/attachments/1087652502247309312/1087671764647153674/IMG_20230321_163905.jpg?width=573&height=670"></div>
        <h3>ชื่อ: จิรภัทร แก้วส่งส่งแสง</h3>
        <h4 class="jobmember">รหัส: 63010139</h4>
        <p class="jobmember">หน้าที่: Backend</p>
      </div>
    </div>
    <div class="grid-container">
      <div class="cardname">
        <div class="circle2"><img src="https://media.discordapp.net/attachments/835075849719775302/1087667556384505886/image0-1-1.jpg?width=670&height=670"></div>
        <h3>ชื่อ: ชญานิน เลียงจินดาถาวร</h3>
        <h4 class="jobmember">รหัส: 63010177</h4>
        <p class="jobmember">หน้าที่: Backend</p>
      </div>
      <div class="cardname">
        <div class="circle2"><img src="https://media.discordapp.net/attachments/1087652502247309312/1087671980372787210/IMG_20230321_163959.jpg?width=587&height=670" alt="person2"></div>
        <h3>ชื่อ: ฐานพัฒน์ สิทธิพรชัยสกุล</h3>
        <h4 class="jobmember">รหัส: 63010256</h4>
        <p class="jobmember">หน้าที่: Backend</p>
      </div>
      <div class="cardname">
        <div class="circle2"><img src="https://media.discordapp.net/attachments/1087652502247309312/1087668790227128320/IMG_5553.png?width=690&height=670"></div>
        <h3>ชื่อ: ธรณินท์ พงษ์สถิตย์พร</h3>
        <h4 class="jobmember">รหัส: 63010445</h4>
        <p class="jobmember">หน้าที่: Backend</p>
      </div>
    </div>
    <div class="grid-container2">
      <div class="cardname">
        <div class="circle2"><img src="https://media.discordapp.net/attachments/874865268709527584/1087653953442938910/FB_IMG_1679387163587.jpg?width=676&height=670"></div>
        <h3>ชื่อ: นาวีวัฒน์ พฤกพัฒนาชัย</h3>
        <h4 class="jobmember">รหัส: 63010522</h4>
        <p class="jobmember">หน้าที่: Backend</p>
      </div>
      <div class="cardname">
        <div class="circle2"><img src="https://media.discordapp.net/attachments/1087652502247309312/1087669179374633060/IMG_20230225_192621.jpg?width=502&height=670"></div>
        <h3>ชื่อ: ภาสกร คงบุญเกียรติ</h3>
        <h4 class="jobmember">รหัส: 63010750</h4>
        <p class="jobmember">หน้าที่: Backend</p>
      </div>
    </div>
  </div>      
</template>

<style scoped>

*{
  background-color: transparent;
}
.cardname {
  width: 300px;
  height: 350px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}
.circle2 img{
  background-position: center;
  background-size: cover;
  width: 200px;
  height: 200px;
  border-style: solid;
  border-width: 0.15rem;
}
.circle img{
  background-position: center;
  background-size: cover;
  width: 200px;
  height: 200px;
  border-style: solid;
  border-width: 0.15rem;
}
.circle2:hover{
  scale: 1.1;
  transition: 0.5s;
}
.circle:hover{
  scale: 1.1;
  transition: 0.5s;
}
button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

.card {
  padding: 2em;
}

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
}

.read-the-docs {
  color: #888;
}
.circle {
  height: 200px;
  width: 200px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  gap: 50px;
}
.circle2 {
  height: 200px;
  width: 200px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  gap: 50px;
}
.circle:hover{
  filter: drop-shadow(0 0 2em #07f21baa);
}
.circle2:hover{
  filter: drop-shadow(0 0 2em #ff0f57aa);
}
.grid-container {
  border: none;
  background-color: transparent;
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 80px;
}
.grid-container > div {
  border: none;
  background-color: transparent
}
.grid-container2{
display: flex;
justify-content: space-evenly;
gap: 80px;
}
.jobmember{
margin-top: -20px;
}
img{
  border-radius: 80%;
}
</style>
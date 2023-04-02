<script setup lang="ts">
import Member from './Member.vue';
</script>

<template>
  <div class="intro">

  </div>
  <h2>รายชื่อสมาชิกกลุ่ม</h2>
  <div class="members">
    <Member msg=""/>
  </div>
</template>

<style scoped>
h2 {
  color: rgb(25, 136, 221);
}
.members{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}

</style>

<script setup lang="ts">
import Member from './Member.vue';
</script>

<template>
  <div class="intro">

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
.members{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color:  #B3CEE1;
}

</style>

<script lang="ts">
import TempleList from './TempleList.vue';
export default {
  components: {TempleList},
  provide() {
    return {
      select:'?Select(number)=3',
      downloadURL: 'http://127.0.0.1:7800/api/download?Select(number)=3',
    }
  }
}
</script>

<template>
  <div>
    <TempleList/>
  </div>
</template>

<style scoped>
*{
  background-color: #03204C;
  margin: 0%;
}
div {
  width: inherit;
  height: 641.6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 0%;
  padding-bottom: 0%;
}
</style>
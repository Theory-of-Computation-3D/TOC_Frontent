<script lang="ts">
export default {
  data() {
    return {
      loading: false,
      error: null,
      //ตัวแปรข้อมูล
      post: {fact:'',length:''}
    }
  },
  methods: {
    getData() {
      fetch("http://127.0.0.1:8000/api/")
      .then(response => response.json())
      .then(data => this.post = data)  
    }
  },
  created() {
    this.getData()
  
  }
}

</script>

<template>
  <div class="view">
    <div class="list-box">
      <h2>{{ post }}</h2>
    </div>
    <div class="button-box">
      <button @click="getData()">Export CSV</button>
    </div>
  </div>
</template>

<style scoped>

.view {
  display: flex;
  flex-direction: column;
  padding: 0%;
}

h2 {
  margin: 0%;
}

.list-box {
  width: 800px;
  height: 400px;
  padding:4rem;
  background-color: white;
}

.button-box {
  width: 100dvw;
  height: fit-content;
  padding-top: 8rem;
  padding-right: 8rem;
  display: flex;
  flex-direction: row-reverse;
}

button {
  width: 240px;
  height: 60px;
  font-size: larger;
  color: white;
  background-color: #03204C;
  border-radius: 8px;
  transition: 1ms;
}

button:hover {
  color: #03204C;
  background-color: white;
}

</style>
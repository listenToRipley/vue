<script>
</script>

<template>
  <div class="container">
    <header>
      <h1>Quiz</h1>
      <input 
        type="text"
        placeholder="Search...">
    </header>
  
  <div class="options-cards">
    <div class="card">
      <img src="" alt="">
      <div class="card-text"></div>
      <h1>Subject</h1>
      <p>#Questions</p>
    </div>
  </div>
  </div>

</template>

<style scoped>

.container {
  max-width: 1000px;
  margin: 0 auto;
}

header {
  margin-bottom: 10px;
  margin-top: 30px;
  margin-left: 20px;
  display: flex;
  align-items: center;
}

header h1 {
  font-weight: bold;
  margin-right: 30px;
}

header input {
  border: none;
  background-color: rgba(128, 128, 128, 0.1);
  padding: 10px;
  border-radius: 5px;
}

/* CARD SECTION */

.options-cards {
  display: flex;
  flex-wrap: wrap;
  margin-left: 25px;
  margin-top: 40px;
}

.card {
  width: 310px;
  overflow: hidden;
  border-radius: 2%;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 35px;
  margin-right: 20px;
  cursor: pointer;
}

.card img {
  width: 100%;
  height: 190px;
  margin: 0;
}

.card .card-text {
  padding: 0 5px;
}

.card .card-text h2 {
  font-weight: bold;
}

</style>
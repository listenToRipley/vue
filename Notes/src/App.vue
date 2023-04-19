<script setup>
  import {ref} from "vue";

  const showModal = ref(false);
  const newNote = ref("");
  const notes = ref([]);
  const errorMsg = ref("");

  const getRandomColor = () => {
    return "hsl(" + Math.random() * 360 + ", 100%, 75%)";
  }

  const addNote = () => {

    if (newNote.value.length < 10) {
      return errorMsg.value = "Note must be 10 characters or more"
    } else {
      notes.value.push({
      id: Math.floor(Math.random() * 100000),
      text: newNote.value,
      date: new Date(),
      backgroundColor: getRandomColor()
    });

    showModal.value = false;
    newNote.value =""; 
    }
  };

</script>

<template>
  <main>

    <div v-if="showModal" class="overlay">
      <div class="modal">
        <!-- {{ newNote }} -->
        <textarea 
          v-model.trim="newNote" 
          name="notes" 
          id="notes"
        ></textarea>
        <p class="error" v-if="errorMsg">{{ errorMsg }}</p>
        <button @click="addNote">Add Note</button>
      </div>
    </div>

    <div class="container">
      <header>

        <h1>
          Notes
        </h1>
        <button id="createNoteBtn" @click="showModal = true">
          +
        </button>
      </header>
    </div>

    <div class="cards-container">
      <div 
        v-for="note in notes" 
        :key="note.id"
        class="card" 
        :style="{ backgroundColor: note.backgroundColor }"
        >
        <p class="main-text">{{ note.text }}</p>
        <p class="date">{{ note.date }} </p>
      </div>

    </div>
  </main>
</template>

<style scoped>
.container {
    max-width: 1000px;
    padding: 10px;
    margin: 0 auto
  }

h1 {
    font-weight: bold;
    margin-bottom: 25px;
    font-size: 75px;
  }

.card {
    width: 225px;
    height: 225px;
    background-color: rgb(237, 182, 44);
    padding: 10px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 20px;
    margin-bottom: 20px;
  }

.main-text {
    line-height: 1.25;
    font-size: 17.5px;
    font-weight: bold;
  }

.date {
    font-size: 12.5px;
    margin-top: auto;
  }
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

header button {
    border: none;
    padding: 10px;
    width: 50px;
    height: 50px;
    cursor: pointer;
    background-color: rgb(21, 20, 20);
    border-radius: 1000px;
    color: white;
    font-size: 20px;
  }

.cards-container {
    display: flex;
    flex-wrap: wrap;
  }

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.77);
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
  }

main {
    height: 100vh;
    width: 100vw;
  }

.modal {
    width: 750px;
    background-color: white;
    border-radius: 10px;
    padding: 30px;
    position: relative;
    display: flex;
    flex-direction: column;
  }

.modal button {
    padding: 10px 20px;
    font-size: 20px;
    width: 100%;
    background-color: blueviolet;
    border-radius: 5px;
    border: none;
    color: white;
    cursor: pointer;
    margin-top: 15px;
  }

.error {
    margin-left: auto;
    font-size: 20px;
    z-index: 100000;
    cursor: pointer;
    color: red;
  }

textarea {
    width: 100%;
    height: 200px;
    padding: 5px;
    font-size: 20px;
  }

</style>
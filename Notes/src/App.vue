<script setup>
  import {ref} from "vue";

  const showModal = ref(false);
  const newNote = ref("");
  const notes = ref([]);

  const getRandomColor = () => {
    return "hsl(" + Math.random() * 360 + ", 100%, 75%)";
  }

  const addNote = () => {
    notes.value.push({
      id: Math.floor(Math.random() * 100000),
      text: newNote.value,
      date: new Date(),
      backgroundColor: getRandomColor()
    });

    showModal.value = false;
    newNote.value ="";
  };

</script>

<template>
  <main>

    <div v-if="showModal" class="overlay">
      <div class="modal">
        <!-- {{ newNote }} -->
        <textarea v-model="newNote" name="notes" id="notes"></textarea>
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

<style scope>

main {
  height: 100vh;
  width: 100vw;
  padding: 20px;
}

.container {
  max-width: 1000px;
  padding: 10px;
  margin: 0 auto;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h1 {
  font-weight: bold;
  margin-top: 25px;
  font-size: 75px;
}

#createNoteBtn {
  border: none;
  padding: 10px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  background-color: rgb(21, 20, 20);
  border-radius: 100%;
  color: white;
  font-size: 20px;
}

.card {
  width: 225px;
  height: 225px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
  margin-bottom: 20px;
}

.main-text {
  margin-top: 5px;
  margin-left: 10px;
}

.date {
  font-size: 12.5px;
  font-weight: bold;
  margin: 10px;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  padding: 1%;
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.77);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
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
  border: none;
  color: white;
  cursor: pointer;
  margin-top: 15px;
  border-radius: 5px;
}

textarea {
  width: 100%;
  height: 200px;
  padding: 5px;
  font-size: 20px;
}

</style>
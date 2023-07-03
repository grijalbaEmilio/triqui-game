<script setup lang="ts">
import { ref, reactive } from 'vue';
import { Turn } from './model/Turn'
import { Board as BoardClass } from './model/Board'

import Board from './components/Board.vue';
import FlagTurn from './components/FlagTurn.vue';

let board: BoardClass = reactive(new BoardClass());
let turn: Turn = reactive(new Turn());
let showWinner = ref(true);


</script>

<template>
  <div class="winner" v-if="board.haveWinner() && showWinner">
    <h1 class="title">El Ganador es:</h1>
    <span class="square-winner">{{ turn.turn }}</span>
    <div class="buttons">
      <button @click="() => { showWinner = false; board.clearBoard(); showWinner = true }"> Nueva Partida </button>
      <button @click="() => showWinner = false"> Revisar Partida </button>
    </div>
  </div>

  <div v-else class="wrapper">
    <h1 class="title">Vamoajugar Triqui</h1>

    <div class="info">
      <FlagTurn v-if="!board.haveWinner() && !board.haveTie()" :turn="turn" />
      <button v-else class="new-game" @click="() => { board.clearBoard(); showWinner = true }">
        Nueva Partida
      </button>
    </div>

    <Board :turn="turn" :board="board" />
  </div>
</template>

<style scoped>
button {
  height: 44px;
  border-radius: 3rem;
  border: none;
  font-family: unset;
  font-size: xx-large;

  display: flex;
  justify-content: center;
  align-items: center;
}

.winner {
  position: fixed;
  top: 5%;
  left: 5%;
  height: max-content;
  width: 90vw;
  display: grid;
  grid-template-rows: 1fr 4fr 2fr;
  justify-items: center;
  background-color: var(--color-background-square);
  border-radius: 20px;
}

.winner .square-winner {
  font-size: 250px;
}

.winner .buttons {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 220px;
}

.winner .buttons button {
  margin: 10px 0;
  background-color: var(--color-warning);
  color: var(--color-text);
}

.wrapper {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 30% 10% 40%;
  justify-items: center;
  row-gap: 20px;
  overflow: hidden;
}

.title {
  font-weight: 400;
  font-size: 64px;
  width: 300px;
  text-align: center;
}

.info .new-game {
  background-color: var(--color-warning);
  color: var(--color-text);
  width: auto;
  padding: 0 40px;
}

@media (min-width: 900px) {
  .title {
    width: auto;
  }

  .winner {
    width: 800px;
    left: calc(50% - 400px);
    height: 90%;
  }

}
</style>

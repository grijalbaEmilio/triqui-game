<script setup lang="ts">
import { ref, reactive } from 'vue';
import { Turn } from './model/Turn'
import { Board as BoardClass } from './model/Board'

import Board from './components/Board.vue';
import FlagTurn from './components/FlagTurn.vue';
import Winner from './components/Winner.vue';

let board: BoardClass = reactive(new BoardClass());
let turn: Turn = reactive(new Turn());
let showWinner = ref(true);


</script>

<template>
  <Winner v-if="board.haveWinner() && showWinner" :board="board" :turn="turn" @hidden-winner="showWinner = false">
  </Winner>

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

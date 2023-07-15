<script setup lang="ts">
import { onMounted } from 'vue'
import { Board } from '@/model/Board'
import { Turn } from '@/model/Turn'

import JSConfetti from 'js-confetti'

const { board, turn } = defineProps<{
  turn: Turn
  board: Board
}>()

const emit = defineEmits<{
  (e: 'hidden-winner', id: number): void
}>()

onMounted(() => {
  const audio = document.getElementById('sound-winner') as HTMLMediaElement
  audio.play()

  const jsConfetti = new JSConfetti()
  jsConfetti.addConfetti(/* { emojis: [turn.turn] } */)
})
</script>

<template>
  <div class="winner">
    <h1 class="title">El Ganador es:</h1>
    <span class="square-winner">{{ turn.turn }}</span>
    <div class="buttons">
      <button @click="() => board.clearBoard()">Nueva Partida</button>
      <button @click="$emit('hidden-winner')">Revisar Partida</button>
    </div>
  </div>
</template>
<style>
.winner {
  position: fixed;
  top: 5%;
  left: 5%;
  height: max-content;
  width: 90vw;
  max-height: 90%;
  display: grid;
  grid-template-rows: 1fr 4fr 2fr;
  justify-items: center;
  background-color: var(--color-background-square);
  border-radius: 20px;
  animation: showWinner 0.5s;
}

@keyframes showWinner {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.winner .title {
  font-weight: 400;
  font-size: 64px;
  width: 300px;
  text-align: center;
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
</style>

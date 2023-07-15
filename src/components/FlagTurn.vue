<script setup lang="ts">
import { Turn } from '../model/Turn'

const { turn } = defineProps({
  turn: { type: Turn, required: true }
})
</script>

<template>
  <span class="flag" :class="turn.turn === '❌' ? 'x-turn' : 'o-turn'">
    <img src="@/assets/svg/ex.svg" class="x" alt="❌" v-if="turn.turn === '❌'" />
    <img src="@/assets/svg/o.svg" class="o" alt="🔵" v-if="turn.turn === '🔵'" />
  </span>
</template>

<style>
.info .flag {
  display: flex;
  width: 90px;
  height: 40px;
  border-radius: 3rem;
  padding: 2px 8px;
  align-items: center;
  font-size: 28px;
  color: var(--color-ex);
}

.x-turn {
  background-color: var(--color-ex-light);
  justify-content: end;
}

.o-turn {
  background-color: var(--color-circle-light);
  justify-content: start;
}

.x {
  animation: move-o-to-x 1s;
}

.o {
  animation: move-x-to-o 1s;
}

@keyframes move-x-to-o {
  0% {
    transform: translateX(200%);
  }

  100% {
    transform: translateX(0);
  }
}

@keyframes move-o-to-x {
  0% {
    transform: translateX(-200%);
  }

  100% {
    transform: translateX(0);
  }
}
</style>

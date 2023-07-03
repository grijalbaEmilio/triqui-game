<script setup lang="ts">
import Square from './Square.vue';
import { Turn } from '../model/Turn';
import { Board } from '../model/Board';

import JSConfetti from 'js-confetti'

const { turn, board } = defineProps(
    {
        turn: { type: Turn, required: true },
        board: { type: Board, required: true }
    }
)

function handleClick(index: number): void {
    if (board.haveWinner()) return
    if (board.findSquare(index)) return;
    board.changeSquare(index, turn.turn);
    if (!board.haveWinner()) return turn.changeTurn()

    const jsConfetti = new JSConfetti()
    jsConfetti.addConfetti(/* { emojis: [turn.turn] } */)
}

</script>

<template>
    <div class="board">
        <Square v-for="(square, index) in board.board" :key="index" @click="handleClick(index)">
            {{ square }}
        </Square>
    </div>
</template>


<style>
.board {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    height: min-content;
}


.board :not(:nth-child(3n)) {
    border-right-color: var(--color-text);
}

.board :not(:nth-child(3n-2)) {
    border-left-color: var(--color-text);
}

.board :not(:nth-child(n+7)) {
    border-bottom-color: var(--color-text);
}

.board :nth-child(n+4) {
    border-top-color: var(--color-text);
}
</style>
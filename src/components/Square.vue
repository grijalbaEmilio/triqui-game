<script setup lang="ts"></script>

<template>
  <div class="square">
    <span class="icon">
      <slot></slot>
    </span>
  </div>
</template>

<style>
.board .square {
  display: flex;
  justify-content: center;
  width: 80px;
  height: 80px;
  padding: 10px;
  align-items: center;
  border: 3px solid var(--color-background);
  cursor: pointer;
}

.board .square .icon {
  background-color: var(--color-background-square);
  width: 100%;
  height: 100%;
  font-size: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  border-radius: 10px;
}
</style>

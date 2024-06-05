<script setup lang="ts">
const greetings = ref('hello')
console.log('No console test')
const input: any = 'This can be anything'
console.log(input)
</script>

<template>
  <div>
    <NuxtWelcome />
  </div>
</template>

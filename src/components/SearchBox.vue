<template>
    <div class="bg-slate-100 flex wrap flex-col gap-4 justify-center items-center w-1/2 p-4 mx-auto my-8 border rounded-lg shadow">
        <h1 class="text-3xl font-bold">Search</h1>
        <form class="flex flex-col justify-center items-center gap-2 w-full" @submit.prevent="searchPokemon(searchInput)">
            <input v-model="searchInput" class="shadow rounded-lg w-full h-12 p-4 focus:outline-none focus:shadow-blue-300 focus:shadow-lg" type="text" placeholder="Search for a Pokemon">
            <button type="submit" class="w-2/4 bg-blue-400 text-md font-bold text-white p-1 shadow rounded-md hover:scale-105 hover:shadow-lg">Submit</button>
        </form>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios';

defineProps({
    msg: String,
})
const emit = defineEmits(['updateData'])

const searchInput = ref("pikachu")
const pokemonData = ref({})
const defaultPokemon = ref("pikachu")

async function searchPokemon(pokemonName) {
    const reponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    pokemonData.value = reponse.data
    emit('updateData')
    // emit('updateData', pokemonData.value)
}

onMounted(async () => {
    searchPokemon(defaultPokemon.value)
})
</script>
<style scoped></style>

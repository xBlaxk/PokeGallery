<template>
    <div
        class="wrap mx-auto my-8 flex w-11/12 max-w-3xl flex-col items-center justify-center gap-8 rounded-lg border bg-slate-100 p-8 shadow"
    >
        <h1 class="text-3xl font-bold">Search</h1>
        <form
            class="flex w-full flex-col items-center justify-center gap-8"
            @submit.prevent="searchPokemon(searchInput)"
        >
            <input
                v-model="searchInput"
                class="h-12 w-full rounded-lg p-4 shadow focus:shadow-lg focus:shadow-blue-300 focus:outline-none"
                type="text"
                placeholder="Search for a Pokemon"
            />
            <button
                type="submit"
                class="text-md w-2/4 rounded-md bg-blue-400 p-3 font-bold text-white shadow hover:scale-105 hover:shadow-lg"
            >
                Submit
            </button>
        </form>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'

const emit = defineEmits(['updateData'])

const searchInput = ref('')
const pokemonData = ref({})
const defaultPokemon = ref('Pikachu')

async function searchPokemon(pokemonName) {
    try {
        const lowerCaseName = pokemonName.toLowerCase()
        const reponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${lowerCaseName}`)
        pokemonData.value = reponse.data
        console.log('searchPokemon', pokemonData.value.name)
        emit('updateData', pokemonData.value)
    } catch (error) {
        console.log(error)
    }
}

onMounted(async () => {
    searchPokemon(defaultPokemon.value)
})
</script>

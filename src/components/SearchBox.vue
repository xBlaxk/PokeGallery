<template>
    <div
        class="wrap mx-auto my-8 flex w-11/12 max-w-3xl flex-col items-center justify-center gap-8 rounded-lg border bg-slate-100 p-8 shadow"
    >
        <h1 class="text-3xl font-bold">Search</h1>
        <form
            class="flex w-full flex-col items-center justify-center gap-8"
            @submit.prevent="searchPokemon(searchInput)"
        >
            <div class="flex w-full flex-col">
                <span v-if="pokemonNameError" class="text-xs text-red-600">Invalid Pokemon Name</span>
                <search-dropdown :options="pokemonList" :placeholder="'Search for a Pokemon'" @selected="selectOption"></search-dropdown>
            </div>
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
import SearchDropdown from './SearchDropdown.vue'

const emit = defineEmits(['updateData'])

const searchInput = ref('')
const pokemonData = ref({})
const defaultPokemon = ref('pikachu')
const pokemonNameError = ref(false)

const pokemonList = ref([])

function selectOption(option)  {
    searchInput.value = option.name
}

async function searchPokemon(pokemonName) {
    try {
        const lowerCaseName = pokemonName.toLowerCase()
        const reponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${lowerCaseName}`)
        pokemonData.value = reponse.data
        emit('updateData', pokemonData.value)
        pokemonNameError.value = false
    } catch (error) {
        console.log(error)
        pokemonNameError.value = true
    }
}

async function getPokemonsList() {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=2000`)
    const finalPokemonList = data.results.map((obj, index) => {
        return { ...obj, id: index+1 }
    });
    return finalPokemonList
}

onMounted(async () => {
    pokemonList.value = await getPokemonsList()
    searchPokemon(defaultPokemon.value)
})
</script>

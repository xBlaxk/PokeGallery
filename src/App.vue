<template>
    <div class="flex min-h-screen flex-col text-center selection:bg-green-100">
        <NavBar></NavBar>
        <div class="my-8 grow">
            <SearchBox @updateData="updateData" />
            <PokeData :pokemonData="pokemonData"></PokeData>
        </div>
        <Footer class="mt-auto"></Footer>
    </div>
</template>
<script setup>
import SearchBox from '@/components/SearchBox.vue'
import NavBar from '@/components/NavBar.vue'
import PokeData from '@/components/PokeData.vue'
import Footer from '@/components/Footer.vue'
import { ref } from 'vue'
// import pokemonData from '@/assets/pikachu.json'

const pokemonData = ref({})
const updateData = (data) => {
    pokemonData.value = data
}
</script>
<style></style>

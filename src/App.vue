<template>
    <div class="flex min-h-screen flex-col text-center selection:bg-green-100">
        <NavBar></NavBar>
        <div class="my-8 grow">
            <SearchBox />
            <PokeData :pokemonData="pokemonData" @updateData="count++"></PokeData>
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

const pokemonData = ref({})
const count = ref(0)
const updateData = (data) => {
    console.log('data')
}

</script>
<style></style>

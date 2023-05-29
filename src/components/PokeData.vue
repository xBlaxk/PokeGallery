<template>
    <div class="mx-auto my-4 flex w-11/12 flex-wrap items-center justify-center rounded-md bg-slate-100 shadow">
        <h1 class="w-full p-3 text-2xl font-bold uppercase">{{ pikachu?.name }}</h1>
        <div class="flex flex-wrap gap-4 p-4">
            <div class="flex flex-wrap items-center justify-center gap-4 w-full p-8 shadow-md rounded-md">
                <poke-gallery :title="'Original'" :images="pikachu.sprites"></poke-gallery>
            </div>
            <div class="flex flex-wrap items-center justify-center gap-4 w-full p-8 shadow-md rounded-md">
                <h2 class="w-full text-xl text-left font-bold uppercase">Other</h2>
                <div v-for="(otherVersions, otherVersionsKey) in pikachu.sprites.other" :key="otherVersionsKey">
                    <poke-gallery
                        :title="splitAndJoinText(otherVersionsKey)"
                        :images="pikachu.sprites.other[otherVersionsKey]"
                    ></poke-gallery>
                </div>
            </div>
            <div class="flex flex-wrap items-center justify-center gap-4 w-full p-8 shadow-md rounded-md">
                <h2 class="w-full text-xl text-left font-bold uppercase">Generations</h2>
                <div v-for="(generationGame, generationKey) in pikachu.sprites.versions" :key="generationKey">
                    <h3 class="text-xl font-bold uppercase">{{ splitAndJoinText(generationKey) }}</h3>
                    <div v-for="(game, gameKey) in generationGame" :key="gameKey">
                        <poke-gallery :title="splitAndJoinText(gameKey)" :images="game"></poke-gallery>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import pikachu from '@/assets/pikachu.json'
import pokeGallery from '@/components/pokeGallery.vue'
const props = defineProps({
    pokemonData: {
        type: Object,
        default: { name: 'pikachu' },
    },
})

const splitAndJoinText = (text) => {
    const textSplitRegEx = /[_-]/
    return text.split(textSplitRegEx).join(' ')
}
</script>

<style></style>

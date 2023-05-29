<template>
    <div v-if="images" class="flex w-full flex-wrap items-center justify-center gap-4">
        <h2 class="w-full text-xl font-bold uppercase">{{ title }}</h2>
        <div v-for="(sprite, spriteKey) in images" :key="spriteKey">
            <div v-if="typeof sprite === 'string'" class="flex flex-col rounded-md p-2 shadow-lg shadow-slate-300">
                <label class="text-bold text-xl capitalize">{{ splitAndJoinText(spriteKey) }}</label>
                <div class="h-48 w-48 object-contain">
                    <img :src="sprite" :alt="spriteKey" class="h-full w-full" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        default: 'Original',
    },
    images: {
        type: Object,
        required: true,
    },
})

const splitAndJoinText = (text) => {
    const textSplitRegEx = /[_-]/
    return text.split(textSplitRegEx).join(' ')
}
</script>

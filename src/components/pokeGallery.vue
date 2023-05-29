<template>
    <div class="flex w-full flex-wrap items-center justify-center gap-4">
        <h2 class="w-full text-xl font-bold uppercase">{{ title }}</h2>
        <div v-for="(sprite, spriteKey) in images" :key="spriteKey">
            <div v-if="typeof sprite === 'string'" class="flex flex-col p-2 shadow-lg shadow-slate-300 rounded-md">
                <label class="text-bold text-xl capitalize">{{ splitAndJoinText(spriteKey) }}</label>
                <div class="h-48 w-48 object-contain">
                    <img :src="sprite" :alt="spriteKey" class="h-full w-full" />
                </div>
            </div>
        </div>
    </div>
</template>


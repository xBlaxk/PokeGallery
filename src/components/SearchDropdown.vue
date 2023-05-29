<template>
    <div class="dropdown" v-if="options">
        <!-- Dropdown Input -->
        <input
            class="h-12 w-full rounded-lg p-4 shadow focus:shadow-lg focus:outline-none"
            :name="name"
            @focus="showOptions()"
            @blur="exit()"
            @keyup="keyMonitor"
            v-model="searchFilter"
            :disabled="disabled"
            :placeholder="placeholder"
        />

        <!-- Dropdown Menu -->
        <div class="flex flex-col w-full bg-white rounded-md shadow-md" v-show="optionsShown">
            <div
                class=" text-md p-4 hover:bg-blue-100 hover:cursor-pointer"
                @mousedown="selectOption(option)"
                v-for="(option, index) in filteredOptions"
                :key="index"
            >
                {{ option.name || option.id || '-' }}
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: false,
    default: 'dropdown',
    note: 'Input name',
  },
  options: {
    type: Array,
    required: true,
    default: [],
    note: 'Options of dropdown. An array of options with id and name',
  },
  placeholder: {
    type: String,
    required: false,
    default: 'Please select an option',
    note: 'Placeholder of dropdown',
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false,
    note: 'Disable the dropdown',
  },
  maxItem: {
    type: Number,
    required: false,
    default: 6,
    note: 'Max items showing',
  },
});

const emits = defineEmits(['selected', 'filter'])
const selected = ref('')
const searchFilter = ref('')
const optionsShown = ref('')

const filteredOptions = computed(() => {
    const filtered = []
    const regOption = new RegExp(searchFilter.value, 'ig')
    for (const option of props.options) {
        if (searchFilter.value.length < 1 || option.name.match(regOption)) {
            if (filtered.length < props.maxItem) filtered.push(option)
        }
    }
    return filtered
})

function selectOption(option) {
    selected.value = option
    optionsShown.value = false
    searchFilter.value = selected.value.name
    emits('selected', selected.value)
}
function showOptions() {
    if (!props.disabled) {
        searchFilter.value = ''
        optionsShown.value = true
    }
}
function exit() {
    if (!selected.value.id) {
        selected.value = {}
        searchFilter.value = ''
    } else {
        searchFilter.value = selected.value.name
    }
    emits('selected', selected.value)
    optionsShown.value = false
}
// Selecting when pressing Enter
function keyMonitor(event) {
    if (event.key === 'Enter' && filteredOptions.value[0]) selectOption(filteredOptions.value[0])
}

onMounted(() => {
    emits('selected', selected.value)
})

watch(searchFilter, () => {
    if (filteredOptions.value.length === 0) {
        selected.value = {}
    } else {
        selected.value = filteredOptions.value[0]
    }
    emits('filter', searchFilter.value)
})
</script>

<style lang="scss" scoped>
.dropdown {
    position: relative;
    display: block;
    margin: auto;
    .dropdown-input {
        background: #fff;
        cursor: pointer;
        border: 1px solid #e7ecf5;
        border-radius: 3px;
        color: #333;
        display: block;
        font-size: 0.8em;
        padding: 6px;
        min-width: 250px;
        max-width: 250px;
        &:hover {
            background: #f8f8fa;
        }
    }
    .dropdown-content {
        position: absolute;
        background-color: #f1f5f9;
        min-width: 248px;
        max-width: 248px;
        max-height: 248px;
        border: 1px solid #e7ecf5;
        box-shadow: 0px -8px 34px 0px rgba(0, 0, 0, 0.05);
        overflow: auto;
        z-index: 1;
        .dropdown-item {
            color: black;
            font-size: 0.7em;
            line-height: 1em;
            padding: 8px;
            text-decoration: none;
            display: block;
            cursor: pointer;
            &:hover {
                background-color: #e7ecf5;
            }
        }
    }
    .dropdown:hover .dropdowncontent {
        display: block;
    }
}
</style>

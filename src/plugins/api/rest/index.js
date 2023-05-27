import axios from 'axios'

const httpMethods = {
    GET: async (input) => {
        const response = await axios.get(input.url)
        return response
    },
    POST: async (input) => {
        const response = await axios.post(input.url)
        return response
    },
    PUT: async (input) => {
        const response = await axios.put(input.url)
        return response
    },
    DELETE: async (input) => {
        const response = await axios.delete(input.url)
        return response
    },
}

function config() {}
function validate() {}
function setup() {}

export default httpMethods

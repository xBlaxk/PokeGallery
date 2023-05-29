import axios from 'axios'

const httpMethods = {
    GET: async (input) => {
        const response = await axios.get(input.url, input.config)
        return response
    },
    POST: async (input) => {
        const response = await axios.post(input.url, input.data, input.config)
        return response
    },
    PUT: async (input) => {
        const response = await axios.put(input.url, input.data, input.config)
        return response
    },
    DELETE: async (input) => {
        const response = await axios.delete(input.url, input.data, input.config)
        return response
    },
}

export default httpMethods

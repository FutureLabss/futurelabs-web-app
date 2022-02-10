import axios from "axios"
import { parseError } from "./mixin"

const URL = '/'


export const createBlogAPI = async (data) => {
    try{
        const response = await axios.post(`${URL}`, data, { headers: {'Content-Type': "multipart/form-data"}})
        if(response.status === 201){
            return response.data
        }
        return parseError(response)
    } catch(error){
        return parseError(error)
    }
}
import { createBlogAPI, getBlogAPI } from '../api/blog'
import { parseResponse, parseFormData } from './mixin'

class BlogManager {

    addBlog = async(data, file) => {
        const form =  parseFormData(data)
        form.append('image',file, file.name)
        const response = await createBlogAPI(form)
        return parseResponse(response)
    }

    getAll = async (data) => {
        const response = await getBlogAPI(data)
        return parseResponse(response)
    }
}

export { BlogManager }
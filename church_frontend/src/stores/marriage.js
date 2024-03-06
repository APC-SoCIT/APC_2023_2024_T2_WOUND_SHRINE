import { defineStore } from "pinia";
import marriagerepository from "../api/marriage";
import router from "../router";

export const useMarriageStore = defineStore('marriage', {
    actions: {

        async create(payload) {
            console.log('marriage')
            const response = await marriagerepository.create(payload)
            console.log(response, 'res')
            return response.data
            
        },

        async getAll() {
            const response = await marriagerepository.getAll()
            console.log(response, 'res')
            return response.data
            
        },

        async getByID(id) {
            const response = await marriagerepository.getById(id)
            console.log(response, 'res')
            return response.data
        },
        async updateByID(id, payload) {
            const response = await marriagerepository.updatetById(id, payload)
            console.log(response, 'res')
            return response.data
        },
    }
})
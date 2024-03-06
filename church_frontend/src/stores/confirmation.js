import { defineStore } from "pinia";
import confrimationrepository from "../api/confirmation";
import router from "../router";

export const useConfirmationStore = defineStore('confrimation', {
    actions: {

        async create(payload) {
            console.log('confrimation')
            const response = await confrimationrepository.create(payload)
            console.log(response, 'res')
            return response.data
            
        },

        async getAll() {
            const response = await confrimationrepository.getAll()
            console.log(response, 'res')
            return response.data
            
        },

        async getByID(id) {
            const response = await confrimationrepository.getById(id)
            console.log(response, 'res')
            return response.data
        },
        async updateByID(id, payload) {
            const response = await confrimationrepository.updatetById(id, payload)
            console.log(response, 'res')
            return response.data
        },
    }
})
import { defineStore } from "pinia";
import anointingrepository from "../api/anointing";
import router from "../router";

export const useAnointingStore = defineStore('anointing', {
    actions: {

        async create(payload) {
            console.log('anointing')
            const response = await anointingrepository.create(payload)
            console.log(response, 'res')
            return response.data
            
        },

        async getAll() {
            const response = await anointingrepository.getAll(sessionStorage.getItem("user_id"))
            return response.data
        },
    }
})
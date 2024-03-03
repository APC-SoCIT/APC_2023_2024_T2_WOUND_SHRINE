import { defineStore } from "pinia";
import cofessionrepository from "../api/confession";
import router from "../router";

export const useConfessionStore = defineStore('cofession', {
    actions: {

        async create(payload) {
            console.log('cofession')
            const response = await cofessionrepository.create(payload)
            console.log(response, 'res')
            return response.data
            
        },
    }
})
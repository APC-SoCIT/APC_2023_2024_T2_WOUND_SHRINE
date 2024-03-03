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
    }
})
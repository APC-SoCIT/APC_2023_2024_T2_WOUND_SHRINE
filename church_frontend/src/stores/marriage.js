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
    }
})
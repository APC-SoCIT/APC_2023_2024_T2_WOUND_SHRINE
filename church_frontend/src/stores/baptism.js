import { defineStore } from "pinia";
import baptismRepository from "../api/baptism";
import router from "../router";
import baptism from "../api/baptism";

export const useBaptismStore = defineStore('baptism', {
    actions: {

        async create(payload) {
            console.log('payload')
            const response = await baptism.create(payload)
            console.log(response, 'res')
            return response.data
            
        },
    }
})
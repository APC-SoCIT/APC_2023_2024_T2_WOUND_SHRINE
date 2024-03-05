import { defineStore } from "pinia";
import useMassCardRepistory from "../api/mass-cards";
import router from "../router";

export const useMassCardStore = defineStore('mass-cards', {
    actions: {

        async Masscardcreate(payload) {
            const response = await useMassCardRepistory.create(payload)
            console.log(response, 'res')
            return response.data
            
        },

        async getAll() {
            const response = await useMassCardRepistory.getAll()
            console.log(response, 'res')
            return response.data
            
        },
    }
})
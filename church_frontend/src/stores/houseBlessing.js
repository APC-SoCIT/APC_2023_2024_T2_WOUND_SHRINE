import { defineStore } from "pinia";
import houseBlessingrepository from "../api/houseBlessing";
import router from "../router";

export const useHouseBlessingStore = defineStore('houseBlessing', {
    actions: {

        async create(payload) {
            console.log('houseBlessing')
            const response = await houseBlessingrepository.create(payload)
            console.log(response, 'res')
            return response.data
            
        },

        async getAll() {
            const response = await houseBlessingrepository.getAll()
            console.log(response, 'res')
            return response.data
            
        },

        async getByID(id) {
            const response = await houseBlessingrepository.getById(id)
            console.log(response, 'res')
            return response.data
        },
        async updateByID(id, payload) {
            const response = await houseBlessingrepository.updatetById(id, payload)
            console.log(response, 'res')
            return response.data
        },
    }
})
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
    }
})
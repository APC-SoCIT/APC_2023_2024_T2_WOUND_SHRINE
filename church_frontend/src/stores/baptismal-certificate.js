import { defineStore } from "pinia";
import useBaptismalCertificateRepository from "../api/baptismal-certificate";
import router from "../router";

export const useBaptismalCertificateStore = defineStore('baptismal-certificate', {
    actions: {

        async Baptismalcreate(payload) {
            const response = await useBaptismalCertificateRepository.create(payload)
            console.log(response, 'res')
            return response.data
            
        },

        async getAll() {
            const response = await useBaptismalCertificateRepository.getAll()
            console.log(response, 'res')
            return response.data
            
        },
    }
})
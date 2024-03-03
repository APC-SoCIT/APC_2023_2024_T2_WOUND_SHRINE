import { defineStore } from "pinia";
import useMarriageCertificateRepository from "../api/marriage-certificate";
import router from "../router";

export const useMarriageCertificateStore = defineStore('marriage-certificate', {
    actions: {

        async Marriagecreate(payload) {
            const response = await useMarriageCertificateRepository.create(payload)
            console.log(response, 'res')
            return response.data
            
        },
    }
})
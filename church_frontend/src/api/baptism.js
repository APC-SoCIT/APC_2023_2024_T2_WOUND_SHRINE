import api from "./api";

export default {
  create(payload){
    console.log('baptism')
    return api.post('/baptism', payload);
  },
};

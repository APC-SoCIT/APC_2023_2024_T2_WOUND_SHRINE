import api from "./api";

export default {
  create(payload){
    console.log('baptism')
    return api.post('/baptism', payload);
  },

  getAll(){
    console.log('baptism')
    return api.get('/baptism');
  },
};

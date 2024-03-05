import api from "./api";

export default {
  create(payload){
    return api.post('/marriage-certificate', payload);
  },
  getAll(){
    return api.get('/marriage-certificate');
  },
};

import api from "./api";

export default {
  create(payload){
    return api.post('/confirmation', payload);
  },
  getAll(){
    return api.get('/confirmation');
  },
};

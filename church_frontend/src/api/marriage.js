import api from "./api";

export default {
  create(payload){
    console.log('marriage')
    return api.post('/marriage', payload);
  },
  getAll(){
    return api.get('/marriage');
  },
};

import api from "./api";

export default {
  create(payload){
    return api.post('/confession', payload);
  },
  getAll(){
    return api.get(`/confession/${sessionStorage.getItem("user_id")}`);
  },
};

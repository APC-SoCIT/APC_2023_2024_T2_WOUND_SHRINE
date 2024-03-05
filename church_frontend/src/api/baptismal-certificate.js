import api from "./api";

export default {
  create(payload){
    return api.post('/baptismal-certificate', payload);
  },

  getAll(){
    return api.get(`/baptismal-certificate/${sessionStorage.getItem("user_id")}`);
  },
};

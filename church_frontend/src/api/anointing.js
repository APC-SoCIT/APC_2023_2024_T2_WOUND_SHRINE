import api from "./api";

export default {
  create(payload){
    return api.post('/anointing', payload);
  },
};

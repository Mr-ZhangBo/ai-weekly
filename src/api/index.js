import Axios from "axios";

export default {
  base: {
    getAll: params => Axios.post('/all', params),
  }
}
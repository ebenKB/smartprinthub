import Axios from "../utils/axios"

export const login = async (user) => {
  const response = await Axios.post('/v1/auth/login', user);
  return response;
}

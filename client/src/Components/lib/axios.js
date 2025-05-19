import axios from 'axios';
 
const axiosInstance = axios.create({
    baseURL:import.meta.env.VITE_API_URL,
     withCredentials: true,  // ✅ send cookies with every request

})
 export default axiosInstance;

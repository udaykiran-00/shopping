import axios from "axios";
const axiosBaseURL=axios.create({
    baseURL:'https://sbackserver.onrender.com',
    mode:"cors"
});
export default axiosBaseURL;
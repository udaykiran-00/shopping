import axios from "axios";
const axiosBaseURL=axios.create({
    baseURL:'https://sbackserver.onrender.com'
});
export default axiosBaseURL;
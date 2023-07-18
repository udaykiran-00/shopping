import axios from "axios";
const axiosBaseURL=axios.create({
    baseURL:'http://sbackserver.onrender.com'
});
export default axiosBaseURL;
import axios from "axios";

const instance = axios.create({
  // .. congigure axios baseURL
  baseURL: "http://localhost:8000"             //https://zen-student-dashboard.onrender.com/ http://localhost:8000
});



export default instance;
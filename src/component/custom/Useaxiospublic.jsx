import axios from 'axios';


const axiosPublic= axios.create({
    baseURL: 'http://localhost:7000',

  });
const Useaxiospublic = () => {
    return axiosPublic

};

export default Useaxiospublic;
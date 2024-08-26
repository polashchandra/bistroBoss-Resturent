import axios from "axios";

const useaxios= axios.create({
    baseURL: 'http://localhost:7000',
  });
  
  const Useaxiossuciure = () => {
    return useaxios;
  };
  
  export default Useaxiossuciure;
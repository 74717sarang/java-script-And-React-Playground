


const api = axios.create({
  baseURL: "http://localhost:5173",
});

export const login = async (username, password) => {
    const{data}=await api.post("/Auth/login", { username, password });
    return data;
};

export const  register= async(payload)=>{
  const {data}=await api.post("/register",payload);
  return data;   
};
import api from "../Service/authService"
export const getAll=()=>api.get("/getall");
export const add = (emp) => api.post("/add", emp); // {name, designation, role}


import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./useAuth";
import axios from "axios";

const useAdmin = () => {
    const {user} = useAuth();
    const {data:isAdmin ,isLoading:isAdminLoading} = useQuery({
        queryKey:['isAdmin',user?.email],
        queryFn:async()=>{
            const res = await axios.get(`http://localhost:5000/user/admin/${user?.email}`)
            return res.data.admin
        }
    })
    return [isAdmin,isAdminLoading]
};

export default useAdmin;
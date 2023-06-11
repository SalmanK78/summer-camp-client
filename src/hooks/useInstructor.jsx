import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./useAuth";
import axios from "axios";

const useInstructor = () => {
    const {user} = useAuth();
    const {data:isInstructor ,isLoading:isInstructorLoading} = useQuery({
        queryKey:['isAdmin',user?.email],
        queryFn:async()=>{
            const res = await axios.get(`http://localhost:5000/user/instructor/${user?.email}`)
            return res.data
        }
    })
    return [isInstructor,isInstructorLoading]
};

export default useInstructor;
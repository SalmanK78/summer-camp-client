import { useQuery } from '@tanstack/react-query';
import { useAuth } from './useAuth';
import axios from 'axios';

const dataLoader = (path) => {
    const {user} = useAuth();
    const {data:loadedData = [], isLoading:loading,refetch} = useQuery({
        queryKey:['selected',user?.email],
        queryFn:async()=>{
            const res = await axios.get(`http://localhost:5000/${path}`)
            return res.data
        }
    })
    return [loadedData,refetch,loading]
}

export default dataLoader;
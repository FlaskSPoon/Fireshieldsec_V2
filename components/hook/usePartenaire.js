import { useQuery } from "@tanstack/react-query"
import { apiClient } from "../utils"
import Partenaires from "../pages/partenaire/Partenaires"

export const usePartenaire=()=>{
    return useQuery({
        queryKey:["partenaire"],
        queryFn:()=>apiClient.getAll("/partenaire")
    });
   
}
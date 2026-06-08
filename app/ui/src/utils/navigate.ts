import { useNavigate } from "react-router";

export const useAppNavigate = () => {

    const navigate = useNavigate();

    const relativeNavigate = (url: string) => {
        navigate(`../${url}`, {
            relative: "path"
        })
    }  
    
    return {
        relNavigate: relativeNavigate
    }

}
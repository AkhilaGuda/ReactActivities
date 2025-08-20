import { useState, useEffect } from "react";

export default function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState(null);

    useEffect(() => {
        if (!url) return;
        setLoading(true);
        setErrors(null);
        fetch(url)
            .then(res => { 
                if (!res.ok)
                     throw new Error(`Error ${res.status} ${res.statusText}`); 
                return res.json();
             })
             .then(json =>{
                setData(json);
                setLoading(false);
             })
             .catch(error=>setErrors(error));
             
            
        
    }, [url]);
    return { data, loading, errors };
}
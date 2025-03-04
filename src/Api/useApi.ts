import axios from "axios"
import { useEffect, useState } from "react"

const useApi = (url: string) => {
    const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState()
    useEffect(() => {
        const getData = async () => {
            setIsLoading(true)
            try {
                setError(false)
                const response = await axios.get(url);
                setData(response.data)
            } catch (error) {
                setError(true)
                console.error(error);
            }
            setIsLoading(false)
        }
        getData()
    }, [url]);

    return {error,isLoading,data}
}

export default useApi
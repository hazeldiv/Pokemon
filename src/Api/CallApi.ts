import axios from "axios"
import { useEffect, useState } from "react"

const useApi = (url: string) => {
    const [error, setError] = useState(false)
    const [data, setData] = useState()
    useEffect(() => {
        const getData = async () => {
            try {
                setError(false)
                const response = await axios.get(url);
                setData(response.data)
            } catch (error) {
                setError(true)
                console.error(error);
            }
        }
        getData()
    }, [url]);

    return {error,data}
}

export default useApi
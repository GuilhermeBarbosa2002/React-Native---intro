import { useState, useEffect } from "react";
import axios from "axios";


const rapidApiKey = 'a0bee436cemsh13ec542526d0246p1e010bjsn453456c5eac8'

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: {
        ... query
        },
        headers: {
          'X-RapidAPI-Key': rapidApiKey,
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      };
      


      const fetchData = async () => {
        setIsLoading(true);

        try{
            const response = await axios.request(options);
            setData(response.data.data)
            setIsLoading(false)
        } catch{
            setError(error)
            alert('There is an error')

        } finally {
            setIsLoading(false)
        }

      }


      useEffect(() => {
        fetchData();

      }, []);


      const refetch = () => {
        setIsLoading(true)
        fetchData();
      }


      return {data, isLoading, error, refetch}

}

export default useFetch;
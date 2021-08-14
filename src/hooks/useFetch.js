import {useState, useEffect} from 'react'

const useFetch = (url) => {
    const [datas, setDatas] = useState(undefined);
    const baseURL = "https://www.breakingbadapi.com/api/"
    useEffect(()=>{
        const asyncFunct = async () => {
            const json = await fetch(`${baseURL}${url}`)
            const data = await json.json()
            setDatas(data);
        }
        asyncFunct(); 
    },[url])
    return datas;
}

export default useFetch

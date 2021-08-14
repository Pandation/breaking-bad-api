import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import {FaBan} from 'react-icons/fa'
import Loading from './Loading';


const Character = () => {
    const {name} = useParams();
    const data = useFetch(`characters?name=${name}`);
    const [childs, setChilds] = useState(undefined);
    

    useEffect(()=>{
        if(data){
            const deceased = data[0].status === "Deceased";
            const infos = (<div className="character">
                <div className="character-img"><img src={data[0].img}/>{deceased? <FaBan className="deceased"/>: ""}</div>
                <div className="info">
                    <p>Name: {data[0].name}</p>
                    <p>Birthday: {data[0].birthday}</p>
                    <p>Nickname: {data[0].nickname}</p>
                    <p>Status: {data[0].status}</p>
                    <p>Portrayed: {data[0].portrayed}</p>
                    <p>Occupation: {data[0].occupation[0]}</p>
                </div>
                </div>
            )
            setChilds(infos)
        }
    },[data])
    return (
        <div className="characters">
            {childs? childs : <Loading />}
        </div>
    )
}

export default Character

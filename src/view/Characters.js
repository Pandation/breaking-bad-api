import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Loading from './Loading';


const Characters = () => {
    const data = useFetch("characters");
    const [childs, setChilds] = useState(undefined);
    const history = useHistory();
    const handleClick = (name) => {
        history.push(`characters/${name}`)
    }

    useEffect(()=>{
        if(data){
            const arrayTemp = data.map((element,index)=> {
                return (<div 
                    className="card"
                    onClick={()=>handleClick(element.name)}
                    >
                        <div 
                        className="img">
                            <img src={element.img}/>
                        </div>
                        <p>{element.name}</p>
                        <p>{element.birthday}</p>
                    </div>)
            })
            setChilds(arrayTemp);
        }
    },[data])
    return (
        <div className="characters">
            {childs? childs :<Loading/>}
        </div>
    )
}

export default Characters

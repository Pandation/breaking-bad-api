import {useEffect,useState} from 'react'
import useFetch from '../hooks/useFetch'
import {useHistory} from 'react-router-dom'
import AutoSizer from 'react-virtualized-auto-sizer';
import {FixedSizeList as List} from 'react-window'
import Loading from './Loading';


const Episodes = () => {
    const data = useFetch("episodes");
    const [childs, setChilds] = useState(undefined);
    const history = useHistory();
    const handleClick = (name) => {
        history.push(`characters/${name}`)
    }

    const Row = ({index, style}) =>(
        <div style={style} className="row">
            <p>Season: {data[index].season}</p>
            <p>Episode: {data[index].episode}</p>
            <p>Title: {data[index].title}</p>
            <p>Characters : {data[index].characters.map((elem)=><span className="clickhover" onClick={()=>handleClick(elem)}>{elem}</span>)}</p>
            </div>)

{/* <span className="clickhover" onClick={()=>handleClick(data[index].author)}>{data[index].author}</span> */}

    useEffect(()=>{
        if(data){
            console.log(data)
            const list = (<AutoSizer>{({height,width})=>(
                <List 
                itemCount={data.length}
                height={height}
                width={width}
                itemSize={200}>{Row}</List>
            )} 
            </AutoSizer>)
            setChilds(list);
        }
    },[data])

    return (
        <div className="episodes">
            {childs? childs : <Loading/>}
        </div>
    )
}

export default Episodes

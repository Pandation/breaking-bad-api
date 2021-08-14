import {useEffect,useState} from 'react'
import useFetch from '../hooks/useFetch'
import {useHistory} from 'react-router-dom'
import AutoSizer from 'react-virtualized-auto-sizer';
import Loading from './Loading'
import {FixedSizeList as List} from 'react-window'


const Quotes = () => {
    const data = useFetch("quotes");
    const [childs, setChilds] = useState(undefined);
    const history = useHistory();
    const handleClick = (name) => {
        history.push(`characters/${name}`)
    }

    const Row = ({index, style}) =>{
        return(
        <div style={style} className="row">
            <p>"{data[index].quote}"</p>
            <p>Author: <span className="clickhover" onClick={()=>handleClick(data[index].author)}>{data[index].author}</span></p>
            <p>Serie: {data[index].series}</p>
        </div>)
    }

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
            {childs? childs : <Loading />}
        </div>
    )
}

export default Quotes

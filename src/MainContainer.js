import MenuContainer from './menu/MenuContainer';
import ViewContainer from './view/ViewContainer';
import {Route} from 'react-router-dom';

const MainContainer = () => {
    return (
        <div className="flexMain">
            <MenuContainer />
            <ViewContainer />
        </div>
    )
}

export default MainContainer

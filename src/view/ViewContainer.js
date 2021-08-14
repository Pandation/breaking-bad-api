
import { Switch, Route } from "react-router-dom";
import Quotes from './Quotes';
import Episodes  from './Episodes';
import Characters from './Characters';
import Character from './Character';

const ViewContainer = () => {

    return (<div className="view-container">
            <Switch>
                <Route exact path="/florian/">
                    <div className="view-empty"> "Please click on an item menu :)"</div>
                   
                </Route>
                <Route path="/florian/characters/:name">
                    <Character/>
                </Route>
                <Route path="/florian/characters">
                    <Characters/>
                </Route>
                <Route path="/florian/episodes">
                    <Episodes/>
                </Route>
                <Route path="/florian/quotes">
                    <Quotes />
                </Route>
            </Switch>
            </div>
        
    );
}

export default ViewContainer

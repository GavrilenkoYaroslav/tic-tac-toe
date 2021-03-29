import React, {useState, useCallback} from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import {MenuPage} from './pages/MenuPage';
import {withSuspense} from "./assets/hoc/withSuspense";
import {initialConfig} from "./assets/initialConfig";
import './App.css';

const GamePage = React.lazy(() => import('./pages/GamePage'));
const PageNotFound = React.lazy(() => import('./pages/PageNotFound'));

const GamePageLazy = withSuspense(GamePage);
const PageNotFoundLazy = withSuspense(PageNotFound);

const App = () => {
    const [config, setConfig] = useState(initialConfig);

    const setConfigMemo = useCallback((value) => setConfig(value), [setConfig]);

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'} render={() => <MenuPage setConfig={setConfigMemo}/>}/>
                <Route exact path={'/play'} render={() => <GamePageLazy config={config} setConfig={setConfigMemo}/>}/>
                <Route exact path={'/404'} render={() => <PageNotFoundLazy/>}/>
                <Route path={'*'} render={() => <Redirect to={'/404'}/>}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;

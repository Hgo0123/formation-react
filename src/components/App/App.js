import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import ArticlesPages from '../ArticlesPages/ArticlesPages'
import ArticlePage from '../ArticlePage/ArticlePage'


function App() {
    return (
        <BrowserRouter>
        <Switch>
        <Route exact path="/" component={ArticlesPages}/>
        <Route exact path="/article" component={ArticlePage}/>
        <Route exact path="/article/:id" component={ArticlePage}/>
        <Redirect to="/"/>
        </Switch>
        </BrowserRouter>
    )
}

export default App;
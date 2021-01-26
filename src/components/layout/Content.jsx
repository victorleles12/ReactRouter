import React from 'react'
import '../layout/Content.css'
import Home from '../../views/examples/Home'
import About from '../../views/examples/About'
import { Switch, Route} from 'react-router-dom'
import Param from '../../views/examples/Param'
import NotFound from '../../views/examples/NotFound'


const Content = props => (
    <aside className="Content">
        <Switch>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/param/:id">
                <Param />
            </Route>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="*">
                <NotFound />
            </Route>
        </Switch>
    </aside>
)


export default Content
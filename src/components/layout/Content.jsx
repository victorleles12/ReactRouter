import React from 'react'
import '../layout/Content.css'
import Home from '../../views/examples/Home'
import About from '../../views/examples/About'
import { Switch, Route} from 'react-router-dom'
import Param from '../../views/examples/Param'


const Content = props => (
    <aside className="Content">
        <Switch>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/param/:id">
                <Param />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    </aside>
)


export default Content
import './Content.css'
import React from "react"
import { Switch, Route} from 'react-router-dom'
import Inicio from '../../views/contents/Inicio'
import Sobre from '../../views/contents/Sobre'
import Produtos from '../../views/contents/Produtos'

const Content = props => (
    <main className="Content">
       <Switch>
           <Route exact path="/">
               <Inicio />
           </Route>
           <Route path="/Sobre">
                   <Sobre />
               </Route>
               <Route path="/Produtos">
                   <Produtos />
               </Route>
               </Switch>
    </main>
)
export default Content
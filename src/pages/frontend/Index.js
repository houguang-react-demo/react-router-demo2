import {Link,  Route} from "react-router-dom";
import Javascript from "./Javascript";
import Vue from "./Vue";
import ReactComponent from "./ReactComponent";

export default function Index(){
    return (
        <>
            <ul className="top-menu">
                <li><Link to="/frontend/javascript">JAVASCRIPT</Link></li>
                <li><Link to="/frontend/vue">VUE</Link></li>
                <li><Link to="/frontend/react">REACT</Link></li>
            </ul>
            <Route path="/frontend/javascript/" component={Javascript} />
            <Route path="/frontend/vue/" component={Vue} />
            <Route path="/frontend/react/" component={ReactComponent} />
        </>
    )
}
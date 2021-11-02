import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import FrontendIndex from "./pages/frontend/Index";
import BackendIndex from "./pages/backend/Index";
import AndroidIndex from "./pages/android/Index";

export default function App(){
    const routerConfig = [
        {name:"前端",path:"/frontend",exact:false,component:FrontendIndex},
        {name:"后端",path:"/backend",exact:false,component:BackendIndex},
        {name:"安装",path:"/android",exact:false,component:AndroidIndex},
    ]
    return (
        <div className="page">
            <Router>
                <div className="left-menu">
                    <h1 style={{textAlign:"center"}}>一级导航</h1>
                    <ul>
                        {routerConfig.map((item,index)=>(
                            <li><Link key={index} to={item.path}>{item.name}</Link></li>
                        ))}
                    </ul>
                </div>
                <div className="main-content">
                    {routerConfig.map((item,index)=>(
                        <Route key={index} path={item.path} component={item.component} />
                    ))}
                </div>
            </Router>
        </div>
    )
}
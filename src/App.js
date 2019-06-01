import React        from "react";
import { 
    BrowserRouter as Router,
    Route,
    Switch
}                   from "react-router-dom";
import {
    Layout,
}                   from "antd";
import "muicss/react";
import 'antd/dist/antd.less';
import MyHeader     from "./components/Header";
import GeneralStatistics from "./pages/GeneralStatistics";
<<<<<<< HEAD
import UserRegister from "./pages/UserRegister";
import Login from "./pages/Login";
=======
import Curb from "./pages/Curb";
>>>>>>> 258d029cafe73af57a497f5269f7fa5165e89539

const { Content } = Layout;

function AppRouter() {
    return (
        <Layout className = 'App' style={{height: '100vh', minHeight: 'fit-content'}}>          
            <Content>
                <MyHeader />
                <Router>
                    <Switch>
                        <Route path='/login' component={Login} /> 
                        <Route path='/cadastrar' component={UserRegister} />
                        <Route path='/estatistica-geral' component={GeneralStatistics} />
                        <Route path='/curb' component ={Curb} />
                    </Switch>
                </Router>
            </Content>
        </Layout>
    );
}

export default AppRouter;
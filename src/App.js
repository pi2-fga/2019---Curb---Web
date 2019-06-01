import React        from "react";
import { 
    BrowserRouter as Router,
    Route,
    Switch
}                   from "react-router-dom";
import {
    Layout, Col, Row
}                   from "antd";
import "muicss/react";
import 'antd/dist/antd.less';
import MyHeader     from "./components/Header";
import GeneralStatistics from "./pages/GeneralStatistics";
import UserRegister from "./pages/UserRegister";
import Login from "./pages/Login";

const { Header, Footer, Sider, Content } = Layout;

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
                    </Switch>
                </Router>
            </Content>
        </Layout>
    );
}

export default AppRouter;
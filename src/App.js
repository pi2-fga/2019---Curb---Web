import React        from "react";
import { 
    BrowserRouter as Router,
    Route,
    Switch
}                   from "react-router-dom";
import {
    Layout, Col, Row
}                   from "antd";
import 'antd/dist/antd.less';
import MyHeader     from "./components/Header";
import GeneralStatistics from "./pages/GeneralStatistics";
import UserRegister from "./pages/UserRegister";

const { Header, Footer, Sider, Content } = Layout;

function AppRouter() {
    return (
        <Layout className = 'App' style={{height: '100vh', minHeight: 'fit-content'}}>          
            <Content>
                <MyHeader />
                <Router>
                    <Switch>
                        <Route component={UserRegister} />
                    </Switch>
                </Router>
            </Content>
        </Layout>
    );
}

export default AppRouter;
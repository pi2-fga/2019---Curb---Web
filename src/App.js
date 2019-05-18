import React        from "react";
import { 
    BrowserRouter as Router,
    Route,
    Switch
}                   from "react-router-dom";
import {
    Layout, Col, Row
}                   from "antd";
import MyHeader     from "./components/Header";
import GeneralStatistics from "./pages/GeneralStatistics";

const { Header, Footer, Sider, Content } = Layout;

function AppRouter() {
    return (
        <Layout className = 'App'>
          <Header>
              <MyHeader />
          </Header>
            <Content>
                <Router>
                    <Switch>
                        <Route component={GeneralStatistics} />
                    </Switch>
                </Router>
            </Content>
        </Layout>
    );
}

export default AppRouter;
import React        from "react";
import { 
    BrowserRouter as Router,
    Route,
    Switch
}                   from "react-router-dom";
import Login        from "./pages/login";
import {
    Layout
}                   from "antd";
import MyHeader     from "./components/Header";

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
                        <Route component={Login} />
                    </Switch>
                </Router>
            </Content>
        </Layout>
    );
}

export default AppRouter;
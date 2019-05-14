import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/login";

function AppRouter() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route component={Login} />
                </Switch>
            </div>
        </Router>
    );
}

export default AppRouter;
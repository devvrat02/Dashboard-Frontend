import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import { ProtectedRoute } from "../ProtectedRoute";
import { Dashboard, Finance, Login, Setting } from "../view";
import Signup from "../view/Signup";

function Router() {
    return (  <div className="">
        <BrowserRouter>
    <Routes>
        <Route path="/"
            element={
            <ProtectedRoute>
                <Dashboard />
            </ProtectedRoute>
            }>
         <Route path="finance" element={<Finance />} />
         <Route path="setting" element={<Setting/>} />

        </Route>
        <Route index path="login" element={<Login />} />
        <Route index path="signup" element={<Signup />} />

        <Route path="*" element={<p>There's nothing here... </p>} />
        </Routes>
    </BrowserRouter>
  </div> );
}

export default Router;
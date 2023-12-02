import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "../Pages/Home";

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home/>
                    }
                />
            </Routes>
        </Router>
    )
}

export default AppRouter
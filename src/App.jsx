import { Route, Router, Routes } from "react-router";

import HomaPage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomaPage />} />
            <Route path="/auth" element={<AuthPage />} />
        </Routes>
    );
}

export default App;

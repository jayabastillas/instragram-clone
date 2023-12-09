import { Route, Router, Routes } from "react-router";

import PageLayout from "./layouts/PageLayout";
import HomaPage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";

function App() {
    return (
        <PageLayout>
            <Routes>
                <Route path="/" element={<HomaPage />} />
                <Route path="/auth" element={<AuthPage />} />
            </Routes>
        </PageLayout>
    );
}

export default App;

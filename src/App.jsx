import { Route, Router, Routes } from "react-router";

import PageLayout from "./layouts/PageLayout";
import HomaPage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
    return (
        <PageLayout>
            <Routes>
                <Route path="/" element={<HomaPage />} />
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/:username" element={<ProfilePage />} />
            </Routes>
        </PageLayout>
    );
}

export default App;

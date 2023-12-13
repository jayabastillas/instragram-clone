import { Route, Router, Routes, Navigate } from "react-router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/firebase";

import PageLayout from "./layouts/PageLayout";
import HomaPage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import ProfilePage from "./pages/ProfilePage";
import useAuthStore from "./store/authStore";

function App() {
    const [authUser] = useAuthState(auth);

    return (
        <PageLayout>
            <Routes>
                <Route path="/" element={authUser ? <HomaPage /> : <Navigate to="/auth" />} />
                <Route path="/auth" element={!authUser ? <AuthPage /> : <Navigate to="/" />} />
                <Route path="/:username" element={<ProfilePage />} />
            </Routes>
        </PageLayout>
    );
}

export default App;

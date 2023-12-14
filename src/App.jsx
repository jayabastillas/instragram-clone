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
    const user = useAuthStore(state => state.user);
    const isUserAuth = authUser && user;

    return (
        <PageLayout>
            <Routes>
                <Route path="/" element={isUserAuth ? <HomaPage /> : <Navigate to="/auth" />} />
                <Route path="/auth" element={!isUserAuth ? <AuthPage /> : <Navigate to="/" />} />
                <Route path="/:username" element={<ProfilePage />} />
            </Routes>
        </PageLayout>
    );
}

export default App;

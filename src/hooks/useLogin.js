import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, firestore } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import useAuthStore from "../store/authStore";
import useShowToast from "./useShowToast";

const useLogin = () => {
    const showToast = useShowToast();
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const loginUser = useAuthStore(state => state.login);

    const login = async inputs => {
        if (!inputs.email || !inputs.password) {
            showToast("Error", "Please fill all the fields", "error");
            return;
        }

        try {
            const userCred = await signInWithEmailAndPassword(inputs.email, inputs.password);

            if (userCred) {
                const userRef = doc(firestore, "users", userCred.user.uid);
                const userSnap = await getDoc(userRef);
                localStorage.setItem("user-info", JSON.stringify(userSnap.data()));
                loginUser(userSnap.data());
            }
        } catch (error) {
            showToast("Error", error.message, "error");
        }
    };

    return { login, loading, error };
};

export default useLogin;

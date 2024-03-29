import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import useShowToast from "./useShowToast";
import useUserProfileStore from "../store/userProfileStore";

const useGetUserProfileByUsername = username => {
    const [isLoading, setIsLoading] = useState(true);
    const showToast = useShowToast();
    const { userProfile, setUserProfile } = useUserProfileStore();

    useEffect(() => {
        const getUserProfile = async () => {
            setIsLoading(true);

            try {
                const q = query(collection(firestore, "users"), where("username", "==", username));
                const querySnapshots = await getDocs(q);

                if (querySnapshots.empty) return setUserProfile(null);

                let userDoc;
                querySnapshots.forEach(doc => {
                    userDoc = doc.data();
                });

                setUserProfile(userDoc);
            } catch (error) {
                showToast("Error", error.message, "error");
            } finally {
                setIsLoading(false);
            }
        };

        getUserProfile();
    }, [setUserProfile, username, showToast]);

    return { isLoading, userProfile };
};

export default useGetUserProfileByUsername;

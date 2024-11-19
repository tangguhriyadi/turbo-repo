import { signOut } from "firebase/auth";
import { auth } from "../config/firebaseConfig";

export const getToken = async () => {
    const user = auth.currentUser;

    if (user) {
        const token = await user.getIdToken();
        return token;
    } else {
        return null;
    }
};

export const logout = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.error("Error during logout:", error);
    }
};

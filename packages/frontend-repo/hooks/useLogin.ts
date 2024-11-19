import { useState } from "react";
import { LoginSchema } from "../schema/loginSchema";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebaseConfig";

const useLogin = () => {
    const [isError, setIsError] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const login = async (data: LoginSchema) => {
        const { email, password } = data;
        setIsLoading(true);
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setIsError(false);
            //eslint-disable-next-line
        } catch (error: any) {
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    };

    return { login, isLoading, isError };
};

export default useLogin;

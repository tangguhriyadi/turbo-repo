import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, firestore } from "../config/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { SignupSchema } from "@/schema/signupSchema";

const useSignup = () => {
    const [isError, setIsError] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const signup = async (data: SignupSchema) => {
        const { email, password, fullName } = data;
        setIsLoading(true);
        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );

            const user = userCredential.user;

            await setDoc(doc(firestore, "users", user.uid), {
                email: user.email,
                fullName,
            });
            setIsError(false);
            //eslint-disable-next-line
        } catch (error: any) {
            console.log(error);
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    };

    return { signup, isLoading, isError };
};

export default useSignup;

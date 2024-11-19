import { db } from "../config/firebaseConfig";
import { User } from "../entities/user";
import admin from "firebase-admin";

export const UserRepository = {
    // Add a new user to the "users" collection
    async addUser(user: User): Promise<string> {
        try {
            const userRef = await db.collection("users").add({
                ...user,
                createdAt: admin.firestore.FieldValue.serverTimestamp(),
            });
            return userRef.id;
        } catch (error) {
            console.log(error);
            throw new Error("Error adding user");
        }
    },

    // Get all users from the "users" collection
    async getAllUsers(): Promise<User[]> {
        try {
            const snapshot = await db.collection("users").get();
            return snapshot.docs.map((doc) => {
                const data = doc.data() as User;
                return { ...data, id: doc.id };
            });
        } catch (error) {
            console.log(error);
            throw new Error("Error fetching users");
        }
    },

    // Get a single user by ID
    async getUserById(id: string): Promise<User | null> {
        try {
            const doc = await db.collection("users").doc(id).get();
            if (!doc.exists) {
                return null;
            }
            return { id: doc.id, ...doc.data() } as User;
        } catch (error) {
            console.log(error);
            throw new Error("Error fetching user");
        }
    },

    // Update a user's data
    async updateUser(id: string, user: Partial<User>): Promise<void> {
        try {
            const userRef = db.collection("users").doc(id);
            await userRef.update(user);
        } catch (error) {
            console.log(error);
            throw new Error("Error updating user");
        }
    },

    // Delete a user by ID
    async deleteUser(id: string): Promise<void> {
        try {
            const userRef = db.collection("users").doc(id);
            await userRef.delete();
        } catch (error) {
            console.log(error);
            throw new Error("Error deleting user");
        }
    },
};

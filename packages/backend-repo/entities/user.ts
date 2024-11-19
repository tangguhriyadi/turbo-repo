export interface User {
    id: string;
    email: string;
    fullName?: string;
    createdAt: FirebaseFirestore.Timestamp; // Firestore timestamp
}

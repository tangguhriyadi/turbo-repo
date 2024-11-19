import { Request, Response, NextFunction } from "express";
import * as admin from "firebase-admin";

export const authMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    // Get the token from the Authorization header
    const token = req.headers.authorization?.split(" ")[1]; // Bearer <token>

    if (!token) {
        res.status(401).json({ message: "Authorization token is required" });
        return;
    }

    try {
        // Verify the token with Firebase Admin SDK
        const decodedToken = await admin.auth().verifyIdToken(token);
        req.user = decodedToken; // Attach the decoded token to the request for further use
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        res.status(401).json({
            message: "Invalid or expired token",
            error: error,
        });
    }
};

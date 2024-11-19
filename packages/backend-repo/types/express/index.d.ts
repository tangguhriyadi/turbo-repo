import { DecodedIdToken } from "firebase-admin/lib/auth/token-verifier";

declare global {
    namespace Express {
        interface Request {
            user?: DecodedIdToken; // Add the 'user' property (or use any if you don't have a User type defined)
        }
    }
}

import * as functions from "firebase-functions";

import app from "../../core/app";
import { Request, Response } from "express";

app.get("/", (req: Request, res: Response) => {
    res.send("Hello from Firebase Functions with Express!");
});
// Export the app as a Firebase HTTPS function
export const api = functions.https.onRequest(app);

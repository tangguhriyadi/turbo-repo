import express from "express";
import UserRouter from "../routes/userRoutes";
import cors from "cors";
const app = express();

const PORT = process.env.PORT || 4000;

// middlewares
app.use(express.json());
app.use(cors({ origin: true }));

app.use("/", UserRouter);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

export default app;

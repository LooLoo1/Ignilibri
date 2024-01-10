import cors from "cors"
import express, { Express } from "express"
import mongoose from "mongoose"
import { authRouter } from './routes/auth.route'

require("dotenv").config({ path: ".env.local" });

const app: Express = express();
app.use(express.json());
app.use(cors());

app.use("/auth", authRouter);

const PORT = process.env.PORT || 1327;

// Start:
try {
	app.listen(PORT, () => {
		console.log(`Auth service start by PORT: ${PORT}`);
	});
	
} catch (error) {
	console.log(error);
}

// const DB_URL = process.env.DB_URL as string;
const DB_URL = process.env.DB_URL || "";
mongoose
	.connect(DB_URL)
	.then(() => {
		console.log("Connected to MongoDB");
	})
	.catch((error) => {
		console.log("Error connecting to MongoDB:", error);
	});














// http://localhost:1327/auth/google/callback
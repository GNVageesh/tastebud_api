import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Running without any issue" });
});

app.listen(PORT, () => {
  console.log("[API] Server running 🚀");
});

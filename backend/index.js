import express from "express";
import cors from "cors";
import dotenv from "dotenv"
dotenv.config()

const app = express();

app.use(cors());
app.use(express.json());



app.get("/", (req, res) => {
  res.send("Backend is running successfully ");
});


app.post("/hint", (req, res) => {
  const problemData = req.body;
  
const responseHint=`this is a problem called ${problemData.title} and its difficulty is ${problemData.difficulty} and its from the platform ${problemData.platform} i want you to give the hints for me to solve the problem! remember only the hints not the solutions for example try saying like think using a hashmap etc.No code, no step-by-step solution. Just a conceptual nudge on how to approach it`

  console.log("Received from extension:", problemData);

  let hint = "Analyze the problem carefully.";

  if (problemData?.difficulty === "Easy") {
    hint = "Start with a brute-force approach and then optimize.";
  } else if (problemData?.difficulty === "Medium") {
    hint = "Think about using suitable data structures to reduce complexity.";
  } else if (problemData?.difficulty === "Hard") {
    hint = "Break the problem into smaller parts and think of advanced techniques.";
  }

  res.json({ hint });
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("Backend is running successfully 🚀");
});

// hint API
app.post("/hint", (req, res) => {
  const problemData = req.body;

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

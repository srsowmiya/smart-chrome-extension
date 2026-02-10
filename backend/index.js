import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Groq from "groq-sdk";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


const groq = new Groq({
  apiKey: process.env.AI_API_KEY
});


app.get("/", (req, res) => {
  res.send("Backend is running ✅");
});


app.post("/hint", async (req, res) => {
  const { title, difficulty, platform } = req.body;

  if (!title) {
    return res.json({ hint: "Open a valid problem page first." });
  }

  const systemPrompt = `
You are an expert competitive programming mentor.

Rules:
- Give ONLY conceptual hints
- DO NOT provide code
- DO NOT provide full solutions
- DO NOT explain step-by-step
- Keep hints short and strategic
- Plain text only
`;

  const userPrompt = `
Problem Title: ${title}
Platform: ${platform}
Difficulty: ${difficulty}

Give a helpful hint to approach this problem.
`;

  try {
    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt }
      ]
    });

    const hint =
      completion.choices?.[0]?.message?.content ||
      "Try breaking the problem into smaller parts.";

    res.json({ hint });

  } catch (error) {
    console.error("Groq API error:", error);
    res.json({
      hint: "AI service unavailable. Try again later."
    });
  }
});

app.listen(3000, () => {
  console.log("🚀 Backend running at http://localhost:3000");
});

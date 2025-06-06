import { fromNodeHeaders } from "better-auth/node";
import { auth } from "../lib/auth.js";
import { prisma } from "../lib/prisma.js";

export const storeFeedback = async (req, res) => {
  try {
    const session = await auth.api.getSession({
      headers: fromNodeHeaders(req.headers),
    });

    if (!session) {
      res.status(404).json("Session Not Found");
      return;
    }
    const user = await prisma.user.findFirst({
      where: { id: session.user.id },
    });

    if (!user) {
      res.status(404).json("No User Found");
    }
    const { emotion, message } = req.body;

    if (!emotion || !message) {
      res.status(400).json({ error: "Missing required fields" });
    }

    const feedback = await prisma.feedback.create({
      data: { emotion, message, userId: user.id },
    });

    res
      .status(201)
      .json({ message: "Feedback submitted successfully", feedback });
  } catch (error) {
    console.error("Error storing feedback:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getFeedback = async (req, res) => {
  try {
    const feedback = await prisma.feedback.findMany();
    res.json(feedback);
  } catch (error) {
    console.error("Error getting feedback:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

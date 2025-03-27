import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { configDotenv } from "dotenv";
import { generateText } from "ai";
configDotenv({ path: "./.env" });
const google = createGoogleGenerativeAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function getMeals(req, res) {
try {
  const { text } = await generateText({
    model: google("gemini-2.0-flash-exp"),
    prompt:
     "You are a food nutrition expert with extensive knowledge of African cuisine. Generate a valid JSON array containing a balanced daily menu, including one breakfast, one snack, one lunch, and one dinner. Each item should have a 'type' field (e.g., 'Breakfast', 'Snack', 'Lunch', 'Dinner') and a 'name' field describing the meal in detail. Ensure variety by changing the meals with each call. Example format: [{ 'type': 'Breakfast', 'name': 'Akamu (pap) with evaporated milk, moi moi (bean pudding), and fried Titus fish' }, { 'type': 'Snack', 'name': 'Puff-puff with zobo (hibiscus drink)' }, { 'type': 'Lunch', 'name': 'Ofada rice with ayamase (ofada stew), fried plantain, and chilled water' }, { 'type': 'Dinner', 'name': 'Pounded yam with egusi soup, assorted meat, and a glass of fresh fruit juice' }] do it for every day of the week."
  });
  const formattedText = text.replaceAll("`", "").replace("json", "")
  res.json(JSON.parse(formattedText));
} catch (error) {
  res.json(error)
}
}

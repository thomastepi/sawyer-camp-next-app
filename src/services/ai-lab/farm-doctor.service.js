import { apiClient } from "../apiClient";
import { generatePrompt } from "@/utils/prompts";

export const analyzeImage = async (image, description) => {
  const formData = new FormData();
  formData.append("image", image);
  formData.append("description", generatePrompt(description));

  try {
    const response = await apiClient.post(
      "/api/sawyer-camp/analyze-image",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data[0].content;
  } catch (err) {
    console.error("Error:", err);
    throw err;
  }
};

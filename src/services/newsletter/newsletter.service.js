import { apiClient } from "../apiClient";

export async function sendNewsletterEmail(data) {
  const response = await apiClient.post("/newsletter/send-email", data);

  return response.data;
}

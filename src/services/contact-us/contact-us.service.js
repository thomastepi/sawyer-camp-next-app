import { apiClient } from "../apiClient";

export async function sendContactUsEmail(data) {
  const response = await apiClient.post("/contact-us/send-email", data);

  return response.data;
}

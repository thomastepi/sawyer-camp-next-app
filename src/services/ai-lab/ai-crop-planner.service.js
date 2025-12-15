import { apiClient } from "../apiClient";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export async function startCropPlannerJob(prompt) {
  const res = await apiClient.post(
    "/api/sawyer-camp/ai-crop-planner",
    {
      prompt,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return res?.data?.jobId;
}

export async function getCropPlannerJobStatus(jobId) {
  const res = await apiClient.get(
    `/api/sawyer-camp/ai-crop-planner/status/${jobId}`
  );
  return res?.data;
}

export async function pollCropPlannerJob(
  jobId,
  { intervalMs = 3000, timeoutMs = 120000 } = {}
) {
  const start = Date.now();

  while (true) {
    const { status, result, error } =
      (await getCropPlannerJobStatus(jobId)) || {};

    if (status === "done") {
      return result;
    }
    if (status === "error") {
      throw new Error(error || "Something went wrong. Please try again later.");
    }

    if (Date.now() - start > timeoutMs) {
      throw new Error("This is taking longer than expected. Please try again.");
    }

    await sleep(intervalMs);
  }
}
export async function runCropPlanner(prompt, options) {
  const jobId = await startCropPlannerJob(prompt);
  if (!jobId) throw new Error("Could not start AI job. Please try again.");
  return pollCropPlannerJob(jobId, options);
}

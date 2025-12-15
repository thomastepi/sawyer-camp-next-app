import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { generateAiCropPlannerPrompt } from "@/utils/prompts";
import { runCropPlanner } from "@/services/ai-lab/ai-crop-planner.service";

const initialState = {
  formData: {
    soilType: "",
    waterAccess: "",
    location: "",
    marketDemand: "",
    farmSize: "",
  },
  suggestion: null,
  loading: false,
  loadingText: null,
  error: null,
};

export const handleSubmit = createAsyncThunk(
  "cropPlanner",
  async (data, thunkAPI) => {
    const prompt = generateAiCropPlannerPrompt(data);
    if (!prompt) {
      return thunkAPI.rejectWithValue("Please fill in all required fields.");
    }

    try {
      const result = await runCropPlanner(prompt, {
        intervalMs: 3000,
        timeoutMs: 120000,
      });
      return result;
    } catch (err) {
      console.error("Error: ", err);
      return thunkAPI.rejectWithValue(
        err?.message ||
          "An error occurred while fetching the AI suggestion. Please try again."
      );
    }
  }
);

const cropPlannerSlice = createSlice({
  name: "aiCropPlanner",
  initialState,
  reducers: {
    setFormData: (state, { payload }) => {
      state.formData = payload;
    },
    setSuggestion: (state, { payload }) => {
      state.suggestion = payload;
    },
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setError: (state, { payload }) => {
      state.error = payload;
    },
    setLoadingText: (state, { payload }) => {
      state.loadingText = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(handleSubmit.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.suggestion = null;
      })
      .addCase(handleSubmit.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.suggestion = action.payload;
      })
      .addCase(handleSubmit.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong.";
      });
  },
});

export const {
  setFormData,
  setSuggestion,
  setLoading,
  setError,
  setLoadingText,
} = cropPlannerSlice.actions;

export default cropPlannerSlice.reducer;

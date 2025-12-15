import { configureStore } from "@reduxjs/toolkit";
import newsletterSlice from "./features/newsletterSlice";
import contactUsSlice from "./features/contactSlice";
import alertSlice from "./features/alertSlice";
import cropPlannerSlice from "./features/cropPlannerSlice";

export const store = configureStore({
  reducer: {
    newsletter: newsletterSlice,
    contactUs: contactUsSlice,
    alert: alertSlice,
    aiCropPlanner: cropPlannerSlice,
  },
});

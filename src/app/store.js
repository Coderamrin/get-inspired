import { configureStore } from "@reduxjs/toolkit";

import quoteSlice from "../features/quoteSlice";
import themeSlice from "../features/themeSlice";

export const store = configureStore({
  reducer: {
    quotes: quoteSlice,
    theme: themeSlice,
  },
});

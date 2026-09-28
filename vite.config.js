import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite config — no extra setup needed for Vercel.
// Vercel auto-detects "Vite" as the framework preset:
//   Build command:  npm run build
//   Output dir:     dist
export default defineConfig({
  plugins: [react()],
});

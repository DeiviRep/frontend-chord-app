import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  // https://github.com/DeiviRep/frontend-chord-app
  base: "https://DeiviRep.github.io/frontend-chord-app/",
  plugins: [react()],
});

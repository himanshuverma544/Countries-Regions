import react from '@vitejs/plugin-react-swc';
import svgr from "vite-plugin-svgr";
import { defineConfig } from 'vite';


export default defineConfig({
  plugins: [
    react(),
    svgr()
  ]
});

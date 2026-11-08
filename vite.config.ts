import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({plugins:[react()],base:'/obsidian-templates/',build:{outDir:'docs'}});

from pathlib import Path
files={
'vite.config.ts':'''import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({plugins:[react()],base:'/obsidian-templates/',build:{outDir:'docs'}});
''',
'tsconfig.json':'''{"compilerOptions":{"target":"ES2020","lib":["ES2020","DOM","DOM.Iterable"],"module":"ESNext","moduleResolution":"Bundler","jsx":"react-jsx","strict":true,"skipLibCheck":true,"esModuleInterop":true,"allowSyntheticDefaultImports":true,"noEmit":true},"include":["src"]}''',
'postcss.config.js':'''export default {plugins:{tailwindcss:{},autoprefixer:{}}};''',
'tailwind.config.js':'''export default {content:['./index.html','./src/**/*.{ts,tsx}'],theme:{extend:{colors:{obsidian:'#0A0A0A',lime:'#D4FF4F'},borderRadius:{studio:'16px'},fontFamily:{sans:['Geist','sans-serif'],mono:['Geist Mono','monospace'],display:['Instrument Serif','serif']}}},plugins:[]};''',
'index.html':'''<!doctype html><html lang="en"><head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width, initial-scale=1.0"/><meta name="theme-color" content="#0A0A0A"/><meta name="description" content="OBSIDIAN/LIME — eight original fictional website directions. A cinematic, interactive template studio concept."/><title>OBSIDIAN/LIME — Websites with a point of view</title><style>html,body{margin:0;background:#0a0a0a;color:#fafafa}body{font-family:Geist,sans-serif}.loader{position:fixed;inset:0;z-index:100;background:#0a0a0a;display:grid;place-content:center;color:#d4ff4f}</style></head><body><div id="root"></div><script type="module" src="/src/main.tsx"></script></body></html>''',
'.gitignore':'''node_modules/\n.env*\n.impeccable/review/\ntest-results/\n''',
'src/main.tsx':'''import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource/geist/400.css';
import '@fontsource/geist/500.css';
import '@fontsource/geist/600.css';
import '@fontsource/geist-mono/400.css';
import '@fontsource/instrument-serif/400-italic.css';
import App from './App';
import './style.css';
ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>);
'''
}
for name,body in files.items():
 p=Path(name);p.parent.mkdir(parents=True,exist_ok=True);p.write_text(body,encoding='utf-8')

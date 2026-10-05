import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import { defineConfig, Plugin } from 'vite';

function photoSyncPlugin(): Plugin {
  return {
    name: 'photo-sync-plugin',
    configureServer(server) {
      server.middlewares.use('/api/save-photo', (req, res) => {
        if (req.method === 'POST') {
          let body = '';
          req.on('data', (chunk) => { body += chunk; });
          req.on('end', () => {
            try {
              const { dataUrl } = JSON.parse(body);
              if (dataUrl && typeof dataUrl === 'string' && dataUrl.startsWith('data:image/')) {
                const base64Data = dataUrl.replace(/^data:image\/\w+;base64,/, '');
                const buffer = Buffer.from(base64Data, 'base64');

                // 1. Save buffer to src/assets/images/professor-costa.jpg
                const srcPath = path.resolve(__dirname, 'src/assets/images/professor-costa.jpg');
                fs.writeFileSync(srcPath, buffer);

                // 2. Save buffer to public/assets/images/professor-costa.jpg
                const publicPath = path.resolve(__dirname, 'public/assets/images/professor-costa.jpg');
                fs.writeFileSync(publicPath, buffer);

                // 3. Save as embedded TS module for 100% guaranteed persistence in Hostinger build
                const tsDataPath = path.resolve(__dirname, 'src/assets/images/savedPhotoData.ts');
                fs.writeFileSync(tsDataPath, `export const EMBEDDED_CUSTOM_PHOTO: string | null = ${JSON.stringify(dataUrl)};\n`);

                console.log('[PhotoSync] Foto do Professor salva com sucesso nos arquivos físicos do projeto!');
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: true, message: 'Foto salva com sucesso no disco!' }));
                return;
              }
            } catch (err) {
              console.error('[PhotoSync] Erro ao salvar foto:', err);
            }
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ success: false, error: 'Dados inválidos' }));
          });
          return;
        }
        res.writeHead(405);
        res.end();
      });
    }
  };
}

export default defineConfig(() => {
  return {
    base: '/',
    plugins: [react(), tailwindcss(), photoSyncPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      outDir: 'dist',
      emptyOutDir: true,
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});

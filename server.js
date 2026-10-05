import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const distPath = path.join(__dirname, 'dist');

// Se a pasta dist ainda não foi criada, executa o build automaticamente
if (!fs.existsSync(distPath) || !fs.existsSync(path.join(distPath, 'index.html'))) {
  console.log('[Hostinger / Production] Pasta dist não encontrada. Executando build automático...');
  try {
    execSync('npm run build', { stdio: 'inherit' });
    console.log('[Hostinger / Production] Build concluído com sucesso!');
  } catch (error) {
    console.error('[Hostinger / Production] Erro ao executar build:', error);
  }
}

// Parser para JSON com suporte a imagem base64
app.use(express.json({ limit: '25mb' }));

// Servir arquivos estáticos da pasta dist
app.use(express.static(distPath, {
  maxAge: '1d',
  etag: true,
}));

// Endpoint para persistir foto diretamente nos arquivos físicos da Hostinger
app.post('/api/save-photo', (req, res) => {
  try {
    const { dataUrl } = req.body;
    if (dataUrl && typeof dataUrl === 'string' && dataUrl.startsWith('data:image/')) {
      const base64Data = dataUrl.replace(/^data:image\/\w+;base64,/, '');
      const buffer = Buffer.from(base64Data, 'base64');
      fs.writeFileSync(path.join(__dirname, 'src/assets/images/professor-costa.jpg'), buffer);
      fs.writeFileSync(path.join(__dirname, 'public/assets/images/professor-costa.jpg'), buffer);
      fs.writeFileSync(path.join(__dirname, 'src/assets/images/savedPhotoData.ts'), `export const EMBEDDED_CUSTOM_PHOTO = ${JSON.stringify(dataUrl)};\n`);
      return res.json({ success: true, message: 'Foto persistida com sucesso' });
    }
  } catch (err) {
    console.error('[Server] Erro ao salvar foto:', err);
  }
  res.status(400).json({ success: false, error: 'Dados inválidos' });
});

// Rota de verificação de saúde da aplicação
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Fallback para SPA (Single Page Application) - todas as rotas abrem index.html
app.get('*', (req, res) => {
  const indexPath = path.join(distPath, 'index.html');
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(500).send('Erro: A aplicação precisa ser compilada primeiro (npm run build).');
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`[Hostinger / Server] Aplicação rodando na porta ${PORT}`);
});

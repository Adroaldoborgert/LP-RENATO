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

// Servir arquivos estáticos da pasta dist
app.use(express.static(distPath, {
  maxAge: '1d',
  etag: true,
}));

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

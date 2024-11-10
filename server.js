import express from 'express';
import { createServer as createViteServer } from 'vite';
import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const isProduction = false;

async function createServer() {
  const app = express();

  let vite;
  if (!isProduction) {
    vite = await createViteServer({
      server: { middlewareMode: 'ssr' },
    });
    app.use(vite.middlewares);
  } else {
    const compression = await import('compression');
    app.use(compression.default());
    app.use(express.static(path.resolve(__dirname, 'dist/client')));
  }

  app.use('*', async (req, res) => {
    const url = req.originalUrl;
    try {
      let template;
      let render;
      if (!isProduction) {
        template = fs.readFileSync(path.resolve(__dirname, 'src/index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        render = (await vite.ssrLoadModule('/src/entry/server.jsx')).render;
      } else {
        template = fs.readFileSync(path.resolve(__dirname, 'dist/client/index.html'), 'utf-8');
        render = (await import('./dist/server/server.js')).render;
      }

      const appHtml = render();
      const html = template.replace(`<!--ssr-outlet-->`, appHtml);

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      vite && vite.ssrFixStacktrace(e);
      console.log(e);
      res.status(500).end(e.message);
    }
  });

  app.listen(4200, () => {
    console.log('Server is running on http://localhost:4200');
  });
}

createServer();

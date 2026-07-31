# Deploy com Docker (EasyPanel)

## Local

```bash
docker build -t ssm-ambiental .
docker run -p 3000:3000 ssm-ambiental
# ou
docker compose up --build
```

Acesse http://localhost:3000

## EasyPanel

1. Suba o projeto para o GitHub.
2. No EasyPanel: **Create Service → App**.
3. Source: **GitHub** → selecione o repositório e a branch.
4. Build: **Dockerfile** (caminho `Dockerfile`, contexto `/`).
5. Em **Environment**, defina (opcional, já são os padrões):
   - `NODE_ENV=production`
   - `PORT=3000`
   - `HOST=0.0.0.0`
6. Em **Domains**, adicione o domínio e aponte a porta **3000** (o EasyPanel cuida do HTTPS via Let's Encrypt).
7. **Deploy**.

## Notas técnicas

- O build usa Bun e o preset Nitro `node-server`, gerando `.output/server/index.mjs`.
- A imagem final roda em `node:22-alpine`, sem dependências de build (imagem enxuta).
- O servidor respeita as variáveis `PORT` e `HOST`.
- Dentro do Lovable o build continua usando o preset Cloudflare — nada muda no preview.

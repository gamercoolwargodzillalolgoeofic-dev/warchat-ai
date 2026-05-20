# WarChat AI - Guía de Instalación

## Pre-requisitos

- Node.js 18+ 
- npm o yarn
- Git
- Cuenta Firebase (opcional, para funcionalidad completa)

## Pasos de Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/tuusuario/warchat-ai.git
cd warchat-ai
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

```bash
cp .env.example .env.local
```

Editar `.env.local` con tus credenciales:

```
NEXT_PUBLIC_FIREBASE_API_KEY=tu_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=tu_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=tu_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=tu_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=tu_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=tu_app_id
```

### 4. Correr en modo desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

### 5. Build para producción

```bash
npm run build
npm start
```

## 🚀 Deploy

### Vercel (Recomendado)

```bash
npm i -g vercel
vercel
```

### Firebase Hosting

```bash
npm install -g firebase-tools
firebase login
npm run build
firebase deploy
```

### Netlify

```bash
npm run build
# Sube la carpeta .next a Netlify
```

## 🔗 API Endpoints

- `POST /api/chat` - Enviar mensaje
- `GET /api/search` - Búsqueda web
- `POST /api/images` - Generar imágenes (próximamente)
- `POST /api/tts` - Texto a voz (próximamente)

## 📝 Configuración Firebase

1. Ir a [Firebase Console](https://console.firebase.google.com/)
2. Crear nuevo proyecto
3. Activar Authentication (Google, GitHub, Discord)
4. Crear Firestore Database
5. Copiar credenciales a `.env.local`

## 🐛 Troubleshooting

**Error: Cannot find module**
```bash
rm -rf node_modules
npm install
```

**Puerto 3000 ocupado**
```bash
npm run dev -- -p 3001
```

**Build falla**
```bash
npm run build -- --debug
```

## 📞 Soporte

- [GitHub Issues](https://github.com/gamercoolwargodzilla-dev/warchat-ai/issues)
- [Documentación](./README.md)

---

Happy coding! 🚀

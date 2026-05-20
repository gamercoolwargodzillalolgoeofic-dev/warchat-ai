# WarChat AI - MVP

Plataforma de IA avanzada e moderna con interfaz futurista.

## 🚀 Features

- ✅ Interfaz UI moderna (glassmorphism, animaciones)
- ✅ Autenticación (Google, GitHub, Discord, Email)
- ✅ Chat conversacional con historial
- ✅ Selector de modelos IA
- ✅ Responsive (web + mobile)
- ✅ Dark mode futurista
- ✅ Efectos visuales smooth
- ✅ TypeScript + Next.js 14

## 📋 Stack

```
Frontend:     Next.js 14, React 18, TypeScript, Tailwind CSS
Backend:      Next.js API Routes
Database:     Firebase (Auth, Firestore, Storage)
Estilos:      Tailwind + Custom CSS (glassmorphism)
```

## 🛠️ Instalación

```bash
# Clonar repo
git clone <repo-url>
cd warchat-ai

# Instalar dependencias
npm install

# Configurar .env.local
cp .env.example .env.local
# Agregar credenciales Firebase

# Correr en desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

## 🔧 Variables de Entorno

```
NEXT_PUBLIC_FIREBASE_API_KEY=xxx
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=xxx
NEXT_PUBLIC_FIREBASE_PROJECT_ID=xxx
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=xxx
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=xxx
NEXT_PUBLIC_FIREBASE_APP_ID=xxx
```

## 📁 Estructura

```
warchat-ai/
├── app/              # Next.js 14 app router
│   ├── page.tsx      # Home principal
│   ├── layout.tsx    # Layout raíz
│   └── globals.css   # Estilos globales
├── components/       # Componentes React
│   ├── AuthModal.tsx
│   ├── ChatArea.tsx
│   ├── Sidebar.tsx
│   └── ModelSelector.tsx
├── lib/             # Utilidades
│   ├── firebase.ts   # Config Firebase
│   └── store.ts      # Zustand store (estado)
├── public/          # Assets
├── .env.example     # Variables ejemplo
└── package.json
```

## 🎨 Colores

- **Primario:** `#00D9FF` (Cyan)
- **Secundario:** `#FF0080` (Magenta)
- **Dark:** `#0A0E27`
- **Darker:** `#050812`

## 🚢 Deploy

### Vercel (Recomendado)
```bash
npm i -g vercel
vercel
```

### Firebase Hosting
```bash
npm run build
firebase deploy
```

## 📚 Próximas Fases

- [ ] Integración APIs reales (OpenAI, Gemini, etc)
- [ ] Búsqueda web en tiempo real
- [ ] Generación de imágenes
- [ ] Sistema de créditos/suscripción
- [ ] Panel admin Firebase
- [ ] Bots personalizados
- [ ] Sistema de plugins

## 📄 Licencia

MIT

---

**Hecho con ❤️ por WarChat AI Team**

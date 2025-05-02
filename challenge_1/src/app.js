
import express from "express";
import path from "path";
import ejs from "ejs";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import { fileURLToPath } from "url";


import rootRoutes from "./routes/root.routes.js";
import chatRoutes from "./routes/chat.routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// ! Render engine
app.engine('html', ejs.renderFile);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));

// ! Pastar estaticas
app.use(express.static(path.join(__dirname,"..", "public")));
app.use(
  express.static(
    path.join(__dirname, "..", "node_modules", "bootstrap", "dist")
  )
);
app.use(
  express.static(
    path.join(__dirname, "..", "node_modules", "bootstrap-icons", "font")
  )
);

// Permite o express ler json
app.use(express.json());

// Peermite a utilização de cookies no express
app.use(cookieParser());

// Configura o morgan e como será exibido os logs de acesso as rotas
app.use(morgan("short"));

// Middleware para analisar dados do formulário
app.use(express.urlencoded({ extended: true }));

// ! Definindo as rotas
app.use(rootRoutes)
app.use(chatRoutes)

export default app
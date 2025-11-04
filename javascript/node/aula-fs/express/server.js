import express from "express";
const app = express();
import routes from "./routes.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, "public")));

app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.use(routes);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

//qual a diferença entre path.resolve e path.join?
//path.resolve monta o caminho absoluto a partir do diretório raiz
//path.join monta o caminho relativo a partir do diretório atual

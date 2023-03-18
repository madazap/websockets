import express, { urlencoded } from "express";
import productRouter from "./routes/products.router.js";
import cartRouter from "./routes/carts.router.js";
import { engine } from "express-handlebars";
import { Server, Socket } from "socket.io";
import viewsRouter from "./routes/views.router.js";

const app = express();
app.use("/api/products", productRouter);
app.use("/api/carts", cartRouter);
app.use("/", viewsRouter);
app.use(express.json());
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");



const httpServer= app.listen(8080, () => {
  console.log("Server listening on port 8080");
});

const socketServer = new Server(httpServer);

socketServer.on("connection",(socket) =>{
  console.log("nuevo cliente conectado");
});


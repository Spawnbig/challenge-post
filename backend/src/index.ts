import express, { Express, Request, Response } from "express";
import environment from "./config/environment";
import { createPost, deletePost, getPosts } from "./services/post";
import { AppDataSource } from "./config/db";
import cors from 'cors'

const app: Express = express();
app.use(express.json());
app.use(cors())

const initServer = async () => {
  try {
    await AppDataSource.initialize();
    app.post("/post", createPost);
    app.get("/post", getPosts);
    app.delete("/post/:id", deletePost);
    app.listen(environment.PORT);
    console.log(`[server]: Server running on port ${environment.PORT}`);
  } catch (error) {
    console.error(`[error]: ${error}`);
  }
};

initServer();

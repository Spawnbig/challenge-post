import { Request, Response } from "express";
import { AppDataSource } from "../config/db";
import { Post } from "../models/post";

const postRepository = AppDataSource.getRepository(Post);

export const createPost = async (req: Request, res: Response) => {
  const { name, description } = req.body;
  if (!name || !description) {
    res
      .status(400)
      .send("Bad Request, Debes enviar un nombre y una descripción");
    return;
  }

  const post = await postRepository.save({ name, description });
  res.send(post);
};

export const getPosts = async (req: Request, res: Response) => {
  const posts = await postRepository.find();
  res.send(posts);
};

export const deletePost = async (req: Request, res: Response) => {
  const { id } = req.params;
  const post = await postRepository.findOneBy({ id: parseInt(id) });

  if (!post) {
    res.status(404).send("Post no encontrado");
    return;
  }

  await postRepository.delete(post);
  res.send(post);
};

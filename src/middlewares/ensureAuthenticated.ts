import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { AppError } from "../errors/AppError";
import { UserRepository } from "../modules/acconts/repositories/implementations/UsersRepository";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token missing", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(
      token,
      "04375c79078834dfe8007a998d130c70",
    ) as IPayload;
    const userRepository = new UserRepository();
    const user = userRepository.findById(user_id);

    if (!user) {
      throw new AppError("User does not exists", 401);
    }

    next();
  } catch {
    throw new AppError("Invalid token!", 401);
  }
}
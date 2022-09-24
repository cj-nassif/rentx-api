import { Router } from "express";
import multer from "multer";

import upLoadConfig from "../config/upload";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateUserController } from "../modules/acconts/useCases/createUser/CreateUserController";
import { UpdateUserAvatarController } from "../modules/acconts/useCases/updateUserAvatar/UpdateUserAvatarController";

const usersRoutes = Router();

const uploadAvatar = multer(upLoadConfig.upload("./tmp/avatar"));

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

usersRoutes.post("/", createUserController.handle);

usersRoutes.patch(
  "/avatar",
  ensureAuthenticated,
  uploadAvatar.single("avatar"),
  updateUserAvatarController.handle,
);

export { usersRoutes };

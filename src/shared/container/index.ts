import { container } from "tsyringe";

import { UserRepository } from "../../modules/acconts/repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../modules/acconts/repositories/IUsersRepository";
import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoriesRepository";
import { CategoriesRepository } from "../../modules/cars/repositories/implementations/CategoriesRepository";
import { SpecificationRepository } from "../../modules/cars/repositories/implementations/SpecificationsRepository";
import { ISpecificationsRepository } from "../../modules/cars/repositories/ISpecificationsRepository";

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository,
);

container.registerSingleton<ISpecificationsRepository>(
  "SpecificationsRepository",
  SpecificationRepository,
);

container.registerSingleton<IUsersRepository>("UserRepository", UserRepository);

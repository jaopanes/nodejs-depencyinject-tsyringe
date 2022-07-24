import { container } from "tsyringe";
import { ListUsersController } from "../../controllers/ListUsersController";
import { IUserRepository } from "../../repositories/IUserRepository";
import { UserRepository } from "../../repositories/storage/impl/UserRepository";
import { ListUsersUseCase } from "../../useCases/ListUsersUseCase";

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);
container.registerSingleton("ListUsersUseCase", ListUsersUseCase);

const listUsersController = container.resolve(ListUsersController);

export { listUsersController };

import { IRepository } from "./IRepository";
import { User } from "../entities/User";

export interface IUserRepository extends IRepository<User> {}

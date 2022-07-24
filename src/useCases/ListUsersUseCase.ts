import { inject, injectable } from "tsyringe";
import { User } from "../entities/User";
import { IUserRepository } from "../repositories/IUserRepository";

@injectable()
export class ListUsersUseCase {
  constructor(
    @inject("UserRepository") private readonly userRepository: IUserRepository
  ) {}

  execute(): User[] {
    return this.userRepository.list();
  }
}

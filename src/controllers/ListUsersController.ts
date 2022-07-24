import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { ListUsersUseCase } from "../useCases/ListUsersUseCase";

@injectable()
export class ListUsersController {
  constructor(
    @inject("ListUsersUseCase")
    private readonly listUsersUseCase: ListUsersUseCase
  ) {
    this.execute = this.execute.bind(this);
  }

  execute(req: Request, res: Response) {
    const users = this.listUsersUseCase.execute();
    return res.status(200).json(users);
  }
}

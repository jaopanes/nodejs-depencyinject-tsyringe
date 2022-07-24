import { User } from "../../../entities/User";
import { IUserRepository } from "../../IUserRepository";

export class UserRepository implements IUserRepository {
  private users = [
    new User({
      id: "dfaaee0b-0b76-4221-b7e6-92b6693eec53",
      name: "João",
      email: "joao@email.com",
    }),
    new User({
      id: "0a6bacfb-9533-4a82-9647-484abffbcbe1",
      name: "Otavio",
      email: "otavio@email.com",
    }),
  ];

  list(): User[] {
    return this.users;
  }
}

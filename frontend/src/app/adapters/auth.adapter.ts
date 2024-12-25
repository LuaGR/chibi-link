import { LoginResponse } from "@/models";

export class AuthAdapter {
  static adapt(data: LoginResponse): string {
    return data.token
  }
}

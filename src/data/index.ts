export default class API {
  static async fetchUser(email: string): Promise<User> {
    return fetch(`http://localhost:3000/user?email=${email}`) as any;
  }

  static async fetchOffers(userId: number): Promise<Offer[]> {
    return fetch(`http://localhost:3000/users/${userId}/offers`) as any;
  }
}

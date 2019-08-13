import { action, observable, flow } from "mobx";
import API from '../data';

export default class OfferStore {
  @observable offers: Offer[] = [];
  @observable currentUser: User = {};
  @observable state = "pending";

  @action.bound
  setUserEmail(email: string) {
    this.currentUser.email = email;
  }

  fetchOffers = flow(function * (this: OfferStore) {
      if (!this.currentUser.id) {
        this.state = "error";
        return;
      }

      this.offers = [];
      this.state = "pending";
      try {
        const offers: Offer[] = yield API.fetchOffers(this.currentUser.id);
        this.offers = offers;
        this.state = "done"
      } catch (error) {
        this.state = "error"
      }
  });

  fetchCurrentUser = flow(function * (this: OfferStore) {
    if (!this.currentUser.email) {
      return;
    }
    const user: User = yield API.fetchUser(this.currentUser.email);

    if (user) {
      this.currentUser = user;
    }
  });
}
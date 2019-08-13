import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OfferList from './OfferList';
import Offer from './Offer';
import { observer, inject } from 'mobx-react';
import OfferStore from '../stores/OfferStore';


interface OffersProps {
  offerStore: OfferStore;
  offers: Offer[];
  match: any;
}

@observer
@inject("offerStore")
class Offers extends React.Component<OffersProps> {
  constructor(props: OffersProps) {
    super(props);
  }

  render() {
    const { offers } = this.props.offerStore;
    return (
      <div>
        <h2>Offers</h2>
        {OfferList(offers, this.props.match.url)}

        <Route path={`${this.props.match.path}/:offerId`} component={Offer} />
        <Route
          exact
          path={this.props.match.path}
          render={() => <h3>Please select an offer.</h3>}
        />
      </div>
    );
  }
};

export default Offers;

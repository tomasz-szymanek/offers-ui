import OfferStore from "../stores/OfferStore";
import React from 'react';
import { observer, inject } from 'mobx-react';
import { Route } from "react-router";
import EmailForm from './EmailForm';
import Offers from './Offers';
import { toJS } from "mobx";

interface MainProps {
  offerStore?: OfferStore;
}

@observer
@inject('offerStore')
export default class Main extends React.Component<MainProps> {
  constructor(props: MainProps) {
    super(props);
    console.log(toJS(this.props.offerStore));
  }

  render() {
    return (
      <div>
        {!this.props.offerStore!.currentUser.email ? (
          <Route exact path="/" component={EmailForm} />
        ) : (
          <Route exact path="/" component={Offers} />
        )
        }
      </div>
    );
  }
}

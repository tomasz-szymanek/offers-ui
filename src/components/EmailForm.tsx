import OfferStore from "../stores/OfferStore";
import React, { FormEvent, ChangeEvent } from 'react';
import { inject } from 'mobx-react';

interface LoginFormProps {
  offerStore: OfferStore;
}

interface LoginFormState {
  value: string;
}

@inject('offerStore')
export default class LoginForm extends React.Component<LoginFormProps, LoginFormState> {
  public state: LoginFormState = {
    value: ''
  };

  constructor(props: LoginFormProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: ChangeEvent<HTMLInputElement>) {
    if (event.target) {
      this.setState({ value: event.target.value || '' });
    }
  }

  handleSubmit(event: FormEvent<HTMLFormElement>) {
    this.props.offerStore.setUserEmail(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="email-form-container">
        <form action="" onSubmit={this.handleSubmit}>
          <label htmlFor="email">User Email:</label>
          <input type="email" name="email" id="" value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="Submit!"/>
        </form>
      </div>
    );
  }
}

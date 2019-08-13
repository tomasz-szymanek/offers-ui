import { Link } from "react-router-dom";
import React from 'react';

const OfferList = (offers: Offer[], url: string) => (
  <table>
    {offers.map((offer: Offer) => (
      <tr>
        <td>{offer.name}</td>
        <td>${offer.price}</td>
        <td>${offer.quantity}</td>
        <td>${offer.description}</td>
        <td><button>ACCEPT</button></td>
        <td><button>REJECT</button></td>
        <td><Link to={`${url}/${offer.id}`}>Details</Link></td>
      </tr>
    )) }
  </table>
);

export default OfferList;

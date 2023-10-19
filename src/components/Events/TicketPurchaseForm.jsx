// TicketPurchaseForm.js

import React, { useState } from 'react';

function TicketPurchaseForm({ event }) {
  const [ticketType, setTicketType] = useState('Regular');
  const [quantity, setQuantity] = useState(1);

  const calculateTotalPrice = (ticketType) => {
    switch (ticketType) {
      case 'Regular':
        return event.regular_price * quantity;
      case 'MVP':
        return event.mvp_price * quantity;
      case 'Early Booking':
        return event.early_booking_price * quantity;
      default:
        return 0;
    }
  };

  const totalPrice = calculateTotalPrice(ticketType);

  return (
    <div>
      <select value={ticketType} onChange={(e) => setTicketType(e.target.value)}>
        <option value="Regular">Regular</option>
        <option value="MVP">MVP</option>
        <option value="Early Booking">Early Booking</option>
      </select>
      <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      <p>Total Price: ${totalPrice}</p>
    </div>
  );
}
export default TicketPurchaseForm;
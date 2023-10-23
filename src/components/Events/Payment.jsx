import React, {useState} from 'react'

function Payment({ event }) {
  const [ticketType, setTicketType] = useState('MVP');
  const [quantity, setQuantity] = useState(1);

  const calculatePrice = () => {
    const basePrice = event.price;
    let price = basePrice;

    if (ticketType === 'MVP') {
      price = basePrice * 1.3;
    } else if (ticketType === 'Early Booking') {
      price = basePrice * 0.8;
    }

    return price * quantity;
  };

  const handlePayment = () => {
    const ticketData = {
      event_id: event.id,
      ticket_type: ticketType,
      quantity: quantity,
    };

    fetch('http://localhost:3000/tickets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ticketData),
    })
      .then((response) => response.json())
      .then((ticket) => {

        const paymentData = {
          ticket_id: ticket.id,
          amount: calculatePrice(),
          status: 'completed',
        };

        fetch('http://localhost:3000/payments', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(paymentData),
        })
          .then((response) => response.json())
          .then((payment) => {
            console.log('Payment completed:', payment);
          })
          .catch((error) => {
            console.error('Payment failed:', error);
          });
      })
      .catch((error) => {
        console.error('Ticket could ot be created', error);
      });
  }; 

  return (
    <div>
      <h1>Payment Page</h1>
      <h2>Event Details</h2>
      <p>Title: {event.title}</p>
      <p>Time: {event.start_time} to {event.end_time}</p>
      <p>Price: Ksh. {event.price}</p>

      <h2>Choose Your Ticket</h2>
      <select value={ticketType} onChange={(e) => setTicketType(e.target.value)}>
        <option value="MVP">MVP</option>
        <option value="Early Booking">Early Booking</option>
        <option value="Regular">Regular</option>
      </select>

      <h2>Choose Quantity</h2>
      <input
        type="number"
        value={quantity}
        min={1}
        max={10}
        onChange={(e) => setQuantity(e.target.value)}
      />

      <h2>Total Price</h2>
      <p>Ksh. {calculatePrice()}</p>
      <button
        onClick={handlePayment}
        className="btn btn-primary rounded-md text-sm italic bg-lighter-blue text-text-color font-sans font-bold uppercase px-[30px] py-[10px]"
      >
        Confirm Payment
      </button>
    </div>
  )
}

export default Payment
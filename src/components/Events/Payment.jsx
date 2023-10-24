import React, {useState} from 'react'

function formatTime(timeString) {
  const time = new Date(timeString);
  const hours = time.getHours() % 12 || 12;
  const minutes = time.getMinutes();
  const ampm = time.getHours() >= 12 ? 'PM' : 'AM';

  return `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleDateString(undefined, { month: 'short' });
  const formattedDay = addSuffix(day);

  return (
    <div className="event-date">
      <p className="day pr-[5px]">{formattedDay} <span>{month} </span></p>
    </div>
  );
}

function addSuffix(day) {
  if (day >= 11 && day <= 13) {
    return day + 'th';
  }
  switch (day % 10) {
    case 1:
      return day + 'st';
    case 2:
      return day + 'nd';
    case 3:
      return day + 'rd';
    default:
      return day + 'th';
  }
}


function Payment({ event }) {
  const [ticketType, setTicketType] = useState('MVP');
  const [quantity, setQuantity] = useState(0);

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
    <div className='payment-container pl-[20px] font-sans'>
      <h6>Checkout</h6>
      <div className='details-container mt-[15px] mb-[15px]'>
        <div className="date-time flex mt-0 mb-0">
          <p>{formatDate(event.date)}</p>
          <p> | from   </p>
          <p className='ml-[5px]'> {formatTime(event.start_time)} to {formatTime(event.end_time)}</p>
        </div>
        <p className='font-bold mb-0'>{event.title}</p>
        <p className='text-lighter-blue mt-0 mb-0'>at the {event.venue_name}, {event.event_location}</p>
      </div>
      
      <div className="ticket-details flex flex-col align-items-center gap-[20px]">
          <div className="labels flex rounded-md gap-[120px] uppercase mt-[15px] bg-text-color mb-[15px] mt-[10px] px-[10px] py-[10px] w-[700px]">
            <label htmlFor="ticketType">Ticket Type</label>
            <label htmlFor="quantity">Quantity</label>
            <label htmlFor="price">Price</label>
            <label htmlFor="totalPrice">Total Price</label>
          </div>

          <div className="details rounded-md flex gap-[80px] items-center bg-text-color px-[10px] py-[10px] w-[700px]">
            <div className="ticket-type w-[150px] p-2 my-1 border border-gray-300 rounded-md">
              <select id="ticketType" value={ticketType} onChange={(e) => setTicketType(e.target.value)}>
                <option value="MVP">MVP</option>
                <option value="Early Booking">Early Booking</option>
                <option value="Regular">Regular</option>
              </select>
            </div>

            <div className="quantity w-[100px] ml-[-21px] p-2 my-1 border border-gray-300 rounded-md">
              <input type="number" id="quantity" value={quantity} min={0} max={10} onChange={(e) => setQuantity(e.target.value)}  />
            </div>

            <div className="price ml-[13px]">
              <p>{event.price}</p>
            </div>

            <div className="total-price ml-[57px]">
              <p>{calculatePrice()}</p>
            </div>
          </div>

          <div className="total-price font-bold uppercase flex gap-[500px] ">
              <p className='font-bold'>Total</p>
              <p className='font-bold'>Kes {calculatePrice()}</p>
          </div>
      </div>

      <button
        onClick={handlePayment}
        className="btn btn-primary rounded-full text-sm italic bg-checkout-btn text-text-color font-sans px-[25px] py-[10px] mt-[20px]"
      >
        Check out
      </button>
    </div>
  )
}

export default Payment
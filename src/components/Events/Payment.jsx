import React, {useState} from 'react'

function Payment({ event }) {
  const [ticketType, setTicketType] = useState('MVP');
  const [quantity, setQuantity] = useState(1);
  return (
    <div>Payment</div>
  )
}

export default Payment
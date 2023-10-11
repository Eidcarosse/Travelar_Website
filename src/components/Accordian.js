import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import '../Stylesheets/Accordian.css'

export default function Accordian() {
  return (
    <>
    <div className="Cr_Container">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>How do I book a ride?</Accordion.Header>
          <Accordion.Body>
            <strong>Enter Your Destination:</strong> After signing in, enter
            your destination in the app. Most apps have a search bar where you
            can type in the address or location you want to go to.
            <br />
            <strong>Choose Your Ride:</strong> The app will usually display a
            list of available vehicles, along with details such as car types,
            estimated arrival times, and prices. You can select the type of car
            you want to ride in based on your preferences and budget.
            <br />
            <strong>Confirm Ride Details:</strong> Review the ride details,
            including the estimated fare, pickup location, and drop-off
            location. Make sure everything is correct before proceeding.
            <br />
            <strong>Payment Method:</strong> You'll need to set up a payment
            method if you haven't already. Common payment methods include
            credit/debit cards or digital wallets like PayPal.
            <br />
            <strong>Book the Ride:</strong> Once you've confirmed the ride
            details and selected your payment method, you can book the ride.
            This is typically done by tapping a "Book" or "Confirm" button.
            <br />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            What is the avarage medicine deilivery cost?
          </Accordion.Header>
          <Accordion.Body>
            Well, that depands on two factors:<br/>
            <strong>1. Distance</strong> and <br/>
            <strong>2. Urgency</strong>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            What is the average discount on my initial rides?
          </Accordion.Header>
          <Accordion.Body>
            Enjoy <strong>20%</strong> off on your first rides, and is subject to change by loyalty coupons.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      </div>
    </>
  );
}

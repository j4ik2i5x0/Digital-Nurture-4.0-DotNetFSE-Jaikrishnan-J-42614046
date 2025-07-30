import React from 'react';
import './App.css';

// --- Components for different views ---

// Component for the logged-in user's view
function UserPage() {
  const flights = [
    { id: 'AI-202', from: 'Chennai', to: 'Delhi', time: '10:00 AM' },
    { id: '6E-555', from: 'Mumbai', to: 'Bengaluru', time: '2:00 PM' },
  ];

  return (
    <div className="page-content">
      <h2>Welcome back</h2>
      <p>Here are the available flights. You can now book your tickets.</p>
      <div className="flight-list">
        {flights.map(flight => (
          <div key={flight.id} className="flight-card">
            <p><strong>Flight:</strong> {flight.id}</p>
            <p>{flight.from} to {flight.to} at {flight.time}</p>
            <button className="book-button">Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

// Component for the guest's view
function GuestPage() {
  const flights = [
    { id: 'AI-202', from: 'Chennai', to: 'Delhi', time: '10:00 AM' },
    { id: '6E-555', from: 'Mumbai', to: 'Bengaluru', time: '2:00 PM' },
  ];

  return (
    <div className="page-content">
      <h2>Please sign up.</h2>
      <p>Browse available flights below. Log in to book tickets.</p>
      <div className="flight-list">
        {flights.map(flight => (
          <div key={flight.id} className="flight-card">
            <p><strong>Flight:</strong> {flight.id}</p>
            <p>{flight.from} to {flight.to} at {flight.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// --- Button Components ---

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

// --- Main Controlling Component ---

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
    // Binding is necessary to make `this` work in the callback
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    let page;

    // Conditionally render the button and page based on login state
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
      page = <UserPage />; //
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
      page = <GuestPage />; //
    }

    return (
      <div>
        {page}
        {button}
      </div>
    );
  }
}

// The main App component renders our LoginControl
function App() {
  return (
    <div className="App">
      <LoginControl />
    </div>
  );
}

export default App;
import React from 'react';

class CurrencyConvertor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inr: 0,
      eur: 0,
    };
    // We need to bind 'this' to our event handlers
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Handles changes in the input field
  handleChange(event) {
    this.setState({ inr: event.target.value });
  }

  // Handles the conversion when the button is clicked
  handleSubmit(event) {
    event.preventDefault(); // Prevents default form submission behavior
    const exchangeRate = 90.5; // Example exchange rate: 1 EUR = 90.5 INR
    const euroValue = this.state.inr / exchangeRate;
    this.setState({ eur: euroValue.toFixed(2) }); // Update state with calculated value
  }

  render() {
    return (
      <div className="converter-card">
        <h2>INR to EUR Converter</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Indian Rupees (INR):
            <input type="number" value={this.state.inr} onChange={this.handleChange} />
          </label>
          <button type="submit">Convert</button>
        </form>
        <h3>Euro (EUR): €{this.state.eur}</h3>
      </div>
    );
  }
}

export default CurrencyConvertor;
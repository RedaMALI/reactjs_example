import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { startDate: '', endDate: '', count: -1 };

    this.handleStartChange = this.handleStartChange.bind(this);
    this.handleEndChange = this.handleEndChange.bind(this);
    this.updateCount = this.updateCount.bind(this);
  }

  handleStartChange(event) {
    this.setState({startDate: event.target.value});
    this.updateCount(event.target.value, this.state.endDate);
  }

  handleEndChange(event) {
    this.setState({endDate: event.target.value});
    this.updateCount(this.state.startDate, event.target.value);
  }

  updateCount(startDate, endDate) {
    if( !startDate || !endDate ) return;

    var date1 = new Date( startDate ); 
    var date2 = new Date( endDate ); 

    let count = (date2 - date1) / (1000 * 3600 * 24);
    this.setState( {count :  count} );
  }

  render() {
    return (
      <div className="main-container">
        <div className="form-group start-container">
          <label htmlFor="start-date">Start at</label>
          <input type="date" className="form-control" id="start-date" placeholder="Let's Go !" value={this.state.startDate} onChange={this.handleStartChange} max={this.state.endDate}/>
        </div>
        <div className="form-group end-container">
          <label htmlFor="start-date">End at</label>
          <input type="date" className="form-control" id="start-date" placeholder="Done ! Go to work !" value={this.state.endDate} onChange={this.handleEndChange} min={this.state.startDate}/>
        </div>
        { this.state.startDate && this.state.endDate && 
          <div>You will leave {this.state.count} days ! Enjoy !</div>
        }
      </div>
    );
  }
}

export default App;

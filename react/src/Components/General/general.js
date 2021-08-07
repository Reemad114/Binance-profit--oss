import React from 'react';
import MyCalendar from '../Calendar/calendar'
import MyGraph from '../Graph/graph'
class Page extends React.Component{
  constructor() {
    super(); 
    this.state = { data: [] };//defines the data state
}
  componentDidMount() {
    fetch(`/profitloss`) //fetch API that fetches data from the server to the client
      .then(res => res.json())
      .then(json => this.setState({ data: json }));
}
  render() {
    if(this.state.data.length == 0)
      return (<p>Error</p>)
    return (
      <div>
          <MyCalendar/>
          <MyGraph data = {eval(this.state.data.LTCBUSD)}/>
      </div>
    );
  }
}
export default Page;

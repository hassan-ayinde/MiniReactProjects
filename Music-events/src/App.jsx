import React, {useState} from 'react'
import EventsData from '../src/data.json'
import './App.css'


function App() {
  const [eventStatus, setEventStatus] = useState(EventsData.events.map(event => {
    return {
      status: event.status
    }   
  }));
  const colors = ["#FFDDC1", "#C1E1FF", "#D1FFC1", "#FFC1E1", "#C1C1FF"];

  const handleTicketSale = (index) => {
    // Update the status of the clicked event
    if (eventStatus[index].status === 'Buy a Ticket'){
      const updatedStatus = [...eventStatus];
      updatedStatus[index] = { status: 'Sold Out' };
      setEventStatus(updatedStatus);
    }
  };

  return (
    <div className="App">
      <h1>Music events</h1>
      <p>{EventsData.location}</p>
      <div className="events-container">
        {EventsData.events.map((event, index) => {
          const bgColor = colors[index % colors.length];
          return (
            <div key={index} className="event-card">
              <div className='event-date-time' style={{backgroundColor: bgColor}}>
                <p className='event-date'>{event.date}</p>
                <p>{event.time}</p>
              </div>
              <div>
                <h4>{event.title}</h4>
                <p className='event-description'>{event.description}</p>
              </div>
              <div className='event-status'>
                <button onClick={() => handleTicketSale(index)}>{eventStatus[index].status}</button>
              </div>
            </div>
          )
        })}
      </div>
      
    </div>
  )
}

export default App

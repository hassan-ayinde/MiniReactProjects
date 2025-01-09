import React from 'react'
import EventsData from '../src/data.json'
import './App.css'


function App() {
  const colors = ["#FFDDC1", "#C1E1FF", "#D1FFC1", "#FFC1E1", "#C1C1FF"];

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
                <button>{event.status}</button>
              </div>
            </div>
          )
        })}
      </div>
      
    </div>
  )
}

export default App

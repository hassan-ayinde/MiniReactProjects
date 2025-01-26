import React from 'react'

const EventsDisplay = () => {
    const events = [
        { title: "Weekly Plant Care Workshop", time: "10:00 AM - 11:00 AM", status: "Done" },
        { title: "Succulent Seminar", time: "1:00 PM - 1:30 PM", status: "In Progress" },
        { title: "Monthly Plant Swap", time: "2:00 PM - 3:00 PM", status: "Not Started" },
    ];

  return (
    <div className='flex items-center justify-center h-screen'>
        <div className='p-4 bg-white rounded-lg shadow-lg'>
            <h1>Today</h1>
            <ul>
                {
                    events.map((event,index) => {
                        return ( 
                            <li key={index} className='flex items-center'>
                                <span className='w-4 h-4 rounded-full block bg-red-500'></span>
                                <div className='flex-2'>
                                    <h4>{event.title}</h4>
                                    <p>{event.time}</p>
                                </div>
                                <span className='text-left border border-blue-300 border-solid'>{event.status}</span>
                            </li>
                        )
                    })
                }
            </ul>
            <button>+</button>
        </div>
    </div>
  )
}

export default EventsDisplay
import React, { useState } from "react";
import { IoIosCheckmark } from "react-icons/io";
import AddMeeting from "./AddMeeting";

const EventsDisplay = () => {
    const EventsList = [
        { title: "Weekly Plant Care Workshop", startTime: "10:00 AM", endTime: "11:00 AM", status: "Done" },
        { title: "Succulent Seminar", startTime: "1:00 PM", endTime: "1:30 PM", status: "In Progress" },
        { title: "Monthly Plant Swap", startTime: "2:00 PM", endTime: "3:00 PM", status: "Not Started" },
    ]
    const [events, setEvents] = useState(EventsList);

  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleStatusChange = (index) => {
    setEvents((prevEvents) => {
      return prevEvents.map((event, i) => {
        if (i === index) {
          if (event.status === "Not Started") {
            return { ...event, status: "In Progress" };
          } else if (event.status === "In Progress") {
            return { ...event, status: "Done" };
          }
        }
        return event;
      });
    });
  };

   // Function to add a new event
   const addEvent = (newEvent) => {
    setEvents((prevEvents) => [...prevEvents, newEvent]);
    setIsModalOpen(false);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-4 bg-white rounded-lg shadow-lg w-72 mx-auto sm:w-96">
        <h1 className="text-lg font-semibold mb-4">Today</h1>
        <ul className="space-y-4">
          {events.map((event, index) => {
            return (
              <li key={index} className="flex items-center space-x-4">
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center cursor-pointer 
                    ${
                      event.status === "Done"
                        ? "bg-pink-300 text-black"
                        : event.status === "In Progress"
                        ? "outline outline-solid outline-blue-500"
                        : "bg-gray-300"
                    }`}
                  onClick={() => handleStatusChange(index)}
                >
                  {event.status === "Done" && <IoIosCheckmark />}
                </span>
                <div className="flex-1">
                  <h4 className="text-sm font-medium">{event.title}</h4>
                  <p className="text-xs text-gray-500">{event.startTime} - {event.endTime}</p>
                </div>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    event.status === "Done"
                      ? "bg-pink-200 text-pink-800"
                      : event.status === "In Progress"
                      ? "bg-blue-200 text-blue-800"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {event.status}
                </span>
              </li>
            );
          })}
        </ul>
        <button 
            className="mt-4 w-full text-white bg-yellow-500 py-2 rounded-lg hover:bg-yellow-600 cursor-pointer"
            onClick={() => setIsModalOpen(true)}
        >
          +
        </button>

        {/* {isModalOpen && (
                    <div className="fixed top-0 left-0 w-full h-full bg-opacity-50 flex justify-center items-center">
                        <div className="bg-white p-6 rounded-lg shadow-lg w-fit">
                            <button
                                className="absolute top-2 right-2 text-gray-500"
                                onClick={() => setIsModalOpen(false)}
                            >
                                ✖
                            </button>
                            <AddMeeting addEvent={addEvent} />
                        </div>
                    </div>
                )
        } */}

        <AddMeeting isOpen={isModalOpen} addEvent={addEvent} onCancel={() => setIsModalOpen(false)} />
      </div>
    </div>
  );
};

export default EventsDisplay;

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { format } from "date-fns";

import "react-datepicker/dist/react-datepicker.css";

const AddMeeting = () => {
    const [meetingDetails, setMeetingDetails] = useState({
        title: '',
        date:null,
        startTime:null,
        endTime:null
    })


    const handleFormSubmit = (e) => {
        e.preventDefault();


        function convertTo12HourFormat(hour, minute) {
            const period = hour >= 12 ? 'PM' : 'AM';
            const adjustedHour = hour % 12 || 12; // Convert 0 hour to 12 for AM
            const adjustedMinute = minute < 10 ? `0${minute}` : minute; // Ensure minutes have leading zero if less than 10
            return `${adjustedHour}:${adjustedMinute} ${period}`;
        }
        
        // Check if startTime and endTime are valid Date objects
        const savedStartTime = meetingDetails.startTime 
            ? convertTo12HourFormat(meetingDetails.startTime.getHours(), meetingDetails.startTime.getMinutes())
            : "Not Set";

        const savedEndTime = meetingDetails.endTime 
            ? convertTo12HourFormat(meetingDetails.endTime.getHours(), meetingDetails.endTime.getMinutes())
            : "Not Set";

        const savedMeetingDetails = {
            savedTitle: meetingDetails.title? meetingDetails.title:"Not Set",
            savedDate: meetingDetails.date ? meetingDetails.date.toDateString() : "Not Set",
            savedStartTime: savedStartTime,
            savedEndTime: savedEndTime
        }
        console.log("Meeting Details:", savedMeetingDetails);
        setMeetingDetails({
            title:'',
            date:'',
            startTime:'',
            endTime:''
        })
    }


  return (
    <div>
        <h1>Add Meeting</h1>
        <form action="" onSubmit={handleFormSubmit}>
            <div>
                <label htmlFor="">Title</label>
                <input type="text" name="" id="" 
                    className="border border-solid w-full" placeholder="Enter Title"
                    value={meetingDetails.title}
                    onChange={(e) =>
                        setMeetingDetails({...meetingDetails,title:e.target.value})
                    }
                />
            </div>
            <div className="w-full">
                <label htmlFor=""></label>
                <DatePicker
                    selected={meetingDetails.date}
                    minDate={(new Date()).toDateString()}
                    onChange={(date) =>
                        setMeetingDetails({ ...meetingDetails, date: date })
                    }
                    // dateFormat="d, MMMM yyyy"
                    customInput={
                        <CustomDateInput
                          selectedDate={meetingDetails.date}
                        />
                    }
                />
            </div>
            <div>
                <div>
                    <label htmlFor="">Start</label>
                    <DatePicker
                        selected={meetingDetails.startTime}
                        onChange={(date) =>
                            setMeetingDetails({ ...meetingDetails, startTime: date })
                        }
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={1}
                        timeCaption="Time"
                        dateFormat="h:mm aa"
                        placeholderText="02:00 PM"
                        className="px-2 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                    />                  
                </div>
                <div>
                    <label htmlFor="">End</label>
                    <DatePicker
                        selected={meetingDetails.endTime}
                        onChange={(date) =>
                            setMeetingDetails({ ...meetingDetails, endTime: date })
                        }
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={1}
                        minTime={meetingDetails.startTime || new Date()}  // Use startTime as minTime
                        maxTime={new Date().setHours(23, 59, 59)}
                        timeCaption="Time"
                        dateFormat="h:mm aa"
                        placeholderText="07:07 PM"
                        className="px-2 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                    /> 
                </div>
            </div>
            <button type="submit" className="mt-4 w-full text-white bg-yellow-500 py-2 rounded-lg hover:bg-yellow-600 cursor-pointer">Save</button>
        </form>
    </div>
  )
}

const CustomDateInput = React.forwardRef(({onClick, selectedDate}, ref) => {
    return (
      <input
        ref={ref}
        type="text"
        readOnly
        placeholder="Friday,23 Februrary 2024"
        value={selectedDate ? format(selectedDate, "EEEE, d MMMM yyyy") : ""}
        onClick={onClick}
        className="px-2 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
      />
    );
  });

export default AddMeeting
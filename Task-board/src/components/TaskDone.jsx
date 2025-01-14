import React from 'react'

const TaskDone = ({task,icon,openModal}) => {
  return (
    <div>
        <div className='flex items-center gap-2'>
            <h1>{task}</h1>
            <span 
              className='text-slate-400 add-icon'
              onClick={openModal}
            >{icon}</span>
        </div>
    </div>
  )
}

export default TaskDone
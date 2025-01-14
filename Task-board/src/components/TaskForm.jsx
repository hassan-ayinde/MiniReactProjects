import React from 'react'

const TaskForm = ({closeModal}) => {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
      <div className='relative p-4 w-fit max-w-md bg-white rounded-lg shadow-lg'>
        <div className="flex justify-between items-center mb-5">
          <h1 class="text-2xl font-semibold text-gray-900 dark:text-white">Add Task</h1>
          <button onClick={closeModal} class="text-gray-400 hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-200">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <form action="">
          <div class="mb-5">
            <label for="task_title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task Title</label>
            <input type="text" id="task_title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
          </div>
          <div>
            <label for="task_date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task Date</label>
            <input type="date" id="task_date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
          </div>
          <div>
            <fieldset>
              <legend class="sr-only">Countries</legend>
              <p class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Task Priority</p>
              <div class="flex items-center mb-4">
                <input id="country-option-1" type="radio" name="task_priority" value="High"/>
                <label for="country-option-1" class="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
                  High
                </label>
              </div>

              <div class="flex items-center mb-4">
                <input id="country-option-2" type="radio" name="task_priority" value="Medium" />
                <label for="country-option-2" class="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Medium
                </label>
              </div>

              <div class="flex items-center mb-4">
                <input id="country-option-3" type="radio" name="task_priority" value="Low"/>
                <label for="country-option-3" class="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Low
                </label>
              </div>
            </fieldset>
          </div>
          <div>
            <label htmlFor="" className='block'>Display Picture</label>
            <input type="file" name="" accept='image/*' id="" />
          </div>
          <div>
            <label for="task_description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task Description</label>
            <textarea id="task_description" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required></textarea>
          </div>
          <div class="mt-5">
            <button className='bg-slate-700 w-full text-amber-100 rounded-md'>Submit</button>
          </div>
        </form>


      </div>
    </div>
  );
};

export default TaskForm
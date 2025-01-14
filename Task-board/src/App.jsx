import React, {useState} from 'react'
import Todo from './components/Todo'
import './App.css'
import InProgress from './components/InProgress';
import UnderReview from './components/UnderReview';
import TaskDone from './components/TaskDone';
import { FaPlus } from "react-icons/fa";
import TaskForm from './components/TaskForm';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleOptionChange = (e) => {
    setSelectedCategory(e.target.value);
    setIsModalOpen(false);
  }


  const renderTask = () => {
    switch(selectedCategory) {
      case 'To do':
        return <Todo task={selectedCategory} icon={<FaPlus/>} openModal={openModal}/>
      case 'In Progress':
        return <InProgress task={selectedCategory} icon={<FaPlus/>} openModal={openModal}/>
      case 'Under Review':
        return <UnderReview task={selectedCategory} icon={<FaPlus/>} openModal={openModal}/>
      case 'Done':
        return <TaskDone task={selectedCategory} icon={<FaPlus/>} openModal={openModal}/>
      default:
        return null; 
    }
  }

  const renderAddTask = () => {
    if(selectedCategory){
      setTasks([...tasks, selectedCategory])
    }
  }
  


  return (
    <div>
      <h1>Task Board</h1>
      
      <form class="max-w-sm">
        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Task Category</label>
        <select id="countries" 
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
          name="task"
          onChange={handleOptionChange}
        >
          <option value=''>Task Category</option>
          <option value='To do'>To do</option>
          <option value='In Progress'>In Progress</option>
          <option value='Under Review'>Under Review</option>
          <option value='Done'>Done</option>
        </select>
      </form>

      <div>
        <div class="mt-5 font-bold flex items-center gap-2">
          {renderTask()}
        </div>
        {isModalOpen && <TaskForm closeModal={closeModal} />}
      </div>
    </div>
  )
}

export default App;

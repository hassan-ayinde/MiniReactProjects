import './App.css'
import FileUploadInput from './components/FileUploadInput'

function App() {

  return (
    <div className="App w-11/12 max-w-sm h-auto bg-white mx-auto mt-10 p-5 rounded-lg shadow-lg">
      <h1 className='font-bold'>Upload Photo</h1>
      <div className='mt-5 rounded-lg'>
        <FileUploadInput />
      </div>
    </div>
  )
}

export default App

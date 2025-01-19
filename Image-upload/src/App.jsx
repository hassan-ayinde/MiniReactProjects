import './App.css'
import FileUploadInput from './components/FileUploadInput'

function App() {

  return (
    <div className="App w-72 h-48 bg-white mx-auto mt-10 p-5 rounded-lg shadow-lg">
      <h1>Upload Photo</h1>
      <FileUploadInput />
    </div>
  )
}

export default App

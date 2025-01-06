import './App.css'
import RecipeImage from '../src/assets/images/recipe-img.jpg'

function App() {

  return (
    <div>
        <figure>
          <img src={RecipeImage} alt="" />
          <figcaption>sweet iced coffee with coconut milk</figcaption>
        </figure>
    </div>
  )
}

export default App
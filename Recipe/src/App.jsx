import './App.css'
import RecipeImage from '../src/assets/images/recipe-img.jpg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar, faClock} from '@fortawesome/free-regular-svg-icons'
import {faCertificate, faWallet} from '@fortawesome/free-solid-svg-icons'

function App() {

  return (
    <div className="recipe">
      <figure>
        <img src={RecipeImage} alt="" />
        <figcaption>sweet iced coffee with coconut milk</figcaption>
      </figure>
      <div className='recipe-content'>
        <div className='recipe-header'>
          <div>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
          <h1>sweet iced coffee with coconut milk</h1>
        </div>
        <div className='recipe-info'>
          <div className='recipe-info-item'>
            <FontAwesomeIcon icon={faClock} />
            <div >
              <p>total time</p>
              <p>10 minutes</p>
            </div>
          </div>
          <div className='recipe-info-item'>
            <FontAwesomeIcon icon={faCertificate} />
            <div>
              <p>level</p>
              <p>10 minutes</p>
            </div>
          </div>
          <div className='recipe-info-item'>
            <FontAwesomeIcon icon={faWallet} />
            <div>
              <p>budget</p>
              <p>under $2</p>
            </div>
          </div>
        </div>
        <div>
          <p>Sweet iced coffee with coconut milk is easy to make and stores well in fridge.</p>
          <p>Make a a large batch and save yourself a few trips to the coffee shop</p>
        </div>
        <div className='recipe-ingredients'>
          <h2>Ingredients</h2>
          <ul>
            <li>3 table spoon of Espressor coffe powder</li>
            <li>1 cup of boil water</li>
            <li>1 cup of coconut milk</li>
            <li>1/4 cup of sugar</li>
          </ul>
        </div>
        <div className='recipe-instructions'>
          <h2>Instructions</h2>
          <ol>
            <li>Boil water and let it sit for 1 -2 minutes.</li>
            <li>Put the coffee ground into a cafetier and pour in the water.</li>
            <li>Let the coffee step for 5 minutes and slowly press down the plunger on your cafetier.</li>
            <li>Pur the coffee into a jug, allow to cool then chill for several hours.</li>
            <li>Whisk in the coconut milk and condensed milk and serve over plenty of ice.</li>
            <li>This coffee can be stored in the fridge for up to 5 days, Shake or stir again before serving.</li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default App
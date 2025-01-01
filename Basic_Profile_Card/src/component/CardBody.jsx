import React,{useState} from 'react'
import ProfilePic from '../assets/images/ellipse.png'

const CardBody = () => {
    const [follow, setFollow] = useState(false)
    const handleFollowBtnClick = () => {
        setFollow(!follow);
    }
    const followBtnStyle = {
        backgroundColor: follow?'#973150':'#E03F8C',
        transition: 'all 0.5s ease',
    }
  return (
    <div className='card_body'>
        <div className='cardbody_header'>
            <img src={ProfilePic} alt="" style={{width:'120px', paddingTop: '10px'}}/>
        </div>
        <div className='cardbody_content'>
            <div className='cardbody_title'>
                <h2>Jonny Rogers</h2>
                <p style={{color:'#838383',fontSize:'14px'}}>@jonnyrogers</p>
            </div>
            <div className='cardbody_social'>
                <i className="fab fa-facebook fa-lg"></i>
                <i className="fab fa-linkedin fa-lg"></i>
                <i className="fa-brands fa-x-twitter fa-lg"></i>
                <i className="fab fa-instagram fa-lg"></i>
                <i className="fa-brands fa-dribbble fa-lg"></i>
            </div>
            <div className='cardbody_text'>
                <p>Crafting brand and communication strategies, creating visual designs,
                leading art direction, and capturing portraits through photography.</p>
            </div>
        </div>
        <div className='cardbody_footer'>
            <button onClick={handleFollowBtnClick} style={followBtnStyle}>{follow?'Unfollow':'Follow'}</button>
            <button className='cardbody_button'>Message</button>
        </div>
    </div>
  )
}

export default CardBody
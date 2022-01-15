import './footer.css'
import fb from './images/facebook.svg'
import mail from './images/mail.svg'
import ins from './images/instagram.svg'


const Footer = () =>{
    return <div className='footerDiv'>
        <h3>Oritopet: No 1 Online Store in Nigeria</h3>
        <p>
            Oritopet is an online store where you can get all your favourite fashion brands
            ,Calvin , Nike, Addidas, etc.
            Is it fashionable? If yes, then we have you covered. You don't need to go far to 
            find your favourite items. We offer a wide range of products

        </p>
        <p>Oritopet offers amazing deals and discounts all year around, all for the satisfaction and joy of our customers.
            Our newsletter subscribers and Facebook fans get to know all of our offers before anyone else such as Christmas, 
            Ramadan, Oritopet Anniversary, and Black Friday.</p>

        <h3>Oritopet: Get your Food Products</h3>
        <p>
            Oritopet also offers you all your favourite food brands. While you
            take care of your looks outside, we help you feel good inside.
            All your favourite and healthy brands affordable at all our stores

        </p>
        <div className='newsletterInfo'>
              <div className='newsletter' >
                <h3>Newsletter</h3>
                <p>Hear it first!</p>
                <input placeholder='Email Address' type='text' name='newsletter' id='newsletter'/>
                <button>send</button>
             </div>
             <div className='contactDiv'>
                <h3>Address:</h3><p>Number 32 Lekki Express Way,Lagos aksdjljsdo sdfowei sdfowei ewo</p>
                <h3>Contact:</h3>
                <div className='socialIcons'>

                    <a href='#'><img src={fb} alt=''/></a>
                <a href='#'><img src={mail} alt=''/></a>
                <a href='#'><img src={ins} alt=''/></a>
                </div>
                



                </div>

        </div>
       
        <p> A copyright of Oritopet Stores</p>

    </div>
}

export default Footer
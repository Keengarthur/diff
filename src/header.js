import './header.css'
import Slider from './slider'

const Header = () =>{
    return <section className='headerSection'>
            <div className='header1'>
                <div>

                    <p>
                    Be the first to know of our latest releases
                </p>
                
                <input placeholder='email address'/>
                <button>Subscribe</button>
                </div>
                
            </div>
            <div className='header2'>
                <Slider/>
            </div>
            <div className='header3'>
                <div>
                    <div>
                        <p>
                   You too could get gifts, become a customer
                </p>
                <p>Simply Register Above</p>
                        </div></div>
                 <div className='lastChild'>
                    <div>
                        <p>

                            Discounts don't only happen on Black Friday
                       </p>
                        </div>
                        </div>            
            </div>

    </section>
}
export default Header
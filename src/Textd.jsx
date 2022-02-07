import Image from './images/icon-clock.svg';
import Imagea from './images/icon-ethereum.svg';
import Imagep from './images/image-avatar.png';
export default function Textd() {
    return(
        <div>
            <h2> Equilibrium #3429 
</h2>
        <p className='opacity'> Our Equilibrium collection promotes balance and calm.</p>
        <div>
            <div className="imagetext">
                <div className="image1">
                <img src={Imagea} alt="h" className='imagegreen' />
                <p className='greenno'> 0.041 ETH</p>
                </div>
                <div className="image2">
                <img src={Image} alt="f" className='imageblue' />
                <p className='opacity'>3 days left</p>
                </div>
            </div>
            <hr/>
        </div>
        <div className='final'>
        <img src={Imagep} alt="profile" className='profile' />
        <p> <span className='opacity'> creation of</span> Nesh Legacy</p>
        </div>
        </div>
    )
    
} 
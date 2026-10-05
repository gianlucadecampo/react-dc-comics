import facebookLogo from '../../assets/footer-facebook.png'
import twitterLogo from '../../assets/footer-twitter.png'
import youtubeLogo from '../../assets/footer-youtube.png'
import pinterestLogo from '../../assets/footer-pinterest.png'
import periscopeLogo from '../../assets/footer-periscope.png'

export default function Footer() {
    return (
        <div className='flex justify-around bg-gray-700 p-5'>
            <button className='border-2 p-2 border-blue-400 text-white'>SIGN-UP NOW!</button>
            <ul className='flex gap-4 place-items-center'>
                <li className='font-semibold text-blue-400'>FOLLOW US</li>
                <li><img src={facebookLogo} alt="" /></li>
                <li><img src={twitterLogo} alt="" /></li>
                <li><img src={youtubeLogo} alt="" /></li>
                <li><img src={pinterestLogo} alt="" /></li>
                <li><img src={periscopeLogo} alt="" /></li>
            </ul>
        </div>
    )
}

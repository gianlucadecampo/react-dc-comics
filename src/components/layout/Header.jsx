import dcLogo from '../../assets/dc-logo.png'

export default function Header() {
    return (
        <div className="flex justify-around place-items-center p-5">
            <img src={dcLogo} alt="logo" className='size-15' />
            <ul className="flex gap-5">
                <li>CHARACTERS</li>
                <li>COMICS</li>
                <li>MOVIES</li>
                <li>TV</li>
                <li>GAMES</li>
                <li>COLLECTIBLES</li>
                <li>VIDEOS</li>
                <li>FANS</li>
                <li>NEWS</li>
                <li>SHOP</li>
            </ul>
        </div>

    )
}

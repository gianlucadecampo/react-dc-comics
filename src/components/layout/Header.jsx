import dcLogo from '../../assets/dc-logo.png'

export default function Header() {
    const menuSections = ['CHARACTERS', 'COMICS', 'MOVIES', 'TV', 'GAMES', 'COLLECTIBLES', 'VIDEOS', 'FANS', 'NEWS', 'SHOP']
    return (
        <div className="flex justify-around place-items-center p-5 mx-5">
            <img src={dcLogo} alt="logo" className='size-15' />
            <ul className="flex gap-5 tracking-tight font-semibold">
                {menuSections.map((element, index) => (
                    <li key={index}>{element}</li>
                )) //definition of multiple DOM tags with .map()
                }
            </ul>
        </div>
    )
}

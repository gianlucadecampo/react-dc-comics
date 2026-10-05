//Creating ui element with props

export default function Card({ img, name }) {
    return (
        <div className='flex flex-col'>
            <img src={img} alt={name} className='h-40 w-40 object-cover object-top mt-10' />
            <span className='text-white uppercase mt-2 font-medium text-sm'>{name}</span>
        </div>
    )
}

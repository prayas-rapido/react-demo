import Image from 'next/image'

export const Avatar = ({ imageUrl }) => {
    return (
        <img className="rounded-full" src={imageUrl} alt='Url Not Found' width={100} height={100} />
    )
}
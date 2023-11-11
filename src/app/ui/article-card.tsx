import Image from 'next/image'

export const Card = ({index}: {index: number}) => {
  return (
    <article className='rounded bg-[#00183d] relative break-inside-avoid-column group mb-4'>
      <figure className='w-full bg-ghost-white rounded-t relative'>
        <img src={`https://source.unsplash.com/random/${index}`} alt='random unsplash image' className='h-auto rounded-t' />
      </figure>
      <div className='invisible group-hover:visible transition-[visibility] absolute inset-0 m-auto rounded w-[90%] h-[85%] blur-sm bg-sapphire/[0.17] backdrop-blur-sm shadow-[-13px_15px_18px_0px_rgba(0,0,0,0.4)]'></div>
    </article>
  )
}

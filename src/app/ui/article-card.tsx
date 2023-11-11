'use client'
import { useColor } from 'color-thief-react'

export const Card = ({index}: {index: number}) => {
  const { data } = useColor(`https://source.unsplash.com/random/${index}`, 'rgbArray', { crossOrigin: 'Anonymous' })
  return (
    <article className='bg-[#00183d] group bg-inherit relative break-inside-avoid-column mb-4'>
      <figure className='w-full relative'>
        <img src={`https://source.unsplash.com/random/${index}`} alt='random unsplash image' className='h-auto rounded-lg brightness-50 group-hover:brightness-100 transition-[filter]' />
      </figure>
      <div className='inset-0 absolute grid place-content-center group-hover:invisible'>
        <span className='text-xl font-semibold'>Title {index}</span>
      </div>
      <div className={`invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity absolute inset-0 m-auto rounded-lg w-[90%] h-[85%] blur-sm bg-[${data ? data[0] : 0}, ${data ? data[1] : 0}, ${data ? data[2] : 0}]/[0.25] backdrop-blur-sm shadow-[-13px_15px_18px_0px_rgba(${data ? data[0] : 0}, ${data ? data[1] : 0}, ${data ? data[2] : 0},0.4)]`}></div>
    </article>
  )
}

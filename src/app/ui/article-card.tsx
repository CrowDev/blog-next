'use client'
import { useColor } from 'color-thief-react'

export const Card = ({value, term = ''}: {value: number, term: string}) => {
  const { data } = useColor(`https://source.unsplash.com/random/${value}`, 'rgbArray', { crossOrigin: 'Anonymous' })
  return (
    <article className='bg-[#00183d] group bg-inherit relative break-inside-avoid-column mb-4'>
      <figure className='w-full relative'>
        <img src={`https://source.unsplash.com/random/${value}`} alt='random unsplash image' className='h-auto rounded-lg brightness-50 group-hover:brightness-100 transition-[filter]' />
      </figure>
      <div className='inset-0 absolute grid place-content-center group-hover:invisible'>
        <span className='text-xl font-semibold'>Title {value}</span>
      </div>
      <div className={`z-10 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity absolute inset-0 m-auto rounded-lg w-[90%] h-[85%]  bg-[${data ? data[0] : 0}, ${data ? data[1] : 0}, ${data ? data[2] : 0}]/[0.25] backdrop-blur-sm shadow-[-13px_15px_18px_0px_rgba(${data ? data[0] : 0}, ${data ? data[1] : 0}, ${data ? data[2] : 0},0.4)] grid grid-rows-[30%_50%_20%] gap-1 p-3`}>
        <div className='w-[250px] justify-self-center text-xl font-semibold selection:bg-indigo/[0.6]'>Title {value}</div>
        <div className='w-[250px] justify-self-center selection:bg-indigo/[0.6] '>
          <p className='line-clamp-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at sem sit amet enim molestie consequat at eu purus. Phasellus.</p>
        </div>
        <button className='px-2 py-1.5 bg-indigo/[0.6] w-[250px] h-[50px] max-h-[100%] place-self-center rounded-lg'>Read More</button>
      </div>
    </article>
  )
}

import Image from 'next/image'

export const Card = ({index}: {index: number}) => {
  return (
    <article className='rounded bg-[#00183d] relative break-inside-avoid-column'>
      <figure className='w-full bg-ghost-white rounded-t relative'>
        <img src={`https://source.unsplash.com/random/${index}`} alt='random unsplash image' className='h-auto rounded-t' />
      </figure>
      <section className='px-3 pt-3 flex flex-col'>
        <p>Title {index}</p>
        <small className='mt-1'>By: Author</small>
        <p className='mt-3'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
        </p>
        <a  className='my-5 rounded p-1.5 bg-indigo text-center w-1/2 hover:scale-105 transition-all cursor-pointer'>Read More</a>
      </section>
    </article>
  )
}

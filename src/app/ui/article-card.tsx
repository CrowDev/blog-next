export const Card = () => {
  return (
    <article className='rounded min-h-[350px] w-[300px] bg-berkeley-blue'>
      <figure className='h-[150px] w-[300px] bg-ghost-white rounded-t'>
      </figure>
      <section className='px-3 pt-3 flex flex-col'>
        <p>Title</p>
        <small className='mt-1'>By: Author</small>
        <p className='mt-3'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
        </p>
        <a className='my-5 rounded p-1.5 bg-indigo text-center w-1/2 hover:scale-105 transition-all cursor-pointer'>Read More</a>
      </section>
    </article>
  )
}

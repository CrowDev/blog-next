import { alegreya } from './fonts'

export const TitleBox = () => {
  return (
    <section className={`bg-indigo text-font mx-auto p-3 text-center flex flex-col justify-center ${alegreya.className} antialiased gap-1.5 h-[230px]`}>
      <h1 className='text-3xl font-bold'>
        The Full Stack Odyssey: Journey into Modern Frameworks
      </h1>
      <h2 className='text-xl'>Unleashing the power of pixels and logic – your frontend-backend haven.</h2>
    </section>
  )
}

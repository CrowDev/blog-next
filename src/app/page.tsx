import { oxygen } from './ui/fonts'
import { Search } from './ui/search'
import { TitleBox } from './ui/title-box'
import { Card } from './ui/article-card'

export default function Home() {
  return (
    <main className={`${oxygen.className} font-normal antialiased`}>
      <TitleBox />
      <Search />
      <section className='p-5'>
        <Card />
      </section>
    </main>
  )
}

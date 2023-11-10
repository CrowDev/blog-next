import { oxygen } from './ui/fonts'
import { Search } from './ui/search'
import { TitleBox } from './ui/title-box'

export default function Home() {
  return (
    <main className={`${oxygen.className} font-normal antialiased`}>
      <TitleBox />
      <Search />
    </main>
  )
}

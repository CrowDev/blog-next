'use client'
import { oxygen } from './ui/fonts'
import { Search } from './ui/search'
import { TitleBox } from './ui/title-box'
import { Card } from './ui/article-card'
import { useEffect, useRef, useState } from 'react'
import { useIntersection } from '@/hooks/useIntersection'

export default function Home() {
	const [elements, setElements] = useState<Array<number>>(
		Array.from({ length: 10 }, (_, i) => i)
	)
	const [isClose, elementRef] = useIntersection()
	useEffect(() => {
    if (isClose) {
      const newElements = Array.from({ length: elements.length + 10 }, (_, i) => i)
      setElements(newElements)
    }
	}, [isClose])

  return <main className={`${oxygen.className} font-normal antialiased`}>
      <TitleBox />
      <Search />
      <section className='p-5 relative columns-2xs gap-8'  >
        {
          elements.map((element) => (
            <Card key={element} index={element}/>
          ))
        }
      </section>
			<div ref={elementRef}></div>
    </main>
  
}

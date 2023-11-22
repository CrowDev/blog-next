'use client'
import { oxygen } from './ui/fonts'
import { Search } from './ui/search'
import { TitleBox } from './ui/title-box'
import { Card } from './ui/article-card'
import { useEffect, useRef, useState } from 'react'
import { useIntersection } from '@/hooks/useIntersection'

interface Element {
  id: number
  value: number
}

export default function Home() {
	const [elements, setElements] = useState<Array<Element>>(
		Array.from({ length: 10 }, (_, i) => ({id: i, value: i}))
	)
  const [term, setTerm] = useState('')
	const [isClose, elementRef] = useIntersection()
	useEffect(() => {
    if (isClose) {
      const newElements = Array.from(
        { length: elements.length + 10 }, (_, i) => {
          return {id: i, value: i}
        }
      )
      setElements(newElements)
    }
	}, [isClose])


  return <main className={`${oxygen.className} font-normal antialiased`}>
      <TitleBox />
      <Search />
      <section className='p-5 relative columns-2xs gap-8'  >
        {
          elements.map((element: Element) => (
            <Card key={element.id} value={element.value} term={term}/>
          ))
        }
      </section>
			<div ref={elementRef}></div>
    </main>
  
}

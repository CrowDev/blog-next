'use client'
import { oxygen } from './ui/fonts'
import { Search } from './ui/search'
import { TitleBox } from './ui/title-box'
import { Card } from './ui/article-card'
import { useEffect, useState } from 'react'
import { useIntersection } from '@/hooks/useIntersection'
import { Element } from '@/interfaces/interfaces'

export default function Home() {
	const [elements, setElements] = useState<Array<Element>>(
		Array.from({ length: 10 }, (_, i) => ({id: i, value: i}))
	)
	const [isClose, elementRef] = useIntersection()
	useEffect(() => {
    if (isClose) {
      updateElements()
    }
	}, [isClose])
  const onTermUpdated: any = (e: any) => {
    const value = e.target.value
    if (value) {
      const termSearch = {
        id: 0,
        value
      }
      setElements([termSearch])
    } else {
      updateElements()
    }
  }
  const updateElements = () => {
    const currentElements = [...elements]
    const newElements = elements.length + 10
    for(let i = elements.length; i < newElements; i++) {
      currentElements.push({id: i, value: i})
    }
    setElements(currentElements)
  }

  return <main className={`${oxygen.className} font-normal antialiased`}>
      <TitleBox />
      <Search onUpdated={onTermUpdated} />
      <section className='p-5 relative columns-2xs gap-8'  >
        {
          elements.map((element: Element) => (
            <Card key={element.id} value={element.value} />
          ))
        }
      </section>
			<div ref={elementRef}></div>
    </main>
  
}

import { useEffect, useRef, useState } from 'react'

export const useIntersection = () => {
	const elementRef: any = useRef(null)
	const [isClose, setIsClose] = useState(false)
	useEffect(() => {
		const observer = new IntersectionObserver(([el]) => {
			if (el.isIntersecting) {
				setIsClose(true)
			} else {
				setIsClose(false)
			}
		}, { rootMargin: '200px' })
		observer.observe(elementRef.current)
		return () => observer?.disconnect()
	}, [])

	return [isClose, elementRef]
}
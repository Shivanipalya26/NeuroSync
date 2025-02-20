import { useInView, UseInViewOptions } from "motion/react"
import { useRef } from "react"

const useScrollAnimation = ( options: UseInViewOptions = { once: true, margin: "-50px" }) => {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, options)

    return { ref, isInView }
}

export default useScrollAnimation
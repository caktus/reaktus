import { useEffect, useState } from "react";

/**
 * 
 * @param {object} element - a React element ref
 * @param {object} scrollArea - a React element ref
 */
function useIntersectionObserver(elementRef, scrollAreaRef) {
  const [intersections, setIntersections] = useState({
    topHit: false, rightHit: false, bottomHit: false, leftHit: false
  })

  useEffect(() => {
    if (elementRef.current) {
      function _observerCallback([intersection]) {
        const isOverlapping = !intersection.isIntersecting && intersection.intersectionRatio > 0
        if (isOverlapping) {
          const { boundingClientRect, intersectionRect } = intersection;
          const { top: cTop, right: cRight, bottom: cBottom, left: cLeft } = boundingClientRect;
          const { top: rTop, right: rRight, bottom: rBottom, left: rLeft } = intersectionRect
          const topHit = cTop < rTop
          const rightHit = cRight > rRight
          const bottomHit = cBottom > rBottom
          const leftHit = cLeft > rLeft
          setIntersections({
            topHit,
            rightHit,
            bottomHit,
            leftHit
          })
        }
      }
      const observerOptions = {
        root: scrollAreaRef?.current,
        threshold: 1.0
      }
      const observer = new IntersectionObserver(_observerCallback, observerOptions);
      observer.observe(elementRef.current)
    }
  }, [elementRef, scrollAreaRef])

  return intersections;
}

export default useIntersectionObserver;

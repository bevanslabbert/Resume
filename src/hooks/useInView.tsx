import { useRef, useEffect, useState, MutableRefObject } from 'react';

const useInView = (options: IntersectionObserverInit): [MutableRefObject<HTMLDivElement | null>, boolean] => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.disconnect();
      }
    };
  }, [ref, options]);

  return [ref, inView];
};

export default useInView;
import React from 'react';
import Link from 'next/link';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
gsap.registerPlugin(ScrollToPlugin);

export default function App() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
      gsap.core.globals('ScrollTrigger', ScrollTrigger);
      gsap.core.globals('ScrollToPlugin', ScrollToPlugin);

      const firstElem = document.querySelector('.container');

      function goToSection(i, anim) {
        gsap.to(window, {
          scrollTo: {
            y: i * innerHeight + firstElem.offsetTop,
            autoKill: false,
          },
          duration: 1,
        });

        if (anim) {
          anim.restart();
        }
      }
      gsap.utils.toArray('.container').forEach((panel, i) => {
        ScrollTrigger.create({
          trigger: panel,
          onEnter: () => goToSection(i),
        });

        ScrollTrigger.create({
          trigger: panel,
          start: 'bottom bottom',
          onEnterBack: () => goToSection(i),
        });
      });
    }

    return () => {};
  }, []);

  return (
    <div className='App'>
      <div className='full'>
        <Link href='/test'>
          <a className='text'>Hello</a>
        </Link>
      </div>

      <div className='container'>
        <div className='text'>Hello1</div>
        <div className='box'>
          <img src='/pexels.jpeg' alt='' />
        </div>
      </div>
      <div className='container'>
        <div className='text'>Hello2</div>
        <div className='box'>
          <img src='/pexels.jpeg' alt='' />
        </div>
      </div>
      <div className='container'>
        <div className='text'>Hello3</div>
        <div className='box'>
          <img src='/pexels.jpeg' alt='' />
        </div>
      </div>
      <div className='container'>
        <div className='text'>Hello4</div>
        <div className='box'>
          <img src='/pexels.jpeg' alt='' />
        </div>
      </div>

      <div className='full'>
        <div className='text'>Hello5</div>
      </div>
    </div>
  );
}

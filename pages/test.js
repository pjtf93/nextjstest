import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>Hello</h1>
      <Link href='/'>
        <a className='text'>Go Back</a>
      </Link>

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
    </>
  );
}

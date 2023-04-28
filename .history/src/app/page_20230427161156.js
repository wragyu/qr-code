import Image from 'next/image'

export default function Home() {
  return (
    <main className="border-red-500 border-4 p-8">
      qr Code
      <div className="display-flex border-red-500 border-4 p-8">

        <Image
          src="/image-qr-code.png"
          alt='image-qr-code.png'
          fill
          className='flexrounded-full' />

        <div className=''>
          Improve your front-end skills by building projects
        </div>


      </div>
    </main>
  )
}

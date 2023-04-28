import Image from 'next/image'

export default function Home() {
  return (
    <main className="border-red-500 border-4 p-8">
      qr Code
      <div className="border-red-500 border-4 p-8">

        <Image
          src="/image-qr-code.png"
          alt='image-qr-code.png'
          layout
          className='rounded-full' />

        <div className=''>
          Improve your front-end skills by building projects
        </div>


      </div>
    </main>
  )
}

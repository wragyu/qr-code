import Image from 'next/image'

export default function Home() {
  return (
    <main className="h-full w-full border-red-500 border-2 p-8">
      qr Code

      <div className="relative flex-auto w-64 h-64 border-red-500 border-2 p-8 object-fill border">

          <Image
            src="/image-qr-code.png"
            alt='image-qr-code.png'
            fill
            className='rouded-lg'
            />
      </div>

      <div className=''>
          Improve your front-end skills by building projects
      </div>
    </main>
  )
}

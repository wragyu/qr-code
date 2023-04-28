import Image from 'next/image'

export default function Home() {
  return (
    <main className="h-full w-full border-red-500 border-2 p-8">
      qr Code

    <div className='flex-col border-red-500 border-2 p-8'>

      <div className="relative w-64 h-64 border-red-500 border-2 p-8 rounded-2xl">
          <Image
            src="/image-qr-code.png"
            alt='image-qr-code.png'
            fill
            className='cover'
          />
      </div>

      <div className='flex-wrap'>
          Improve your front-end skills by building projects.
      </div>

      <div className=''>
        Scan the QR code to visit Frontend Mentor and take your coding skills to the next level.
      </div>

      </div>

    </main>
  )
}

import Image from 'next/image'

export default function Home() {
  return (
    <main className="h-full w-full border-red-500 border-2 p-8">
      qr Code

    <div className='flex-col w-72 bg-white border-red-500 border-2 p-4'>

      <div className="relative  w-64 h-64 flex-1 border-red-500 border-2 p-8 rounded-2xl overflow-hidden">
          <Image
            src="/image-qr-code.png"
            alt='image-qr-code.png'
            fill
            className='object-cover'
          />
      </div>

      <div className='font-bold text-black border-red-500 border-2'>
          Improve your front-end skills by building projects.
      </div>

      <div className='text-black border-red-500 border-2'>
        Scan the QR code to visit Frontend Mentor and take your coding skills to the next level.
      </div>

      </div>

    </main>
  )
}

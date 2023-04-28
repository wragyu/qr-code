import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex justify-center items-center h-full w-full border-red-500 border-2 p-8">

    <div className=' bg-white border-red-500 border-2 p-2 rounded-2xl'>

      <div className="relative w-80 h-80 rounded-2xl overflow-hidden">
          <Image
            src="/image-qr-code.png"
            alt='image-qr-code.png'
            fill
            className='object-cover'
          />
      </div>

      <div className='mt-2 text-2xl text-center font-bold text-black '>
          Improve your front-end skills by building projects.
      </div>

      <div className='text-xl text-center text-black'>
        Scan the QR code to visit Frontend Mentor and take your coding skills to the next level.
      </div>

      </div>

    </main>
  )
}

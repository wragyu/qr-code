import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex justify-center items-center h-full w-full border-red-500 border-2 p-8">

    <div className='grid grid-rows-5 grid-cols-2 gap-2 w-80 bg-white border-red-500 border-2 p-2 rounded-2xl'>

      <div className="relative row-span-3 col-span-2 flex-1 border-red-500 border-2 p-8 rounded-2xl overflow-hidden">
          <Image
            src="/image-qr-code.png"
            alt='image-qr-code.png'
            fill
            className='object-cover'
          />
      </div>

      <div className='row-span-1 col-span-2 text-center font-bold text-black border-red-500 border-2'>
          Improve your front-end skills by building projects.
      </div>

      <div className='row-span-1 col-span-2 text-center text-black border-red-500 border-2'>
        Scan the QR code to visit Frontend Mentor and take your coding skills to the next level.
      </div>

      </div>

    </main>
  )
}

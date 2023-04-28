import Image from 'next/image'

export default function Home() {
  return (
    <main className="h-full w-full border-red-500 border-2 p-8">
      qr Code

      <div className="relative w-64 h-64 border-red-500 border-2 p-8">

          <Image
            src="/image-qr-code.png"
            alt='image-qr-code.png'
            fill
            style={{objectFit: 'cover'}}
            />
      </div>

      <div className=''>
          Improve your front-end skills by building projects
      </div>

      <div>
        Scan the QR code to 
      </div>
    </main>
  )
}

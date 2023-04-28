import Image from 'next/image'

export default function Home() {
  return (
    <main className="border-red-500 border-4 p-8">
      qr Code
      <div className="border-red-500 border-4 p-8">

        <Image src="/image-qr-code.png" alt='image-qr-code.png' width='64' height='64' />

        Improve your front

      </div>
    </main>
  )
}
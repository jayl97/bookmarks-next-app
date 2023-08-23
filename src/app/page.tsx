'use client'

import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()

  return (
    <>
      <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Bookmarks List App
      </h1>
      <div className="mt-10 flex flex-col items-center justify-center">
        <button type="button" className="bg-blue-600 text-white rounded-xl hover:bg-blue-500 px-5 py-2" onClick={() => router.push('/signin')}>Click here to sign in</button>
      </div>
    </>
  )
}

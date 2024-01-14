'use client'
import { useRouter } from "next/navigation"

const AuthButton = () => {
  const router = useRouter()

  return (
    <div>
      <button
        className="p-3 pl-9 pr-9 border rounded hover:border-fuchsia-600"
        onClick={() => {
          router.push('/signin')
        }}
      >
        Sign in
      </button>
    </div>
  )
}

export default AuthButton
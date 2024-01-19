'use client'
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

const AuthButton = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()

  useEffect(() => {

  })

  return (
    <div>
      {isAuthenticated ? (
        <></>
      ) : (
        <button
          className="p-3 pl-9 pr-9 border rounded hover:border-fuchsia-600"
          onClick={() => {
            router.push('/signin')
          }}
        >
          Sign in
        </button>
      )}
    </div>
  )
}

export default AuthButton
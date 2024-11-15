'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

// export default function Home() {
//     const router = useRouter()
//
//     useEffect(() => {
//         router.push('/dashboard')
//     }, [router])
//
//     return null
// }

export default function HomePage() {
    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold">Welcome to the Home Page</h1>
            {/* Add your home page content here */}
        </div>
    );
}

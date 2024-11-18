'use client'
import Dashboard from '@/components/Dashboard/Dashboard'
import Header from "@/components/Header";

export default function Home() {
    return (
        <div className="flex h-screen bg-gray-900 text-white">
            <Header />
            <Dashboard />
        </div>
    )
}

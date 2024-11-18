import { useState } from 'react'
import { Bell } from 'lucide-react'
import Notifications from './Notification'

export default function Header() {
    const [showNotifications, setShowNotifications] = useState(false)

    const toggleNotifications = () => {
        setShowNotifications(!showNotifications)
    }

    return (
        <header className="flex items-center justify-between px-6 py-4 bg-blue-500 text-white">
            <div className="flex items-center">
                <h1 className="text-2xl font-semibold">Dashboard</h1>
            </div>
            <div className="flex items-center relative">
                <button
                    className="p-1 rounded-full text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white"
                    onClick={toggleNotifications}
                >
                    <Bell className="h-6 w-6" />
               </button>
                {showNotifications && (
                    <div
                        className="absolute right-0 mt-2 w-80 bg-white shadow-lg rounded-lg z-50"
                    >
                        <Notifications />
                    </div>
                )}
            </div>
        </header>
    )
}

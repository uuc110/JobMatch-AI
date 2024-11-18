import { Bell } from 'lucide-react'

export default function Notifications() {
    const notifications = [
        {
            id: 1,
            title: "New job match",
            description: "A new job matching your profile has been found.",
            time: "5 minutes ago",
        },
        {
            id: 2,
            title: "Resume suggestion",
            description: "We have some suggestions to improve your resume.",
            time: "1 hour ago",
        },
        {
            id: 3,
            title: "Application status update",
            description: "Your application for Software Engineer at TechCorp has been viewed.",
            time: "2 hours ago",
        },
    ]

    return (
        <div className="bg-white shadow-sm rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Notifications</h2>
            <ul className="divide-y divide-gray-200">
                {notifications.map((notification) => (
                    <li key={notification.id} className="py-4">
                        <div className="flex space-x-3">
                            <div className="flex-shrink-0">
                                <Bell className="h-6 w-6 text-indigo-600" />
                            </div>
                            <div className="flex-1 space-y-1">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-sm font-medium">{notification.title}</h3>
                                    <p className="text-sm text-gray-500">{notification.time}</p>
                                </div>
                                <p className="text-sm text-gray-500">{notification.description}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

import { Search, Briefcase, Calendar, TrendingUp, FileText } from 'lucide-react'

export default function Header() {
    return (
        <header className="flex items-center justify-between p-4 bg-white border-b">
            <div className="text-xl font-semibold">Job Matching Dashboard</div>
            <div className="space-x-4 text-gray-500">
                <Search className="h-6 w-6" />
                <Briefcase className="h-6 w-6" />
                <Calendar className="h-6 w-6" />
                <TrendingUp className="h-6 w-6" />
                <FileText className="h-6 w-6" />
            </div>
        </header>
    )
}

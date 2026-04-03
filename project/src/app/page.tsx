import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Study<span className="text-blue-600">Sync</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The AI-powered platform that helps students organize study schedules, 
            collaborate with peers, and achieve academic success through intelligent learning insights.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Study Planning</h3>
            <p className="text-gray-600">
              Create personalized study schedules with AI-generated plans tailored to your subjects, 
              difficulty levels, and available time.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Peer Collaboration</h3>
            <p className="text-gray-600">
              Connect with fellow students, share study sessions, and stay motivated through 
              a supportive community of learners.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Learning Insights</h3>
            <p className="text-gray-600">
              Get personalized study tips and learning suggestions powered by advanced AI 
              to optimize your study efficiency and retention.
            </p>
          </div>
        </div>

        <div className="text-center">
          <div className="space-x-4">
            <Link 
              href="/register" 
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Get Started Free
            </Link>
            <Link 
              href="/login" 
              className="inline-flex items-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              Sign In
            </Link>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Free tier includes 5 study sessions • Upgrade for unlimited access and full AI features
          </p>
        </div>
      </div>
    </div>
  )
}

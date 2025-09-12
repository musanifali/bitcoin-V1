interface LaunchingSoonProps {
  title: string
  description: string
}

const LaunchingSoon = ({ title, description }: LaunchingSoonProps) => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      {/* Header spacing */}
      <div className="pt-20"></div>
      
      <div className="text-center space-y-6 max-w-2xl mx-auto px-4">
        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900">{title}</h1>
        
        {/* Description */}
        <p className="text-lg text-gray-600">{description}</p>
        
        {/* Coming Soon Badge */}
        <div className="inline-flex items-center px-6 py-3 bg-bitcoin-500 text-white rounded-full font-medium">
          Coming Soon
        </div>
        
        {/* Simple 3 Dots Loader */}
        <div className="flex items-center justify-center space-x-2 pt-4">
          <div className="w-3 h-3 bg-bitcoin-500 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-bitcoin-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-3 h-3 bg-bitcoin-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  )
}

export default LaunchingSoon

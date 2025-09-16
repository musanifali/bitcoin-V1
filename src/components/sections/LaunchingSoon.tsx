import UnifiedLoader from '../ui/UnifiedLoader'

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
        
        {/* Unified Loader */}
        <div className="pt-4">
          <UnifiedLoader
            type="minimal"
            message=""
            size="sm"
            showText={false}
          />
        </div>
      </div>
    </div>
  )
}

export default LaunchingSoon

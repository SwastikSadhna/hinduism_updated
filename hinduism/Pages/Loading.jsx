export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-orange-50">
      <div className="mb-8">
        <svg className="w-24 h-24" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="#F59E0B"
            strokeWidth="8"
            fill="none"
            strokeDasharray="180 260"
            className="animate-spin origin-center"
          />
          <circle cx="50" cy="50" r="20" fill="#F59E0B" className="animate-pulse" />
        </svg>
      </div>
      <h2 className="text-2xl font-semibold text-amber-800 mb-2">Aligning Chakras</h2>
      <p className="text-amber-600">Please wait while we connect you to divine wisdom...</p>
    </div>
  )
}

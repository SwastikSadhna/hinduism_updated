export function ActionButton({ children, variant = "primary", ...props }) {
  const baseClasses =
    "px-8 py-3 rounded-tl-3xl rounded-br-3xl font-semibold text-center transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-opacity-50"

  const variants = {
    primary: "bg-orange-600 hover:bg-orange-700 text-white shadow-lg hover:shadow-xl focus:ring-orange-500",
    secondary:
      "bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-300 hover:border-gray-400 shadow-md hover:shadow-lg focus:ring-gray-500",
  }

  return (
    <button className={`${baseClasses} ${variants[variant]}`} {...props}>
      {children}
    </button>
  )
}

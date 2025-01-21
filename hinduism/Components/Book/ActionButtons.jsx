export function ActionButton({ variant = 'primary', children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 text-black rounded-sm font-medium transition-colors ${
        variant === 'primary'
          ? 'bg-blue-700 text-primary-foreground hover:bg-primary/90'
          : 'bg-yellow-500 text-black hover:bg-yellow-400'
      }`}
    >
      {children}
    </button>
  )
}

import React from "react"

const TabsContext = React.createContext()

const Tabs = React.forwardRef(({ className = "", value, onValueChange, children, ...props }, ref) => {
  const [activeTab, setActiveTab] = React.useState(value || "")
  
  React.useEffect(() => {
    if (value !== undefined) {
      setActiveTab(value)
    }
  }, [value])
  
  const handleTabChange = (newValue) => {
    setActiveTab(newValue)
    if (onValueChange) {
      onValueChange(newValue)
    }
  }
  
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab: handleTabChange }}>
      <div ref={ref} className={className} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  )
})
Tabs.displayName = "Tabs"

const TabsList = React.forwardRef(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`inline-flex h-10 items-center justify-center rounded-md bg-gray-100 p-1 text-gray-500 ${className}`}
    {...props}
  />
))
TabsList.displayName = "TabsList"

const TabsTrigger = React.forwardRef(({ className = "", value, children, ...props }, ref) => {
  const context = React.useContext(TabsContext)
  const isActive = context?.activeTab === value
  
  return (
    <button
      ref={ref}
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 ${
        isActive 
          ? "bg-white text-gray-900 shadow-sm" 
          : "text-gray-500 hover:text-gray-900"
      } ${className}`}
      onClick={() => context?.setActiveTab(value)}
      {...props}
    >
      {children}
    </button>
  )
})
TabsTrigger.displayName = "TabsTrigger"

const TabsContent = React.forwardRef(({ className = "", value, children, ...props }, ref) => {
  const context = React.useContext(TabsContext)
  const isActive = context?.activeTab === value
  
  if (!isActive) return null
  
  return (
    <div
      ref={ref}
      className={`mt-2 focus-visible:outline-none focus-visible:ring-2 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
})
TabsContent.displayName = "TabsContent"

export { Tabs, TabsList, TabsTrigger, TabsContent }
import { createContext, useContext, useState } from 'react';

// Create a Context
const ContentContext = createContext();

// Create a Provider component
export function ContentProvider({ children }) {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <ContentContext.Provider value={{ activeCategory, setActiveCategory }}>
      {children}
    </ContentContext.Provider>
  );
}

// Custom hook to use the ContentContext
export function useContent() {
  return useContext(ContentContext);
}

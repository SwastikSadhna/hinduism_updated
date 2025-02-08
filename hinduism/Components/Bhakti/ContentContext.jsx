import { createContext, useContext, useState } from 'react';
import axios from 'axios';
import API_CONFIG from '../../src/config/api';

// Create a Context
const ContentContext = createContext();

// Create a Provider component
export function ContentProvider({ children }) {
  const [activeCategory, setActiveCategory] = useState(null);
  const [appliedFilters, setAppliedFilters] = useState(false);

  const handleFilter = (path, setState, category) => { 

    if(!path & !setState & !category) return;

    if (activeCategory) {
      let query = {}

      for (const key in activeCategory) {
        if (activeCategory[key].length > 0) {
            query[key] = activeCategory[key]
        }
        else {
          continue;
        }
      }
      query["_category"] = category
      const url = `${API_CONFIG.baseUrl}${path}`
      axios.get(url, {
        params: query
      }).then((res) => {
        setState(res.data)
        console.log(res.data)
      }).catch((err) => {
        setState([])
        console.log(err)
      })
    }

  }

  return (
    <ContentContext.Provider value={{ activeCategory, setActiveCategory, handleFilter }}>
      {children}
    </ContentContext.Provider>
  );
}

// Custom hook to use the ContentContext
export function useContent() {
  return useContext(ContentContext);
}

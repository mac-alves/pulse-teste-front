import React, {
  createContext,
  useState,
  useContext,
  SetStateAction,
  Dispatch
} from 'react'

interface HomeContextData {
  updateData: boolean
  setUpdateData: Dispatch<SetStateAction<boolean>>
}

const HomeContext = createContext<HomeContextData>({} as HomeContextData)

export const HomeProvider: React.FC = ({ children }) => {
  const [updateData, setUpdateData] = useState<boolean>(false)

  return (
    <HomeContext.Provider
      value={{
        updateData,
        setUpdateData
      }}
    >
      {children}
    </HomeContext.Provider>
  )
}

export function useHome(): HomeContextData {
  return useContext(HomeContext)
}

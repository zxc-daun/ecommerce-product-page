import React from 'react'
import Homepage from './pages/homepage.page';

import { useInitialState } from './hooks/useInitialState.hooks';

export const AppContext = React.createContext()
const Provider = AppContext.Provider

function App() {
  const initialState = useInitialState()

  return (
   <Provider value={initialState}>
      <Homepage />
   </Provider>
  )
}

export default App;
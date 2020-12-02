import Home from './components/Home'

import './App.css'

function App() {
  const user = "JackieWantsToDie"

  if (user) {
    return <Home />
  }

  return (
    <div className="App">

    </div>
  )
}

export default App

import HappyIncrement from "./Componenets/HappyIncrement"
import HappyTracker from "./Componenets/HappyTracker"
import SadIncrement from "./Componenets/SadIncrement"
import SadTracker from "./Componenets/SadTracker"


function App() {

  return (
    <>
      <div className="p-2 space-y-2">
        <HappyTracker />
        <SadTracker />
        <HappyIncrement />
        <SadIncrement />
      </div>
    </>
  )
}

export default App

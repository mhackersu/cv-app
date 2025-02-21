import Resume from './Resume'
import Ping from './Ping'

const randoms = [
  [1, 2],
  [3, 4, 5],
  [6, 7]
]

function App() {
  return (
    <div>
      <div className="h-screen">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <Resume />
          <Ping />
        </div>
      </div>
    </div>
  )
}

export default App

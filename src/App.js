import './App.css'
import PetInfo from './components/PetInfo'

function App() {
  return (
    <div className="App">
      <PetInfo animal="cat" age={3} />
      <PetInfo animal="dog" age={7} />
    </div>
  )
}
// тут мы передаем свойство animal со значение cat компоненту PetInfo
export default App

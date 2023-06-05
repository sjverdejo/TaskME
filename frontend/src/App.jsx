import Header from './components/Header'
import Task from './components/Task'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <Task name='Test' desc='test this component' />
      <Task name='Test2' desc='test this component' />
    </>
  )
}

export default App

import './App.css'

// Components
import InputTodo from './components/InputTodo'
import ListTodos from './components/ListTodos'

const App = () => {
  return (
    <>
      <div className="container">
        <InputTodo />
        <ListTodos />
      </div>
    </>
  )
}

export default App

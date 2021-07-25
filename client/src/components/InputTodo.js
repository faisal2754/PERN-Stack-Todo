import { useState } from 'react'

const InputTodo = () => {
  const [description, setDescription] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const body = { description }
      await fetch('http://localhost:5000/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })

      window.location = '/'
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <h1 className="text-center mt-5">Input todo</h1>
      <form className="d-flex mt-5" onSubmit={onSubmit}>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </>
  )
}

export default InputTodo

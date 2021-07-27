import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { ADD_TODO, GET_TODOS } from '../graphql/queries'

const InputTodo = () => {
  const [description, setDescription] = useState('')

  const [addTodo] = useMutation(ADD_TODO)

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      await addTodo({
        variables: { description },
        refetchQueries: [{ query: GET_TODOS }]
      })
      setDescription('')
      // window.location = '/'
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

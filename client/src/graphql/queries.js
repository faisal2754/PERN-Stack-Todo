import { gql } from '@apollo/client'

const GET_TODOS = gql`
  {
    todos {
      todo_id
      description
    }
  }
`
export { GET_TODOS }

import { gql } from '@apollo/client'

const GET_TODOS = gql`
  query GetTodos {
    todos {
      todo_id
      description
    }
  }
`
const ADD_TODO = gql`
  mutation AddTodo($description: String!) {
    createTodo(description: $description) {
      todo_id
      description
    }
  }
`
const UPDATE_TODO = gql`
  mutation UpdateTodo($id: Int!, $description: String!) {
    updateTodo(id: $id, description: $description) {
      todo_id
      description
    }
  }
`
const DELETE_TODO = gql`
  mutation DeleteTodo($id: Int!) {
    deleteTodo(id: $id) {
      todo_id
      description
    }
  }
`
export { GET_TODOS, ADD_TODO, DELETE_TODO, UPDATE_TODO }

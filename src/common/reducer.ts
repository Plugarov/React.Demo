import { useReducer } from 'react'
import { ICustomer } from './interfaces'

export function get() {
  return {
    type: 'GET',
  } as const
}

export function add(customer: ICustomer) {
  return {
    type: 'ADD',
    customer
  } as const
}

export function remove(id: number) {
  return {
    type: 'REMOVE',
    id
  } as const
}

type State = ICustomer[]
type Action = ReturnType<typeof add | typeof remove | typeof get>

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'GET':

      // fetch('/api/Customers')
      //   .then((response) => {
      //     if (response.ok) {
      //       console.log(response)
      //     } else {
      //       console.log(response.statusText)
      //     }
      //   })

      const customer: ICustomer = { id: Date.now(), lastName: 'asd', name: '123' }
      
      return [customer]
    case 'ADD':
      return [...state, action.customer]
    case 'REMOVE':
      return state.filter(customer => customer.id !== action.id)
    default:
      return state
  }
}

export default function useCustomerReducer(state = []) {
  return useReducer(reducer, state)
}
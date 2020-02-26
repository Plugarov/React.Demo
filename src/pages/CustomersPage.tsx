import React, { useEffect } from 'react'
import { CustomerForm } from '../components/CustomerForm'
import { CustomerList } from '../components/CustomerList'
import useCustomerReducer, { get, add, remove } from '../common/reducer';
import { ICustomer } from '../common/interfaces';

export const CustomersPage: React.FC = () => {
  const [state, dispatch] = useCustomerReducer()

  useEffect(() => {
    dispatch(get())
  }, [])

  const addHandler = (customer: ICustomer) => {
    dispatch(add(customer))
  }

  const removeHandler = (id: number) => {
    const shouldRemove = window.confirm('Do you really want to delete?');
    if (shouldRemove) {
      dispatch(remove(id))
    }
  }

  return (
    <React.Fragment>
      <CustomerForm onAdd={addHandler} />

      <CustomerList customers={state} onRemove={removeHandler} />
    </React.Fragment>
  )
}

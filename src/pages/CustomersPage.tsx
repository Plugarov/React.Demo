import React, { useState } from 'react'
import { CustomerForm } from '../components/CustomerForm';
import { CustomerList } from '../components/CustomerList';

import { ICustomer } from '../interfaces';

export const CustomersPage: React.FC = () => {
    const [customers, setCustomers] = useState<ICustomer[]>([])

    const addHandler = (customer: ICustomer) => {
      setCustomers(prev => [customer, ...prev]);
    }
  
    const removeHandler = (id:number) => {
      const shouldRemove = window.confirm('Do you really want to delete?');
      if(shouldRemove){
        setCustomers(prev => prev.filter(customer => customer.id !== id));
      }
    }

    return (
        <React.Fragment>
            <CustomerForm onAdd={addHandler} />

            <CustomerList customers={customers} onRemove={removeHandler} />
        </React.Fragment>
    )
}

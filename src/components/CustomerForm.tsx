import React, { useRef } from 'react'
import { ICustomer } from './../interfaces';


interface CustomerFormProps {
    onAdd(title: ICustomer): void
} 

export const CustomerForm: React.FC<CustomerFormProps> = props =>
{
    const ref = useRef<HTMLInputElement>(null)

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if(event.key === "Enter"){
            console.log(event);

            const newCustomer: ICustomer = {
                id: Date.now(),
                name : 'sds22asd',
                phone : 'asasdd'
            }

            props.onAdd(newCustomer);
        }
    }

    return (
        <div className="input-field mt2">
            <input 
            type="text" 
            id="title" 
            placeholder="Placeholder"
            ref = {ref}
            onKeyPress = {keyPressHandler} />
            <label htmlFor="title" className="active">Placeholder</label>
        </div>
    )
}
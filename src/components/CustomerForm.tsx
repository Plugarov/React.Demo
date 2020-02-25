import React, { useRef } from 'react'
import { ICustomer } from './../interfaces';

interface CustomerFormProps {
    onAdd(title: ICustomer): void
}

export const CustomerForm: React.FC<CustomerFormProps> = props => {
    const refName = useRef<HTMLInputElement>(null)
    const refLastName = useRef<HTMLInputElement>(null)

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const newCustomer: ICustomer = {
            id: Date.now(),
            name: refName.current?.value || "",
            lastName: refLastName.current?.value || ""
        }

        props.onAdd(newCustomer);
    }

    return (
        <div className="row mt2">
            <form className="col s12" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="input-field col s5">
                        <input
                            type="text"
                            id="name"
                            placeholder="Name"
                            autoComplete="off"
                            ref={refName} />
                        <label htmlFor="name" className="active">Name</label>
                    </div>
                    <div className="input-field col s5">
                        <input
                            type="text"
                            id="lastName"
                            placeholder="Last Name"
                            autoComplete="off"
                            ref={refLastName} />
                        <label htmlFor="lastName" className="active">Last Name</label>
                    </div>
                    <div className="input-field col s2">
                        <button className="btn waves-effect waves-light" type="submit" name="action">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
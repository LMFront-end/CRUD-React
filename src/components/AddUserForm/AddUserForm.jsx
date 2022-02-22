import React from 'react'
import { useForm } from "react-hook-form";

const AddUserForm = (props) => {


const { register, handleSubmit, formState: { errors } } = useForm();
const onSubmit = (data, e) => {

    //limpiar campos
    e.target.reset();

    //console.log(data)

    props.addUser(data);
}



    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input 
            type="text" 
            name="name" 
            placeholder="Into your name"
            {...register("name", {
                required: true, maxLength: 30
            })}
            />
            <div>
            {errors.name?.type === 'required' && "The name is required"}
            </div>

            <label>Username</label>
            <input 
            type="text" 
            name="username"
            placeholder="Into your username"
            {...register("username", {
                required: true, maxLength: 30
            })}
            />
            <div>
            {errors.username?.type === 'required' && "The username is required"}
            </div>
            <button>Add new user</button>
    </form>
    )
}

export {AddUserForm}
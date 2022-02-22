import React from 'react'
import { useForm } from "react-hook-form";


const EditUserForm = (props) => {

    //console.log(props.currentUser);

    const { register, handleSubmit, formState: { errors }, setValue } = useForm({
        defaultValues: props.currentUser
    });

    //setValue
    setValue('name', props.currentUser.name);
    setValue('username', props.currentUser.username);
    

    const onSubmit = (data, e) => {

    //limpiar campos
    e.target.reset();

    data.id = props.currentUser.id;

    //Actulizar datos
    props.updateUser(props.currentUser.id, data)

    //console.log(data)
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
            <button>Edit user</button>
    </form>
    )
}

export {EditUserForm}
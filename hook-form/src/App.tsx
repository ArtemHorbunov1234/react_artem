import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';

type Inputs = {
    example: string;
    exampleRequired: string;
};

function FormInput() {
    const [hidden, setHidden] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='input-registration '>
            <label>Email:</label>
            <input {...register('example', { minLength: 6, required: true })} placeholder='Email' />
            {errors.example?.type === 'required' && <span>Fill in the email field</span>}
            {errors.example?.type === 'minLength' && <span>Email must be 6 chars minimum</span>}

            <label>Password:</label>

            <input
                {...register('exampleRequired', { required: true, minLength: 5 })}
                placeholder='Password'
                type={hidden ? 'password' : 'text'}
            />
            <button className='btn-show' onClick={() => setHidden(!hidden)}>
                SHOW
            </button>
            {errors.exampleRequired?.type === 'required' && <span>Fill in the password field</span>}
            {errors.exampleRequired?.type === 'minLength' && <span>Password can't be less than 5 letters</span>}

            <button type='submit'> Push</button>
        </form>
    );
}

function App() {
    return (
        <div>
            <FormInput />
        </div>
    );
}

export default App;

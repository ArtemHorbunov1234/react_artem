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
            <input {...register('example')} placeholder='Email' minLength={6} />
            {errors.example && <span>Fill in the email field</span>}

            <label>Password:</label>

            <input
                {...register('exampleRequired', { required: true })}
                placeholder='Password'
                type={hidden ? 'password' : 'text'}
                minLength={5}
            />
            <button className='btn-show' onClick={() => setHidden(!hidden)}>
                SHOW
            </button>

            {errors.exampleRequired && <span>Fill in the password field</span>}

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

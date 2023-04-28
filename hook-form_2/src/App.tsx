import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';

type Inputs = {
    email: string;
    password: string;
    checkPassword: string;
};

function FormInput() {
    const [hidden, setHidden] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checkPassword, setCheckPassword] = useState('');
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    function checkInputPassword() {
        if (password === checkPassword && password.length >= 8 && email.length > 10) {
            console.log(`Email: ${email} Password: ${password}`);
        } else if (password !== checkPassword && password.length >= 8 && email.length > 10) {
            return <div>{errors.password && <span>The passwords don't match</span>}</div>;
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='input-registration '>
            <label>Email:</label>
            <input
                {...register('email', {
                    minLength: 10,
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                })}
                placeholder='Email'
                onChange={e => setEmail(e.target.value)}
            />
            {errors.email?.type === 'required' && <span>Fill in the email field</span>}
            {errors.email?.type === 'minLength' && <span>Email must be 10 chars minimum</span>}
            {errors.email?.type === 'pattern' && <span>This is not an email </span>}
            <label>Password:</label>
            <input
                {...register('password', { minLength: 8, required: true })}
                onChange={e => setPassword(e.target.value)}
                placeholder='Password'
                type={hidden ? 'password' : 'text'}
            />
            {errors.password?.type === 'required' && <span>Fill in the email field</span>}
            {errors.password?.type === 'minLength' && <span>Email must be 8 chars minimum</span>}
            <label>Retry password :</label>
            <input
                {...register('checkPassword', { required: true, minLength: 8 })}
                onChange={e => setCheckPassword(e.target.value)}
                placeholder='Retry password :'
                type={hidden ? 'password' : 'text'}
            />
            {errors.checkPassword?.type === 'required' && <span>Fill in the password field</span>}

            <div className='btn'>
                <button className='btn-show' onClick={() => setHidden(true)}>
                    SHOW
                </button>
                <button className='btn-show' onClick={() => setHidden(false)}>
                    Hidden
                </button>
            </div>
            <button type='submit' onClick={() => checkInputPassword()}>
                Push
            </button>
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

import React from 'react';

import './sign-up.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfile } from '../../firebase/firebase.utils';

class SignUp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert("Passwords don't match!");
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfile(user, { displayName });
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (error) {
            console.log('Error while creating User With Email And Password', error.message)
        }

    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='displayName'
                        value={displayName}
                        label='Display Name'
                        type='text'
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput
                        name='email'
                        value={email}
                        label='Email'
                        type='email'
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput
                        name='password'
                        value={password}
                        label='Password'
                        type='password'
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput
                        name='confirmPassword'
                        value={confirmPassword}
                        label='Confirm Password'
                        type='password'
                        handleChange={this.handleChange}
                        required
                    />
                    <CustomButton type='submit'>Sign up</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;
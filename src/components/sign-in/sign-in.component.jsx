import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import FormButton from '../form-button/form-button.component';
import { signInWithGoogle, auth } from "../../firebase/firebase.utils";


class SignIn extends React.Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { email, password } = this.state;

        try{
           await auth.signInWithEmailAndPassword(email, password);

            this.setState({ email: '', password: '' })
        }
        catch(error) {
            var errorCode = error.code;
               if (errorCode === 'auth/wrong-password') {
                 alert('Wrong password.');
               }
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    type="email" 
                    name='email' 
                    value={this.state.email} 
                    onChange={this.handleChange} 
                    label='Email'
                    />
                    <FormInput 
                    type="password" 
                    name='password' 
                    value={this.state.password} 
                    onChange={this.handleChange} 
                    label='Password'
                    />

                    <div className="buttons">
                        <FormButton type="submit"> Sign In </FormButton>
                        <FormButton isGoogleButton onClick={signInWithGoogle}> Sign In With Google </FormButton>
                    </div>
                   
                </form>
            </div>
        );
    }
}

export default SignIn;
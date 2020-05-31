import React from 'react';
import FormInput from '../form-input/form-input.component';
import FormButton from '../form-button/form-button.component';
import './sign-up.styles.scss';
import { auth, createUserProfileDoc } from "../../firebase/firebase.utils";

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }


    handleSubmit = async (event) => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if(password !== confirmPassword) {
            alert("Passwords don't Match!");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDoc(user, {displayName});

            this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
            })
        }
        catch(err){
            console.error(err);
        }
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value })
    }


    render() {
        return(
            <div className="sign-up">
                <h2 className="title">I do not have an Account</h2>
                <span className="subtitle">Sign Up with your Email and Password</span>

                <form onSubmit={this.handleSubmit} className="sign-up-form">
                    <FormInput 
                        type='text'
                        name='displayName'
                        value={this.state.displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                    />
                    <FormInput 
                        type='email'
                        name='email'
                        value={this.state.email}
                        onChange={this.handleChange}
                        label='Email'
                    />
                    <FormInput 
                        type='password'
                        name='password'
                        value={this.state.password}
                        onChange={this.handleChange}
                        label='Password'
                    />
                    <FormInput 
                        type='password'
                        name='confirmPassword'
                        value={this.state.confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                    />
                    
                    <FormButton type='submit'>SIGN UP</FormButton>
                </form>
            </div>
        );
    }
}

export default SignUp;
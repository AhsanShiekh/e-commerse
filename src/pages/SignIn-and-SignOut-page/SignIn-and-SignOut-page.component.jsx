import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import './SignIn-and-SignOut-page.styles.scss';


const SignInAndSignOut = () => (
    <div className="SignIn-and-SignOut-page">
        <SignIn/>
        <SignUp/>
    </div>
)

export default SignInAndSignOut;
import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.style.scss';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    handleChange = (event) => {
        const {value, name} = event.target;
        this.setState({[name] : value});
        
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({email:'', password:''});
    }
    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        value={this.state.email} 
                        label='email'
                        required 
                        handleChange={this.handleChange}/>

                    <FormInput 
                        name='password' 
                        type='password'
                        value={this.state.password} 
                        label='password'
                        required 
                        handleChange={this.handleChange}/>

                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle}>{''}Sign In with Google{''}</CustomButton>
                </form>
            </div>

        )
    }
}

export default SignIn;
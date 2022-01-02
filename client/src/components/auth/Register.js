import React, { Fragment, useState } from 'react'

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });
    const { name, email, password, password2 } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        if (password !== password2) {
            console.log('Password dont match');
        } else {
            console.log(formData);
        }
    }
    return <Fragment>
        <h1 className="large text-primary">Sign Up</h1>
        <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
        <form className="form" onSubmit={e => onSubmit(e)}>


            {/* for name */}
            <div className="form-group">
                <input type="text" placeholder="Name" name="name"
                    value={name}
                    onChange={e => onChange(e)}
                    required />
            </div>


            {/* for email */}
            <div className="form-group">
                <input type="email" placeholder="Email Address" name="email"
                    value={email}
                    onChange={e => onChange(e)}
                    required />
                <small className="form-text">This site uses Gravatar so if you want a profile image, use a
                    Gravatar email</small>
            </div>


            {/* for password1 */}
            <div className="form-group">
                <input type="password" placeholder="Password" name="password" minLength="12"
                    value={password}
                    onChange={e => onChange(e)}
                />
            </div>

            {/* for password2 */}
            <div className="form-group">
                <input
                    type="password"
                    placeholder="Confirm Password"
                    name="password2"
                    minLength="12"
                    value={password2}
                    onChange={e => onChange(e)}
                />
            </div>


            <input type="submit" className="btn btn-primary" value="Register" />
        </form>
        <p className="my-1">
            Already have an account? <a href="login.html">Sign In</a>
        </p>




    </Fragment>
};
export default Register;
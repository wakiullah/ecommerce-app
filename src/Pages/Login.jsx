import { useState } from 'react'
import './CSS/Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../Firebase/Firebase'

export default function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const loginHandler = async (e) => {
    console.log(email, password);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('login Succesful');
      window.localStorage.setItem('email', email)
      window.localStorage.setItem('isLoggedIn', 'true')
      navigate('/')

    } catch (error) {
      console.log('Login Faild');

    }
  }

  return (
    <div className='login_page'>
      <div className='login_information'>
        <h2>Login Form</h2>
        <div>
          <p>Email</p>
          <input type="email" name="" onChange={e => setEmail(e.target.value)} placeholder='Enter Your Email ' />
        </div>
        <div>
          <p>Password</p>
          <input type="email" name="" onChange={e => setPassword(e.target.value)} placeholder='Enter Your Password ' />
        </div>
        <button onClick={loginHandler}>
          Login
        </button>
        <div>
          <p>
            Not hava an account? <Link to={"/signup"}>SignUp</Link>
          </p>
        </div>
      </div>

    </div>
  )
}

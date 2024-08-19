import React, { useState } from 'react'
import './CSS/Login.css'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { auth, db } from '../Firebase/Firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'


export default function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [rePassword, setRePassword] = useState('')
    const navigate = useNavigate()

    const buttonSubmitHandler = async (e) => {
        e.preventDefault()
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            const user = auth.currentUser
            console.log('Created');
            if (user) {
                await setDoc(doc(db, 'user', user.uid), {
                    email: user.email,
                    Name: name,
                })
                window.localStorage.setItem('email', email)
                window.localStorage.setItem('name', name)
                window.localStorage.setItem('isLoggedIn', 'true')
                navigate('/login')

            }


        } catch (error) {
            console.log(error);

        }
    }

    return (
        <div className='login_page'>
            <div className='login_information'>
                <h2>Signup Form</h2>
                <div>
                    <p>Name</p>
                    <input type="text" name="" onChange={e => setName(e.target.value)} placeholder='Enter Your Name ' />
                </div>
                <div>
                    <p>Email</p>
                    <input type="email" name="" placeholder='Enter Your Email ' onChange={e => setEmail(e.target.value)} />
                </div>
                <div>
                    <p>Password</p>
                    <input type="email" name="" placeholder='Enter Your Password ' onChange={e => setPassword(e.target.value)} />
                </div>
                <div>
                    <p>Retype Password</p>
                    <input type="email" name="" placeholder='Enter Your Password again!' onChange={e => setRePassword(e.target.value)} />
                </div>
                <button onClick={buttonSubmitHandler}>
                    Submit
                </button>
                <div>
                    <p>
                        Not hava an account? <Link to={"/login"}>Login</Link>
                    </p>
                </div>
            </div>

        </div>
    )
}

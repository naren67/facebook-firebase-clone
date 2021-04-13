import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import {auth, provider} from './firebase.js'
import { useStateValue } from './StateProvider'
import {actionTypes} from './reducer'

function Login() {

          //useStateValue

          const [state, dispatch] = useStateValue()

          const login = ()=>{
                    //login...
                    auth.signInWithPopup(provider)
                    .then(result =>{
                              // console.log(result.user.email)------------------------ login detail

                              dispatch({
                                        type:actionTypes.SET_USER,
                                        user: result.user
                              })   

                    })
                    .catch(error => alert(error.message))
          }
          return (
                    <div className='login'>
                              <div className="login__image">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/600px-Facebook_Logo_%282019%29.png" alt=""/>
                                        <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt=""/>
                              </div>
                              <Button onClick={login}>Login</Button>
                    </div>
          )
}

export default Login

import initializeAuthentication from "../firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";

initializeAuthentication()
const auth = getAuth()

const useFirebase = () => {
  const [user, setUser] = useState({})
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [admin, setAdmin] = useState(null)
  ///create user
  const createUser = (email, password, name, location, history) => {
    setIsLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        setUser(result.user)
        setError('')
        setSuccess(true)
        saveUserName(name)
        history.replace(location.state?.from || '/')
        addUser(name, email)
      })
      .catch(error => {
        setError(error.message)
        setSuccess(false)
      })
      .finally(setIsLoading(false))
  }

  //set useName
  const saveUserName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name
    })
  }

  //getting Current user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user)
        checkAdmin(user.email)
      } else {
        setUser({})
      }
      setIsLoading(false)
    })
    return () => unSubscribe;
  }, [])

  //sing in user

  const singInuser = (email, password, location, history) => {
    setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        setUser(result.user)
        setSuccess(true)
        setError('')
        history.replace(location.state?.from || '/')
      })
      .catch(error => {
        setError(error.message)
        setSuccess(false)
      })
      .finally(setIsLoading(false))
  }

  //sing out user
  const singOutuser = () => {
    setIsLoading(true)
    signOut(auth)
      .then(() => {
        setUser({})
      }).catch(error => {
        setError(error.message)
      })
      .finally(setIsLoading(false))
  }

  //add user
  const addUser = (name, email) => {
    const userObj = { name, email }
    fetch('https://powerful-hamlet-84922.herokuapp.com/users', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(userObj)
    })
      .then(res => res.json())
  }

  //get admin
  const checkAdmin = (email) => {
    fetch(`https://powerful-hamlet-84922.herokuapp.com/users/${email}`)
      .then(res => res.json())
      .then(data => {
        setAdmin(data.admin)
      })
  }

  return {
    user,
    error,
    success,
    createUser,
    singInuser,
    isLoading,
    setError,
    singOutuser,
    admin
  }
}

export default useFirebase;
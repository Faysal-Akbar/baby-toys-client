import initializeAuthentication from "../Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication();
const auth = getAuth();

const useFirebase = () => {
    const [ user, setUser ] = useState({});
    const [ error, setError ] = useState('');
    const [ isLoading, setIsLoading ] = useState(true);
    const [ admin, setAdmin ] = useState(false);
    
    // Register
    const RegisterUser = (name, email, password, navigate) =>{
        setIsLoading(true);
        console.log(name, email, password);
        createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const newUser = {email, displayName: name};
        setUser(newUser);
        saveUser(email, name);

        updateProfile(auth.currentUser, {
            displayName: name,
        }).then(()=> {

        }).catch((error) => {

        });

        navigate('/');
        setError('');
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(()=> setIsLoading(false))
    }

    //Login
    const LoginUser = (email, password, location, navigate) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            setUser(user);
            const destination = location?.state?.from || '/';
            navigate(destination);
            setError('');
        })
        .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
        })
        .then(()=> setIsLoading(false))
    }

    //observer user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            } else {
              setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    //logout
    const logOut = () => {
        signOut(auth).then(() => {
            setUser({});
          }).catch((error) => {
            setError(error.message);
          });          
    }

    const saveUser = (email, displayName) => {
        const user = {email, displayName};
        fetch('https://boiling-earth-11841.herokuapp.com/users', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(user),
        })
    }

    useEffect(()=> {
        fetch(`https://boiling-earth-11841.herokuapp.com/users/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
    }, [user.email])

    return {
        user,
        error,
        RegisterUser,
        LoginUser,
        logOut,
        isLoading,
        admin
    }
}

export default useFirebase;
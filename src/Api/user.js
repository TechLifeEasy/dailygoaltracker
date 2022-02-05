import { auth } from '../Firebase';



const SingUp = async ( email, password, displayName ) => {

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            userCredential.user.updateProfile({
                displayName: displayName
            })
            console.log('done')
        })
        .catch(e => console.log(e))
        .finally()

}


const Logout = () => {

    auth.signOut()
        .then(() => {
            console.log('log out..')
        })
        .catch((e) => console.log(e));
}


const SingIn = ( email, password ) => {

    auth.signInWithEmailAndPassword(email, password)
        .then((data) => {
            console.log('Sing In')
        })
        .catch((e) => {
            console.log(e);
        }).finally()

}

const UserAuthState = (stateUpdate) => {


    const user = auth.currentUser;

    auth.onAuthStateChanged((user) => {
        if (user) {
            stateUpdate({ user_id: user.uid, displayName: user.displayName });
            
        } else {
            stateUpdate(null);
            
        }
    })


}


export { SingUp, Logout, SingIn, UserAuthState };
import { auth } from '../Firebase';



const SingUp = async ( email, password, displayName ) => {

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            userCredential.user.updateProfile({
                displayName: displayName
            }).then(()=>{
                console.log('done')
                window.location.href='/'
            })
        })
        .catch(e => console.log(e))
        .finally()

}


const Logout = () => {

    auth.signOut()
        .then(() => {
            console.log('log out..')
            window.location.href='/'
        })
        .catch((e) => console.log(e));
}




const SingIn = ( email, password ) => {

    auth.signInWithEmailAndPassword(email, password)
        .then((data) => {
            console.log('Sing In')
            window.location.href='/';
        })
        .catch((e) => {
            console.log(e);
            // window.location.href='/';
        }).finally()

}

const UserAuthState = async () => {


    // const user = auth.currentUser;
// 
    await auth.onAuthStateChanged((user) => {
        if (user) {
          console.log('user In')
         console.log(window.location.href.includes('/signup'))
         if(window.location.href.includes('/signup') || window.location.href.includes('/login')){
               window.location.href='/'
         }
        } else {
            if(!window.location.href.includes('/signup')){
              
                window.location.href='/signup'
          }
        }
    })


}


export { SingUp, Logout, SingIn, UserAuthState };
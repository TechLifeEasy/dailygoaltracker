import { auth } from '../Firebase';



const SingUp = async ( email, password, displayName ) => {

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            userCredential.user.updateProfile({
                displayName: displayName
            }).then(()=>{
                localStorage.setItem('user','hash');
                console.log('done')  
            })
            localStorage.setItem('user','hash');
        })
        .catch(e => alert(e))
        .finally(e=>window.location.href='/')

}


const Logout = () => {

    auth.signOut()
        .then(() => {
            console.log('log out..')
            localStorage.removeItem('user');
            window.location.href='/'
        })
        .catch((e) => console.log(e));
}




const SingIn = ( email, password ) => {

    auth.signInWithEmailAndPassword(email, password)
        .then((data) => {
            localStorage.setItem('user','hash');
            window.location.href='/';
        })
        .catch((e) => {
            alert(e)

            // window.location.href='/';
        }).finally()

}

const UserAuthState = async (setLoading) => {


    // const user = auth.currentUser;
// 
    await auth.onAuthStateChanged((user) => {
        if (user) {
          console.log('user In')
         console.log(window.location.href.includes('/signup'))
         if(window.location.href.includes('/signup') || window.location.href.includes('/login')){
               window.location.href='/'
         }
         setLoading(false)
        } else {
            setLoading(false)
            if(!window.location.href.includes('/signup')){
              
                window.location.href='/signup'
          }

        }
    })


}


export { SingUp, Logout, SingIn, UserAuthState };
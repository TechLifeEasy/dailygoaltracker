
import { auth, db } from '../Firebase';
import firebase from 'firebase/compat/app';

const AddTask = async (data) => {

    if (!auth.currentUser) {
        throw new Error('Login First')
    }
    const userId = auth.currentUser.uid;

    const datas=new Date(new Date(data.startdate).toDateString());

    const Data = {
        current: 0,
        days: [],
        finish: false,
        dayscount: data.dayscount,
        finishdate: '-',
        startdate: datas,
        username: auth.currentUser.displayName
    }

    const task = await db.collection(data.title).doc(userId).set(Data)

    try
    {

        await db.collection('USER-CO').doc(userId).update( {
            tasks: firebase.firestore.FieldValue.arrayUnion( data.title )
        });
    }catch(e){

        await db.collection('USER-CO').doc(userId).set({tasks:[data.title]})
    }

    console.log(task)
}


const GetTask=async ()=>{


    if (!auth.currentUser) {
        throw new Error('Login First')
    }
    const userId = auth.currentUser.uid;

    const titleref=  await db.collection('USER-CO').doc(userId)
    const titledata=await titleref.get()

    if(!titledata.data().tasks) return false;

    const title=titledata.data().tasks[0];

    console.log(title)
    const dataref =db.collection(title).doc(userId)

    const data=await dataref.get();

    console.log({...data.data(),title})

    return {...data.data(),title};
   
}



const updateDoc = async (data)=>{

    if (!auth.currentUser) {
        throw new Error('Login First')
    }
    const userId = auth.currentUser.uid;

    const Data = {
        current: data.current,
        days: data.days,
        dayscount: data.dayscount,
        finishdate: data?.finishdate,
        startdate: data.startdate,
        username: auth.currentUser.displayName
    }

    const task = await db.collection(data.title).doc(userId).set(Data)
    console.log('done')

}

// GetTask().then((data)=>{
//     console.log(data)
// })


// AddTask({
//     title: '500daysofCode',
//   
//     dayscount: 100,
//     startdate: '2022-02-03'
// })
// updateDoc({
//     title: '500daysofCode',
//     userId: 'axs',
//     dayscount: 100,
//     startdate: '2022-02-03',
//     current:1,
//     days:[{
//         finishdate:'2022-02-04',
//         isdone:true,
//         taks:'this is just try from my side'
//     },
// ],
//     finishdate:'_'
// })



export { AddTask,GetTask,updateDoc };
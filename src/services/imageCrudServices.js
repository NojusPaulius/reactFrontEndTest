import firebase from "../firebase";

export const addImage = (data) =>{
    firebase.firestore()
    .collection("images")
    .add(data)
}

export const getAllImages = (onImagesChanged, user) =>{

    if (!user || !user.uid) {
        console.error('User is not defined or user UID is missing');
        return;
      }
      
    firebase.firestore()
    .collection("images")
    .where("uid", "==", user?.uid)
    .onSnapshot((snapshotArg)=>{
        const newImage = snapshotArg.docs.map((doc)=>({
            id:doc.id,
            ...doc.data()

        }))

        onImagesChanged(newImage)
    })
}


export const deleteImage = (id) =>{
    firebase.firestore()
    .collection("images")
    .doc(id)
    .delete()
}
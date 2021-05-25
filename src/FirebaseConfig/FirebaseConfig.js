import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCptk7xrVaoX1ALpxdlbjkhvy-67AwWxs0",
    authDomain: "ecommerce-ec013.firebaseapp.com",
    projectId: "ecommerce-ec013",
    storageBucket: "ecommerce-ec013.appspot.com",
    messagingSenderId: "279219345001",
    appId: "1:279219345001:web:ae072ce0fa30a8054734f8",
    measurementId: "G-ZJSMT230R1"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

//if the user has a doc in the database we return the user ref 
//if not we create a doc to this user and also return the user ref 
export const createUserProfileDocument = async (userAuth, additionalData) => {
    
    if (!userAuth) return;

    const userRef = firestore.doc(`usres/${userAuth.uid}`)
    const snapShot = await userRef.get();

    //check if the user exists in the database
    if (!snapShot.exists) {
        //extracting the information comming from the auth user to add in the database
        const {
            displayName,
            email
        } = userAuth;
        const createdAt = new Date();

        //creatin a doc to the user in the database//
        //adding the user information to database 
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log(error)
        }
    }

    //returning the user ref to use later
    return userRef;
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
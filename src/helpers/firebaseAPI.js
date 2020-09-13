import { auth, storage } from "../config";

export const signup = async (email, password) => {
  try {
    const response = await auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        return error;
      });
    if (response.code) {
      throw response;
    } else {
      return response;
    }
  } catch (error) {
    throw error;
  }
};

export const signin = async (email, password) => {
  try {
    const response = await auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        return error;
      });
    if (response.code) {
      throw response;
    } else {
      return response;
    }
  } catch (error) {
    throw error;
  }
};

export const signout = () => auth().signOut();

export const uploadImage = async (data) => {
  try {
    const user = await auth().currentUser;
    const uploadTask = await storage
      .ref(`/profileImages/${user.uid}/${data.name}`)
      .put(data.file);
    const imageSrc = await uploadTask.ref.getDownloadURL();
    return imageSrc;
  } catch (error) {
    throw error;
  }
};
// var user = firebase.auth().currentUser;

// user.updateProfile({
//   displayName: "Jane Q. User",
//   photoURL: "https://example.com/jane-q-user/profile.jpg"
// }).then(function() {
//   // Update successful.
// }).catch(function(error) {
//   // An error happened.
// });

import { auth, storage } from "../config";

export const signup = async (data) => {
  try {
    const response = await auth()
      .createUserWithEmailAndPassword(data.email, data.password)
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

export const signin = async (data) => {
  try {
    const response = await auth()
      .signInWithEmailAndPassword(data.email, data.password)
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

export const updatingProfile = async (data) => {
  try {
    const user = await auth().currentUser;
    const uploadTask = await storage
      .ref(`/profileImages/${user.uid}/${data.file.name}`)
      .put(data.file.file);
    const imageSrc = await uploadTask.ref.getDownloadURL();
    const response = await user.updateProfile({
      displayName: "afdool",
      photoURL: imageSrc,
    });
    console.log(response, "api level");
    return "sucsess";
  } catch (error) {
    throw error;
  }
};

export const signout = () => auth().signOut();

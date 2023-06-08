import React from "react";
import "./Profile.css";
import Form from "../../components/Form/Form";
import Post from "../../components/Post/Post";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSelector } from "react-redux";
import { getAuth } from "firebase/auth";
const Profile = () => {
  // const auth = getAuth();
  // const [user] = useAuthState(auth);
  //
  const userInfo = useSelector((state) => state.userInfo);
  console.log(userInfo);
  return (
    <div class="main-block main-block_type_profile">
      <div className="profile">
        <div className="profile__banner"> </div>

        {/* <Post user={user?.displayName} userPic={user?.photoURL} message="Паст в избранном: 0" />
        <Form disabled /> */}
      </div>
    </div>
  );
};

export default Profile;

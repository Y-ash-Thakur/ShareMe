import { GoogleLogin } from "@react-oauth/google";
import { Navigate, useNavigate } from "react-router-dom";
import shareVideo from '../assets/share.mp4';
import { jwtDecode } from 'jwt-decode'
import logo from '../assets/logowhite.png'
import { client } from "../client";

const Login = () => {

  const navigate = useNavigate();

  const handleGoogleLogin = (credentialResponse) => {
      try {
        // Extract the data
        const decoded = jwtDecode(credentialResponse.credential);

        // Extract needed data
        const { name, sub: googleId, picture: imageUrl } = decoded;

        // Save user to localStorage
        localStorage.setItem('user', JSON.stringify(decoded));

        // Create a sanity document
        const doc = {
          _id: googleId,
          _type: 'user',
          userName: name,
          image: imageUrl
        }
        
        client.createIfNotExists(doc).then(() => {
          navigate('/', {replace: true});
        })
      }
      catch (error) {
        console.error('Login error:', error)
      }
  };


  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <video 
          src={shareVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
          />
          <div className="absolute flex flex-col justify-center items-center top-0 left-0 right-0 bottom-0 inset-0 bg-black opacity-50">
            <div className="p-5">
              <img src={logo} width="130px" alt="logo" />
            </div>
            <div className="shadow-2xl">
              <GoogleLogin
                onSuccess={handleGoogleLogin} 
                onError={() => {
                  console.log("Login Failed")
                }}                
              />
            </div>
          </div>
      </div>
    </div>
  )
}

export default Login

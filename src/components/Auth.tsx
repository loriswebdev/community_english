import { userData } from "@/app/_redux/slices/GetUserSlice";
import { auth, googleProvider } from "@/app/firebase/firebase";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks";
import { theme } from "@/app/providers/globalThemeProvider";
import { Box, Button, Input, Stack, Typography } from "@mui/material";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import Image from "next/image";
import {useState } from "react";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [signUp, setSignUp] = useState(false);
  const dispatch = useAppDispatch()
  const [warning, setWarning] = useState({
    email: false,
    confirmPassword: false,
    password: false,
  });
  
  const signUpClick = async () => {
    if (!email) setWarning((prev) => ({ ...prev, email: true }));
    if (confirmPassword === password)
      setWarning((prev) => ({
        ...prev,
        confirmPassword: true,
        password: true,
      }));
    if (!(!confirmPassword || !password || !email)) {
      try {
        await createUserWithEmailAndPassword(auth, email, password).then(
          (userCredential) => {
            dispatch(userData(userCredential.user))
          }
        );
      } catch (err) {
        console.error(err);
      }
    } else {
      console.log("create user failed");
    }
  };
  const signIn = async () => {
    if (!email) {
      setWarning((prev) => ({ ...prev, email: true }));
    } else {
      try {
        await signInWithEmailAndPassword(auth, email, password).then(
          (userCredential) => {
            dispatch(userData(userCredential.user))
          }
        );
      } catch (err) {
        console.error(err);
      }
    }
  };
  const switchView = () => {
    for(const [key] of Object.entries(warning)){
      setWarning(prev=>({...prev, [key]: false}));
    };
    setSignUp(!signUp);
  };
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider).then((userCredential) => {
        dispatch(userData(userCredential.user))
      });
    } catch (err) {
      console.error(err);
    }
  };


  return (
    <Stack>
        <Typography sx={{fontWeight: '600', textAlign:"center"}} color='white'>
    Please {signUp ? 'Sign Up': 'Login'}
  </Typography>
      <Stack justifyContent={"start"} alignItems={"start"}>
        {signUp ? (
          <>
            <Input
              error={warning.email}
              className="w-full"
              placeholder="Email..."
              onChange={(e) => {
                setEmail(e.target.value);
                setWarning((prev) => ({ ...prev, email: false }));
              }}
            />
            <Input
              error={warning.password}
              className="w-full"
              placeholder="Password..."
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
                setWarning((prev) => ({ ...prev, password: false }));
              }}
            />
            <Input
              error={warning.confirmPassword}
              className="w-full"
              placeholder={"Confirm Password..."}
              type="password"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setWarning((prev) => ({ ...prev, confirmPassword: false }));
              }}
            />{" "}
            <Button onClick={signUpClick}> Sign Up</Button>
            <Button sx={{ textTransform: "none", alignSelf:"center"}} onClick={switchView}>
              Already have any account? Sign In!
            </Button>
          </>
        ) : (
          <>
            {" "}
            <Input
                 error={warning.email}
              className="w-full"
              placeholder="Email..."
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
             error={warning.password}
              className="w-full"
              placeholder="Password..."
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />{" "}
            <Button onClick={signIn}> Sign In</Button>
            <Button sx={{ textTransform: "none", alignSelf:"center"}} onClick={switchView}>
              Don't have and account? Sign Up!
            </Button>
          </>
        )}
      </Stack>

      <Button
        sx={{
          background: "rgba(0, 0,0, 0.2)",
          ":hover": {
            background: "rgba(0, 0,0, 0.6)",
          },
        }}
        onClick={signInWithGoogle}
      >
        <Image
          src="/icons/google_logo.png"
          alt="checkmark"
          width={20}
          className="mr-[5px]"
          height={20}
        />{" "}
        Sign {signUp ? 'Up':'In'} With Google
      </Button>

     
    </Stack>
  );
};

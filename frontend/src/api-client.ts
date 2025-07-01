import type { RegisterFormData } from "./pages/Register";
import type { SignInFormData } from "./pages/SignIn";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

export const register=async(formData:RegisterFormData)=>{
    const response=await fetch(`${API_BASE_URL}/api/users/register`,{
        method:"POST",
        credentials:"include",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(formData),
    })

    const resposeBody=await response.json();
    if(!response.ok){
        throw new Error(resposeBody.message);
    }
};
export const signIn=async(formData:SignInFormData)=>{
    const response=await fetch(`${API_BASE_URL}/api/auth/login`,{
        method:"POST",
        credentials:"include",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(formData),
    })

    const resposeBody=await response.json();
    if(!response.ok){
        throw new Error(resposeBody.message);
    }
    return resposeBody;
};
export const validateToken= async()=>{
    const response =await fetch(`${API_BASE_URL}/api/auth/validate-token`,{
        credentials:"include",
    })
    if(!response.ok){
        throw new Error("Token invalid");
    }
    return response.json();
}

export const signOut=async()=>{
    const response=await fetch(`${API_BASE_URL}/api/auth/logout`,{
        method:"POST",
        credentials:"include",
    })
    if(!response.ok){
        throw new Error("Error during sign out");
    }
    
};

export const addMyHotel = async (hotelFormData: FormData) => {
  const response = await fetch(`${API_BASE_URL}/api/my-hotels`, {
    method: "POST",
    credentials: "include",
    body: hotelFormData,
  });

  if (!response.ok) {
    throw new Error("Failed to add hotel");
  }

  return response.json();
};
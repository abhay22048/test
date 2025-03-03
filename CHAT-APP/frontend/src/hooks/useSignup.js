import React, { useState } from 'react';
import toast from "react-hot-toast";
import { useAuthContext } from '../context/AuthContext';

const useSignup = () => {
    const[loading,setLoading] = useState(false);
    const {setAuthUser} =useAuthContext()


    const signup = async ({ fullName, userName, password, confirmPassword, gender }) => {
    // Validate inputs
    const success = handleInputErrors({ fullName, userName, password, confirmPassword, gender });
    if (!success) return;

    setLoading(true);
    try {
        const res = await fetch("/api/auth/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ fullName, userName, password, confirmPassword, gender }),
        });

        // Check for HTTP errors
        if (!res.ok) {
            const errorResponse = await res.json();
            throw new Error(errorResponse.error || "Something went wrong!");
        }

        const data = await res.json();

        // Save user data in local storage
        localStorage.setItem("chat-user", JSON.stringify(data));

        // Update context or state with authenticated user
        setAuthUser(data);

        toast.success("Signup successful!");
    } catch (error) {
        // Display error message
        toast.error(error.message || "Signup failed!");
    } finally {
        setLoading(false);
    }
};

    return {loading,signup};

};

export default useSignup



function handleInputErrors({ fullName, userName, password, confirmPassword, gender }) {
    if (!fullName || !userName || !password || !confirmPassword || !gender) {
        toast.error('Please fill all the fields');
        return false;
    }

    if (password !== confirmPassword) {
        toast.error('Passwords do not match');
        return false; // Add return statement here
    }

    if (password.length < 6) {
        toast.error('Password must be at least 6 characters');
        return false;
    }

    return true;
}
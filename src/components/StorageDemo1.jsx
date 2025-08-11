import React from 'react'
import Cookies from 'js-cookie'

export const StorageDemo1 = () => {
    const storeData = () => {

        //localStorage
        localStorage.setItem("id","royal1121")
        sessionStorage.setItem("id","royal1131")
        //window.document.cookie = "id=royal1141; expires=Fri, 31 Dec 2023 23:59:59 GMT; path=/";
        Cookies.set("id","royal1152", { expires: 7, path: '/' ,secure: true, sameSite: 'Strict' });

        var user = {
            id:1,
            name:"royal",
            age:22
        }
        //localStorage.setItem("user", user);
        localStorage.setItem("user", JSON.stringify(user));
    }
    const getDataFromStorage = () => {
        const localStorageId = localStorage.getItem("id");
        console.log("localStorageId", localStorageId);
        const sessionStorageId = sessionStorage.getItem("id");
        console.log("sessionStorageId", sessionStorageId);
        const cookieId = Cookies.get("id");
        console.log("cookieId", cookieId);
        // const user = localStorage.getItem("user");
        // //console.log("user", user[0]);
        // const userObj = JSON.parse(user);
        // console.log("userObj", userObj);

        const user = JSON.parse(localStorage.getItem("user"));
        console.log("user", user);
    }
    const removeDataFromStorage = () => {
        // localStorage.removeItem("id");
        // sessionStorage.removeItem("id");
        // Cookies.remove("id", { path: '/' });

        localStorage.clear();
        sessionStorage.clear();
        Cookies.remove("id", { path: '/' });
    }
  return (
    <div>
        <h1>StorageDemo1</h1>
        <button onClick={()=>{storeData()}}>STORE</button>
        <button onClick={()=>{getDataFromStorage()}}>GET</button>
        <button onClick={()=>{removeDataFromStorage()}}>REMOVE</button>
    </div>
  )
}

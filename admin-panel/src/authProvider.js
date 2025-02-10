const api_url = import.meta.env.VITE_JSON_SERVER_URL;


const authProvider = {
    login: async ({email, password})=>{
        const response = await fetch(`${api_url}/auth/login`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({email, password})
        }).then(async (res)=>{
            if(res.status == 200){
                const {token, role, permissions} = await res.json()
                localStorage.setItem("auth", JSON.stringify({token, role, permissions}))
                return {user:role, permissions:permissions}
            }else{
                throw new Error("Invalid email or password")
            }
        }).catch((err)=>{
            throw new Error(err)
        })
    },

    logout: ()=>{
        localStorage.removeItem("auth")
        return Promise.resolve()
    },

    checkAuth: ()=>{
        return localStorage.getItem("auth") ? Promise.resolve() : Promise.reject()
    },

    checkError: (error)=>{
        if(error.status === 401 || error.status === 403){
            localStorage.removeItem("auth")
            return Promise.reject()
        }
        return Promise.resolve()
    },

    getPermissions: ()=>{
        const auth = JSON.parse(localStorage.getItem("auth"))
        return auth ? Promise.resolve(auth.permissions) : Promise.reject()
    },

    getIdentity: ()=>{
        const auth = JSON.parse(localStorage.getItem("auth"))
        return auth ? Promise.resolve({username: auth.username}) : Promise.reject()
    }

}

export default authProvider;
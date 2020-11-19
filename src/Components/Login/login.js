const useAuth = () => {
    return localStorage.getItem("token") ? true : false
}

export default useAuth
// call api get list user
axios.get('http://localhost:5000/auth/admin/user', {
    headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`
    }
})



// show list user to client
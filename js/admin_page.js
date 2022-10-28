async function getListUser() {
    try {
       // call api get list user
        const configHeader = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`
            }
        };
        const response = await axios.get('http://localhost:5000/auth/admin/user', configHeader); 
    } catch (error) {
        // errror
        // call refresh token
        // token expired->redirect to admin
    }
    
}

getListUser();



// show list user to client
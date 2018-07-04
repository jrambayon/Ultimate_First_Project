function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();  
    const helloLogin = document.querySelector('#helloLogin');
    firebase.auth().signInWithPopup(provider)
        .then(result => {
            const user = result.user;
            helloLogin.append(`${user.displayName}!`);
        })
}
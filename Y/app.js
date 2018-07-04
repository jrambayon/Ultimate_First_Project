document.addEventListener("DOMContentLoaded", event => {

    const app = firebase.app();

    const db = firebase.firestore();

    
    getEmployees();  

    /*
    const productsRef = db.collection('products');

    const query = productsRef.where('price', '>', 1)

    query.get()
        .then(products => {
            products.forEach(doc => {
                data = doc.data()
                document.write(`${data.name} at $${data.price} <br>`)
            })
        })
       
    */
});

function uploadFile(files) {
    const storageRef = firebase.storage().ref();
    const imgUpl = storageRef.child('imgUpl.jpg');
    const file = files.item(0);
    imgUpl.put(file);

    imgUpl.getDownloadURL().then(function(url) {
        document.querySelector('#imgUpload').setAttribute('src', url)
    });

    

}

function getEmployees(files) {
    const app = firebase.app();
    const db = firebase.firestore();
 
    const productsRef = db.collection('employees');
    const empTable = document.querySelector('#tbl-employees');

    productsRef.get()
        .then(products => {
            var content = '';
            products.forEach(doc => {
                data = doc.data();
                var row = empTable.insertRow(2);
                var firstName = row.insertCell(0);
                var lastName = row.insertCell(1);
                var position = row.insertCell(2);

                firstName.innerHTML = `${data.firstName}`;
                lastName.innerHTML = `${data.lastName}`;
                position.innerHTML = `${data.position}`;        
            });       
        })   

}

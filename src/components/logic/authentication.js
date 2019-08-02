import firebase from 'firebase'; // db CRUD interaction

// login function
function login(userEmail, userPassword){
    let Parents = firebase.firestore().collection("Parents");
    Parents.where("Email", "==", userEmail).get().then((snapshot) => {
        if (snapshot.empty || snapshot.length > 1){
            return {
                success: false,
                error: true,
                msg: "Invalid Email"
            }
        } else {
            snapshot.docs.map((doc) => {
                let docData = doc.data();
                // importing bcrypt for password check
                const bcrypt = require("bcryptjs");
                // compare hashes
                let passwordMatch = bcrypt.compareSync(userPassword, docData.Password);
                if (passwordMatch) {
                    // generating new Token
                    const uuidv4 = require("uuid/v4")
                    let newToken = uuidv4();
                    docData.Token = newToken;
                    // updating values in the database
                    Parents.get({"Email": userEmail}).set(docData);
                    
                    return {
                        success: true,
                        error: false,
                        msg: "Login Successful",
                        Token: newToken
                    }
                } else {
                    return {
                        success: false,
                        error: true,
                        msg: "Invalid Password"
                    }
                }
            })
        }
    }).catch((err) => {
        return {
            success: false,
            error: true,
            msg: err
        }
    })
}

export default login;
// sign up function
// token validation function
// account activation
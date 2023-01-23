import axios from 'axios';

const API_KEY = '0000000000000000000000000000000000000000000000';

async function authenticate(mode, email, password){
    const url = `00000000000000000000000000000000000000000000:${mode}?key=${API_KEY}`;

    const response = await axios.post(url,
        {
            email: email,
            password: password,
            returnSecureToken: true
        } 
    );
    const token = response.data.idToken;
    return token;
}

export async function createUser(email, password){
    const token = await authenticate('signUp', email, password);
    return token;
}

export async function login(email, password){
    const token = await authenticate('signInWithPassword', email, password);
    return token;
}
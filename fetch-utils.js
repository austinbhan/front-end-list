const BASE_URL = 'http://localhost:7890';
export async function signUpUser(userInfo) {
    const resp = await fetch(`${BASE_URL}/api/v1/users`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo),
        credentials: 'include',
    });
    const data = await resp.json();
    if (resp.ok) {
        location.replace('./tasks');
    } else {
        console.error(data.message);
    }
}

// Next, make getUser()
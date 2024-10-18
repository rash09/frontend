import {useActionState} from 'react';
function FormsComponent(props) {
    const [user, submitAction, isPending] = useActionState(login, {
        data: null,
        error: null
    });
    async function login(prevState, formData) {
        const username = formData.get('username');
        const password = formData.get('password');
        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username, password})
            });
            if (!response.ok) {
                throw new Error('HTTP error!');
            }
            const data = await response.json();
            return {data, error: null};
        }
        catch (error) {
            return{error:error.error}
        }
    }
    return (
        <div>
            <form action={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input type="text" required/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" required/>
                </div>
                <button type="submit" disabled={isPending}>{isPending ? "Logging in.." : "Login"}</button>

                {user && <p style={{ color: 'green' }}>Logged in:{user.email}</p>}
                {error && <p style={{color:'red'}}>:{error}</p>}
                </form>
        </div>
    );
}

export default FormsComponent;
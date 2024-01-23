type AuthResponse = {
    message: string;
    response: {
        access_token: string;
        refresh_token: string;
        expires_in: number;
        expires_at: number;
    } | null;
};

export async function signIn(email: string, password: string): Promise<AuthResponse> {
    try {
        const response = await fetch('http://localhost:5001/metauser/signin/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });
        const data = await response.json();
        return data;
    }
    catch (error) {
        throw new Error(`failed to sign in: ${(error as Error).message}`)
    }
}

export async function register(email: string, password: string): Promise<AuthResponse> {
    try {
        const response = await fetch('http://localhost:5001/metauser/signup/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });
        const data = await response.json();
        return data;
    }
    catch (error) {
        throw new Error(`failed to sign in: ${(error as Error).message}`)
    }
}

export async function dummy(): Promise<Response> {
    /* testing Access-Control-Allow-Origin in API */
    const response = await fetch('http://localhost:5001/metauser/');
    const data = await response.json();
    return data;
}
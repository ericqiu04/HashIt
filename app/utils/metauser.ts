export async function signIn(): Promise<Response> {
    const response = await fetch('/api/signin');
    const data = await response.json();
    return data;
}

export async function dummy(): Promise<Response> {
    /* testing Access-Control-Allow-Origin in API */
    const response = await fetch('http://localhost:5001/metauser/');
    const data = await response.json();
    return data;
}
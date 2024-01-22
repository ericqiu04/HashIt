export async function signIn(): Promise<Response> {
    const response = await fetch('/api/signin');
    const data = await response.json();
    return data;
}
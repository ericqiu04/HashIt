/*
Password must contain 8 or more characters, and must satisfy at least one of these groups: lower case, upper case, numbers, and punctuation.
*/
export function isValid(password: string): boolean {
    const hasNumber = /\d/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*]/.test(password);
    const isValidLength = password.length >= 8;

    return hasNumber && hasLowercase && hasUppercase && hasSpecialChar && isValidLength;
}

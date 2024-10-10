export interface TokenManagerIfs {
    generateToken(userName: string, language: string): string;
    isValidToken(token: string, language: string): boolean;
}
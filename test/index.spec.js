const passwordModule = require('../dist/index');
const generateStrongPassword = passwordModule.default;
const isStrongPassword = passwordModule.isStrongPassword;


describe('generateStrongPassword', () => {
    test('should generate password of specified length', () => {
        const password = generateStrongPassword(16);
        expect(password.length).toBe(16);
    });

    test('should generate password with default length if no length specified', () => {
        const password = generateStrongPassword();
        expect(password.length).toBe(12);
    });

    test('should only use allowed characters', () => {
        const password = generateStrongPassword(50);
        const allowedChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^& *()_+";
        
        for (const char of password) {
            expect(allowedChars).toContain(char);
        }
    });
});

describe('isStrongPassword', () => {
    test('should return true for strong passwords', () => {
        expect(isStrongPassword('Abc123!@')).toBe(true);
        expect(isStrongPassword('StrongP4$$word')).toBe(true);
        expect(isStrongPassword('C0mpl3x_P@ssw0rd')).toBe(true);
    });

    test('should return false for passwords shorter than 8 characters', () => {
        expect(isStrongPassword('Ab1!')).toBe(false);
        expect(isStrongPassword('Aa1!')).toBe(false);
        expect(isStrongPassword('Ab12!')).toBe(false);
    });

    test('should return false for passwords missing uppercase letters', () => {
        expect(isStrongPassword('abc123!@')).toBe(false);
        expect(isStrongPassword('password123!')).toBe(false);
    });

    test('should return false for passwords missing lowercase letters', () => {
        expect(isStrongPassword('ABC123!@')).toBe(false);
        expect(isStrongPassword('PASSWORD123!')).toBe(false);
    });

    test('should return false for passwords missing numbers', () => {
        expect(isStrongPassword('Abcdef!@')).toBe(false);
        expect(isStrongPassword('Password!')).toBe(false);
    });

    test('should return false for passwords missing special characters', () => {
        expect(isStrongPassword('Abcdef123')).toBe(false);
        expect(isStrongPassword('Password123')).toBe(false);
    });


    test('should create strong passwords even with minimum length', () => {
        const password = generateStrongPassword(8);
        
        expect(password.length).toBe(8);
        expect(isStrongPassword(password)).toBe(true);
      });
});
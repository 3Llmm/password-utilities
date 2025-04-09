# @rasberi/password-utilities

A JavaScript library providing functions to determine the security of a password as well as to generate secure ones. 

- Validate if a password is strong
- Generate strong, random passwords
- Fully tested with Jest
- Published on npm

## Installation

Using *npm*:
bash
npm install @rasberi/password-utilities


Install via yarn:

bash
yarn add @rasberi/password-utilities

## Usage

Basic Usage

js
import { generateStrongPassword, isStrongPassword } from '@rasberi/password-utilities';

// Generate a strong password
const newPassword = generateStrongPassword(12);

// Check if a password is strong
const checkPassword = isStrongPassword(newPassword);

console.log(newPassword);  
console.log(checkPassword); 


### Examples

Generate a strong password for user account creation: 

```js
import { generateStrongPassword } from '@rasberi/password-utilities';

const userPassword = generateStrongPassword(16);

console.log(userPassword); 

```
Validate user input (registration):

```js
import { isStrongPassword } from '@rasberi/password-utilities';

const userInput = '1234abcd';
const isValid = isStrongPassword(userInput);

console.log(isValid);

```

## Contribution

Contributions are welcome! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for more details.

## Security

Please refer to our [SECURITY.md](./SECURITY.md) for information about our security policies, how to report vulnerabilities, and our approach to handling security concerns.

## License

This project is licensed under the [MIT License](./LICENSE.md).
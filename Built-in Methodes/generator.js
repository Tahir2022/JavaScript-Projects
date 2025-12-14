// Random password generator

function generatePassword(length, includeLowercase, includeNumbers, includeUppercase, includeSymbols){

    return '';
}



const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength,
                                  includeLowercase,
                                  includeNumbers,  
                                  includeSymbols,
                                  includeUppercase
)

console.log(`Generated password: ${password}`);
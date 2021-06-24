function getFullName(firstName, lastName){
    return firstName + ` ` + lastName;
   }
   let fullName = getFullName(`Rishabh`, `Das`);
   let expected = `4`;
   if(fullName !== expected)
   {throw new Error(`${fullName} is not equal to $(expected)`)};
   
   let fullNewName = getFullName(`Rishabh`, `Das`);
   let expectedNew = `Rishabh Das`;
   if(fullName !== expected)
   {throw new Error(`${fullName} is not equal to $(expected)`)};

   // No since the firt test throws an error we don't see the output of the second one.



function totalAmount(amount, taxRate){return amount + (amount * taxRate) };
let result = totalAmount(4000, 15);
let expected = 4000;
if(result !== expected){throw new Error(`${result} is not equal to ${expected}`)};
let expectedNew = 64000;
if(result !== expectedNew){throw new Error(`${result} is not equal to ${expectedNew}`)};

   // No since the firt test throws an error we don't see the output of the second one.

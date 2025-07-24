const makeChange = (c) => {
  c = parseInt(c);  // Convert input to integer

  // Initialize the result object with zero for each coin
  let change = { q: 0, d: 0, n: 0, p: 0 };

  // Calculate the number of quarters (25 cents)
  change.q = Math.floor(c / 25);
  c %= 25;  // Get the remainder after using quarters

  // Calculate the number of dimes (10 cents)
  change.d = Math.floor(c / 10);
  c %= 10;  // Get the remainder after using dimes

  // Calculate the number of nickels (5 cents)
  change.n = Math.floor(c / 5);
  c %= 5;   // Get the remainder after using nickels

  // The remaining amount is in pennies (1 cent)
  change.p = c;

  return change;
};

// Do not change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));

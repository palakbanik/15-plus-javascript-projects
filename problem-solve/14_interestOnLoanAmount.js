function interestOnLoanAmount(amount, loan, year) {
    const amountNum = Number(amount);
    const loanNum = Number(loan);
    const yearNum = Number(year);

    if (isNaN(amount) || isNaN(loan) || isNaN(year)) {
        throw new Error("enter valid number");
    }

    return (amountNum * loanNum * yearNum) / 100;
}

console.log(interestOnLoanAmount(1000, 5, 1));
console.log(interestOnLoanAmount(10000, 20, 5));

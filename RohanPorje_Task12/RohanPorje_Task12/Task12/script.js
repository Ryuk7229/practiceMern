    //   let name = "Rohan";
    //   let age = "32";
    //   console.log("My name is ", name);
    //   console.log("My age is", age);


    //   let a = 5;
    //   let b = 7;
    //   let sum = a + b;
    //   console.log(sum);



    // A=P(1+(r/n))*nt

    let p = 1000;
    let r = 0.08;
    let n = 1;
    let t = 5;

    let ratePerPeriod = 1 + (r/n);
    let totalPeriod = n*t;
    let growth = Math.pow (ratePerPeriod, totalPeriod);

    let a = p * growth;

    let compundInterest = a - p;

    console.log("Principal (P):", p);
    console.log("Rate (r):", r);
    console.log("Compounded per year (n):", n);
    console.log("Time in years (t):", t);
    console.log("Final Amount (A):", a);
    console.log("Compound Interest Earned:", compoundInterest);

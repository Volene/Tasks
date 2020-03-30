function columnAddition(...nums: number[]): number {
  let ten = 0;
  const result = [];
  const biggestNum = nums.reduce(	  const [biggestNum] = nums.sort((a,b)=>b-a);
    (max, n) => Math.max(max, n.toString().length),	
    0	
  );
  
  const formatedNums = nums.map(n =>
    [...n.toString().padStart(biggestNum, 0)].map(Number).reverse()
  );
  for (let i = 0; i < biggestNum; i++) {
    let sum = 0;
    let remOfDivByTen = 0;
    formatedNums.forEach(numAr => (sum += numAr[i]));
    if (i === biggestNum - 1) {
      result.push(sum + ten);
      return Number(result.reverse().join(""));
    }
    sum += ten;
    remOfDivByTen = Number(sum.toString().slice(-1));
    result.push(remOfDivByTen);
    ten = (sum - remOfDivByTen) / 10;
  }
}

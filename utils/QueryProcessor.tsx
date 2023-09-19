export default function QueryProcessor(query: string): string {
  const queries = ["shakespeare", "andrew id", "name"]
  const responses = ["William Shakespeare (26 April 1564 - 23 April 1616) was an " +
  "English poet, playwright, and actor, widely regarded as the greatest " +
  "writer in the English language and the world's pre-eminent dramatist.",  "my andrewid is jackyg", "polly"]

  for (let i = 0; i < queries.length; i++){
    if (query.toLowerCase().includes(queries[i])){
      return responses[i]
    }
  }

  const addMatch = query.match(/What is (\d+) plus (\d+)/);
  if (addMatch) {
    const x: number = parseInt(addMatch[1]);
    const y: number = parseInt(addMatch[2]);
    return (x+y).toString();
  }

  const minus = query.match(/What is (\d+) minus (\d+)/);
  if (minus) {
    const x: number = parseInt(minus[1]);
    const y: number = parseInt(minus[2]);
    return (x-y).toString();
  }

  const largestMath = query.match(/Which of the following numbers is the largest: (\d+), (\d+), (\d+)/);
  if (largestMath){
    const answer = Math.max(parseInt(largestMath[1]), Math.max(parseInt(largestMath[2]), parseInt(largestMath[3])))
    return answer.toString();
  }

  const multiply = query.match(/What is (\d+) multiplied by (\d+)/);
  if (multiply){
    const answer = parseInt(multiply[1]) * parseInt(multiply[2])
    return answer.toString();
  }

  const divide = query.match(/What is (\d+) divided by (\d+)/);
  if (divide){
    const answer = parseInt(divide[1]) / parseInt(divide[2])
    return answer.toString();
  }

  var isSquare = function (n : number) {
    return n > 0 && Math.sqrt(n) % 1 === 0;
  };

  function isCube(N : number)
{
    let cube;
 
    // Iterate from 1-N
    for(let i = 0; i <= N; i++)
    {
        cube = i * i * i;
        if (cube === N)
        {
            return true
        }
        else if (cube > N)
        {
            return false
        }
    }
    return false
}

var isPrime = function (num : number) {
  for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
      if(num % i === 0) return false;
  }
  return num > 1;
}

  const squarecube = query.match(/Which of the following numbers is both a square and a cube: (\d+), (\d+), (\d+), (\d+), (\d+), (\d+), (\d+)/)
  if (squarecube){
    for (let i = 0; i < 5; i++){
      if (isSquare(parseInt(squarecube[i+1])) && isCube(parseInt(squarecube[i+1]))){
        return squarecube[i+1];
      }
    }
  }

  const prime = query.match(/Which of the following numbers are primes: (\d+), (\d+), (\d+), (\d+), (\d+)/)
  if (prime){
    for (let i = 0; i < 5; i++){
      if (isPrime(parseInt(prime[i+1]))){
        return prime[i+1];
      }
    }
  }

  const power = query.match(/What is (\d+) to the power of (\d+)/)
  if (power){
    const answer = Math.pow(parseInt(power[1]), parseInt(power[2]))
    return answer.toString();
  }



  return "";
}

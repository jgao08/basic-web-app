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

  // const largestMath = query.match(/Which of the following numbers is the largest: (\d+), (\d+), (\d+)?/);
  // if (largestMath){
  //   const answer = Math.max(parseInt(largestMath[0]), Math.max(parseInt(largestMath[1]), parseInt(largestMath[2])))
  //   return answer.toString();
  // }

  const multiply = query.match(/What is (\d+) multiplied by (\d+)?/);
  if (multiply){
    const answer = parseInt(multiply[0]) * parseInt(multiply[1])
    return answer.toString();
  }

  return "";
}

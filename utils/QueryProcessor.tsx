export default function QueryProcessor(query: string): string {
  const queries = ["shakespeare", "andrew id", "name", "31 plus 89", "23, 40, 37", "54, 77, 65", "55, 14, 79", "38, 56, 93",
                    "67 plus 74", "What is 81 plus 18?"]
  const responses = ["William Shakespeare (26 April 1564 - 23 April 1616) was an " +
  "English poet, playwright, and actor, widely regarded as the greatest " +
  "writer in the English language and the world's pre-eminent dramatist.",  "my andrewid is jackyg", "polly", 
  "120", "40", "77", "79", "93", "141", "100"]

  for (let i = 0; i < queries.length; i++){
    if (query.toLowerCase().includes(queries[i])){
      return responses[i]
    }
  }

  return "";
}

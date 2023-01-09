const lawyerScore = [
  {id: 1, score: 80},
  {id: 3, score: 32},
  {id: 4, score: 33},
  {id: 2, score: 88}
]
const lawyerName = [
  {id: 1, name: 'Mike', state: 'CA'},
  {id: 3, name: 'Susan', state: 'FL'},
  {id: 4, name: 'Kevin', state: 'CA'},
  {id: 2, name: 'John', state: 'TN'}
]
//Output :
//   const expectedTop2Lawyer = [
//   {
//     lawyerId: 2,
//     lawyerName: 'John',
//     lawyerScore: 88,
//     state: 'TN'
//   },
//   {
//     lawyerId: 1,
//     lawyerName: 'Mike',
//     lawyerScore: 80,
//     state: 'CA'
//   }]
// Question 1
// function GetTopTwoLawyerByScore(lawyerScore: any, lawyerName: any) {}
// GetTopTwoLawyerByScore(lawyerScore, lawyerName)
// Нужно отобразить двух адвокатов с наивысшим баллом.
//need to display two lawyers with the highest score.

function GetTopTwoLawyerByScore(lawyerScore, lawyerName) {
  let result = [];
  let arrOfLawyers = [];
  let arrOfScores = [];
  let arrOfNames = [];
  let arrOfStates = [];
  let arrOfLawyersWithScoresAndNamesAndStates = [];


  for (let i = 0; i < lawyerScore.length; i++) {
    arrOfLawyers.push(lawyerScore[i].id);
    arrOfScores.push(lawyerScore[i].score);
  }
  console.log('arrOfLawyers', arrOfLawyers);
  console.log('arrOfScores', arrOfScores);
  for (let i = 0; i < lawyerName.length; i++) {
    arrOfNames.push(lawyerName[i].name);
    arrOfStates.push(lawyerName[i].state);
  }
  console.log('arrOfNames', arrOfNames);
  console.log('arrOfStates', arrOfStates);

  for (let i = 0; i < arrOfLawyers.length; i++) {
    arrOfLawyersWithScoresAndNamesAndStates.push({
      lawyerId: arrOfLawyers[i],
      lawyerScore: arrOfScores[i],
      lawyerName: arrOfNames[i],
      state: arrOfStates[i]
    });
  }
  console.log('arrOfLawyersWithScoresAndNamesAndStates', arrOfLawyersWithScoresAndNamesAndStates);
  let maxScore = arrOfScores[0];
  let indexOfMaxScore = 0;
  for (let i = 0; i < arrOfScores.length; i++) {
    if (arrOfScores[i] > maxScore) {
      maxScore = arrOfScores[i];
      indexOfMaxScore = i;
    }

  }
  let maxScore2 = arrOfScores[0];
  let indexOfMaxScore2 = 0;
  for (let i = 0; i < arrOfScores.length; i++) {

    if (arrOfScores[i] > maxScore2 && arrOfScores[i] < maxScore) {
      maxScore2 = arrOfScores[i];
      indexOfMaxScore2 = i;
    }
  }
  result.push(arrOfLawyersWithScoresAndNamesAndStates[indexOfMaxScore]);
  result.push(arrOfLawyersWithScoresAndNamesAndStates[indexOfMaxScore2]);
  return result;
}

//console.log(GetTopTwoLawyerByScore(lawyerScore, lawyerName));

//second way
const GetTopTwoLawyerByScore2 = (lawyerScore, lawyerName) => {
  return lawyerScore.sort((a, b) => b.score - a.score).slice(0, 2).map((lawyer) => {
    const {id, score} = lawyer;
    const {name, state} = lawyerName.find((lawyer) => lawyer.id === id);
    return {lawyerId: id, lawyerName: name, lawyerScore: score, state};
  });
}
//console.log(GetTopTwoLawyerByScore2(lawyerScore, lawyerName));


const GetTopTwoLawyerByScore3 = (lawyerScore, lawyerName) => {
 return lawyerScore.sort((a, b)=> b.score - a.score).slice(0, 2).map((lawyer)=>{
   const {id, score} = lawyer
   const {name, state} = lawyerName.find((el)=>el.id===lawyer.id)
   return {id, name, score, state}
 })
}

console.log(GetTopTwoLawyerByScore3(lawyerScore, lawyerName))

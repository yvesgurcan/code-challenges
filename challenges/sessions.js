const sessionDetails = [
  {user: "u1", startTime: 100, endTime: 200},
  {user: "u2", startTime: 200, endTime: 300},
  {user: "u1", startTime: 300, endTime: 600},
  {user: "u2", startTime: 400, endTime: 600},
  {user: "u1", startTime: 500, endTime: 700},
  {user: "u1", startTime: 800, endTime: 1000},
];

/*
const sessionDetails = [
  // User 1
  {user: "u1", startTime: 300, endTime: 600}, // overlap: 100 // duration:  200
  {user: "u1", startTime: 500, endTime: 700}, // overlap: 100 // duration: 100
  {user: "u1", startTime: 800, endTime: 1000}, // gap: 700 - 800 (100) // duration: 100
];
*/

/*
@ return Int
*/
function totalLoginTime(user, queryStartTime, queryEndTime) {
  //Fill in to determine how long the user was logged in between start time and end time
  //Make sure any overlapping times between sessions only counts once
  
  //1. Only keep u1
  const userSessions = sessionDetails.filter(sessionDetail => sessionDetail.user === user);
  
  // console.log({ userSessions });
  
  
  //2. Only keep sessions where endTime >= 400
  const relevantSessions = userSessions.filter(sessionDetail => sessionDetail.endTime >= queryStartTime);
  
  // console.log({ relevantSessions });
  
  // 3.
  // condition startTime < queryStartTime
  // const sessionAdjustedStartTime = Math.max(queryStartTime, 300); // 400
  
  const startTrimmedSessions = relevantSessions.map(sessionDetail => ({ ...sessionDetail, startTime: Math.max(queryStartTime, sessionDetail.startTime) }));
  
  // console.log({ startTrimmedSessions });
  
  // 4.
  // const sessionAdjustedEndTime = Math.min(queryEndTime, 1000); // 900
  
  const startAndEndTrimmedSessions = startTrimmedSessions.map(sessionDetail => ({ ...sessionDetail, endTime: Math.min(queryEndTime, sessionDetail.endTime) }));
  
  // console.log({ startAndEndTrimmedSessions });
  
  let loginTime = 0;
  // 5. overlap
  for (let i = 0; i < startAndEndTrimmedSessions.length; i++) {
    let session = startAndEndTrimmedSessions[i];

    let overlap = 0;
    if (startAndEndTrimmedSessions[i + 1]) {
      let nextSession = startAndEndTrimmedSessions[i + 1];
      if (nextSession.startTime < session.endTime) {
        console.log('overlap', i);
      }
    }
    
    let sessionDuration = session.endTime - session.startTime - overlap;
    
    
    console.log({ sessionDuration });
    
    loginTime += sessionDuration;
  }
  
  console.log({ loginTime });
  
  
  
  //200 + 100 + 100 = 400
  
  return loginTime; // 400
  
}

console.log(totalLoginTime("u1", 400, 900));

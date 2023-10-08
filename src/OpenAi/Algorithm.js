// search through data array of objects and return all objects that contain the search words
// export function searchObjects(dataArray, searchWords) {
//     return dataArray.filter((dataObj) => {
//       const dataString = JSON.stringify(dataObj);


//       return searchWords.some((word) => dataString.toLowerCase().includes(word.toLowerCase()));
//     });
//   }

export function searchObjects(dataArray, searchWords) {
  return dataArray.filter((dataObj) => {
    const dataString = Object.values(dataObj)
      .map((value) => (typeof value === 'string' ? value : ''))
      .join(' ');
    return searchWords.some((word) => {
      const regex = new RegExp(`\\b${word.toLowerCase()}\\b`, 'i');
      return regex.test(dataString.toLowerCase());
    });
  });
}

  // export function searchObjectsTwo(dataArray, searchWords) {
  //   return dataArray.filter((dataObj) => {
  //     const dataString = JSON.stringify(dataObj);



  //     return searchWords.some((word) => dataString.toLowerCase().includes(word.toLowerCase()));
  //   });
  // }
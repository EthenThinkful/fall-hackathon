// search through data array of objects and return all objects that contain the search words
export function searchObjects(dataArray, searchWords) {
    return dataArray.filter((dataObj) => {
      const dataString = JSON.stringify(dataObj);
      return searchWords.some((word) => dataString.toLowerCase().includes(word.toLowerCase()));
    });
  }
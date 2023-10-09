export function searchObjects(dataArray, searchWords) {
  return dataArray.filter((dataObj) => {
    // ensures that dataString contains only strings from a course object
    const dataString = Object.values(dataObj)
      .map((value) => (typeof value === 'string' ? value : ''))
      .join(' ');
    //return course objects that contain at least one of the search words
    return searchWords.some((word) => {
      // Escape potential special characters in the search word
      const escapedWord = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`\\b${escapedWord.toLowerCase()}\\b`, 'i');
      return regex.test(dataString.toLowerCase());
    });
  });
}

export function searchObjectsByString(dataArray, searchString) {
  return dataArray.filter((dataObj) => {
    const dataString = JSON.stringify(dataObj).toLowerCase();
    return dataString.includes(searchString.toLowerCase());
  });
}
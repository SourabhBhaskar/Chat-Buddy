export function sortArrayOfObjectsByName(array) {
    return array.slice().sort((a, b) => {
      const nameA = a.username.toUpperCase();
      const nameB = b.username.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  }


function customSort(a, b) {
  const isANumber = !isNaN(a);
  const isBNumber = !isNaN(b);

  if (isANumber && isBNumber) 
    return parseFloat(a) - parseFloat(b);
  else if (isANumber) 
    return -1;
  else if (isBNumber) 
    return 1;
  else 
    return a.localeCompare(b);
}

export const sortStringArray = strArr => strArr.sort(customSort);
  

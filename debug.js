const stringArray = ["banana", "apple", "10", "cherry", "2", "date", "fig"];

// Custom sorting function
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


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
  

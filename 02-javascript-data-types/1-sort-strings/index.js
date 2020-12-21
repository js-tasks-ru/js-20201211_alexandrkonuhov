/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  switch (param) {
  case 'asc':
    return sortArrWithRevertParam(1);
  case 'desc':
    return sortArrWithRevertParam(-1);
  default:
    return arr;
  }

  function sortArrWithRevertParam(revert) {
    const copyArr = arr.concat();
    return copyArr.sort((a, b) => {
      return (revert * a.localeCompare(b, 'ru', {caseFirst: 'upper'}));
    });
  }
}

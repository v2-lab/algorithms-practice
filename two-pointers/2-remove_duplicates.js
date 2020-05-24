/**
 * Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; after removing the duplicates in-place return the new length of the array.
 */

 const remove_duplicates = (arr) => {
   let nextNonDuplicate = 1;
   for (let i = 1; i < arr.length; i++) {
     if (arr[nextNonDuplicate - 1] !== arr[i]) {
       arr[nextNonDuplicate] = arr[i];
       nextNonDuplicate += 1;
     }
   }
   return nextNonDuplicate;
 }

 console.log(remove_duplicates([2, 3, 3, 3, 6, 9, 9]));
 console.log(remove_duplicates([2, 2, 2, 11]));


 /**
  * Given an unsorted array of numbers and a target ‘key’, remove all instances of ‘key’ in-place and return the new length of the array.
  */

  const remove_element = (arr, key) => {
    let nextElement = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== key) {
        arr[nextElement] = arr[i];
        nextElement += 1;
      }
    }
    return nextElement;
  }
  
  console.log(remove_element([3, 2, 3, 6, 3, 10, 9, 3], 3));
  console.log(remove_element([2, 11, 2, 2, 1], 2));
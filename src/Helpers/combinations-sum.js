function findPairsEqualsToX(arr, X, returnArray) {
    let n = arr.length;
      if (n < 2)
          return returnArray;
      arr.sort()
      // left and right index variables
      let l = 0, r = n - 1;
      while (l < r) {
          let currentSum = arr[l] + arr[r];
          if (currentSum === X) {
              //console.log(arr[l] + " " + arr[r]);
        returnArray.push([arr[l], arr[r]])
              l++;
              r--;
          } else if (arr[l] + arr[r] < X)
              l++;
          else
              r--;
      }
  }
  
  console.log(findPairsEqualsToX([0, 1, 2, 3, 4], 3, []))
  
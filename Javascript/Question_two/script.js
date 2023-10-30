// B. Perform sorting of an array in descending order. 

let arr = [11, 8, 9, 4, 10, 29];

// 1st method
function arraySortDescending(arr){
    let n = arr.length;
    for(let i=0; i<n-1; i++){
        for(let j=i+1; j<n; j++){
            if(arr[i]<arr[j]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
console.log(arraySortDescending(arr));


// 2nd method bubble sort
function bubbleSort(arr){
    let n = arr.length;
    for(let i=0; i<n-1; i++){
        for(let j=0; j<n-i-1; j++){
            if(arr[j] < arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}
console.log(bubbleSort(arr));


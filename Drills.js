//1. Merge sort: {21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40}

//The first few recursive call will cut the array half each time toward the left 
//untill the array have only 1 element.
//After 3 recursive call, the list will be {21,1}
//After 16 recursive call, the list will be {2,9}
//The first 2 list to be merged is {21, 1, 26, 45, 29, 28, 2, 9} and {16, 49, 39, 27, 43, 34, 46, 40}
//The 2 list to be merge on the 7th merge is {26} and {45}


//2. Quick sort: After first partition step: {3 9 1 14 17 24 22 20}
// The pivot could have been eith 14 or 17 because everything on the left side of 14 is less than 14;
//everything on the right side of 14 is greater than 14. Same for 17.

//3. Implementing quicksort

const dataset = '89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5';
function quickSort(array, start = 0, end = array.length) {
    if (start >= end) {
        return array;
    }
    const middle = partition(array, start, end);
    array = quickSort(array, start, middle);
    array = quickSort(array, middle + 1, end);
    return array;
};

function partition(array, start, end) {
    const pivot = array[end - 1];
    let j = start;
    for (let i = start; i < end - 1; i++) {
        if (array[i] <= pivot) {
            swap(array, i, j);
            j++;
        }
    }
    swap(array, end-1, j);
    return j;
};

function swap (arr, i, j) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
};

function qSort(){
    const data=dataset.split(' ');
    const int=data.map(Number);
    const sorted = quickSort(int);
    console.log('Quick sort: '+sorted);
}
qSort();


// 4. Implementing merge sort

function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);

    left = mergeSort(left);
    right = mergeSort(right);
    return merge(left, right, array);
};

function merge(left, right, array) {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++];
        }
        else {
            array[outputIndex++] = right[rightIndex++];
        }
    }

    for (let i = leftIndex; i < left.length; i++) {
        array[outputIndex++] = left[i];
    }

    for (let i = rightIndex; i < right.length; i++) {
        array[outputIndex++] = right[i];
    }
    return array;
};

function mSort(){
    const data=dataset.split(' ');
    const int=data.map(Number);
    const sorted = mergeSort(int);
    console.log('Merge sort: '+sorted);
}
mSort();
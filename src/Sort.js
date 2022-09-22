import {arr,sleep,swap,resetBarPositions} from './Initialization';

export async function bubblesort() {
    for (var i = 0; i < arr.length; i++) {
      for (var j = 1; j < (arr.length-i); j++) {
        if (arr[j-1] > arr[j]) { 
          await sleep(1);
          swap(j-1,j);
        }
      }
      document.getElementById(arr.length-i).style.backgroundColor = "blue";
    }
}
function partition(a,p,r) {
    var pivot = a[r];
    document.getElementById(arr[r]).style.backgroundColor = "blue";
    var i = p - 1;
    for (var j = p; j <= r - 1; j++) {
        if (a[j] <= pivot) {
            i++;
            swap(i,j);
        }
    }
    swap(i+1,r);
    return i + 1;
}
async function quicksort(a,p,r) {
    if (p < r) {
        var pivot = partition(arr,p,r);
        console.log("Rekursion");
        await sleep(800);
        quicksort(a,p,pivot-1);
        console.log("Rekursion");
        await sleep(800);
        quicksort(a,pivot+1,r);
    }
}

export function quicksortRun() {
    quicksort(arr,0,arr.length-1);
}

export async function heapsortRun() {
    console.log("vorher ");
    console.log(arr);
    heapsort(arr,arr.length);
    console.log("nachher ");
    console.log(arr);
}

async function heapsort(a,n) {
    for (var i1 = (n / 2)-1; i1 >= 0; i1--) {
        percdown(a, n, i1);
    }
    for (var i2 = n - 1; i2 > 0; i2--) {
        var temp = a[0];
        a[0] = a[i2];
        a[i2] = temp;
        await sleep(200);
        document.getElementById(temp).style.backgroundColor = "blue";
        percdown(a, i2, 0);
    }
}

async function percdown(a,n,i) {
    var leftChild = 2 * i + 1, rightChild = 2 * i + 2, wurzel = i, temp = 0;
    if (leftChild < n) {
        if (a[leftChild] > a[wurzel])
            wurzel = leftChild;
    }
    if (rightChild < n) {
        if (a[rightChild] > a[wurzel])
            wurzel = rightChild;
    }
    if (wurzel !== i) {
        temp = a[i];
        a[i] = a[wurzel];
        a[wurzel] = temp;
        resetBarPositions(arr);
        percdown(a, n, wurzel);
    }
    resetBarPositions(arr);
}

export function shellsortRun() {
    shellsort(arr,arr.length);
}
async function shellsort(a,n)
{
	var hibbard = [];
	for (var h = 1; h < n; h = 2 * h + 1)
		hibbard.push(h);
	for (var x = hibbard.length-1; x >= 0; x--) {
		var gap = hibbard[x]; 
        console.log("gap "+gap);
		for (var i = gap; i < n; i++) {
			var temp = a[i];
			var j = i;
			for (; j >= gap && a[j - gap] > temp; j -= gap) {
				a[j] = a[j - gap];
                await sleep(20);
                resetBarPositions(a);
            }
			a[j] = temp; 
            await sleep(20);
            resetBarPositions(a);
		}
	}
}

export function insertionsortRun() {
    insertionsort(arr);
}

async function insertionsort(a) {
    let n = a.length;
        for (let i = 1; i < n; i++) {
            let current = a[i];
            let j = i-1; 
            while ((j > -1) && (current < a[j])) {
                a[j+1] = a[j];
                j--;
                await sleep(20);
                resetBarPositions(a);
            }
            a[j+1] = current;
            await sleep(20);
            resetBarPositions(a);
        }
}

export function selectionsortRun() {
    selectionsort(arr);
}

async function selectionsort(a) { 
    let n = a.length; 
    for(let i = 0; i < n; i++) {
        let min = i;
        for(let j = i+1; j < n; j++){
            if(a[j] < a[min]) {
                min=j; 
            }
         }
         document.getElementById(a[min]).style.backgroundColor = "blue";
         if (min !== i) {
             await sleep(200);
             swap(i,min);    
        }
    }
}

export function bogosortRun() {
    bogosort(arr);
}

function shuffleArray(a){
    a.sort(()=> Math.random() - 0.5);
}

async function bogosort(a) {
    var b = true;
    while (b) {
        console.log(a);
        for (var i = 0; i < a.length; i++) {
            if (a[i+1] != null) {
                if (arr[i] > arr[i+1]) {
                    break;
                }
            } else {
                b = false;
            }
        }
        if (b) {
            await sleep(200);
            shuffleArray(a);
            resetBarPositions(a);
        }
    }
} 
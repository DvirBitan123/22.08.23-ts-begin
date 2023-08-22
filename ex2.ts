// 1)
function sumAllDual(arr: number[]): number {
    let dualSum = 0;
    for (let num of arr) {
        if (num%2 == 0) dualSum += num;
    }
    return dualSum
}

// 2)
type Rectangle = {width: number, length: number};

function rectangleArea(rect: Rectangle): number {
    const area = rect.width * rect.length;
    return area
}







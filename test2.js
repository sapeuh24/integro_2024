var input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]

function apples(input) {
    const applesInBoxes = 4;
    const boxesInPackage = 2;
    const finalPackages = [];

    while (input.length > 0) {
        const boxes = [];
        for (let i = 0; i < boxesInPackage; i++) {
            const box = input.splice(0, applesInBoxes);
            boxes.push(box);
        }
        finalPackages.push(boxes);
    }

    return finalPackages;
}

console.log(apples(input))

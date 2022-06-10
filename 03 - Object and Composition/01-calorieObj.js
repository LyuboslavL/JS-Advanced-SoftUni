function calorieObj(arr) {
    let foodDiary = {};

    for (let i = 0; i < arr.length; i += 2) {
        let food = arr[i];
        let grams = Number(arr[i + 1]);
        foodDiary[food] = grams;
    }

    return foodDiary;
}

// console.log(calorieObj(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));
// console.log(calorieObj(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']));

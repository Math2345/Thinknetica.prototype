const list = [1,2,3,4,5];

// cоздаем метод shuffle в прототипе Array
Array.prototype.shuffle = function () {
        const compareRandom = (a, b) => Math.random() - 0.5;

        return this.sort(compareRandom);
}

console.dir(list.shuffle());
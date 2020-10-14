function Rectangle(width, height) {
    this.width = 0;
    this.height = 0;
}

Rectangle.prototype = {
    setSides: function (width, height) {
        if (height) {
            this.width = width;
            this.height = height;
        } else {
            this.width = width;
            this.height = width;
        }
    },

    area: function () {
        return this.width * this.height;
    },

    perimetr: function () {
        return 2 * (this.width + this.height);
    }
}

function Square(width) {
    Rectangle.call(this);
}

Square.prototype = Object.create(Rectangle.prototype);  // прототип Квадрат наследует методы из прототипа Прямоугольник
Square.prototype.constructor = Rectangle;


const rectangle = new Rectangle();
const square = new Square();
square.setSides(4);
rectangle.setSides(2,5);
console.log('Area = ',square.area());
console.log('Area = ',rectangle.area());
console.log('Perimetr = ',rectangle.perimetr());
console.log('Perimetr = ',square.perimetr());


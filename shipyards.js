// Создаем 3 класса:
// Класс родитель Shipyards(верфь), который включает в себя методы repair, repaint
// Также имеются 2 дочерних класса MotorShipyards и SailingShipyards, это два вида верфей, которые занимаются обслуживанием кораблей определенного типа
// У них есть свои собственные методы изготовления корабля и обмен на новый (для своего типа)


function Shipyards() {}

function MotorShipyards() {}

function SailingShipyards() {}

function Ship(...prop) {
    const [name, color] = prop;

    this.model = name;
    this.color = color;
    this.productionDate = new Date().toLocaleDateString();
    this.isBreak = false;
}

function MotorShip(prop) {
   const [name, color, power, material] = prop;

   Ship.call(this, name, color);

   this.power = power;
   this.material = material;
}

function SailingShip(prop) {
    const [name, color, countMast, areaMast] = prop;

    Ship.call(this, name, color);

    this.countMast = countMast;
    this.areaMast = areaMast;
}

Shipyards.getColor = function () {
    const colors = ['black', 'white', 'gray', 'silver'];
    const index = Math.floor(Math.random() * colors.length);

    return colors[index];
}

Shipyards.prototype = {
    repair: function (ship) {
        if (ship instanceof MotorShip && ship instanceof SailingShip) {
            if (ship.isBreak) {
                ship.isBreak = false;

                return ship;
            }
        } else {
            throw ('Верфь не обслуживает корабль такого типа');
        }
    },

    repaint: function (ship) {
        if (ship instanceof MotorShip && ship instanceof SailingShip) {
            const newColor = Shipyards.getColor();

            if (newColor !== ship.color) {
                ship.color = newColor;

                return ship;
            } else {
                throw ('Верфь не обслуживает корабль такого типа');
            }

        }
    }
}

MotorShipyards.prototype = Object.create(Shipyards.prototype);
MotorShipyards.prototype.constructor = MotorShipyards;

SailingShipyards.prototype = Object.create(Shipyards.prototype);
SailingShipyards.prototype.constructor = SailingShipyards;


MotorShipyards.prototype.createMotorShip = function (...propShip) {
    return new MotorShip(propShip);
}

MotorShipyards.prototype.changeShip = function (oldShip, ...propNewShip ) {
    if (oldShip instanceof SailingShip) {
        oldShip = null;

        return new MotorShip(propNewShip);

    } else {
        throw ('Верфь не обслуживает корабль такого типа');
    };
}

SailingShipyards.prototype.createSailingShip = function (...propShip) {
    return new SailingShip(propShip);
}

SailingShipyards.prototype.changeShip = function (oldShip, ...propNewShip ) {
    if (oldShip instanceof SailingShip) {
        oldShip = null;

        return new SailingShip(propNewShip);

    } else {
        throw ('Верфь не обслуживает корабль такого типа');
    }
}


const shipyardsMotor = new MotorShipyards();
const shipyardsSailing = new SailingShipyards();

const motorShip1 = shipyardsMotor.createMotorShip('SH-motor-47576t', 'black', 200, 'iron');
const sailingShip1 = shipyardsSailing.createSailingShip('SH-sail-464r', 'white', 300, 2, 90);

motorShip1.isBreak = true;  // предположим, что корабль сломался

shipyardsMotor.repair(motorShip1); // корабль отремонтирован, isBreak = false
shipyardsMotor.repaint(motorShip1);  // перекрашиваем корабль, меняем свойство сolor

shipyardsMotor.changeShip(motorShip1, 'SH-motor-475', 'white', 200, 'silver'); // обмениваемся кораблями, возращается новый корабль, старый уничтожается

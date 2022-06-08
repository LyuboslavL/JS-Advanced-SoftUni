function classHierarchy() {
    class Figure {
        constructor(units = 'cm') {
            this.units = units;
        }

        get area() {
            return this.area; 
        }

        changeUnits(value) {
            this.units = value;
        }

        toString() {
            return `Figures units: ${this.units}`;
        }
    }

    class Circle extends Figure {
        constructor(units, radius) {
            super(units);
            this.radius = radius;
        }
        
        get area() {
            return Math.PI * this.radius * this.radius;
        }

        toString() {
            return `${super.toString()} Area: ${area} - radius ${this.radius}`;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);
            this.width = width;
            this.height = height;
        }

        get area() {
            return this.width * this.height;
        }
    }
    
    
    
    return {
        Figure,
        Circle,
        Rectangle
    }
}
const {Triangle, Circle, Square} = require("./lib/shapes");

describe ('Triangle', () => {
    test('renders correctly', () => {
        const shape = new Triangle();
        var color =('red');
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="${this.color}}"`)
    })
}
);

describe('Circle', () => {
    test('renders correctly', () => {
        const shape = new Circle();
        var color =('blue');
        shape.setColor(color);
        expect(shape.render()).toEqual(`circle cx="150" cy="115" r="80" fill="${this.color}"`)
    });
});

describe('Square', () => {
    test('renders correctly'), () => {
        const shape = new Square();
        var color =('yellow');
        shape.setColor(color);
        expect(shape.render().toEqual(`rect x="73" y="40" width="160" height="160" fill="${this.color}"`));
    };
});

const { Circle } = require("../lib/shapes");
const { Triangle } = require("../lib/shapes");
const { Square } = require("../lib/shapes");

describe("Circle", () => {
    describe("render", () =>{
        it ("The render function should output the SVG string with the correct paramiters passed to it from the constructor", () => {
            const newCircle = new Circle("aaa", "white", "circle", "black");
            const outcome = `
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            <circle cx="150" cy="110" r="80" fill="white" />

            <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">TTT</text>

            </svg>`;
            expect(newCircle.render()).toEqual(outcome);
        });
    });
});

describe("Triangle", () => {
    describe("render", () => {
        it ("The render function should output the SVG string with the correct paramiters passed to it from the constructor", () => {
            const newTriangle = new Triangle("aaa", "white", "triangle", "black");
            const outcome = `
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            <polygon points="150, 15 300, 175 15, 175"  fill="white" />

            <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">UCI</text>

            </svg>`;

            expect(newTriangle.render()).toEqual(outcome);
        });
    });
});

describe("Square", () => {
    describe("render", () => {
        it ("The render function should output the SVG string with the correct paramiters passed to it from the constructor", () => {
            const newSquare = new Square("aaa", "white", "square", "black");
            const outcome = `
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            <rect x="45" width="200" height="200" fill="white" />

            <text x="150" y="115" font-size="60" text-anchor="middle" fill="black">REE</text>

            </svg>`;
            expect(newSquare.render()).toEqual(outcome);
        });
    });
});
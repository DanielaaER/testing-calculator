import { substraction } from "./substraction";

describe('subtraction unit tests', () => {

    it('Should subtract 4 - 2 = 2', () => {
        // Arrange
        let result = 0;

        // Act
        result = substraction(4, 2);

        // Assert
        expect(result).toBe(2);
    })

    it('Should subtract -2 - 0 = -2', () => {
        // Arrange
        let result = 0;

        // Act
        result = substraction(-2, 0);

        // Assert
        expect(result).toBe(-2);
    })

    it('Should subtract 3.1416 - 0.1416 = 3.0', () => {
        // Arrange
        let result = 0;

        // Act
        result = substraction(3.1416, 0.1416);

        // Assert
        expect(result).toBe(3.0);
    })

    it('Should subtract 2.7 - 0.7 = 2.0', () => {
        // Arrange
        let result = 0;

        // Act
        result = substraction(2.7, 0.7);

        // Assert
        expect(result).toBe(2.0);
    })

    it('Should subtract 0.0 - 0.0 = 0.0', () => {
        // Arrange
        let result = 0;

        // Act
        result = substraction(0.0, 0.0);

        // Assert
        expect(result).toBe(0.0);
    })

})

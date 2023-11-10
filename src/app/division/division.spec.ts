import { division } from "./division";

describe('division unit tests', () => {
    
    it('Should divide 2 / 2 = 1', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = 0;
        
        // Act
        result = division(2, 2);

        // Assert
        expect(result).toBe(1);
    })

    it('Should divide 0 / 1 = 0', () => {
        // Arrange
        let result = 0;
        // Act
        result = division(0, 1);
        // Assert
        expect(result).toBe(0);
    })

    it('Should divide 3.0 / 0.5 = 6', () => {
        // Arrange
        let result = 0;
        // Act
        result = division(3.0, 0.5);
        // Assert
        expect(result).toBe(6);
    })

    it('Should divide 8 / 2 = 4', () => {
        // Arrange
        let result = 0;
        // Act
        result = division(8, 2);
        // Assert
        expect(result).toBe(4);
    })

    it('Should divide 10.0 * 5.0 = 2.0', () => {
        // Arrange
        let result = 0;
        // Act
        result = division(10.0, 5.0);
        // Assert
        expect(result).toBe(2.0);
    })

})
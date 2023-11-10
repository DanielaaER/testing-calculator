import { multiplicacion } from "./multiplicacion";

describe('multiplicacion unit tests', () => {
    
    it('Should multiply 2 * 2 = 4', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = 0;
        
        // Act
        result = multiplicacion(2, 2);

        // Assert
        expect(result).toBe(4);
    })

    it('Should multiply 0 * -2 = 0', () => {
        // Arrange
        let result = 0;
        // Act
        result = multiplicacion(0, -2);
        // Assert
        expect(result).toBe(0);
    })

    it('Should multiply 3.0 * 0.5 = 1.5', () => {
        // Arrange
        let result = 0;
        // Act
        result = multiplicacion(3.0, 0.5);
        // Assert
        expect(result).toBe(1.5);
    })

    it('Should multiply 2.0 * 0.7 = 1.4', () => {
        // Arrange
        let result = 0;
        // Act
        result = multiplicacion(2.0, 0.7);
        // Assert
        expect(result).toBe(1.4);
    })

    it('Should multiply 0.0 * 5.0 = 0.0', () => {
        // Arrange
        let result = 0;
        // Act
        result = multiplicacion(0.0, 5.0);
        // Assert
        expect(result).toBe(0.0);
    })

})
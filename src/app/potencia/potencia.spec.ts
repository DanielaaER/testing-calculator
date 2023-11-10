import { potencia } from "./potencia";

describe('potencia unit tests', () => {
    
    it('Should exp 2 * 2 = 4', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = 0;
        
        // Act
        result = potencia(2, 2);

        // Assert
        expect(result).toBe(4);
    })

    it('Should potencia 2 ^ 3 = 8', () => {
        // Arrange
        let result = 0;
        // Act
        result = potencia(2, 3);
        // Assert
        expect(result).toBe(8);
    })

    it('Should potencia 3 ^ 1 = 1', () => {
        // Arrange
        let result = 0;
        // Act
        result = potencia(3.0, 1);
        // Assert
        expect(result).toBe(3);
    })

    it('Should potencia 2.5 ^ 2 = 6.25', () => {
        // Arrange
        let result = 0;
        // Act
        result = potencia(2.5, 2);
        // Assert
        expect(result).toBe(6.25);
    })

    it('Should potencia 0.0 ^ 5.0 = 0.0', () => {
        // Arrange
        let result = 0;
        // Act
        result = potencia(0.0, 5.0);
        // Assert
        expect(result).toBe(0.0);
    })

})
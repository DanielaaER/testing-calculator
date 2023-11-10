import { percent } from "./percent"

describe('percent unit tests', () => {
    
    it('Should calculate 2 % 2 = 0.04', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = 0;
        
        // Act
        result = percent(2, 2);

        // Assert
        expect(result).toBe(0.04);
    })

    it('Should calculate 1 % -2 = -0.02', () => {
        // Arrange
        let result = 0;
        // Act
        result = percent(1, -2);
        // Assert
        expect(result).toBe(-0.02);
    })

    it('Should calculate 3.0 % 50 = 1.5', () => {
        // Arrange
        let result = 0;
        // Act
        result = percent(3.0, 50);
        // Assert
        expect(result).toBe(1.5);
    })

    it('Should calculate 2.0 % 70 = 1.4', () => {
        // Arrange
        let result = 0;
        // Act
        result = percent(2.0, 70);
        // Assert
        expect(result).toBe(1.4);
    })

    it('Should calculate 0.0 % 0.0 = 0.0', () => {
        // Arrange
        let result = 0;
        // Act
        result = percent(0.0, 0.0);
        // Assert
        expect(result).toBe(0.0);
    })

})
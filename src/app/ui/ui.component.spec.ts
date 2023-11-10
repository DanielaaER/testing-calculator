import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UiComponent } from './ui.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('Ui Addition - Component', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiComponent ],
      imports: [FormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should call addition method', () => {
     // Arrange
     let result = 0;
     component.operator1 = 2;
     component.operator2 = 2;
 
     // Act
     component.addition();
     result = component.result;
 
     // Assert
     expect(result).toBe(4);
  });



  it('Should set operator1 model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="operator1"]')).nativeElement;

    // Act 
    inputElement.value = '3.1416';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.operator1).toEqual(3.1416);
  });
 
  it('Should set operator2 model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="operator2"]')).nativeElement;

    // Act 
    inputElement.value = '2.71';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.operator2).toEqual(2.71);
  });


  it('should add operator1 and operator2 when i click the addition button ', () => {
    // Arrange 
    component.operator1 = 5.0;
    component.operator2 = 2.5;
    let additionButton = fixture.debugElement.query(By.css('.addition-button'));

    // Act
    additionButton.triggerEventHandler('click', null);

    // Assert
    expect(component.result).toBe(7.5);

   });

  it('Should render sum in result div', () => {
    // Arrange
    component.operator1 = 5;
    component.operator2 = 5;
 
    // Act
    component.addition();
    fixture.detectChanges();
    
    let de = fixture.debugElement.query(By.css('.result'));
    let el : HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain('10');
     
  });




  //RESTAAA

  it('Should render substraction in result div', () => {
    //Arrange
    component.operator1 = 5;
    component.operator2 = 5;

    //Act
    component.substraction();
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.result'));
    let el : HTMLElement = de.nativeElement;

    //Assert
    expect(el.innerText).toContain('0');
  });

  it('Should substract operator1 and operator2 when i click the substraction button ', () => {
    // Arrange 
    component.operator1 = 5.0;
    component.operator2 = 2.5;
    let substractionButton = fixture.debugElement.query(By.css('.substraction-button'));

    // Act
    substractionButton.triggerEventHandler('click', null);

    // Assert
    expect(component.result).toBe(2.5);

   });

   it('Should call substraction method', () => {
    // Arrange
    let result = 0;
    component.operator1 = 2;
    component.operator2 = 2;

    // Act
    component.substraction();
    result = component.result;

    // Assert
    expect(result).toBe(0);
 });




 // MULTIPLICACION

 it('Should render multiplication in result div', () => {
  //Arrange
  component.operator1 = 5;
  component.operator2 = 5;

  //Act
  component.multiplication();
  fixture.detectChanges();

  let de = fixture.debugElement.query(By.css('.result'));
  let el : HTMLElement = de.nativeElement;

  //Assert
  expect(el.innerText).toContain('25');
});

it('Should multiplicate operator1 and operator2 when i click the multiplication button ', () => {
  // Arrange 
  component.operator1 = 5.0;
  component.operator2 = 2.5;
  let multiplicacionButton = fixture.debugElement.query(By.css('.multiplicacion-button'));

  // Act
  multiplicacionButton.triggerEventHandler('click', null);

  // Assert
  expect(component.result).toBe(12.5);

 });

 it('Should call multiplication method', () => {
  // Arrange
  let result = 0;
  component.operator1 = 2;
  component.operator2 = 2;

  // Act
  component.multiplication();
  result = component.result;

  // Assert
  expect(result).toBe(4);
});



//DIVISIIOOONN


it('Should render division in result div', () => {
  //Arrange
  component.operator1 = 5;
  component.operator2 = 5;

  //Act
  component.division();
  fixture.detectChanges();

  let de = fixture.debugElement.query(By.css('.result'));
  let el : HTMLElement = de.nativeElement;

  //Assert
  expect(el.innerText).toContain('1');
});

it('Should divide operator1 and operator2 when i click the multiplication button ', () => {
  // Arrange 
  component.operator1 = 5.0;
  component.operator2 = 2.5;
  let divisionButton = fixture.debugElement.query(By.css('.division-button'));

  // Act
  divisionButton.triggerEventHandler('click', null);

  // Assert
  expect(component.result).toBe(2);

 });

 it('Should call division method', () => {
  // Arrange
  let result = 0;
  component.operator1 = 2;
  component.operator2 = 2;

  // Act
  component.division();
  result = component.result;

  // Assert
  expect(result).toBe(1);
});


//POTENCIAAA
it('Should render exponential in result div', () => {
  // Arrange
  component.operator1 = 2;
  component.operator2 = 3;

  // Act
  component.potencia();
  fixture.detectChanges();

  let de = fixture.debugElement.query(By.css('.result'));
  let el: HTMLElement = de.nativeElement;

  // Assert
  expect(el.innerText).toContain('8');
});

it('Should exponentiate operator1 to operator2 when I click the exponential button', () => {
  // Arrange
  component.operator1 = 2.5;
  component.operator2 = 2;
  let exponentialButton = fixture.debugElement.query(By.css('.potencia-button'));

  // Act
  exponentialButton.triggerEventHandler('click', null);

  // Assert
  expect(component.result).toBe(6.25);
});

it('Should call exponential method', () => {
  // Arrange
  let result = 0;
  component.operator1 = 2;
  component.operator2 = 3;

  // Act
  component.potencia();
  result = component.result;

  // Assert
  expect(result).toBe(8);
});



//PORCENTAJEE


it('Should render percent in result div', () => {
  //Arrange
  component.operator1 = 5;
  component.operator2 = 5;

  //Act
  component.percent();
  fixture.detectChanges();

  let de = fixture.debugElement.query(By.css('.result'));
  let el : HTMLElement = de.nativeElement;

  //Assert
  expect(el.innerText).toContain('0.25');
});

it('Should calculate operator1 and operator2 when i click the percent button ', () => {
  // Arrange 
  component.operator1 = 5.0;
  component.operator2 = 2.5;
  let percentButton = fixture.debugElement.query(By.css('.percent-button'));

  // Act
  percentButton.triggerEventHandler('click', null);

  // Assert
  expect(component.result).toBe(0.125);

 });

 it('Should call percent method', () => {
  // Arrange
  let result = 0;
  component.operator1 = 2;
  component.operator2 = 2;

  // Act
  component.percent();
  result = component.result;

  // Assert
  expect(result).toBe(0.04);
});

});
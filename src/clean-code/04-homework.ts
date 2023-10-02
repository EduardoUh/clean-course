(() => {

    // Resolver sin la triple condicional dentro del if
    // includes? arrays?
    function isRedFruit(fruit: string): boolean {
        return ['manzana', 'cereza', 'ciruela'].includes(fruit);
    }

    // Simplificar esta función
    // switch? Object literal? validar posibles coloresw
    type FruitColor = 'red' | 'yellow' | 'purple';
    function getFruitsByColor(color: FruitColor): string[] | Error {
        const fruitNames = {
            red: ['manzana', 'fresa'],
            yellow: ['piña', 'banana'],
            purple: ['moras', 'uvas']
        }
        if (!Object.keys(fruitNames).includes(color)) {
            throw new Error('the color must be: red, yellow, purple');
        }
        return fruitNames[color];
    }

    // Simplificar esta función
    interface Steps {
        isFirstStepWorking: boolean;
        isSecondStepWorking: boolean;
        isThirdStepWorking: boolean;
        isFourthStepWorking: boolean;
    }

    function workingSteps({ isFirstStepWorking, isSecondStepWorking, isThirdStepWorking, isFourthStepWorking }: Steps): string {
        if (!isFirstStepWorking) return 'First step broken';
        if (!isSecondStepWorking) return 'Second step broken';
        if (!isThirdStepWorking) return 'Third step broken';
        if (!isFourthStepWorking) return 'Fourth step broken';
        return 'Working properly'
    }


    // isRedFruit
    console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
    console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // true

    //getFruitsByColor
    console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
    console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
    console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
    // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

    const isFirstStepWorking = true, isSecondStepWorking = true, isThirdStepWorking = true, isFourthStepWorking = true;

    // workingSteps
    console.log({ workingSteps: workingSteps({ isFirstStepWorking, isSecondStepWorking, isThirdStepWorking, isFourthStepWorking }) }); // Cambiar los valores de la línea 31 y esperar los resultados

})();

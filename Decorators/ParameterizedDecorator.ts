function validateParam(min: number, max: number) {
    return function (target, key, index) {
        console.log(target)
        const originalMethod = target[key];
        target[key] = function (...args: any[]) {
            const arg = args[index];
            if (arg < min || arg > max) {
                throw new Error(`Argument at index ${index} is out of range.`);
            }
            return originalMethod.apply(this, args);
        };
    };
}

class MathOperations {
    @validateParam(0, 10)
    multiply(a: number, b: number) {
        return a * b;
    }
}

const math = new MathOperations();
math.multiply(5, 12); // Throws an error

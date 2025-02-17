// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

//Unit test for sayHello function

describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane!" when executed', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when executed', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!" when executed', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, World!" when executed without arguments', function() {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when passed empty string', function() {
        expect(sayHello("")).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed passing true', function() {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed passing false', function() {
        expect(sayHello(false)).toBe("Hello, World!");
    });
    it('should return the string "Hello, 5!" when executed', function() {
        expect(sayHello("5")).toBe("Hello, 5!");
    });




});

describe('isFive', function() {
    it('should be a defined function', function() {
        expect(typeof isFive).toBe('function')
    });
    it('should return a boolean when called', function() {
        expect(typeof isFive()).toBe("boolean");
    });
    it('should return true when executed', function() {
        expect(isFive(5)).toBe(true);
    });
    it('should return true when executed', function() {
        expect(isFive("5")).toBe(true);
    });
    });


describe('isEven', function() {
    it('should be a defined function', function () {
        expect(typeof isEven).toBe('function')
    });
    it('should return a boolean when called', function() {
        expect(typeof isEven()).toBe("boolean");
    });
    it('should return true when passed "2"', function() {
        expect(isEven(2)).toBe(true);
    });
    it('should return true when passed "-4"', function() {
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when passed "3"', function() {
        expect(isEven(3)).toBe(false);
    });
    it('should return false when passed "Infinity"', function() {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when passed "true"', function() {
        expect(isEven(true)).toBe(false);
    });
    it('should return false when passed "false"', function() {
        expect(isEven(false)).toBe(false);
    });
    it('should return false when passed "isEven()"', function() {
        expect(isEven(isEven())).toBe(false);
    });
    });

describe('isVowel', function() {
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe('function')
    });
    it('should return a boolean when called', function() {
        expect(typeof isVowel()).toBe("boolean");
    });
    it('should return true when passed "a"', function() {
        expect(isVowel("a")).toBe(true);
    });
    it('should return true when passed "A"', function() {
        expect(isVowel("A")).toBe(true);
    });
    it('should return false when passed "y"', function() {
        expect(isVowel("y")).toBe(false);
    });
    it('should return false when passed "4"', function() {
        expect(isVowel("4")).toBe(false);
    });
    it('should return false when passed " "', function() {
        expect(isVowel(" ")).toBe(false);
    });
    it('should return false when passed "banana "', function() {
        expect(isVowel("banana ")).toBe(false);
    });
    it('should return false when passed "false"', function() {
        expect(isVowel("false")).toBe(false);
    });
    it('should return false when passed "true"', function() {
        expect(isVowel("true")).toBe(false);
    });
});



describe('add', function() {
    it('should be a defined function', function () {
        expect(typeof add).toBe('function')
    });
    it('should return a 5 when passed 2 and 3', function () {
        expect(add(2, 3)).toBe(5);
    });
    it('should return a NaN when passed "banana" and "apple"', function () {
        expect(add("banana", "apple")).toEqual(NaN);
    });
    it('should return a number when called', function () {
        expect(typeof add()).toBe("number")
    });
    it('should return a NaN when passed "3" and "apple"', function () {
        expect(add("3", "apple")).toEqual(NaN);
    });
});

//test test//

















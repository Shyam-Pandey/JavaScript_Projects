var str = document.getElementById("text")
var camel_case = document.getElementById("camel-case")
var pascal_case = document.getElementById("pascal-case")
var snake_case = document.getElementById("snake-case")
var screaming_snake_case = document.getElementById("screaming-snake-case")
var kebab_case = document.getElementById("kebab-case")
var screaming_kebab_case = document.getElementById("screaming-kebab-case")



function camelCase(newstr) {
    return newstr.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index == 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
}


function toPascalCase(str) {
    if (/^[\p{L}\d]+$/iu.test(str)) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return str.replace(
        /([\p{L}\d])([\p{L}\d]*)/giu,
        (g0, g1, g2) => g1.toUpperCase() + g2.toLowerCase()
    ).replace(/[^\p{L}\d]/giu, '');
}


function toSnakeCase(str = '') {
    const strArr = str.split(' ');
    const snakeArr = strArr.reduce((acc, val) => {
        return acc.concat(val.toLowerCase());
    }, []);
    return snakeArr.join('_');
};


function toScreamingSnakeCase(str = '') {
    const strArr = str.split(' ');
    const snakeArr = strArr.reduce((acc, val) => {
        return acc.concat(val.toUpperCase());
    }, []);
    return snakeArr.join('_');
};

function toKebabCase(str = '') {
    const strArr = str.split(' ');
    const kebabArr = strArr.reduce((acc, val) => {
        return acc.concat(val.toLowerCase());
    }, []);
    return kebabArr.join('-');
};

function toScreamingKebabCase(str = '') {
    const strArr = str.split(' ');
    const kebabArr = strArr.reduce((acc, val) => {
        return acc.concat(val.toUpperCase());
    }, []);
    return kebabArr.join('-');
};

function clickMe() {
    var newstr = str.value
    console.log(newstr)
    camel_case.innerHTML = camelCase(newstr);
    pascal_case.innerHTML = toPascalCase(newstr)
    snake_case.innerHTML = toSnakeCase(newstr)
    screaming_snake_case.innerHTML = toScreamingSnakeCase(newstr)
    kebab_case.innerHTML = toKebabCase(newstr)
    screaming_kebab_case.innerHTML = toScreamingKebabCase(newstr)   
}
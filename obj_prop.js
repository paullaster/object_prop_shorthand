const a=30;
const b=50;
const c=70;
const d =90;

const e = {
    a,
    b,
    c,
    d
}

const {a: f1, b: f2, c: f3, d: f4} = e;

const fValues = {f1, f2, f3, f4};
console.log(fValues);

function objectCreator(x,y,z){
    
    return {
        x,
        y,
        z
    }
}

console.log(objectCreator(20,40,60));
const isEven = (n) => {
    const val = n % 2 === 0;
 
    return new Promise((resolve, reject) => {
 
        if (val) {
            resolve('Truthy')
        } else {
            console.log('Falsey');
            reject(Error('I broke it.'))
        }
    })
 };
 isEven(4);
 isEven(5);
 const o = new Observable(() => {
    console.log('OBSERVE ME!')
 });


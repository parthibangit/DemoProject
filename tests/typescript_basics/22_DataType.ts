let name: string = 'Parthiban'
console.log(typeof(name))                                // string
console.log(typeof(name) === 'string')

const userInfo: {id: number, name: string} = {

    id: 100,
    name: 'Parthiban'
}
console.log(typeof(userInfo))                            // object
console.log(userInfo instanceof Object)


function userDetails(): void {
    console.log('This is dummy function')
}
console.log(typeof(userDetails))                         // function
console.log(userDetails instanceof Object)

let scores: number[] = [10, 20, 30]
console.log(typeof(scores))                               // object
console.log(scores instanceof Object)

let names = new Set<string>(['a', 'b']);
console.log(typeof(names))                               // object
console.log(names instanceof Object)
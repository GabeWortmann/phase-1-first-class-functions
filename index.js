function receivesAFunction(func1) {
    func1()
}

function returnsANamedFunction(num){
    return function name(num) {
        console.log(num)
    }
}

function returnsAnAnonymousFunction(num){
    return function (num) {
        console.log(num)
    }
}

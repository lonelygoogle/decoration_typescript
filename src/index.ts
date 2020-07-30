// 类的装饰器
// 装饰器本身是一个函数
// 类的装饰器接受的是构造函数

function testDecorator () {
    return function <T extends new (...args: any[]) => any> (constructor: T) {
        return class extends constructor {
            name = 'gqm'
            getName () {
                return this.name
            }
        }
    }
}

const Test = testDecorator()(class {
    name: string;
    constructor (name: string) {
        this.name = name
    }
})


// class Test {
//     name: string;
//     constructor (name: string) {
//         this.name = name
//     }
// }

const test = new Test('huangsiqin')
console.log(test.getName())

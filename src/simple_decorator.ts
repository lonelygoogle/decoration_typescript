// 类的装饰器
// 装饰器本身是一个函数
// 类的装饰器接受的是构造函数

function Decorator (constructor: any) {
    constructor.prototype.getName = () => {
        console.log('huangsiqin')
    }
    console.log('testDecorator')
}

function Decorator2 (constructor: any) {
    constructor.prototype.getName = () => {
        console.log('huangsiqin1')
    }
    console.log('testDecorator1')
}

@Decorator
@Decorator2
class Test1 {}

// const test = new Test()
// (test as any).getName()

/**
 *  对象的类型标注 interface
 */

interface IDescription {
  name: string
  age: number
  male: boolean
}

const obj1: IDescription = {
  name: 'xiaocao',
  age: 19,
  male: false,
}

//常见修饰符
//常见的修饰包括可选（Optional） 与 只读（Readonly） 这两种
interface IDescription1 {
  name: string
  age: number
  male: boolean
  func?: Function
}

//可选: 不写func也是可以的
const obj2: IDescription1 = {
  name: 'xiaocao',
  age: 19,
  male: false,
}

//假设新增一个可选的函数类型属性，然后进行调用：obj2.func() ，
//此时将会产生一个类型报错：不能调用可能是未定义的方法。但可选属性标记不会影响你对这个属性进行赋值，如下
//即使你对可选属性进行了赋值，TypeScript 仍然会使用接口的描述为准进行类型检查，你可以使用类型断言、非空断言或可选链解决（别急，我们在后面会讲到）
obj2.func() //error: 不能调用可能是“未定义”的对象
obj2.func?.()

//只读：防止对象的属性被再次赋值
interface IDescription2 {
  readonly name: string
  age: number
}

const obj3: IDescription2 = {
  name: 'a',
  age: 99,
}
obj3.name = '小曹' //error: 无法为“name”赋值，因为它是只读属性

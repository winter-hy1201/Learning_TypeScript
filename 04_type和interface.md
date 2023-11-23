# type（Type Alias，类型别名）

类型别名会给一个类型起个新名字。 类型别名有时和接口`interface`很像，但是类型别名可以作用于原始值，联合类型，元组以及其它任何你需要手写的类型

起别名不会新建一个类型 - 它创建了一个新名字来引用那个类型。 给原始类型起别名通常没什么用，尽管可以做为文档的一种形式使用

# interface

# 接口 vs 类型别名

像我们提到的，类型别名可以像接口一样；然而仍有一些细微差别。

1. 接口创建了一个新的名字，可以在其它任何地方使用。
2. 类型别名并不创建新名字，比如，错误信息就不会使用别名
3. 类型别名不能被 extends 和 implements（自己也不能 extends 和 implements 其它类型）

’extends’ 用于描述类之间的继承关系，子类可以继承父类的属性和方法，并添加自己独有的属性和方法。 ’implements’ 用于描述类之间的实现关系，一个类必须实现接口中定义的属性和方法

在下面的示例代码里，在编译器中将鼠标悬停在 interfaced 上，显示它返回的是 Interface，但悬停在 aliased 上时，显示的却是对象

```ts
type Alias = { num: number }
interface Interface {
  num: number
}
declare function aliased(arg: Alias): Alias
declare function interfaced(arg: Interface): Interface
```

# 建议

TypeScript 全面进阶指南 小册作者建议：

很多同学更喜欢用 type（Type Alias，类型别名）来代替接口结构描述对象，而我更推荐的方式是，interface 用来描述**对象、类的结构**，而类型别名用来**将一个函数签名、一组联合类型、一个工具类型等等抽离成一个完整独立的类型**。但大部分场景下接口结构都可以被类型别名所取代，因此，只要你觉得统一使用类型别名让你觉得更整齐，也没什么问题。

官方文档：

因为 软件中的对象应该对于扩展是开放的，但是对于修改是封闭的，你应该尽量去使用接口代替类型别名。

另一方面，如果你无法通过接口来描述一个类型并且需要使用联合类型或元组类型，这时通常会使用类型别名。

# 资料

官方文档： https://www.tslang.cn/docs/handbook/advanced-types.html

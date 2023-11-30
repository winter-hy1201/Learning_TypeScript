# Object

熟悉原型链的都知道，原型链的顶点是`Object`和`Function`，这也意味着所有原始类型和对象类型最终都指向 `Object`

在 `TypeScript` 中就表现为 `Object` 包含了所有的类型

```tsx
const tmp1: Object = '小曹'
const tmp2: Object = 66
const tmp3: Object = true
const tmp4: Object = undefined //error Type 'undefined' is not assignable to type 'Object'
const tmp5: Object = null //error Type 'null' is not assignable to type 'Object'
const tmp6: Object = {}
const tmp7: Object = []
const tmp8: Object = () => {}
const tmp9: Object = Symbol('唯一值')
```

[Playground Link](https://www.typescriptlang.org/zh/play?#code/MYewdgzgLgBFC2AHAjALgPICMBWBTYsAvDAOSDwOoJ9mJAUKJLAogEwY75EwBsnt40cSAMys8BGMSgAnAK65e9AYgAsI9uJjSwAE1wAzAJZhcWmAHpTuSZJCSYAFQCeiXKU06DRrSRj6IMMCCwAIYQEPoA5mBBmAA2LlAgcE4uJFiiUDR0-IwArKpixGDSMTFmFlY29smkRSXevv6BMCFhkdFxcIlQ1alsBJl8DEic+RwA3gC+8tlIAOyj6gDaALrTQ4gAHAvEABQAlIQAfJNrigCc2zAAyg7wmCAxOySA9KqAAHKAPAoke9RAA)

在任何情况下，都不应该使用这些`装箱类型 Boxed Types(Object,Boolean,Number,String,Symbol)`，通俗来讲就是首字母大写的类型

# object

object 的引入就是为了解决对 Object 类型的错误使用

`object 类型代表所有非原始类型，即数组，对象以及函数这些`

```tsx
//error Type 'xxx' is not assignable to type 'Object'
const tmp1: object = '小曹'
const tmp2: object = 66
const tmp3: object = true
const tmp4: object = undefined
const tmp5: object = null
const tmp9: object = Symbol('唯一值')

//Ok
const tmp6: object = {}
const tmp7: object = []
const tmp8: object = () => {}
```

[Playground Link](https://www.typescriptlang.org/zh/play?#code/PTCmCdwe3ACAVAngB1LA5AD2+2BLAZ1gDsoAXWAQwILwHNjKAjAGzTKljJTXQHkmAK1ABjMugBQIqMQIUyAW2QBGAFxQhoigF4MgeB1An2aTps+UoBM6zWNi6AbHaky5XJQGYrwm7rLgArqBOpq7IACyeWrawfsQAJqAAZnjEoLGwQS6KyACsEd4kfiws6SaZSgCceTqwAMqICkxQLAAU6ID0qoAAcoA8CugAlBIDIHwA1hlmyHZVUQDeAL5jIQDsU7oA2gC6C1kAHCuwzb3aAHxzEkA)

# {}

可以认为`{}`就是一个对象字面量类型,但**内部无属性定义的空对象**,这类似于 Object（想想 `new Object()`），它意味着任何非 null / undefined 的值

虽然能够将其作为变量的类型，但你实际上**无法对这个变量进行任何赋值操作**

这是因为它就是纯洁的像一张白纸一样的空对象，上面没有任何的属性（除了 toString 这种与生俱来的）。在类型层级一节我们还会再次见到它，不过那个时候它已经被称为“万物的起源”了

```tsx
//error Type 'xxx' is not assignable to type '{}'
const tmp25: {} = undefined
const tmp26: {} = null

//ok
const tmp28: {} = 'linbudu'
const tmp29: {} = 599
const tmp30: {} = { name: 'linbudu' }
const tmp31: {} = () => {}
const tmp32: {} = []

const tmp33: {} = { name: 'linbudu' }

tmp33.age = 18 // X 类型“{}”上不存在属性“age”。
```

[Playground Link](https://www.typescriptlang.org/zh/play?#code/PTCmCdwe3ACAVAngB1LA5AD2+2BLAZ1gDsoAXWAQwILwHNjKAjAGzTKljJTXQG8AvugBQAYyjECFMgFtkAJgCsALliDYAXlgBXYgBNQAMzzFQegNywxEqVznyAbKvVbi2li3PDhIKAGtrSWl7AA5nAU0MFhMmbT1tdC9xILsFAE5wyMU0tKSbYOQAZgAGTK0+EkoZUFV0aOJY+NwBPJTZIoBGMtgACgBKTQA+NRbA23bC+W6AbQBdLzGCwsLuisZq2vrGhNhRn2B9gAVoVHBuDEo6UFw9KFAiUgpQTEIKCS4eDEEREEBN+MB6M0AB2qALjlAMHagEYdf6Aer9AIC2gBC3QDzCoAAOUABPqAXzdAB1+SMA7BZwwBeXoBP7UAhjGAGH-AFBygCN0wCFNoBIc0A33KAVXk4YA9HUA5AaACH-ACZpgDC5LhQADKZHAJjosF+gFnPQBwcoB8V0Aj-KAU3M4YBIf8AQAyACnVAN4+gGj1QBCOoByvyRgCCgwCIRoAbuUAG-GALHlALGKgEJrQCDkYAGJVBJMAsHKAcfjAMUJgCo5QBvpoBMBVBgCfdQDzfoBqiMAD57AwA4BIBwOUAlk5wwDusYAEu0AuATc4QTQoAOkuaC0HRClhAsAAGrBtdHBGmya7ABraarZ0fzaZVQA)

# 总结

最后，为了更好地区分 `Object`、`object` 以及`{}`这三个具有迷惑性的类型，我们再做下总结：

- 在任何时候都**不要，不要，不要使用** Object 以及类似的装箱类型。
- 当你不确定某个变量的具体类型，但能确定它不是原始类型，可以使用 object。
  - 但我更推荐进一步区分，也就是使用 `Record<string, unknown>` 或 `Record<string, any>` 表示对象
  - `unknown[]` 或 `any[]` 表示数组
  - `(...args: any[]) => any`表示函数这样
- 我们同样要避免使用`{}`。`{}`意味着任何非 `null / undefined` 的值，从这个层面上看，使用它和使用 `any` 一样恶劣。

# extends 关键字

在 TypeScript 中，’extends’ 关键字用于描述类之间的继承关系。通过 ‘extends’，一个类可以继承另一个类的属性和方法，并且还可以添加自己独有的属性和方法。这种继承关系可以形成一个类的层级结构，使代码更加模块化和可复用。

下面是一个简单的示例：

在这个例子中，我们定义了一个 Animal 类，它有一个 name 属性和一个 sound 方法。然后，我们使用 extends 关键字创建了一个 Dog 类，它继承了 Animal 类的属性和方法，并添加了自己的 breed 属性和重写了 sound 方法。通过创建 Dog 类的实例，我们可以访问继承的属性、方法以及新添加的属性和重写的方法。

```ts
class Animal {
  name: string

  constructor(name: string) {
    this.name = name
  }

  sound() {
    console.log('Animal makes sound')
  }
}

class Dog extends Animal {
  breed: string

  constructor(name: string, breed: string) {
    super(name)
    this.breed = breed
  }

  sound() {
    console.log('Dog barks')
  }
}

let myDog = new Dog('Bobby', 'Labrador')
console.log(myDog.name) // Output: Bobby
myDog.sound() // Output: Dog barks
```

# implements 关键字

与 ‘extends’ 关键字不同，’implements’ 关键字用于描述类之间的实现关系，即一个类实现一个接口。通过 ‘implements’，一个类必须实现接口中定义的属性和方法，以满足接口的要求。这种实现关系可以帮助我们在面向对象的编程中更好地定义和使用接口。

下面是一个简单的示例：
在这个例子中，我们定义了一个 Animal 接口，它包含了一个 name 属性和一个 sound 方法。然后，我们创建了一个 Dog 类，并使用 ‘implements’ 关键字实现了 Animal 接口。这意味着 Dog 类必须实现 Animal 接口中定义的属性和方法。通过创建 Dog 类的实例，我们可以访问实现的属性和方法。

```ts
interface Animal {
  name: string
  sound(): void
}

class Dog implements Animal {
  name: string

  constructor(name: string) {
    this.name = name
  }

  sound() {
    console.log('Dog barks')
  }
}

let myDog: Animal = new Dog('Bobby')
console.log(myDog.name) // Output: Bobby
myDog.sound() // Output: Dog barks
```

# ‘extends’ 和 ‘implements’ 的区别

通过上述示例，我们可以总结出 ‘extends’ 和 ‘implements’ 的主要区别如下：

‘extends’ 用于描述类之间的继承关系，子类可以继承父类的属性和方法，并添加自己独有的属性和方法；
’implements’ 用于描述类之间的实现关系，一个类必须实现接口中定义的属性和方法；

‘extends’ 关键字可以使用多次，一个类可以同时继承多个父类的属性和方法；’implements’ 关键字只能使用一次，一个类只能实现一个接口；
通过 ‘extends’ 继承的属性和方法可以在子类中被重写和覆盖；通过 ‘implements’ 实现的属性和方法必须在实现类中按照接口的定义进行实现，不能被重写或覆盖。
理解 ‘extends’ 和 ‘implements’ 关键字的区别可以帮助我们更好地设计和组织类的层级结构以及定义和使用接口。

# 总结

’extends’ 用于描述类之间的继承关系，子类可以继承父类的属性和方法，并添加自己独有的属性和方法。 ’implements’ 用于描述类之间的实现关系，一个类必须实现接口中定义的属性和方法

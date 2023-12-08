/**
 *  数组的类型标注
 */

//以下两种声明方式完全等价
const arr1: string[] = ['1', '2']
const arr2: Array<string> = ['3', '4']

//某些情况下使用元组更加妥当，比如一个数组中只存固定长度的变量时

const arr3: string[] = ['5', '6']
console.log(arr3[555]) //无提示

const arr4: [string, number] = ['7', 8]
console.log(arr4[66]) //error: 长度为 "2" 的元组类型 "[string, string]" 在索引 "66" 处没有元素

//元组修饰符：标识某个位置的元素是可选成员
const arr5: [string, string?, number?] = ['6']
type TupleLength = typeof arr5.length // 1 | 2 | 3 表示这个元组的长度可能是1或者2或者3

//具名元组
const arr6: [name: string, age: number, male: boolean] = ['小曹', 23, false]

//聚名元组的可选元素修饰符
const arr7: [name: string, age: number, male?: boolean] = ['小曹', 23]

//对于数组，此时仍然无法检查出是否存在隐式访问，因为类型层面并不知道它到底有多少个元素。
//但对于元组，隐式的越界访问也能够被揪出来给一个警告
const [_name, age, male, ele] = arr6 //error: 长度为 "3" 的元组类型 "[name: string, age: number, male: boolean]" 在索引 "3" 处没有元素。

//使用元组确实能帮助我们进一步提升数组结构的严谨性，包括基于位置的类型标注、避免出现越界访问等等

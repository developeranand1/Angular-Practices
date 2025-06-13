import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CodeRunnerComponent } from "../code-runner/code-runner.component";

@Component({
  selector: 'app-advanced-js',
  standalone: true,
  imports: [CommonModule, CodeRunnerComponent],
  templateUrl: './advanced-js.component.html',
  styleUrl: './advanced-js.component.scss'
})
export class AdvancedJsComponent {
closureExample = `
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}
const counter = outer();
counter();
counter();`;

q3=`'5' == 5     // true
'5' === 5    // false
`
q4=`const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Done'), 1000);
});
promise.then(result => console.log(result));
`

q5=`const obj = {
  name: 'JS',
  getName() {
    return this.name;
  }
};
obj.getName(); // "JS"
console.log(obj.getName())
`

q6=`
console.log(a); // undefined
var a = 5;
`

q7=`function greet(fn) {
  return function (name) {
    fn(name);
  };
}

greet(console.log)("Hello");
`

q8=`function Person(name) {
  this.name = name;
}
Person.prototype.sayHi = function () {
  return "Hi, I'm +this.name";
};

const p1 = new Person('John');
p1.sayHi(); // Hi, I'm John
`

}

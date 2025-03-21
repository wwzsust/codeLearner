function greet(greeting, punctuation){
    console.log(greeting + "," + this.name + punctuation);
}

const persion = {name: "John"};
const greetPersion = greet.bind(persion, "hello");
greetPersion("!");
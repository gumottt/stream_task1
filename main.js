const fs = require('fs')
const readline = require("readline");


//1
function task1(){
  const read = fs.createReadStream('./text.txt')

  read.on('data', (chunk)=>{
    console.log(chunk.toString())
})}

//2
function task2(){
const read = fs.createReadStream('./text.txt')
let buffer = Buffer.alloc(0);
let counter = 0; 

read.on('data', (chunk) => {
  buffer = Buffer.concat([buffer, chunk]);
  counter++;
});

read.on('end', () => {
  const data = buffer.toString().split(' ');
  const data1 = data.length;
  counter = counter + 1; 
  console.log(`Слів у тексті: ${data1}`);
  console.log(`Кількість чанків: ${counter}`);
})
}

//***
function task3(){
const read = fs.createReadStream('./text.txt')

read.on('data', (chunk)=>{
  const data = chunk.toString().split(' ').length
  console.log(`В кожному чанку по : ${data}`)
})
}

//1
//task1()
//2
//task2()
//3
task3()
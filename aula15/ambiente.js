let num = [5,8,2,9,3]
num.push(1)
num.sort()
console.log(num)
console.log(`o vetor tem ${num.length} posiçoes`)
console.log(`o nosso primeiro valor é ${num[0]}`)
let pos = num.indexOf(8)
if (pos == -1){
    console.log('o valor nao foi enxcontrado !!')
}else{
    console.log(`O valor 8 esta na posicao ${pos}`)
}

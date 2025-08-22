


let result = ""

for(let a=0;a<=5;a++){
    result += a
    console.log(result)
}

let hasil = ""

for(let b=0;b<=5;b++){
    hasil = ""
    for(let c=5;c>=b;c--)
        hasil += c
    console.log(hasil)
}





const matematika = 10
const bahasaindonesia = 9
const bahasainggris = 30
const IPA = 10

let ratarata = (matematika+bahasaindonesia+bahasainggris+IPA)/4

 console.log(ratarata)

let nilai = ratarata

if(ratarata>90){
    nilai = "A"
    console.log(nilai)
}
else if(ratarata>80){
    nilai = "B"
    console.log(nilai)
}
else if(ratarata>70){
    nilai = "C"
    console.log(nilai)
}
else if(ratarata>60){
    nilai = "D"
    console.log(nilai)
}
else if(ratarata<=50){
    nilai = "F"
    console.log(nilai)
}
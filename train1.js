const biodata = {
    nama : "AGUS",
    umur : 25,
    hobi : ["masak", " musikan"],
    status : false,  
    daftarsekolah : [
    {
        namasekolah : "SMP 1 Gemolong",
        tahunmasuk  : 2011,
        tahunkeluar : 2014,
        jurusan  : "bawah",
    },{
        namasekolah   : "SMA 1 Sumberlawang",
        tahunmasuk    : 2014,
        tahunkeluar   : 2017,
        jurusan       : "ipa",
    }
    ],
    bakat : [
    {
        namabakat   : "lari",
        level       : ["noob", "menengah", "pro" ],
    },{
        namabakat   : "lempar",
        level       : ["noob", "menengah", "pro"],
    }
    ],
    tertarikkoding : true
    }



    console.log("nama   :",biodata.nama)
    console.log("umur   :",biodata.umur)
    console.log("hobi   :",biodata.hobi[0])
    if(biodata.status === true){
        console.log("status :sudah menikah",)
    }else {console.log("status :belum menikah",)}
    console.log()
    console.log("daftar sekolah:")
    console.log("nama sekolah  :",biodata.daftarsekolah[1].namasekolah)
    console.log("tahun masuk   :",biodata.daftarsekolah[1].tahunmasuk)
    console.log("tahun keluar  :",biodata.daftarsekolah[1].tahunkeluar)
    console.log("jurusan       :",biodata.daftarsekolah[1].jurusan)
    console.log()
    console.log("bakat         :")
    console.log("nama bakat :",biodata.bakat[0].namabakat)
    console.log("level      :",biodata.bakat[0].level[2])
    console.log()
    if(biodata.tertarikkoding){
        console.log("tertarikkoding :iya")
    }else{console.log("terarikkoding :tidak")}




    
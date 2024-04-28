let btn1 = document.querySelectorAll('.btn1')
let input = document.querySelectorAll('.number')
let tp = document.querySelector('.tabs-parent')
let tab = document.querySelectorAll('.tabs')
let cp = document.querySelector('.content-parent')
let cont = document.querySelectorAll('.contentt')
function son() {
    let sonlar = 1
  btn1[0].addEventListener('click',(event) => {
    if (sonlar < 50) {
      sonlar++
    input[0].value = sonlar
    }
    event.preventDefault()
  })
  btn1[1].addEventListener('click',(event)=>{
    if (sonlar > 0) {
     input[0].value = sonlar 
     sonlar--
    }
    event.preventDefault()
  })
}
function tabContents(){
    function none(){
        cont.forEach((item)=>{
            item.classList.add('nonen')
        tab.forEach((item)=>{
            item.classList.remove('activ')
        })
        })
    }
    function show(i = 0){
            cont[i].classList.remove('nonen')
            tab[i].classList.add('activ')
    }
    tp.addEventListener('click', (event)=>{
        const target = event.target
        if(target && target.classList.contains('tabs')){
            tab.forEach((item , idx)=>{
                if(target == item){
                    none()
                    show(idx)
                }
            })
        }
    })
    none()
    show()
}
tabContents()
son()
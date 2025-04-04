const navLinks=document.querySelectorAll('.nav-link')
const itemList=document.querySelector('.item')
let len=localStorage.length
let color="warning";
navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });
const showItem=()=>{
 
    inItem=''
    if(len==0){
        inItem=`<div class="alert alert-secondary alert-dismissible fade show" role="alert">
  <strong>Oops! </strong> There is no item available in your list.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`;
itemList.innerHTML=inItem;
return;
    }
    for(let i=0;i<len;i++){
        if(localStorage.getItem(localStorage.key(i))==null){
            continue;
    }
    else{
inItem+=`<label><input type="checkbox"class="item1"  name="skills" value="${localStorage.getItem(localStorage.key(i))}">${localStorage.getItem(localStorage.key(i))}</label><br>`
    }
    }
itemList.innerHTML=inItem;
}
const removeITEM=()=>{
    const remItem=document.querySelectorAll('.item1')
    let i=0;
   remItem.forEach(item=>{
    if(item.checked){
        let key=localStorage.key(i);
       let delItem= localStorage.removeItem(key);
    
    }
    i++;
   })
   showItem();
}
showItem();
const addItem=()=>{
     let item=document.getElementById('addNewItem');
     len=len+1;
     localStorage.setItem(len,item.value);

     showItem();s
}
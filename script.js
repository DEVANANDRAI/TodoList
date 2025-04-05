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
        const rawHTML=decodeURIComponent(localStorage.getItem(localStorage.key(i)));
        const escaped = rawHTML
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
inItem+=`<label><input type="checkbox"class="item1"  name="skills" value="${localStorage.getItem(localStorage.key(i))}">${escaped}</label><br>`
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
   location.reload();
}
showItem();
const addItem=()=>{
     let item=document.getElementById('addNewItem');
     len=len+1;
     localStorage.setItem(len,encodeURIComponent(item.value));

     showItem();s
}
const clearList=()=>{
    localStorage.clear();
    showItem();
    location.reload();
}
const modal = document.getElementById('exampleModal');

  modal.addEventListener('hidden.bs.modal', function () {
    const inputs = modal.querySelectorAll('input, textarea');
    inputs.forEach(input => input.value = '');
  });
  var backColor="#b3aaaa";
  const changeBackground=()=>{
    if(backColor=="#b3aaaa"){
        console.log("backgorund white")
        document.body.style.background="white"
        backColor="white"
    }
    else{
        console.log("background black")
        document.body.style.background="#b3aaaa"
        backColor="#b3aaaa"
    }
  }
  
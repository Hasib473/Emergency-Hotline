
function getElement(id){
    const Element = document.getElementById(id);
    return Element;

}

const love = document.getElementsByClassName('heart');
console.log(love);
for( const hearts of love){
     hearts.addEventListener('click',function(){
        const heartcount = hearts.parentNode.children[1].innerText
        let heartNo= Number(getElement('heart-count').innerText)+1

        getElement('heart-count').innerText = heartNo;
        
     })
}
let vars='';
var lst = [];
var back = 'images\\back.jpg';
for(let i = 1; i <= 10; i++)
{
    let x = document.getElementById("game");
    let image = document.createElement('img');
    let plc = 'images\\' +  + i + '.png'
    image.setAttribute('class', 'card')
    image.setAttribute('src', plc);
    image.setAttribute('value', i);
    image.setAttribute('onclick', 'swap(this)');
    lst.push(image);
    // document.getElementById("game").appendChild(image);
    images = document.createElement('img');
    images.setAttribute('class', 'card')
    images.setAttribute('src', plc);
    images.setAttribute('value', i);
    images.setAttribute('onclick', 'swap(this)');


    // document.getElementById("game").appendChild(images);
    lst.push(images);

}
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}


function named(a)
{
    let x = 'images\\' +  + a + '.png';
    return x;
}
shuffleArray(lst);
for(let i = 0; i < lst.length; i++)
{
    lst[i].dataset.pos = i;
    lst[i].setAttribute('src', back);
    document.getElementById("game").appendChild(lst[i]);

}
var many = 0;
var val;
function fun(item, val)
{
    item.setAttribute('src', back);
    val.setAttribute('src', back);
}

var isActive = true;
function swap(item) {
    if (!isActive) {
        return;
    }
    debugger
    var v = item.getAttribute('value');
    // var v = item.value;
    if(many ===0)
    {
        var x = item.getAttribute('data-pos');
        item.setAttribute('src', named(v));
        val = lst[x];
        many = 1;
    }
    else{
        
        many = 0;
        item.setAttribute('src', named(v));
        if(v !== val.getAttribute('value'))
        {
            isActive = false;
             setTimeout(function(){
                isActive = true;
                fun(item, val)}, 500);
         } 

    }
}





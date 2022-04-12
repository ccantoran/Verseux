var span = document.getElementsByClassName('arrow');
var div = document.getElementsByTagName('div');
var l = 0;
span[1].onclick = () =>{
    l++;
    for(var i of div)
    {
        if (l==0) {i.style.left = "0px";}
        if (l==1) {i.style.left = "-740px";}
        if (l==2) {i.style.left = "-1380px";}
        if (l>3) {l=3;}
    }
}
span[0].onclick = () =>{
    l--;
    for(var i of div)
    {
        if (l==0) {i.style.left = "0px";}
        if (l==1) {i.style.left = "-740px";}
        if (l==2) {i.style.left = "-1380px";}
        if (l<0) {l=0;}
    }
}


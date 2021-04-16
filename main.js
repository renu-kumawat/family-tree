var image=[
    "father.jpg","mother.jpg","boy.jpg","girl.jpg"
    ]
    var family=[
    "Satendra","Renu","Avanish","Rishika"
    ]
var i=0;
function next(){
i++;
var number=4;
if(i>number){
    i=0;
}
var updated_image=image[i];
var updated_name=family[i];
document.getElementById("image").src=updated_image;
document.getElementById("name").innerHTML=updated_name;
}

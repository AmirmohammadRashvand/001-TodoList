// **Todo list flowchart
// 1- get input value
// 2-when clicked "ADD" buttin clear the inout value
// 2-1 get OL 
// 3-when (2) finished ,make an "li" elemnt 
// 4-make a "DIV class="lich" " and added to (3).
// 5-make "P" element and add it to (4)
// 6-make a "div class="lich-icon" "
// 7-make input checkbox and add it to (6)
// 8- make <i class="fa-solid fa-trash fa-lg"></i> and add it to (6)
// 9-add (6) to (4)
// 10-add (3) to (2-1)
// **flowchart of deleting an li elemtn when clicking on trash icon
// 11- giv an specephic id to each "Li" That Made;
// 12- get trash icon
// 13- when click(13), search in data structure for that id
// 14- if id === li id delete "li" tag
// **flowchart for empty inout
// 15-if(2 was Empty) ==> put error else correct


var iv = document.getElementById("data");//1
var adbtn = document.getElementById("adD");//2
var Error = document.getElementById("Error");//15
var correct = document.getElementById("Correct");//15

adbtn.addEventListener("click", function(){
    if(iv.value === ''){//15
        Error.innerHTML = "*Task Can't Be Empty";
        Error.style.color = "red";
        Error.style.margin = 0 + " " + 20 + 'px';
        Error.style.display = "block";
        correct.style.display = "none";
        setTimeout(function() {
            Error.style.display = "none";
        } , 1000)
    }else {
        // 15
        Error.style.display = "none";
        correct.innerHTML = "Successfully Added";
        correct.style.display = "block";
        correct.style.color = "green";
        correct.style.margin = 0 + " " + 20 + 'px';
        var ol = document.getElementById("ol");//2-1
        var lie = document.createElement("li");//3
        lie.setAttribute('id' , randomNumber(4));// 11
        var lich = document.createElement("div");//4
        lich.classList.add("lich");
        lie.appendChild(lich);
        var p = document.createElement("p");//5
        p.innerHTML = iv.value;
        lich.appendChild(p);
        var lich_icon = document.createElement("div");//6
        lich_icon.classList.add("lich-icon");
        var checkbox = document.createElement("input")//7
        checkbox.type = "checkbox";
        lich_icon.appendChild(checkbox);
        var trash_icon = document.createElement("i");//8
        trash_icon.classList.add("fa-solid");
        trash_icon.classList.add("fa-trash");
        trash_icon.classList.add("fa-lg");
        trash_icon.setAttribute('id', lie.id);//12
        lich_icon.appendChild(trash_icon);
        lich.appendChild(lich_icon);//9
        ol.appendChild(lie);//10
        iv.value ='';
        DLItem(trash_icon,lie,ol);//13
        // check box function
        cht(checkbox,p);
        setTimeout(function() {//15
            correct.style.display = "none";
        } , 1000)
    }
})
// **flowchart of delte all list items
var clbtn = document.getElementById("clear");
clbtn.addEventListener("click" , function() {
    var pol = document.querySelector("ol");
    var lic = document.querySelector("li")
    while(lic){
        pol.removeChild(lic);
        lic = pol.lastElementChild;
    }
})

// functions:
function randomNumber(length) {
    return Math.floor(Math.pow(10, length-1) + Math.random() * (Math.pow(10, length) - Math.pow(10, length-1) - 1));
}
function DLItem(icon,li,parent) {
    icon.addEventListener("click" , function() {//13
        if(icon.id == li.id) {//14
            parent.removeChild(li);
        }
    })
}
function cht(box , ph){
    box.addEventListener("click", function() {
        ph.classList.toggle("itemdone");
    })
}
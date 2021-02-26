let y=32;

var obj={
    fname: "Akash",
    lname:"Atish",
    fullName:function(){
        console.log(y++);
        return(this.fname+" "+this.lname);
    }
}
y++;
console.log(obj.fullName());
console.log(++y);


let bd = "Bangladesh,India,srilanka,australia";

let h = bd.split(',');

let len = h.length;

for(i=0;i<len;i++){
    console.log(h[i])
}

console.log(h.pop())
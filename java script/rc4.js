const encryptbtn=document.querySelector('#encryption');
function encryption(){
    let s=document.querySelector('#sarray').value;
     let sarray=Array.from(String(s),Number);
    console.log(sarray);
    let p=document.querySelector('#plaintext').value;
    let parray=Array.from(String(p),Number);
    console.log(parray);
    let k=document.querySelector('#key').value
    let karray=Array.from(String(k),Number);
    console.log(karray);
    //T ARRAY
    let tarray=[];
    for(let i=0,f=0;i<sarray.length;i++)
    {
        tarray[i]=karray[f];
        if(f==karray.length-1)
        {
            f=0;
            continue;
        }
        f++;
    }
    console.log(tarray);
    //REARRANGEMENT OF S ARRAY
for(let i=0,j=0;i<sarray.length;i++)
{
j=(j+sarray[i]+tarray[i])%sarray.length;
//swap
let temp=sarray[i];
sarray[i]=sarray[j];
sarray[j]=temp;
}
console.log(sarray);
//STREAM GENERATION
let sl=sarray.length;
for(let ii=0,i=0,j=0;ii<karray.length;ii++,i++)
{
    i=(i+1)%sl;
    j=(j+sarray[i])%sl;
    //swap
    let temp=sarray[i];
    sarray[i]=sarray[j];
    sarray[j]=temp;
    let t=(sarray[i]+sarray[j])%sl;
    karray[ii]=sarray[t];
    i--;
}
console.log(karray);

//ENCRYPTION
 let carray=[];
for(let i=0;i<karray.length;i++)
{
    carray[i]=parray[i]^karray[i];
}
console.log(carray);
let ciphertext=carray.toString();
console.log(ciphertext);
console.log(ciphertext=ciphertext.replaceAll(',',''));
document.getElementById('text').value=ciphertext;
 }
encryptbtn.addEventListener('click',encryption);
//DECRYPTION

const decryptbtn=document.querySelector('#decryption');
function decryption(){
    let s=document.querySelector('#sarray').value;
     let sarray=Array.from(String(s),Number);
    console.log(sarray);
    let c=document.querySelector('#plaintext').value;
    let carray=Array.from(String(c),Number);
    console.log(carray);
    let k=document.querySelector('#key').value
    let karray=Array.from(String(k),Number);
    console.log(karray);
    //T ARRAY
    let tarray=[];
    for(let i=0,f=0;i<sarray.length;i++)
    {
        tarray[i]=karray[f];
        if(f==karray.length-1)
        {
            f=0;
            continue;
        }
        f++;
    }
    console.log(tarray);
    //REARRANGEMENT OF S ARRAY
for(let i=0,j=0;i<sarray.length;i++)
{
j=(j+sarray[i]+tarray[i])%sarray.length;
//swap
let temp=sarray[i];
sarray[i]=sarray[j];
sarray[j]=temp;
}
console.log(sarray);
//STREAM GENERATION
let sl=sarray.length;
for(let ii=0,i=0,j=0;ii<karray.length;ii++,i++)
{
    i=(i+1)%sl;
    j=(j+sarray[i])%sl;
    //swap
    let temp=sarray[i];
    sarray[i]=sarray[j];
    sarray[j]=temp;
    let t=(sarray[i]+sarray[j])%sl;
    karray[ii]=sarray[t];
    i--;
}
console.log(karray);

//DECRYPTION
let parray=[];
for(let i=0;i<karray.length;i++)
{
    parray[i]=carray[i]^karray[i];
}
console.log(parray);
let plaintext=parray.toString();
console.log(plaintext);
console.log(plaintext=plaintext.replaceAll(',',''));
document.getElementById('text').value=plaintext;
 }
decryptbtn.addEventListener('click',decryption);
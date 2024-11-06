const encryptionbtn=document.querySelector('#encryption')
function encryption(){
    let plaintext=document.getElementById('plaintext').value
    let key=document.getElementById('key').value
    console.log(plaintext)
    console.log(key)
    let j=0;
    let a,b,c,ans=""
    plaintext=plaintext.toLowerCase()
    key=key.toLowerCase()
    for(let i=0;i<plaintext.length;i++)
    {
        a=plaintext[i];
        b=key[j]
        if(a==" ")
        {
            ans+=" "
            j--
        }
        else if((a>='a'&& a<='z') &&(b>='a'&& b<='z'))
        {
            a=a.charCodeAt(0)-97
            b=b.charCodeAt(0)-97
            c=a+b;
            if(c>25)
            {
                c=c%26
            }    
            ans+=String.fromCharCode(c+97)
            console.log(ans)
        }
        else{
            ans=ans+a
            j--
        }
        if(j==key.length-1)
        {
            j=0;
        }
        else{
        j++;
        }
    }
    document.getElementById('text').value=ans
    }
    encryptionbtn.addEventListener('click',encryption)


//decryption 

const decryptionbtn=document.querySelector('#decryption')
function decryption(){
    let entext=document.getElementById('plaintext').value
    console.log(entext)
    let key=document.getElementById('key').value
    console.log(key)
    let j=0;
    let a,b,c,ans=""
    entext=entext.toLowerCase()
    key=key.toLowerCase()
    for(let i=0;i<entext.length;i++)
    {
        a=entext[i];
        b=key[j]
        if(a==" ")
        {
            ans+=" "
            j--
        }
        else if((a>='a'&& a<='z') &&(b>='a'&& b<='z'))
        {
            a=a.charCodeAt(0)-97
            b=b.charCodeAt(0)-97
            c=a-b;
            if(c<0)
            {
                c=(c+26)%26
            }    
            ans+=String.fromCharCode(c+97)
            console.log(ans)
        }
        else{
            ans=ans+a
            j--
        }
        if(j==key.length-1)
        {
            j=0;
        }
        else{
        j++;
        }
    }
    document.getElementById('text').value=ans
    }
    decryptionbtn.addEventListener('click',decryption)
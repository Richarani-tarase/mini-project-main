
const encryptionbtn=document.querySelector('#encryption')
function encrypt()
    {
        let plaintext=document.getElementById('plaintext').value
        console.log(plaintext)
        let key=document.getElementById('key').value
        console.log(key)
        if(key.length!=plaintext.length)
        {
            console.log(alert("text and key size should be same"));
          return;
        }
        plaintext=plaintext.toLowerCase()
        key=key.toLowerCase()
        let ans=""
        let a,j=0
        let b
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
                    c=(c-26)%26
                }    
                ans+=String.fromCharCode(c+97)
                console.log(ans)
            }
            else{
                ans=ans+a
                j--
            }
            if(j!=key.length-1)
            {
                j++;
            }
            else
            break;
        }
        document.getElementById('text').value=ans
    }
    encryptionbtn.addEventListener('click',encrypt)


//decryption
const decryptionbtn=document.querySelector('#decryption')
function decrypt()
    {
        let entext=document.getElementById('plaintext').value
        console.log(entext)
        let key=document.getElementById('key').value
        console.log(key)
        if(key.length!=entext.length)
        {
            console.log(alert("text and key size should be same"));
          return;
        }
        entext=entext.toLowerCase()
        key=key.toLowerCase()
        let ans=""
        let a,b,j=0
        for(var i=0;i<entext.length;i++)
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
            if(j!=key.length-1)
            {
            j++;
            }
            else
            break;
        }
        document.getElementById('text').value=ans
    }
    decryptionbtn.addEventListener('click',decrypt)    
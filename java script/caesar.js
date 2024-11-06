
const encriptionbtn=document.querySelector('#encryption')
        function encription()
        {
        const plain=document.querySelector('#plaintext').value;
        var key=parseInt(document.getElementById('key').value)
        if(Number.isInteger(key)==false)
        {
            console.log(alert("key must an integer value"))
            return;
        }
        if(key<0 || key>25)
        {
            console.log(alert("key must lie in the range 0 - 25"))
            return;
        }
        console.log(key)
       
            console.log(plain)
            var n=plain.length
            console.log(n)
            var ans=""
            for(var i=0;i<n;i++)
                {
                    var c=plain[i];
                    console.log(c)
                    if(c==" ")
                    {
                        ans+=" "
                        continue;
                    } 
                    else if(c>='a' && c<='z')
                    {
                        c=c.charCodeAt(0)
                        ans+=String.fromCharCode((c+key-97)%26+97)
                        console.log(ans)
                    } 
                    else if(c>='A' && c<='Z')
                    {
                        c=c.charCodeAt(0)
                        ans+=String.fromCharCode((c+key-65)%26+65)
                        console.log(ans)
                    } 
                    else{
                        ans+=c;
                        console.log(ans);
                    }
               }   
                
                    document.getElementById('text').value=ans
    }    
    encriptionbtn.addEventListener('click', encription)





    //decription
    const decriptionbtn=document.querySelector('#decryption')
        function decryption()
        {
        const plain=document.getElementById('plaintext').value;
        var key=parseInt(document.getElementById('key').value)
        if(Number.isInteger(key)==false)
        {
            console.log(alert("key must an integer value"))
            return;
        }
        if(key<0 || key>25)
        {
            console.log(alert("key must lie in the range 0 - 25"))
            return;
        }
        console.log(key)
       
            console.log(plain)
            var n=plain.length
            console.log(n)
            var ans=""
            for(var i=0;i<n;i++)
                {
                    var c=plain[i];
                    console.log(c)
                    if(c.charCodeAt(0)==32)
                    {
                        ans+=c;
                        continue
                    } 
                    else if(c>='a' && c<='z')
                    {
                        c=c.charCodeAt(0)-97
                        c=c-key;
                        if(c<0)
                        {
                            c=c+26;
                        }
                        ans+=String.fromCharCode(c%26+97)
                        console.log(ans)
                    } 
                    else if(c>='A' && c<='Z')
                    {
                        c=c.charCodeAt(0)-65
                        c=c-key
                        if(c<0)
                        {
                            c=c+26
                        }
                        ans+=String.fromCharCode(c%26+65)
                        console.log(ans)
                    } 
                    else{
                        ans+=c;
                        console.log(ans);
                    }
               }   
                
                    document.getElementById('text').value=ans
    }    
    decriptionbtn.addEventListener('click', decryption)
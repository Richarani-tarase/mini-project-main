
     //---------ENCRYPTION----------- 
     const encryptionbtn=document.querySelector('#encryption');
     function encryption(){
         let j,i;
         let plaintext=document.getElementById('plaintext').value;
         let key=document.getElementById('key').value;
         if(key=="" && plaintext=="")
        {
            alert("enter required text");
            return
        }
         if (plaintext=="") {
            alert("Enter the text");
            return
        }
        if(key=="")
        {
            alert("enter the key");
            return
        }
        if (!/^[a-zA-Z' ']*$/g.test(key) &&!/^[a-zA-Z]*$/g.test(plaintext ) ){
            alert("Invalid characters in both text and key");
            return
        }
        if (!/^[a-zA-Z]*$/g.test(key)) {
            alert("Invalid characters in key");
            return
        }
        if(!/^[a-zA-Z]*$/g.test(plaintext))
        {
            alert("Invalid characters in text")
            return
        }
         plaintext=plaintext.toLowerCase();
         key=key.toLowerCase();
         console.log(plaintext);
       /* console.log( plaintext=plaintext.replaceAll(' ',''));
        console.log(key=key.replaceAll(' ',''));*/
       console.log(plaintext=plaintext.replace('j','i'));
        console.log(key);
       console.log(key=key.replace('j','i'));
       for(i=0;i<plaintext.length;i++)
       {
        if(plaintext[i]==plaintext[i+1])
        {
         plaintext=plaintext.substring(0,i+1)+'x'+plaintext.substring(i+1,plaintext.length);
        }
       }
         size=plaintext.length;
         if(size%2!=0)
         {
          
             plaintext+='x';
         }
           console.log(plaintext);  
     key+="abcdefghijklmnopqrstuvwxyz";
     key=key.replace('j','i');
      console.log(key);
     for(i=0;i<key.length;i++)
     {
         for(j=i+1;j<key.length;)
         {
         if(key[j]==key[i])
         {
           key=key.slice(0,j)+''+key.slice(j+1);
         }
         else{j++;}
         }
     }  
     console.log(key);
     //MATRIX
     const matrix=[];
     let t=0;
      for(i=0;i<5;i++)
      {
     matrix[i]=[];
     for(j=0;j<5;j++)
     {
         matrix[i][j]=key[t];
         t++;
     }
      }
      console.log(matrix);
            j=1;
           var r1,r2,c1,c2,p1,p2,ct='';
         for(i=0;i<plaintext.length;)
         {
            r1=r2=c1=c2=0;
        p1=plaintext[i];
        p2=plaintext[j];
         var l,m;
        for(l=0;l<5;l++)
         {
             for( m=0;m<5;m++)
             {
                 
                 if(matrix[l][m]==p1){
                     r1=l;
                     c1=m;
                 }
             }
         }
         for(l=0;l<5;l++)
         {
             for(m=0;m<5;m++)
             {
                 if(matrix[l][m]==p2){
                     r2=l;
                     c2=m;
                 }
             }
         }
         if(r1==r2)
         {
          ct+=matrix[r1][(c1+1)%5];
          ct+=matrix[r2][(c2+1)%5];
         }
         else if(c1==c2)
         {
             ct+=matrix[(r1+1)%5][c1];
             ct+=matrix[(r2+1)%5][c2];
         }
         else{
             ct+=matrix[r1][c2];
             ct+=matrix[r2][c1];
         }
        i=i+2;
       j=j+2;
     
         }
         console.log(ct);
         document.getElementById('text').value=ct;
             }
     encryptionbtn.addEventListener('click',encryption);
     //encryption("aab jbcc","diksha")
     
     
     //---------Decryption----------
     const decryptbtn=document.querySelector('#decryption');
     function decryption(){
         let j,i;
         let plaintext=document.getElementById('plaintext').value;
         let key=document.getElementById('key').value;
         plaintext=plaintext.toLowerCase();
         key=key.toLowerCase();
         console.log(plaintext);
        console.log( plaintext=plaintext.replaceAll(' ',''));
        console.log(key=key.replaceAll(' ',''));
       console.log(plaintext=plaintext.replace('j','i'));
        console.log(key);
       console.log(key=key.replace('j','i'));
         console.log(plaintext);  
     key+="abcdefghijklmnopqrstuvwxyz";
     key=key.replace('j','i');
      console.log(key);
     for(i=0;i<key.length;i++)
     {
         for(j=i+1;j<key.length;)
         {
         if(key[j]==key[i])
         {
           key=key.slice(0,j)+''+key.slice(j+1);
         }
         else{j++;}
         }
     }  
     console.log(key);
     //MATRIX
     const matrix=[];
     let t=0;
      for(i=0;i<5;i++)
      {
     matrix[i]=[];
     for(j=0;j<5;j++)
     {
         matrix[i][j]=key[t];
         t++;
     }
      }
      console.log(matrix);
            j=1;
           var r1,r2,c1,c2,p1,p2,pt='';
         for(i=0;i<plaintext.length;)
         {
            r1=r2=c1=c2=0;
        p1=plaintext[i];
        p2=plaintext[j];
         var l,m;
        for(l=0;l<5;l++)
         {
             for( m=0;m<5;m++)
             {
                 
                 if(matrix[l][m]==p1){
                     r1=l;
                     c1=m;
                 }
             }
         }
         for(l=0;l<5;l++)
         {
             for(m=0;m<5;m++)
             {
                 if(matrix[l][m]==p2){
                     r2=l;
                     c2=m;
                 }
             }
         }
         if(r1==r2)
         {
             let p=c1-1;
             let q=c2-1;
             if(p==-1){p+=m;}
             if(q==-1){q+=m;}
          pt+=matrix[r1][p];
          pt+=matrix[r2][q]
         }
         else if(c1==c2)
         {
             let p=r1-1;
             let q=r2-1;
             if(p==-1){p+=l;}
             if(q==-1){q+=l;}
             pt+=matrix[p][c1];
             pt+=matrix[q][c2];
         }
         else{
             pt+=matrix[r1][c2];
             pt+=matrix[r2][c1];
         }
        i=i+2;
       j=j+2;
     
         }
         console.log(pt);
         document.getElementById('text').value=pt;
             }
     decryptbtn.addEventListener('click',decryption);
     //encryption("aab jbcc","diksha")
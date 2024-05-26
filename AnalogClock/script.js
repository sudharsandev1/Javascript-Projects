setInterval(()=>{
    d=new Date();
    hhr=d.getHours();
    hmin=d.getMinutes();
    hsec=d.getSeconds();
    hourrot=30*hhr+hmin/2;
    minrot=60*hmin;
    secrot=6*hsec;

    sec.style.transform=`rotate(${secrot}deg)`;
    min.style.transform=`rotate(${minrot}deg)`;
    hour.style.transform=`rotate(${hourrot}deg)`;

},1000);
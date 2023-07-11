const input=document.querySelector("input");
const qrImage=document.querySelector("img");
const generateBtn=document.querySelector("#generate");
const downloadBtn=document.querySelector("#download");

generateBtn.addEventListener("click",()=>{
    const qrCode=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
    qrImage.src=qrCode;
});
downloadBtn.addEventListener("click",async()=>{
    const response = await fetch (qrImage.src);
    const bolb = await response.blob();
    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(bolb);
    downloadLink.download = "qrcode.jpg";
    downloadLink.click();
});

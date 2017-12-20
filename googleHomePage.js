let search=document.querySelector('#search_bar');
console.log (search);
search.addEventListener("keypress",function(e){
    if (e.which==13){
        google();
    }
});
document.querySelector(".btn").addEventListener("click",function(e){
    google();
});

function google(){
    if(window.confirm("This is not a real Google Search Page click \"ok\" to go to Google's homepage."))
        {window.location.href="https://www.google.com";}
};
let luck=document.querySelector(".lucky");
luck.addEventListener("mouseover",function(e){
    luck.innerHTML="I'm Feeling Risky";
    });
luck.addEventListener("mouseleave",function(e){
    luck.innerHTML="I'm Feeling Lucky";
    });
search.addEventListener("click",function(e){
    search.select();
});
// hamburger
const microsoft365ul=document.querySelector("#microsoft365ul");
const hambi=document.querySelectorAll(".hamb i");
const hambli=document.querySelector(".hambli");
const hamb=document.querySelector(".hamb");
hamb.addEventListener("click",()=>
{
    for(let i=0;i<hambi.length;i++)
    {
        hambi[i].classList.toggle("hide");
    }
    hambli.classList.toggle("slidehamb");
    microsoft365ul.classList.remove("dplay");
    microsoft365ul.classList.add("nodplay");
    var iconi=icons[0].children;
    iconi[0].classList.add("showicon");
    iconi[1].classList.remove("showicon");
});
const innerlist=document.querySelectorAll(".innerlist");
const ddil=document.querySelectorAll(".ddil");
const removeother=(index)=>
{
   for(let i=0;i<innerlist.length;i++)
   {
        if(i==index)continue;
        else
        {
            innerlist[i].classList.remove("innerlishow");
        }
   }
}
for(let i=0;i<ddil.length;i++)
{
    ddil[i].addEventListener("click",()=>
    {
        removeother(i);
        innerlist[i].classList.toggle("innerlishow");
    })
}
const hamblili=document.querySelectorAll(".hambli li");
for(let i=0;i<hamblili.length;i++)
{
    hamblili[i].classList.add("border");
}
const removeborder=(i)=>
{
     for(let k=0;k<hamblili.length;k++)
     { 
         if(k==i)
         {
            continue;
         }
         else
         {
            hamblili[k].classList.remove("borderdashed");
         }
     }
}
function addborder(i)
{
    for(let k=0;k,hamblili.length;i++)
    {
        if(k==i)
        {
            continue;
        }
        else
        {
           hamblili[i].classList.add("border");
        }
    }
}
for(let i=0;i<hamblili.length;i++)
{
    hamblili[i].addEventListener("click",()=>
    {
        removeborder(i);
        hamblili[i].classList.toggle("borderdashed");
    });
}







// dropdown
const li=document.querySelectorAll(".navli .ul .li")
const dropdown=document.querySelectorAll(".dropdown");
const remove=(a,b,c,d)=>
{
    a=li[a];
    b=li[b];
    c.classList.remove("dropdowndisplay");
    a.classList.remove("background");
    d.classList.remove("dropdowndisplay");
    b.classList.remove("background");
}
li[0].addEventListener("click",()=>
{
    remove(2,3,dropdown[0],dropdown[1]);
    document.querySelector(".dropdown.d1").classList.toggle("dropdowndisplay");
    li[0].classList.toggle("background");
});
li[2].addEventListener("click",()=>
{
    remove(0,3,dropdown[1],dropdown[2]);
    document.querySelector(".dropdown.d2").classList.toggle("dropdowndisplay");
    li[2].classList.toggle("background");
});
li[3].addEventListener("click",()=>
{
    remove(0,2,dropdown[0],dropdown[2]);
    li[3].classList.toggle("background");
    document.querySelector(".dropdown.d3").classList.toggle("dropdowndisplay");
});







// microsoft 365 and flipping icons
const h=document.querySelector("#microsoft365 .container h4");
const icon=document.querySelector("#microsoft365 .container .icon");
h.addEventListener("click",()=>
{
   microsoft365ul.classList.toggle("dplay");
   microsoft365ul.classList.toggle("nodplay");
});
icon.addEventListener("click",()=>
{
   microsoft365ul.classList.toggle("dplay");
   microsoft365ul.classList.toggle("nodplay");
});
const liclick=document.querySelectorAll(".liclick");
const inerlist=document.querySelectorAll(".inner");
const innerinnerlist=document.querySelectorAll(".innerinner");
const select=document.querySelectorAll(".select");
for(let i=0;i<liclick.length;i++)
{
    liclick[i].addEventListener("click",()=>
    {
        inerlist[i].classList.toggle("nodplay");
        inerlist[i].classList.toggle("dplay");
    });
}
for(let i=0;i<select.length;i++)
{
    select[i].addEventListener("click",()=>
    {
        innerinnerlist[i].classList.toggle("nodplay");
        innerinnerlist[i].classList.toggle("dplay");
    });
}
const iconflip=document.querySelectorAll(".iconflip");
const icons=document.querySelectorAll(".icon");
for(let i=2;i<iconflip.length;i++)
{
    iconflip[i].addEventListener("click",()=>
    {
        var iconi=icons[i-1].children;
        for(let k=0;k<iconi.length;k++)
        {
            iconi[k].classList.toggle("showicon");
        }
    });
}
function change()
{
    var iconi=icons[0].children;
    for(let k=0;k<iconi.length;k++)
    {
        iconi[k].classList.toggle("showicon");
    }
}
const removeborder2=(i)=>
{
     for(let k=0;k<unli.length;k++)
     { 
         if(k==i)
         {
            continue;
         }
         else
         {
            unli[k].classList.remove("borderdashed");
            unli[k].classList.add("border");
         }
     }
}
iconflip[0].addEventListener("click",change);
iconflip[1].addEventListener("click",change);
const unli=document.querySelectorAll("#microsoft365ul li");
for(let i=0;i<unli.length;i++)
{
    unli[i].classList.add("border");
}
for(let i=0;i<unli.length;i++)
{
    unli[i].addEventListener("click",()=>
    {
        removeborder2(i);
        unli[i].classList.toggle("border");
        unli[i].classList.toggle("borderdashed");
    });
}







// cross section
const sectioncross=document.querySelector("#cross");
const cross=document.querySelector("#cross i");
cross.addEventListener("click",()=>
{
    sectioncross.classList.add("removecrosssection");
}); 


// dropdown list
const dropdownaftersec3=document.querySelector("#dropdown");
const dropdownlist=document.querySelector("#dropdownlist");
const dropdownlistcolor=document.querySelectorAll("#dropdownlist .container .color");
const dropdownli=document.querySelectorAll("#dropdownlist .container .li");
for(let i=0;i<dropdownli.length;i++)
{
    dropdownli[i].addEventListener("mouseover",()=>
    {
        dropdownlistcolor[i].style.backgroundColor="rgb(2,2,96)";
    });
}
for(let i=0;i<dropdownli.length;i++)
{
    dropdownli[i].addEventListener("mouseout",()=>
    {
        dropdownlistcolor[i].style.backgroundColor="white";
    });
}
for(let i=0;i<dropdownli.length;i++)
{
    dropdownli[i].addEventListener("click",()=>
    {
        dropdownlist.style.display="none";
    });
}

dropdownaftersec3.addEventListener("click",()=>
{
    if(dropdownaftersec3.style.border=="2px dashed rgb(2, 2, 96)")
    {
        dropdownaftersec3.style.border="2px solid #ccc";
    }
    else
    {
        dropdownaftersec3.style.border="2px dashed rgb(2 ,2 ,96)";
    }
    if(dropdownlist.style.display=="block")
    {
        dropdownlist.style.display="none";
    }
    else
    {
        dropdownlist.style.display="block";
    }
});




// section 5
const slides=document.querySelectorAll(".between .content .c");
const slidesp=document.querySelectorAll(".between .content .c .peragraphtext p");
const slidesi=document.querySelectorAll(".between .content .c p i");
const img=document.querySelectorAll(".between .img .i");
function close(index)
{
    for(let i=0;i<slides.length;i++)
    {
        if(i==index)
        {
            continue;
        }
        else
        {
            slidesp[i].classList.add("nodisplay");
            slidesp[i].classList.remove("display");
            slidesi[i].classList.remove("rotate");
            img[i].classList.remove("slideimage");
            img[i].classList.add("slideback");
        }
    }
}
for(let i=0;i<slides.length;i++)
{
    slides[i].addEventListener("click",()=>
    {
        close(i);
       slidesp[i].classList.toggle("nodisplay");
       slidesp[i].classList.toggle("display");
       slidesi[i].classList.toggle("rotate");
       img[i].classList.toggle("slideimage");
       img[i].classList.toggle("slideback");
    });
}





// explore microsoft 365
const whatsincluded2buttons=document.querySelectorAll(".whatsincluded2button button");
const videochild=document.querySelectorAll(".video .child");
function change(i,tag,logotextimg,logotexth)
{
   if(i==1 && tag.textContent=="Create and share content with Microsoft 365 app")
   {
       tag.textContent="Innovate with Microsoft 365";
       logotexth.textContent="Microsoft Defender"
       logotextimg.src='img/defender-resize.png';
   }
   else if(i==0)
   {
        tag.textContent="Create and share content with Microsoft 365 app";
        logotexth.textContent="Innovate with Microsoft 365";
        logotextimg.src='img/microsoft365resize.png';
   }
}
for(let i=0;i<whatsincluded2buttons.length;i++)
{
    whatsincluded2buttons[i].addEventListener("click",()=>
    {
       videochild[i].classList.add("upper");
       if(i==0)
       {
        videochild[1].classList.remove("upper");
       }
       else
       {
        videochild[0].classList.remove("upper");
       }
       change(i,document.querySelector("#changeheading"),document.querySelector(".logotext img"),document.querySelector(".logotext h5"));
       var j=-1;
       if(i==0)
       {
        j=1;
       }
       else
       {
        j=0;
       }
       whatsincluded2buttons[i].style.borderBottom="5px solid rgb(2,2,96)";
       whatsincluded2buttons[j].style.borderBottom="5px solid white";
    });
}
const body=document.querySelector("body");
const videobutton=document.querySelectorAll(".video i");
const stopvdo=document.querySelectorAll(".videocontainer i");
const video=document.querySelectorAll(".videocontainer");
for(let i=0;i<videobutton.length;i++)
{
    videobutton[i].addEventListener("click",()=>
    {
        video[i].classList.add("showvdo");
        video[i].classList.remove("dontshowvdo");
    });
}
const vid=document.querySelectorAll("video");
for(let i=0;i<stopvdo.length;i++)
{
    stopvdo[i].addEventListener("click",()=>
    {
        video[i].classList.remove("showvdo");
        video[i].classList.add("dontshowvdo");
        vid[i].pause();
    });
    
}

const cards=document.querySelectorAll(".bottoom .cards");
function dontreplace()
{
    const cardimg=document.querySelectorAll(".selectforchange img");
    const cardh1=document.querySelectorAll(".selectforchange h1");
    const cardp=document.querySelectorAll(".selectforchange p");
    const carda=document.querySelectorAll(".selectforchange  a");
    // for card 1
    cardimg[0].style.width="60px";
    cardimg[0].src='img/word-resize.png';
    cardh1[0].textContent="Word";
    cardp[0].textContent="Elevate Your writing and create beautiful document - anywhere, anytime";
    carda[0].href="https://www.microsoft.com/en-in/microsoft-365/word";
    // for card 2
    cardimg[1].style.width="60px";
    cardimg[1].src='img/excel-resize.png';
    cardh1[1].textContent="Excel";
    cardp[1].textContent="Turn data into insights with free and premium spreadsheets.";
    carda[1].href="https://www.microsoft.com/en-in/microsoft-365/excel";
    // for card 3
    cardimg[2].src='img/outlook-resize.png';
    cardh1[2].textContent="Outlook";
    cardp[2].textContent="Manage your emai, calender, tasks and contact in one location.";
    carda[2].href="https://www.microsoft.com/en-in/microsoft-365/outlook/email-and-calendar-software-microsoft-outlook";
    // for card 4
    cardimg[3].src='img/microsoft365resize.png';
    cardh1[3].textContent="The Microsoft 365 app";
    cardp[3].textContent="Access your apps and files in one place.";
    carda[3].href="https://www.microsoft365.com/";
}
function replace()
{
    const cardimg=document.querySelectorAll(".selectforchange img");
    const cardh1=document.querySelectorAll(".selectforchange h1");
    const cardp=document.querySelectorAll(".selectforchange p");
    const carda=document.querySelectorAll(".selectforchange  a");
    
    // for card 1
    cardimg[0].style.width="40px";
    cardimg[0].src='img/powerpoint.png';
    cardh1[0].textContent="Powerpoint";
    cardp[0].textContent="Turn your inspiration into stunning Presentations.";
    carda[0].href="https://www.microsoft.com/en-in/microsoft-365/powerpoint";
    // for card 2
    cardimg[1].style.width="40px";
    cardimg[1].src='img/microsoft Editor.png';
    cardh1[1].textContent="Microsoft Editor";
    cardp[1].textContent="Elevate your writing with real-time, intelligent writing asistance";
    carda[1].href="https://www.microsoft.com/en-in/microsoft-365/microsoft-editor";
    // for card 3
    cardimg[2].src='img/chipchamp.jpg';
    cardh1[2].textContent="Clipchamp";
    cardp[2].textContent="Create a beautiful video with ease.";
    carda[2].href="https://www.microsoft.com/en-in/microsoft-365/clipchamp";
    // for card 4
    cardimg[3].src='img/oneNote.png';
    cardh1[3].textContent="OneNote";
    cardp[3].textContent="Store all of your ideas in one place.";
    carda[3].href="https://www.microsoft.com/en-in/microsoft-365/onenote/digital-note-taking-app";
}
function display()
{
    cards[5].style.display="flex";
    cards[6].style.display="flex";
}
function nodisplay()
{
    cards[5].style.display="none";
    cards[6].style.display="none";
}
function changeinnerhtml(i)
{
    if(i==0)
    {
        dontreplace();
        display();
    }
    else if(i==1)
    {
        replace();
        nodisplay();
    }
}
const whatsincludedbuttons=document.querySelectorAll("#whatsincluded .button button");
for(let i=0;i<whatsincludedbuttons.length;i++)
{
    whatsincludedbuttons[i].addEventListener("click",()=>
    {
        var j=-1;
        if(i==0)
        {
            j=1;
        }
        else
        {
            j=0;
        }
        whatsincludedbuttons[i].style.color="white";
        whatsincludedbuttons[i].style.backgroundColor="black";
        whatsincludedbuttons[j].style.color="black";
        whatsincludedbuttons[j].style.backgroundColor="white";
        changeinnerhtml(i);
    });
}


// customer services
const customercard=document.querySelectorAll(".ccard");
const customerimage=document.querySelectorAll(".cardnavimg");
function removecustomerborder(j)
{
   for(let i=0;i<customerimage.length;i++)
   {
       if(i==j)
       {
        continue;
       }
       else
       {
          customerimage[i].classList.remove("cardnavimgborder");
       }
   }
}
function addnodisplaytoothers(i)
{
    for(let j=0;j<customercard.length;j++)
    {
        if(j==i)
        {
            continue;
        }
        else
        {
            customercard[j].classList.add("nodisplaycustomercard");
            customercard[j].classList.remove("displaycustomercard")
        }
    }
}
var currentcardindex=0;
for(let i=0;i<customerimage.length;i++)
{
    customerimage[i].addEventListener("click",()=>
    {
        currentcardindex=i;
        removecustomerborder(i);
        customerimage[i].classList.add("cardnavimgborder");
        customercard[i].classList.add("displaycustomercard");
        customercard[i].classList.remove("nodisplaycustomercard");
        addnodisplaytoothers(i);
    });
}
const customerprevbutton=document.querySelector(".cardnavbutton .prev");
const customernextbutton=document.querySelector(".cardnavbutton .next");

customerprevbutton.addEventListener("click",()=>
{
    if(currentcardindex!=0)
    {
       currentcardindex--;
       customercard[currentcardindex].classList.add("displaycustomercard");
       customercard[currentcardindex].classList.remove("nodisplaycustomercard");
       addnodisplaytoothers(currentcardindex);
    }
});


customernextbutton.addEventListener("click",()=>
{
    if(currentcardindex!=customercard.length-1)
    {
       currentcardindex++;
       customercard[currentcardindex].classList.add("displaycustomercard");
       customercard[currentcardindex].classList.remove("nodisplaycustomercard");
       addnodisplaytoothers(currentcardindex);
    }
});
setInterval(()=>
{
    if(currentcardindex==0)
    {
        customerprevbutton.style.opacity="0.5";
    }
    else
    {
        customerprevbutton.style.opacity="1";
    }
    if(currentcardindex==customercard.length-1)
    {
        customernextbutton.style.opacity="0.5";
    }
    else
    {
        customernextbutton.style.opacity="1";
    }
},1);




// links
   document.querySelector("#howitworks .bottom").addEventListener("click",()=>
   {
    window.open("https://www.microsoft.com/en-in/microsoft-365/explore-microsoft-365-for-home");
   });
   document.querySelector(".customercard .card1 button").addEventListener("click",()=>
   {
    window.open("https://www.microsoft.com/en-us/microsoft-365-life-hacks/stories/akram-hussain-test-tracking-excel");
   });
   document.querySelector(".customercard .card2 button").addEventListener("click",()=>
   {
    window.open("https://www.microsoft.com/en-us/microsoft-365-life-hacks/stories/walton-family-onedrive");
   });
   document.querySelector(".customercard .card3 button").addEventListener("click",()=>
   {
    window.open("https://www.microsoft.com/en-us/microsoft-365-life-hacks/stories/the-kenney-family");
   });
   document.querySelector(".customercard .card4 button").addEventListener("click",()=>
   {
    window.open("https://www.microsoft.com/en-us/microsoft-365-life-hacks/stories/sabiha-shaik");
   });
   document.querySelector(".customercard .card5 button").addEventListener("click",()=>
   {
    window.open("https://www.microsoft.com/en-us/microsoft-365-life-hacks/stories/terrell-jarius-dad-influencer-family");
   });
   document.querySelector("#mix").addEventListener("click",()=>
   {
    window.open("https://www.microsoft.com/en-in/microsoft-365/products-apps-services");
   });

const microsoft365ulli=document.querySelectorAll("#microsoft365ul li");
microsoft365ulli[0].addEventListener("click",()=>
{
    window.open("https://www.microsoft.com/en-in/microsoft-365");
});
microsoft365ulli[3].addEventListener("click",()=>
{
    window.open("https://www.microsoft.com/en-in/microsoft-365/compare-all-microsoft-365-products?&activetab=tab:primaryr1");
});
microsoft365ulli[4].addEventListener("click",()=>
{
    window.open("https://www.microsoft.com/en-in/microsoft-365/p/microsoft-365-family/cfq7ttc0k5dm");
});
microsoft365ulli[5].addEventListener("click",()=>
{
    window.open("https://www.microsoft.com/en-in/microsoft-365/p/microsoft-365-personal/cfq7ttc0k5bf");
});
microsoft365ulli[6].addEventListener("click",()=>
{
    window.open("https://www.microsoft.com/en-in/education/products/office");
});
microsoft365ulli[7].addEventListener("click",()=>
{
    window.open("https://www.microsoft.com/en-in/microsoft-365/explore-microsoft-365-for-home");
});
microsoft365ulli[9].addEventListener("click",()=>
{
    window.open("https://www.microsoft.com/en-in/microsoft-365/compare-all-microsoft-365-products?&activetab=tab:primaryr2");
});
microsoft365ulli[10].addEventListener("click",()=>
{
    window.open("https://www.microsoft.com/en-in/microsoft-365/business");
});
microsoft365ulli[12].addEventListener("click",()=>
{
    window.open("https://www.microsoft.com/en-in/microsoft-365/enterprise/microsoft365-plans-and-pricing");
});
microsoft365ulli[13].addEventListener("click",()=>
{
    window.open("https://www.microsoft.com/en-in/microsoft-365/enterprise");
});
microsoft365ulli[14].addEventListener("click",()=>
{
    window.open("https://www.microsoft.com/en-in/microsoft-365/enterprise/frontline");
});
microsoft365ulli[16].addEventListener("click",()=>
{
    window.open("https://www.microsoft.com/en-in/microsoft-365/excel");
});
microsoft365ulli[17].addEventListener("click",()=>
{
    window.open("https://www.microsoft.com/en-in/microsoft-teams/group-chat-software");
});
microsoft365ulli[18].addEventListener("click",()=>
{
    window.open("https://www.microsoft.com/en-in/microsoft-365/word");
});
microsoft365ulli[19].addEventListener("click",()=>
{
    window.open("https://www.microsoft.com/en-in/microsoft-365/onedrive/online-cloud-storage");
});
microsoft365ulli[20].addEventListener("click",()=>
{
    window.open("https://www.microsoft.com/en-in/microsoft-365/onenote/digital-note-taking-app");
});
microsoft365ulli[21].addEventListener("click",()=>
{
    window.open("https://www.microsoft.com/en-in/microsoft-365/outlook/email-and-calendar-software-microsoft-outlook");
});
microsoft365ulli[22].addEventListener("click",()=>
{
    window.open("https://www.microsoft.com/en-in/microsoft-365/powerpoint");
});
microsoft365ulli[23].addEventListener("click",()=>
{
    window.open("https://www.microsoft.com/en-in/microsoft-365/project/project-management-software");
});
microsoft365ulli[24].addEventListener("click",()=>
{
    window.open("https://www.microsoft.com/en-in/microsoft-365/sharepoint/collaboration");
});
microsoft365ulli[25].addEventListener("click",()=>
{
    window.open("https://www.microsoft.com/en-in/microsoft-365/products-apps-services");
});
microsoft365ulli[27].addEventListener("click",()=>
{
    window.open("https://www.microsoft.com/en-in/microsoft-365/microsoft-office");
});
microsoft365ulli[28].addEventListener("click",()=>
{
    window.open("https://www.microsoft.com/en-in/windows-365");
});
microsoft365ulli[29].addEventListener("click",()=>
{
    window.open("https://www.microsoft.com/en-in/security/mobile-authenticator-app");
});
microsoft365ulli[30].addEventListener("click",()=>
{
    window.open("https://www.microsoft.com/en-in/microsoft-365/enterprise-mobility-security");
});
microsoft365ulli[31].addEventListener("click",()=>
{
    window.open("https://www.microsoft.com/en-in/microsoft-365/enterprise-mobility-security");
});
microsoft365ulli[32].addEventListener("click",()=>
{
    window.open("https://www.microsoft.com/en-in/edge");
});
microsoft365ulli[33].addEventListener("click",()=>
{
    window.open("https://www.microsoft.com/en-in/microsoft-365/nonprofit/plans-and-pricing");
});
microsoft365ulli[35].addEventListener("click",()=>
{
    window.open("https://go.microsoft.com/fwlink/p/?linkid=864773");
});
microsoft365ulli[36].addEventListener("click",()=>
{
    window.open("https://www.microsoft.com/en-in/microsoft-365/microsoft-copilot");
});
microsoft365ulli[37].addEventListener("click",()=>
{
    window.open("https://www.microsoft.com/en-in/microsoft-365/clipchamp");
});
microsoft365ulli[38].addEventListener("click",()=>
{
    window.open("https://www.microsoft.com/en-in/microsoft-viva");
});
microsoft365ulli[40].addEventListener("click",()=>
{
    window.open("https://www.microsoft.com/en-in/microsoft-365/business/compare-all-microsoft-365-business-products");
});
microsoft365ulli[41].addEventListener("click",()=>
{
    window.open("https://www.microsoft.com/en-in/microsoft-365/copilot-for-work");
});
microsoft365ulli[42].addEventListener("click",()=>
{
    window.open("https://www.microsoft.com/en-in/microsoft-365/cost-savings");
});
microsoft365ulli[43].addEventListener("click",()=>
{
    window.open("https://support.office.com/en-in/article/accounts-in-office-628ea040-f265-49de-b986-be09c3ebf8a9");
});
microsoft365ulli[44].addEventListener("click",()=>
{
    window.open("https://www.microsoft.com/en-in/microsoft-365/microsoft-365-for-home-and-school-faq");
});
microsoft365ulli[45].addEventListener("click",()=>
{
    window.open("https://support.office.com/en-in/article/download-and-install-or-reinstall-office-365-or-office-2016-on-a-pc-or-mac-4414eaaf-0478-48be-9c42-23adc4716658");
});
microsoft365ulli[46].addEventListener("click",()=>
{
    window.open("https://templates.office.com/");
});
microsoft365ulli[47].addEventListener("click",()=>
{
    window.open("https://support.microsoft.com/en-in/training");
});
microsoft365ulli[48].addEventListener("click",()=>
{
    window.open("https://support.office.com/en-in/article/what-s-new-in-office-365-95c8d81d-08ba-42c1-914f-bca4603e1426?ui=en-US&rs=en-US&ad=US");
});
microsoft365ulli[50].addEventListener("click",()=>
{
    window.open("https://www.microsoft.com/en-in/microsoft-365/small-business-resource-center");
});
microsoft365ulli[51].addEventListener("click",()=>
{
    window.open("https://support.microsoft.com/");
});
microsoft365ulli[52].addEventListener("click",()=>
{
    window.open("https://support.microsoft.com/en-in/education");
});
microsoft365ulli[53].addEventListener("click",()=>
{
    window.open("https://partner.microsoft.com/en-in/");
});
microsoft365ulli[54].addEventListener("click",()=>
{
    window.open("https://www.microsoft.com/en-in/microsoft-365/support");
});
const bottomimg=document.querySelectorAll(".bottomimg");
const c=document.querySelectorAll(".c");
function removeremainingimg(j)
{
    for(let i=0;i<bottomimg.length;i++)
    {
        if(j==i)
        {
            continue;
        }
        else
        {
           bottomimg[i].style.display="none";
        }
    }
}
function check(j)
{
    if(bottomimg[j].style.display=="block")
    {
        return true;
    }
    else
    {
        return false;
    }
}
c[0].addEventListener("click",()=>
{
    if(check(0))
    {
        bottomimg[0].style.display="none";
    }
    else
    {
        bottomimg[0].style.display="block";
    }
    removeremainingimg(0);
});

c[1].addEventListener("click",()=>
{   
    if(check(1))
    {
        bottomimg[1].style.display="none";
    }
    else
    {
        bottomimg[1].style.display="block";
    }
    removeremainingimg(1);
});

c[2].addEventListener("click",()=>
{
    if(check(2))
    {
        bottomimg[2].style.display="none";
    }
    else
    {
        bottomimg[2].style.display="block";
    }
    removeremainingimg(2);
});




const leftsection4a=document.querySelectorAll(".leftsection4 a");
function removeotherborders(j)
{
    for(let i=0;i<leftsection4a.length;i++)
    {
        if(i==j)
        {
            continue;
        }
        else
        {
            leftsection4a[i].style.borderBottom="4px solid white"; 
        }
    }
}
for(let i=0;i<leftsection4a.length;i++)
{
    leftsection4a[i].addEventListener("click",()=>
    {
       leftsection4a[i].style.borderBottom="4px solid rgb(2,2,96)";
       removeotherborders(i);
    });
}
const checkdisplay=document.querySelectorAll(".checkdisplay");
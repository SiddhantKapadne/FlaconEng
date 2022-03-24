window.onscroll = function() {scrollFunction()};
        var screenSize = document.documentElement.clientWidth;
        console.log(screenSize);
        function scrollFunction() {
            if(screenSize > 600){
                if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                    document.getElementById("navbar").style.background = "#15141B";
                    document.getElementById("logo").style.width = "125px";
                    document.getElementById("logo").style.height = "172px";
                    document.getElementById("navitem").style.fontSize="20px";
                    document.getElementById("navList1").style.padding = "42px 0 0 40px";
                    document.getElementById("navList2").style.padding = "42px 0 0 40px";
                    document.getElementById("navList3").style.padding = "42px 0 0 40px";
                    document.getElementById("navList4").style.padding = "42px 0 0 40px";
                    document.getElementById("navList5").style.padding = "42px 0 0 40px";
                } else {
                    document.getElementById("navbar").style.background = "none";
                    document.getElementById("logo").style.width = "125px";
                    document.getElementById("logo").style.height = "172px";
                    document.getElementById("navitem").style.fontSize="24px";
                    document.getElementById("navList1").style.padding = "42px 0 0 40px";
                    document.getElementById("navList2").style.padding = "42px 0 0 40px";
                    document.getElementById("navList3").style.padding = "42px 0 0 40px";
                    document.getElementById("navList4").style.padding = "42px 0 0 40px";
                    document.getElementById("navList5").style.padding = "42px 0 0 40px";
                }   
            } else {
                if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
                    document.getElementById("navbar").style.background = "#15141B";
                    document.getElementById("logo").style.display = "none";
                } else {
                    document.getElementById("navbar").style.background = "none";
                    document.getElementById("logo").style.display = "initial";
                }  
            }
        }

        const myMenu = document.getElementById('navitem');
        myMenu.onclick=e=>  // JS event delegation
        {
        if (e.target.tagName.toLowerCase() != 'a' ) return; // only
        e.preventDefault;
        let LI = e.target.parentElement;

        if (!LI.classList.contains('active'))
            {
            myMenu.querySelector('li.active').classList.remove('active');
            }
        LI.classList.add('active');
        }

        // For Animation
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
              const square = entry.target.querySelector('.about-us_content');
          
              if (entry.isIntersecting) {
                      square.classList.add('animate__fadeInRight');
                      return; // if we added the class, exit the function
                }
              }
            );
          });
          
          observer.observe(document.querySelector('.about-us_section'));

          const AboutLogo = document.querySelector('.ImgLogo');
          AboutLogo.classList.add('animate__animated' , 'animate__delay-3s','animate__fadeInLeft');

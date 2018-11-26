window.sr = ScrollReveal();
        sr.reveal('.navbar', {
            duration: 2000,
            origin: 'bottom'
        });
        window.sr = ScrollReveal();
        sr.reveal('.showcase-left', {
            duration: 2000,
            origin: 'top',
            distance: '50px'
        });
        window.sr = ScrollReveal();
        sr.reveal('.showcase-right', {
            duration: 2000,
            origin: 'right',
            distance: '50px'
        });
        window.sr = ScrollReveal();
        sr.reveal('.showcase-btn', {
            duration: 2000,
            origin: 'bottom',
            delay: 2000
        });
        window.sr = ScrollReveal();
        sr.reveal('.testimonial div', {
            duration: 2000,
            origin: 'bottom',
            distance: '10px'
        });
        window.sr = ScrollReveal();
        sr.reveal('.info-left', {
            duration: 2000,
            origin: 'left',
            distance: '50px',
            viewFactor: 0.2
        });
        sr.reveal('.info-right', {
            duration: 2000,
            origin: 'right',
            distance: '50px',
            viewFactor: 0.2
        });

        //Smooth scrolling
        $(function(){
            $('a[href*="#"]:not([href="#"])').click(function() {
                if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') &&
                location.hostname == this.hostname) {
                    let target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        $('html, body').animate({
                            scrollTop: target.offset().top
                        }, 1000);
                        return false;
                    }
                }
            });
        });

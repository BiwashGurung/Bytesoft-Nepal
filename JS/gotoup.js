     function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      window.onscroll = function() {
        const button = document.getElementById("goToTopButton");
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          button.style.display = "block";
        } else {
          button.style.display = "none";
        }
      };
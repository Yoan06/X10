document.addEventListener('DOMContentLoaded', function() {
    // Gestion du menu déroulant au survol
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const menu = dropdown.querySelector('.dropdown-menu');
        let timeoutId;

        // Ouvrir le menu au survol
        dropdown.addEventListener('mouseenter', () => {
            clearTimeout(timeoutId);
            menu.classList.add('show');
            dropdown.classList.add('show');
        });

        // Fermer le menu avec un délai quand la souris quitte
        dropdown.addEventListener('mouseleave', () => {
            timeoutId = setTimeout(() => {
                menu.classList.remove('show');
                dropdown.classList.remove('show');
            }, 200); // Délai de 200ms avant la fermeture
        });

        // Empêcher la fermeture immédiate si la souris revient sur le menu
        menu.addEventListener('mouseenter', () => {
            clearTimeout(timeoutId);
        });

        // Fermer le menu quand la souris quitte le menu
        menu.addEventListener('mouseleave', () => {
            timeoutId = setTimeout(() => {
                menu.classList.remove('show');
                dropdown.classList.remove('show');
            }, 200);
        });
    });

    // Gestion du menu mobile
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener('click', () => {
            navbarCollapse.classList.toggle('show');
        });

        // Fermer le menu mobile lors du clic sur un lien
        const navLinks = navbarCollapse.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth < 992) {
                    navbarCollapse.classList.remove('show');
                }
            });
        });
    }
}); 
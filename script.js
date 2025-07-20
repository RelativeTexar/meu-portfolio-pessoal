// Adiciona um listener que executa todo o nosso código apenas quando o HTML da página foi completamente carregado.
document.addEventListener('DOMContentLoaded', () => {

    /**
     * FEATURE 1: ANIMAÇÃO AO ROLAR (SCROLL REVEAL)
     * Faz os cards de projeto e certificado aparecerem suavemente na tela.
     */
    const animatedItems = document.querySelectorAll('.grid-item');

    if (animatedItems.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        animatedItems.forEach(item => {
            observer.observe(item);
        });
    }


    /**
     * FEATURE 2: EFEITO DE DIGITAÇÃO NA PÁGINA INICIAL
     * Anima o subtítulo para que ele pareça estar sendo digitado.
     */
    const subtitleElement = document.querySelector('.subtitle');

    if (subtitleElement) {
        const originalText = subtitleElement.innerHTML;
        subtitleElement.innerHTML = '';
        let i = 0;

        function typeWriter() {
            if (i < originalText.length) {
                subtitleElement.innerHTML += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 75);
            }
        }
        
        typeWriter();
    }

});
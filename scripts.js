document.addEventListener('DOMContentLoaded', () => {

    // Récupération des éléments HTML
    const previewSection = document.getElementById('preview-section');
    const backgroundImg = document.getElementById('background');
    const legImg = document.getElementById('img-leg');
    const noseImg = document.getElementById('img-nose');
    const mouthImg = document.getElementById('img-mouth');
    const eyesImg = document.getElementById('img-eyes');
    const earsImg = document.getElementById('img-hair');
    const hairImg = document.getElementById('img-neck');
    const neckImg = document.getElementById('img-accessories');
    const accessoriesImg = document.getElementById('img-accessories');
    const randomBtn = document.getElementById('random');
    const downloadBtn = document.getElementById('download');

    // Récupération des catégories de personnalisation
    const customizationButtons = document.querySelectorAll('#customization-buttons .category-btn');
    const stylePanels = document.querySelectorAll('.style-panel');
    const stylesSection = document.querySelectorAll('.style-btn');

    // Vérifier que nous avons bien trouvé des boutons (pour le débogage)
    console.log("Boutons trouvés :", customizationButtons.length);

    // État actuel pour le mode aléatoire (optionnel, mais utile)
    const currentStyles = {
        background: 'blue50',
        leg: 'default',
        nose: 'nose.png', // Image fixe
        mouth: 'default',
        eyes: 'default',
        ears: 'default',
        hair: 'default',
        neck: 'default',
        accessories:''
    };

    // 1. Gestion de l'affichage des panneaux de style
    customizationButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Récupère le type du bouton cliqué (par exemple, 'hair', 'eyes', etc.)
            const category = button.id;

            console.log("Bouton cliqué:", category);

            // Cache tous les panneaux de style
            stylePanels.forEach(panel => panel.classList.add('hidden'));

            // Affiche uniquement le panneau qui correspond au bouton cliqué
            const targetPanel = document.getElementById(`styles-${category}`);
            const styleTitle = document.getElementById('styles-section');

            if (targetPanel) {
                styleTitle.classList.remove('hidden');
                targetPanel.classList.remove('hidden');
            }
        });
    });

    // 2. Gestion des changements de style via les boutons data-type/data-value
    stylesSection.forEach(button => {
        button.addEventListener('click', () => {
            const type = button.dataset.type;
            const value = button.dataset.value;

            const image = document.getElementById(`img-${type}`);

            if (image) {
                console.log("Style choisi", value);
                let nouvelleSrc = `alpaca-generator-assets/alpaca/${type}/${value}.png`;
                image.src = nouvelleSrc;
            } else {
                console.error(`Image avec l'ID 'img-${type} introuvable.`);
            }
        })
    })

    /*function stylesButtons(e) {
        const bouton = e.target.closest('button[data-type]');
        if (!bouton) return;

        const type = bouton.dataset.type;
        const value = bouton.dataset.value;

        // Cible de l'image
        const image = document.getElementById(`img-${type}`);
        if (!image) {
            console.error(`Image introuvable pour la partie "${type}"`);
            return;
        }

        // Mettre à jour la source
        const nouvelleSrc = `alpaca-generator-assets/alpaca/${type}/${value}.png`;
        image.src = nouvelleSrc;
    }*/
});
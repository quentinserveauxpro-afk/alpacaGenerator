// Récupération des éléments HTML
const previewSection = document.getElementById('preview-section');
const backgroundImg = document.getElementById('background');
const legImg = document.getElementById('leg');
const noseImg = document.getElementById('nose');
const mouthImg = document.getElementById('mouth');
const eyesImg = document.getElementById('eyes');
const earsImg = document.getElementById('ears');
const hairImg = document.getElementById('hair');
const neckImg = document.getElementById('neck');
const accessoriesImg = document.getElementById('accessories');
const randomBtn = document.getElementById('random');
const downloadBtn = document.getElementById('download');

// Récupération des catégories de personnalisation
const customizationButtons = document.querySelectorAll('#customization-buttons .category-btn');
const stylePanels = document.querySelectorAll('.style-panel');
const titlePanel = document.getElementById('styles-section');

// Vérifier que nous avons bien trouvé des boutons (pour le débogage)
console.log("Boutons trouvés :", customizationButtons.length);

// Pour chaque bouton de personnalisation, ajoute un écouteur d'évenements
customizationButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Récupère le type du bouton cliqué (par exemple, 'hair', 'eyes', etc.)
        const category = button.id;

        console.log("Bouton cliqué:", category);

        // Cache tous les panneaux de style
        stylePanels.forEach(panel => panel.classList.add('hidden'));

        // Affiche uniquement le panneau qui correspond au bouton cliqué
        const targetPanel = document.getElementById(`styles-${category}`);
        const titlePanel = document.getElementById('styles-section');
        if (targetPanel) {
            titlePanel.classList.remove('hidden');
            targetPanel.classList.remove('hidden');
        }
    });
});
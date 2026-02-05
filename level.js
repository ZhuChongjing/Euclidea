document.addEventListener('DOMContentLoaded', function() {
    const currentFilePath = window.location.pathname.split('/');
    const currentFileName = currentFilePath.pop().replace(/\.[^/.]+$/, '');
    
    const currentStar = currentFileName.endsWith('_L' ) ? 'L' :
                        currentFileName.endsWith('_E' ) ? 'E' :
                        currentFileName.endsWith('_LE') ? 'LE' :
                        currentFileName.endsWith('_V' ) ? 'V' : null;
    document.querySelectorAll('.star-item').forEach(item => {
        item.addEventListener('click', function() {
            const starType = this.getAttribute('data-star');
            const baseFileName = currentFileName.replace(/(_LE|_E|_L|_V)$/, '');
            if (currentStar !== starType) {
                window.location.href = `./${baseFileName}_${starType}.html`;
            }
        });
    });
    const starItem = document.querySelector(`.star-item[data-star="${currentStar}"]`);
    if (starItem) {
        starItem.classList.add('active');
    }

    document.querySelector('.solution-image').src = `/Euclidea/step-animation/${currentFileName}_0.png`;
    document.querySelectorAll('.tool-button').forEach(button => {
        button.addEventListener('click', function() {
            document.querySelectorAll('.tool-button').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const step = parseFloat(this.getAttribute('step'));
            const image = document.querySelector('.solution-image');
            
            if (image) {
                image.src = `/Euclidea/step-animation/${currentFileName}_${step}.png`;
            }
        });
    });

    // TODO: 补全关卡名称
    const levelName = {
        // Alpha
        'Angle60': ['1.1', 'Angle of 60°'],
        'PerpBisector': ['1.2', 'Perpendicular Bisector'],
        'Midpoint': ['1.3', 'Midpoint'],
        'CircleInSquare': ['1.4', 'Circle in Square'],
        'RhombusInRect': ['1.5', 'Rhombus in Rectangle'],
        'CircleCenter': ['1.6', 'Circle Center'],
        'SquareInCircle': ['1.7', 'Inscribed Square'],
        // Beta
        'BisectAngle': ['2.1', 'Angle Bisector'],
        'Incenter': ['2.2', 'Intersection of Angle Bisectors'],
    }
    for (const level in levelName) {
        if (currentFileName.startsWith(level)) {
            document.head.querySelector('title').textContent = `Euclidea 解题参考 - ${levelName[level][1]}`;
            document.querySelector('.level-title').textContent = levelName[level].join(' ');
        }
    }

    const levelsList = [
        'Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon',
        'Zeta', 'Eta', 'Theta', 'Iota', 'Kappa',
        'Lambda', 'Mu', 'Nu', 'Xi', 'Omicron'
    ];
    for (const pack of levelsList) {
        if (currentFilePath.includes(pack)) {
            document.querySelector('.button-back-icon').href = `/Euclidea/packs/${pack}.html`;
            document.querySelector('.icon').classList.add(`svg-${pack}`);
        }
    }
});

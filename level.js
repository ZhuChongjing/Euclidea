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
        'Angle30': ['2.3', 'Angle of 30°'],
        'DoubleAngle': ['2.4', 'Double Angle'],
        'CutRectangle': ['2.5', 'Cut Rectangle'],
        'DropPerp': ['2.6', 'Drop a Perpendicular'],
        'ErectPerp': ['2.7', 'Erect a Perpendicular'],
        'Tangent1': ['2.8', 'Tangent to Circle at Point'],
        'CircleTangentL': ['2.9', 'Circle Tangent to Line'],
        'CircleInRhombus': ['2.10', 'Circle in Rhombus'],
        // Gamma
        'ChordMidpoint': ['3.1', 'Chord Midpoint'],
        'ATrByOrthocenter': ['3.2', 'Triangle by Angle and Orthocenter'],
        'ATrByCircumcenter': ['3.3', 'Intersection of Perpendicular Bisectors'],
        'AEqualSegments1': ['3.4', 'Three equal segments - 1'],
        'CircleTangentPL': ['3.5', 'Circle through Point Tangent to Line'],
        'TrapezoidCut': ['3.6', 'Midpoints of Trapezoid Bases'],
        'Angle45': ['3.7', 'Angle of 45°'],
        'Lozenge': ['3.8', 'Lozenge'],
        'CentroidOfQuadrilateral': ['3.9', 'Centroid of Quadrilateral'],
        // Delta
        'CDoubleSeg': ['4.1', 'Double Segment'],
        'Angle60Drop': ['4.2', 'Angle of 60° - 2'],
        'EquilateralAboutCircle': ['4.3', 'Circumscribed Equilateral Triangle'],
        'EquilateralInCircle': ['4.4', 'Equilateral Triangle in Circle'],
        'Cut2Rectangles': ['4.5', 'Cut Two Rectangles'],
        'Sqrt2': ['4.6', 'Square Root of 2'],
        'Sqrt3': ['4.7', 'Square Root of 3'],
        'Angle15': ['4.8', 'Angle of 15°'],
        'SquareByOppMidpoints': ['4.9', 'Square by Opposite Midpoints'],
        'SquareByAdjMidpoints': ['4.10', 'Square by Adjacent Midpoints'],
        // Epsilon
        'Parallel': ['5.1', 'Parallel Line'],
        'Parallelogram3V': ['5.2', 'Parallelogram by Three Vertices'],
        'LineAlongPoints': ['5.3', 'Line Equidistant from Two Points - 1'],
        'LineBetweenPoints': ['5.4', 'Line Equidistant from Two Points - 2'],
        'Hash': ['5.5', 'Hash'],
        'ShiftAngle': ['5.6', 'Shift Angle'],
        'EquidistantParallel': ['5.7', 'Line Equidistant from Two Lines'],
        'SquareAboutCircle': ['5.8', 'Circumscribed Square'],
        'SquareInSquare': ['5.9', 'Square in Square'],
        'CircleInOutSquare': ['5.10', 'Circle Tangent to Square Side'],
        'HexagonBySide': ['5.11', 'Regular Hexagon'],
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

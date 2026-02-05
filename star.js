document.addEventListener('DOMContentLoaded', function() {
    /* 显示该关总星数 */
    const packsStar = {
        'Alpha': '36',
        'Beta': '38',
        'Gamma': '30',
        'Delta': '34',
        'Epsilon': '40',
        'Zeta': '41',
        'Eta': '37',
        'Theta': '27',
        'Iota': '32',
        'Kappa': '?',
        'Lambda': '?',
        'Mu': '?',
        'Nu': '?',
        'Xi': '?',
        'Omicron': '?'
    }
    const currentFilePath = window.location.pathname;
    for (pack of currentFilePath.split('/')) {
        if (pack.endsWith('.html')) { pack = pack.slice(0, -5); }
        if (packsStar.hasOwnProperty(pack)) {
            document.querySelector('.count-inner-bold').textContent = packsStar[pack];
            document.querySelector('.count-inner').textContent = '/' + packsStar[pack];
        }
    }
});
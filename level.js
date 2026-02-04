document.addEventListener('DOMContentLoaded', function() {
    const currentFileName = window.location.pathname.split('/').pop().replace(/\.[^/.]+$/, '');
    
    /* 激活当前页面对应的星星按钮 */
    const currentStar = currentFileName.endsWith('_L' ) ? 'L' :
                        currentFileName.endsWith('_E' ) ? 'E' :
                        currentFileName.endsWith('_LE') ? 'LE' :
                        currentFileName.endsWith('_V' ) ? 'V' : null;
    const starItem = document.querySelector(`.star-item[data-star="${currentStar}"]`);
    if (starItem) {
        starItem.classList.add('active');
    }

    /* 初始化星星导航功能 */
    document.querySelectorAll('.star-item').forEach(item => {
        item.addEventListener('click', function() {
            const starType = this.getAttribute('data-star');
            const baseFileName = currentFileName.replace(/(_LE|_E|_L|_V)$/, '');
            window.location.href = `./${baseFileName}_${starType}.html`;
        });
    });

    /* 初始化工具按钮功能 */
    document.querySelectorAll('.tool-button').forEach(button => {
        button.addEventListener('click', function() {
            // 移除所有激活状态
            document.querySelectorAll('.tool-button').forEach(b => b.classList.remove('active'));
            
            // 添加当前激活状态
            this.classList.add('active');
            
            const step = parseFloat(this.getAttribute('step'));
            const image = document.querySelector('.solution-image');
            
            if (image) {
                // 构建新的图片路径
                const currentFileName = window.location.pathname.split('/').pop().replace(/\.[^/.]+$/, '');
                console.log(`/Euclidea/step-animation/${currentFileName}_${step}.png`);
                image.src = `/Euclidea/step-animation/${currentFileName}_${step}.png`;
            }
        });
    });
});

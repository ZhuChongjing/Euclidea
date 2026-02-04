// level.js - 关卡页面通用功能

// 所有事件绑定放在DOMContentLoaded中确保DOM完全加载
document.addEventListener('DOMContentLoaded', function() {
    // 星星导航点击事件 - 通用处理
    initStarNavigation();
    
    // 工具按钮点击事件 - 视频直接跳转
    initToolButtons();
});

/**
 * 初始化星星导航功能
 */
function initStarNavigation() {
    document.querySelectorAll('.star-item').forEach(item => {
        item.addEventListener('click', function() {
            // 移除所有激活状态
            document.querySelectorAll('.star-item').forEach(i => i.classList.remove('active'));
            document.querySelectorAll('.step-content').forEach(c => c.classList.remove('active'));
            
            // 获取当前点击的星星类型
            const starType = this.getAttribute('data-star');
            
            // 获取当前页面的文件名（不带扩展名）
            const currentFileName = window.location.pathname.split('/').pop().replace(/\.[^/.]+$/, '');
            
            // 检查当前是否在V星页面
            const isVPage = currentFileName.endsWith('_V');
            
            // 处理从V星页面跳转到L、E或LE页面的逻辑
            if (isVPage && (starType === 'L' || starType === 'E' || starType === 'EL')) {
                // 获取基础文件名（去掉_V后缀）- 使用正则表达式对象
                const baseFileName = currentFileName.replace(/_V$/, '');
                
                // 根据点击的星星类型构建目标文件名
                let targetFileName;
                if (starType === 'EL') {
                    targetFileName = baseFileName + '_LE.html';
                } else {
                    targetFileName = baseFileName + '_' + starType + '.html';
                }
                
                // 跳转到对应的解法页面
                window.location.href = './' + targetFileName;
                return;
            }

            
            // 处理非V星页面跳转到V星页面的逻辑
            if (starType === 'V') {
                // 构建V星页面的文件名（替换_LE等后缀为_V）
                const vFileName = currentFileName.replace(/(_LE|_E|_L)$/, '') + '_V.html';
                // 跳转到V星解法页面
                window.location.href = './' + vFileName;
                return;
            }
            
            // 处理特殊情况：LE星
            if (starType === 'LE') {
                // 激活LE星按钮
                document.querySelector('.star-item[data-star="LE"]').classList.add('active');
                
                // 如果需要同时激活，也激活L星
                if (this.getAttribute('data-combined') === 'true') {
                    document.querySelector('.star-item[data-star="L"]').classList.add('active');
                }
                
                // 显示EL的解法步骤
                const leStepContent = document.querySelector('.step-content[data-star="LE"]');
                if (leStepContent) {
                    leStepContent.classList.add('active');
                }
            } else if (starType === 'L' || starType === 'E') {
                // 处理其他星星类型
                this.classList.add('active');
                const stepContent = document.querySelector(`.step-content[data-star="${starType}"]`);
                if (stepContent) {
                    stepContent.classList.add('active');
                }
            }
        });
    });
}

/**
 * 初始化工具按钮功能
 */
function initToolButtons() {
    document.querySelectorAll('.tool-button').forEach(button => {
        button.addEventListener('click', function() {
            // 移除所有激活状态
            document.querySelectorAll('.tool-button').forEach(b => b.classList.remove('active'));
            
            // 添加当前激活状态
            this.classList.add('active');
            
            const time = parseFloat(this.getAttribute('data-time'));
            const video = document.querySelector('.solution-video');
            
            if (video) {
                // 直接跳转到目标时间
                video.currentTime = time;
            }
        });
    });
}

/**
 * 默认激活指定的星星按钮
 * @param {string} starType - 要激活的星星类型
 * @param {boolean} alsoActivateL - 是否同时激活L星
 */
function activateDefaultStar(starType, alsoActivateL = false) {
    const starItem = document.querySelector(`.star-item[data-star="${starType}"]`);
    if (starItem) {
        starItem.classList.add('active');
    }
    
    if (alsoActivateL) {
        const lStarItem = document.querySelector('.star-item[data-star="L"]');
        if (lStarItem) {
            lStarItem.classList.add('active');
        }
    }
}

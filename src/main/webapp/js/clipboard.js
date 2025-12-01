/**
 * 클립보드 복사 기능
 * @param {string} contentId - 복사할 텍스트가 있는 요소의 ID
 * @param {string} buttonId - 복사 버튼의 ID
 */
function copyToClipboard(contentId, buttonId) {
    const contentElement = document.getElementById(contentId);
    const buttonElement = document.getElementById(buttonId);
    
    if (!contentElement || !buttonElement) {
        console.error('요소를 찾을 수 없습니다.');
        return;
    }
    
    const content = contentElement.textContent || contentElement.value;
    
    // 클립보드에 복사
    navigator.clipboard.writeText(content).then(function() {
        // 복사 성공 시 색상 변경 피드백
        buttonElement.classList.remove('text-gray-600', 'hover:text-gray-800');
        buttonElement.classList.add('text-yellow-600', 'bg-yellow-50');

        setTimeout(function() {
            buttonElement.classList.remove('text-yellow-600', 'bg-yellow-50');
            buttonElement.classList.add('text-gray-600', 'hover:text-gray-800');
        }, 500);
    }).catch(function(err) {
        // 복사 실패 시 대체 방법 사용
        const textArea = document.createElement('textarea');
        textArea.value = content;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.select();
        
        try {
            document.execCommand('copy');
            // 복사 성공 시 색상 변경 피드백
            buttonElement.classList.remove('text-gray-600', 'hover:text-gray-800');
            buttonElement.classList.add('text-yellow-600', 'bg-yellow-50');
            
            setTimeout(function() {
                buttonElement.classList.remove('text-yellow-600', 'bg-yellow-50');
                buttonElement.classList.add('text-gray-600', 'hover:text-gray-800');
            }, 500);
        } catch (err) {
            alert('복사에 실패했습니다. 다시 시도해주세요.');
        }
        
        document.body.removeChild(textArea);
    });
}

/**
 * 프롬프트 내용을 클립보드에 복사 (detail.jsp 전용)
 */
function copyPromptToClipboard() {
    copyToClipboard('prompt-content', 'copy-prompt-btn');
}



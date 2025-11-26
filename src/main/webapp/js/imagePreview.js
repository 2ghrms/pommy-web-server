/**
 * 이미지 미리보기 기능
 * @param {HTMLInputElement} input - 파일 입력 요소
 * @param {Object} options - 옵션 객체
 * @param {string} options.previewContainerId - 미리보기 컨테이너 ID (기본값: 'new-image-preview')
 * @param {string} options.previewImgId - 미리보기 이미지 ID (기본값: 'preview-img')
 * @param {string} options.placeholderId - 플레이스홀더 ID (기본값: 'no-image-placeholder')
 * @param {string} options.currentImageId - 현재 이미지 ID (선택사항, edit.jsp에서 사용)
 */
function previewImage(input, options) {
    options = options || {};
    const previewContainerId = options.previewContainerId || 'new-image-preview';
    const previewImgId = options.previewImgId || 'preview-img';
    const placeholderId = options.placeholderId || 'no-image-placeholder';
    const currentImageId = options.currentImageId;
    
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const previewContainer = document.getElementById(previewContainerId);
            const previewImg = document.getElementById(previewImgId);
            const placeholder = document.getElementById(placeholderId);
            const currentImage = currentImageId ? document.getElementById(currentImageId) : null;
            
            if (!previewContainer || !previewImg) {
                console.error('미리보기 요소를 찾을 수 없습니다.');
                return;
            }
            
            previewImg.src = e.target.result;
            previewContainer.classList.remove('hidden');
            
            // 기존 이미지나 플레이스홀더 숨기기
            if (currentImage && currentImage.parentElement) {
                currentImage.parentElement.style.display = 'none';
            }
            if (placeholder) {
                placeholder.style.display = 'none';
            }
        };
        reader.readAsDataURL(input.files[0]);
    }
}

/**
 * 이미지 미리보기 초기화
 * @param {Object} options - 옵션 객체
 * @param {string} options.previewContainerId - 미리보기 컨테이너 ID (기본값: 'new-image-preview')
 * @param {string} options.fileInputId - 파일 입력 요소 ID (기본값: 'image')
 * @param {string} options.placeholderId - 플레이스홀더 ID (기본값: 'no-image-placeholder')
 * @param {string} options.currentImageId - 현재 이미지 ID (선택사항, edit.jsp에서 사용)
 */
function clearImagePreview(options) {
    options = options || {};
    const previewContainerId = options.previewContainerId || 'new-image-preview';
    const fileInputId = options.fileInputId || 'image';
    const placeholderId = options.placeholderId || 'no-image-placeholder';
    const currentImageId = options.currentImageId;
    
    const previewContainer = document.getElementById(previewContainerId);
    const fileInput = document.getElementById(fileInputId);
    const placeholder = document.getElementById(placeholderId);
    const currentImage = currentImageId ? document.getElementById(currentImageId) : null;
    
    if (previewContainer) {
        previewContainer.classList.add('hidden');
    }
    if (fileInput) {
        fileInput.value = '';
    }
    
    // 기존 이미지나 플레이스홀더 다시 표시
    if (currentImage && currentImage.parentElement) {
        currentImage.parentElement.style.display = 'block';
    }
    if (placeholder) {
        placeholder.style.display = 'flex';
    }
}


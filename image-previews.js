(() => {
  const originalImagePattern = /\.(?:jpe?g|png)$/i;

  const previewPath = (source, width) => {
    const cleanSource = source.split(/[?#]/, 1)[0];
    const fileNameStart = cleanSource.lastIndexOf('/') + 1;
    const extensionStart = cleanSource.lastIndexOf('.');

    if (extensionStart <= fileNameStart || !originalImagePattern.test(cleanSource)) return null;

    const directory = cleanSource.slice(0, fileNameStart);
    const fileStem = cleanSource.slice(fileNameStart, extensionStart);
    return `${directory}响应式预览/${fileStem}-${width}.webp`;
  };

  const openOriginal = source => {
    const originalWindow = window.open(encodeURI(source), '_blank', 'noopener,noreferrer');
    if (originalWindow) originalWindow.opener = null;
  };

  const enhance = (image, source, options = {}) => {
    const originalSource = source?.trim();
    const smallPreview = previewPath(originalSource || '', 480);
    const mediumPreview = previewPath(originalSource || '', 960);
    const largePreview = previewPath(originalSource || '', 1600);

    if (!originalSource || !smallPreview || !mediumPreview || !largePreview) return false;

    let usingFallback = false;
    image.dataset.originalSrc = originalSource;
    image.loading = options.loading || image.loading || 'lazy';
    image.decoding = 'async';
    image.addEventListener('error', () => {
      if (usingFallback) return;
      usingFallback = true;
      image.removeAttribute('srcset');
      image.removeAttribute('sizes');
      image.src = originalSource;
    });

    image.src = smallPreview;
    image.srcset = `${encodeURI(smallPreview)} 480w, ${encodeURI(mediumPreview)} 960w, ${encodeURI(largePreview)} 1600w`;
    image.sizes = options.sizes || '100vw';

    if (options.clickToOriginal) {
      const description = options.originalLabel || image.alt || '图片';
      image.classList.add('image-preview--original-link');
      image.tabIndex = 0;
      image.setAttribute('role', 'link');
      image.setAttribute('aria-label', `${description}，点击查看原图`);

      image.addEventListener('click', event => {
        event.preventDefault();
        event.stopPropagation();
        openOriginal(originalSource);
      });
      image.addEventListener('keydown', event => {
        if (event.key !== 'Enter' && event.key !== ' ') return;
        event.preventDefault();
        event.stopPropagation();
        openOriginal(originalSource);
      });
    }

    return true;
  };

  window.siteImagePreviews = { enhance, previewPath };
})();

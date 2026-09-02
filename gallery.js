const usedImageNumbers = new Set([14, 22, 29, 41]);
const galleryGrid = document.querySelector('#gallery-grid');
const imageDirectory = '资源文件/市区 遵义会议会址/';
const thumbnailDirectory = `${imageDirectory}缩略图/`;

for (let imageNumber = 1; imageNumber <= 52; imageNumber += 1) {
  if (usedImageNumbers.has(imageNumber)) continue;

  const fileName = imageNumber === 43
    ? '市区 遵义会议会址43 参会人员浮雕.jpg'
    : `市区 遵义会议会址${imageNumber}.jpg`;
  const imagePath = `${imageDirectory}${fileName}`;
  const smallThumbnail = `${thumbnailDirectory}gallery-${imageNumber}-480.webp`;
  const largeThumbnail = `${thumbnailDirectory}gallery-${imageNumber}-960.webp`;

  const figure = document.createElement('figure');
  figure.className = 'gallery-item';

  const link = document.createElement('a');
  link.href = imagePath;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.setAttribute('aria-label', `在新标签页查看第 ${imageNumber} 张图片原图`);

  const image = document.createElement('img');
  image.src = smallThumbnail;
  image.srcset = [
    `${encodeURI(smallThumbnail)} 480w`,
    `${encodeURI(largeThumbnail)} 960w`
  ].join(', ');
  image.sizes = '(max-width: 680px) calc(100vw - 32px), (max-width: 820px) calc((100vw - 70px) / 2), 365px';
  image.alt = imageNumber === 43
    ? '遵义会议参会人员浮雕'
    : `遵义会议纪念馆参观图片 ${imageNumber}`;
  image.loading = 'lazy';
  image.decoding = 'async';

  const caption = document.createElement('figcaption');
  caption.textContent = imageNumber === 43
    ? '参会人员浮雕'
    : `馆内图片 ${String(imageNumber).padStart(2, '0')}`;

  link.append(image);
  figure.append(link, caption);
  galleryGrid.append(figure);
}

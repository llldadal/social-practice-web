const numberedImages = (directory, prefix, count, excluded = [], specialNames = {}) => {
  const excludedNumbers = new Set(excluded);

  return Array.from({ length: count }, (_, index) => index + 1)
    .filter(imageNumber => !excludedNumbers.has(imageNumber))
    .map(imageNumber => ({
      src: `${directory}${specialNames[imageNumber] || `${prefix}${imageNumber}.jpg`}`,
      caption: `参观图片 ${String(imageNumber).padStart(2, '0')}`
    }));
};

const namedImages = (directory, fileNames) => fileNames.map(fileName => ({
  src: `${directory}${fileName}`,
  caption: fileName.replace(/\.jpg(?:\.jpeg)?$/i, '').replace(/^更多图片\s*/u, '')
}));

const galleryData = {
  one: {
    title: '遵义会议纪念馆',
    hero: '资源文件/遵义会议会址/遵义会议纪念馆外部图片.jpg',
    images: numberedImages(
      '资源文件/市区 遵义会议会址/',
      '市区 遵义会议会址',
      68,
      [14, 22, 23, 24, 29, 41, 47, 56, 57, 58],
      { 43: '市区 遵义会议会址43 参会人员浮雕.jpg' }
    )
  },
  two: {
    title: '四渡赤水纪念馆',
    hero: '资源文件/土城 红色建筑群/四渡赤水纪念馆.jpg',
    images: numberedImages('资源文件/土城 红色建筑群/', '土城 红色建筑群', 17)
  },
  three: {
    title: '青杠坡战斗遗址',
    hero: '资源文件/土城 青杠坡遗址/土城 青杠坡遗址6.jpg',
    images: [
      ...numberedImages('资源文件/土城 青杠坡遗址/', '土城 青杠坡遗址', 6, [1, 2, 4, 5, 6]),
      ...namedImages('资源文件/茅台镇 四渡赤水纪念园/补充图片/青杠坡/', [
        '烈士墓.jpg',
        '浮雕 雕像.jpg',
        '更多图片 红军医院内.jpg',
        '更多图片 红军医院内部2.jpg',
        '更多图片 红军医院内3.jpg',
        '更多图片 红军医院内4.jpg'
      ])
    ]
  },
  four: {
    title: '娄山关',
    hero: '资源文件/市区 娄山关/市区 娄山关26.jpg',
    images: [
      ...numberedImages('资源文件/市区 娄山关/', '市区 娄山关', 48, [1, 4, 13, 18, 21, 24, 26, 28]),
      ...namedImages('资源文件/市区 娄山关/', [
        '娄山关.jpg',
        '大尖山.jpg',
        '雁鸣塔.jpg',
        '长空桥.jpg',
        '纪念林1.jpg',
        '纪念林2.jpg',
        '更多图片陈列馆1.jpg',
        '更多图片 陈列馆内.jpg',
        '更多图片 陈列馆内2.jpg',
        '更多图片 陈列馆3.jpg',
        '更多图片 陈列馆4.jpg'
      ])
    ]
  },
  five: {
    title: '四渡赤水纪念园',
    hero: '资源文件/茅台镇 四渡赤水纪念园/茅台镇 四渡赤水纪念园12.jpg',
    images: [
      ...numberedImages('资源文件/茅台镇 四渡赤水纪念园/', '茅台镇 四渡赤水纪念园', 12, [12]),
      ...namedImages('资源文件/茅台镇 四渡赤水纪念园/', [
        '陈列馆外.jpg',
        '马灯照亮前行路.jpg',
        '纪念塔周围.jpg',
        '纪念塔周围2.jpg',
        '红军桥.jpg',
        '浮雕2.jpg'
      ])
    ]
  }
};

const requestedSpotKey = new URLSearchParams(window.location.search).get('spot');
const spotKey = Object.prototype.hasOwnProperty.call(galleryData, requestedSpotKey)
  ? requestedSpotKey
  : 'one';
const gallery = galleryData[spotKey];

document.title = `更多图片 · ${gallery.title}`;
document.querySelector('.gallery-back').href = `detail.html?spot=${spotKey}`;
document.querySelector('.gallery-back').textContent = `← 返回${gallery.title}`;
document.querySelector('#gallery-title').textContent = `${gallery.title} · 更多图片`;
document.querySelector('#gallery-grid-title').textContent = `${gallery.title}图片集`;
document.querySelector('#gallery-footer').textContent = `社会实践成果展示 · ${gallery.title}图片集`;
document.querySelector('.gallery-hero').style.setProperty('--gallery-hero-image', `url("${gallery.hero}")`);

const galleryGrid = document.querySelector('#gallery-grid');

gallery.images.forEach(({ src, caption }, index) => {
  const figure = document.createElement('figure');
  figure.className = 'gallery-item';

  const link = document.createElement('a');
  link.href = src;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.setAttribute('aria-label', `在新标签页查看${gallery.title}第 ${index + 1} 张图片原图`);

  const image = document.createElement('img');
  image.src = src;
  image.alt = `${gallery.title}图片：${caption}`;
  image.loading = 'lazy';
  image.decoding = 'async';

  const imageCaption = document.createElement('figcaption');
  imageCaption.textContent = caption;

  link.append(image);
  figure.append(link, imageCaption);
  galleryGrid.append(figure);
});

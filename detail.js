const spotData = {
  one: {
    title: '遵义会议纪念馆',
    image: '资源文件/遵义会议会址/遵义会议纪念馆外部图片.jpg',
    // 可填写一张或多张景点专属 CSS；它们会在 detail.css 之后加载。
    contentStylesheets: ['spot-one.css'],
    summary: '从一楼大厅到二楼长征主题特展，沿时间线读懂遵义会议的伟大转折与长征精神。',
    introduction: '会址及纪念馆通过历史图片、文物、油画、雕塑、幻影成像与半景画等形式，串联长征背景、遵义会议、四渡赤水及后续长征历程。馆内路线标识明确，适合按时间线参观。',
    hours: '馆区共两层，建议预留充足时间，依次参观一楼大厅、左侧展厅、遵义会议展区、四渡赤水展区和二楼长征主题展。',
    traffic: '文案未提供交通信息；可结合实际出行安排，将附近红色遗址、故居一并纳入参观路线。',
    tips: '上二楼后可先参观右侧展馆；参观途中若感到疲劳，可在二楼回廊座椅处休息。',
    // route 可以直接编写 HTML。每个景点都可以使用不同的标签、图片和排版类。
    route: `
    <div class="route-story__text">
      <div class="memorial-route">
        <header class="memorial-route__intro">
          <p class="memorial-route__eyebrow">遵义会议会址</p>
          <h3 class="memorial-route__section-title">一、入馆注意事项</h3>
          <p>建议从一楼大厅开始，按馆内路线标识依次参观各主题展区，再前往二楼长征主题展。</p>
          <aside class="memorial-route__tips" aria-label="入馆提示">
            <strong>Tips:</strong>
            <ol>
            <li>从一楼大厅建立整体印象，再沿时间线进入各主题展区。</li>
            <li>参观途中若感到疲劳，可在二楼回廊座椅处休息。</li>
            </ol>
          </aside>
        </header>

        <section id="游玩路线简介" class="memorial-route__body">
          <header class="memorial-route__overview">
            <h3 class="memorial-route__section-title">二、游玩路线简介</h3>
            <p>馆内参观路线指引清晰，建议按照“一楼大厅—一楼左侧展厅—遵义会议展区—四渡赤水展区—二楼长征主题展”的顺序游览，既不容易漏看重点，也便于沿时间线理解历史。</p>
          </header>

          <figure class="memorial-route__guide-sign">
            <img src="资源文件/市区 遵义会议会址/参观指引.jpg" alt="场馆地面的参观路线、出口和卫生间发光指引">
            <figcaption>
              <strong>跟着馆内指引前进</strong>
              <span>地面设有醒目的“参观路线”箭头，并同步标注出口与卫生间方向。</span>
            </figcaption>
          </figure>

          <nav class="memorial-route__nav" aria-label="遵义会议纪念馆游览路线导航">
            <a href="#memorial-stop-one"><span>01</span>初识主题</a>
            <a href="#memorial-stop-two"><span>02</span>战略转折</a>
            <a href="#memorial-stop-three"><span>03</span>遵义会议</a>
            <a href="#memorial-stop-four"><span>04</span>遵义精神</a>
            <a href="#memorial-stop-five"><span>05</span>四渡赤水</a>
            <a href="#memorial-stop-six"><span>06</span>长征历程</a>
            <a href="#memorial-stop-seven"><span>07</span>主题特展</a>
          </nav>

          <div class="memorial-timeline">
            <article id="memorial-stop-one" class="memorial-stage">
              <div class="memorial-stage__marker" aria-hidden="true">01</div>
              <div class="memorial-stage__content">
                <div class="memorial-stage__heading">
                  <p class="memorial-stage__floor">一楼 · 路线起点</p>
                  <h4>一楼大厅丨初识主题</h4>
                  <p>进入大厅，20位参会人员雕塑屹立展厅中央，周围的墙上刻着会址建筑浮雕和起义浮雕。“遵义会议伟大转折”提字也位于这一带，适合作为参观起点和首个拍照点。</p>
                </div>
                <figure class="memorial-photo memorial-photo--wide">
                  <img src="资源文件/市区 遵义会议会址/市区 遵义会议会址22.jpg" alt="一楼大厅展陈图片（待补充）">
                  <figcaption>从大厅建立整体印象，再沿馆内时间线进入各主题展区。</figcaption>
                </figure>
              </div>
            </article>

            <article id="memorial-stop-two" class="memorial-stage">
              <div class="memorial-stage__marker" aria-hidden="true">02</div>
              <div class="memorial-stage__content">
                <div class="memorial-stage__heading">
                  <p class="memorial-stage__floor">一楼 · 左侧展厅</p>
                  <h4>战略转折丨开始长征</h4>
                  <p>从大厅左侧进入第一个展厅，阅读前言和长征背景，结合五次反“围剿”形势图理解长征战略意义；随后参观突破乌江展区，拐角处，投影结合油画实物舟伐重现当时战斗情况，结合照片、旧物、文字理解长征形势不容乐观，红军急需正确战略指引的现实要求。</p>
                </div>
                <figure class="memorial-photo memorial-photo--wide">
                  <img src="资源文件/市区 遵义会议会址/市区 遵义会议会址24.jpg" alt="长征背景与突破乌江展区图片（待补充）">
                  <figcaption>结合形势图和历史资料，理解遵义会议召开的时代背景。</figcaption>
                </figure>
              </div>
            </article>

            <article id="memorial-stop-three" class="memorial-stage">
              <div class="memorial-stage__marker" aria-hidden="true">03</div>
              <div class="memorial-stage__content">
                <div class="memorial-stage__heading">
                  <p class="memorial-stage__floor">一楼 · 核心展区</p>
                  <h4>遵义会议丨伟大转折</h4>
                  <p>进入遵义会议召开展区后，可先观看右侧幻影成像，再结合会议油画、参会人员图了解会议场景，重点学习会上不同参会人员的主张和会议做出的重要决策。展览截取了大量回忆录、讲话等史料，帮助游客更好领悟遵义会议的重大意义。</p>
                </div>
                <figure class="memorial-photo memorial-photo--wide">
                  <img src="资源文件/市区 遵义会议会址/市区 遵义会议会址29.jpg" alt="遵义会议召开展区图片（待补充）">
                  <figcaption>从会议场景、主要报告与历史评价理解“伟大转折”。</figcaption>
                </figure>
              </div>
            </article>

            <article id="memorial-stop-four" class="memorial-stage">
              <div class="memorial-stage__marker" aria-hidden="true">04</div>
              <div class="memorial-stage__content">
                <div class="memorial-stage__heading">
                  <p class="memorial-stage__floor">一楼 · 精神展区</p>
                  <h4>遵义精神丨智慧永存</h4>
                  <p>该展区不仅介绍了红军将士在危急存亡时刻所展现出的领袖气魄和英雄气概，还保存了大量红军过遵义宣传所用木板、标语等，生动展现了军民一家亲。</p>
                </div>
                <figure class="memorial-photo memorial-photo--wide">
                  <img src="资源文件/市区 遵义会议会址/市区 遵义会议会址23.jpg" alt="遵义精神与木板标语展区图片（待补充）">
                  <figcaption>“遵义会议伟大转折”标语。</figcaption>
                </figure>
              </div>
            </article>

            <article id="memorial-stop-five" class="memorial-stage">
              <div class="memorial-stage__marker" aria-hidden="true">05</div>
              <div class="memorial-stage__content">
                <div class="memorial-stage__heading">
                  <p class="memorial-stage__floor">一楼 · 战役展区</p>
                  <h4>四渡赤水丨神来之笔</h4>
                  <p>从青杠坡战斗开始，到飞渡乌江跳出包围圈结束，本展区内，颜色分明的动态敌我运动图有助于直观展示四渡赤水全过程，理解毛主席用兵之“奇”。此外，场馆内设有娄山关半景画区域，让游客身临其境地感受娄山关之“险”。</p>
                </div>
                <figure class="memorial-photo memorial-photo--wide">
                  <img src="资源文件/市区 遵义会议会址/市区 遵义会议会址14.jpg" alt="四渡赤水形势图或娄山关半景画图片（待补充）">
                  <figcaption>沿形势图中的灯带辨认各方行动顺序和行军方向。（图片不匹配）</figcaption>
                </figure>
              </div>
            </article>

            <article id="memorial-stop-six" class="memorial-stage">
              <div class="memorial-stage__marker" aria-hidden="true">06</div>
              <div class="memorial-stage__content">
                <div class="memorial-stage__heading">
                  <p class="memorial-stage__floor">二楼 · 右侧展馆</p>
                  <h4>二楼展馆丨回望长征历程</h4>
                  <p>上二楼后先参观右侧展馆，依次了解飞夺泸定桥、翻雪山过草地。胜利会师等相关历史。参观途中若感到疲劳，可在二楼回廊座椅处休息。</p>
                </div>
                <figure class="memorial-photo memorial-photo--wide">
                  <img src="资源文件/市区 遵义会议会址/市区 遵义会议会址47.jpg" alt="二楼长征主题展陈图片（待补充）">
                  <figcaption>从铜像和油画继续回望长征途中具有代表性的历史片段。</figcaption>
                </figure>
              </div>
            </article>

            <article id="memorial-stop-seven" class="memorial-stage">
              <div class="memorial-stage__marker" aria-hidden="true">07</div>
              <div class="memorial-stage__content">
                <div class="memorial-stage__heading">
                  <p class="memorial-stage__floor">二楼 · 路线终点</p>
                  <h4>长征主题特展丨多视角下的二万五千里</h4>
                  <p>最后参观长征主题特展。该展览重点介绍长征途中的重大事件，与前面遵义会议固定展览不同，该展区内加入大量红军将士自述史料和英雄事迹，多视角补齐二万五千里长征的全貌。</p>
                </div>
                <figure class="memorial-photo memorial-photo--wide">
                  <img src="资源文件/市区 遵义会议会址/市区 遵义会议会址41.jpg" alt="长征主题特展或结语油画图片（待补充）">
                  <figcaption>在长征精神板块与大型油画前完成整条参观路线。</figcaption>
                </figure>
              </div>
            </article>
          </div>
        </section>
      </div>

      <h3 class="memorial-route__section-title">三、更多详情链接</h3>
      <a href="https://baike.baidu.com/item/%E9%81%B5%E4%B9%89%E4%BC%9A%E8%AE%AE%E7%BA%AA%E5%BF%B5%E9%A6%86/1015399" target="_blank">百度百科 →</a>
      <a class="more-images-link" href="gallery.html">更多图片 →</a>
    </div>
    `
  },
  two: {
    title: '四渡赤水纪念馆',
    image: '资源文件/土城 红色建筑群/四渡赤水纪念馆.jpg',
    // 可填写一张或多张景点专属 CSS；它们会在 detail.css 之后加载。
    contentStylesheets: ['spot-two.css'],
    summary: '沿一渡、二渡、三渡、四渡赤水的时间线，读懂中央红军如何审时度势、转危为安。',
    introduction: '四渡赤水是中央红军长征中最惊心动魄、最精彩绝伦的军事行动，是毛泽东军事生涯的“得意之笔”，也是中国革命走向胜利的重要里程碑。',
    hours: '文案未提供开放时间；建议提前查询场馆当日安排。',
    traffic: '可与土城、青杠坡战斗遗址等点位结合实际行程安排同天游览。',
    tips: '建议按一渡、二渡、三渡、四渡的时间顺序参观，并结合行军路线图、沙盘和战斗资料理解敌我态势变化。',
    route: `
      <div class="crossing-route">
        <header class="crossing-route__intro">
          <p class="crossing-route__eyebrow">四渡赤水纪念馆</p>
          <h3 class="crossing-route__section-title">一、游玩路线推荐</h3>
          <p>建议按照“一渡赤水—二渡赤水—三渡赤水—四渡赤水”的顺序参观，结合行军路线图、沙盘和战斗资料，理解中央红军如何根据敌情主动调整、转危为安。</p>
        </header>

        <nav class="crossing-route__nav" aria-label="四渡赤水时间线导航">
          <a href="#crossing-one"><span>01</span>一渡赤水</a>
          <a href="#crossing-two"><span>02</span>二渡赤水</a>
          <a href="#crossing-three"><span>03</span>三渡赤水</a>
          <a href="#crossing-four"><span>04</span>四渡赤水</a>
          <a href="#crossing-five"><span>05</span>结语</a>
        </nav>

        <div class="crossing-timeline">
          <article id="crossing-one" class="crossing-stage">
            <div class="crossing-stage__marker" aria-hidden="true">01</div>
            <div class="crossing-stage__content">
              <div class="crossing-stage__heading">
                <p class="crossing-stage__date">1935年1月29日</p>
                <h4>一渡赤水</h4>
                <p>遵义会议后，中央红军原定从川南北渡长江，与红四方面军汇合。1月28日，青杠坡战斗因敌情判断有误、川军增援不断而未能达到预期，红军继续作战，面临被合围的风险。中共中央和中央军委果断放弃原计划，主动撤出战斗。1月29日中央红军分别从土城浑溪口、蔡家沱和元厚等渡口第一次渡过赤水河，转向川南古蔺、叙永一带，随后向云南扎西地区集结。</p>
                <p>一渡赤水不是战略上的既定，而是在被敌军围追堵截事关生死存亡的被动局面下，审时度势、保存革命有生力量的主动之选。参观这一部分，除行军路线外，可重点关注青杠坡战斗场景复原、浮桥体验装置等，身临其境体会“因时而变”。</p>
              </div>
              <div class="crossing-gallery crossing-gallery--one">
                <figure class="crossing-photo crossing-photo--wide">
                  <img src="资源文件/土城 红色建筑群/补充图片/四渡赤水纪念馆/一渡简介.jpg" alt="一渡赤水前的战斗场景展陈">
                  <figcaption>青杠坡战斗复原场景：一渡赤水前局势骤然变化的关键节点。</figcaption>
                </figure>
                <figure class="crossing-photo">
                  <img src="资源文件/土城 红色建筑群/补充图片/四渡赤水纪念馆/一渡路线.jpg" alt="一渡赤水行军路线图">
                  <figcaption>一渡赤水行军图：红军从土城、元厚一带西渡赤水河。</figcaption>
                </figure>
                <figure class="crossing-photo">
                  <img src="资源文件/土城 红色建筑群/补充图片/四渡赤水纪念馆/渡河油画.jpg" alt="红军渡河主题油画">
                  <figcaption>浮桥与渡河展项：再现红军迅速架桥、分路转移的历史场景。</figcaption>
                </figure>
              </div>
            </div>
          </article>

          <article id="crossing-two" class="crossing-stage">
            <div class="crossing-stage__marker" aria-hidden="true">02</div>
            <div class="crossing-stage__content">
              <div class="crossing-stage__heading">
                <p class="crossing-stage__date">1935年2月18日至21日</p>
                <h4>二渡赤水</h4>
                <p>我军一渡赤水后，国民党主力被吸引至川滇边境，黔北兵力相对空虚。中央红军在扎西地区完成整编后，挥师东进，于2月18日至21日从太平渡、二郎滩、九溪口、淋滩等渡口第二次渡过赤水河，重新进入黔北。为站稳脚跟，红军直取桐梓，激战娄山关，再占遵义城，于28日取得遵义大捷，取得长征以来最大的一次胜利。</p>
                <p>二渡赤水体现“避实击虚”的智慧，参观时，可结合沙盘比较渡河前后的敌我位置加以体会。此外，可结合场馆讲解和娄山关“易守难攻”的地形图，理解毛主席在娄山关大捷后提笔写下“雄关漫道真如铁，而今迈步从头越”的喜悦之情。</p>
              </div>
              <div class="crossing-gallery crossing-gallery--two">
                <figure class="crossing-photo">
                  <img src="资源文件/土城 红色建筑群/补充图片/四渡赤水纪念馆/二渡路线.jpg" alt="二渡赤水路线图">
                  <figcaption>二渡赤水路线图：太平渡、二郎滩、九溪口等渡口共同展开渡河行动。</figcaption>
                </figure>
                <figure class="crossing-photo crossing-photo--tall">
                  <img src="资源文件/土城 红色建筑群/补充图片/四渡赤水纪念馆/娄山关壁画.jpg" alt="娄山关战斗壁画">
                  <figcaption>娄山关战斗展陈：二渡之后红军回师黔北的重要胜仗。</figcaption>
                </figure>
                <figure class="crossing-photo">
                  <img src="资源文件/土城 红色建筑群/补充图片/四渡赤水纪念馆/二渡简介.jpg" alt="二渡赤水简介展板">
                  <figcaption>遵义大捷史料：呈现中央红军长征以来最大一次胜利的战果。</figcaption>
                </figure>
              </div>
            </div>
          </article>

          <article id="crossing-three" class="crossing-stage">
            <div class="crossing-stage__marker" aria-hidden="true">03</div>
            <div class="crossing-stage__content">
              <div class="crossing-stage__heading">
                <p class="crossing-stage__date">1935年3月16日至17日</p>
                <h4>三渡赤水</h4>
                <p>苟坝会议后，我军决定进攻敌人重镇鲁班场，而占领鲁班战场的战斗并不顺利，我军果断向仁怀进军。3月16日至17日，中央红军从茅台及附近渡口第三次渡过赤水河，进入川南，公然摆出北渡长江的态势。敌军果然被调往赤水河以西。红军派出九军团佯装主力前往古蔺、叙永一带，而真正的主力在大村、铁厂一带潜伏，准备突然折返。</p>
                <p>三渡赤水时红军已然彻底摆脱被动局面，紧紧抓住主动权，诱敌西进，为彻底跳出敌人包围圈蛰伏，参观时可结合陈列的苟坝会议、鲁班场战斗资料等加以体会。</p>
              </div>
              <div class="crossing-gallery crossing-gallery--three">
                <figure class="crossing-photo crossing-photo--wide">
                  <img src="资源文件/土城 红色建筑群/补充图片/四渡赤水纪念馆/三渡简介.jpg" alt="三渡赤水简介展板">
                  <figcaption>鲁班场战斗展陈：红军及时改变行动、避免再次陷入被动。</figcaption>
                </figure>
                <figure class="crossing-photo">
                  <img src="资源文件/土城 红色建筑群/补充图片/四渡赤水纪念馆/渡河油画.jpg" alt="红军渡河主题油画">
                  <figcaption>茅台渡河场景：红军大张旗鼓西渡，主动向敌军显示行军方向。</figcaption>
                </figure>
                <figure class="crossing-photo">
                  <img src="资源文件/土城 红色建筑群/补充图片/四渡赤水纪念馆/三渡路线.jpg" alt="三渡赤水敌我态势路线图">
                  <figcaption>三渡敌我态势图：主力隐蔽待机，一部兵力继续向川南佯动。</figcaption>
                </figure>
              </div>
            </div>
          </article>

          <article id="crossing-four" class="crossing-stage">
            <div class="crossing-stage__marker" aria-hidden="true">04</div>
            <div class="crossing-stage__content">
              <div class="crossing-stage__heading">
                <p class="crossing-stage__date">1935年3月21日至22日</p>
                <h4>四渡赤水</h4>
                <p>3月21日至22日，红军主力部队向东折返，从太平渡、二郎滩、九溪口等渡口秘密渡过赤水河，把重兵围堵的敌军甩在身后。渡河后，红军昼夜兼程向南疾进，继而南渡乌江、佯攻贵阳、威逼昆明，最终巧渡金沙江，彻底跳出数十万敌军的围追堵截。</p>
              </div>
              <div class="crossing-gallery crossing-gallery--four">
                <figure class="crossing-photo">
                  <img src="资源文件/土城 红色建筑群/补充图片/四渡赤水纪念馆/四渡路线.jpg" alt="四渡赤水路线图">
                  <figcaption>四渡赤水路线图：红军主力从敌军间隙突然折返黔北。</figcaption>
                </figure>
                <figure class="crossing-photo">
                  <img src="资源文件/土城 红色建筑群/补充图片/四渡赤水纪念馆/进馆浮雕.jpg.jpeg" alt="四渡赤水纪念馆渡河主题浮雕">
                  <figcaption>太平渡、二郎滩与九溪口：红军第四次渡河的重要渡口。</figcaption>
                </figure>
                <figure class="crossing-photo crossing-photo--wide">
                  <img src="资源文件/土城 红色建筑群/补充图片/四渡赤水纪念馆/四渡简介.jpg" alt="四渡赤水简介展板">
                  <figcaption>全局形势展陈：四渡之后，红军南渡乌江并继续实施战略机动。</figcaption>
                </figure>
              </div>
            </div>
          </article>

          <article id="crossing-five" class="crossing-stage">
            <div class="crossing-stage__marker" aria-hidden="true">05</div>
            <div class="crossing-stage__content">
              <div class="crossing-stage__heading">
                <h4>结语</h4>
                <p>四渡赤水，是中央红军长征中最惊心动魄、最精彩绝伦的军事行动；是毛泽东军事生涯的“得意之笔”，是红军战争史上以少胜多，化被动为主动的光辉典范；这一胜利是改换了中央军委之后取得的，是遵义会议精神的具体实践，是中国革命走向胜利的重要里程碑。</p>
              </div>
            </div>
          </article>

        </div>
        <h3 class="crossing-route__section-title">二、更多详情链接</h3>
          <a href="https://www.sdcs1935.com" target="_blank">百度百科 →</a>
          <a class="more-images-link" href="">更多图片 →</a>
      </div>
    `
  },
  three: {
    title: '青杠坡战斗遗址',
    image: '资源文件/土城 青杠坡遗址/土城 青杠坡遗址6.jpg',
    contentStylesheets: ['shared-route.css', 'spot-three.css'],
    summary: '沿山间台阶探访红军烈士陵园、纪念碑、浮雕与红军医院纪念馆，在战斗遗址中缅怀先烈。',
    introduction: '青杠坡战斗遗址位于群山环抱之间，可从烈士陵园入口开始，依次参观烈士纪念碑、浮雕和红军医院纪念馆，了解青杠坡战斗的背景、过程与意义。',
    hours:'文案未提供开放时间；建议出行前确认现场安排。',
    traffic:'位于土城东北约3㎞，建议与土城四渡赤水纪念馆同天游览，两地间有公交车往返，约一小时一班，时间较有弹性，早班车约7点至七点半之间到达土城古镇，建议提前与公交车司机联系。',
    tips:'户外景点，注意防蚊与登山安全，中午天气较为炎热，建议早上出发。',
    route: `
      <div class="shared-route">
        <header class="shared-route__intro">
          <p class="shared-route__eyebrow">青杠坡战斗遗址</p>
          <h3 class="shared-route__section-title">一、游玩路线推荐</h3>
          <p>建议从红军烈士陵园入口开始，沿台阶依次参观红军烈士纪念碑、浮雕和红军医院纪念馆，在山地遗址中了解青杠坡战斗的背景、过程与意义。</p>
        </header>

        <nav class="shared-route__nav" aria-label="青杠坡战斗遗址游览路线导航">
          <a href="#qinggangpo-entrance"><span>01</span>红军烈士陵园入口</a>
          <a href="#qinggangpo-monument"><span>02</span>青杠坡红军烈士纪念碑</a>
          <a href="#qinggangpo-relief"><span>03</span>浮雕</a>
          <a href="#qinggangpo-marker"><span>04</span>红军医院纪念馆</a>
        </nav>

        <div class="shared-route__timeline">
          <article id="qinggangpo-entrance" class="shared-route__stage">
            <div class="shared-route__marker" aria-hidden="true">01</div>
            <div class="shared-route__card">
              <div class="shared-route__text">
                <p class="shared-route__label">路线起点 · 陵园入口</p>
                <h4>红军烈士陵园入口</h4>
                <p>烈士陵园位于群山环抱之间，环顾四周可见地势之险峻。”青杠坡遗址“纪念标识位于左侧台阶旁，可作为参观起点和首个拍照点。由此向上参观烈士纪念碑。</p>
              </div>
              <figure class="shared-route__media">
                <img src="资源文件/土城 青杠坡遗址/土城 青杠坡遗址1.jpg" alt="青杠坡战斗遗址纪念园入口全景" loading="lazy">
                <figcaption>从入口广场辨认纪念园的中轴线和主要参观点。</figcaption>
              </figure>
            </div>
          </article>

          <article id="qinggangpo-monument" class="shared-route__stage">
            <div class="shared-route__marker" aria-hidden="true">02</div>
            <div class="shared-route__card">
              <div class="shared-route__text">
                <p class="shared-route__label">拾级而上 · 缅怀先烈</p>
                <h4>青杠坡红军烈士纪念碑</h4>
                <p>由台阶来到纪念碑前，碑心正面题字“青杠坡红军烈士纪念碑”，碑座上篆有青杠坡战斗简介，可供学习青杠坡战斗的背景、过程、后续及意义。参观时请保持肃静，并为其他瞻仰者留出瞻仰通道。</p>
              </div>
              <figure class="shared-route__media shared-route__media--portrait">
                <img src="资源文件/土城 青杠坡遗址/土城 青杠坡遗址2.jpg" alt="青杠坡红军烈士纪念碑" loading="lazy">
                <figcaption>纪念碑位于纪念园轴线高处，是整条路线的视觉中心。</figcaption>
              </figure>
            </div>
          </article>

          <article id="qinggangpo-relief" class="shared-route__stage">
            <div class="shared-route__marker" aria-hidden="true">03</div>
            <div class="shared-route__card">
              <div class="shared-route__text">
                <p class="shared-route__label">驻足观看 · 读懂战斗</p>
                <h4>浮雕</h4>
                <p>浮雕描绘青杠坡战斗中英勇奋战的将士们，极具感染力，从中不难看出红军当年的昂扬风貌。烈士墓碑静静矗立，墓碑苍苍而小草青青，青山埋忠骨，佑一方水土。</p>
              </div>
              <figure class="shared-route__media">
                <img src="资源文件/土城 青杠坡遗址/土城 青杠坡遗址4.jpg" alt="青杠坡战斗主题浮雕" loading="lazy">
                <figcaption>浮雕将人物群像与山地战斗场景浓缩在连续画面中。</figcaption>
              </figure>
            </div>
          </article>

          <article id="qinggangpo-marker" class="shared-route__stage">
            <div class="shared-route__marker" aria-hidden="true">04</div>
            <div class="shared-route__card">
              <div class="shared-route__text">
                <p class="shared-route__label">路线收尾 · 红军医院纪念馆</p>
                <h4>红军医院纪念馆</h4>
                <p>沿台阶下山，过永安寺，见红军医院纪念馆。馆内一共三层楼，从早起卫生队的成立，到战时军队医院、根据地红军医院的创建发展壮大，到新中国成立后全国卫生工作的开展以及新时代军队卫生工作新气象，详细介绍红军医院发展历史。除发展沿革外，馆内陈设红军自制医疗器械，引用人物小传，帮助参观者更好体会红军善于创造、一心为民、不畏牺牲的伟大精神。馆内陈设拍照仅供个人学习欣赏，不供对外宣传。</p>
              </div>
              <figure class="shared-route__media shared-route__media--portrait">
                <img src="资源文件/土城 青杠坡遗址/土城 青杠坡遗址5.jpg" alt="青杠坡战斗遗址红色纪念标识" loading="lazy">
                <figcaption>红色纪念标识与山地台阶共同构成路线终点的醒目坐标（图片应该换）。</figcaption>
              </figure>
            </div>
          </article>
        </div>

        <h3 class="shared-route__section-title shared-route__section-title--links">二、更多详情链接</h3>
        <div class="shared-route__links">
          <a href="https://baike.baidu.com/item/%E9%9D%92%E6%9D%A0%E5%9D%A1%E6%88%98%E6%96%97%E9%81%97%E5%9D%80/19855248" target="_blank">百度百科 →</a>
          <a class="more-images-link" href="">更多图片 →</a>
        </div>
      </div>
    `
  },
  four: {
    title: '娄山关',
    image: '资源文件/市区 娄山关/市区 娄山关26.jpg',
    contentStylesheets: ['spot-four.css'],
    summary: '从摩崖石刻、战壕遗址到红军战斗遗址陈列馆，在山地路线中重读娄山关的历史。',
    introduction: '娄山关景区以山地路线为主。沿途可探访摩崖石刻、红军烈士纪念碑、战壕遗址、长空桥、雁鸣塔、英雄纪念林和红军战斗遗址陈列馆。',
    hours: '抵达游客服务中心后按现场指引办理入园；开放时段、观光车价格等信息以景区当日公告为准，建议游玩半天。',
    traffic: '从遵义站乘高铁至娄山关南站，车程约十余分钟；出站后转乘车辆前往景区游客服务中心，并在此换乘景区观光车或自驾接驳。',
    tips: '景区沿途坡道和台阶较多，部分路段陡峭，请穿防滑、舒适的鞋子；建议自备饮用水和少量补给，并根据天气携带雨具。参观遗址时请留在步道内，不翻越围栏，不触摸展品。',
    route: `
      <div class="loushan-route">
        <header class="loushan-route__intro">
          <div class="loushan-route__year" aria-hidden="true">
            <strong>1935</strong>
            <span>两战娄山关</span>
          </div>
          <div class="loushan-route__lead">
            <p class="loushan-route__kicker">娄山关</p>
            <h3 class="loushan-route__section-title">一、游玩路线推荐</h3>
            <p>建议从摩崖石刻起步，依次经过红军烈士纪念碑、战壕遗址、长空桥、雁鸣塔和英雄纪念林，最后到红军战斗遗址陈列馆完成历史脉络的回望。</p>
            <blockquote>
              <p>“雄关漫道真如铁，而今迈步从头越。”</p>
              <cite>——《忆秦娥·娄山关》</cite>
            </blockquote>
          </div>
        </header>

        <nav class="loushan-route__nav" aria-label="娄山关推荐路线导航">
          <a href="#loushan-carving"><span>01</span>摩崖石刻</a>
          <a href="#loushan-monument"><span>02</span>烈士纪念碑</a>
          <a href="#loushan-trench"><span>03</span>战壕遗址</a>
          <a href="#loushan-bridge"><span>04</span>长空桥</a>
          <a href="#loushan-tower"><span>05</span>雁鸣塔</a>
          <a href="#loushan-forest"><span>06</span>纪念林</a>
          <a href="#loushan-museum"><span>07</span>战斗陈列馆</a>
        </nav>

        <div class="loushan-timeline">
          <article id="loushan-carving" class="loushan-stop">
            <div class="loushan-stop__marker" aria-hidden="true">01</div>
            <div class="loushan-stop__card">
              <div class="loushan-stop__text">
                <p class="loushan-stop__label">路线起点 · 雄关印象</p>
                <h4>摩崖石刻</h4>
                <p>巨大的“娄山关”红字石刻依崖而立，是景区最醒目的地标。登山前，可在此观察娄山关两山夹峙的险要地势，直观理解“黔北锁钥”与“易守难攻”的含义。</p>
              </div>
              <figure class="loushan-stop__media">
                <img src="资源文件/市区 娄山关/市区 娄山关4.jpg" alt="山崖上的娄山关红色摩崖石刻" loading="lazy">
                <figcaption>石刻与山势共同构成娄山关的第一印象。</figcaption>
              </figure>
            </div>
          </article>

          <article id="loushan-monument" class="loushan-stop">
            <div class="loushan-stop__marker" aria-hidden="true">02</div>
            <div class="loushan-stop__card">
              <div class="loushan-stop__text">
                <p class="loushan-stop__label">拾级而上 · 缅怀先烈</p>
                <h4>红军烈士纪念碑</h4>
                <p>纪念碑以高耸的红砖呼应娄山关险峻的山势，中间鲜红的党旗象征红军胜利夺取制高点。可重点观看基座上的战斗浮雕与纪念题字，在肃穆中缅怀遵义战役中牺牲的烈士。</p>
              </div>
              <figure class="loushan-stop__media loushan-stop__media--portrait">
                <img src="资源文件/市区 娄山关/市区 娄山关13.jpg" alt="娄山关红军烈士纪念碑及基座浮雕" loading="lazy">
                <figcaption>红砖碑体巍然立于山间，与周围群峰相映。</figcaption>
              </figure>
            </div>
          </article>

          <article id="loushan-trench" class="loushan-stop">
            <div class="loushan-stop__marker" aria-hidden="true">03</div>
            <div class="loushan-stop__card">
              <div class="loushan-stop__text">
                <p class="loushan-stop__label">登临小尖山 · 观察战场</p>
                <h4>战壕遗址</h4>
                <p>小尖山顶视野开阔，碎石块在此环坑堆砌，形成浅洼状战壕。站在这制高点俯瞰山谷，可以更直观认识抢占关口对于侦察与防御的决定性意义，感受到当年红军抢先登上制高点的重量。</p>
                <aside class="loushan-field-note">
                  <strong>“五分钟”的重量</strong>
                  <p>队员的研学记录提到，红军在关键时刻仅以约五分钟的时间差抢先登上制高点。走过这段陡峭山路，这个时间差显得格外沉重。</p>
                </aside>
              </div>
              <figure class="loushan-stop__media">
                <img src="资源文件/市区 娄山关/市区 娄山关17.jpg" alt="小尖山战壕遗址说明牌与石垒战壕" loading="lazy">
                <figcaption>山顶战壕遗址保留着战场环境的空间记忆。</figcaption>
              </figure>
            </div>
          </article>

          <article id="loushan-bridge" class="loushan-stop">
            <div class="loushan-stop__marker" aria-hidden="true">04</div>
            <div class="loushan-stop__card">
              <div class="loushan-stop__text">
                <p class="loushan-stop__label">穿越山谷 · 红旗漫卷</p>
                <h4>长空桥</h4>
                <p>长空桥悬于山谷之上，两侧红旗迎风展开。行至桥中，脚下是深谷树冠，四周峰岭连绵，是感受“一夫当关，万夫莫开”地势的最佳点位。桥面有风时请放慢脚步，勿倚靠或攀爬护栏。</p>
              </div>
              <figure class="loushan-stop__media">
                <img src="资源文件/市区 娄山关/市区 娄山关18.jpg" alt="娄山关长空桥两侧挂满红旗" loading="lazy">
                <figcaption>红旗沿桥体延伸，将山谷与红色记忆连在一起。</figcaption>
              </figure>
            </div>
          </article>

          <article id="loushan-tower" class="loushan-stop">
            <div class="loushan-stop__marker" aria-hidden="true">05</div>
            <div class="loushan-stop__card">
              <div class="loushan-stop__text">
                <p class="loushan-stop__label">行至高处 · 纵览群峰</p>
                <h4>雁鸣塔</h4>
                <p>塔身是山脊游线上醒目的地标，登临附近可遥望层叠山峦。雨雾天气时，远山黛影更显层次，“苍山如海”尽收眼底。若感到疲惫，可在塔外木椅小坐休整。</p>
              </div>
              <figure class="loushan-stop__media loushan-stop__media--portrait">
                <img src="资源文件/市区 娄山关/市区 娄山关21.jpg" alt="娄山关山脊上的雁鸣塔" loading="lazy">
                <figcaption>塔影从山色中拔地而起，是路线后半程的醒目坐标。</figcaption>
              </figure>
            </div>
          </article>

          <article id="loushan-forest" class="loushan-stop">
            <div class="loushan-stop__marker" aria-hidden="true">06</div>
            <div class="loushan-stop__card">
              <div class="loushan-stop__text">
                <p class="loushan-stop__label">步入林间 · 安静缅怀</p>
                <h4>英雄纪念林</h4>
                <p>这片白桦林是在战火被摧毁后重新栽种的，新生秀木挺拔竖直，枝干自有韧劲。树木倒下再起，恰如精神赴死而生，这片林子也由此成为纪念林。从开阔山脊走入静谧林间，游览节奏随之舒缓。请在此保持安静，于穿行中静静缅怀。</p>
              </div>
              <figure class="loushan-stop__media">
                <img src="资源文件/市区 娄山关/市区 娄山关1.jpg" alt="娄山关英雄纪念林中的林间步道" loading="lazy">
                <figcaption>树林与石阶构成安静的纪念空间。</figcaption>
              </figure>
            </div>
          </article>

          <article id="loushan-museum" class="loushan-stop">
            <div class="loushan-stop__marker" aria-hidden="true">07</div>
            <div class="loushan-stop__card">
              <div class="loushan-stop__text">
                <p class="loushan-stop__label">行程收尾 · 补全历史</p>
                <h4>娄山关红军战斗遗址陈列馆</h4>
                <p>本馆以历史图片、战场实物、半景画和英雄故事，将山上所见的地形与遗址还原到具体的战斗进程中，帮助游客系统梳理两次攻占娄山关的历史脉络。建议将本馆放在娄山关最后一程，以实地观察带动历史理解。</p>
              </div>
              <figure class="loushan-stop__media">
                <img src="资源文件/市区 娄山关/市区 娄山关24.jpg" alt="娄山关红军战斗遗址陈列馆外观" loading="lazy">
                <figcaption>从山地遗址走进陈列馆，为整段参观补上历史线索。</figcaption>
              </figure>
            </div>
          </article>
        </div>

        <h3 class="loushan-route__section-title loushan-route__section-title--links">二、更多详情链接</h3>
        <div class="loushan-route__links">
          <a href="https://baike.baidu.com/item/%E5%A8%84%E5%B1%B1%E5%85%B3/1671640" target="_blank">百度百科 →</a>
          <a class="more-images-link" href="">更多图片 →</a>
        </div>
      </div>
    `
  },
  five: {
    title: '四渡赤水纪念园',
    image: '资源文件/茅台镇 四渡赤水纪念园/茅台镇 四渡赤水纪念园12.jpg',
    contentStylesheets: ['shared-route.css'],
    summary: '沿纪念园浮雕、红军长征过茅台陈列馆和红军四渡赤水纪念塔，了解红军在茅台三渡赤水的历史。',
    introduction: '纪念园通过沿途浮雕、场馆陈设、敌我局势图、文字史料和展板，展示红军将士四渡赤水时的英雄气概，以及红军与茅台镇人民的军民鱼水情。',
    hours: '文案未提供开放时间；建议出行前确认现场安排。',
    traffic: '文案未提供交通信息；建议结合实际行程前往茅台镇四渡赤水纪念园。',
    tips: '可结合场馆内的敌我局势图、文字史料和展板，重点了解红军三渡赤水前后的历史细节。',
    route: `
      <div class="shared-route">
        <header class="shared-route__intro">
          <p class="shared-route__eyebrow">茅台镇四渡赤水纪念园</p>
          <h3 class="shared-route__section-title">一、游玩路线推荐</h3>
          <p>进入纪念园后，沿浮雕墙、红军长征过茅台陈列馆和红军四渡赤水纪念塔的顺序参观，结合场馆陈设、敌我局势图、文字史料和展板，了解红军三渡赤水前后的历史。</p>
        </header>

        <nav class="shared-route__nav" aria-label="四渡赤水纪念园游览路线导航">
          <a href="#park-sculpture"><span>01</span>四渡赤水浮雕墙</a>
          <a href="#park-preface"><span>02</span>红军长征过茅台陈列馆</a>
          <a href="#park-lantern"><span>03</span>红军四渡赤水纪念塔</a>
        </nav>

        <div class="shared-route__timeline">
          <article id="park-sculpture" class="shared-route__stage">
            <div class="shared-route__marker" aria-hidden="true">01</div>
            <div class="shared-route__card">
              <div class="shared-route__text">
                <p class="shared-route__label">园区入口 · 英雄气概</p>
                <h4>四渡赤水浮雕墙</h4>
                <p>进入纪念园，沿途浮雕展示红军将士四渡赤水时的英雄气概。</p>
              </div>
              <figure class="shared-route__media">
                <img src="资源文件/茅台镇 四渡赤水纪念园/茅台镇 四渡赤水纪念园1.jpg" alt="四渡赤水纪念园红军群像雕塑" loading="lazy">
                <figcaption>群像雕塑与山地背景共同构成展览序厅的视觉中心。</figcaption>
              </figure>
            </div>
          </article>

          <article id="park-preface" class="shared-route__stage">
            <div class="shared-route__marker" aria-hidden="true">02</div>
            <div class="shared-route__card">
              <div class="shared-route__text">
                <p class="shared-route__label">走进场馆 · 追溯历史</p>
                <h4>红军长征过茅台陈列馆</h4>
                <p>沿场馆内地标，结合馆内陈设、敌我局势图等材料可依次了解红军四渡赤水的历史。馆内详细介绍红军长征中两次经过仁怀的细节，特别聚焦红军于茅台镇三渡赤水前后的历史；结合文字史料和展板，可深入体会红军与茅台镇人民的军民鱼水情。</p>
              </div>
              <figure class="shared-route__media">
                <img src="资源文件/茅台镇 四渡赤水纪念园/茅台镇 四渡赤水纪念园2.jpg" alt="四渡赤水纪念园展览前言" loading="lazy">
                <figcaption>前言展板集中说明战役背景、主要过程与历史意义。</figcaption>
              </figure>
            </div>
          </article>

          <article id="park-lantern" class="shared-route__stage">
            <div class="shared-route__marker" aria-hidden="true">03</div>
            <div class="shared-route__card">
              <div class="shared-route__text">
                <p class="shared-route__label">沿台阶向上 · 铭记历史</p>
                <h4>红军四渡赤水纪念塔</h4>
                <p>出陈列馆沿台阶向上，四渡赤水纪念塔屹立眼前。塔身有江泽民题名，北侧有四幅浮雕展现战役场景，环塔设有“茅台策划”“特殊的长征纪念”等展板，详细记录红军三渡赤水的历史细节。</p>
              </div>
              <figure class="shared-route__media shared-route__media--portrait">
                <img src="资源文件/茅台镇 四渡赤水纪念园/茅台镇 四渡赤水纪念园3.jpg" alt="马灯照亮前行路主题画面" loading="lazy">
                <figcaption>马灯成为展陈中连接人物行动与历史情境的视觉线索。</figcaption>
              </figure>
            </div>
          </article>

        </div>

        <h3 class="shared-route__section-title shared-route__section-title--links">二、更多详情链接</h3>
        <div class="shared-route__links">
          <a href="https://baike.baidu.com/item/%E7%BA%A2%E5%86%9B%E5%9B%9B%E6%B8%A1%E8%B5%A4%E6%B0%B4%E7%BA%AA%E5%BF%B5%E5%A1%94/15480607" target="_blank">百度百科 →</a>
          <a class="more-images-link" href="">更多图片 →</a>
        </div>
      </div>
    `
  }
};

const requestedSpotKey = new URLSearchParams(window.location.search).get('spot');
const spotKey = Object.prototype.hasOwnProperty.call(spotData, requestedSpotKey)
  ? requestedSpotKey
  : 'one';
const spot = spotData[spotKey];

const detailContent = document.querySelector('.detail-content');
document.body.dataset.spot = spotKey;
detailContent.dataset.spot = spotKey;

// 每个景点可以加载不同的正文样式表。既支持字符串，也支持字符串数组。
const contentStylesheets = Array.isArray(spot.contentStylesheets)
  ? spot.contentStylesheets
  : [spot.contentStylesheets].filter(Boolean);

contentStylesheets.forEach(href => {
  const stylesheet = document.createElement('link');
  stylesheet.rel = 'stylesheet';
  stylesheet.href = href;
  stylesheet.dataset.spotStylesheet = spotKey;
  document.head.append(stylesheet);
});

document.title = `${spot.title} · 红色足迹`;
document.querySelector('#spot-title').textContent = spot.title;
document.querySelector('#spot-image').src = spot.image;
document.querySelector('#spot-image').alt = `${spot.title}图片`;
document.querySelector('#spot-summary').textContent = spot.summary;
document.querySelector('#spot-introduction').textContent = spot.introduction;
document.querySelector('#spot-hours').textContent = spot.hours;
document.querySelector('#spot-traffic').textContent = spot.traffic;
document.querySelector('#spot-tips').textContent = spot.tips;

const routeSection = document.querySelector('.route-note');
const routeContent = document.querySelector('#spot-route');

const routePreviewPath = (source, width) => {
  const fileNameStart = source.lastIndexOf('/') + 1;
  const extensionStart = source.lastIndexOf('.');
  if (extensionStart <= fileNameStart) return null;

  const directory = source.slice(0, fileNameStart);
  const fileStem = source.slice(fileNameStart, extensionStart);
  return `${directory}响应式预览/${fileStem}-${width}.webp`;
};

const enhanceRouteMedia = () => {
  routeContent.querySelectorAll('img').forEach(image => {
    const originalSource = image.getAttribute('src')?.trim();
    image.loading = 'lazy';
    image.decoding = 'async';

    if (!originalSource) {
      const placeholder = document.createElement('div');
      const placeholderLabel = document.createElement('span');
      const placeholderDescription = document.createElement('small');
      const alternativeText = image.getAttribute('alt')?.trim() || '路线图片待补充';

      placeholder.className = 'route-image-placeholder';
      placeholder.setAttribute('role', 'img');
      placeholder.setAttribute('aria-label', alternativeText);
      placeholderLabel.textContent = '图片待补充';
      placeholderDescription.textContent = alternativeText;
      placeholder.append(placeholderLabel, placeholderDescription);
      image.replaceWith(placeholder);
      return;
    }

    const smallPreview = routePreviewPath(originalSource, 480);
    const mediumPreview = routePreviewPath(originalSource, 960);
    const largePreview = routePreviewPath(originalSource, 1600);
    if (!smallPreview || !mediumPreview || !largePreview) return;

    let usingFallback = false;
    image.addEventListener('error', () => {
      if (usingFallback) return;
      usingFallback = true;
      image.removeAttribute('srcset');
      image.removeAttribute('sizes');
      image.src = originalSource;
    });

    image.src = smallPreview;
    image.srcset = `${encodeURI(smallPreview)} 480w, ${encodeURI(mediumPreview)} 960w, ${encodeURI(largePreview)} 1600w`;
    image.sizes = '(max-width: 680px) calc(100vw - 74px), (max-width: 1120px) calc(100vw - 176px), 900px';
  });

  routeContent.querySelectorAll('a').forEach(link => {
    if (link.getAttribute('href')?.trim()) return;

    const disabledLabel = document.createElement('span');
    disabledLabel.className = `${link.className} is-disabled`.trim();
    disabledLabel.textContent = `${link.textContent.trim()}（待补充）`;
    disabledLabel.setAttribute('aria-disabled', 'true');
    link.replaceWith(disabledLabel);
  });
};

if (spot.route) {
  if (Array.isArray(spot.route)) {
    // 兼容原来的字符串数组写法。
    const list = document.createElement('ol');
    list.className = 'route-steps';
    list.replaceChildren(...spot.route.map(step => {
      const item = document.createElement('li');
      item.textContent = step;
      return item;
    }));
    routeContent.replaceChildren(list);
  } else {
    routeContent.innerHTML = spot.route;
  }
} else {
  routeSection.hidden = true;
}

enhanceRouteMedia();

// CSS Grid 本身不会根据不同卡片高度自动拼成瀑布流，
// 因此在渲染后将每张卡片换算为对应的网格行跨度。
function initMemorialMasonry() {
  const masonry = routeContent.querySelector('.memorial-masonry');

  if (!masonry) return;

  const cards = [...masonry.querySelectorAll('.memorial-card')];

  const layoutCards = () => {
    const masonryStyle = getComputedStyle(masonry);
    const rowHeight = Number.parseFloat(masonryStyle.gridAutoRows);
    const rowGap = Number.parseFloat(masonryStyle.rowGap);
    const cardGap = Number.parseFloat(masonryStyle.getPropertyValue('--masonry-card-gap'));

    if (![rowHeight, rowGap, cardGap].every(Number.isFinite)) return;

    cards.forEach(card => {
      card.style.gridRowEnd = 'auto';
    });

    cards.forEach(card => {
      const cardHeight = card.getBoundingClientRect().height;
      const rowSpan = Math.ceil((cardHeight + cardGap) / (rowHeight + rowGap));
      card.style.gridRowEnd = `span ${rowSpan}`;
    });
  };

  let lastWidth = 0;
  const resizeObserver = new ResizeObserver(([entry]) => {
    const currentWidth = entry.contentRect.width;

    if (Math.abs(currentWidth - lastWidth) < 1) return;
    lastWidth = currentWidth;
    requestAnimationFrame(layoutCards);
  });

  resizeObserver.observe(masonry);
  masonry.querySelectorAll('img').forEach(image => {
    image.addEventListener('load', layoutCards);
    image.addEventListener('error', layoutCards);
  });

  document.fonts?.ready.then(layoutCards);
  window.addEventListener('load', layoutCards, { once: true });
  requestAnimationFrame(layoutCards);
}

initMemorialMasonry();

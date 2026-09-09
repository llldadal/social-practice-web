const spotData = {
  one: {
    title: '遵义会议纪念馆',
    image: '资源文件/遵义会议会址/遵义会议纪念馆外部图片.jpg',
    // 可填写一张或多张景点专属 CSS；它们会在 detail.css 之后加载。
    contentStylesheets: ['spot-one.css'],
    summary: '从一楼大厅到二楼长征主题特展，沿时间线读懂遵义会议的伟大转折与长征精神。',
    introduction: '会址及纪念馆通过历史图片、文物、油画、雕塑、幻影成像与半景画等形式，串联长征背景、遵义会议、四渡赤水及后续长征历程。馆内路线标识明确，适合按时间线参观。',
    hours: '需提前预约，凭预约码或身份证入馆。馆区分上下两层，建议预留2‑2.5小时完整参观。',
    traffic: '会址位于遵义市市中心，可打车前往。附近有红军总政治部旧址、烈士陵园等红色遗址，可一并纳入参观路线。',
    tips: '馆内地面设有醒目的路线标识，二楼展厅从右侧开始游览，展馆休憩处在二楼回廊。入口左手边有行李寄存处，注意不可寄存电脑等贵重物品；相机携带入馆须到游客中心报备。',
    // route 可以直接编写 HTML。每个景点都可以使用不同的标签、图片和排版类。
    route: `
    <div class="route-story__text">
      <div class="memorial-route">
        <section id="游玩路线简介" class="memorial-route__body">
          <header class="memorial-route__overview">
            <h2 class="memorial-route__section-title">参观路线</h2>
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
                  <h4>一楼大厅丨初识主题</h4>
                  <p>进入大厅，20位参会人员雕塑屹立展厅中央，周围的墙上刻着会址建筑浮雕和起义浮雕。“遵义会议伟大转折”提字也位于这一带，适合作为参观起点和首个拍照点。</p>
                </div>
                <figure class="memorial-photo memorial-photo--wide">
                  <img src="资源文件/市区 遵义会议会址/市区 遵义会议会址22.jpg" alt="一楼大厅展陈图片（待补充）">
                  <figcaption>参会群雕与浮雕墙 | 展厅开篇雕塑，感受会场内的肃穆与抉择</figcaption>
                </figure>
              </div>
            </article>

            <article id="memorial-stop-two" class="memorial-stage">
              <div class="memorial-stage__marker" aria-hidden="true">02</div>
              <div class="memorial-stage__content">
                <div class="memorial-stage__heading">
                  <h4>战略转折丨开始长征</h4>
                  <p>从大厅左侧进入第一个展厅，阅读前言和长征背景，结合五次反“围剿”形势图理解长征战略意义；随后参观突破乌江展区，拐角处，投影结合油画实物舟伐重现当时战斗情况，结合照片、旧物、文字理解长征形势不容乐观，红军急需正确战略指引的现实要求。</p>
                </div>
                <figure class="memorial-photo memorial-photo--wide">
                  <img src="资源文件/市区 遵义会议会址/市区 遵义会议会址24.jpg" alt="长征背景与突破乌江展区图片（待补充）">
                  <figcaption>第一展厅展板 | 陈列长征背景史料，交代遵义会议时代背景</figcaption>
                </figure>
              </div>
            </article>

            <article id="memorial-stop-three" class="memorial-stage">
              <div class="memorial-stage__marker" aria-hidden="true">03</div>
              <div class="memorial-stage__content">
                <div class="memorial-stage__heading">
                  <h4>遵义会议丨伟大转折</h4>
                  <p>进入遵义会议召开展区后，可先观看右侧幻影成像，再结合会议油画、参会人员图了解会议场景，重点学习会上不同参会人员的主张和会议做出的重要决策。展览截取了大量回忆录、讲话等史料，帮助游客更好领悟遵义会议的重大意义。</p>
                </div>
                <figure class="memorial-photo memorial-photo--wide">
                  <img src="资源文件/市区 遵义会议会址/市区 遵义会议会址29.jpg" alt="遵义会议召开展区图片（待补充）">
                  <figcaption>遵义会议幻影成像 | 依托会场场景，诠释伟大转折的历史内涵</figcaption>
                </figure>
              </div>
            </article>

            <article id="memorial-stop-four" class="memorial-stage">
              <div class="memorial-stage__marker" aria-hidden="true">04</div>
              <div class="memorial-stage__content">
                <div class="memorial-stage__heading">
                  <h4>遵义精神丨智慧永存</h4>
                  <p>该展区不仅介绍了红军将士在危急存亡时刻所展现出的领袖气魄和英雄气概，还保存了大量红军过遵义宣传所用木板、标语等，生动展现了军民一家亲。</p>
                </div>
                <figure class="memorial-photo memorial-photo--wide">
                  <img src="资源文件/市区 遵义会议会址/市区 遵义会议会址23.jpg" alt="遵义精神与木板标语展区图片（待补充）">
                  <figcaption>“遵义会议伟大转折”标语 | 核心标识，凸显遵义会议历史地位</figcaption>
                </figure>
              </div>
            </article>

            <article id="memorial-stop-five" class="memorial-stage">
              <div class="memorial-stage__marker" aria-hidden="true">05</div>
              <div class="memorial-stage__content">
                <div class="memorial-stage__heading">
                  <h4>四渡赤水丨神来之笔</h4>
                  <p>从青杠坡战斗开始，到飞渡乌江跳出包围圈结束，本展区内，颜色分明的动态敌我运动图有助于直观展示四渡赤水全过程，理解毛主席用兵之“奇”。此外，场馆内设有娄山关半景画区域，让游客身临其境地感受娄山关之“险”。</p>
                </div>
                <figure class="memorial-photo memorial-photo--wide">
                  <img src="资源文件/市区 遵义会议会址/市区 遵义会议会址14.jpg" alt="四渡赤水形势图或娄山关半景画图片（待补充）">
                  <figcaption>娄山关半景画 | 还原战地实景，直观感受娄山关战役的艰险</figcaption>
                </figure>
              </div>
            </article>

            <article id="memorial-stop-six" class="memorial-stage">
              <div class="memorial-stage__marker" aria-hidden="true">06</div>
              <div class="memorial-stage__content">
                <div class="memorial-stage__heading">
                  <h4>二楼展馆丨回望长征历程</h4>
                  <p>上二楼后先参观右侧展馆，依次了解飞夺泸定桥、翻雪山过草地、胜利会师等相关历史。参观途中若感到疲劳，可在二楼回廊座椅处休息。</p>
                </div>
                <figure class="memorial-photo memorial-photo--wide">
                  <img src="资源文件/市区 遵义会议会址/市区 遵义会议会址47.jpg" alt="二楼长征主题展陈图片（待补充）">
                  <figcaption>油画《红军过草地》 | 艺术再现长征途中具有代表性的历史片段</figcaption>
                </figure>
              </div>
            </article>

            <article id="memorial-stop-seven" class="memorial-stage">
              <div class="memorial-stage__marker" aria-hidden="true">07</div>
              <div class="memorial-stage__content">
                <div class="memorial-stage__heading">
                  <h4>长征主题特展丨多视角下的二万五千里</h4>
                  <p>最后参观长征主题特展。该展览重点介绍长征途中的重大事件，与前面遵义会议固定展览不同，该展区内加入大量红军将士自述史料和英雄事迹，多视角补齐二万五千里长征的全貌。</p>
                </div>
                <figure class="memorial-photo memorial-photo--wide">
                  <img src="资源文件/市区 遵义会议会址/市区 遵义会议会址41.jpg" alt="长征主题特展或结语油画图片（待补充）">
                  <figcaption>长征精神题板 | 展览路线终点，总结长征璀璨的精神价值</figcaption>
                </figure>
              </div>
            </article>
          </div>
        </section>
      </div>

      <a href="https://baike.baidu.com/item/%E9%81%B5%E4%B9%89%E4%BC%9A%E8%AE%AE%E7%BA%AA%E5%BF%B5%E9%A6%86/1015399" target="_blank">百度百科 →</a>
      <a class="more-images-link" href="gallery.html?spot=one">更多图片 →</a>
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
    hours: '开放时间为9：00~17：00，16：30停止入场，法定节假日照常开放。免费不免票，可持有效身份证件直接入馆。建议预留1~1.5小时参观主馆。',
    traffic: '纪念馆位于习水县土城镇长征街一带，距遵义市区较远，建议提前规划往返交通；可与土城古镇、青杠坡遗址等点位结合安排同天游览。',
    tips: '馆方通常在10：00、12：00、14：00、16：00提供定时免费讲解。',
    route: `
      <div class="crossing-route">
        <header class="crossing-route__intro">
          <h2 class="crossing-route__section-title">参观路线</h2>
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
                <h4>一渡赤水</h4>
                <p>遵义会议后，中央红军原定从川南北渡长江，与红四方面军汇合。1月28日，青杠坡战斗因敌情判断有误、川军增援不断而未能达到预期，红军继续作战，面临被合围的风险。中共中央和中央军委果断放弃原计划，主动撤出战斗。1月29日中央红军分别从土城浑溪口、蔡家沱和元厚等渡口第一次渡过赤水河，转向川南古蔺、叙永一带，随后向云南扎西地区集结。</p>
                <p>一渡赤水不是战略上的既定，而是在被敌军围追堵截事关生死存亡的被动局面下，审时度势、保存革命有生力量的主动之选。参观这一部分，除行军路线外，可重点关注青杠坡战斗场景复原、浮桥体验装置等，身临其境体会“因时而变”。</p>
              </div>
              <div class="crossing-gallery crossing-gallery--one">
                <figure class="crossing-photo crossing-photo--wide">
                  <img src="资源文件/土城 红色建筑群/补充图片/四渡赤水纪念馆/一渡简介.jpg" alt="一渡赤水前的战斗场景展陈">
                  <figcaption>一渡赤水前局势 | 错误情报导致青杠坡战斗失利，由此拉开了四渡赤水的序幕</figcaption>
                </figure>
                <figure class="crossing-photo">
                  <img src="资源文件/土城 红色建筑群/补充图片/四渡赤水纪念馆/一渡路线.jpg" alt="一渡赤水行军路线图">
                  <figcaption>一渡赤水行军图 | 红军从土城、元厚一带西渡赤水河，向川南地域转移</figcaption>
                </figure>
                <figure class="crossing-photo">
                  <img src="资源文件/土城 红色建筑群/补充图片/四渡赤水纪念馆/渡河油画.jpg" alt="红军渡河主题油画">
                  <figcaption>油画《四渡赤水》 | 艺术再现长征途中具有代表性的历史片段</figcaption>
                </figure>
              </div>
            </div>
          </article>

          <article id="crossing-two" class="crossing-stage">
            <div class="crossing-stage__marker" aria-hidden="true">02</div>
            <div class="crossing-stage__content">
              <div class="crossing-stage__heading">
                <h4>二渡赤水</h4>
                <p>我军一渡赤水后，国民党主力被吸引至川滇边境，黔北兵力相对空虚。中央红军在扎西地区完成整编后，挥师东进，于2月18日至21日从太平渡、二郎滩、九溪口、淋滩等渡口第二次渡过赤水河，重新进入黔北。为站稳脚跟，红军直取桐梓，激战娄山关，再占遵义城，于28日取得遵义大捷，取得长征以来最大的一次胜利。</p>
                <p>二渡赤水体现“避实击虚”的智慧，参观时，可结合沙盘比较渡河前后的敌我位置加以体会。此外，可结合场馆讲解和娄山关“易守难攻”的地形图，理解毛主席在娄山关大捷后提笔写下“雄关漫道真如铁，而今迈步从头越”的喜悦之情。</p>
              </div>
              <div class="crossing-gallery crossing-gallery--two">
                <figure class="crossing-photo">
                  <img src="资源文件/土城 红色建筑群/补充图片/四渡赤水纪念馆/二渡路线.jpg" alt="二渡赤水路线图">
                  <figcaption>二渡赤水路线图 | 红军从太平渡、二郎滩、九溪口等渡口渡河，回师黔北</figcaption>
                </figure>
                <figure class="crossing-photo">
                  <img src="资源文件/土城 红色建筑群/补充图片/四渡赤水纪念馆/娄山关壁画.jpg" alt="娄山关战斗壁画">
                  <figcaption>娄山关战斗展陈 | 再现娄山关大捷，彰显红军英勇攻坚的战斗气魄</figcaption>
                </figure>
                <figure class="crossing-photo crossing-photo--wide">
                  <img src="资源文件/土城 红色建筑群/补充图片/四渡赤水纪念馆/忆秦娥娄山关题词.jpg" alt="忆秦娥娄山关题词">
                  <figcaption>《忆秦娥·娄山关》丨“雄关漫道真如铁，而今迈步从头越。”体会毛主席在娄山关大捷后的喜悦之情和革命乐观主义精神</figcaption>
                </figure>
              </div>
            </div>
          </article>

          <article id="crossing-three" class="crossing-stage">
            <div class="crossing-stage__marker" aria-hidden="true">03</div>
            <div class="crossing-stage__content">
              <div class="crossing-stage__heading">
                <h4>三渡赤水</h4>
                <p>苟坝会议后，我军决定进攻敌人重镇鲁班场，而占领鲁班战场的战斗并不顺利，我军果断向仁怀进军。3月16日至17日，中央红军从茅台及附近渡口第三次渡过赤水河，进入川南，公然摆出北渡长江的态势。敌军果然被调往赤水河以西。红军派出九军团佯装主力前往古蔺、叙永一带，而真正的主力在大村、铁厂一带潜伏，准备突然折返。</p>
                <p>三渡赤水时红军已然彻底摆脱被动局面，紧紧抓住主动权，诱敌西进，为彻底跳出敌人包围圈蛰伏，参观时可结合陈列的苟坝会议、鲁班场战斗资料等加以体会。</p>
              </div>
              <div class="crossing-gallery crossing-gallery--three">
                <figure class="crossing-photo crossing-photo--wide">
                  <img src="资源文件/土城 红色建筑群/补充图片/四渡赤水纪念馆/三渡简介.jpg" alt="三渡赤水简介展板">
                  <figcaption>鲁班场战斗展陈 | 还原激战实况，体现红军审时度势调整作战部署</figcaption>
                </figure>
                <figure class="crossing-photo">
                  <img src="资源文件/土城 红色建筑群/四渡赤水03.jpg" alt="红军渡河主题油画">
                  <figcaption>茅台渡河 | 红军三渡佯动惑敌，调敌西进，为四渡回师创造战机</figcaption>
                </figure>
                <figure class="crossing-photo">
                  <img src="资源文件/土城 红色建筑群/补充图片/四渡赤水纪念馆/三渡路线.jpg" alt="三渡赤水敌我态势路线图">
                  <figcaption>三渡敌我态势图 | 展示红军主力西进，调动敌军的战略佯动布局</figcaption>
                </figure>
              </div>
            </div>
          </article>

          <article id="crossing-four" class="crossing-stage">
            <div class="crossing-stage__marker" aria-hidden="true">04</div>
            <div class="crossing-stage__content">
              <div class="crossing-stage__heading">
                <h4>四渡赤水</h4>
                <p>3月21日至22日，红军主力部队向东折返，从太平渡、二郎滩、九溪口等渡口秘密渡过赤水河，把重兵围堵的敌军甩在身后。渡河后，红军昼夜兼程向南疾进，继而南渡乌江、佯攻贵阳、威逼昆明，最终巧渡金沙江，彻底跳出数十万敌军的围追堵截。</p>
              </div>
              <div class="crossing-gallery crossing-gallery--four">
                <figure class="crossing-photo">
                  <img src="资源文件/土城 红色建筑群/补充图片/四渡赤水纪念馆/四渡路线.jpg" alt="四渡赤水路线图">
                  <figcaption>四渡赤水路线图 | 红军迂回穿插，跳出敌军包围圈，突返黔北</figcaption>
                </figure>
                <figure class="crossing-photo">
                  <img src="资源文件/土城 红色建筑群/四渡赤水04.jpg" alt="红九军团断后史料">
                  <figcaption>红九军团断后史料 | 红军主力南下时，九军团暂留黔北牵制敌军，为我军南渡乌江创造了良好时机</figcaption>
                </figure>
                <figure class="crossing-photo crossing-photo--wide">
                  <img src="资源文件/土城 红色建筑群/补充图片/四渡赤水纪念馆/四渡简介.jpg" alt="四渡赤水简介展板">
                  <figcaption>四渡赤水形势展板 | 四渡之后红军迅速南下，突破乌江天险并继续实施战略机动</figcaption>
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
          <a href="https://www.sdcs1935.com" target="_blank">百度百科 →</a>
          <a class="more-images-link" href="gallery.html?spot=two">更多图片 →</a>
      </div>
    `
  },
  three: {
    title: '青杠坡战斗遗址',
    image: '资源文件/土城 青杠坡遗址/土城 青杠坡遗址6.jpg',
    contentStylesheets: ['shared-route.css', 'spot-three.css'],
    summary: '沿山间台阶探访红军烈士陵园、纪念碑、浮雕与红军医院纪念馆，在战斗遗址中缅怀先烈。',
    introduction: '拾级山间，探访红军烈士陵园、烈士纪念碑、战斗浮雕与红军医院纪念馆，在青杠坡战斗遗址追忆烽火岁月，缅怀革命先烈。',
    hours:'无需预约，红军医院纪念馆馆内开放时间为9：00~17：00。全程游览建议用时1.5~2小时。',
    traffic:'青杠坡位于土城东北约3公里，建议与土城四渡赤水纪念馆同天游览。两地有往返公交车，首发车约7:00 ~ 7:30抵达土城古镇，班次间隔约一小时。公交乘车时间多变，出行前建议提前与司机联系，确认班次。',
    tips:'户外景点，注意防蚊与登山安全，中午天气较为炎热，建议早上出发。',
    route: `
      <div class="shared-route">
        <header class="shared-route__intro">
          <h2 class="shared-route__section-title">参观路线</h2>
          <p>陵园入口：青杠坡遗址 → 青杠坡红军烈士纪念碑 → 山地战斗浮雕 → 红军医院纪念馆。</p>
        </header>

        <nav class="shared-route__nav" aria-label="青杠坡战斗遗址游览路线导航">
          <a href="#qinggangpo-entrance"><span>01</span>陵园入口：青杠坡遗址</a>
          <a href="#qinggangpo-monument"><span>02</span>青杠坡红军烈士纪念碑</a>
          <a href="#qinggangpo-relief"><span>03</span>山地战斗浮雕</a>
          <a href="#qinggangpo-marker"><span>04</span>红军医院纪念馆</a>
        </nav>

        <div class="shared-route__timeline">
          <article id="qinggangpo-entrance" class="shared-route__stage">
            <div class="shared-route__marker" aria-hidden="true">01</div>
            <div class="shared-route__card">
              <div class="shared-route__text">
                <h4>陵园入口：青杠坡遗址</h4>
                <p>烈士陵园位于群山环抱之间，环顾四周可见地势之险峻。”青杠坡遗址“纪念标识位于左侧台阶旁，可作为参观起点和首个拍照点。由此向上参观烈士纪念碑。</p>
              </div>
              <figure class="shared-route__media">
                <img src="资源文件/土城 青杠坡遗址/土城 青杠坡遗址1.jpg" alt="青杠坡战斗遗址纪念园入口全景" loading="lazy">
                <figcaption>入口广场 | 可辨识纪念园的中轴线与主要参观点</figcaption>
              </figure>
            </div>
          </article>

          <article id="qinggangpo-monument" class="shared-route__stage">
            <div class="shared-route__marker" aria-hidden="true">02</div>
            <div class="shared-route__card">
              <div class="shared-route__text">
                <h4>青杠坡红军烈士纪念碑</h4>
                <p>由台阶来到纪念碑前，碑心正面题字“青杠坡红军烈士纪念碑”，碑座上篆有青杠坡战斗简介，可供学习青杠坡战斗的背景、过程、后续及意义。参观时请保持肃静，并为其他游客留出通行空间。</p>
              </div>
              <figure class="shared-route__media shared-route__media--portrait">
                <img src="资源文件/土城 青杠坡遗址/土城 青杠坡遗址2.jpg" alt="青杠坡红军烈士纪念碑" loading="lazy">
                <figcaption>纪念碑 | 主体矗立纪念园轴线高处，碑座镌刻着战斗史实</figcaption>
              </figure>
            </div>
          </article>

          <article id="qinggangpo-relief" class="shared-route__stage">
            <div class="shared-route__marker" aria-hidden="true">03</div>
            <div class="shared-route__card">
              <div class="shared-route__text">
                <h4>山地战斗浮雕</h4>
                <p>浮雕描绘青杠坡战斗中英勇奋战的将士们，极具感染力，从中不难看出红军当年的昂扬风貌。烈士墓碑静静矗立，墓碑苍苍而小草青青，青山埋忠骨，佑一方水土。</p>
              </div>
              <figure class="shared-route__media">
                <img src="资源文件/土城 青杠坡遗址/土城 青杠坡遗址4.jpg" alt="青杠坡战斗主题浮雕" loading="lazy">
                <figcaption>浮雕 | 以群像雕刻还原战地场景，再现红军将士奋勇作战的风貌</figcaption>
              </figure>
            </div>
          </article>

          <article id="qinggangpo-marker" class="shared-route__stage">
            <div class="shared-route__marker" aria-hidden="true">04</div>
            <div class="shared-route__card">
              <div class="shared-route__text">
                <h4>红军医院纪念馆</h4>
                <p>沿台阶下山，过永安寺，见红军医院纪念馆。馆内一共三层楼，从早起卫生队的成立，到战时军队医院、根据地红军医院的创建发展壮大，到新中国成立后全国卫生工作的开展以及新时代军队卫生工作新气象，详细介绍红军医院发展历史。除发展沿革外，馆内陈设红军自制医疗器械，引用人物小传，帮助游客更好体会红军善于创造、一心为民、不畏牺牲的伟大精神。馆内陈设拍照仅供个人学习欣赏，不供对外宣传。</p>
              </div>
              <figure class="shared-route__media shared-route__media--portrait">
                <img src="资源文件/土城 青杠坡遗址/土城 青杠坡遗址5.jpg" alt="青杠坡战斗遗址红色纪念标识" loading="lazy">
                <figcaption>纪念馆 | 陈列医疗史料与实物，完整呈现红军医院的发展沿革</figcaption>
              </figure>
            </div>
          </article>
        </div>

        <a href="https://baike.baidu.com/item/%E9%9D%92%E6%9D%A0%E5%9D%A1%E6%88%98%E6%96%97%E9%81%97%E5%9D%80/19855248" target="_blank">百度百科 →</a>
        <a class="more-images-link" href="gallery.html?spot=three">更多图片 →</a>
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
          <div class="loushan-route__lead">
            <h2 class="loushan-route__section-title">参观路线</h2>
            <p>建议从摩崖石刻起步，依次经过红军烈士纪念碑、战壕遗址、长空桥、雁鸣塔和英雄纪念林，最后到红军战斗遗址陈列馆完成历史脉络的回望。</p>
            <blockquote>
              <p>雄关漫道真如铁，</p>
              <p>而今迈步从头越。</p>
              <cite>——毛泽东《忆秦娥·娄山关》</cite>
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
                <h4>摩崖石刻</h4>
                <p>巨大的“娄山关”红字石刻依崖而立，是景区最醒目的地标。登山前，可在此观察娄山关两山夹峙的险要地势，直观理解“黔北锁钥”与“易守难攻”的含义。</p>
              </div>
              <figure class="loushan-stop__media">
                <img src="资源文件/市区 娄山关/市区 娄山关4.jpg" alt="山崖上的娄山关红色摩崖石刻" loading="lazy">
                <figcaption>摩崖石刻 | “娄山关”石刻，关隘入口处的标志性景观</figcaption>
              </figure>
            </div>
          </article>

          <article id="loushan-monument" class="loushan-stop">
            <div class="loushan-stop__marker" aria-hidden="true">02</div>
            <div class="loushan-stop__card">
              <div class="loushan-stop__text">
                <h4>红军烈士纪念碑</h4>
                <p>纪念碑以高耸的红砖呼应娄山关险峻的山势，中间鲜红的党旗象征红军胜利夺取制高点。可重点观看基座上的战斗浮雕与纪念题字，在肃穆中缅怀遵义战役中牺牲的烈士。</p>
              </div>
              <figure class="loushan-stop__media loushan-stop__media--portrait">
                <img src="资源文件/市区 娄山关/市区 娄山关13.jpg" alt="娄山关红军烈士纪念碑及基座浮雕" loading="lazy">
                <figcaption>纪念碑 | 红砖碑体，立于山间，纪念娄山关战斗中牺牲的红军将士</figcaption>
              </figure>
            </div>
          </article>

          <article id="loushan-trench" class="loushan-stop">
            <div class="loushan-stop__marker" aria-hidden="true">03</div>
            <div class="loushan-stop__card">
              <div class="loushan-stop__text">
                <h4>战壕遗址</h4>
                <p>小尖山顶视野开阔，碎石块在此环坑堆砌，形成浅洼状战壕。站在这制高点俯瞰山谷，可以更直观认识抢占关口对于侦察与防御的决定性意义，感受到当年红军抢先登上制高点五分钟的重量。</p>
              </div>
              <figure class="loushan-stop__media">
                <img alt="小尖山战壕遗址说明牌与石垒战壕" loading="lazy">
                <figcaption>战壕遗址 | 娄山关战斗时期修筑的防御工事遗存</figcaption>
              </figure>
            </div>
          </article>

          <article id="loushan-bridge" class="loushan-stop">
            <div class="loushan-stop__marker" aria-hidden="true">04</div>
            <div class="loushan-stop__card">
              <div class="loushan-stop__text">
                <h4>长空桥</h4>
                <p>长空桥悬于山谷之上，两侧红旗迎风展开。行至桥中，脚下是深谷树冠，四周峰岭连绵，是感受“一夫当关，万夫莫开”地势的最佳点位。桥面有风时请放慢脚步，勿倚靠或攀爬护栏。</p>
              </div>
              <figure class="loushan-stop__media">
                <img src="资源文件/市区 娄山关/市区 娄山关18.jpg" alt="娄山关长空桥两侧挂满红旗" loading="lazy">
                <figcaption>长空桥 | 横跨山谷的铁索桥，连接关隘两侧，桥面红旗勾连红色记忆</figcaption>
              </figure>
            </div>
          </article>

          <article id="loushan-tower" class="loushan-stop">
            <div class="loushan-stop__marker" aria-hidden="true">05</div>
            <div class="loushan-stop__card">
              <div class="loushan-stop__text">
                <h4>雁鸣塔</h4>
                <p>塔身是山脊游线上醒目的地标，登临附近可遥望层叠山峦。雨雾天气时，远山黛影更显层次，“苍山如海”尽收眼底。若感到疲惫，可在塔外木椅小坐休整。</p>
              </div>
              <figure class="loushan-stop__media loushan-stop__media--portrait">
                <img src="资源文件/市区 娄山关/市区 娄山关21.jpg" alt="娄山关山脊上的雁鸣塔" loading="lazy">
                <figcaption>雁鸣塔 | 塔影从山色中拔地而起，是路线后半程的醒目地标</figcaption>
              </figure>
            </div>
          </article>

          <article id="loushan-forest" class="loushan-stop">
            <div class="loushan-stop__marker" aria-hidden="true">06</div>
            <div class="loushan-stop__card">
              <div class="loushan-stop__text">
                <h4>英雄纪念林</h4>
                <p>这片白桦林是在战火被摧毁后重新栽种的，新生秀木挺拔竖直，枝干自有韧劲。树木倒下再起，恰如精神赴死而生，这片林子也由此成为纪念林。从开阔山脊走入静谧林间，游览节奏随之舒缓。请在此保持安静，于穿行中静静缅怀。</p>
              </div>
              <figure class="loushan-stop__media">
                <img src="资源文件/市区 娄山关/市区 娄山关1.jpg" alt="娄山关英雄纪念林中的林间步道" loading="lazy">
                <figcaption>纪念林 | 树林与石阶构成的纪念空间，林木葱郁，肃穆静谧</figcaption>
              </figure>
            </div>
          </article>

          <article id="loushan-museum" class="loushan-stop">
            <div class="loushan-stop__marker" aria-hidden="true">07</div>
            <div class="loushan-stop__card">
              <div class="loushan-stop__text">
                <h4>娄山关红军战斗遗址陈列馆</h4>
                <p>本馆以历史图片、战场实物、半景画和英雄故事，将山上所见的地形与遗址还原到具体的战斗进程中，帮助游客系统梳理两次攻占娄山关的历史脉络。建议将本馆放在娄山关最后一程，以实地观察带动历史理解。</p>
              </div>
              <figure class="loushan-stop__media">
                <img src="资源文件/市区 娄山关/市区 娄山关24.jpg" alt="娄山关红军战斗遗址陈列馆外观" loading="lazy">
                <figcaption>陈列馆 | 展陈战斗相关史料实物，系统介绍娄山关战斗经过</figcaption>
              </figure>
            </div>
          </article>
        </div>

        <a href="https://baike.baidu.com/item/%E5%A8%84%E5%B1%B1%E5%85%B3/1671640" target="_blank">百度百科 →</a>
        <a class="more-images-link" href="gallery.html?spot=four">更多图片 →</a>
      </div>
    `
  },
  five: {
    title: '四渡赤水纪念园',
    image: '资源文件/茅台镇 四渡赤水纪念园/茅台镇 四渡赤水纪念园12.jpg',
    contentStylesheets: ['shared-route.css'],
    summary: '沿纪念园浮雕、红军长征过茅台陈列馆和红军四渡赤水纪念塔，了解红军在茅台三渡赤水的历史。',
    introduction: '纪念园通过沿途浮雕、场馆陈设、敌我局势图、文字史料和展板，展示红军将士四渡赤水时的英雄气概，以及红军与茅台镇人民的军民鱼水情。',
    hours: '红军长征过茅台陈列馆无需预约，展馆开放时间为每周二至周日8:00~21:00。建议游览时长约1.5小时。',
    traffic: '可乘网约车直达纪念园，参观结束后可步行至红军桥、茅台渡口纪念碑等周边红色遗址继续游览。',
    tips: '可结合场馆内的敌我局势图、文字史料和展板，重点了解红军三渡赤水前后的历史细节。',
    route: `
      <div class="shared-route">
        <header class="shared-route__intro">
          <h2 class="shared-route__section-title">参观路线</h2>
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
                <h4>四渡赤水浮雕墙</h4>
                <p>浮雕墙位于纪念园转角，以丹霞石雕刻，重点再现红军将士在茅台渡口三渡赤水时的战斗与渡河场景。</p>
              </div>
              <figure class="shared-route__media">
                <img src="资源文件/茅台镇 四渡赤水纪念园/浮雕.jpg" alt="四渡赤水纪念园红军群像雕塑" loading="lazy">
                <figcaption>浮雕墙 | 丹霞浮雕，重现茅台渡口三渡赤水</figcaption>
              </figure>
            </div>
          </article>

          <article id="park-preface" class="shared-route__stage">
            <div class="shared-route__marker" aria-hidden="true">02</div>
            <div class="shared-route__card">
              <div class="shared-route__text">
                <h4>红军长征过茅台陈列馆</h4>
                <p>沿场馆内地标，结合馆内陈设、敌我局势图等材料可依次了解红军四渡赤水的历史。馆内详细介绍红军长征中两次经过仁怀的细节，特别聚焦红军于茅台镇三渡赤水前后的历史；结合文字史料和展板，可深入体会红军与茅台镇人民的军民鱼水情。</p>
              </div>
              <figure class="shared-route__media">
                <img src="资源文件/茅台镇 四渡赤水纪念园/三渡赤水.jpg" alt="四渡赤水纪念园展览前言" loading="lazy">
                <figcaption>前沿展板 | 系统概括茅台三渡的战役背景、主要过程与历史意义</figcaption>
              </figure>
            </div>
          </article>

          <article id="park-lantern" class="shared-route__stage">
            <div class="shared-route__marker" aria-hidden="true">03</div>
            <div class="shared-route__card">
              <div class="shared-route__text">
                <h4>红军四渡赤水纪念塔</h4>
                <p>出陈列馆沿台阶向上，四渡赤水纪念塔屹立眼前。纪念塔基座呈船形，塔身四根波浪柱错位重叠，象征红军四次渡河的机动迂回与乘风破浪的坚定信念。北侧四幅浮雕再现四渡赤水战役场景，环塔展板详述红军三渡赤水历史细节。</p>
              </div>
              <figure class="shared-route__media shared-route__media--portrait">
                <img src="资源文件/茅台镇 四渡赤水纪念园/纪念塔.jpg" alt="马灯照亮前行路主题画面" loading="lazy">
                <figcaption>纪念塔 | 船形基座与波浪柱身呼应渡河主题，环塔展板详述三渡赤水</figcaption>
              </figure>
            </div>
          </article>

        </div>

        <a href="https://baike.baidu.com/item/%E7%BA%A2%E5%86%9B%E5%9B%9B%E6%B8%A1%E8%B5%A4%E6%B0%B4%E7%BA%AA%E5%BF%B5%E5%A1%94/15480607" target="_blank">百度百科 →</a>
        <a class="more-images-link" href="gallery.html?spot=five">更多图片 →</a>
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
const detailBackLink = document.querySelector('.detail-back');
document.body.dataset.spot = spotKey;
detailContent.dataset.spot = spotKey;
detailBackLink.href = `index.html#spot-${spotKey}`;

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

$(document).ready(function () {
    $('.books-categories-link-btn').bind('click', function (e) {
        var TabDateName = $(this).data('name');
        $('.books-categories-link-btn').removeClass('books-categories-link-btn-active');
        $(this).addClass('books-categories-link-btn-active');
        switch (TabDateName) {
            case 'books-content-01':
                $('.books-content').children('.books-content-view').eq(0).children('.books-content-view-image').attr('href', 'https://www.iread.com.tw/Detail/Index?ProdId=B000685551');
                $('.books-content').children('.books-content-view').eq(0).children('.books-content-view-image').children('img').attr('src', 'images/image01-01.png');
                $('.books-content').children('.books-content-view').eq(0).children('h4').text('卡西與他們的瓦斯店');
                $('.books-content').children('.books-content-view').eq(0).children('span').text('郝妮爾著／南方家園文化');
                $('.books-content').children('.books-content-view').eq(0).children('article').text('「他們」是在宜蘭經營瓦斯行的男人們，也是這些男人身邊的女人小孩們。透過細緻鋪展人物生命的紋理、人物間的互動描述與對話，小說成就了一個豐沛立體的心靈世界。每個人物都刻畫得鮮明立體，獨白與對話寫得極好、極自然。說話的口氣、用字遣詞都深深鑲嵌在日常生活裡。（陳佩甄）');
                $('.books-content').children('.books-content-view').eq(0).children('.books-content-view-more');
                //
                $('.books-content').children('.books-content-view').eq(1).children('.books-content-view-image').attr('href', 'https://www.iread.com.tw/Detail/Index?ProdId=B000682562');
                $('.books-content').children('.books-content-view').eq(1).children('.books-content-view-image').children('img').attr('src', 'images/image01-02.png');
                $('.books-content').children('.books-content-view').eq(1).children('h4').text('她的小舌尖時時救我');
                $('.books-content').children('.books-content-view').eq(1).children('span').text('曹疏影著／黑眼睛文化');
                $('.books-content').children('.books-content-view').eq(1).children('article').text('這本詩集在數種「界」之間遊蕩與流淌，不只對應香港到台北的移居或回望，也顯現詩人對字詞宇宙的聯繫與戒備。短句的瞬間截斷、高反差的意象，產生刀鑿的力度，在平路製造斷崖，使意識與敘事的推進需求，產生落空的驚與警。她運行著事物的龐然淋漓，低伏酸楚，使夢幻中有歷史，櫻桃裡包藏金籽。（馬翊航）');
                $('.books-content').children('.books-content-view').eq(1).children('.books-content-view-more');
                //
                $('.books-content').children('.books-content-view').eq(2).children('.books-content-view-image').attr('href', 'https://www.iread.com.tw/Detail/Index?ProdId=B000679867');
                $('.books-content').children('.books-content-view').eq(2).children('.books-content-view-image').children('img').attr('src', 'images/image01-03.png');
                $('.books-content').children('.books-content-view').eq(2).children('h4').text('成為洞穴');
                $('.books-content').children('.books-content-view').eq(2).children('span').text('川貝母著／大塊文化');
                $('.books-content').children('.books-content-view').eq(2).children('article').text('作者不讓自己說得太多、畫得太滿，而是後退一步，成為洞穴，讓作品充滿留白與縫隙，邀請讀者帶著各自的洞穴，沉浸在完全的漆黑與靜默裡，得到無需言語的心領神會。任由想像力去滋長、蔓生，符號與符號自由互涉、轉換。那將是無法被描述指認的形體。交會於更深的地底，或更遙遠的星系。（陳允元）');
                $('.books-content').children('.books-content-view').eq(2).children('.books-content-view-more');
                //
                $('.books-content').children('.books-content-view').eq(3).children('.books-content-view-image').attr('href', 'https://www.iread.com.tw/Detail/Index?ProdId=B000677353');
                $('.books-content').children('.books-content-view').eq(3).children('.books-content-view-image').children('img').attr('src', 'images/image01-04.png');
                $('.books-content').children('.books-content-view').eq(3).children('h4').text('成為真正的人');
                $('.books-content').children('.books-content-view').eq(3).children('span').text('甘耀明著／寶瓶文化');
                $('.books-content').children('.books-content-view').eq(3).children('article').text('本書在重重歷史記憶、族群文化的包覆下，卻未見一絲緩滯與限縮，在時而濃稠時而流動的語言中，一波波地送風與照亮。少年哈魯牧特三度成為「活下來」的人，生還不只意味災禍與倖免，也是記憶的多次託付與接引。小說各種詞與物的再銜接，鮮活的顯影，使人與萬物的名字，再次得到機會。（馬翊航）');
                $('.books-content').children('.books-content-view').eq(3).children('.books-content-view-more');
                //
                $('.books-content').children('.books-content-view').eq(4).children('.books-content-view-image').attr('href', 'https://www.iread.com.tw/Detail/Index?ProdId=B000674944');
                $('.books-content').children('.books-content-view').eq(4).children('.books-content-view-image').children('img').attr('src', 'images/image01-05.png');
                $('.books-content').children('.books-content-view').eq(4).children('h4').text('老派少女購物路線');
                $('.books-content').children('.books-content-view').eq(4).children('span').text('洪愛珠著／遠流出版');
                $('.books-content').children('.books-content-view').eq(4).children('article').text('這是一部好看的飲食之書，也是動人的記憶與自我追尋之書。文字不煽情浮誇，以節制內斂的筆調，呈現極深的哀傷與情感；寫購物、煮食、品味、文化則明快飽滿。扎實簡潔，濃淡有致，讀來酣暢且餘韻無窮。知識性、情感面及可讀性皆備，並達到極好的平衡，帶給讀者愉悅而層次豐富的閱讀感受。（陳允元）');
                $('.books-content').children('.books-content-view').eq(4).children('.books-content-view-more');
                //
                $('.books-content').children('.books-content-view').eq(5).children('.books-content-view-image').attr('href', 'https://www.iread.com.tw/Detail/Index?ProdId=B000676395');
                $('.books-content').children('.books-content-view').eq(5).children('.books-content-view-image').children('img').attr('src', 'images/image01-06.png');
                $('.books-content').children('.books-content-view').eq(5).children('h4').text('我長在打開的樹洞');
                $('.books-content').children('.books-content-view').eq(5).children('span').text('程廷（Apyang Imiq）著／九歌出版');
                $('.books-content').children('.books-content-view').eq(5).children('article').text('作者寫在支亞干務農的日常，寫移除一株孱弱小米時的心痛，寫翻土，寫火雞，寫當代原住民與社會系統及自然環境之間看似微細但深密盤纏如樹根的彼此進退，結合出色的白描功夫，其章法、節奏、行與停，都在十分恰當的位置。是為了深切訴說而寫，而不是取用議題為作品保駕背書。（黃麗群）');
                $('.books-content').children('.books-content-view').eq(5).children('.books-content-view-more');
                //
                $('.books-content').children('.books-content-view').eq(6).children('.books-content-view-image').attr('href', 'https://www.iread.com.tw/Detail/Index?ProdId=B000668377');
                $('.books-content').children('.books-content-view').eq(6).children('.books-content-view-image').children('img').attr('src', 'images/image01-07.png');
                $('.books-content').children('.books-content-view').eq(6).children('h4').text('她的小舌尖時時救我');
                $('.books-content').children('.books-content-view').eq(6).children('span').text('曹疏影著／黑眼睛文化');
                $('.books-content').children('.books-content-view').eq(6).children('article').text('「他們」是在宜蘭經營瓦斯行的男人們，也是這些男人身邊的女人小孩們。透過細緻鋪展人物生命的紋理、人物間的互動描述與對話，小說成就了一個豐沛立體的心靈世界。每個人物都刻畫得鮮明立體，獨白與對話寫得極好、極自然。說話的口氣、用字遣詞都深深鑲嵌在日常生活裡。（陳佩甄）');
                $('.books-content').children('.books-content-view').eq(6).children('.books-content-view-more');
                //
                $('.books-content').children('.books-content-view').eq(7).children('.books-content-view-image').attr('href', 'https://www.iread.com.tw/Detail/Index?ProdId=B000667968');
                $('.books-content').children('.books-content-view').eq(7).children('.books-content-view-image').children('img').attr('src', 'images/image01-08.png');
                $('.books-content').children('.books-content-view').eq(7).children('h4').text('拉流斗霸：尋找大豹社事件隘勇線與餘族');
                $('.books-content').children('.books-content-view').eq(7).children('span').text('高俊宏著／遠足文化');
                $('.books-content').children('.books-content-view').eq(7).children('article').text('沿續對「台灣山林戰爭、帝國與影像」的關注，作者花費數年探索日治時期被滅社的泰雅族「大豹社」事件隘勇線遺跡，調查過後更由線到人、由山到部落尋找大豹社後裔。藝術家從追尋真相到理解事件背後血淚的歷程，是一場扣人心弦的心理震盪，使本書顯得更加個人化，也更能感動讀者。（高崇文）');
                $('.books-content').children('.books-content-view').eq(7).children('.books-content-view-more');
                //
                $('.books-content').children('.books-content-view').eq(8).children('.books-content-view-image').attr('href', 'https://www.iread.com.tw/Detail/Index?ProdId=B000677188');
                $('.books-content').children('.books-content-view').eq(8).children('.books-content-view-image').children('img').attr('src', 'images/image01-09.png');
                $('.books-content').children('.books-content-view').eq(8).children('h4').text('新寶島');
                $('.books-content').children('.books-content-view').eq(8).children('span').text('黃崇凱著／春山出版');
                $('.books-content').children('.books-content-view').eq(8).children('article').text('這是空間的穿越劇。一覺醒來，台灣全島人民發現自己全部被移到了古巴。當台灣換了地理位置，那個鄰近威脅的巨靈現在遙不可及，這是好消息還是壞消息？沒有了台灣的台灣人，要如何確定自己的「台灣性」？從這個近乎戲謔的前提開頭，作者展開他驚人的寫作能力，是難能目睹的奇觀式寫作。（詹宏志）');
                $('.books-content').children('.books-content-view').eq(8).children('.books-content-view-more');
                //
                $('.books-content').children('.books-content-view').eq(9).children('.books-content-view-image').attr('href', 'https://www.iread.com.tw/Detail/Index?ProdId=B000677163');
                $('.books-content').children('.books-content-view').eq(9).children('.books-content-view-image').children('img').attr('src', 'images/image01-10.png');
                $('.books-content').children('.books-content-view').eq(9).children('h4').text('綠色牢籠：埋藏於沖繩西表島礦坑的台灣記憶');
                $('.books-content').children('.books-content-view').eq(9).children('span').text('黄胤毓著／前衛出版');
                $('.books-content').children('.books-content-view').eq(9).children('article').text('本書雖是同名紀錄片的側記，卻也是獨立的平行創作，文字具有帶領讀者進入現場的魔力。字裡行間透露保留或捨棄任何片段的掙扎，陳述怎樣藉有限的證據逼近真實，是紀錄片本身難以呈現的思辨。歷史創傷必須經由不斷的敘事得以療癒，本書讀者或許會為往事嘆息，亦油生對生命的敬意。（吳易澄）');
                $('.books-content').children('.books-content-view').eq(9).children('.books-content-view-more');
                return false;
                break;

            case 'books-content-02':
                $('.books-content').children('.books-content-view').eq(0).children('.books-content-view-image').attr('href', 'https://www.iread.com.tw/Detail/Index?ProdId=B000671356');
                $('.books-content').children('.books-content-view').eq(0).children('.books-content-view-image').children('img').attr('src', 'images/image02-01.png');
                $('.books-content').children('.books-content-view').eq(0).children('h4').text('大地之下：時間無限深邃的地方');
                $('.books-content').children('.books-content-view').eq(0).children('span').text('羅伯特．麥克法倫著／Nakao Eki Pacidal譯／大家出版');
                $('.books-content').children('.books-content-view').eq(0).children('article').text('是自然寫作，更是關於地面下的寓言與語言的書。作者以「深度時間」帶領我們探索肉身生命尺度外的脈動與訊息，乃至知識與想像、心靈與物質、可言說與不可言說的幽黯回聲。諸多深邃猶如巨大的謎語與鏡子，僅僅一部分的幽微廣大，就能使人領會何謂鍾愛，死亡與無限。（馬翊航）');
                $('.books-content').children('.books-content-view').eq(0).children('.books-content-view-more');
                //
                $('.books-content').children('.books-content-view').eq(1).children('.books-content-view-image').attr('href', 'https://www.iread.com.tw/Detail/Index?ProdId=B000661041');
                $('.books-content').children('.books-content-view').eq(1).children('.books-content-view-image').children('img').attr('src', 'images/image02-02.png');
                $('.books-content').children('.books-content-view').eq(1).children('h4').text('世界是垂直的');
                $('.books-content').children('.books-content-view').eq(1).children('span').text('史提芬．葛雷罕著／高郁婷、王志弘譯／臉譜出版');
                $('.books-content').children('.books-content-view').eq(1).children('article').text('本書像一幅令人驚喜的立體地圖，以垂直於地表的獨特方式繪製，是真實世界不可能存在的巨型尺度升降機，載著讀者上窮太空、下探礦洞。從知識領域到書寫筆調，無不貼合所欲揭露的爭議而恣肆發揮，每一篇都是精簡而深刻的技術史。文字生動加上大量歷史圖片，視覺上極其過癮。（區曣中）');
                $('.books-content').children('.books-content-view').eq(1).children('.books-content-view-more');
                //
                $('.books-content').children('.books-content-view').eq(2).children('.books-content-view-image').attr('href', 'https://www.iread.com.tw/Detail/Index?ProdId=B000681189');
                $('.books-content').children('.books-content-view').eq(2).children('.books-content-view-image').children('img').attr('src', 'images/image02-03.png');
                $('.books-content').children('.books-content-view').eq(2).children('h4').text('白銀、刀劍與石頭');
                $('.books-content').children('.books-content-view').eq(2).children('span').text('瑪利．阿拉納著／楊芩雯譯／時報文化');
                $('.books-content').children('.books-content-view').eq(2).children('article').text('暴力從何而來？人為何被驅使進入暴力的結構而無法脫身？祕魯裔美籍作家跳脫線性史觀，以當代真實人物的生命歷程，分別貫穿三個章節，三度重現暴力的循環。作者旁徵博引學術文獻，並善用西班牙語文獻，使我們得以從不同角度看到拉丁美洲，這塊台灣最多邦交國、卻亟需更多瞭解的地區。（趙恩潔）');
                $('.books-content').children('.books-content-view').eq(2).children('.books-content-view-more');
                //
                $('.books-content').children('.books-content-view').eq(3).children('.books-content-view-image').attr('href', 'https://www.iread.com.tw/Detail/Index?ProdId=B000681222');
                $('.books-content').children('.books-content-view').eq(3).children('.books-content-view-image').children('img').attr('src', 'images/image02-04.png');
                $('.books-content').children('.books-content-view').eq(3).children('h4').text('吃佛：從一座城市窺見西藏的劫難與求生');
                $('.books-content').children('.books-content-view').eq(3).children('span').text('芭芭拉．德米克著／洪慧芳譯／麥田出版');
                $('.books-content').children('.books-content-view').eq(3).children('article').text('作者語調平緩的紀實書寫，讓讀者真實感受到極權統治的恐怖，文字間傳達中共透過現代科技，無孔不入滲透藏人日常生活的窒息感，部分藏人則被迫以自身生命控訴中共當局的壓迫。本書所述情境對今日臺灣而言，時間並不久遠，距離也非遙不可及，甚至可說緊密相關。（凌宗魁）');
                $('.books-content').children('.books-content-view').eq(3).children('.books-content-view-more');
                //
                $('.books-content').children('.books-content-view').eq(4).children('.books-content-view-image').attr('href', 'https://www.iread.com.tw/Detail/Index?ProdId=B000672413');
                $('.books-content').children('.books-content-view').eq(4).children('.books-content-view-image').children('img').attr('src', 'images/image02-05.png');
                $('.books-content').children('.books-content-view').eq(4).children('h4').text('此生，你我皆短暫燦爛');
                $('.books-content').children('.books-content-view').eq(4).children('span').text('王鷗行著／何穎怡譯／時報文化');
                $('.books-content').children('.books-content-view').eq(4).children('article').text('一首遍體鱗傷卻不怨不傷的絕美詩章，一封寄給不識字母親的訴情之書。越裔美國詩人的第一本小說，關於隔絕、破碎、孤獨、傷害，他要書寫告訴母親他愛她，愛及她的不幸與傷痕的記憶，他也要用這些痛苦為基礎，建立自己生命的中心。通篇語調溫柔輕聲，一場文字對抗傷痛的戰爭，而文字是勝利了。（詹宏志）');
                $('.books-content').children('.books-content-view').eq(4).children('.books-content-view-more');
                //
                $('.books-content').children('.books-content-view').eq(5).children('.books-content-view-image').attr('href', 'https://www.iread.com.tw/Detail/Index?ProdId=B000688176');
                $('.books-content').children('.books-content-view').eq(5).children('.books-content-view-image').children('img').attr('src', 'images/image02-06.png');
                $('.books-content').children('.books-content-view').eq(5).children('h4').text('羽毛賊：一樁由執念、貪婪、欲望所引發，博物史上最不尋常的竊案');
                $('.books-content').children('.books-content-view').eq(5).children('span').text('柯克．華萊士．強森著／吳建龍譯／馬可孛羅文化');
                $('.books-content').children('.books-content-view').eq(5).children('article').text('一位非營利組織工作者為了追逐真相、主持正義，開啟了一場超展開的調查之旅。前半部自然文化史的格局令人驚艷，後半部則進入偵探小說風格，作者親自跨海「辦案」，情節引人入勝。一整串「管很寬」的討論，使得全書不但知識量奇高，同時兼顧趣味性與嚴肅性。（吳易澄）');
                $('.books-content').children('.books-content-view').eq(5).children('.books-content-view-more');
                //
                $('.books-content').children('.books-content-view').eq(6).children('.books-content-view-image').attr('href', 'https://www.iread.com.tw/Detail/Index?ProdId=B000684066');
                $('.books-content').children('.books-content-view').eq(6).children('.books-content-view-image').children('img').attr('src', 'images/image02-07.png');
                $('.books-content').children('.books-content-view').eq(6).children('h4').text('真菌微宇宙：看生態煉金師如何驅動世界、推展生命，連結地球萬物');
                $('.books-content').children('.books-content-view').eq(6).children('span').text('梅林．謝德瑞克著／周沛郁譯／果力文化');
                $('.books-content').children('.books-content-view').eq(6).children('article').text('本書超乎知識普及的境界，刺激讀者思考我們怎樣理解生命的性質，在真菌的啟示面前，又可以怎樣重新解讀生命？作者娓娓細述專業資訊卻不令讀者感到負擔，議論時理性又清晰，敘事時情境活潑而有感染力。讀到後來，越來越能同理「師法真菌」的書前致謝語是從何而生。（區曣中）');
                $('.books-content').children('.books-content-view').eq(6).children('.books-content-view-more');
                //
                $('.books-content').children('.books-content-view').eq(7).children('.books-content-view-image').attr('href', 'https://www.iread.com.tw/Detail/Index?ProdId=B000684481');
                $('.books-content').children('.books-content-view').eq(7).children('.books-content-view-image').children('img').attr('src', 'images/image02-08.png');
                $('.books-content').children('.books-content-view').eq(7).children('h4').text('從人到鬼，從鬼到人：日本戰犯與中國的審判');
                $('.books-content').children('.books-content-view').eq(7).children('span').text('顧若鵬著／江威儀譯／遠足文化');
                $('.books-content').children('.books-content-view').eq(7).children('article').text('本書讓原本可能兩極化、充滿控訴的議題，變得更複雜但也更合理，讓「南京大屠殺為何始終沒有受到應有的審判」這個歷史命題，跳脫舊有的控訴框架。作者以豐富的檔案及綿密的論證，爬梳各種行動者的觀點，重建了那個時代的詭譎。細膩的處理、多方的同理以及證據的鋪陳，持續與讀者對話。（趙恩潔）');
                $('.books-content').children('.books-content-view').eq(7).children('.books-content-view-more');
                //
                $('.books-content').children('.books-content-view').eq(8).children('.books-content-view-image').attr('href', 'https://www.iread.com.tw/Detail/Index?ProdId=B000666446');
                $('.books-content').children('.books-content-view').eq(8).children('.books-content-view-image').children('img').attr('src', 'images/image02-09.png');
                $('.books-content').children('.books-content-view').eq(8).children('h4').text('逝物之書：我們都是消逝國度的局外人');
                $('.books-content').children('.books-content-view').eq(8).children('span').text('茱迪思．夏朗斯基著／管中琪譯／大塊文化');
                $('.books-content').children('.books-content-view').eq(8).children('article').text('作者揀選出12則曾存在人類時空，如今已消失的人事物地進行鋪陳，一則一則開展風貌變幻、詩意飽滿，不忽略故事性、同時亦富有知識魅力的敘述。可隨時展開、隨時停頓、任何段落拾起都饒富意趣，用紙與裝幀細緻優美，在當代短促閱讀習慣與紙本書獨特體驗之間頗有平衡。（黃麗群）');
                $('.books-content').children('.books-content-view').eq(8).children('.books-content-view-more');
                //
                $('.books-content').children('.books-content-view').eq(9).children('.books-content-view-image').attr('href', 'https://www.iread.com.tw/Detail/Index?ProdId=B000689120');
                $('.books-content').children('.books-content-view').eq(9).children('.books-content-view-image').children('img').attr('src', 'images/image02-10.png');
                $('.books-content').children('.books-content-view').eq(9).children('h4').text('最後一個人');
                $('.books-content').children('.books-content-view').eq(9).children('span').text('金息著／胡椒筒譯／時報文化');
                $('.books-content').children('.books-content-view').eq(9).children('article').text('以韓國慰安婦的受害者證言為藍本寫就的小說，敘事角度與筆法超乎預期地令人驚豔，以冷靜節制、高度詩性的語言，既流暢地呈現慰安婦將創傷經驗投射於外部現實的象徵轉換，也與殘酷到難以逼視的國家暴力，共構產生極巨大的張力。即便如此，這仍是一次痛苦揪心、難忘的閱讀經驗。（陳允元）');
                $('.books-content').children('.books-content-view').eq(9).children('.books-content-view-more');
                return false;
                break;

            case 'books-content-03':
                $('.books-content').children('.books-content-view').eq(0).children('.books-content-view-image').attr('href', 'https://www.iread.com.tw/Detail/Index?ProdId=B000681535');
                $('.books-content').children('.books-content-view').eq(0).children('.books-content-view-image').children('img').attr('src', 'images/image03-01.png');
                $('.books-content').children('.books-content-view').eq(0).children('h4').text('大腦韌性：高齡化時代最重要的健康資產');
                $('.books-content').children('.books-content-view').eq(0).children('span').text('桑賈伊．古普塔著／張瓊懿譯／行路');
                $('.books-content').children('.books-content-view').eq(0).children('article').text('失智是我們最深的憂慮和恐懼，除了惴惴不安，原來我們不必束手無策，坐以待病。作者援引自身經驗和諸多研究，深入淺出，巧譬善喻，把複雜的腦科學闡釋得清晰通透，通俗易懂，更可貴的是帶來全新觀念。全書拆穿諸多迷思，並提出切實可行的計畫，不管老少，這是一本必讀的好書。（蔡珠兒）');
                $('.books-content').children('.books-content-view').eq(0).children('.books-content-view-more');
                //
                $('.books-content').children('.books-content-view').eq(1).children('.books-content-view-image').attr('href', 'https://www.iread.com.tw/Detail/Index?ProdId=B000664286');
                $('.books-content').children('.books-content-view').eq(1).children('.books-content-view-image').children('img').attr('src', 'images/image03-02.png');
                $('.books-content').children('.books-content-view').eq(1).children('h4').text('世界文字圖解簡史');
                $('.books-content').children('.books-content-view').eq(1).children('span').text('文、圖：維達利／鼎玉鉉譯／大塊文化');
                $('.books-content').children('.books-content-view').eq(1).children('article').text('語言是非常抽象的概念，而文字的最初型態即是一種圖像。本書以獨特的圖像風格，在短短68頁中串聯了全球前後五千多年，超過百種書寫文字的發展歷史。作者對各種語言的博學解析，令人驚豔，資訊含量極高，卻不乏幽默趣味，一本就讓人掌握了全世界的書寫系統。（吳語涵）');
                $('.books-content').children('.books-content-view').eq(1).children('.books-content-view-more');
                //
                $('.books-content').children('.books-content-view').eq(2).children('.books-content-view-image').attr('href', 'https://www.iread.com.tw/Detail/Index?ProdId=B000692641');
                $('.books-content').children('.books-content-view').eq(2).children('.books-content-view-image').children('img').attr('src', 'images/image03-03.png');
                $('.books-content').children('.books-content-view').eq(2).children('h4').text('追尋寧靜：一場顛覆聽覺體驗的田野踏查，探索聲音的未知領域');
                $('.books-content').children('.books-content-view').eq(2).children('span').text('喬治．普羅契尼克著／韓絜光譯／漫遊者文化');
                $('.books-content').children('.books-content-view').eq(2).children('article').text('作者拉出跨越界域的視野，從動物演化、宗教、行銷等角度，從大賣場到外太空等場景來討論寧靜與聲音這件事。文筆流暢且平易近人，引經據典加上自然穿插的訪談，融入個人的哲思感悟，除了令人重新思考聲音的價值，更敦促我們去感受顛覆刻板印象的聽覺體驗。（吳語涵）');
                $('.books-content').children('.books-content-view').eq(2).children('.books-content-view-more');
                //
                $('.books-content').children('.books-content-view').eq(3).children('.books-content-view-image').attr('href', 'https://www.iread.com.tw/Detail/Index?ProdId=B000678689');
                $('.books-content').children('.books-content-view').eq(3).children('.books-content-view-image').children('img').attr('src', 'images/image03-04.png');
                $('.books-content').children('.books-content-view').eq(3).children('h4').text('造自己的船，環我們的島');
                $('.books-content').children('.books-content-view').eq(3).children('span').text('陳明忠著／釀出版');
                $('.books-content').children('.books-content-view').eq(3).children('article').text('兩位熱血大叔動念用船環島，以自造的無動力木帆船完成海上環島1175公里的壯舉。直率的文字搭配豐富圖片，生動描寫操帆航海的實況，途經26個風貌各異的漁港，有退潮後船隻會擱淺的潮乾港、有如迷宮的廣大蚵架地帶，加上上岸補給過夜時的有趣邂逅，讀者彷彿也暢遊了另一種角度的臺灣。（陳涵郁）');
                $('.books-content').children('.books-content-view').eq(3).children('.books-content-view-more');
                //
                $('.books-content').children('.books-content-view').eq(4).children('.books-content-view-image').attr('href', 'https://www.iread.com.tw/Detail/Index?ProdId=B000692643');
                $('.books-content').children('.books-content-view').eq(4).children('.books-content-view-image').children('img').attr('src', 'images/image03-05.png');
                $('.books-content').children('.books-content-view').eq(4).children('h4').text('就算牠沒有臉：在人類世思考動物倫理與生命教育的十二道難題');
                $('.books-content').children('.books-content-view').eq(4).children('span').text('黃宗慧、黃宗潔著／麥田出版');
                $('.books-content').children('.books-content-view').eq(4).children('article').text('長期關注動物與人類關係的兩位作者，以書信往復方式展現當下社會關於動物的許多疑問。大量引用本土案例，拉近討論的切身性，提供倫理思考與選擇的機會，給予讀者更多空間去反芻，從中理解到人類也是動物的一環，擁有愛與哀悼的能力，或許正是為了能與動物更貼近的一同生存、生活。（鍾尚樺）');
                $('.books-content').children('.books-content-view').eq(4).children('.books-content-view-more');
                //
                $('.books-content').children('.books-content-view').eq(5).children('.books-content-view-image').attr('href', 'https://www.iread.com.tw/Detail/Index?ProdId=B000678384');
                $('.books-content').children('.books-content-view').eq(5).children('.books-content-view-image').children('img').attr('src', 'images/image03-06.png');
                $('.books-content').children('.books-content-view').eq(5).children('h4').text('朝聖台灣：燒王船、迎媽祖，一位攝影記者的三十年祭典行腳');
                $('.books-content').children('.books-content-view').eq(5).children('span').text('陳逸宏攝影、口述／沈維巖文字撰述／一葦文思');
                $('.books-content').children('.books-content-view').eq(5).children('article').text('迎王祭典、媽祖遶境是台灣重要的宗教文化活動，本書集結作者30年間拍攝的珍貴影像，以參與者角度捕捉生動的慶典、誠心的信眾及廟會人物，讓人如身歷其境。照片的附註除了影像的精簡說明，更像在和自己對話，字裡行間透露出的溫度，讓人忍不住跟著凝思與感動。（黃惠敏）');
                $('.books-content').children('.books-content-view').eq(5).children('.books-content-view-more');
                //
                $('.books-content').children('.books-content-view').eq(6).children('.books-content-view-image').attr('href', 'https://www.iread.com.tw/Detail/Index?ProdId=B000684485');
                $('.books-content').children('.books-content-view').eq(6).children('.books-content-view-image').children('img').attr('src', 'images/image03-07.png');
                $('.books-content').children('.books-content-view').eq(6).children('h4').text('搭便車不是一件隨機的事');
                $('.books-content').children('.books-content-view').eq(6).children('span').text('李易安／聯經出版');
                $('.books-content').children('.books-content-view').eq(6).children('article').text('搭便車是特殊的經歷，又在陌生罕遠的國度，作者把沿途見聞寫得鮮明活潑，趣味盎然，卻未落入小清新的俗套，也非誇示獵奇，反而經常反觀自照，在差異中尋思共性。此書超越遊記格局，是一本迷人的地理史，精彩的田野筆記，流動的公路民族誌，讀來很有畫面感，能嗅到當地的生活氣味。（蔡珠兒）');
                $('.books-content').children('.books-content-view').eq(6).children('.books-content-view-more');
                //
                $('.books-content').children('.books-content-view').eq(7).children('.books-content-view-image').attr('href', 'https://www.iread.com.tw/Detail/Index?ProdId=B000679916');
                $('.books-content').children('.books-content-view').eq(7).children('.books-content-view-image').children('img').attr('src', 'images/image03-08.png');
                $('.books-content').children('.books-content-view').eq(7).children('h4').text('親密關係暴力：以愛為名的虐待與傷害');
                $('.books-content').children('.books-content-view').eq(7).children('span').text('瑞秋．路易斯．斯奈德著／張馨方譯／馬可孛羅文化');
                $('.books-content').children('.books-content-view').eq(7).children('article').text('來自親密關係的暴力容易因為「家醜不可外揚」的觀念，或認為是愛的表現，而陷入難以求援或脫離的循環。本書帶領讀者體察家暴事件經過及相關人員的心歷路程，除了法律的制訂，也需要整個社會體系勇於面對，在更多理解與對話中，讓事件當事人獲得即時的幫助。（黃惠敏）');
                $('.books-content').children('.books-content-view').eq(7).children('.books-content-view-more');
                //
                $('.books-content').children('.books-content-view').eq(8).children('.books-content-view-image').attr('href', 'https://www.iread.com.tw/Detail/Index?ProdId=B000687997');
                $('.books-content').children('.books-content-view').eq(8).children('.books-content-view-image').children('img').attr('src', 'images/image03-09.png');
                $('.books-content').children('.books-content-view').eq(8).children('h4').text('親愛的圖書館');
                $('.books-content').children('.books-content-view').eq(8).children('span').text('蘇珊．歐琳著／宋瑛堂譯／時報文化');
                $('.books-content').children('.books-content-view').eq(8).children('article').text('以追查失火真相為主線，來回穿梭於圖書館的前半生與火災後的重生與變化，加上巧妙揀選的書籍史及逸聞，每翻開下一章都讓人驚奇。帶著讀者愉快穿梭時空的作者，其實正透過書寫來挽留時光的消逝。在知識流動的Google時代，只要圖書館存在，我們將不再害怕失去，所有故事都有棲身之地。（陳涵郁）');
                $('.books-content').children('.books-content-view').eq(8).children('.books-content-view-more');
                //
                $('.books-content').children('.books-content-view').eq(9).children('.books-content-view-image').attr('href', 'https://www.iread.com.tw/Detail/Index?ProdId=B000683757');
                $('.books-content').children('.books-content-view').eq(9).children('.books-content-view-image').children('img').attr('src', 'images/image03-10.png');
                $('.books-content').children('.books-content-view').eq(9).children('h4').text('鯨豚記：台灣首位鯨豚攝影師水下20年的夢想與堅持');
                $('.books-content').children('.books-content-view').eq(9).children('span').text('金磊著／大塊文化');
                $('.books-content').children('.books-content-view').eq(9).children('article').text('鏡頭捕捉的珍貴瞬間，直接凝視即已是心靈療癒。文字則記錄了當下的悸動，展現攝影師對於鯨豚保育與攝影專業的矛盾掙扎，不是單純為了拍攝鯨豚美好的畫面，更要尊重生物習性，克服精神上的恐懼、沮喪，記錄下更接近自然原初的樣貌。不論題材或攝影品質而言，本書都帶給台灣新的鼓舞。（鍾尚樺）');
                $('.books-content').children('.books-content-view').eq(9).children('.books-content-view-more');
                return false;
                break;

            case 'books-content-04':
                $('.books-content').children('.books-content-view').eq(0).children('.books-content-view-image').attr('href', 'https://www.iread.com.tw/Detail/Index?ProdId=B000688584');
                $('.books-content').children('.books-content-view').eq(0).children('.books-content-view-image').children('img').attr('src', 'images/image04-01.png');
                $('.books-content').children('.books-content-view').eq(0).children('h4').text('入冬前的楓葉信');
                $('.books-content').children('.books-content-view').eq(0).children('span').text('文、圖：菊地知己／米雅譯／步步出版');
                $('.books-content').children('.books-content-view').eq(0).children('article').text('作者以恣意的水墨渲染，畫出大自然的生命力。全書畫面充滿韻律，大量留白配合滿版畫面，跟著動物們在山林裡飛跳，找尋關於秋天的消息。節奏平穩又充滿驚喜，文字也極富節奏和韻律，是一本非常適合唸給孩子聽的繪本，也是一本藝術性極高，值得收藏的好繪本。（陳姝里）');
                $('.books-content').children('.books-content-view').eq(0).children('.books-content-view-more');
                //
                $('.books-content').children('.books-content-view').eq(1).children('.books-content-view-image').attr('href', 'https://www.iread.com.tw/Detail/Index?ProdId=B000689582');
                $('.books-content').children('.books-content-view').eq(1).children('.books-content-view-image').children('img').attr('src', 'images/image04-02.png');
                $('.books-content').children('.books-content-view').eq(1).children('h4').text('守護大海的人');
                $('.books-content').children('.books-content-view').eq(1).children('span').text('文、圖：玉米辰／交通部航港局');
                $('.books-content').children('.books-content-view').eq(1).children('article').text('嚴謹的構圖，黑白的基調，強調希望與幸福感的溫暖配色，全書動人地將「燈塔守」的工作及家庭介紹給讀者，在平實的日常生活中展現出不平凡的影響力。內斂深厚的情感，表現出職人的專業、自尊和責任心與毅力，彷彿是在為許多無名英雄作傳，見證他們默默的努力與無私的付出。（葉嘉青）');
                $('.books-content').children('.books-content-view').eq(1).children('.books-content-view-more');
                //
                $('.books-content').children('.books-content-view').eq(2).children('.books-content-view-image').attr('href', 'https://www.iread.com.tw/Detail/Index?ProdId=B000679472');
                $('.books-content').children('.books-content-view').eq(2).children('.books-content-view-image').children('img').attr('src', 'images/image04-03.png');
                $('.books-content').children('.books-content-view').eq(2).children('h4').text('沒有字的明信片');
                $('.books-content').children('.books-content-view').eq(2).children('span').text('向田邦子原作／角田光代文／西加奈子圖／林真美譯／小麥田出版');
                $('.books-content').children('.books-content-view').eq(2).children('article').text('一本單純卻深刻動人的書。以蠟筆塗鴉方式表現出厚重的肌理筆觸，鮮明的顏色搭配粗黑框，為簡單的構圖賦予強烈的張力。故事描寫戰爭時期家人間的情感牽繫，只憑六雙不同顏色的大小木屐，即象徵並演繹出每個人的情緒，不得不佩服繪者化繁為簡的功力。（林柏廷）');
                $('.books-content').children('.books-content-view').eq(2).children('.books-content-view-more');
                //
                $('.books-content').children('.books-content-view').eq(3).children('.books-content-view-image').attr('href', 'https://www.iread.com.tw/Detail/Index?ProdId=B000681955');
                $('.books-content').children('.books-content-view').eq(3).children('.books-content-view-image').children('img').attr('src', 'images/image04-04.png');
                $('.books-content').children('.books-content-view').eq(3).children('h4').text('爸爸的小貨車');
                $('.books-content').children('.books-content-view').eq(3).children('span').text('文、圖：Mori三木森／拾光工作室');
                $('.books-content').children('.books-content-view').eq(3).children('article').text('這是一本充滿想像力，但也非常貼近現實的作品。文字平實地書寫出小女孩對爸爸的依賴和崇拜，畫面卻讓我們看見許多奇幻的景象，將小女孩和讀者的觀察想像力放到最大。圖像的安排充滿設計感，令人驚喜。讀者也彷彿跟著這趟旅程，歷經風雨和黑暗，克服所有困難，繼續前行。（陳姝里）');
                $('.books-content').children('.books-content-view').eq(3).children('.books-content-view-more');
                //
                $('.books-content').children('.books-content-view').eq(4).children('.books-content-view-image').attr('href', 'https://www.iread.com.tw/Detail/Index?ProdId=B000688839');
                $('.books-content').children('.books-content-view').eq(4).children('.books-content-view-image').children('img').attr('src', 'images/image04-05.png');
                $('.books-content').children('.books-content-view').eq(4).children('h4').text('勇敢的山羊羅賓');
                $('.books-content').children('.books-content-view').eq(4).children('span').text('文、圖：菲利普．喬丹諾／陳怡潔譯／維京國際');
                $('.books-content').children('.books-content-view').eq(4).children('article').text('以重複出現的構圖，藉由顏色的變化呈現山羊羅賓生命中的三個重要階段：在同伴中孤獨，服務同伴，以及最終的獨處，其間的轉變幽微細緻，簡單的圖像構成時而簡約明朗，時而飽滿瑰麗，讓我們和羅賓一樣，離開後仍屢屢回望。闔上書頁，圖像述說故事的聲音仍然不斷迴盪。（蔡敏玲）');
                $('.books-content').children('.books-content-view').eq(4).children('.books-content-view-more');
                //
                $('.books-content').children('.books-content-view').eq(5).children('.books-content-view-image').attr('href', 'https://www.iread.com.tw/Detail/Index?ProdId=B000680355');
                $('.books-content').children('.books-content-view').eq(5).children('.books-content-view-image').children('img').attr('src', 'images/image04-06.png');
                $('.books-content').children('.books-content-view').eq(5).children('h4').text('神奇行李箱');
                $('.books-content').children('.books-content-view').eq(5).children('span').text('文、圖：克里斯．內勒–巴列斯特羅斯／柯倩華譯／遠見天下公司');
                $('.books-content').children('.books-content-view').eq(5).children('article').text('本書以風格雅致的插圖，簡潔有力的文本，闡述接納與理解、互助與互諒、愛與被愛的人道精神。令人驚喜的結局溫馨且充滿希望，留下自由想像和詮釋的空間，鼓勵孩子們屏除既有的成見，以仁慈、善良、寬廣的心胸去迎接新來的朋友。（葉嘉青）');
                $('.books-content').children('.books-content-view').eq(5).children('.books-content-view-more');
                //
                $('.books-content').children('.books-content-view').eq(6).children('.books-content-view-image').attr('href', 'https://www.iread.com.tw/Detail/Index?ProdId=B000679634');
                $('.books-content').children('.books-content-view').eq(6).children('.books-content-view-image').children('img').attr('src', 'images/image04-07.png');
                $('.books-content').children('.books-content-view').eq(6).children('h4').text('探險家旅行圖誌');
                $('.books-content').children('.books-content-view').eq(6).children('span').text('文：伊莎貝．明霍斯．馬汀／圖：貝納多．卡瓦赫／張淑英譯／步步出版');
                $('.books-content').children('.books-content-view').eq(6).children('article').text('很久很久以前，人們的世界觀是如何堆疊出來的？本書跨越2300年的時光，為讀者展現12位探險家的足跡，藉由他們的冒險與紀錄，幫助現代的人們逐漸辨識出這個世界更鮮明立體的風貌。精煉的敘述加上生動的水墨塗鴉，每一次翻閱都有驚喜。（黃桂冠）');
                $('.books-content').children('.books-content-view').eq(6).children('.books-content-view-more');
                //
                $('.books-content').children('.books-content-view').eq(7).children('.books-content-view-image').attr('href', 'https://www.iread.com.tw/Detail/Index?ProdId=B000666871');
                $('.books-content').children('.books-content-view').eq(7).children('.books-content-view-image').children('img').attr('src', 'images/image04-08.png');
                $('.books-content').children('.books-content-view').eq(7).children('h4').text('菲姬闖世界');
                $('.books-content').children('.books-content-view').eq(7).children('span').text('文：坦姆辛．雅努／圖：顏寧儀／鄭榮珍譯／幼獅文化');
                $('.books-content').children('.books-content-view').eq(7).children('article').text('非洲小女孩想到美國為生病的奶奶找特效藥，旅程一開始就困難叢生，卻讓我們看到孩童在難以超越的困頓中，竭力面對的心態和觀看世界的方式，讓人心疼、莞爾也讚嘆。這個誠實描寫各種匱乏的故事，饒富趣味的語言及悽慘的衝撞過程中遇見的關懷，在在令人難忘。（蔡敏玲）');
                $('.books-content').children('.books-content-view').eq(7).children('.books-content-view-more');
                //
                $('.books-content').children('.books-content-view').eq(8).children('.books-content-view-image').attr('href', 'https://www.iread.com.tw/Detail/Index?ProdId=B000688320');
                $('.books-content').children('.books-content-view').eq(8).children('.books-content-view-image').children('img').attr('src', 'images/image04-09.png');
                $('.books-content').children('.books-content-view').eq(8).children('h4').text('聖誕小豬');
                $('.books-content').children('.books-content-view').eq(8).children('span').text('文：J. K. 羅琳／圖：吉姆．菲爾德／謝靜雯譯／皇冠文化');
                $('.books-content').children('.books-content-view').eq(8).children('article').text('本書描述小男孩前往「失物之城」，營救心愛玩具的奇幻旅程。作者不帶批判或說教意味，卻也在許多細微的轉折處，對於良善與勇氣賦予正向的肯定。如何豁達的面對失去，如何珍視身邊所能擁有的一切，這是JK羅琳在2021年聖誕節前夕，送給讀者最真摯的祝福。（黃桂冠）');
                $('.books-content').children('.books-content-view').eq(8).children('.books-content-view-more');
                //
                $('.books-content').children('.books-content-view').eq(9).children('.books-content-view-image').attr('href', 'https://www.iread.com.tw/Detail/Index?ProdId=B000680992');
                $('.books-content').children('.books-content-view').eq(9).children('.books-content-view-image').children('img').attr('src', 'images/image04-10.png');
                $('.books-content').children('.books-content-view').eq(9).children('h4').text('翠翠掉下去了！');
                $('.books-content').children('.books-content-view').eq(9).children('span').text('文、圖：科瑞．R. 塔博／柯倩華譯／三民書局');
                $('.books-content').children('.books-content-view').eq(9).children('article').text('剛離巢的小鳥一躍之後直直往下墜怎麼辦！作者善用紙本書的優勢，透過上下來回翻轉與讀者互動，並用輕鬆有趣的方式呈現「翠鳥」轉大人的過程，帶著我們跟著節奏轉啊轉，讓書本好看又好玩。翠鳥媽媽擔心嗎？她在頂端看顧著，信任並願意放手讓孩子學習並成長呢。（林柏廷）');
                $('.books-content').children('.books-content-view').eq(9).children('.books-content-view-more');
                return false;
                break;

            default:
                break;
        }
    });
});
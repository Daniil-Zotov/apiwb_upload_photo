const axios = require("axios");
const fs = require("fs");
const FormData = require('form-data');

let token = fs.readFileSync("./token.txt",{ encoding: 'utf8', flag: 'r' })

async function uploadFile(XVendorCode,formData) {
  try {
    const response = await axios.post('https://suppliers-api.wildberries.ru/content/v1/media/file', formData, {
      headers: {
        "Authorization" : token,
        "Content-Type": "multipart/form-data",
        "X-Vendor-Code": XVendorCode,
        "X-Photo-Number": 1, //1 - заменяет главное фото, 99 - добавляет новое
        "accept" : "application/json",
      }
    
    });
    // console.log(response.status);
  } catch (error) {
    if (error.response) { // get response with a status code not in range 2xx
      console.log(error.response);
      console.log("ошибка в ответе - " + error.response.status);
      // console.log(error.response.headers);
    } else if (error.request) { // no response
      console.log("нет ответа, ошибка запроса - "+error.message);
    } else { 
      console.log('что-то сломалось - ', error.message);
    }
    // console.log(error.config);
  }
}
// массив баркодов
let data = ["pp-1bogco","pp-1break","pp-1camaf","pp-1cofso","pp-1deepw","pp-1eyeso","pp-1gulli","pp-1hands","pp-1heaan","pp-1kitco","pp-1miiic","pp-1mnste","pp-1moosm","pp-1mount","pp-1mowih","pp-1needs","pp-1niced","pp-1oastr","pp-1pansl","pp-1panth","pp-1pondo","pp-1slepf","pp-1smali","pp-1sugmi","pp-1takss","pp-1toget","pp-1trave","pp-1trrca","pp-1trrea","pp-1tvisi","pp-1unica","pp-1wecan","pp-1yetia","pp-1yogaf","pp-1yooof","pp-4emoda","pp-4erepc","pp-4eshir","pp-4gevar","pp-4ilipe","pp-4ilivi","pp-6in6il","pp-6to6to","pp-9ballw","pp-14geva","pp-a4tosl","pp-adamsr","pp-advent","pp-ahega","pp-aibrod","pp-aimeko","pp-airdog","pp-airfro","pp-airwin","pp-ak47eg","pp-akautv","pp-akicha","pp-akusay","pp-alient","pp-aligat","pp-aliufo","pp-alloha","pp-alphii","pp-always","pp-alyred","pp-amngus","pp-anbaby","pp-anduck","pp-angcat","pp-anhare","pp-anigip","pp-anigir","pp-anipop","pp-antidp","pp-anwolf","pp-apolon","pp-araani","pp-arbuct","pp-area51","pp-aridog","pp-arncat","pp-arnold","pp-artemi","pp-artmon","pp-artowl","pp-artwar","pp-astron","pp-astros","pp-ataboy","pp-atagir","pp-atalog","pp-atatea","pp-atsuda","pp-avocat","pp-avokad","pp-avtobu","pp-awesom","pp-axenta","pp-azirap","pp-azrabb","pp-backct","pp-backko","pp-baddab","pp-badmon","pp-badpin","pp-badubu","pp-badums","pp-bailyg","pp-banaku","pp-banana","pp-bancat","pp-bannyc","pp-banzan","pp-baract","pp-bartol","pp-basspa","pp-batbat","pp-batman","pp-batnic","pp-bay4jy","pp-bazing","pp-bbrain","pp-becoat","pp-beecof","pp-beeknf","pp-bendeh","pp-bender","pp-billch","pp-bitcat","pp-bithca","pp-bkbetr","pp-bkread","pp-bktfut","pp-blacat","pp-blackf","pp-blackv","pp-blawgh","pp-blcats","pp-bleihs","pp-bleuwh","pp-blostu","pp-bluber","pp-bluekp","pp-bmoboy","pp-bobobo","pp-bogcow","pp-bolgar","pp-booboo","pp-boocat","pp-boodog","pp-bookra","pp-boomer","pp-boooks","pp-botded","pp-botnat","pp-botpal","pp-bottri","pp-bowwwy","pp-bqueen","pp-bragri","pp-branch","pp-breakb","pp-breath","pp-bredog","pp-brgran","pp-brguit","pp-brokol","pp-bsdats","pp-bsdchu","pp-bsddaz","pp-btskpo","pp-btwild","pp-bubleg","pp-budkad","pp-buklya","pp-buksov","pp-bulbaz","pp-buldog","pp-bunrab","pp-burcat","pp-burcip","pp-burger","pp-burgst","pp-busfis","pp-buspin","pp-busyzz","pp-bwhale","pp-c4akye","pp-cactus","pp-cakera","pp-cakura","pp-calfil","pp-camafx","pp-candog","pp-canmoz","pp-capbir","pp-capcap","pp-capdrk","pp-capgit","pp-capknf","pp-capmad","pp-capmaf","pp-capmar","pp-caspas","pp-catama","pp-catarb","pp-catavo","pp-catbok","pp-catbre","pp-catbus","pp-catcap","pp-catchr","pp-catcor","pp-catdog","pp-catfih","pp-catfod","pp-catfre","pp-catinb","pp-catinp","pp-catinw","pp-catknf","pp-catkus","pp-catmag","pp-catmni","pp-catnas","pp-catora","pp-catp4r","pp-catpak","pp-catpep","pp-catpin","pp-catpr4","pp-catred","pp-catrib","pp-catsam","pp-catsay","pp-catsin","pp-catsnw","pp-catspc","pp-catswn","pp-cattlg","pp-cattpp","pp-catzil","pp-cawine","pp-cbootl","pp-centpe","pp-chedel","pp-cheepd","pp-chhert","pp-chiken","pp-chkind","pp-chuush","pp-cicada","pp-cloudr","pp-clownk","pp-clownp","pp-clubox","pp-cnicat","pp-coalla","pp-cofbre","pp-cofedi","pp-cofein","pp-coffee","pp-coffle","pp-coffox","pp-cofsov","pp-coftim","pp-cogtv","pp-cokcat","pp-colgog","pp-colkor","pp-comafr","pp-comehl","pp-comhea","pp-conser","pp-cooken","pp-cookno","pp-cooldg","pp-coolpi","pp-coolpu","pp-corgan","pp-cornun","pp-coscat","pp-croyle","pp-crwgab","pp-ctpepe","pp-cubech","pp-cucuri","pp-cunili","pp-cupbut","pp-cupcoa","pp-cupdep","pp-cusata","pp-cutdog","pp-cutebr","pp-cuteco","pp-cutedc","pp-cutefx","pp-cuteot","pp-cutetr","pp-cutkor","pp-dancat","pp-danger","pp-darcpz","pp-darkha","pp-daroff","pp-dartve","pp-davibo","pp-daycof","pp-deadln","pp-dealby","pp-dedpul","pp-deepwl","pp-delici","pp-demboy","pp-demgir","pp-demkto","pp-dempig","pp-diechr","pp-diedie","pp-difilm","pp-dincat","pp-dindin","pp-diodio","pp-dipper","pp-dirrus","pp-dirtpu","pp-disatr","pp-divfox","pp-djokra","pp-docwho","pp-doczol","pp-dogcat","pp-dogfis","pp-dogkit","pp-dogwin","pp-dokduk","pp-dokimo","pp-dokina","pp-dokisa","pp-dokiyu","pp-donats","pp-donetd","pp-donpan","pp-dontel","pp-dontli","pp-dreamc","pp-drimor","pp-drinkp","pp-drintv","pp-dririk","pp-drmfox","pp-drobb8","pp-duckgn","pp-duckie","pp-duckrv","pp-dukpol","pp-eataku","pp-eatcat","pp-edgarp","pp-edidog","pp-egbook","pp-egeege","pp-egegeg","pp-eggspa","pp-elefly","pp-embamb","pp-enottv","pp-enotum","pp-enyeny","pp-enyfat","pp-enyhan","pp-enystp","pp-enytal","pp-escape","pp-esenin","pp-etfili","pp-ethfox","pp-ethowl","pp-etnowl","pp-etocat","pp-etoeno","pp-etoeny","pp-etogub","pp-etohor","pp-etopan","pp-etosov","pp-etracc","pp-ettowl","pp-evaboy","pp-evagir","pp-evahas","pp-evarob","pp-exppla","pp-eyeson","pp-fatcor","pp-fatfox","pp-fbanjo","pp-fightc","pp-filfry","pp-fincat","pp-fiseye","pp-fishac","pp-fishct","pp-fishli","pp-fishya","pp-fitper","pp-fkapla","pp-flaash","pp-flabir","pp-flagun","pp-flambr","pp-flaoct","pp-flypig","pp-flyrik","pp-foolho","pp-foool","pp-footcr","pp-forcup","pp-fotcam","pp-fotcat","pp-foxcut","pp-foxess","pp-foxhrt","pp-foxicu","pp-foxiki","pp-foxisp","pp-freddy","pp-frhugs","pp-frid13","pp-fridda","pp-fridog","pp-frog47","pp-frogma","pp-froogy","pp-fryfut","pp-fudog","pp-fukgab","pp-fundog","pp-funfox","pp-funowl","pp-fupeac","pp-fuuuck","pp-gababa","pp-gabwin","pp-gamelm","pp-garfil","pp-garnet","pp-gayfox","pp-geludi","pp-genalh","pp-gended","pp-genkle","pp-gennah","pp-genpai","pp-genrai","pp-gensca","pp-gentao","pp-gentar","pp-genven","pp-genxia","pp-gerboo","pp-gercof","pp-getlos","pp-ginger","pp-giorno","pp-giveme","pp-glasfx","pp-glasla","pp-glaspn","pp-glazok","pp-glazow","pp-glcats","pp-goaway","pp-goloki","pp-golub4","pp-gomebu","pp-gomefu","pp-gomer4","pp-gomgon","pp-goodca","pp-goodmn","pp-goodnw","pp-gospod","pp-grapef","pp-gravfa","pp-greenc","pp-gremli","pp-grfgus","pp-grfpux","pp-grifav","pp-grifct","pp-grifdg","pp-grifgr","pp-grifin","pp-griph","pp-grooot","pp-groora","pp-grsova","pp-grubea","pp-grucat","pp-grurab","pp-grutig","pp-guitar","pp-guithe","pp-gulboy","pp-gulbro","pp-gullii","pp-gulmas","pp-gulygu","pp-gunfrg","pp-gusmag","pp-gusnog","pp-hagiwa","pp-haihin","pp-haikag","pp-haiken","pp-hainis","pp-haioik","pp-haitet","pp-handcu","pp-handgu","pp-handht","pp-handsi","pp-hanemb","pp-haomia","pp-harpig","pp-hatsnw","pp-hattrx","pp-heaang","pp-heareg","pp-hearth","pp-hegrfr","pp-hehand","pp-hekpop","pp-helcat","pp-helhel","pp-helldc","pp-hellgt","pp-hellob","pp-hellok","pp-hellos","pp-hideer","pp-hipdog","pp-hishun","pp-hispac","pp-hododo","pp-hogsov","pp-hogvr","pp-homers","pp-homyak","pp-homyga","pp-horsbo","pp-hospad","pp-hotcup","pp-housov","pp-howdoy","pp-humson","pp-hxhgon","pp-hxhhis","pp-iam18t","pp-iambby","pp-iamshe","pp-ibeliv","pp-icanwt","pp-iceber","pp-icecat","pp-icepin","pp-ididit","pp-idontk","pp-ihate2","pp-im18yo","pp-imadra","pp-imf1ne","pp-imfine","pp-imgood","pp-imknow","pp-imlama","pp-imread","pp-imsher","pp-imsorr","pp-inhart","pp-inlike","pp-inomor","pp-intron","pp-inwine","pp-ironma","pp-isawit","pp-isaycf","pp-isleap","pp-itachi","pp-ithuge","pp-itlove","pp-itrain","pp-itsall","pp-itsdog","pp-itsgam","pp-itsmor","pp-itsnot","pp-itsooc","pp-ittime","pp-iwantb","pp-izipik","pp-jackni","pp-jojodi","pp-jojosy","pp-joken6","pp-josuke","pp-jotaro","pp-justpl","pp-kakadu","pp-kakasi","pp-kakegu","pp-kal4if","pp-kalmr","pp-kanawa","pp-kapcof","pp-kapiba","pp-kapsul","pp-karkaf","pp-kavexg","pp-kaylba","pp-kennym","pp-kilyah","pp-kingfs","pp-kitast","pp-kitcos","pp-kkpops","pp-knfcat","pp-knffox","pp-knicat","pp-knifes","pp-knifmi","pp-kogtev","pp-koldrk","pp-kolibr","pp-kooala","pp-korbak","pp-korhik","pp-korsha","pp-kosatk","pp-kosmlt","pp-koteyk","pp-kotoku","pp-kpopme","pp-kpopps","pp-ktotut","pp-kubrub","pp-kumamo","pp-kupak4","pp-kurica","pp-kuromi","pp-kusiko","pp-kusruk","pp-kustik","pp-kustkt","pp-labfac","pp-lado6i","pp-lagboo","pp-lagchi","pp-lagdre","pp-laghea","pp-lalafa","pp-lalarb","pp-lamabu","pp-lamapu","pp-lamgls","pp-lampwh","pp-lastlv","pp-lasveg","pp-lawhal","pp-lazyni","pp-lemmon","pp-lemurr","pp-lencof","pp-lenivc","pp-lenpiz","pp-leonar","pp-leonma","pp-letsck","pp-liclou","pp-linkip","pp-liscat","pp-litkni","pp-litpig","pp-littlp","pp-lizaco","pp-lizasi","pp-lokat","pp-loorez","pp-losver","pp-loveis","pp-lovemt","pp-lpanda","pp-lumpga","pp-lyagus","pp-ma6rum","pp-maayak","pp-maggoj","pp-magita","pp-magmeg","pp-magnob","pp-magyod","pp-magyuj","pp-manaki","pp-mandal","pp-mandra","pp-manypl","pp-marisa","pp-martse","pp-marvel","pp-masson","pp-matild","pp-mauble","pp-mayaki","pp-maylov","pp-melody","pp-memcat","pp-mgablo","pp-mgacra","pp-mgafro","pp-mgagre","pp-mgared","pp-mgawat","pp-miiice","pp-mikela","pp-mimica","pp-miolne","pp-mirwom","pp-mmmfox","pp-mmorty","pp-mncats","pp-mnlamp","pp-mnster","pp-mnyamy","pp-molcat","pp-molder","pp-molotw","pp-monemo","pp-monkey","pp-moonsp","pp-mooose","pp-mooskf","pp-moosmo","pp-mopsfi","pp-moroge","pp-mountn","pp-mounwl","pp-mowihe","pp-moyafs","pp-mrpicl","pp-muhomo","pp-muhono","pp-mumbab","pp-mumitr","pp-muscat","pp-muscul","pp-musict","pp-myamya","pp-mybody","pp-myfish","pp-myknif","pp-mysegg","pp-nasata","pp-natdry","pp-natufi","pp-ndraml","pp-needsp","pp-nerdon","pp-newbee","pp-niceas","pp-niceca","pp-nicedd","pp-nicedg","pp-nicefx","pp-nicekn","pp-nicesn","pp-nicesp","pp-nicetr","pp-nicrab","pp-nightc","pp-nigowl","pp-nilyig","pp-nincat","pp-ninkni","pp-nirana","pp-nirvan","pp-nisica","pp-nitcat","pp-nofood","pp-noggab","pp-nogkor","pp-nolask","pp-nonoca","pp-noofly","pp-noopee","pp-noscre","pp-noslea","pp-notcan","pp-nottdy","pp-nowifi","pp-noznov","pp-Nukaco","pp-nybear","pp-nycetr","pp-nydeer","pp-nyelka","pp-nyflow","pp-nyfoxy","pp-nysnfl","pp-nysock","pp-nyyett","pp-oastro","pp-okorgi","pp-olddok","pp-oldlht","pp-omgdog","pp-omgmon","pp-omgomg","pp-omgwtf","pp-omnomm","pp-onechp","pp-onecok","pp-onefin","pp-onefis","pp-onehor","pp-onemor","pp-onemro","pp-opocan","pp-oposum","pp-orange","pp-orugab","pp-osmona","pp-otroad","pp-ottera","pp-ovkpop","pp-painna","pp-pandac","pp-pandah","pp-pandax","pp-pandpo","pp-panika","pp-pankok","pp-panliq","pp-panslp","pp-panthr","pp-patchi","pp-patrst","pp-pe4cat","pp-peacer","pp-pedoby","pp-pekapi","pp-pep4ik","pp-pepcat","pp-pepect","pp-peperc","pp-pepero","pp-pepert","pp-peppin","pp-pepppe","pp-per4ct","pp-per4ik","pp-perec4","pp-perect","pp-peretc","pp-pewcat","pp-pewpew","pp-pfcat","pp-picasi","pp-pidoor","pp-pifpaf","pp-pikape","pp-pilqui","pp-pinapl","pp-pincat","pp-pineap","pp-pingvi","pp-pinkfl","pp-pinkla","pp-pinkra","pp-pinper","pp-pisani","pp-pitpit","pp-pixdin","pp-pizcat","pp-pizdec","pp-pizdog","pp-pizhrt","pp-pizspa","pp-plague","pp-planct","pp-planet","pp-planve","pp-platf9","pp-playca","pp-plread","pp-poison","pp-pokhor","pp-polard","pp-pompom","pp-pon4ik","pp-pon4ji","pp-ponchi","pp-pondog","pp-poolct","pp-poopse","pp-popbre","pp-popcup","pp-popkap","pp-popyga","pp-poroos","pp-potara","pp-potcat","pp-potdog","pp-potigu","pp-powgir","pp-privet","pp-psaida","pp-pten4i","pp-ptenec","pp-pufcat","pp-puffen","pp-pufff","pp-pugdog","pp-pugifl","pp-pupper","pp-pupsik","pp-puxlad","pp-r2d2dr","pp-rabali","pp-rabbbo","pp-rabbfa","pp-rabcup","pp-rabfin","pp-rabmus","pp-raibra","pp-raku6k","pp-ralama","pp-ranbow","pp-rapfae","pp-rasten","pp-rbknit","pp-rdlamp","pp-readfx","pp-redbal","pp-redbok","pp-redfux","pp-redgno","pp-reedbk","pp-reedun","pp-relove","pp-reswor","pp-rfpoka","pp-ribafe","pp-richan","pp-ricksn","pp-rikmor","pp-rikpor","pp-rivdal","pp-robben","pp-rocket","pp-rockfl","pp-rollin","pp-rollst","pp-rolton","pp-rosefl","pp-rossha","pp-rrweid","pp-rukzak","pp-rungus","pp-rusbrr","pp-saanta","pp-sadcat","pp-sadcof","pp-saddog","pp-sadfox","pp-sadkit","pp-sadrab","pp-sadtig","pp-saesen","pp-salkor","pp-sarca","pp-saskke","pp-satcup","pp-sawboy","pp-sawdem","pp-sawdog","pp-sawfri","pp-sawgir","pp-sawman","pp-sawsu4","pp-scasno","pp-scdeer","pp-scizgu","pp-scratc","pp-scythe","pp-seatto","pp-seilor","pp-selfco","pp-semoon","pp-sercat","pp-serdce","pp-serdec","pp-sharku","pp-sharky","pp-shauca","pp-sheart","pp-shelbi","pp-sherlo","pp-shiedk","pp-shines","pp-shiper","pp-shipio","pp-shluha","pp-shocap","pp-shopin","pp-shotca","pp-showec","pp-shrcat","pp-shreat","pp-simhah","pp-situat","pp-skaram","pp-skatra","pp-skubid","pp-slcoal","pp-sleast","pp-slecat","pp-sleepf","pp-slepfx","pp-slith","pp-slizer","pp-slonbk","pp-slowpo","pp-slpf0x","pp-slraco","pp-slunih","pp-smalik","pp-smdeer","pp-smiled","pp-smokeb","pp-smokes","pp-snball","pp-snicht","pp-snowki","pp-snowmo","pp-snwman","pp-sonice","pp-soouul","pp-sotadr","pp-soutsi","pp-sovhom","pp-sp4cat","pp-spacat","pp-spacef","pp-spache","pp-spacos","pp-span4b","pp-spapin","pp-spapiz","pp-spastr","pp-spavgu","pp-spehat","pp-spfrie","pp-spguit","pp-sphinx","pp-spider","pp-sppiza","pp-sptime","pp-spyana","pp-spyany","pp-spyyor","pp-squid","pp-ssecat","pp-starbc","pp-starca","pp-starkl","pp-starsk","pp-startr","pp-starwa","pp-stathi","pp-statre","pp-stawar","pp-sticth","pp-strdog","pp-strike","pp-sttrek","pp-stufro","pp-stuliz","pp-stumos","pp-sturma","pp-stygri","pp-suetol","pp-sugmil","pp-suhwav","pp-sunflo","pp-supcat","pp-supmen","pp-taicat","pp-tailer","pp-takeit","pp-takssa","pp-tapkin","pp-taptap","pp-tarhun","pp-tasdev","pp-tatmom","pp-tearex","pp-teilor","pp-tellme","pp-tenfos","pp-terpet","pp-thisis","pp-threeb","pp-thsway","pp-ticket","pp-tickhg","pp-tickli","pp-tigrab","pp-tirect","pp-tmario","pp-togeth","pp-tokbaj","pp-tokdra","pp-tokhan","pp-tokmai","pp-tolaku","pp-tomars","pp-toncam","pp-toolen","pp-toosim","pp-tortor","pp-totodo","pp-totorr","pp-tracat","pp-trarab","pp-trasct","pp-travel","pp-treug","pp-trracc","pp-trrcat","pp-trread","pp-tthpan","pp-tu4ber","pp-turtle","pp-tusbes","pp-tututu","pp-tvisio","pp-tvoezd","pp-twinpi","pp-twpksy","pp-u4udit","pp-u4uwis","pp-ubegay","pp-udzuma","pp-uforap","pp-ugebeg","pp-uherts","pp-unbook","pp-unicat","pp-unidab","pp-unidel","pp-unipul","pp-uorxbn","pp-utiput","pp-uyucat","pp-uzbagi","pp-vampra","pp-vangoh","pp-veider","pp-venoom","pp-vhs90e","pp-vincat","pp-vmayak","pp-vsegda","pp-vsooky","pp-vtuman","pp-vu6pun","pp-vzhuuh","pp-watcat","pp-wecand","pp-wednes","pp-wells4","pp-wetcat","pp-wforme","pp-wguuss","pp-whatad","pp-whatsh","pp-whcakn","pp-winfox","pp-wingav","pp-winiwi","pp-winsad","pp-wiscat","pp-wisfox","pp-wisfro","pp-wismos","pp-wolver","pp-wonder","pp-woodmc","pp-wowshr","pp-wtfcat","pp-wuwuwu","pp-xamell","pp-yachit","pp-yadino","pp-yadrac","pp-yaedum","pp-yagivu","pp-yapopl","pp-yasova","pp-yaspat","pp-yetian","pp-yinang","pp-yogafx","pp-yogarc","pp-yooofx","pp-youmee","pp-yumeko","pp-zapzap","pp-zayazo","pp-zekdog","pp-zimoro","pp-сatsgo"]


async function dooo () {
  for (let index = 0; index < data.length; index++) {
    let barcode = data[index]
    let trace = "./baza/" + barcode + ".jpg";
    let selectedFile = fs.createReadStream(trace);
    const formData = new FormData();
    formData.append('uploadfile', selectedFile);
    await uploadFile (barcode,formData);
    console.log(index, " - ", barcode, " - успех");   
}
}

// dooo ()






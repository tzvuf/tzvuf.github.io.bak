(function(e){function t(t){for(var a,p,s=t[0],o=t[1],c=t[2],m=0,g=[];m<s.length;m++)p=s[m],i[p]&&g.push(i[p][0]),i[p]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);l&&l(t);while(g.length)g.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,s=1;s<n.length;s++){var o=n[s];0!==i[o]&&(a=!1)}a&&(r.splice(t--,1),e=p(p.s=n[0]))}return e}var a={},i={app:0},r=[];function p(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,p),n.l=!0,n.exports}p.m=e,p.c=a,p.d=function(e,t,n){p.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},p.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},p.t=function(e,t){if(1&t&&(e=p(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(p.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)p.d(n,a,function(t){return e[t]}.bind(null,a));return n},p.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return p.d(t,"a",t),t},p.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},p.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var l=o;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"018c":function(e){e.exports=[{title:"Big",category:"AA",id:"0"},{title:"Counting Bugs",category:"AA",id:"1"},{title:"Counting Letters",category:"AA",id:"2"},{title:"Farm Animals",category:"AA",id:"3"}]},"059d":function(e,t,n){"use strict";var a=n("f1f1"),i=n.n(a);i.a},"1b02":function(e,t,n){},"3d9d":function(e,t,n){var a={"./01.graded_reading_RAZ.json":"018c","./AA/Big.json":"5cfe","./AA/Counting Bugs.json":"7d37","./AA/Counting Letters.json":"9707","./AA/Farm Animals.json":"92f3"};function i(e){var t=r(e);return n(t)}function r(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}i.keys=function(){return Object.keys(a)},i.resolve=r,e.exports=i,i.id="3d9d"},"56d7":function(e,t,n){"use strict";n.r(t);n("74eb"),n("5b2f");var a=n("8249"),i=n.n(a),r=(n("0ae3"),n("a921")),p=n.n(r),s=(n("4d31"),n("10dd")),o=n.n(s),c=(n("e024"),n("07b2")),l=n.n(c),m=(n("49a5"),n("0f60")),g=n.n(m),u=(n("4e06"),n("bd35")),d=n.n(u),_=(n("5c07"),n("53da"),n("2556"),n("d0f8"),n("6e6d")),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},b=[],y={name:"app"},v=y,h=n("17cc"),x=Object(h["a"])(v,f,b,!1,null,"0aae5664",null),z=x.exports,j=n("081a"),w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main"},[n("el-row",{staticClass:"list",attrs:{gutter:10}},e._l(e.list,function(t){return n("el-col",{key:t.id,staticClass:"list_item",attrs:{lg:6,md:6,sm:12,xl:6,xs:12}},[n("div",{on:{click:function(n){return e.routeTo(t)}}},[n("div",[n("img",{staticClass:"list_img",attrs:{src:"/source/AA/"+t.title+"/page_1.jpg"}})]),n("span",{domProps:{textContent:e._s(t.category+"-"+t.title)}})])])}),1)],1)},k=[],A=n("018c"),C={name:"Index",data:function(){return{list:A}},methods:{routeTo:function(e){var t=e.id,n=e.title,a=e.category;V.push({path:"/detail/".concat(t),query:{id:t,title:n,category:a}})}}},T=C,O=(n("d6dc"),Object(h["a"])(T,w,k,!1,null,"1b43d63c",null)),S=O.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"rel"},[n("el-button",{class:e.is_pc?"pc_detail_router_back":"mobile_detail_router_back",attrs:{circle:"",icon:"el-icon-back",title:"返回上一页"},on:{click:e.routerBack}}),e.is_pc?n("div",{staticClass:"slide"},[n("div",{ref:"content",staticClass:"slide_inner"},e._l(e.data,function(t){return n("div",{key:t.img,staticClass:"slide_list"},[n("el-card",[n("div",{attrs:{slot:"header"},slot:"header"},[n("el-row",{attrs:{justify:"space-between",type:"flex"}},[n("el-col",{attrs:{span:12}},[n("div",[n("b",{staticClass:"title",domProps:{textContent:e._s(t.cn)}})])]),n("el-col",{staticClass:"col_r",attrs:{span:12}},[n("div",{domProps:{textContent:e._s(t.m.replace(/美 /,""))}})])],1)],1),n("div",{staticClass:"text-center"},[n("img",{attrs:{src:e.cur_path+t.img,title:t.cn},on:{click:function(n){return e.play(t)}}}),t.mp3?n("audio",{ref:t.mp3,refInFor:!0,staticClass:"audio",attrs:{src:e.cur_path+t.mp3,controls:"controls",controlslist:"nodownload",oncontextmenu:"return false"}}):e._e(),t.mp3?e._e():n("div",{staticClass:"blank"})])])],1)}),0)]):e._e(),!e.is_pc&&e.data.length>0?n("div",{staticClass:"mobile_detail_content"},[n("hooper",e._l(e.data,function(t){return n("slide",{key:t.img},[n("el-card",[n("div",{attrs:{slot:"header"},slot:"header"},[n("el-row",{attrs:{justify:"space-between",type:"flex"}},[n("el-col",{attrs:{span:12}},[n("div",[n("b",{staticClass:"title",domProps:{textContent:e._s(t.cn)}})])]),n("el-col",{staticClass:"col_r",attrs:{span:12}},[n("div",{domProps:{textContent:e._s(t.m.replace(/美 /,""))}})])],1)],1),n("div",{staticClass:"text-center"},[n("img",{attrs:{src:e.cur_path+t.img,title:t.cn},on:{click:function(n){return e.play(t)}}}),t.mp3?n("audio",{ref:t.mp3,refInFor:!0,staticClass:"audio",attrs:{src:e.cur_path+t.mp3,controls:"controls",controlslist:"nodownload",oncontextmenu:"return false"}}):e._e(),t.mp3?e._e():n("div",{staticClass:"blank"})])])],1)}),1)],1):e._e()],1)},E=[],D=n("a927"),F=n.n(D),M=function(e,t){var n=function(e){var n=e.type;return"DOMMouseScroll"!=n&&"mousewheel"!=n||(e.delta=e.wheelDelta?e.wheelDelta/120:-(e.detail||0)/3),e.srcElement&&!e.target&&(e.target=e.srcElement),e.preventDefault||e.returnValue===t||(e.preventDefault=function(){e.returnValue=!1}),e};return e.addEventListener?function(e,a,i,r){"mousewheel"===a&&document.mozHidden!==t&&(a="DOMMouseScroll"),e.addEventListener(a,function(e){i.call(this,n(e))},r||!1)}:e.attachEvent?function(t,a,i){t.attachEvent("on"+a,function(a){a=a||e.event,i.call(t,n(a))})}:function(){}}(window),$=function(){var e,t=function t(n,a,i){i=i||F()(n.style.left)||0,Math.abs(a-i)>2?(n.style.left=a-(a-i)/3+"px",e=setTimeout(function(){t(n,a)},50)):n.style.left=a+"px"};return{index:0,visible:4,init:function(n,a,i){var r,p=this;n&&(r=a.length,M(n.parentNode,"mousewheel",function(a){if(a.delta>0&&p.index>0)p.index--;else{if(!(a.delta<0&&p.index<r-p.visible))return;p.index++}clearTimeout(e),t(n,-1*p.index*i),a.preventDefault()}))}}}();function B(){for(var e=navigator.userAgent,t=new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"),n=!0,a=0;a<t.length;a++)if(e.indexOf(t[a])>0){n=!1;break}return n}var L=n("c422"),I=(n("9747"),{name:"Detail",components:{Hooper:L["a"],Slide:L["b"]},data:function(){return{is_pc:B(),data:[],cur_path:""}},mounted:function(){var e=this.$route.query,t=e.category,a=e.title;this.cur_path="/source/".concat(t,"/").concat(a,"/"),this.data=n("3d9d")("./".concat(t,"/").concat(a,".json")),this.is_pc&&$.init(this.$refs.content,this.data,562)},methods:{play:function(e){if(!e.mp3)return!1;for(var t=this.$refs[e.mp3],n=t[0],a=this.data.filter(function(t){return t.mp3&&t.mp3!==e.mp3}),i=0;i<a.length;i++){var r=this.$refs[a[i].mp3];this.stop(r[0])}n.paused&&n.play()},stop:function(e){e.paused||(e.pause(),e.currentTime=0)},routerBack:function(){V.back()}}}),N=I,q=(n("7e7d"),n("059d"),Object(h["a"])(N,P,E,!1,null,"3806f07e",null)),H=q.exports;_["default"].use(j["a"]);var J=[{path:"/detail/:id",component:H},{path:"/",component:S}],U=new j["a"]({routes:J});U.beforeEach(function(e,t,n){n()});var V=U;n("b329");_["default"].use(d.a),_["default"].use(g.a),_["default"].use(l.a),_["default"].use(o.a),_["default"].use(p.a),_["default"].use(i.a.directive),_["default"].prototype.$loading=i.a.service,_["default"].config.productionTip=!1,new _["default"]({router:V,render:function(e){return e(z)}}).$mount("#app")},"5cfe":function(e){e.exports=[{en:"Big",cn:"大",y:"英 [bɪg]",m:"美 [bɪɡ] ",img:"page-1.jpg"},{en:"Title",cn:"标题",y:"英 ['taɪt(ə)l]",m:"美 ['taɪtl]",img:"page-2.jpg",mp3:"raz_big_title_text.mp3"},{en:"A big house",cn:"一个大房子",y:"英 [ə; eɪ] [bɪg] [haʊs]",m:"美 [ə; e] [bɪɡ] [haʊs] ",img:"page-3.jpg",mp3:"raz_big_p3_text.mp3"},{en:"A big dog",cn:"一只大狗",y:"英 [ə; eɪ] [bɪg] [dɒg]",m:"美 [ə; e] [bɪɡ] [dɔɡ]",img:"page-4.jpg",mp3:"raz_big_p4_text.mp3"},{en:"A big car",cn:"一辆大车",y:"英 [ə; eɪ] [bɪg] [kɑː]",m:"美 [ə; e] [bɪɡ] [kɑr] ",img:"page-5.jpg",mp3:"raz_big_p5_text.mp3"},{en:"A big bus",cn:"一辆大巴士",y:"英 [ə; eɪ] [bɪg] [bʌs]",m:"美 [ə; e] [bɪɡ] [bʌs]",img:"page-6.jpg",mp3:"raz_big_p6_text.mp3"},{en:"A big plane",cn:"一架大飞机",y:"英 [ə; eɪ] [bɪg] [pleɪn]",m:"美 [ə; e] [bɪɡ] [plen]",img:"page-7.jpg",mp3:"raz_big_p7_text.mp3"},{en:"A big tree",cn:" 一棵大树",y:"英 [ə; eɪ] [bɪg] [triː]",m:"美 [ə; e] [bɪɡ] [tri]",img:"page-8.jpg",mp3:"raz_big_p8_text.mp3"},{en:"A big elephant",cn:"一头大象",y:"英 [ə; eɪ] [bɪg] ['elɪf(ə)nt]",m:"美 [ə; e] [bɪɡ] [ˈɛləfənt]",img:"page-9.jpg",mp3:"raz_big_p9_text.mp3"},{en:"A big dinosaur",cn:"一只大恐龙",y:"英 [ə; eɪ] [bɪg] ['daɪnəsɔː]",m:"美 [ə; e] [bɪɡ] [ˈdaɪnəˌsɔr] ",img:"page-10.jpg",mp3:"raz_big_p10_text.mp3"},{en:"The end",y:"英 [ðə;ði:] [end]",m:"美 [ðə; ði] [ɛnd]",cn:"结束",img:"page-11.jpg"}]},"64e0":function(e,t,n){},"7d37":function(e){e.exports=[{en:"Counting Bugs",cn:"数数虫子",y:"英 ['kaʊntɪŋ] [bʌɡz]",m:"美 ['kaʊntɪŋ] [bʌɡz]",img:"page-1.jpg"},{en:"Title",cn:"标题",y:"英 ['taɪt(ə)l]",m:"美 ['taɪtl] ",img:"page-2.jpg",mp3:"raz_countingbugs_title_text.mp3"},{en:"One bug",cn:"一只虫子",y:"英 [wʌn] [bʌɡ]",m:"美 [wʌn] [bʌɡ]",img:"page-3.jpg",mp3:"raz_countingbugs_p3_text.mp3"},{en:"Two bugs",cn:"两只虫子",y:"英 [tuː] [bʌɡz]",m:"美 [tu] [bʌɡz]",img:"page-4.jpg",mp3:"raz_countingbugs_p4_text.mp3"},{en:"Three bugs",cn:"三只虫子",y:"英 [θriː] [bʌɡz]",m:"美 [θri] [bʌɡz]",img:"page-5.jpg",mp3:"raz_countingbugs_p5_text.mp3"},{en:"Four bugs",cn:"四只虫子",y:"英 [fɔː] [bʌɡz]",m:"美 [fɔr] [bʌɡz]",img:"page-6.jpg",mp3:"raz_countingbugs_p6_text.mp3"},{en:"Five bugs",cn:"五只虫子",y:"英 [faɪv] [bʌɡz]",m:"美 [faɪv] [bʌɡz]",img:"page-7.jpg",mp3:"raz_countingbugs_p7_text.mp3"},{en:"Six bugs",cn:" 六只虫子",y:"英 [sɪks] [bʌɡz]",m:"美 [sɪks] [bʌɡz]",img:"page-8.jpg",mp3:"raz_countingbugs_p8_text.mp3"},{en:"Seven bugs",cn:"七只虫子",y:"英 ['sev(ə)n] [bʌɡz]",m:"美 ['sɛvn] [bʌɡz]",img:"page-9.jpg",mp3:"raz_countingbugs_p9_text.mp3"},{en:"So many bugs!",cn:"这么多虫子",y:"英 [səʊ] ['menɪ] [bʌɡz]",m:"美 [so] ['mɛni] [bʌɡz]",img:"page-10.jpg",mp3:"raz_countingbugs_p10_text.mp3"},{en:"The end",cn:"结束",y:"英 [ðə;ði:] [end]",m:"美 [ðə; ði] [ɛnd]",img:"page-11.jpg"}]},"7e7d":function(e,t,n){"use strict";var a=n("1b02"),i=n.n(a);i.a},"92f3":function(e){e.exports=[{en:"Farm Animals",cn:"农场动物",y:"英 [fɑːm] ['ænəmlz]",m:"美 [fɑrm] ['ænəmlz]",img:"page-1.jpg"},{en:"Title",cn:"标题",y:"英 ['taɪt(ə)l]",m:"美 ['taɪtl]",img:"page-2.jpg",mp3:"raz_farmanimals_title_text.mp3"},{en:"The dog",cn:"狗",y:"英 [ðə; ði] [dɒg]",m:"美 [ðə; ði] [dɔɡ]",img:"page-3.jpg",mp3:"raz_farmanimals_p3_text.mp3"},{en:"The pig",cn:"猪",y:"英 [ðə; ði] [pɪg]",m:"美 [ðə; ði] [pɪɡ]",img:"page-4.jpg",mp3:"raz_farmanimals_p4_text.mp3"},{en:"The chicken",cn:"鸡",y:"英 [ðə; ði] ['tʃɪkɪn]",m:"美 [ðə; ði] ['tʃɪkən]",img:"page-5.jpg",mp3:"raz_farmanimals_p5_text.mp3"},{en:"The goat",cn:"山羊",y:"英 [ðə; ði] [gəʊt]",m:"美 [ðə; ði] [ɡot]",img:"page-6.jpg",mp3:"raz_farmanimals_p6_text.mp3"},{en:"The cow",cn:"奶牛",y:"英 [ðə; ði] [kaʊ]",m:"美 [ðə; ði] [kaʊ]",img:"page-7.jpg",mp3:"raz_farmanimals_p7_text.mp3"},{en:"The duck",cn:"鸭子",y:"英 [ðə; ði] [dʌk]",m:"美 [ðə; ði] [dʌk]",img:"page-8.jpg",mp3:"raz_farmanimals_p8_text.mp3"},{en:"The sheep",cn:"绵羊",y:"英 [ðə; ði] [ʃiːp]",m:"美 [ðə; ði] [ʃip]",img:"page-9.jpg",mp3:"raz_farmanimals_p9_text.mp3"},{en:"The animals",cn:"这些动物",y:"英 [ðə; ði] ['ænəmlz]",m:"美 [ðə; ði] ['ænəmlz]",img:"page-10.jpg",mp3:"raz_farmanimals_p10_text.mp3"},{en:"The end",y:"英 [ðə; ði:] [end]",m:"美 [ðə; ði] [ɛnd]",cn:"结束",img:"page-11.jpg"}]},9707:function(e){e.exports=[{en:"Counting Letters",cn:"数数字母",y:"英 ['kaʊntɪŋ] [letəz]",m:"美 ['kaʊntɪŋ] [letəz]",img:"page-1.jpg"},{en:"Smart",cn:"聪明",y:"英 [smɑːt] ",m:"美 [smɑrt]  ",img:"page-2.jpg",mp3:"raz_countingletters_title_text.mp3"},{en:"One letter",cn:"一个字母",y:"英 [wʌn] ['letə]",m:"美 [wʌn] ['lɛtɚ]",img:"page-3.jpg",mp3:"raz_countingletters_p3_text.mp3"},{en:"Two letters",cn:"两个字母",y:"英 [tuː] [letəz]",m:"美 [tu] [letəz]",img:"page-4.jpg",mp3:"raz_countingletters_p4_text.mp3"},{en:"Three letters",cn:"三个字母",y:"英 [θriː] [letəz]",m:"美 [θri] [letəz]",img:"page-5.jpg",mp3:"raz_countingletters_p5_text.mp3"},{en:"Four letters",cn:"四个字母",y:"英 [fɔː] [letəz]",m:"美 [fɔr] [letəz]",img:"page-6.jpg",mp3:"raz_countingletters_p6_text.mp3"},{en:"Five letters",cn:"五个字母",y:"英 [faɪv] [letəz]",m:"美 [faɪv] [letəz]",img:"page-7.jpg",mp3:"raz_countingletters_p7_text.mp3"},{en:"Six letters",cn:" 六个字母",y:"英 [sɪks] [letəz]",m:"美 [sɪks] [letəz]",img:"page-8.jpg",mp3:"raz_countingletters_p8_text.mp3"},{en:"Seven letters",cn:"七个字母",y:"英 ['sev(ə)n] [letəz]",m:"美 ['sɛvn] [letəz]",img:"page-9.jpg",mp3:"raz_countingletters_p9_text.mp3"},{en:"Seven great words!",cn:"七个词语",y:"英 [səʊ] [greɪt] [wɜːdz]",m:"美 [so] [ɡret] [wɝdz]",img:"page-10.jpg",mp3:"raz_countingletters_p10_text.mp3"},{en:"The end",cn:"结束",y:"英 [ðə;ði:] [end]",m:"美 [ðə; ði] [ɛnd]",img:"page-11.jpg"}]},b329:function(e,t,n){},d6dc:function(e,t,n){"use strict";var a=n("64e0"),i=n.n(a);i.a},f1f1:function(e,t,n){}});
//# sourceMappingURL=app.6f0e2847.js.map
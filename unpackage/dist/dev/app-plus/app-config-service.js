
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/movie/movie","pages/novel/novel","pages/member/member","pages/mine/mine","pages/search/search","pages/info/info","pages/code/code"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"globalNavTitle","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#7A7E83","fontSize":"14px","iconWidth":"16px","selectedColor":"#3cc51f","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"/pages/index/index"},{"pagePath":"/pages/movie/movie"},{"pagePath":"/pages/member/member"},{"pagePath":"/pages/mine/mine"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"mpool_app","compilerVersion":"2.7.5","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true},"window":{"navigationStyle":"custom","enablePullDownRefresh":true}},{"path":"/pages/movie/movie","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/novel/novel","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/member/member","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/mine/mine","meta":{},"window":{"navigationStyle":"custom","navigationBarBackgroundColor":"#99CC00"}},{"path":"/pages/search/search","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/info/info","meta":{},"window":{"navigationBarTitleText":"个人中心"}},{"path":"/pages/code/code","meta":{},"window":{"navigationBarTitleText":"二维码名片"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
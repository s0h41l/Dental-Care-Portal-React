(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/react-avatar-editor/dist/index.js":
/*!********************************************************!*\
  !*** ./node_modules/react-avatar-editor/dist/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("!function(e,t){ true?module.exports=t(__webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\"),__webpack_require__(/*! react */ \"./node_modules/react/index.js\"),__webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\")):undefined}(this,function(e,t,o){\"use strict\";function a(e,t){return new Promise(function(o,a){var i,n=new Image;n.onload=function(){return o(n)},n.onerror=a,!1==(null!==(i=e)&&!!i.match(/^\\s*data:([a-z]+\\/[a-z]+(;[a-z-]+=[a-z-]+)?)?(;base64)?,[a-z0-9!$&',()*+;=\\-._~:@/?%\\s]*\\s*$/i))&&t&&(n.crossOrigin=t),n.src=e})}e=e&&e.hasOwnProperty(\"default\")?e.default:e,t=t&&t.hasOwnProperty(\"default\")?t.default:t,o=o&&o.hasOwnProperty(\"default\")?o.default:o;var i=function(e,t){if(!(e instanceof t))throw new TypeError(\"Cannot call a class as a function\")},n=function(){function e(e,t){for(var o=0;o<t.length;o++){var a=t[o];a.enumerable=a.enumerable||!1,a.configurable=!0,\"value\"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,o,a){return o&&e(t.prototype,o),a&&e(t,a),t}}(),r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e},s=function(e,t){if(!e)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!t||\"object\"!=typeof t&&\"function\"!=typeof t?e:t},h=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var o=[],a=!0,i=!1,n=void 0;try{for(var r,s=e[Symbol.iterator]();!(a=(r=s.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(e){i=!0,n=e}finally{try{!a&&s.return&&s.return()}finally{if(i)throw n}}return o}(e,t);throw new TypeError(\"Invalid attempt to destructure non-iterable instance\")}}(),u=!(\"undefined\"==typeof window||\"undefined\"==typeof navigator||!(\"ontouchstart\"in window||navigator.msMaxTouchPoints>0)),c=\"undefined\"!=typeof File,d={touch:{react:{down:\"onTouchStart\",mouseDown:\"onMouseDown\",drag:\"onTouchMove\",move:\"onTouchMove\",mouseMove:\"onMouseMove\",up:\"onTouchEnd\",mouseUp:\"onMouseUp\"},native:{down:\"touchstart\",mouseDown:\"mousedown\",drag:\"touchmove\",move:\"touchmove\",mouseMove:\"mousemove\",up:\"touchend\",mouseUp:\"mouseup\"}},desktop:{react:{down:\"onMouseDown\",drag:\"onDragOver\",move:\"onMouseMove\",up:\"onMouseUp\"},native:{down:\"mousedown\",drag:\"dragStart\",move:\"mousemove\",up:\"mouseup\"}}},l=u?d.touch:d.desktop,p=\"undefined\"!=typeof window&&window.devicePixelRatio?window.devicePixelRatio:1,g={x:.5,y:.5},m=function(e){function d(){var e,t,o;i(this,d);for(var a=arguments.length,n=Array(a),h=0;h<a;h++)n[h]=arguments[h];return t=o=s(this,(e=d.__proto__||Object.getPrototypeOf(d)).call.apply(e,[this].concat(n))),o.state={drag:!1,my:null,mx:null,image:g},o.handleImageReady=function(e){var t=o.getInitialSize(e.width,e.height);t.resource=e,t.x=.5,t.y=.5,o.setState({drag:!1,image:t},o.props.onImageReady),o.props.onLoadSuccess(t)},o.clearImage=function(){var e=o.canvas;e.getContext(\"2d\").clearRect(0,0,e.width,e.height),o.setState({image:g})},o.handleMouseDown=function(e){(e=e||window.event).preventDefault(),o.setState({drag:!0,mx:null,my:null})},o.handleMouseUp=function(){o.state.drag&&(o.setState({drag:!1}),o.props.onMouseUp())},o.handleMouseMove=function(e){if(e=e||window.event,!1!==o.state.drag){e.preventDefault();var t=e.targetTouches?e.targetTouches[0].pageX:e.clientX,a=e.targetTouches?e.targetTouches[0].pageY:e.clientY,i={mx:t,my:a},n=o.props.rotate;if(n=(n%=360)<0?n+360:n,o.state.mx&&o.state.my){var s=o.state.mx-t,h=o.state.my-a,u=o.state.image.width*o.props.scale,c=o.state.image.height*o.props.scale,d=o.getCroppingRect(),l=d.x,p=d.y;l*=u,p*=c;var g=function(e){return e*(Math.PI/180)},m=Math.cos(g(n)),v=Math.sin(g(n)),f=p+-s*v+h*m,y={x:(l+s*m+h*v)/u+1/o.props.scale*o.getXScale()/2,y:f/c+1/o.props.scale*o.getYScale()/2};o.props.onPositionChange(y),i.image=r({},o.state.image,y)}o.setState(i),o.props.onMouseMove(e)}},o.setCanvas=function(e){o.canvas=e},s(o,t)}return function(e,t){if(\"function\"!=typeof t&&null!==t)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(d,t.Component),n(d,[{key:\"componentDidMount\",value:function(){this.props.disableHiDPIScaling&&(p=1);var e=o.findDOMNode(this.canvas).getContext(\"2d\");if(this.props.image&&this.loadImage(this.props.image),this.paint(e),document){var t=!!function(){var e=!1;try{var t=Object.defineProperty({},\"passive\",{get:function(){e=!0}});window.addEventListener(\"test\",t,t),window.removeEventListener(\"test\",t,t)}catch(t){e=!1}return e}()&&{passive:!1},a=l.native;document.addEventListener(a.move,this.handleMouseMove,t),document.addEventListener(a.up,this.handleMouseUp,t),u&&(document.addEventListener(a.mouseMove,this.handleMouseMove,t),document.addEventListener(a.mouseUp,this.handleMouseUp,t))}}},{key:\"componentWillReceiveProps\",value:function(e){e.image&&this.props.image!==e.image||this.props.width!==e.width||this.props.height!==e.height?this.loadImage(e.image):e.image||this.clearImage()}},{key:\"componentDidUpdate\",value:function(e,t){var a=o.findDOMNode(this.canvas),i=a.getContext(\"2d\");i.clearRect(0,0,a.width,a.height),this.paint(i),this.paintImage(i,this.state.image,this.props.border),e.image===this.props.image&&e.width===this.props.width&&e.height===this.props.height&&e.position===this.props.position&&e.scale===this.props.scale&&e.rotate===this.props.rotate&&t.my===this.state.my&&t.mx===this.state.mx&&t.image.x===this.state.image.x&&t.image.y===this.state.image.y||this.props.onImageChange()}},{key:\"componentWillUnmount\",value:function(){if(document){var e=l.native;document.removeEventListener(e.move,this.handleMouseMove,!1),document.removeEventListener(e.up,this.handleMouseUp,!1),u&&(document.removeEventListener(e.mouseMove,this.handleMouseMove,!1),document.removeEventListener(e.mouseUp,this.handleMouseUp,!1))}}},{key:\"isVertical\",value:function(){return this.props.rotate%180!=0}},{key:\"getBorders\",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props.border;return Array.isArray(e)?e:[e,e]}},{key:\"getDimensions\",value:function(){var e=this.props,t=e.width,o=e.height,a=e.rotate,i=e.border,n={},r=this.getBorders(i),s=h(r,2),u=s[0],c=s[1],d=t,l=o;return this.isVertical()?(n.width=l,n.height=d):(n.width=d,n.height=l),n.width+=2*u,n.height+=2*c,{canvas:n,rotate:a,width:t,height:o,border:i}}},{key:\"getImage\",value:function(){var e=this.getCroppingRect(),t=this.state.image;e.x*=t.resource.width,e.y*=t.resource.height,e.width*=t.resource.width,e.height*=t.resource.height;var o=document.createElement(\"canvas\");this.isVertical()?(o.width=e.height,o.height=e.width):(o.width=e.width,o.height=e.height);var a=o.getContext(\"2d\");return a.translate(o.width/2,o.height/2),a.rotate(this.props.rotate*Math.PI/180),a.translate(-o.width/2,-o.height/2),this.isVertical()&&a.translate((o.width-o.height)/2,(o.height-o.width)/2),a.drawImage(t.resource,-e.x,-e.y),o}},{key:\"getImageScaledToCanvas\",value:function(){var e=this.getDimensions(),t=e.width,o=e.height,a=document.createElement(\"canvas\");return this.isVertical()?(a.width=o,a.height=t):(a.width=t,a.height=o),this.paintImage(a.getContext(\"2d\"),this.state.image,0,1),a}},{key:\"getXScale\",value:function(){var e=this.props.width/this.props.height,t=this.state.image.width/this.state.image.height;return Math.min(1,e/t)}},{key:\"getYScale\",value:function(){var e=this.props.height/this.props.width,t=this.state.image.height/this.state.image.width;return Math.min(1,e/t)}},{key:\"getCroppingRect\",value:function(){var e=this.props.position||{x:this.state.image.x,y:this.state.image.y},t=1/this.props.scale*this.getXScale(),o=1/this.props.scale*this.getYScale(),a={x:e.x-t/2,y:e.y-o/2,width:t,height:o},i=0,n=1-a.width,s=0,h=1-a.height;return(this.props.disableBoundaryChecks||t>1||o>1)&&(i=-a.width,n=1,s=-a.height,h=1),r({},a,{x:Math.max(i,Math.min(a.x,n)),y:Math.max(s,Math.min(a.y,h))})}},{key:\"loadImage\",value:function(e){var t;c&&e instanceof File?(t=e,new Promise(function(e,o){var i=new FileReader;i.onload=function(t){try{var i=a(t.target.result);e(i)}catch(t){o(t)}},i.readAsDataURL(t)})).then(this.handleImageReady).catch(this.props.onLoadFailure):\"string\"==typeof e&&a(e,this.props.crossOrigin).then(this.handleImageReady).catch(this.props.onLoadFailure)}},{key:\"getInitialSize\",value:function(e,t){var o=void 0,a=void 0,i=this.getDimensions();return i.height/i.width>t/e?a=e*((o=this.getDimensions().height)/t):o=t*((a=this.getDimensions().width)/e),{height:o,width:a}}},{key:\"paintImage\",value:function(e,t,o){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:p;if(t.resource){var i=this.calculatePosition(t,o);e.save(),e.translate(e.canvas.width/2,e.canvas.height/2),e.rotate(this.props.rotate*Math.PI/180),e.translate(-e.canvas.width/2,-e.canvas.height/2),this.isVertical()&&e.translate((e.canvas.width-e.canvas.height)/2,(e.canvas.height-e.canvas.width)/2),e.scale(a,a),e.globalCompositeOperation=\"destination-over\",e.drawImage(t.resource,i.x,i.y,i.width,i.height),e.restore()}}},{key:\"calculatePosition\",value:function(e,t){e=e||this.state.image;var o=this.getBorders(t),a=h(o,2),i=a[0],n=a[1],r=this.getCroppingRect(),s=e.width*this.props.scale,u=e.height*this.props.scale,c=-r.x*s,d=-r.y*u;return this.isVertical()?(c+=n,d+=i):(c+=i,d+=n),{x:c,y:d,height:u,width:s}}},{key:\"paint\",value:function(e){e.save(),e.scale(p,p),e.translate(0,0),e.fillStyle=\"rgba(\"+this.props.color.slice(0,4).join(\",\")+\")\";var t=this.props.borderRadius,o=this.getDimensions(),a=this.getBorders(o.border),i=h(a,2),n=i[0],r=i[1],s=o.canvas.height,u=o.canvas.width;t=Math.max(t,0),t=Math.min(t,u/2-n,s/2-r),e.beginPath(),function(e,t,o,a,i,n){if(0===n)e.rect(t,o,a,i);else{var r=a-n,s=i-n;e.translate(t,o),e.arc(n,n,n,Math.PI,1.5*Math.PI),e.lineTo(r,0),e.arc(r,n,n,1.5*Math.PI,2*Math.PI),e.lineTo(a,s),e.arc(r,s,n,2*Math.PI,.5*Math.PI),e.lineTo(n,i),e.arc(n,s,n,.5*Math.PI,Math.PI),e.translate(-t,-o)}}(e,n,r,u-2*n,s-2*r,t),e.rect(u,0,-u,s),e.fill(\"evenodd\"),e.restore()}},{key:\"render\",value:function(){var e=this.props,o=(e.scale,e.rotate,e.image,e.border,e.borderRadius,e.width,e.height,e.position,e.color,e.style),a=(e.crossOrigin,e.onLoadFailure,e.onLoadSuccess,e.onImageReady,e.onImageChange,e.onMouseUp,e.onMouseMove,e.onPositionChange,e.disableBoundaryChecks,e.disableHiDPIScaling,function(e,t){var o={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(o[a]=e[a]);return o}(e,[\"scale\",\"rotate\",\"image\",\"border\",\"borderRadius\",\"width\",\"height\",\"position\",\"color\",\"style\",\"crossOrigin\",\"onLoadFailure\",\"onLoadSuccess\",\"onImageReady\",\"onImageChange\",\"onMouseUp\",\"onMouseMove\",\"onPositionChange\",\"disableBoundaryChecks\",\"disableHiDPIScaling\"])),i=this.getDimensions(),n={width:i.canvas.width,height:i.canvas.height,cursor:this.state.drag?\"grabbing\":\"grab\",touchAction:\"none\"},s={width:i.canvas.width*p,height:i.canvas.height*p,style:r({},n,o)};return s[l.react.down]=this.handleMouseDown,u&&(s[l.react.mouseDown]=this.handleMouseDown),t.createElement(\"canvas\",r({ref:this.setCanvas},s,a))}}]),d}();return m.propTypes={scale:e.number,rotate:e.number,image:e.oneOfType([e.string].concat(function(e){if(Array.isArray(e)){for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t];return o}return Array.from(e)}(c?[e.instanceOf(File)]:[]))),border:e.oneOfType([e.number,e.arrayOf(e.number)]),borderRadius:e.number,width:e.number,height:e.number,position:e.shape({x:e.number,y:e.number}),color:e.arrayOf(e.number),style:e.object,crossOrigin:e.oneOf([\"\",\"anonymous\",\"use-credentials\"]),className:e.string,onLoadFailure:e.func,onLoadSuccess:e.func,onImageReady:e.func,onImageChange:e.func,onMouseUp:e.func,onMouseMove:e.func,onPositionChange:e.func,disableBoundaryChecks:e.bool,disableHiDPIScaling:e.bool},m.defaultProps={scale:1,rotate:0,border:25,borderRadius:0,width:200,height:200,color:[0,0,0,.5],style:{},className:\"\",onLoadFailure:function(){},onLoadSuccess:function(){},onImageReady:function(){},onImageChange:function(){},onMouseUp:function(){},onMouseMove:function(){},onPositionChange:function(){},disableBoundaryChecks:!1,disableHiDPIScaling:!1},m});\n\n\n//# sourceURL=webpack:///./node_modules/react-avatar-editor/dist/index.js?");

/***/ })

}]);
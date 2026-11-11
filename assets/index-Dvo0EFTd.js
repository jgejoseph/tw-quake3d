(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Eo="170",Yi={ROTATE:0,DOLLY:1,PAN:2},Wi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},xh=0,$o=1,Mh=2,Mc=1,yh=2,Rn=3,Zn=0,ke=1,Xe=2,qn=0,qi=1,Ko=2,Zo=3,Jo=4,Sh=5,ci=100,Eh=101,bh=102,Th=103,wh=104,Ah=200,Rh=201,Ch=202,Ph=203,Ca=204,Pa=205,Lh=206,Dh=207,Uh=208,Ih=209,Nh=210,Fh=211,Oh=212,Bh=213,zh=214,La=0,Da=1,Ua=2,Zi=3,Ia=4,Na=5,Fa=6,Oa=7,bo=0,kh=1,Hh=2,jn=0,Vh=1,Gh=2,Wh=3,Xh=4,Yh=5,qh=6,jh=7,yc=300,Ji=301,Qi=302,Ba=303,za=304,Nr=306,ka=1e3,ui=1001,Ha=1002,ln=1003,$h=1004,Fs=1005,_n=1006,Gr=1007,di=1008,In=1009,Sc=1010,Ec=1011,Ts=1012,To=1013,pi=1014,Pn=1015,Rs=1016,wo=1017,Ao=1018,ts=1020,bc=35902,Tc=1021,wc=1022,on=1023,Ac=1024,Rc=1025,ji=1026,es=1027,Cc=1028,Ro=1029,Pc=1030,Co=1031,Po=1033,xr=33776,Mr=33777,yr=33778,Sr=33779,Va=35840,Ga=35841,Wa=35842,Xa=35843,Ya=36196,qa=37492,ja=37496,$a=37808,Ka=37809,Za=37810,Ja=37811,Qa=37812,to=37813,eo=37814,no=37815,io=37816,so=37817,ro=37818,ao=37819,oo=37820,lo=37821,Er=36492,co=36494,ho=36495,Lc=36283,uo=36284,fo=36285,po=36286,Kh=3200,Zh=3201,Dc=0,Jh=1,Xn="",be="srgb",is="srgb-linear",Fr="linear",ie="srgb",yi=7680,Qo=519,Qh=512,tu=513,eu=514,Uc=515,nu=516,iu=517,su=518,ru=519,mo=35044,tl="300 es",Ln=2e3,Cr=2001;class vi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const we=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let el=1234567;const xs=Math.PI/180,ws=180/Math.PI;function Dn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(we[i&255]+we[i>>8&255]+we[i>>16&255]+we[i>>24&255]+"-"+we[t&255]+we[t>>8&255]+"-"+we[t>>16&15|64]+we[t>>24&255]+"-"+we[e&63|128]+we[e>>8&255]+"-"+we[e>>16&255]+we[e>>24&255]+we[n&255]+we[n>>8&255]+we[n>>16&255]+we[n>>24&255]).toLowerCase()}function Te(i,t,e){return Math.max(t,Math.min(e,i))}function Lo(i,t){return(i%t+t)%t}function au(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function ou(i,t,e){return i!==t?(e-i)/(t-i):0}function Ms(i,t,e){return(1-e)*i+e*t}function lu(i,t,e,n){return Ms(i,t,1-Math.exp(-e*n))}function cu(i,t=1){return t-Math.abs(Lo(i,t*2)-t)}function hu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function uu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function du(i,t){return i+Math.floor(Math.random()*(t-i+1))}function fu(i,t){return i+Math.random()*(t-i)}function pu(i){return i*(.5-Math.random())}function mu(i){i!==void 0&&(el=i);let t=el+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function _u(i){return i*xs}function gu(i){return i*ws}function vu(i){return(i&i-1)===0&&i!==0}function xu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Mu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function yu(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),m=r((n-t)/2),_=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*_,l*m,o*c);break;case"YXY":i.set(l*m,o*h,l*_,o*c);break;case"ZYZ":i.set(l*_,l*m,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function an(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ee(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ic={DEG2RAD:xs,RAD2DEG:ws,generateUUID:Dn,clamp:Te,euclideanModulo:Lo,mapLinear:au,inverseLerp:ou,lerp:Ms,damp:lu,pingpong:cu,smoothstep:hu,smootherstep:uu,randInt:du,randFloat:fu,randFloatSpread:pu,seededRandom:mu,degToRad:_u,radToDeg:gu,isPowerOfTwo:vu,ceilPowerOfTwo:xu,floorPowerOfTwo:Mu,setQuaternionFromProperEuler:yu,normalize:ee,denormalize:an};class Nt{constructor(t=0,e=0){Nt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wt{constructor(t,e,n,s,r,a,o,l,c){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],m=n[5],_=n[8],v=s[0],p=s[3],f=s[6],w=s[1],b=s[4],S=s[7],N=s[2],P=s[5],R=s[8];return r[0]=a*v+o*w+l*N,r[3]=a*p+o*b+l*P,r[6]=a*f+o*S+l*R,r[1]=c*v+h*w+u*N,r[4]=c*p+h*b+u*P,r[7]=c*f+h*S+u*R,r[2]=d*v+m*w+_*N,r[5]=d*p+m*b+_*P,r[8]=d*f+m*S+_*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,m=c*r-a*l,_=e*u+n*d+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return t[0]=u*v,t[1]=(s*c-h*n)*v,t[2]=(o*n-s*a)*v,t[3]=d*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=m*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Wr.makeScale(t,e)),this}rotate(t){return this.premultiply(Wr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Wr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Wr=new Wt;function Nc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Pr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Su(){const i=Pr("canvas");return i.style.display="block",i}const nl={};function gs(i){i in nl||(nl[i]=!0,console.warn(i))}function Eu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function bu(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Tu(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const qt={enabled:!0,workingColorSpace:is,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ie&&(i.r=Un(i.r),i.g=Un(i.g),i.b=Un(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ie&&(i.r=$i(i.r),i.g=$i(i.g),i.b=$i(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Xn?Fr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Un(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function $i(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const il=[.64,.33,.3,.6,.15,.06],sl=[.2126,.7152,.0722],rl=[.3127,.329],al=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ol=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);qt.define({[is]:{primaries:il,whitePoint:rl,transfer:Fr,toXYZ:al,fromXYZ:ol,luminanceCoefficients:sl,workingColorSpaceConfig:{unpackColorSpace:be},outputColorSpaceConfig:{drawingBufferColorSpace:be}},[be]:{primaries:il,whitePoint:rl,transfer:ie,toXYZ:al,fromXYZ:ol,luminanceCoefficients:sl,outputColorSpaceConfig:{drawingBufferColorSpace:be}}});let Si;class wu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Si===void 0&&(Si=Pr("canvas")),Si.width=t.width,Si.height=t.height;const n=Si.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Si}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Pr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Un(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Un(e[n]/255)*255):e[n]=Un(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Au=0;class Fc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Au++}),this.uuid=Dn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Xr(s[a].image)):r.push(Xr(s[a]))}else r=Xr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Xr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?wu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ru=0;class Ie extends vi{constructor(t=Ie.DEFAULT_IMAGE,e=Ie.DEFAULT_MAPPING,n=ui,s=ui,r=_n,a=di,o=on,l=In,c=Ie.DEFAULT_ANISOTROPY,h=Xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ru++}),this.uuid=Dn(),this.name="",this.source=new Fc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==yc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ka:t.x=t.x-Math.floor(t.x);break;case ui:t.x=t.x<0?0:1;break;case Ha:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ka:t.y=t.y-Math.floor(t.y);break;case ui:t.y=t.y<0?0:1;break;case Ha:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ie.DEFAULT_IMAGE=null;Ie.DEFAULT_MAPPING=yc;Ie.DEFAULT_ANISOTROPY=1;class re{constructor(t=0,e=0,n=0,s=1){re.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],m=l[5],_=l[9],v=l[2],p=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(c+1)/2,S=(m+1)/2,N=(f+1)/2,P=(h+d)/4,R=(u+v)/4,D=(_+p)/4;return b>S&&b>N?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=P/n,r=R/n):S>N?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=P/s,r=D/s):N<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(N),n=R/r,s=D/r),this.set(n,s,r,e),this}let w=Math.sqrt((p-_)*(p-_)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(w)<.001&&(w=1),this.x=(p-_)/w,this.y=(u-v)/w,this.z=(d-h)/w,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cu extends vi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new re(0,0,t,e),this.scissorTest=!1,this.viewport=new re(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ie(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Fc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mi extends Cu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Oc extends Ie{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Pu extends Ie{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _i{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[a+0],m=r[a+1],_=r[a+2],v=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=m,t[e+2]=_,t[e+3]=v;return}if(u!==v||l!==d||c!==m||h!==_){let p=1-o;const f=l*d+c*m+h*_+u*v,w=f>=0?1:-1,b=1-f*f;if(b>Number.EPSILON){const N=Math.sqrt(b),P=Math.atan2(N,f*w);p=Math.sin(p*P)/N,o=Math.sin(o*P)/N}const S=o*w;if(l=l*p+d*S,c=c*p+m*S,h=h*p+_*S,u=u*p+v*S,p===1-o){const N=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=N,c*=N,h*=N,u*=N}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],m=r[a+2],_=r[a+3];return t[e]=o*_+h*u+l*m-c*d,t[e+1]=l*_+h*d+c*u-o*m,t[e+2]=c*_+h*m+o*d-l*u,t[e+3]=h*_-o*u-l*d-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),m=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*m*_,this._y=c*m*u-d*h*_,this._z=c*h*_+d*m*u,this._w=c*h*u-d*m*_;break;case"YXZ":this._x=d*h*u+c*m*_,this._y=c*m*u-d*h*_,this._z=c*h*_-d*m*u,this._w=c*h*u+d*m*_;break;case"ZXY":this._x=d*h*u-c*m*_,this._y=c*m*u+d*h*_,this._z=c*h*_+d*m*u,this._w=c*h*u-d*m*_;break;case"ZYX":this._x=d*h*u-c*m*_,this._y=c*m*u+d*h*_,this._z=c*h*_-d*m*u,this._w=c*h*u+d*m*_;break;case"YZX":this._x=d*h*u+c*m*_,this._y=c*m*u+d*h*_,this._z=c*h*_-d*m*u,this._w=c*h*u-d*m*_;break;case"XZY":this._x=d*h*u-c*m*_,this._y=c*m*u-d*h*_,this._z=c*h*_+d*m*u,this._w=c*h*u+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>u){const m=2*Math.sqrt(1+n-o-u);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>u){const m=2*Math.sqrt(1+o-n-u);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ll.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ll.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Yr.copy(this).projectOnVector(t),this.sub(Yr)}reflect(t){return this.sub(Yr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yr=new L,ll=new _i;class Jn{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(en.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(en.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=en.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,en):en.fromBufferAttribute(r,a),en.applyMatrix4(t.matrixWorld),this.expandByPoint(en);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Os.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Os.copy(n.boundingBox)),Os.applyMatrix4(t.matrixWorld),this.union(Os)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,en),en.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(cs),Bs.subVectors(this.max,cs),Ei.subVectors(t.a,cs),bi.subVectors(t.b,cs),Ti.subVectors(t.c,cs),Bn.subVectors(bi,Ei),zn.subVectors(Ti,bi),ei.subVectors(Ei,Ti);let e=[0,-Bn.z,Bn.y,0,-zn.z,zn.y,0,-ei.z,ei.y,Bn.z,0,-Bn.x,zn.z,0,-zn.x,ei.z,0,-ei.x,-Bn.y,Bn.x,0,-zn.y,zn.x,0,-ei.y,ei.x,0];return!qr(e,Ei,bi,Ti,Bs)||(e=[1,0,0,0,1,0,0,0,1],!qr(e,Ei,bi,Ti,Bs))?!1:(zs.crossVectors(Bn,zn),e=[zs.x,zs.y,zs.z],qr(e,Ei,bi,Ti,Bs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,en).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(en).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(En),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const En=[new L,new L,new L,new L,new L,new L,new L,new L],en=new L,Os=new Jn,Ei=new L,bi=new L,Ti=new L,Bn=new L,zn=new L,ei=new L,cs=new L,Bs=new L,zs=new L,ni=new L;function qr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ni.fromArray(i,r);const o=s.x*Math.abs(ni.x)+s.y*Math.abs(ni.y)+s.z*Math.abs(ni.z),l=t.dot(ni),c=e.dot(ni),h=n.dot(ni);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Lu=new Jn,hs=new L,jr=new L;class xi{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Lu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;hs.subVectors(t,this.center);const e=hs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(hs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(jr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(hs.copy(t.center).add(jr)),this.expandByPoint(hs.copy(t.center).sub(jr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bn=new L,$r=new L,ks=new L,kn=new L,Kr=new L,Hs=new L,Zr=new L;class Cs{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,bn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=bn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(bn.copy(this.origin).addScaledVector(this.direction,e),bn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){$r.copy(t).add(e).multiplyScalar(.5),ks.copy(e).sub(t).normalize(),kn.copy(this.origin).sub($r);const r=t.distanceTo(e)*.5,a=-this.direction.dot(ks),o=kn.dot(this.direction),l=-kn.dot(ks),c=kn.lengthSq(),h=Math.abs(1-a*a);let u,d,m,_;if(h>0)if(u=a*l-o,d=a*o-l,_=r*h,u>=0)if(d>=-_)if(d<=_){const v=1/h;u*=v,d*=v,m=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;else d<=-_?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+d*(d+2*l)+c):d<=_?(u=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy($r).addScaledVector(ks,d),m}intersectSphere(t,e){bn.subVectors(t.center,this.origin);const n=bn.dot(this.direction),s=bn.dot(bn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,bn)!==null}intersectTriangle(t,e,n,s,r){Kr.subVectors(e,t),Hs.subVectors(n,t),Zr.crossVectors(Kr,Hs);let a=this.direction.dot(Zr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;kn.subVectors(this.origin,t);const l=o*this.direction.dot(Hs.crossVectors(kn,Hs));if(l<0)return null;const c=o*this.direction.dot(Kr.cross(kn));if(c<0||l+c>a)return null;const h=-o*kn.dot(Zr);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ne{constructor(t,e,n,s,r,a,o,l,c,h,u,d,m,_,v,p){ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,m,_,v,p)}set(t,e,n,s,r,a,o,l,c,h,u,d,m,_,v,p){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=m,f[7]=_,f[11]=v,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ne().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/wi.setFromMatrixColumn(t,0).length(),r=1/wi.setFromMatrixColumn(t,1).length(),a=1/wi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,m=a*u,_=o*h,v=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=m+_*c,e[5]=d-v*c,e[9]=-o*l,e[2]=v-d*c,e[6]=_+m*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,m=l*u,_=c*h,v=c*u;e[0]=d+v*o,e[4]=_*o-m,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=m*o-_,e[6]=v+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,m=l*u,_=c*h,v=c*u;e[0]=d-v*o,e[4]=-a*u,e[8]=_+m*o,e[1]=m+_*o,e[5]=a*h,e[9]=v-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,m=a*u,_=o*h,v=o*u;e[0]=l*h,e[4]=_*c-m,e[8]=d*c+v,e[1]=l*u,e[5]=v*c+d,e[9]=m*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,m=a*c,_=o*l,v=o*c;e[0]=l*h,e[4]=v-d*u,e[8]=_*u+m,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=m*u+_,e[10]=d-v*u}else if(t.order==="XZY"){const d=a*l,m=a*c,_=o*l,v=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+v,e[5]=a*h,e[9]=m*u-_,e[2]=_*u-m,e[6]=o*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Du,t,Uu)}lookAt(t,e,n){const s=this.elements;return Ge.subVectors(t,e),Ge.lengthSq()===0&&(Ge.z=1),Ge.normalize(),Hn.crossVectors(n,Ge),Hn.lengthSq()===0&&(Math.abs(n.z)===1?Ge.x+=1e-4:Ge.z+=1e-4,Ge.normalize(),Hn.crossVectors(n,Ge)),Hn.normalize(),Vs.crossVectors(Ge,Hn),s[0]=Hn.x,s[4]=Vs.x,s[8]=Ge.x,s[1]=Hn.y,s[5]=Vs.y,s[9]=Ge.y,s[2]=Hn.z,s[6]=Vs.z,s[10]=Ge.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],m=n[13],_=n[2],v=n[6],p=n[10],f=n[14],w=n[3],b=n[7],S=n[11],N=n[15],P=s[0],R=s[4],D=s[8],y=s[12],x=s[1],A=s[5],X=s[9],H=s[13],Z=s[2],Q=s[6],j=s[10],et=s[14],W=s[3],$=s[7],lt=s[11],ht=s[15];return r[0]=a*P+o*x+l*Z+c*W,r[4]=a*R+o*A+l*Q+c*$,r[8]=a*D+o*X+l*j+c*lt,r[12]=a*y+o*H+l*et+c*ht,r[1]=h*P+u*x+d*Z+m*W,r[5]=h*R+u*A+d*Q+m*$,r[9]=h*D+u*X+d*j+m*lt,r[13]=h*y+u*H+d*et+m*ht,r[2]=_*P+v*x+p*Z+f*W,r[6]=_*R+v*A+p*Q+f*$,r[10]=_*D+v*X+p*j+f*lt,r[14]=_*y+v*H+p*et+f*ht,r[3]=w*P+b*x+S*Z+N*W,r[7]=w*R+b*A+S*Q+N*$,r[11]=w*D+b*X+S*j+N*lt,r[15]=w*y+b*H+S*et+N*ht,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],m=t[14],_=t[3],v=t[7],p=t[11],f=t[15];return _*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*m-n*l*m)+v*(+e*l*m-e*c*d+r*a*d-s*a*m+s*c*h-r*l*h)+p*(+e*c*u-e*o*m-r*a*u+n*a*m+r*o*h-n*c*h)+f*(-s*o*h-e*l*u+e*o*d+s*a*u-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],m=t[11],_=t[12],v=t[13],p=t[14],f=t[15],w=u*p*c-v*d*c+v*l*m-o*p*m-u*l*f+o*d*f,b=_*d*c-h*p*c-_*l*m+a*p*m+h*l*f-a*d*f,S=h*v*c-_*u*c+_*o*m-a*v*m-h*o*f+a*u*f,N=_*u*l-h*v*l-_*o*d+a*v*d+h*o*p-a*u*p,P=e*w+n*b+s*S+r*N;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/P;return t[0]=w*R,t[1]=(v*d*r-u*p*r-v*s*m+n*p*m+u*s*f-n*d*f)*R,t[2]=(o*p*r-v*l*r+v*s*c-n*p*c-o*s*f+n*l*f)*R,t[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*m-n*l*m)*R,t[4]=b*R,t[5]=(h*p*r-_*d*r+_*s*m-e*p*m-h*s*f+e*d*f)*R,t[6]=(_*l*r-a*p*r-_*s*c+e*p*c+a*s*f-e*l*f)*R,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*m+e*l*m)*R,t[8]=S*R,t[9]=(_*u*r-h*v*r-_*n*m+e*v*m+h*n*f-e*u*f)*R,t[10]=(a*v*r-_*o*r+_*n*c-e*v*c-a*n*f+e*o*f)*R,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*m-e*o*m)*R,t[12]=N*R,t[13]=(h*v*s-_*u*s+_*n*d-e*v*d-h*n*p+e*u*p)*R,t[14]=(_*o*s-a*v*s-_*n*l+e*v*l+a*n*p-e*o*p)*R,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*d+e*o*d)*R,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,m=r*h,_=r*u,v=a*h,p=a*u,f=o*u,w=l*c,b=l*h,S=l*u,N=n.x,P=n.y,R=n.z;return s[0]=(1-(v+f))*N,s[1]=(m+S)*N,s[2]=(_-b)*N,s[3]=0,s[4]=(m-S)*P,s[5]=(1-(d+f))*P,s[6]=(p+w)*P,s[7]=0,s[8]=(_+b)*R,s[9]=(p-w)*R,s[10]=(1-(d+v))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=wi.set(s[0],s[1],s[2]).length();const a=wi.set(s[4],s[5],s[6]).length(),o=wi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],nn.copy(this);const c=1/r,h=1/a,u=1/o;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=h,nn.elements[5]*=h,nn.elements[6]*=h,nn.elements[8]*=u,nn.elements[9]*=u,nn.elements[10]*=u,e.setFromRotationMatrix(nn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Ln){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let m,_;if(o===Ln)m=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Cr)m=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Ln){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*c,m=(n+s)*h;let _,v;if(o===Ln)_=(a+r)*u,v=-2*u;else if(o===Cr)_=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const wi=new L,nn=new ne,Du=new L(0,0,0),Uu=new L(1,1,1),Hn=new L,Vs=new L,Ge=new L,cl=new ne,hl=new _i;class vn{constructor(t=0,e=0,n=0,s=vn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Te(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Te(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return cl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(cl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return hl.setFromEuler(this),this.setFromQuaternion(hl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vn.DEFAULT_ORDER="XYZ";class Do{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Iu=0;const ul=new L,Ai=new _i,Tn=new ne,Gs=new L,us=new L,Nu=new L,Fu=new _i,dl=new L(1,0,0),fl=new L(0,1,0),pl=new L(0,0,1),ml={type:"added"},Ou={type:"removed"},Ri={type:"childadded",child:null},Jr={type:"childremoved",child:null};class me extends vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Iu++}),this.uuid=Dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=me.DEFAULT_UP.clone();const t=new L,e=new vn,n=new _i,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ne},normalMatrix:{value:new Wt}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Do,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ai.setFromAxisAngle(t,e),this.quaternion.multiply(Ai),this}rotateOnWorldAxis(t,e){return Ai.setFromAxisAngle(t,e),this.quaternion.premultiply(Ai),this}rotateX(t){return this.rotateOnAxis(dl,t)}rotateY(t){return this.rotateOnAxis(fl,t)}rotateZ(t){return this.rotateOnAxis(pl,t)}translateOnAxis(t,e){return ul.copy(t).applyQuaternion(this.quaternion),this.position.add(ul.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(dl,t)}translateY(t){return this.translateOnAxis(fl,t)}translateZ(t){return this.translateOnAxis(pl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Gs.copy(t):Gs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(us,Gs,this.up):Tn.lookAt(Gs,us,this.up),this.quaternion.setFromRotationMatrix(Tn),s&&(Tn.extractRotation(s.matrixWorld),Ai.setFromRotationMatrix(Tn),this.quaternion.premultiply(Ai.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ml),Ri.child=t,this.dispatchEvent(Ri),Ri.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ou),Jr.child=t,this.dispatchEvent(Jr),Jr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Tn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Tn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ml),Ri.child=t,this.dispatchEvent(Ri),Ri.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,t,Nu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,Fu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),m=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}me.DEFAULT_UP=new L(0,1,0);me.DEFAULT_MATRIX_AUTO_UPDATE=!0;me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const sn=new L,wn=new L,Qr=new L,An=new L,Ci=new L,Pi=new L,_l=new L,ta=new L,ea=new L,na=new L,ia=new re,sa=new re,ra=new re;class Je{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),sn.subVectors(t,e),s.cross(sn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){sn.subVectors(s,e),wn.subVectors(n,e),Qr.subVectors(t,e);const a=sn.dot(sn),o=sn.dot(wn),l=sn.dot(Qr),c=wn.dot(wn),h=wn.dot(Qr),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,m=(c*l-o*h)*d,_=(a*h-o*l)*d;return r.set(1-m-_,_,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,An)===null?!1:An.x>=0&&An.y>=0&&An.x+An.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,An)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,An.x),l.addScaledVector(a,An.y),l.addScaledVector(o,An.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return ia.setScalar(0),sa.setScalar(0),ra.setScalar(0),ia.fromBufferAttribute(t,e),sa.fromBufferAttribute(t,n),ra.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ia,r.x),a.addScaledVector(sa,r.y),a.addScaledVector(ra,r.z),a}static isFrontFacing(t,e,n,s){return sn.subVectors(n,e),wn.subVectors(t,e),sn.cross(wn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return sn.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),sn.cross(wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Je.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Je.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Je.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Je.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Je.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Ci.subVectors(s,n),Pi.subVectors(r,n),ta.subVectors(t,n);const l=Ci.dot(ta),c=Pi.dot(ta);if(l<=0&&c<=0)return e.copy(n);ea.subVectors(t,s);const h=Ci.dot(ea),u=Pi.dot(ea);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Ci,a);na.subVectors(t,r);const m=Ci.dot(na),_=Pi.dot(na);if(_>=0&&m<=_)return e.copy(r);const v=m*c-l*_;if(v<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(Pi,o);const p=h*_-m*u;if(p<=0&&u-h>=0&&m-_>=0)return _l.subVectors(r,s),o=(u-h)/(u-h+(m-_)),e.copy(s).addScaledVector(_l,o);const f=1/(p+v+d);return a=v*f,o=d*f,e.copy(n).addScaledVector(Ci,a).addScaledVector(Pi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Bc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vn={h:0,s:0,l:0},Ws={h:0,s:0,l:0};function aa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Vt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,qt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=qt.workingColorSpace){if(t=Lo(t,1),e=Te(e,0,1),n=Te(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=aa(a,r,t+1/3),this.g=aa(a,r,t),this.b=aa(a,r,t-1/3)}return qt.toWorkingColorSpace(this,s),this}setStyle(t,e=be){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=be){const n=Bc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Un(t.r),this.g=Un(t.g),this.b=Un(t.b),this}copyLinearToSRGB(t){return this.r=$i(t.r),this.g=$i(t.g),this.b=$i(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=be){return qt.fromWorkingColorSpace(Ae.copy(this),t),Math.round(Te(Ae.r*255,0,255))*65536+Math.round(Te(Ae.g*255,0,255))*256+Math.round(Te(Ae.b*255,0,255))}getHexString(t=be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.fromWorkingColorSpace(Ae.copy(this),e);const n=Ae.r,s=Ae.g,r=Ae.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=qt.workingColorSpace){return qt.fromWorkingColorSpace(Ae.copy(this),e),t.r=Ae.r,t.g=Ae.g,t.b=Ae.b,t}getStyle(t=be){qt.fromWorkingColorSpace(Ae.copy(this),t);const e=Ae.r,n=Ae.g,s=Ae.b;return t!==be?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Vn),this.setHSL(Vn.h+t,Vn.s+e,Vn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Vn),t.getHSL(Ws);const n=Ms(Vn.h,Ws.h,e),s=Ms(Vn.s,Ws.s,e),r=Ms(Vn.l,Ws.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ae=new Vt;Vt.NAMES=Bc;let Bu=0;class Qn extends vi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bu++}),this.uuid=Dn(),this.name="",this.blending=qi,this.side=Zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ca,this.blendDst=Pa,this.blendEquation=ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=Zi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yi,this.stencilZFail=yi,this.stencilZPass=yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==qi&&(n.blending=this.blending),this.side!==Zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ca&&(n.blendSrc=this.blendSrc),this.blendDst!==Pa&&(n.blendDst=this.blendDst),this.blendEquation!==ci&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Zi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==yi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==yi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==yi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Or extends Qn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=bo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const de=new L,Xs=new Nt;class he{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=mo,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Xs.fromBufferAttribute(this,e),Xs.applyMatrix3(t),this.setXY(e,Xs.x,Xs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix3(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix4(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyNormalMatrix(t),this.setXYZ(e,de.x,de.y,de.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.transformDirection(t),this.setXYZ(e,de.x,de.y,de.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=an(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ee(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=an(e,this.array)),e}setX(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=an(e,this.array)),e}setY(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=an(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=an(e,this.array)),e}setW(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),s=ee(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),s=ee(s,this.array),r=ee(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==mo&&(t.usage=this.usage),t}}class zc extends he{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class kc extends he{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ue extends he{constructor(t,e,n){super(new Float32Array(t),e,n)}}let zu=0;const je=new ne,oa=new me,Li=new L,We=new Jn,ds=new Jn,Me=new L;class ce extends vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zu++}),this.uuid=Dn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Nc(t)?kc:zc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Wt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return je.makeRotationFromQuaternion(t),this.applyMatrix4(je),this}rotateX(t){return je.makeRotationX(t),this.applyMatrix4(je),this}rotateY(t){return je.makeRotationY(t),this.applyMatrix4(je),this}rotateZ(t){return je.makeRotationZ(t),this.applyMatrix4(je),this}translate(t,e,n){return je.makeTranslation(t,e,n),this.applyMatrix4(je),this}scale(t,e,n){return je.makeScale(t,e,n),this.applyMatrix4(je),this}lookAt(t){return oa.lookAt(t),oa.updateMatrix(),this.applyMatrix4(oa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Li).negate(),this.translate(Li.x,Li.y,Li.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ue(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];We.setFromBufferAttribute(r),this.morphTargetsRelative?(Me.addVectors(this.boundingBox.min,We.min),this.boundingBox.expandByPoint(Me),Me.addVectors(this.boundingBox.max,We.max),this.boundingBox.expandByPoint(Me)):(this.boundingBox.expandByPoint(We.min),this.boundingBox.expandByPoint(We.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(We.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];ds.setFromBufferAttribute(o),this.morphTargetsRelative?(Me.addVectors(We.min,ds.min),We.expandByPoint(Me),Me.addVectors(We.max,ds.max),We.expandByPoint(Me)):(We.expandByPoint(ds.min),We.expandByPoint(ds.max))}We.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Me.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Me));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Me.fromBufferAttribute(o,c),l&&(Li.fromBufferAttribute(t,c),Me.add(Li)),s=Math.max(s,n.distanceToSquared(Me))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new he(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<n.count;D++)o[D]=new L,l[D]=new L;const c=new L,h=new L,u=new L,d=new Nt,m=new Nt,_=new Nt,v=new L,p=new L;function f(D,y,x){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,x),d.fromBufferAttribute(r,D),m.fromBufferAttribute(r,y),_.fromBufferAttribute(r,x),h.sub(c),u.sub(c),m.sub(d),_.sub(d);const A=1/(m.x*_.y-_.x*m.y);isFinite(A)&&(v.copy(h).multiplyScalar(_.y).addScaledVector(u,-m.y).multiplyScalar(A),p.copy(u).multiplyScalar(m.x).addScaledVector(h,-_.x).multiplyScalar(A),o[D].add(v),o[y].add(v),o[x].add(v),l[D].add(p),l[y].add(p),l[x].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let D=0,y=w.length;D<y;++D){const x=w[D],A=x.start,X=x.count;for(let H=A,Z=A+X;H<Z;H+=3)f(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const b=new L,S=new L,N=new L,P=new L;function R(D){N.fromBufferAttribute(s,D),P.copy(N);const y=o[D];b.copy(y),b.sub(N.multiplyScalar(N.dot(y))).normalize(),S.crossVectors(P,y);const A=S.dot(l[D])<0?-1:1;a.setXYZW(D,b.x,b.y,b.z,A)}for(let D=0,y=w.length;D<y;++D){const x=w[D],A=x.start,X=x.count;for(let H=A,Z=A+X;H<Z;H+=3)R(t.getX(H+0)),R(t.getX(H+1)),R(t.getX(H+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new he(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const s=new L,r=new L,a=new L,o=new L,l=new L,c=new L,h=new L,u=new L;if(t)for(let d=0,m=t.count;d<m;d+=3){const _=t.getX(d+0),v=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=e.count;d<m;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Me.fromBufferAttribute(t,e),Me.normalize(),t.setXYZ(e,Me.x,Me.y,Me.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let m=0,_=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?m=l[v]*o.data.stride+o.offset:m=l[v]*h;for(let f=0;f<h;f++)d[_++]=c[m++]}return new he(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ce,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],m=t(d,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const m=c[u];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gl=new ne,ii=new Cs,Ys=new xi,vl=new L,qs=new L,js=new L,$s=new L,la=new L,Ks=new L,xl=new L,Zs=new L;class ze extends me{constructor(t=new ce,e=new Or){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Ks.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(la.fromBufferAttribute(u,t),a?Ks.addScaledVector(la,h):Ks.addScaledVector(la.sub(e),h))}e.add(Ks)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ys.copy(n.boundingSphere),Ys.applyMatrix4(r),ii.copy(t.ray).recast(t.near),!(Ys.containsPoint(ii.origin)===!1&&(ii.intersectSphere(Ys,vl)===null||ii.origin.distanceToSquared(vl)>(t.far-t.near)**2))&&(gl.copy(r).invert(),ii.copy(t.ray).applyMatrix4(gl),!(n.boundingBox!==null&&ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ii)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,v=d.length;_<v;_++){const p=d[_],f=a[p.materialIndex],w=Math.max(p.start,m.start),b=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let S=w,N=b;S<N;S+=3){const P=o.getX(S),R=o.getX(S+1),D=o.getX(S+2);s=Js(this,f,t,n,c,h,u,P,R,D),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const _=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let p=_,f=v;p<f;p+=3){const w=o.getX(p),b=o.getX(p+1),S=o.getX(p+2);s=Js(this,a,t,n,c,h,u,w,b,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,v=d.length;_<v;_++){const p=d[_],f=a[p.materialIndex],w=Math.max(p.start,m.start),b=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let S=w,N=b;S<N;S+=3){const P=S,R=S+1,D=S+2;s=Js(this,f,t,n,c,h,u,P,R,D),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const _=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=_,f=v;p<f;p+=3){const w=p,b=p+1,S=p+2;s=Js(this,a,t,n,c,h,u,w,b,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function ku(i,t,e,n,s,r,a,o){let l;if(t.side===ke?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Zn,o),l===null)return null;Zs.copy(o),Zs.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Zs);return c<e.near||c>e.far?null:{distance:c,point:Zs.clone(),object:i}}function Js(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,qs),i.getVertexPosition(l,js),i.getVertexPosition(c,$s);const h=ku(i,t,e,n,qs,js,$s,xl);if(h){const u=new L;Je.getBarycoord(xl,qs,js,$s,u),s&&(h.uv=Je.getInterpolatedAttribute(s,o,l,c,u,new Nt)),r&&(h.uv1=Je.getInterpolatedAttribute(r,o,l,c,u,new Nt)),a&&(h.normal=Je.getInterpolatedAttribute(a,o,l,c,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new L,materialIndex:0};Je.getNormal(qs,js,$s,d.normal),h.face=d,h.barycoord=u}return h}class Ps extends ce{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,m=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,s,a,2),_("x","z","y",1,-1,t,n,-e,s,a,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ue(c,3)),this.setAttribute("normal",new ue(h,3)),this.setAttribute("uv",new ue(u,2));function _(v,p,f,w,b,S,N,P,R,D,y){const x=S/R,A=N/D,X=S/2,H=N/2,Z=P/2,Q=R+1,j=D+1;let et=0,W=0;const $=new L;for(let lt=0;lt<j;lt++){const ht=lt*A-H;for(let nt=0;nt<Q;nt++){const dt=nt*x-X;$[v]=dt*w,$[p]=ht*b,$[f]=Z,c.push($.x,$.y,$.z),$[v]=0,$[p]=0,$[f]=P>0?1:-1,h.push($.x,$.y,$.z),u.push(nt/R),u.push(1-lt/D),et+=1}}for(let lt=0;lt<D;lt++)for(let ht=0;ht<R;ht++){const nt=d+ht+Q*lt,dt=d+ht+Q*(lt+1),I=d+(ht+1)+Q*(lt+1),q=d+(ht+1)+Q*lt;l.push(nt,dt,q),l.push(dt,I,q),W+=6}o.addGroup(m,W,y),m+=W,d+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ps(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ns(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Pe(i){const t={};for(let e=0;e<i.length;e++){const n=ns(i[e]);for(const s in n)t[s]=n[s]}return t}function Hu(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Hc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}const Uo={clone:ns,merge:Pe};var Vu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xn extends Qn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vu,this.fragmentShader=Gu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ns(t.uniforms),this.uniformsGroups=Hu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Vc extends me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=Ln}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Gn=new L,Ml=new Nt,yl=new Nt;class Ke extends Vc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ws*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(xs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ws*2*Math.atan(Math.tan(xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Gn.x,Gn.y).multiplyScalar(-t/Gn.z),Gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gn.x,Gn.y).multiplyScalar(-t/Gn.z)}getViewSize(t,e){return this.getViewBounds(t,Ml,yl),e.subVectors(yl,Ml)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(xs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Di=-90,Ui=1;class Wu extends me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ke(Di,Ui,t,e);s.layers=this.layers,this.add(s);const r=new Ke(Di,Ui,t,e);r.layers=this.layers,this.add(r);const a=new Ke(Di,Ui,t,e);a.layers=this.layers,this.add(a);const o=new Ke(Di,Ui,t,e);o.layers=this.layers,this.add(o);const l=new Ke(Di,Ui,t,e);l.layers=this.layers,this.add(l);const c=new Ke(Di,Ui,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Ln)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Cr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,m),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Gc extends Ie{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ji,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Xu extends mi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Gc(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:_n}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ps(5,5,5),r=new xn({name:"CubemapFromEquirect",uniforms:ns(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ke,blending:qn});r.uniforms.tEquirect.value=e;const a=new ze(s,r),o=e.minFilter;return e.minFilter===di&&(e.minFilter=_n),new Wu(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const ca=new L,Yu=new L,qu=new Wt;class Wn{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=ca.subVectors(n,e).cross(Yu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ca),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||qu.getNormalMatrix(t),s=this.coplanarPoint(ca).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const si=new xi,Qs=new L;class Io{constructor(t=new Wn,e=new Wn,n=new Wn,s=new Wn,r=new Wn,a=new Wn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ln){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],m=s[8],_=s[9],v=s[10],p=s[11],f=s[12],w=s[13],b=s[14],S=s[15];if(n[0].setComponents(l-r,d-c,p-m,S-f).normalize(),n[1].setComponents(l+r,d+c,p+m,S+f).normalize(),n[2].setComponents(l+a,d+h,p+_,S+w).normalize(),n[3].setComponents(l-a,d-h,p-_,S-w).normalize(),n[4].setComponents(l-o,d-u,p-v,S-b).normalize(),e===Ln)n[5].setComponents(l+o,d+u,p+v,S+b).normalize();else if(e===Cr)n[5].setComponents(o,u,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),si.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),si.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(si)}intersectsSprite(t){return si.center.set(0,0,0),si.radius=.7071067811865476,si.applyMatrix4(t.matrixWorld),this.intersectsSphere(si)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Qs.x=s.normal.x>0?t.max.x:t.min.x,Qs.y=s.normal.y>0?t.max.y:t.min.y,Qs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Qs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Wc(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function ju(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((m,_)=>m.start-_.start);let d=0;for(let m=1;m<u.length;m++){const _=u[d],v=u[m];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++d,u[d]=v)}u.length=d+1;for(let m=0,_=u.length;m<_;m++){const v=u[m];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class Br extends ce{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,m=[],_=[],v=[],p=[];for(let f=0;f<h;f++){const w=f*d-a;for(let b=0;b<c;b++){const S=b*u-r;_.push(S,-w,0),v.push(0,0,1),p.push(b/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let w=0;w<o;w++){const b=w+c*f,S=w+c*(f+1),N=w+1+c*(f+1),P=w+1+c*f;m.push(b,S,P),m.push(S,N,P)}this.setIndex(m),this.setAttribute("position",new ue(_,3)),this.setAttribute("normal",new ue(v,3)),this.setAttribute("uv",new ue(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Br(t.width,t.height,t.widthSegments,t.heightSegments)}}var $u=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ku=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Zu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ju=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,td=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ed=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,nd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,id=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,sd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ad=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,od=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ld=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,cd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,hd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ud=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,md=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_d=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,vd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,xd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Md=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,yd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ed=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Td="gl_FragColor = linearToOutputTexel( gl_FragColor );",wd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ad=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Rd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Pd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ld=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Dd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ud=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Id=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Od=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Hd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Vd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,qd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$d=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Kd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ef=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,rf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,af=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,of=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,df=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ff=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,pf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_f=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,xf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ef=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Tf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Af=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Df=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Uf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,If=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Nf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ff=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Of=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,zf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Wf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Xf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,jf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $f=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ep=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,np=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ip=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,sp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ap=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,op=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,hp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,up=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,pp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_p=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Mp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ep=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,bp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Tp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ap=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Rp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Yt={alphahash_fragment:$u,alphahash_pars_fragment:Ku,alphamap_fragment:Zu,alphamap_pars_fragment:Ju,alphatest_fragment:Qu,alphatest_pars_fragment:td,aomap_fragment:ed,aomap_pars_fragment:nd,batching_pars_vertex:id,batching_vertex:sd,begin_vertex:rd,beginnormal_vertex:ad,bsdfs:od,iridescence_fragment:ld,bumpmap_pars_fragment:cd,clipping_planes_fragment:hd,clipping_planes_pars_fragment:ud,clipping_planes_pars_vertex:dd,clipping_planes_vertex:fd,color_fragment:pd,color_pars_fragment:md,color_pars_vertex:_d,color_vertex:gd,common:vd,cube_uv_reflection_fragment:xd,defaultnormal_vertex:Md,displacementmap_pars_vertex:yd,displacementmap_vertex:Sd,emissivemap_fragment:Ed,emissivemap_pars_fragment:bd,colorspace_fragment:Td,colorspace_pars_fragment:wd,envmap_fragment:Ad,envmap_common_pars_fragment:Rd,envmap_pars_fragment:Cd,envmap_pars_vertex:Pd,envmap_physical_pars_fragment:Hd,envmap_vertex:Ld,fog_vertex:Dd,fog_pars_vertex:Ud,fog_fragment:Id,fog_pars_fragment:Nd,gradientmap_pars_fragment:Fd,lightmap_pars_fragment:Od,lights_lambert_fragment:Bd,lights_lambert_pars_fragment:zd,lights_pars_begin:kd,lights_toon_fragment:Vd,lights_toon_pars_fragment:Gd,lights_phong_fragment:Wd,lights_phong_pars_fragment:Xd,lights_physical_fragment:Yd,lights_physical_pars_fragment:qd,lights_fragment_begin:jd,lights_fragment_maps:$d,lights_fragment_end:Kd,logdepthbuf_fragment:Zd,logdepthbuf_pars_fragment:Jd,logdepthbuf_pars_vertex:Qd,logdepthbuf_vertex:tf,map_fragment:ef,map_pars_fragment:nf,map_particle_fragment:sf,map_particle_pars_fragment:rf,metalnessmap_fragment:af,metalnessmap_pars_fragment:of,morphinstance_vertex:lf,morphcolor_vertex:cf,morphnormal_vertex:hf,morphtarget_pars_vertex:uf,morphtarget_vertex:df,normal_fragment_begin:ff,normal_fragment_maps:pf,normal_pars_fragment:mf,normal_pars_vertex:_f,normal_vertex:gf,normalmap_pars_fragment:vf,clearcoat_normal_fragment_begin:xf,clearcoat_normal_fragment_maps:Mf,clearcoat_pars_fragment:yf,iridescence_pars_fragment:Sf,opaque_fragment:Ef,packing:bf,premultiplied_alpha_fragment:Tf,project_vertex:wf,dithering_fragment:Af,dithering_pars_fragment:Rf,roughnessmap_fragment:Cf,roughnessmap_pars_fragment:Pf,shadowmap_pars_fragment:Lf,shadowmap_pars_vertex:Df,shadowmap_vertex:Uf,shadowmask_pars_fragment:If,skinbase_vertex:Nf,skinning_pars_vertex:Ff,skinning_vertex:Of,skinnormal_vertex:Bf,specularmap_fragment:zf,specularmap_pars_fragment:kf,tonemapping_fragment:Hf,tonemapping_pars_fragment:Vf,transmission_fragment:Gf,transmission_pars_fragment:Wf,uv_pars_fragment:Xf,uv_pars_vertex:Yf,uv_vertex:qf,worldpos_vertex:jf,background_vert:$f,background_frag:Kf,backgroundCube_vert:Zf,backgroundCube_frag:Jf,cube_vert:Qf,cube_frag:tp,depth_vert:ep,depth_frag:np,distanceRGBA_vert:ip,distanceRGBA_frag:sp,equirect_vert:rp,equirect_frag:ap,linedashed_vert:op,linedashed_frag:lp,meshbasic_vert:cp,meshbasic_frag:hp,meshlambert_vert:up,meshlambert_frag:dp,meshmatcap_vert:fp,meshmatcap_frag:pp,meshnormal_vert:mp,meshnormal_frag:_p,meshphong_vert:gp,meshphong_frag:vp,meshphysical_vert:xp,meshphysical_frag:Mp,meshtoon_vert:yp,meshtoon_frag:Sp,points_vert:Ep,points_frag:bp,shadow_vert:Tp,shadow_frag:wp,sprite_vert:Ap,sprite_frag:Rp},_t={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},Be={basic:{uniforms:Pe([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:Pe([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:Pe([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:Pe([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:Pe([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:Pe([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:Pe([_t.points,_t.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:Pe([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:Pe([_t.common,_t.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:Pe([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:Pe([_t.sprite,_t.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:Pe([_t.common,_t.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:Pe([_t.lights,_t.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};Be.physical={uniforms:Pe([Be.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};const tr={r:0,b:0,g:0},ri=new vn,Cp=new ne;function Pp(i,t,e,n,s,r,a){const o=new Vt(0);let l=r===!0?0:1,c,h,u=null,d=0,m=null;function _(w){let b=w.isScene===!0?w.background:null;return b&&b.isTexture&&(b=(w.backgroundBlurriness>0?e:t).get(b)),b}function v(w){let b=!1;const S=_(w);S===null?f(o,l):S&&S.isColor&&(f(S,1),b=!0);const N=i.xr.getEnvironmentBlendMode();N==="additive"?n.buffers.color.setClear(0,0,0,1,a):N==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(w,b){const S=_(b);S&&(S.isCubeTexture||S.mapping===Nr)?(h===void 0&&(h=new ze(new Ps(1,1,1),new xn({name:"BackgroundCubeMaterial",uniforms:ns(Be.backgroundCube.uniforms),vertexShader:Be.backgroundCube.vertexShader,fragmentShader:Be.backgroundCube.fragmentShader,side:ke,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(N,P,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ri.copy(b.backgroundRotation),ri.x*=-1,ri.y*=-1,ri.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ri.y*=-1,ri.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Cp.makeRotationFromEuler(ri)),h.material.toneMapped=qt.getTransfer(S.colorSpace)!==ie,(u!==S||d!==S.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=S,d=S.version,m=i.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new ze(new Br(2,2),new xn({name:"BackgroundMaterial",uniforms:ns(Be.background.uniforms),vertexShader:Be.background.vertexShader,fragmentShader:Be.background.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=qt.getTransfer(S.colorSpace)!==ie,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,u=S,d=S.version,m=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function f(w,b){w.getRGB(tr,Hc(i)),n.buffers.color.setClear(tr.r,tr.g,tr.b,b,a)}return{getClearColor:function(){return o},setClearColor:function(w,b=1){o.set(w),l=b,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,f(o,l)},render:v,addToRenderList:p}}function Lp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(x,A,X,H,Z){let Q=!1;const j=u(H,X,A);r!==j&&(r=j,c(r.object)),Q=m(x,H,X,Z),Q&&_(x,H,X,Z),Z!==null&&t.update(Z,i.ELEMENT_ARRAY_BUFFER),(Q||a)&&(a=!1,S(x,A,X,H),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function u(x,A,X){const H=X.wireframe===!0;let Z=n[x.id];Z===void 0&&(Z={},n[x.id]=Z);let Q=Z[A.id];Q===void 0&&(Q={},Z[A.id]=Q);let j=Q[H];return j===void 0&&(j=d(l()),Q[H]=j),j}function d(x){const A=[],X=[],H=[];for(let Z=0;Z<e;Z++)A[Z]=0,X[Z]=0,H[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:X,attributeDivisors:H,object:x,attributes:{},index:null}}function m(x,A,X,H){const Z=r.attributes,Q=A.attributes;let j=0;const et=X.getAttributes();for(const W in et)if(et[W].location>=0){const lt=Z[W];let ht=Q[W];if(ht===void 0&&(W==="instanceMatrix"&&x.instanceMatrix&&(ht=x.instanceMatrix),W==="instanceColor"&&x.instanceColor&&(ht=x.instanceColor)),lt===void 0||lt.attribute!==ht||ht&&lt.data!==ht.data)return!0;j++}return r.attributesNum!==j||r.index!==H}function _(x,A,X,H){const Z={},Q=A.attributes;let j=0;const et=X.getAttributes();for(const W in et)if(et[W].location>=0){let lt=Q[W];lt===void 0&&(W==="instanceMatrix"&&x.instanceMatrix&&(lt=x.instanceMatrix),W==="instanceColor"&&x.instanceColor&&(lt=x.instanceColor));const ht={};ht.attribute=lt,lt&&lt.data&&(ht.data=lt.data),Z[W]=ht,j++}r.attributes=Z,r.attributesNum=j,r.index=H}function v(){const x=r.newAttributes;for(let A=0,X=x.length;A<X;A++)x[A]=0}function p(x){f(x,0)}function f(x,A){const X=r.newAttributes,H=r.enabledAttributes,Z=r.attributeDivisors;X[x]=1,H[x]===0&&(i.enableVertexAttribArray(x),H[x]=1),Z[x]!==A&&(i.vertexAttribDivisor(x,A),Z[x]=A)}function w(){const x=r.newAttributes,A=r.enabledAttributes;for(let X=0,H=A.length;X<H;X++)A[X]!==x[X]&&(i.disableVertexAttribArray(X),A[X]=0)}function b(x,A,X,H,Z,Q,j){j===!0?i.vertexAttribIPointer(x,A,X,Z,Q):i.vertexAttribPointer(x,A,X,H,Z,Q)}function S(x,A,X,H){v();const Z=H.attributes,Q=X.getAttributes(),j=A.defaultAttributeValues;for(const et in Q){const W=Q[et];if(W.location>=0){let $=Z[et];if($===void 0&&(et==="instanceMatrix"&&x.instanceMatrix&&($=x.instanceMatrix),et==="instanceColor"&&x.instanceColor&&($=x.instanceColor)),$!==void 0){const lt=$.normalized,ht=$.itemSize,nt=t.get($);if(nt===void 0)continue;const dt=nt.buffer,I=nt.type,q=nt.bytesPerElement,tt=I===i.INT||I===i.UNSIGNED_INT||$.gpuType===To;if($.isInterleavedBufferAttribute){const K=$.data,ot=K.stride,ft=$.offset;if(K.isInstancedInterleavedBuffer){for(let gt=0;gt<W.locationSize;gt++)f(W.location+gt,K.meshPerAttribute);x.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let gt=0;gt<W.locationSize;gt++)p(W.location+gt);i.bindBuffer(i.ARRAY_BUFFER,dt);for(let gt=0;gt<W.locationSize;gt++)b(W.location+gt,ht/W.locationSize,I,lt,ot*q,(ft+ht/W.locationSize*gt)*q,tt)}else{if($.isInstancedBufferAttribute){for(let K=0;K<W.locationSize;K++)f(W.location+K,$.meshPerAttribute);x.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let K=0;K<W.locationSize;K++)p(W.location+K);i.bindBuffer(i.ARRAY_BUFFER,dt);for(let K=0;K<W.locationSize;K++)b(W.location+K,ht/W.locationSize,I,lt,ht*q,ht/W.locationSize*K*q,tt)}}else if(j!==void 0){const lt=j[et];if(lt!==void 0)switch(lt.length){case 2:i.vertexAttrib2fv(W.location,lt);break;case 3:i.vertexAttrib3fv(W.location,lt);break;case 4:i.vertexAttrib4fv(W.location,lt);break;default:i.vertexAttrib1fv(W.location,lt)}}}}w()}function N(){D();for(const x in n){const A=n[x];for(const X in A){const H=A[X];for(const Z in H)h(H[Z].object),delete H[Z];delete A[X]}delete n[x]}}function P(x){if(n[x.id]===void 0)return;const A=n[x.id];for(const X in A){const H=A[X];for(const Z in H)h(H[Z].object),delete H[Z];delete A[X]}delete n[x.id]}function R(x){for(const A in n){const X=n[A];if(X[x.id]===void 0)continue;const H=X[x.id];for(const Z in H)h(H[Z].object),delete H[Z];delete X[x.id]}}function D(){y(),a=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:y,dispose:N,releaseStatesOfGeometry:P,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:p,disableUnusedAttributes:w}}function Dp(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_];e.update(m,n,1)}function l(c,h,u,d){if(u===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)a(c[_],h[_],d[_]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let _=0;for(let v=0;v<u;v++)_+=h[v]*d[v];e.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Up(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==on&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const D=R===Rs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==In&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Pn&&!D)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),N=_>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:w,maxVaryings:b,maxFragmentUniforms:S,vertexTextures:N,maxSamples:P}}function Ip(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Wn,o=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const m=u.length!==0||d||n!==0||s;return s=d,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,m){const _=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,f=i.get(u);if(!s||_===null||_.length===0||r&&!p)r?h(null):c();else{const w=r?0:n,b=w*4;let S=f.clippingState||null;l.value=S,S=h(_,d,b,m);for(let N=0;N!==b;++N)S[N]=e[N];f.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,m,_){const v=u!==null?u.length:0;let p=null;if(v!==0){if(p=l.value,_!==!0||p===null){const f=m+v*4,w=d.matrixWorldInverse;o.getNormalMatrix(w),(p===null||p.length<f)&&(p=new Float32Array(f));for(let b=0,S=m;b!==v;++b,S+=4)a.copy(u[b]).applyMatrix4(w,o),a.normal.toArray(p,S),p[S+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}function Np(i){let t=new WeakMap;function e(a,o){return o===Ba?a.mapping=Ji:o===za&&(a.mapping=Qi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ba||o===za)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Xu(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Xc extends Vc{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Xi=4,Sl=[.125,.215,.35,.446,.526,.582],hi=20,ha=new Xc,El=new Vt;let ua=null,da=0,fa=0,pa=!1;const li=(1+Math.sqrt(5))/2,Ii=1/li,bl=[new L(-li,Ii,0),new L(li,Ii,0),new L(-Ii,0,li),new L(Ii,0,li),new L(0,li,-Ii),new L(0,li,Ii),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class Tl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ua=this._renderer.getRenderTarget(),da=this._renderer.getActiveCubeFace(),fa=this._renderer.getActiveMipmapLevel(),pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Al(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ua,da,fa),this._renderer.xr.enabled=pa,t.scissorTest=!1,er(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ji||t.mapping===Qi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ua=this._renderer.getRenderTarget(),da=this._renderer.getActiveCubeFace(),fa=this._renderer.getActiveMipmapLevel(),pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:Rs,format:on,colorSpace:is,depthBuffer:!1},s=wl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fp(r)),this._blurMaterial=Op(r,t,e)}return s}_compileMaterial(t){const e=new ze(this._lodPlanes[0],t);this._renderer.compile(e,ha)}_sceneToCubeUV(t,e,n,s){const o=new Ke(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(El),h.toneMapping=jn,h.autoClear=!1;const m=new Or({name:"PMREM.Background",side:ke,depthWrite:!1,depthTest:!1}),_=new ze(new Ps,m);let v=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,v=!0):(m.color.copy(El),v=!0);for(let f=0;f<6;f++){const w=f%3;w===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):w===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const b=this._cubeSize;er(s,w*b,f>2?b:0,b,b),h.setRenderTarget(s),v&&h.render(_,o),h.render(t,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ji||t.mapping===Qi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Al());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new ze(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;er(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ha)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=bl[(s-r-1)%bl.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ze(this._lodPlanes[s],c),d=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*hi-1),v=r/_,p=isFinite(r)?1+Math.floor(h*v):hi;p>hi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${hi}`);const f=[];let w=0;for(let R=0;R<hi;++R){const D=R/v,y=Math.exp(-D*D/2);f.push(y),R===0?w+=y:R<p&&(w+=2*y)}for(let R=0;R<f.length;R++)f[R]=f[R]/w;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:b}=this;d.dTheta.value=_,d.mipInt.value=b-n;const S=this._sizeLods[s],N=3*S*(s>b-Xi?s-b+Xi:0),P=4*(this._cubeSize-S);er(e,N,P,3*S,2*S),l.setRenderTarget(e),l.render(u,ha)}}function Fp(i){const t=[],e=[],n=[];let s=i;const r=i-Xi+1+Sl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Xi?l=Sl[a-i+Xi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,_=6,v=3,p=2,f=1,w=new Float32Array(v*_*m),b=new Float32Array(p*_*m),S=new Float32Array(f*_*m);for(let P=0;P<m;P++){const R=P%3*2/3-1,D=P>2?0:-1,y=[R,D,0,R+2/3,D,0,R+2/3,D+1,0,R,D,0,R+2/3,D+1,0,R,D+1,0];w.set(y,v*_*P),b.set(d,p*_*P);const x=[P,P,P,P,P,P];S.set(x,f*_*P)}const N=new ce;N.setAttribute("position",new he(w,v)),N.setAttribute("uv",new he(b,p)),N.setAttribute("faceIndex",new he(S,f)),t.push(N),s>Xi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function wl(i,t,e){const n=new mi(i,t,e);return n.texture.mapping=Nr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function er(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Op(i,t,e){const n=new Float32Array(hi),s=new L(0,1,0);return new xn({name:"SphericalGaussianBlur",defines:{n:hi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:No(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Al(){return new xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:No(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Rl(){return new xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:No(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function No(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Bp(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ba||l===za,h=l===Ji||l===Qi;if(c||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Tl(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const m=o.image;return c&&m&&m.height>0||h&&m&&s(m)?(e===null&&(e=new Tl(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function zp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&gs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function kp(i,t,e,n){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);for(const _ in d.morphAttributes){const v=d.morphAttributes[_];for(let p=0,f=v.length;p<f;p++)t.remove(v[p])}d.removeEventListener("dispose",a),delete s[d.id];const m=r.get(d);m&&(t.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const _ in d)t.update(d[_],i.ARRAY_BUFFER);const m=u.morphAttributes;for(const _ in m){const v=m[_];for(let p=0,f=v.length;p<f;p++)t.update(v[p],i.ARRAY_BUFFER)}}function c(u){const d=[],m=u.index,_=u.attributes.position;let v=0;if(m!==null){const w=m.array;v=m.version;for(let b=0,S=w.length;b<S;b+=3){const N=w[b+0],P=w[b+1],R=w[b+2];d.push(N,P,P,R,R,N)}}else if(_!==void 0){const w=_.array;v=_.version;for(let b=0,S=w.length/3-1;b<S;b+=3){const N=b+0,P=b+1,R=b+2;d.push(N,P,P,R,R,N)}}else return;const p=new(Nc(d)?kc:zc)(d,1);p.version=v;const f=r.get(u);f&&t.remove(f),r.set(u,p)}function h(u){const d=r.get(u);if(d){const m=u.index;m!==null&&d.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Hp(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,m){i.drawElements(n,m,r,d*a),e.update(m,n,1)}function c(d,m,_){_!==0&&(i.drawElementsInstanced(n,m,r,d*a,_),e.update(m,n,_))}function h(d,m,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,d,0,_);let p=0;for(let f=0;f<_;f++)p+=m[f];e.update(p,n,1)}function u(d,m,_,v){if(_===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<d.length;f++)c(d[f]/a,m[f],v[f]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,d,0,v,0,_);let f=0;for(let w=0;w<_;w++)f+=m[w]*v[w];e.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Vp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Gp(i,t,e){const n=new WeakMap,s=new re;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let x=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",x)};var m=x;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],w=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let S=0;_===!0&&(S=1),v===!0&&(S=2),p===!0&&(S=3);let N=o.attributes.position.count*S,P=1;N>t.maxTextureSize&&(P=Math.ceil(N/t.maxTextureSize),N=t.maxTextureSize);const R=new Float32Array(N*P*4*u),D=new Oc(R,N,P,u);D.type=Pn,D.needsUpdate=!0;const y=S*4;for(let A=0;A<u;A++){const X=f[A],H=w[A],Z=b[A],Q=N*P*4*A;for(let j=0;j<X.count;j++){const et=j*y;_===!0&&(s.fromBufferAttribute(X,j),R[Q+et+0]=s.x,R[Q+et+1]=s.y,R[Q+et+2]=s.z,R[Q+et+3]=0),v===!0&&(s.fromBufferAttribute(H,j),R[Q+et+4]=s.x,R[Q+et+5]=s.y,R[Q+et+6]=s.z,R[Q+et+7]=0),p===!0&&(s.fromBufferAttribute(Z,j),R[Q+et+8]=s.x,R[Q+et+9]=s.y,R[Q+et+10]=s.z,R[Q+et+11]=Z.itemSize===4?s.w:1)}}d={count:u,texture:D,size:new Nt(N,P)},n.set(o,d),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const v=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Wp(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class Yc extends Ie{constructor(t,e,n,s,r,a,o,l,c,h=ji){if(h!==ji&&h!==es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ji&&(n=pi),n===void 0&&h===es&&(n=ts),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:ln,this.minFilter=l!==void 0?l:ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const qc=new Ie,Cl=new Yc(1,1),jc=new Oc,$c=new Pu,Kc=new Gc,Pl=[],Ll=[],Dl=new Float32Array(16),Ul=new Float32Array(9),Il=new Float32Array(4);function ss(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Pl[s];if(r===void 0&&(r=new Float32Array(s),Pl[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ge(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ve(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function zr(i,t){let e=Ll[t];e===void 0&&(e=new Int32Array(t),Ll[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Xp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Yp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2fv(this.addr,t),ve(e,t)}}function qp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ge(e,t))return;i.uniform3fv(this.addr,t),ve(e,t)}}function jp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4fv(this.addr,t),ve(e,t)}}function $p(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ve(e,t)}else{if(ge(e,n))return;Il.set(n),i.uniformMatrix2fv(this.addr,!1,Il),ve(e,n)}}function Kp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ve(e,t)}else{if(ge(e,n))return;Ul.set(n),i.uniformMatrix3fv(this.addr,!1,Ul),ve(e,n)}}function Zp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ve(e,t)}else{if(ge(e,n))return;Dl.set(n),i.uniformMatrix4fv(this.addr,!1,Dl),ve(e,n)}}function Jp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Qp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2iv(this.addr,t),ve(e,t)}}function tm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;i.uniform3iv(this.addr,t),ve(e,t)}}function em(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4iv(this.addr,t),ve(e,t)}}function nm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function im(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2uiv(this.addr,t),ve(e,t)}}function sm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;i.uniform3uiv(this.addr,t),ve(e,t)}}function rm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4uiv(this.addr,t),ve(e,t)}}function am(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Cl.compareFunction=Uc,r=Cl):r=qc,e.setTexture2D(t||r,s)}function om(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||$c,s)}function lm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Kc,s)}function cm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||jc,s)}function hm(i){switch(i){case 5126:return Xp;case 35664:return Yp;case 35665:return qp;case 35666:return jp;case 35674:return $p;case 35675:return Kp;case 35676:return Zp;case 5124:case 35670:return Jp;case 35667:case 35671:return Qp;case 35668:case 35672:return tm;case 35669:case 35673:return em;case 5125:return nm;case 36294:return im;case 36295:return sm;case 36296:return rm;case 35678:case 36198:case 36298:case 36306:case 35682:return am;case 35679:case 36299:case 36307:return om;case 35680:case 36300:case 36308:case 36293:return lm;case 36289:case 36303:case 36311:case 36292:return cm}}function um(i,t){i.uniform1fv(this.addr,t)}function dm(i,t){const e=ss(t,this.size,2);i.uniform2fv(this.addr,e)}function fm(i,t){const e=ss(t,this.size,3);i.uniform3fv(this.addr,e)}function pm(i,t){const e=ss(t,this.size,4);i.uniform4fv(this.addr,e)}function mm(i,t){const e=ss(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function _m(i,t){const e=ss(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function gm(i,t){const e=ss(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function vm(i,t){i.uniform1iv(this.addr,t)}function xm(i,t){i.uniform2iv(this.addr,t)}function Mm(i,t){i.uniform3iv(this.addr,t)}function ym(i,t){i.uniform4iv(this.addr,t)}function Sm(i,t){i.uniform1uiv(this.addr,t)}function Em(i,t){i.uniform2uiv(this.addr,t)}function bm(i,t){i.uniform3uiv(this.addr,t)}function Tm(i,t){i.uniform4uiv(this.addr,t)}function wm(i,t,e){const n=this.cache,s=t.length,r=zr(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||qc,r[a])}function Am(i,t,e){const n=this.cache,s=t.length,r=zr(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||$c,r[a])}function Rm(i,t,e){const n=this.cache,s=t.length,r=zr(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Kc,r[a])}function Cm(i,t,e){const n=this.cache,s=t.length,r=zr(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||jc,r[a])}function Pm(i){switch(i){case 5126:return um;case 35664:return dm;case 35665:return fm;case 35666:return pm;case 35674:return mm;case 35675:return _m;case 35676:return gm;case 5124:case 35670:return vm;case 35667:case 35671:return xm;case 35668:case 35672:return Mm;case 35669:case 35673:return ym;case 5125:return Sm;case 36294:return Em;case 36295:return bm;case 36296:return Tm;case 35678:case 36198:case 36298:case 36306:case 35682:return wm;case 35679:case 36299:case 36307:return Am;case 35680:case 36300:case 36308:case 36293:return Rm;case 36289:case 36303:case 36311:case 36292:return Cm}}class Lm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=hm(e.type)}}class Dm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Pm(e.type)}}class Um{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const ma=/(\w+)(\])?(\[|\.)?/g;function Nl(i,t){i.seq.push(t),i.map[t.id]=t}function Im(i,t,e){const n=i.name,s=n.length;for(ma.lastIndex=0;;){const r=ma.exec(n),a=ma.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Nl(e,c===void 0?new Lm(o,i,t):new Dm(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Um(o),Nl(e,u)),e=u}}}class br{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Im(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Fl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Nm=37297;let Fm=0;function Om(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Ol=new Wt;function Bm(i){qt._getMatrix(Ol,qt.workingColorSpace,i);const t=`mat3( ${Ol.elements.map(e=>e.toFixed(4))} )`;switch(qt.getTransfer(i)){case Fr:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Bl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Om(i.getShaderSource(t),a)}else return s}function zm(i,t){const e=Bm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function km(i,t){let e;switch(t){case Vh:e="Linear";break;case Gh:e="Reinhard";break;case Wh:e="Cineon";break;case Xh:e="ACESFilmic";break;case qh:e="AgX";break;case jh:e="Neutral";break;case Yh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const nr=new L;function Hm(){qt.getLuminanceCoefficients(nr);const i=nr.x.toFixed(4),t=nr.y.toFixed(4),e=nr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vs).join(`
`)}function Gm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Wm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function vs(i){return i!==""}function zl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function kl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Xm=/^[ \t]*#include +<([\w\d./]+)>/gm;function _o(i){return i.replace(Xm,qm)}const Ym=new Map;function qm(i,t){let e=Yt[t];if(e===void 0){const n=Ym.get(t);if(n!==void 0)e=Yt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return _o(e)}const jm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hl(i){return i.replace(jm,$m)}function $m(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Vl(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Km(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Mc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===yh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Rn&&(t="SHADOWMAP_TYPE_VSM"),t}function Zm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ji:case Qi:t="ENVMAP_TYPE_CUBE";break;case Nr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Jm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Qi:t="ENVMAP_MODE_REFRACTION";break}return t}function Qm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case bo:t="ENVMAP_BLENDING_MULTIPLY";break;case kh:t="ENVMAP_BLENDING_MIX";break;case Hh:t="ENVMAP_BLENDING_ADD";break}return t}function t_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function e_(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Km(e),c=Zm(e),h=Jm(e),u=Qm(e),d=t_(e),m=Vm(e),_=Gm(r),v=s.createProgram();let p,f,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(vs).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(vs).join(`
`),f.length>0&&(f+=`
`)):(p=[Vl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vs).join(`
`),f=[Vl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==jn?"#define TONE_MAPPING":"",e.toneMapping!==jn?Yt.tonemapping_pars_fragment:"",e.toneMapping!==jn?km("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,zm("linearToOutputTexel",e.outputColorSpace),Hm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(vs).join(`
`)),a=_o(a),a=zl(a,e),a=kl(a,e),o=_o(o),o=zl(o,e),o=kl(o,e),a=Hl(a),o=Hl(o),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",e.glslVersion===tl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===tl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const b=w+p+a,S=w+f+o,N=Fl(s,s.VERTEX_SHADER,b),P=Fl(s,s.FRAGMENT_SHADER,S);s.attachShader(v,N),s.attachShader(v,P),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(A){if(i.debug.checkShaderErrors){const X=s.getProgramInfoLog(v).trim(),H=s.getShaderInfoLog(N).trim(),Z=s.getShaderInfoLog(P).trim();let Q=!0,j=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,N,P);else{const et=Bl(s,N,"vertex"),W=Bl(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+X+`
`+et+`
`+W)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(H===""||Z==="")&&(j=!1);j&&(A.diagnostics={runnable:Q,programLog:X,vertexShader:{log:H,prefix:p},fragmentShader:{log:Z,prefix:f}})}s.deleteShader(N),s.deleteShader(P),D=new br(s,v),y=Wm(s,v)}let D;this.getUniforms=function(){return D===void 0&&R(this),D};let y;this.getAttributes=function(){return y===void 0&&R(this),y};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(v,Nm)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Fm++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=N,this.fragmentShader=P,this}let n_=0;class i_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new s_(t),e.set(t,n)),n}}class s_{constructor(t){this.id=n_++,this.code=t,this.usedTimes=0}}function r_(i,t,e,n,s,r,a){const o=new Do,l=new i_,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let m=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return c.add(y),y===0?"uv":`uv${y}`}function p(y,x,A,X,H){const Z=X.fog,Q=H.geometry,j=y.isMeshStandardMaterial?X.environment:null,et=(y.isMeshStandardMaterial?e:t).get(y.envMap||j),W=et&&et.mapping===Nr?et.image.height:null,$=_[y.type];y.precision!==null&&(m=s.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const lt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,ht=lt!==void 0?lt.length:0;let nt=0;Q.morphAttributes.position!==void 0&&(nt=1),Q.morphAttributes.normal!==void 0&&(nt=2),Q.morphAttributes.color!==void 0&&(nt=3);let dt,I,q,tt;if($){const $t=Be[$];dt=$t.vertexShader,I=$t.fragmentShader}else dt=y.vertexShader,I=y.fragmentShader,l.update(y),q=l.getVertexShaderID(y),tt=l.getFragmentShaderID(y);const K=i.getRenderTarget(),ot=i.state.buffers.depth.getReversed(),ft=H.isInstancedMesh===!0,gt=H.isBatchedMesh===!0,Rt=!!y.map,pt=!!y.matcap,At=!!et,C=!!y.aoMap,Kt=!!y.lightMap,Ft=!!y.bumpMap,Mt=!!y.normalMap,xt=!!y.displacementMap,Bt=!!y.emissiveMap,St=!!y.metalnessMap,E=!!y.roughnessMap,g=y.anisotropy>0,z=y.clearcoat>0,J=y.dispersion>0,st=y.iridescence>0,T=y.sheen>0,k=y.transmission>0,B=g&&!!y.anisotropyMap,at=z&&!!y.clearcoatMap,ct=z&&!!y.clearcoatNormalMap,rt=z&&!!y.clearcoatRoughnessMap,mt=st&&!!y.iridescenceMap,Ut=st&&!!y.iridescenceThicknessMap,It=T&&!!y.sheenColorMap,bt=T&&!!y.sheenRoughnessMap,Ht=!!y.specularMap,Ot=!!y.specularColorMap,te=!!y.specularIntensityMap,U=k&&!!y.transmissionMap,vt=k&&!!y.thicknessMap,Y=!!y.gradientMap,it=!!y.alphaMap,yt=y.alphaTest>0,Et=!!y.alphaHash,kt=!!y.extensions;let Zt=jn;y.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Zt=i.toneMapping);const xe={shaderID:$,shaderType:y.type,shaderName:y.name,vertexShader:dt,fragmentShader:I,defines:y.defines,customVertexShaderID:q,customFragmentShaderID:tt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:gt,batchingColor:gt&&H._colorsTexture!==null,instancing:ft,instancingColor:ft&&H.instanceColor!==null,instancingMorph:ft&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:K===null?i.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:is,alphaToCoverage:!!y.alphaToCoverage,map:Rt,matcap:pt,envMap:At,envMapMode:At&&et.mapping,envMapCubeUVHeight:W,aoMap:C,lightMap:Kt,bumpMap:Ft,normalMap:Mt,displacementMap:d&&xt,emissiveMap:Bt,normalMapObjectSpace:Mt&&y.normalMapType===Jh,normalMapTangentSpace:Mt&&y.normalMapType===Dc,metalnessMap:St,roughnessMap:E,anisotropy:g,anisotropyMap:B,clearcoat:z,clearcoatMap:at,clearcoatNormalMap:ct,clearcoatRoughnessMap:rt,dispersion:J,iridescence:st,iridescenceMap:mt,iridescenceThicknessMap:Ut,sheen:T,sheenColorMap:It,sheenRoughnessMap:bt,specularMap:Ht,specularColorMap:Ot,specularIntensityMap:te,transmission:k,transmissionMap:U,thicknessMap:vt,gradientMap:Y,opaque:y.transparent===!1&&y.blending===qi&&y.alphaToCoverage===!1,alphaMap:it,alphaTest:yt,alphaHash:Et,combine:y.combine,mapUv:Rt&&v(y.map.channel),aoMapUv:C&&v(y.aoMap.channel),lightMapUv:Kt&&v(y.lightMap.channel),bumpMapUv:Ft&&v(y.bumpMap.channel),normalMapUv:Mt&&v(y.normalMap.channel),displacementMapUv:xt&&v(y.displacementMap.channel),emissiveMapUv:Bt&&v(y.emissiveMap.channel),metalnessMapUv:St&&v(y.metalnessMap.channel),roughnessMapUv:E&&v(y.roughnessMap.channel),anisotropyMapUv:B&&v(y.anisotropyMap.channel),clearcoatMapUv:at&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:ct&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ut&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:It&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:bt&&v(y.sheenRoughnessMap.channel),specularMapUv:Ht&&v(y.specularMap.channel),specularColorMapUv:Ot&&v(y.specularColorMap.channel),specularIntensityMapUv:te&&v(y.specularIntensityMap.channel),transmissionMapUv:U&&v(y.transmissionMap.channel),thicknessMapUv:vt&&v(y.thicknessMap.channel),alphaMapUv:it&&v(y.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Mt||g),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!Q.attributes.uv&&(Rt||it),fog:!!Z,useFog:y.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:ot,skinning:H.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:ht,morphTextureStride:nt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:Zt,decodeVideoTexture:Rt&&y.map.isVideoTexture===!0&&qt.getTransfer(y.map.colorSpace)===ie,decodeVideoTextureEmissive:Bt&&y.emissiveMap.isVideoTexture===!0&&qt.getTransfer(y.emissiveMap.colorSpace)===ie,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Xe,flipSided:y.side===ke,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:kt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&y.extensions.multiDraw===!0||gt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return xe.vertexUv1s=c.has(1),xe.vertexUv2s=c.has(2),xe.vertexUv3s=c.has(3),c.clear(),xe}function f(y){const x=[];if(y.shaderID?x.push(y.shaderID):(x.push(y.customVertexShaderID),x.push(y.customFragmentShaderID)),y.defines!==void 0)for(const A in y.defines)x.push(A),x.push(y.defines[A]);return y.isRawShaderMaterial===!1&&(w(x,y),b(x,y),x.push(i.outputColorSpace)),x.push(y.customProgramCacheKey),x.join()}function w(y,x){y.push(x.precision),y.push(x.outputColorSpace),y.push(x.envMapMode),y.push(x.envMapCubeUVHeight),y.push(x.mapUv),y.push(x.alphaMapUv),y.push(x.lightMapUv),y.push(x.aoMapUv),y.push(x.bumpMapUv),y.push(x.normalMapUv),y.push(x.displacementMapUv),y.push(x.emissiveMapUv),y.push(x.metalnessMapUv),y.push(x.roughnessMapUv),y.push(x.anisotropyMapUv),y.push(x.clearcoatMapUv),y.push(x.clearcoatNormalMapUv),y.push(x.clearcoatRoughnessMapUv),y.push(x.iridescenceMapUv),y.push(x.iridescenceThicknessMapUv),y.push(x.sheenColorMapUv),y.push(x.sheenRoughnessMapUv),y.push(x.specularMapUv),y.push(x.specularColorMapUv),y.push(x.specularIntensityMapUv),y.push(x.transmissionMapUv),y.push(x.thicknessMapUv),y.push(x.combine),y.push(x.fogExp2),y.push(x.sizeAttenuation),y.push(x.morphTargetsCount),y.push(x.morphAttributeCount),y.push(x.numDirLights),y.push(x.numPointLights),y.push(x.numSpotLights),y.push(x.numSpotLightMaps),y.push(x.numHemiLights),y.push(x.numRectAreaLights),y.push(x.numDirLightShadows),y.push(x.numPointLightShadows),y.push(x.numSpotLightShadows),y.push(x.numSpotLightShadowsWithMaps),y.push(x.numLightProbes),y.push(x.shadowMapType),y.push(x.toneMapping),y.push(x.numClippingPlanes),y.push(x.numClipIntersection),y.push(x.depthPacking)}function b(y,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),y.push(o.mask)}function S(y){const x=_[y.type];let A;if(x){const X=Be[x];A=Uo.clone(X.uniforms)}else A=y.uniforms;return A}function N(y,x){let A;for(let X=0,H=h.length;X<H;X++){const Z=h[X];if(Z.cacheKey===x){A=Z,++A.usedTimes;break}}return A===void 0&&(A=new e_(i,x,y,r),h.push(A)),A}function P(y){if(--y.usedTimes===0){const x=h.indexOf(y);h[x]=h[h.length-1],h.pop(),y.destroy()}}function R(y){l.remove(y)}function D(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:S,acquireProgram:N,releaseProgram:P,releaseShaderCache:R,programs:h,dispose:D}}function a_(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function o_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Gl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Wl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,m,_,v,p){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:m,groupOrder:_,renderOrder:u.renderOrder,z:v,group:p},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=m,f.groupOrder=_,f.renderOrder=u.renderOrder,f.z=v,f.group=p),t++,f}function o(u,d,m,_,v,p){const f=a(u,d,m,_,v,p);m.transmission>0?n.push(f):m.transparent===!0?s.push(f):e.push(f)}function l(u,d,m,_,v,p){const f=a(u,d,m,_,v,p);m.transmission>0?n.unshift(f):m.transparent===!0?s.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||o_),n.length>1&&n.sort(d||Gl),s.length>1&&s.sort(d||Gl)}function h(){for(let u=t,d=i.length;u<d;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function l_(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Wl,i.set(n,[a])):s>=r.length?(a=new Wl,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function c_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Vt};break;case"SpotLight":e={position:new L,direction:new L,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function h_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let u_=0;function d_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function f_(i){const t=new c_,e=h_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const s=new L,r=new ne,a=new ne;function o(c){let h=0,u=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let m=0,_=0,v=0,p=0,f=0,w=0,b=0,S=0,N=0,P=0,R=0;c.sort(d_);for(let y=0,x=c.length;y<x;y++){const A=c[y],X=A.color,H=A.intensity,Z=A.distance,Q=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=X.r*H,u+=X.g*H,d+=X.b*H;else if(A.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(A.sh.coefficients[j],H);R++}else if(A.isDirectionalLight){const j=t.get(A);if(j.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const et=A.shadow,W=e.get(A);W.shadowIntensity=et.intensity,W.shadowBias=et.bias,W.shadowNormalBias=et.normalBias,W.shadowRadius=et.radius,W.shadowMapSize=et.mapSize,n.directionalShadow[m]=W,n.directionalShadowMap[m]=Q,n.directionalShadowMatrix[m]=A.shadow.matrix,w++}n.directional[m]=j,m++}else if(A.isSpotLight){const j=t.get(A);j.position.setFromMatrixPosition(A.matrixWorld),j.color.copy(X).multiplyScalar(H),j.distance=Z,j.coneCos=Math.cos(A.angle),j.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),j.decay=A.decay,n.spot[v]=j;const et=A.shadow;if(A.map&&(n.spotLightMap[N]=A.map,N++,et.updateMatrices(A),A.castShadow&&P++),n.spotLightMatrix[v]=et.matrix,A.castShadow){const W=e.get(A);W.shadowIntensity=et.intensity,W.shadowBias=et.bias,W.shadowNormalBias=et.normalBias,W.shadowRadius=et.radius,W.shadowMapSize=et.mapSize,n.spotShadow[v]=W,n.spotShadowMap[v]=Q,S++}v++}else if(A.isRectAreaLight){const j=t.get(A);j.color.copy(X).multiplyScalar(H),j.halfWidth.set(A.width*.5,0,0),j.halfHeight.set(0,A.height*.5,0),n.rectArea[p]=j,p++}else if(A.isPointLight){const j=t.get(A);if(j.color.copy(A.color).multiplyScalar(A.intensity),j.distance=A.distance,j.decay=A.decay,A.castShadow){const et=A.shadow,W=e.get(A);W.shadowIntensity=et.intensity,W.shadowBias=et.bias,W.shadowNormalBias=et.normalBias,W.shadowRadius=et.radius,W.shadowMapSize=et.mapSize,W.shadowCameraNear=et.camera.near,W.shadowCameraFar=et.camera.far,n.pointShadow[_]=W,n.pointShadowMap[_]=Q,n.pointShadowMatrix[_]=A.shadow.matrix,b++}n.point[_]=j,_++}else if(A.isHemisphereLight){const j=t.get(A);j.skyColor.copy(A.color).multiplyScalar(H),j.groundColor.copy(A.groundColor).multiplyScalar(H),n.hemi[f]=j,f++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_t.LTC_FLOAT_1,n.rectAreaLTC2=_t.LTC_FLOAT_2):(n.rectAreaLTC1=_t.LTC_HALF_1,n.rectAreaLTC2=_t.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const D=n.hash;(D.directionalLength!==m||D.pointLength!==_||D.spotLength!==v||D.rectAreaLength!==p||D.hemiLength!==f||D.numDirectionalShadows!==w||D.numPointShadows!==b||D.numSpotShadows!==S||D.numSpotMaps!==N||D.numLightProbes!==R)&&(n.directional.length=m,n.spot.length=v,n.rectArea.length=p,n.point.length=_,n.hemi.length=f,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=S+N-P,n.spotLightMap.length=N,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=R,D.directionalLength=m,D.pointLength=_,D.spotLength=v,D.rectAreaLength=p,D.hemiLength=f,D.numDirectionalShadows=w,D.numPointShadows=b,D.numSpotShadows=S,D.numSpotMaps=N,D.numLightProbes=R,n.version=u_++)}function l(c,h){let u=0,d=0,m=0,_=0,v=0;const p=h.matrixWorldInverse;for(let f=0,w=c.length;f<w;f++){const b=c[f];if(b.isDirectionalLight){const S=n.directional[u];S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),u++}else if(b.isSpotLight){const S=n.spot[m];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),m++}else if(b.isRectAreaLight){const S=n.rectArea[_];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(p),a.identity(),r.copy(b.matrixWorld),r.premultiply(p),a.extractRotation(r),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(b.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(p),d++}else if(b.isHemisphereLight){const S=n.hemi[v];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(p),v++}}}return{setup:o,setupView:l,state:n}}function Xl(i){const t=new f_(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function p_(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Xl(i),t.set(s,[o])):r>=a.length?(o=new Xl(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class m_ extends Qn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Kh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class __ extends Qn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const g_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,v_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function x_(i,t,e){let n=new Io;const s=new Nt,r=new Nt,a=new re,o=new m_({depthPacking:Zh}),l=new __,c={},h=e.maxTextureSize,u={[Zn]:ke,[ke]:Zn,[Xe]:Xe},d=new xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:g_,fragmentShader:v_}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new ce;_.setAttribute("position",new he(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ze(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mc;let f=this.type;this.render=function(P,R,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||P.length===0)return;const y=i.getRenderTarget(),x=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),X=i.state;X.setBlending(qn),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const H=f!==Rn&&this.type===Rn,Z=f===Rn&&this.type!==Rn;for(let Q=0,j=P.length;Q<j;Q++){const et=P[Q],W=et.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const $=W.getFrameExtents();if(s.multiply($),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/$.x),s.x=r.x*$.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/$.y),s.y=r.y*$.y,W.mapSize.y=r.y)),W.map===null||H===!0||Z===!0){const ht=this.type!==Rn?{minFilter:ln,magFilter:ln}:{};W.map!==null&&W.map.dispose(),W.map=new mi(s.x,s.y,ht),W.map.texture.name=et.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const lt=W.getViewportCount();for(let ht=0;ht<lt;ht++){const nt=W.getViewport(ht);a.set(r.x*nt.x,r.y*nt.y,r.x*nt.z,r.y*nt.w),X.viewport(a),W.updateMatrices(et,ht),n=W.getFrustum(),S(R,D,W.camera,et,this.type)}W.isPointLightShadow!==!0&&this.type===Rn&&w(W,D),W.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(y,x,A)};function w(P,R){const D=t.update(v);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,m.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new mi(s.x,s.y)),d.uniforms.shadow_pass.value=P.map.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(R,null,D,d,v,null),m.uniforms.shadow_pass.value=P.mapPass.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(R,null,D,m,v,null)}function b(P,R,D,y){let x=null;const A=D.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(A!==void 0)x=A;else if(x=D.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const X=x.uuid,H=R.uuid;let Z=c[X];Z===void 0&&(Z={},c[X]=Z);let Q=Z[H];Q===void 0&&(Q=x.clone(),Z[H]=Q,R.addEventListener("dispose",N)),x=Q}if(x.visible=R.visible,x.wireframe=R.wireframe,y===Rn?x.side=R.shadowSide!==null?R.shadowSide:R.side:x.side=R.shadowSide!==null?R.shadowSide:u[R.side],x.alphaMap=R.alphaMap,x.alphaTest=R.alphaTest,x.map=R.map,x.clipShadows=R.clipShadows,x.clippingPlanes=R.clippingPlanes,x.clipIntersection=R.clipIntersection,x.displacementMap=R.displacementMap,x.displacementScale=R.displacementScale,x.displacementBias=R.displacementBias,x.wireframeLinewidth=R.wireframeLinewidth,x.linewidth=R.linewidth,D.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const X=i.properties.get(x);X.light=D}return x}function S(P,R,D,y,x){if(P.visible===!1)return;if(P.layers.test(R.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&x===Rn)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,P.matrixWorld);const H=t.update(P),Z=P.material;if(Array.isArray(Z)){const Q=H.groups;for(let j=0,et=Q.length;j<et;j++){const W=Q[j],$=Z[W.materialIndex];if($&&$.visible){const lt=b(P,$,y,x);P.onBeforeShadow(i,P,R,D,H,lt,W),i.renderBufferDirect(D,null,H,lt,P,W),P.onAfterShadow(i,P,R,D,H,lt,W)}}}else if(Z.visible){const Q=b(P,Z,y,x);P.onBeforeShadow(i,P,R,D,H,Q,null),i.renderBufferDirect(D,null,H,Q,P,null),P.onAfterShadow(i,P,R,D,H,Q,null)}}const X=P.children;for(let H=0,Z=X.length;H<Z;H++)S(X[H],R,D,y,x)}function N(P){P.target.removeEventListener("dispose",N);for(const D in c){const y=c[D],x=P.target.uuid;x in y&&(y[x].dispose(),delete y[x])}}}const M_={[La]:Da,[Ua]:Fa,[Ia]:Oa,[Zi]:Na,[Da]:La,[Fa]:Ua,[Oa]:Ia,[Na]:Zi};function y_(i,t){function e(){let U=!1;const vt=new re;let Y=null;const it=new re(0,0,0,0);return{setMask:function(yt){Y!==yt&&!U&&(i.colorMask(yt,yt,yt,yt),Y=yt)},setLocked:function(yt){U=yt},setClear:function(yt,Et,kt,Zt,xe){xe===!0&&(yt*=Zt,Et*=Zt,kt*=Zt),vt.set(yt,Et,kt,Zt),it.equals(vt)===!1&&(i.clearColor(yt,Et,kt,Zt),it.copy(vt))},reset:function(){U=!1,Y=null,it.set(-1,0,0,0)}}}function n(){let U=!1,vt=!1,Y=null,it=null,yt=null;return{setReversed:function(Et){if(vt!==Et){const kt=t.get("EXT_clip_control");vt?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT);const Zt=yt;yt=null,this.setClear(Zt)}vt=Et},getReversed:function(){return vt},setTest:function(Et){Et?K(i.DEPTH_TEST):ot(i.DEPTH_TEST)},setMask:function(Et){Y!==Et&&!U&&(i.depthMask(Et),Y=Et)},setFunc:function(Et){if(vt&&(Et=M_[Et]),it!==Et){switch(Et){case La:i.depthFunc(i.NEVER);break;case Da:i.depthFunc(i.ALWAYS);break;case Ua:i.depthFunc(i.LESS);break;case Zi:i.depthFunc(i.LEQUAL);break;case Ia:i.depthFunc(i.EQUAL);break;case Na:i.depthFunc(i.GEQUAL);break;case Fa:i.depthFunc(i.GREATER);break;case Oa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}it=Et}},setLocked:function(Et){U=Et},setClear:function(Et){yt!==Et&&(vt&&(Et=1-Et),i.clearDepth(Et),yt=Et)},reset:function(){U=!1,Y=null,it=null,yt=null,vt=!1}}}function s(){let U=!1,vt=null,Y=null,it=null,yt=null,Et=null,kt=null,Zt=null,xe=null;return{setTest:function($t){U||($t?K(i.STENCIL_TEST):ot(i.STENCIL_TEST))},setMask:function($t){vt!==$t&&!U&&(i.stencilMask($t),vt=$t)},setFunc:function($t,Re,yn){(Y!==$t||it!==Re||yt!==yn)&&(i.stencilFunc($t,Re,yn),Y=$t,it=Re,yt=yn)},setOp:function($t,Re,yn){(Et!==$t||kt!==Re||Zt!==yn)&&(i.stencilOp($t,Re,yn),Et=$t,kt=Re,Zt=yn)},setLocked:function($t){U=$t},setClear:function($t){xe!==$t&&(i.clearStencil($t),xe=$t)},reset:function(){U=!1,vt=null,Y=null,it=null,yt=null,Et=null,kt=null,Zt=null,xe=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,m=[],_=null,v=!1,p=null,f=null,w=null,b=null,S=null,N=null,P=null,R=new Vt(0,0,0),D=0,y=!1,x=null,A=null,X=null,H=null,Z=null;const Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,et=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(W)[1]),j=et>=1):W.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),j=et>=2);let $=null,lt={};const ht=i.getParameter(i.SCISSOR_BOX),nt=i.getParameter(i.VIEWPORT),dt=new re().fromArray(ht),I=new re().fromArray(nt);function q(U,vt,Y,it){const yt=new Uint8Array(4),Et=i.createTexture();i.bindTexture(U,Et),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let kt=0;kt<Y;kt++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(vt,0,i.RGBA,1,1,it,0,i.RGBA,i.UNSIGNED_BYTE,yt):i.texImage2D(vt+kt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,yt);return Et}const tt={};tt[i.TEXTURE_2D]=q(i.TEXTURE_2D,i.TEXTURE_2D,1),tt[i.TEXTURE_CUBE_MAP]=q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[i.TEXTURE_2D_ARRAY]=q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),tt[i.TEXTURE_3D]=q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),K(i.DEPTH_TEST),a.setFunc(Zi),Ft(!1),Mt($o),K(i.CULL_FACE),C(qn);function K(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function ot(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function ft(U,vt){return u[U]!==vt?(i.bindFramebuffer(U,vt),u[U]=vt,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=vt),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=vt),!0):!1}function gt(U,vt){let Y=m,it=!1;if(U){Y=d.get(vt),Y===void 0&&(Y=[],d.set(vt,Y));const yt=U.textures;if(Y.length!==yt.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let Et=0,kt=yt.length;Et<kt;Et++)Y[Et]=i.COLOR_ATTACHMENT0+Et;Y.length=yt.length,it=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,it=!0);it&&i.drawBuffers(Y)}function Rt(U){return _!==U?(i.useProgram(U),_=U,!0):!1}const pt={[ci]:i.FUNC_ADD,[Eh]:i.FUNC_SUBTRACT,[bh]:i.FUNC_REVERSE_SUBTRACT};pt[Th]=i.MIN,pt[wh]=i.MAX;const At={[Ah]:i.ZERO,[Rh]:i.ONE,[Ch]:i.SRC_COLOR,[Ca]:i.SRC_ALPHA,[Nh]:i.SRC_ALPHA_SATURATE,[Uh]:i.DST_COLOR,[Lh]:i.DST_ALPHA,[Ph]:i.ONE_MINUS_SRC_COLOR,[Pa]:i.ONE_MINUS_SRC_ALPHA,[Ih]:i.ONE_MINUS_DST_COLOR,[Dh]:i.ONE_MINUS_DST_ALPHA,[Fh]:i.CONSTANT_COLOR,[Oh]:i.ONE_MINUS_CONSTANT_COLOR,[Bh]:i.CONSTANT_ALPHA,[zh]:i.ONE_MINUS_CONSTANT_ALPHA};function C(U,vt,Y,it,yt,Et,kt,Zt,xe,$t){if(U===qn){v===!0&&(ot(i.BLEND),v=!1);return}if(v===!1&&(K(i.BLEND),v=!0),U!==Sh){if(U!==p||$t!==y){if((f!==ci||S!==ci)&&(i.blendEquation(i.FUNC_ADD),f=ci,S=ci),$t)switch(U){case qi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ko:i.blendFunc(i.ONE,i.ONE);break;case Zo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Jo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case qi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ko:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Zo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Jo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}w=null,b=null,N=null,P=null,R.set(0,0,0),D=0,p=U,y=$t}return}yt=yt||vt,Et=Et||Y,kt=kt||it,(vt!==f||yt!==S)&&(i.blendEquationSeparate(pt[vt],pt[yt]),f=vt,S=yt),(Y!==w||it!==b||Et!==N||kt!==P)&&(i.blendFuncSeparate(At[Y],At[it],At[Et],At[kt]),w=Y,b=it,N=Et,P=kt),(Zt.equals(R)===!1||xe!==D)&&(i.blendColor(Zt.r,Zt.g,Zt.b,xe),R.copy(Zt),D=xe),p=U,y=!1}function Kt(U,vt){U.side===Xe?ot(i.CULL_FACE):K(i.CULL_FACE);let Y=U.side===ke;vt&&(Y=!Y),Ft(Y),U.blending===qi&&U.transparent===!1?C(qn):C(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);const it=U.stencilWrite;o.setTest(it),it&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Bt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?K(i.SAMPLE_ALPHA_TO_COVERAGE):ot(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(U){x!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),x=U)}function Mt(U){U!==xh?(K(i.CULL_FACE),U!==A&&(U===$o?i.cullFace(i.BACK):U===Mh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ot(i.CULL_FACE),A=U}function xt(U){U!==X&&(j&&i.lineWidth(U),X=U)}function Bt(U,vt,Y){U?(K(i.POLYGON_OFFSET_FILL),(H!==vt||Z!==Y)&&(i.polygonOffset(vt,Y),H=vt,Z=Y)):ot(i.POLYGON_OFFSET_FILL)}function St(U){U?K(i.SCISSOR_TEST):ot(i.SCISSOR_TEST)}function E(U){U===void 0&&(U=i.TEXTURE0+Q-1),$!==U&&(i.activeTexture(U),$=U)}function g(U,vt,Y){Y===void 0&&($===null?Y=i.TEXTURE0+Q-1:Y=$);let it=lt[Y];it===void 0&&(it={type:void 0,texture:void 0},lt[Y]=it),(it.type!==U||it.texture!==vt)&&($!==Y&&(i.activeTexture(Y),$=Y),i.bindTexture(U,vt||tt[U]),it.type=U,it.texture=vt)}function z(){const U=lt[$];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function J(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function st(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function T(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function k(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function B(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function at(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ct(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function rt(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function mt(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ut(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function It(U){dt.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),dt.copy(U))}function bt(U){I.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),I.copy(U))}function Ht(U,vt){let Y=c.get(vt);Y===void 0&&(Y=new WeakMap,c.set(vt,Y));let it=Y.get(U);it===void 0&&(it=i.getUniformBlockIndex(vt,U.name),Y.set(U,it))}function Ot(U,vt){const it=c.get(vt).get(U);l.get(vt)!==it&&(i.uniformBlockBinding(vt,it,U.__bindingPointIndex),l.set(vt,it))}function te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},$=null,lt={},u={},d=new WeakMap,m=[],_=null,v=!1,p=null,f=null,w=null,b=null,S=null,N=null,P=null,R=new Vt(0,0,0),D=0,y=!1,x=null,A=null,X=null,H=null,Z=null,dt.set(0,0,i.canvas.width,i.canvas.height),I.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:K,disable:ot,bindFramebuffer:ft,drawBuffers:gt,useProgram:Rt,setBlending:C,setMaterial:Kt,setFlipSided:Ft,setCullFace:Mt,setLineWidth:xt,setPolygonOffset:Bt,setScissorTest:St,activeTexture:E,bindTexture:g,unbindTexture:z,compressedTexImage2D:J,compressedTexImage3D:st,texImage2D:mt,texImage3D:Ut,updateUBOMapping:Ht,uniformBlockBinding:Ot,texStorage2D:ct,texStorage3D:rt,texSubImage2D:T,texSubImage3D:k,compressedTexSubImage2D:B,compressedTexSubImage3D:at,scissor:It,viewport:bt,reset:te}}function Yl(i,t,e,n){const s=S_(n);switch(e){case Tc:return i*t;case Ac:return i*t;case Rc:return i*t*2;case Cc:return i*t/s.components*s.byteLength;case Ro:return i*t/s.components*s.byteLength;case Pc:return i*t*2/s.components*s.byteLength;case Co:return i*t*2/s.components*s.byteLength;case wc:return i*t*3/s.components*s.byteLength;case on:return i*t*4/s.components*s.byteLength;case Po:return i*t*4/s.components*s.byteLength;case xr:case Mr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case yr:case Sr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ga:case Xa:return Math.max(i,16)*Math.max(t,8)/4;case Va:case Wa:return Math.max(i,8)*Math.max(t,8)/2;case Ya:case qa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $a:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ka:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Za:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Qa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case to:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case eo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case no:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case io:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case so:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ro:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ao:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case oo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case lo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Er:case co:case ho:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Lc:case uo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case fo:case po:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function S_(i){switch(i){case In:case Sc:return{byteLength:1,components:1};case Ts:case Ec:case Rs:return{byteLength:2,components:1};case wo:case Ao:return{byteLength:2,components:4};case pi:case To:case Pn:return{byteLength:4,components:1};case bc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function E_(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Nt,h=new WeakMap;let u;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(E,g){return m?new OffscreenCanvas(E,g):Pr("canvas")}function v(E,g,z){let J=1;const st=St(E);if((st.width>z||st.height>z)&&(J=z/Math.max(st.width,st.height)),J<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const T=Math.floor(J*st.width),k=Math.floor(J*st.height);u===void 0&&(u=_(T,k));const B=g?_(T,k):u;return B.width=T,B.height=k,B.getContext("2d").drawImage(E,0,0,T,k),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+T+"x"+k+")."),B}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),E;return E}function p(E){return E.generateMipmaps}function f(E){i.generateMipmap(E)}function w(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(E,g,z,J,st=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let T=g;if(g===i.RED&&(z===i.FLOAT&&(T=i.R32F),z===i.HALF_FLOAT&&(T=i.R16F),z===i.UNSIGNED_BYTE&&(T=i.R8)),g===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(T=i.R8UI),z===i.UNSIGNED_SHORT&&(T=i.R16UI),z===i.UNSIGNED_INT&&(T=i.R32UI),z===i.BYTE&&(T=i.R8I),z===i.SHORT&&(T=i.R16I),z===i.INT&&(T=i.R32I)),g===i.RG&&(z===i.FLOAT&&(T=i.RG32F),z===i.HALF_FLOAT&&(T=i.RG16F),z===i.UNSIGNED_BYTE&&(T=i.RG8)),g===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(T=i.RG8UI),z===i.UNSIGNED_SHORT&&(T=i.RG16UI),z===i.UNSIGNED_INT&&(T=i.RG32UI),z===i.BYTE&&(T=i.RG8I),z===i.SHORT&&(T=i.RG16I),z===i.INT&&(T=i.RG32I)),g===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(T=i.RGB8UI),z===i.UNSIGNED_SHORT&&(T=i.RGB16UI),z===i.UNSIGNED_INT&&(T=i.RGB32UI),z===i.BYTE&&(T=i.RGB8I),z===i.SHORT&&(T=i.RGB16I),z===i.INT&&(T=i.RGB32I)),g===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(T=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(T=i.RGBA16UI),z===i.UNSIGNED_INT&&(T=i.RGBA32UI),z===i.BYTE&&(T=i.RGBA8I),z===i.SHORT&&(T=i.RGBA16I),z===i.INT&&(T=i.RGBA32I)),g===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&(T=i.RGB9_E5),g===i.RGBA){const k=st?Fr:qt.getTransfer(J);z===i.FLOAT&&(T=i.RGBA32F),z===i.HALF_FLOAT&&(T=i.RGBA16F),z===i.UNSIGNED_BYTE&&(T=k===ie?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(T=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(T=i.RGB5_A1)}return(T===i.R16F||T===i.R32F||T===i.RG16F||T===i.RG32F||T===i.RGBA16F||T===i.RGBA32F)&&t.get("EXT_color_buffer_float"),T}function S(E,g){let z;return E?g===null||g===pi||g===ts?z=i.DEPTH24_STENCIL8:g===Pn?z=i.DEPTH32F_STENCIL8:g===Ts&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===pi||g===ts?z=i.DEPTH_COMPONENT24:g===Pn?z=i.DEPTH_COMPONENT32F:g===Ts&&(z=i.DEPTH_COMPONENT16),z}function N(E,g){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==ln&&E.minFilter!==_n?Math.log2(Math.max(g.width,g.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?g.mipmaps.length:1}function P(E){const g=E.target;g.removeEventListener("dispose",P),D(g),g.isVideoTexture&&h.delete(g)}function R(E){const g=E.target;g.removeEventListener("dispose",R),x(g)}function D(E){const g=n.get(E);if(g.__webglInit===void 0)return;const z=E.source,J=d.get(z);if(J){const st=J[g.__cacheKey];st.usedTimes--,st.usedTimes===0&&y(E),Object.keys(J).length===0&&d.delete(z)}n.remove(E)}function y(E){const g=n.get(E);i.deleteTexture(g.__webglTexture);const z=E.source,J=d.get(z);delete J[g.__cacheKey],a.memory.textures--}function x(E){const g=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(g.__webglFramebuffer[J]))for(let st=0;st<g.__webglFramebuffer[J].length;st++)i.deleteFramebuffer(g.__webglFramebuffer[J][st]);else i.deleteFramebuffer(g.__webglFramebuffer[J]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[J])}else{if(Array.isArray(g.__webglFramebuffer))for(let J=0;J<g.__webglFramebuffer.length;J++)i.deleteFramebuffer(g.__webglFramebuffer[J]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let J=0;J<g.__webglColorRenderbuffer.length;J++)g.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[J]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const z=E.textures;for(let J=0,st=z.length;J<st;J++){const T=n.get(z[J]);T.__webglTexture&&(i.deleteTexture(T.__webglTexture),a.memory.textures--),n.remove(z[J])}n.remove(E)}let A=0;function X(){A=0}function H(){const E=A;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),A+=1,E}function Z(E){const g=[];return g.push(E.wrapS),g.push(E.wrapT),g.push(E.wrapR||0),g.push(E.magFilter),g.push(E.minFilter),g.push(E.anisotropy),g.push(E.internalFormat),g.push(E.format),g.push(E.type),g.push(E.generateMipmaps),g.push(E.premultiplyAlpha),g.push(E.flipY),g.push(E.unpackAlignment),g.push(E.colorSpace),g.join()}function Q(E,g){const z=n.get(E);if(E.isVideoTexture&&xt(E),E.isRenderTargetTexture===!1&&E.version>0&&z.__version!==E.version){const J=E.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{I(z,E,g);return}}e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+g)}function j(E,g){const z=n.get(E);if(E.version>0&&z.__version!==E.version){I(z,E,g);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+g)}function et(E,g){const z=n.get(E);if(E.version>0&&z.__version!==E.version){I(z,E,g);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+g)}function W(E,g){const z=n.get(E);if(E.version>0&&z.__version!==E.version){q(z,E,g);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+g)}const $={[ka]:i.REPEAT,[ui]:i.CLAMP_TO_EDGE,[Ha]:i.MIRRORED_REPEAT},lt={[ln]:i.NEAREST,[$h]:i.NEAREST_MIPMAP_NEAREST,[Fs]:i.NEAREST_MIPMAP_LINEAR,[_n]:i.LINEAR,[Gr]:i.LINEAR_MIPMAP_NEAREST,[di]:i.LINEAR_MIPMAP_LINEAR},ht={[Qh]:i.NEVER,[ru]:i.ALWAYS,[tu]:i.LESS,[Uc]:i.LEQUAL,[eu]:i.EQUAL,[su]:i.GEQUAL,[nu]:i.GREATER,[iu]:i.NOTEQUAL};function nt(E,g){if(g.type===Pn&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===_n||g.magFilter===Gr||g.magFilter===Fs||g.magFilter===di||g.minFilter===_n||g.minFilter===Gr||g.minFilter===Fs||g.minFilter===di)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,$[g.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,$[g.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,$[g.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,lt[g.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,lt[g.minFilter]),g.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,ht[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===ln||g.minFilter!==Fs&&g.minFilter!==di||g.type===Pn&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function dt(E,g){let z=!1;E.__webglInit===void 0&&(E.__webglInit=!0,g.addEventListener("dispose",P));const J=g.source;let st=d.get(J);st===void 0&&(st={},d.set(J,st));const T=Z(g);if(T!==E.__cacheKey){st[T]===void 0&&(st[T]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),st[T].usedTimes++;const k=st[E.__cacheKey];k!==void 0&&(st[E.__cacheKey].usedTimes--,k.usedTimes===0&&y(g)),E.__cacheKey=T,E.__webglTexture=st[T].texture}return z}function I(E,g,z){let J=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(J=i.TEXTURE_3D);const st=dt(E,g),T=g.source;e.bindTexture(J,E.__webglTexture,i.TEXTURE0+z);const k=n.get(T);if(T.version!==k.__version||st===!0){e.activeTexture(i.TEXTURE0+z);const B=qt.getPrimaries(qt.workingColorSpace),at=g.colorSpace===Xn?null:qt.getPrimaries(g.colorSpace),ct=g.colorSpace===Xn||B===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);let rt=v(g.image,!1,s.maxTextureSize);rt=Bt(g,rt);const mt=r.convert(g.format,g.colorSpace),Ut=r.convert(g.type);let It=b(g.internalFormat,mt,Ut,g.colorSpace,g.isVideoTexture);nt(J,g);let bt;const Ht=g.mipmaps,Ot=g.isVideoTexture!==!0,te=k.__version===void 0||st===!0,U=T.dataReady,vt=N(g,rt);if(g.isDepthTexture)It=S(g.format===es,g.type),te&&(Ot?e.texStorage2D(i.TEXTURE_2D,1,It,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,It,rt.width,rt.height,0,mt,Ut,null));else if(g.isDataTexture)if(Ht.length>0){Ot&&te&&e.texStorage2D(i.TEXTURE_2D,vt,It,Ht[0].width,Ht[0].height);for(let Y=0,it=Ht.length;Y<it;Y++)bt=Ht[Y],Ot?U&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,bt.width,bt.height,mt,Ut,bt.data):e.texImage2D(i.TEXTURE_2D,Y,It,bt.width,bt.height,0,mt,Ut,bt.data);g.generateMipmaps=!1}else Ot?(te&&e.texStorage2D(i.TEXTURE_2D,vt,It,rt.width,rt.height),U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,rt.width,rt.height,mt,Ut,rt.data)):e.texImage2D(i.TEXTURE_2D,0,It,rt.width,rt.height,0,mt,Ut,rt.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ot&&te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,It,Ht[0].width,Ht[0].height,rt.depth);for(let Y=0,it=Ht.length;Y<it;Y++)if(bt=Ht[Y],g.format!==on)if(mt!==null)if(Ot){if(U)if(g.layerUpdates.size>0){const yt=Yl(bt.width,bt.height,g.format,g.type);for(const Et of g.layerUpdates){const kt=bt.data.subarray(Et*yt/bt.data.BYTES_PER_ELEMENT,(Et+1)*yt/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,Et,bt.width,bt.height,1,mt,kt)}g.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,bt.width,bt.height,rt.depth,mt,bt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,It,bt.width,bt.height,rt.depth,0,bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ot?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,bt.width,bt.height,rt.depth,mt,Ut,bt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Y,It,bt.width,bt.height,rt.depth,0,mt,Ut,bt.data)}else{Ot&&te&&e.texStorage2D(i.TEXTURE_2D,vt,It,Ht[0].width,Ht[0].height);for(let Y=0,it=Ht.length;Y<it;Y++)bt=Ht[Y],g.format!==on?mt!==null?Ot?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,bt.width,bt.height,mt,bt.data):e.compressedTexImage2D(i.TEXTURE_2D,Y,It,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?U&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,bt.width,bt.height,mt,Ut,bt.data):e.texImage2D(i.TEXTURE_2D,Y,It,bt.width,bt.height,0,mt,Ut,bt.data)}else if(g.isDataArrayTexture)if(Ot){if(te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,It,rt.width,rt.height,rt.depth),U)if(g.layerUpdates.size>0){const Y=Yl(rt.width,rt.height,g.format,g.type);for(const it of g.layerUpdates){const yt=rt.data.subarray(it*Y/rt.data.BYTES_PER_ELEMENT,(it+1)*Y/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,it,rt.width,rt.height,1,mt,Ut,yt)}g.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,mt,Ut,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,It,rt.width,rt.height,rt.depth,0,mt,Ut,rt.data);else if(g.isData3DTexture)Ot?(te&&e.texStorage3D(i.TEXTURE_3D,vt,It,rt.width,rt.height,rt.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,mt,Ut,rt.data)):e.texImage3D(i.TEXTURE_3D,0,It,rt.width,rt.height,rt.depth,0,mt,Ut,rt.data);else if(g.isFramebufferTexture){if(te)if(Ot)e.texStorage2D(i.TEXTURE_2D,vt,It,rt.width,rt.height);else{let Y=rt.width,it=rt.height;for(let yt=0;yt<vt;yt++)e.texImage2D(i.TEXTURE_2D,yt,It,Y,it,0,mt,Ut,null),Y>>=1,it>>=1}}else if(Ht.length>0){if(Ot&&te){const Y=St(Ht[0]);e.texStorage2D(i.TEXTURE_2D,vt,It,Y.width,Y.height)}for(let Y=0,it=Ht.length;Y<it;Y++)bt=Ht[Y],Ot?U&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,mt,Ut,bt):e.texImage2D(i.TEXTURE_2D,Y,It,mt,Ut,bt);g.generateMipmaps=!1}else if(Ot){if(te){const Y=St(rt);e.texStorage2D(i.TEXTURE_2D,vt,It,Y.width,Y.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt,Ut,rt)}else e.texImage2D(i.TEXTURE_2D,0,It,mt,Ut,rt);p(g)&&f(J),k.__version=T.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function q(E,g,z){if(g.image.length!==6)return;const J=dt(E,g),st=g.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+z);const T=n.get(st);if(st.version!==T.__version||J===!0){e.activeTexture(i.TEXTURE0+z);const k=qt.getPrimaries(qt.workingColorSpace),B=g.colorSpace===Xn?null:qt.getPrimaries(g.colorSpace),at=g.colorSpace===Xn||k===B?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);const ct=g.isCompressedTexture||g.image[0].isCompressedTexture,rt=g.image[0]&&g.image[0].isDataTexture,mt=[];for(let it=0;it<6;it++)!ct&&!rt?mt[it]=v(g.image[it],!0,s.maxCubemapSize):mt[it]=rt?g.image[it].image:g.image[it],mt[it]=Bt(g,mt[it]);const Ut=mt[0],It=r.convert(g.format,g.colorSpace),bt=r.convert(g.type),Ht=b(g.internalFormat,It,bt,g.colorSpace),Ot=g.isVideoTexture!==!0,te=T.__version===void 0||J===!0,U=st.dataReady;let vt=N(g,Ut);nt(i.TEXTURE_CUBE_MAP,g);let Y;if(ct){Ot&&te&&e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,Ht,Ut.width,Ut.height);for(let it=0;it<6;it++){Y=mt[it].mipmaps;for(let yt=0;yt<Y.length;yt++){const Et=Y[yt];g.format!==on?It!==null?Ot?U&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,yt,0,0,Et.width,Et.height,It,Et.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,yt,Ht,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,yt,0,0,Et.width,Et.height,It,bt,Et.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,yt,Ht,Et.width,Et.height,0,It,bt,Et.data)}}}else{if(Y=g.mipmaps,Ot&&te){Y.length>0&&vt++;const it=St(mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,Ht,it.width,it.height)}for(let it=0;it<6;it++)if(rt){Ot?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,mt[it].width,mt[it].height,It,bt,mt[it].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Ht,mt[it].width,mt[it].height,0,It,bt,mt[it].data);for(let yt=0;yt<Y.length;yt++){const kt=Y[yt].image[it].image;Ot?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,yt+1,0,0,kt.width,kt.height,It,bt,kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,yt+1,Ht,kt.width,kt.height,0,It,bt,kt.data)}}else{Ot?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,It,bt,mt[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Ht,It,bt,mt[it]);for(let yt=0;yt<Y.length;yt++){const Et=Y[yt];Ot?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,yt+1,0,0,It,bt,Et.image[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,yt+1,Ht,It,bt,Et.image[it])}}}p(g)&&f(i.TEXTURE_CUBE_MAP),T.__version=st.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function tt(E,g,z,J,st,T){const k=r.convert(z.format,z.colorSpace),B=r.convert(z.type),at=b(z.internalFormat,k,B,z.colorSpace),ct=n.get(g),rt=n.get(z);if(rt.__renderTarget=g,!ct.__hasExternalTextures){const mt=Math.max(1,g.width>>T),Ut=Math.max(1,g.height>>T);st===i.TEXTURE_3D||st===i.TEXTURE_2D_ARRAY?e.texImage3D(st,T,at,mt,Ut,g.depth,0,k,B,null):e.texImage2D(st,T,at,mt,Ut,0,k,B,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),Mt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,st,rt.__webglTexture,0,Ft(g)):(st===i.TEXTURE_2D||st>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,st,rt.__webglTexture,T),e.bindFramebuffer(i.FRAMEBUFFER,null)}function K(E,g,z){if(i.bindRenderbuffer(i.RENDERBUFFER,E),g.depthBuffer){const J=g.depthTexture,st=J&&J.isDepthTexture?J.type:null,T=S(g.stencilBuffer,st),k=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,B=Ft(g);Mt(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,B,T,g.width,g.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,B,T,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,T,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,k,i.RENDERBUFFER,E)}else{const J=g.textures;for(let st=0;st<J.length;st++){const T=J[st],k=r.convert(T.format,T.colorSpace),B=r.convert(T.type),at=b(T.internalFormat,k,B,T.colorSpace),ct=Ft(g);z&&Mt(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,at,g.width,g.height):Mt(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct,at,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,at,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ot(E,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(g.depthTexture);J.__renderTarget=g,(!J.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),Q(g.depthTexture,0);const st=J.__webglTexture,T=Ft(g);if(g.depthTexture.format===ji)Mt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0,T):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0);else if(g.depthTexture.format===es)Mt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0,T):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function ft(E){const g=n.get(E),z=E.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==E.depthTexture){const J=E.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),J){const st=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,J.removeEventListener("dispose",st)};J.addEventListener("dispose",st),g.__depthDisposeCallback=st}g.__boundDepthTexture=J}if(E.depthTexture&&!g.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");ot(g.__webglFramebuffer,E)}else if(z){g.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[J]),g.__webglDepthbuffer[J]===void 0)g.__webglDepthbuffer[J]=i.createRenderbuffer(),K(g.__webglDepthbuffer[J],E,!1);else{const st=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,T=g.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,T),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,T)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),K(g.__webglDepthbuffer,E,!1);else{const J=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,st)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function gt(E,g,z){const J=n.get(E);g!==void 0&&tt(J.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&ft(E)}function Rt(E){const g=E.texture,z=n.get(E),J=n.get(g);E.addEventListener("dispose",R);const st=E.textures,T=E.isWebGLCubeRenderTarget===!0,k=st.length>1;if(k||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=g.version,a.memory.textures++),T){z.__webglFramebuffer=[];for(let B=0;B<6;B++)if(g.mipmaps&&g.mipmaps.length>0){z.__webglFramebuffer[B]=[];for(let at=0;at<g.mipmaps.length;at++)z.__webglFramebuffer[B][at]=i.createFramebuffer()}else z.__webglFramebuffer[B]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){z.__webglFramebuffer=[];for(let B=0;B<g.mipmaps.length;B++)z.__webglFramebuffer[B]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(k)for(let B=0,at=st.length;B<at;B++){const ct=n.get(st[B]);ct.__webglTexture===void 0&&(ct.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&Mt(E)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let B=0;B<st.length;B++){const at=st[B];z.__webglColorRenderbuffer[B]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[B]);const ct=r.convert(at.format,at.colorSpace),rt=r.convert(at.type),mt=b(at.internalFormat,ct,rt,at.colorSpace,E.isXRRenderTarget===!0),Ut=Ft(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut,mt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+B,i.RENDERBUFFER,z.__webglColorRenderbuffer[B])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),K(z.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(T){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),nt(i.TEXTURE_CUBE_MAP,g);for(let B=0;B<6;B++)if(g.mipmaps&&g.mipmaps.length>0)for(let at=0;at<g.mipmaps.length;at++)tt(z.__webglFramebuffer[B][at],E,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+B,at);else tt(z.__webglFramebuffer[B],E,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0);p(g)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(k){for(let B=0,at=st.length;B<at;B++){const ct=st[B],rt=n.get(ct);e.bindTexture(i.TEXTURE_2D,rt.__webglTexture),nt(i.TEXTURE_2D,ct),tt(z.__webglFramebuffer,E,ct,i.COLOR_ATTACHMENT0+B,i.TEXTURE_2D,0),p(ct)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let B=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(B=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(B,J.__webglTexture),nt(B,g),g.mipmaps&&g.mipmaps.length>0)for(let at=0;at<g.mipmaps.length;at++)tt(z.__webglFramebuffer[at],E,g,i.COLOR_ATTACHMENT0,B,at);else tt(z.__webglFramebuffer,E,g,i.COLOR_ATTACHMENT0,B,0);p(g)&&f(B),e.unbindTexture()}E.depthBuffer&&ft(E)}function pt(E){const g=E.textures;for(let z=0,J=g.length;z<J;z++){const st=g[z];if(p(st)){const T=w(E),k=n.get(st).__webglTexture;e.bindTexture(T,k),f(T),e.unbindTexture()}}}const At=[],C=[];function Kt(E){if(E.samples>0){if(Mt(E)===!1){const g=E.textures,z=E.width,J=E.height;let st=i.COLOR_BUFFER_BIT;const T=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,k=n.get(E),B=g.length>1;if(B)for(let at=0;at<g.length;at++)e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,k.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,k.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,k.__webglFramebuffer);for(let at=0;at<g.length;at++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(st|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(st|=i.STENCIL_BUFFER_BIT)),B){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,k.__webglColorRenderbuffer[at]);const ct=n.get(g[at]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ct,0)}i.blitFramebuffer(0,0,z,J,0,0,z,J,st,i.NEAREST),l===!0&&(At.length=0,C.length=0,At.push(i.COLOR_ATTACHMENT0+at),E.depthBuffer&&E.resolveDepthBuffer===!1&&(At.push(T),C.push(T),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,C)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,At))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),B)for(let at=0;at<g.length;at++){e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,k.__webglColorRenderbuffer[at]);const ct=n.get(g[at]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,k.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,ct,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,k.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const g=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function Ft(E){return Math.min(s.maxSamples,E.samples)}function Mt(E){const g=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function xt(E){const g=a.render.frame;h.get(E)!==g&&(h.set(E,g),E.update())}function Bt(E,g){const z=E.colorSpace,J=E.format,st=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||z!==is&&z!==Xn&&(qt.getTransfer(z)===ie?(J!==on||st!==In)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),g}function St(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=X,this.setTexture2D=Q,this.setTexture2DArray=j,this.setTexture3D=et,this.setTextureCube=W,this.rebindTextures=gt,this.setupRenderTarget=Rt,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=Kt,this.setupDepthRenderbuffer=ft,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=Mt}function b_(i,t){function e(n,s=Xn){let r;const a=qt.getTransfer(s);if(n===In)return i.UNSIGNED_BYTE;if(n===wo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ao)return i.UNSIGNED_SHORT_5_5_5_1;if(n===bc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Sc)return i.BYTE;if(n===Ec)return i.SHORT;if(n===Ts)return i.UNSIGNED_SHORT;if(n===To)return i.INT;if(n===pi)return i.UNSIGNED_INT;if(n===Pn)return i.FLOAT;if(n===Rs)return i.HALF_FLOAT;if(n===Tc)return i.ALPHA;if(n===wc)return i.RGB;if(n===on)return i.RGBA;if(n===Ac)return i.LUMINANCE;if(n===Rc)return i.LUMINANCE_ALPHA;if(n===ji)return i.DEPTH_COMPONENT;if(n===es)return i.DEPTH_STENCIL;if(n===Cc)return i.RED;if(n===Ro)return i.RED_INTEGER;if(n===Pc)return i.RG;if(n===Co)return i.RG_INTEGER;if(n===Po)return i.RGBA_INTEGER;if(n===xr||n===Mr||n===yr||n===Sr)if(a===ie)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===xr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===xr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Mr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===yr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Sr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Va||n===Ga||n===Wa||n===Xa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Va)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ga)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Wa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Xa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ya||n===qa||n===ja)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ya||n===qa)return a===ie?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ja)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===$a||n===Ka||n===Za||n===Ja||n===Qa||n===to||n===eo||n===no||n===io||n===so||n===ro||n===ao||n===oo||n===lo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===$a)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ka)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Za)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ja)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Qa)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===to)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===eo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===no)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===io)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===so)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ro)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ao)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===oo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===lo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Er||n===co||n===ho)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Er)return a===ie?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===co)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ho)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Lc||n===uo||n===fo||n===po)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Er)return r.COMPRESSED_RED_RGTC1_EXT;if(n===uo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===fo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===po)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ts?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class T_ extends Ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Qe extends me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const w_={type:"move"};class _a{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const p=e.getJointPose(v,n),f=this._getHandJoint(c,v);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,_=.005;c.inputState.pinching&&d>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(w_)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Qe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const A_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,R_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class C_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ie,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new xn({vertexShader:A_,fragmentShader:R_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ze(new Br(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class P_ extends vi{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,m=null,_=null;const v=new C_,p=e.getContextAttributes();let f=null,w=null;const b=[],S=[],N=new Nt;let P=null;const R=new Ke;R.viewport=new re;const D=new Ke;D.viewport=new re;const y=[R,D],x=new T_;let A=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let q=b[I];return q===void 0&&(q=new _a,b[I]=q),q.getTargetRaySpace()},this.getControllerGrip=function(I){let q=b[I];return q===void 0&&(q=new _a,b[I]=q),q.getGripSpace()},this.getHand=function(I){let q=b[I];return q===void 0&&(q=new _a,b[I]=q),q.getHandSpace()};function H(I){const q=S.indexOf(I.inputSource);if(q===-1)return;const tt=b[q];tt!==void 0&&(tt.update(I.inputSource,I.frame,c||a),tt.dispatchEvent({type:I.type,data:I.inputSource}))}function Z(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",Q);for(let I=0;I<b.length;I++){const q=S[I];q!==null&&(S[I]=null,b[I].disconnect(q))}A=null,X=null,v.reset(),t.setRenderTarget(f),m=null,d=null,u=null,s=null,w=null,dt.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){r=I,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){o=I,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(I){c=I},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(I){if(s=I,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",Q),p.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(N),s.renderState.layers===void 0){const q={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,q),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),w=new mi(m.framebufferWidth,m.framebufferHeight,{format:on,type:In,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let q=null,tt=null,K=null;p.depth&&(K=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,q=p.stencil?es:ji,tt=p.stencil?ts:pi);const ot={colorFormat:e.RGBA8,depthFormat:K,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(ot),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),w=new mi(d.textureWidth,d.textureHeight,{format:on,type:In,depthTexture:new Yc(d.textureWidth,d.textureHeight,tt,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),dt.setContext(s),dt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Q(I){for(let q=0;q<I.removed.length;q++){const tt=I.removed[q],K=S.indexOf(tt);K>=0&&(S[K]=null,b[K].disconnect(tt))}for(let q=0;q<I.added.length;q++){const tt=I.added[q];let K=S.indexOf(tt);if(K===-1){for(let ft=0;ft<b.length;ft++)if(ft>=S.length){S.push(tt),K=ft;break}else if(S[ft]===null){S[ft]=tt,K=ft;break}if(K===-1)break}const ot=b[K];ot&&ot.connect(tt)}}const j=new L,et=new L;function W(I,q,tt){j.setFromMatrixPosition(q.matrixWorld),et.setFromMatrixPosition(tt.matrixWorld);const K=j.distanceTo(et),ot=q.projectionMatrix.elements,ft=tt.projectionMatrix.elements,gt=ot[14]/(ot[10]-1),Rt=ot[14]/(ot[10]+1),pt=(ot[9]+1)/ot[5],At=(ot[9]-1)/ot[5],C=(ot[8]-1)/ot[0],Kt=(ft[8]+1)/ft[0],Ft=gt*C,Mt=gt*Kt,xt=K/(-C+Kt),Bt=xt*-C;if(q.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(Bt),I.translateZ(xt),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert(),ot[10]===-1)I.projectionMatrix.copy(q.projectionMatrix),I.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{const St=gt+xt,E=Rt+xt,g=Ft-Bt,z=Mt+(K-Bt),J=pt*Rt/E*St,st=At*Rt/E*St;I.projectionMatrix.makePerspective(g,z,J,st,St,E),I.projectionMatrixInverse.copy(I.projectionMatrix).invert()}}function $(I,q){q===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(q.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(s===null)return;let q=I.near,tt=I.far;v.texture!==null&&(v.depthNear>0&&(q=v.depthNear),v.depthFar>0&&(tt=v.depthFar)),x.near=D.near=R.near=q,x.far=D.far=R.far=tt,(A!==x.near||X!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),A=x.near,X=x.far),R.layers.mask=I.layers.mask|2,D.layers.mask=I.layers.mask|4,x.layers.mask=R.layers.mask|D.layers.mask;const K=I.parent,ot=x.cameras;$(x,K);for(let ft=0;ft<ot.length;ft++)$(ot[ft],K);ot.length===2?W(x,R,D):x.projectionMatrix.copy(R.projectionMatrix),lt(I,x,K)};function lt(I,q,tt){tt===null?I.matrix.copy(q.matrixWorld):(I.matrix.copy(tt.matrixWorld),I.matrix.invert(),I.matrix.multiply(q.matrixWorld)),I.matrix.decompose(I.position,I.quaternion,I.scale),I.updateMatrixWorld(!0),I.projectionMatrix.copy(q.projectionMatrix),I.projectionMatrixInverse.copy(q.projectionMatrixInverse),I.isPerspectiveCamera&&(I.fov=ws*2*Math.atan(1/I.projectionMatrix.elements[5]),I.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(I){l=I,d!==null&&(d.fixedFoveation=I),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=I)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(x)};let ht=null;function nt(I,q){if(h=q.getViewerPose(c||a),_=q,h!==null){const tt=h.views;m!==null&&(t.setRenderTargetFramebuffer(w,m.framebuffer),t.setRenderTarget(w));let K=!1;tt.length!==x.cameras.length&&(x.cameras.length=0,K=!0);for(let ft=0;ft<tt.length;ft++){const gt=tt[ft];let Rt=null;if(m!==null)Rt=m.getViewport(gt);else{const At=u.getViewSubImage(d,gt);Rt=At.viewport,ft===0&&(t.setRenderTargetTextures(w,At.colorTexture,d.ignoreDepthValues?void 0:At.depthStencilTexture),t.setRenderTarget(w))}let pt=y[ft];pt===void 0&&(pt=new Ke,pt.layers.enable(ft),pt.viewport=new re,y[ft]=pt),pt.matrix.fromArray(gt.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(gt.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),ft===0&&(x.matrix.copy(pt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),K===!0&&x.cameras.push(pt)}const ot=s.enabledFeatures;if(ot&&ot.includes("depth-sensing")){const ft=u.getDepthInformation(tt[0]);ft&&ft.isValid&&ft.texture&&v.init(t,ft,s.renderState)}}for(let tt=0;tt<b.length;tt++){const K=S[tt],ot=b[tt];K!==null&&ot!==void 0&&ot.update(K,q,c||a)}ht&&ht(I,q),q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:q}),_=null}const dt=new Wc;dt.setAnimationLoop(nt),this.setAnimationLoop=function(I){ht=I},this.dispose=function(){}}}const ai=new vn,L_=new ne;function D_(i,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,Hc(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,w,b,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),u(p,f)):f.isMeshPhongMaterial?(r(p,f),h(p,f)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,S)):f.isMeshMatcapMaterial?(r(p,f),_(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),v(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,w,b):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===ke&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===ke&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const w=t.get(f),b=w.envMap,S=w.envMapRotation;b&&(p.envMap.value=b,ai.copy(S),ai.x*=-1,ai.y*=-1,ai.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ai.y*=-1,ai.z*=-1),p.envMapRotation.value.setFromMatrix4(L_.makeRotationFromEuler(ai)),p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,w,b){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*w,p.scale.value=b*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,w){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===ke&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,f){f.matcap&&(p.matcap.value=f.matcap)}function v(p,f){const w=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(w.matrixWorld),p.nearDistance.value=w.shadow.camera.near,p.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function U_(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,b){const S=b.program;n.uniformBlockBinding(w,S)}function c(w,b){let S=s[w.id];S===void 0&&(_(w),S=h(w),s[w.id]=S,w.addEventListener("dispose",p));const N=b.program;n.updateUBOMapping(w,N);const P=t.render.frame;r[w.id]!==P&&(d(w),r[w.id]=P)}function h(w){const b=u();w.__bindingPointIndex=b;const S=i.createBuffer(),N=w.__size,P=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,N,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,S),S}function u(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const b=s[w.id],S=w.uniforms,N=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let P=0,R=S.length;P<R;P++){const D=Array.isArray(S[P])?S[P]:[S[P]];for(let y=0,x=D.length;y<x;y++){const A=D[y];if(m(A,P,y,N)===!0){const X=A.__offset,H=Array.isArray(A.value)?A.value:[A.value];let Z=0;for(let Q=0;Q<H.length;Q++){const j=H[Q],et=v(j);typeof j=="number"||typeof j=="boolean"?(A.__data[0]=j,i.bufferSubData(i.UNIFORM_BUFFER,X+Z,A.__data)):j.isMatrix3?(A.__data[0]=j.elements[0],A.__data[1]=j.elements[1],A.__data[2]=j.elements[2],A.__data[3]=0,A.__data[4]=j.elements[3],A.__data[5]=j.elements[4],A.__data[6]=j.elements[5],A.__data[7]=0,A.__data[8]=j.elements[6],A.__data[9]=j.elements[7],A.__data[10]=j.elements[8],A.__data[11]=0):(j.toArray(A.__data,Z),Z+=et.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,X,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(w,b,S,N){const P=w.value,R=b+"_"+S;if(N[R]===void 0)return typeof P=="number"||typeof P=="boolean"?N[R]=P:N[R]=P.clone(),!0;{const D=N[R];if(typeof P=="number"||typeof P=="boolean"){if(D!==P)return N[R]=P,!0}else if(D.equals(P)===!1)return D.copy(P),!0}return!1}function _(w){const b=w.uniforms;let S=0;const N=16;for(let R=0,D=b.length;R<D;R++){const y=Array.isArray(b[R])?b[R]:[b[R]];for(let x=0,A=y.length;x<A;x++){const X=y[x],H=Array.isArray(X.value)?X.value:[X.value];for(let Z=0,Q=H.length;Z<Q;Z++){const j=H[Z],et=v(j),W=S%N,$=W%et.boundary,lt=W+$;S+=$,lt!==0&&N-lt<et.storage&&(S+=N-lt),X.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=S,S+=et.storage}}}const P=S%N;return P>0&&(S+=N-P),w.__size=S,w.__cache={},this}function v(w){const b={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),b}function p(w){const b=w.target;b.removeEventListener("dispose",p);const S=a.indexOf(b.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function f(){for(const w in s)i.deleteBuffer(s[w]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}class I_{constructor(t={}){const{canvas:e=Su(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const _=new Uint32Array(4),v=new Int32Array(4);let p=null,f=null;const w=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=be,this.toneMapping=jn,this.toneMappingExposure=1;const S=this;let N=!1,P=0,R=0,D=null,y=-1,x=null;const A=new re,X=new re;let H=null;const Z=new Vt(0);let Q=0,j=e.width,et=e.height,W=1,$=null,lt=null;const ht=new re(0,0,j,et),nt=new re(0,0,j,et);let dt=!1;const I=new Io;let q=!1,tt=!1;const K=new ne,ot=new ne,ft=new L,gt=new re,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function At(){return D===null?W:1}let C=n;function Kt(M,F){return e.getContext(M,F)}try{const M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Eo}`),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",yt,!1),e.addEventListener("webglcontextcreationerror",Et,!1),C===null){const F="webgl2";if(C=Kt(F,M),C===null)throw Kt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Ft,Mt,xt,Bt,St,E,g,z,J,st,T,k,B,at,ct,rt,mt,Ut,It,bt,Ht,Ot,te,U;function vt(){Ft=new zp(C),Ft.init(),Ot=new b_(C,Ft),Mt=new Up(C,Ft,t,Ot),xt=new y_(C,Ft),Mt.reverseDepthBuffer&&d&&xt.buffers.depth.setReversed(!0),Bt=new Vp(C),St=new a_,E=new E_(C,Ft,xt,St,Mt,Ot,Bt),g=new Np(S),z=new Bp(S),J=new ju(C),te=new Lp(C,J),st=new kp(C,J,Bt,te),T=new Wp(C,st,J,Bt),It=new Gp(C,Mt,E),rt=new Ip(St),k=new r_(S,g,z,Ft,Mt,te,rt),B=new D_(S,St),at=new l_,ct=new p_(Ft),Ut=new Pp(S,g,z,xt,T,m,l),mt=new x_(S,T,Mt),U=new U_(C,Bt,Mt,xt),bt=new Dp(C,Ft,Bt),Ht=new Hp(C,Ft,Bt),Bt.programs=k.programs,S.capabilities=Mt,S.extensions=Ft,S.properties=St,S.renderLists=at,S.shadowMap=mt,S.state=xt,S.info=Bt}vt();const Y=new P_(S,C);this.xr=Y,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const M=Ft.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ft.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(M){M!==void 0&&(W=M,this.setSize(j,et,!1))},this.getSize=function(M){return M.set(j,et)},this.setSize=function(M,F,V=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=M,et=F,e.width=Math.floor(M*W),e.height=Math.floor(F*W),V===!0&&(e.style.width=M+"px",e.style.height=F+"px"),this.setViewport(0,0,M,F)},this.getDrawingBufferSize=function(M){return M.set(j*W,et*W).floor()},this.setDrawingBufferSize=function(M,F,V){j=M,et=F,W=V,e.width=Math.floor(M*V),e.height=Math.floor(F*V),this.setViewport(0,0,M,F)},this.getCurrentViewport=function(M){return M.copy(A)},this.getViewport=function(M){return M.copy(ht)},this.setViewport=function(M,F,V,G){M.isVector4?ht.set(M.x,M.y,M.z,M.w):ht.set(M,F,V,G),xt.viewport(A.copy(ht).multiplyScalar(W).round())},this.getScissor=function(M){return M.copy(nt)},this.setScissor=function(M,F,V,G){M.isVector4?nt.set(M.x,M.y,M.z,M.w):nt.set(M,F,V,G),xt.scissor(X.copy(nt).multiplyScalar(W).round())},this.getScissorTest=function(){return dt},this.setScissorTest=function(M){xt.setScissorTest(dt=M)},this.setOpaqueSort=function(M){$=M},this.setTransparentSort=function(M){lt=M},this.getClearColor=function(M){return M.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor.apply(Ut,arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha.apply(Ut,arguments)},this.clear=function(M=!0,F=!0,V=!0){let G=0;if(M){let O=!1;if(D!==null){const ut=D.texture.format;O=ut===Po||ut===Co||ut===Ro}if(O){const ut=D.texture.type,Tt=ut===In||ut===pi||ut===Ts||ut===ts||ut===wo||ut===Ao,Ct=Ut.getClearColor(),Pt=Ut.getClearAlpha(),zt=Ct.r,Gt=Ct.g,Lt=Ct.b;Tt?(_[0]=zt,_[1]=Gt,_[2]=Lt,_[3]=Pt,C.clearBufferuiv(C.COLOR,0,_)):(v[0]=zt,v[1]=Gt,v[2]=Lt,v[3]=Pt,C.clearBufferiv(C.COLOR,0,v))}else G|=C.COLOR_BUFFER_BIT}F&&(G|=C.DEPTH_BUFFER_BIT),V&&(G|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",yt,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),at.dispose(),ct.dispose(),St.dispose(),g.dispose(),z.dispose(),T.dispose(),te.dispose(),U.dispose(),k.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Ho),Y.removeEventListener("sessionend",Vo),ti.stop()};function it(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function yt(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const M=Bt.autoReset,F=mt.enabled,V=mt.autoUpdate,G=mt.needsUpdate,O=mt.type;vt(),Bt.autoReset=M,mt.enabled=F,mt.autoUpdate=V,mt.needsUpdate=G,mt.type=O}function Et(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function kt(M){const F=M.target;F.removeEventListener("dispose",kt),Zt(F)}function Zt(M){xe(M),St.remove(M)}function xe(M){const F=St.get(M).programs;F!==void 0&&(F.forEach(function(V){k.releaseProgram(V)}),M.isShaderMaterial&&k.releaseShaderCache(M))}this.renderBufferDirect=function(M,F,V,G,O,ut){F===null&&(F=Rt);const Tt=O.isMesh&&O.matrixWorld.determinant()<0,Ct=_h(M,F,V,G,O);xt.setMaterial(G,Tt);let Pt=V.index,zt=1;if(G.wireframe===!0){if(Pt=st.getWireframeAttribute(V),Pt===void 0)return;zt=2}const Gt=V.drawRange,Lt=V.attributes.position;let jt=Gt.start*zt,ae=(Gt.start+Gt.count)*zt;ut!==null&&(jt=Math.max(jt,ut.start*zt),ae=Math.min(ae,(ut.start+ut.count)*zt)),Pt!==null?(jt=Math.max(jt,0),ae=Math.min(ae,Pt.count)):Lt!=null&&(jt=Math.max(jt,0),ae=Math.min(ae,Lt.count));const oe=ae-jt;if(oe<0||oe===1/0)return;te.setup(O,G,Ct,V,Pt);let Ne,Jt=bt;if(Pt!==null&&(Ne=J.get(Pt),Jt=Ht,Jt.setIndex(Ne)),O.isMesh)G.wireframe===!0?(xt.setLineWidth(G.wireframeLinewidth*At()),Jt.setMode(C.LINES)):Jt.setMode(C.TRIANGLES);else if(O.isLine){let Dt=G.linewidth;Dt===void 0&&(Dt=1),xt.setLineWidth(Dt*At()),O.isLineSegments?Jt.setMode(C.LINES):O.isLineLoop?Jt.setMode(C.LINE_LOOP):Jt.setMode(C.LINE_STRIP)}else O.isPoints?Jt.setMode(C.POINTS):O.isSprite&&Jt.setMode(C.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Jt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Ft.get("WEBGL_multi_draw"))Jt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Dt=O._multiDrawStarts,Sn=O._multiDrawCounts,Qt=O._multiDrawCount,tn=Pt?J.get(Pt).bytesPerElement:1,Mi=St.get(G).currentProgram.getUniforms();for(let Ve=0;Ve<Qt;Ve++)Mi.setValue(C,"_gl_DrawID",Ve),Jt.render(Dt[Ve]/tn,Sn[Ve])}else if(O.isInstancedMesh)Jt.renderInstances(jt,oe,O.count);else if(V.isInstancedBufferGeometry){const Dt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Sn=Math.min(V.instanceCount,Dt);Jt.renderInstances(jt,oe,Sn)}else Jt.render(jt,oe)};function $t(M,F,V){M.transparent===!0&&M.side===Xe&&M.forceSinglePass===!1?(M.side=ke,M.needsUpdate=!0,Ns(M,F,V),M.side=Zn,M.needsUpdate=!0,Ns(M,F,V),M.side=Xe):Ns(M,F,V)}this.compile=function(M,F,V=null){V===null&&(V=M),f=ct.get(V),f.init(F),b.push(f),V.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),M!==V&&M.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),f.setupLights();const G=new Set;return M.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ut=O.material;if(ut)if(Array.isArray(ut))for(let Tt=0;Tt<ut.length;Tt++){const Ct=ut[Tt];$t(Ct,V,O),G.add(Ct)}else $t(ut,V,O),G.add(ut)}),b.pop(),f=null,G},this.compileAsync=function(M,F,V=null){const G=this.compile(M,F,V);return new Promise(O=>{function ut(){if(G.forEach(function(Tt){St.get(Tt).currentProgram.isReady()&&G.delete(Tt)}),G.size===0){O(M);return}setTimeout(ut,10)}Ft.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let Re=null;function yn(M){Re&&Re(M)}function Ho(){ti.stop()}function Vo(){ti.start()}const ti=new Wc;ti.setAnimationLoop(yn),typeof self<"u"&&ti.setContext(self),this.setAnimationLoop=function(M){Re=M,Y.setAnimationLoop(M),M===null?ti.stop():ti.start()},Y.addEventListener("sessionstart",Ho),Y.addEventListener("sessionend",Vo),this.render=function(M,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(F),F=Y.getCamera()),M.isScene===!0&&M.onBeforeRender(S,M,F,D),f=ct.get(M,b.length),f.init(F),b.push(f),ot.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),I.setFromProjectionMatrix(ot),tt=this.localClippingEnabled,q=rt.init(this.clippingPlanes,tt),p=at.get(M,w.length),p.init(),w.push(p),Y.enabled===!0&&Y.isPresenting===!0){const ut=S.xr.getDepthSensingMesh();ut!==null&&Vr(ut,F,-1/0,S.sortObjects)}Vr(M,F,0,S.sortObjects),p.finish(),S.sortObjects===!0&&p.sort($,lt),pt=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,pt&&Ut.addToRenderList(p,M),this.info.render.frame++,q===!0&&rt.beginShadows();const V=f.state.shadowsArray;mt.render(V,M,F),q===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=p.opaque,O=p.transmissive;if(f.setupLights(),F.isArrayCamera){const ut=F.cameras;if(O.length>0)for(let Tt=0,Ct=ut.length;Tt<Ct;Tt++){const Pt=ut[Tt];Wo(G,O,M,Pt)}pt&&Ut.render(M);for(let Tt=0,Ct=ut.length;Tt<Ct;Tt++){const Pt=ut[Tt];Go(p,M,Pt,Pt.viewport)}}else O.length>0&&Wo(G,O,M,F),pt&&Ut.render(M),Go(p,M,F);D!==null&&(E.updateMultisampleRenderTarget(D),E.updateRenderTargetMipmap(D)),M.isScene===!0&&M.onAfterRender(S,M,F),te.resetDefaultState(),y=-1,x=null,b.pop(),b.length>0?(f=b[b.length-1],q===!0&&rt.setGlobalState(S.clippingPlanes,f.state.camera)):f=null,w.pop(),w.length>0?p=w[w.length-1]:p=null};function Vr(M,F,V,G){if(M.visible===!1)return;if(M.layers.test(F.layers)){if(M.isGroup)V=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(F);else if(M.isLight)f.pushLight(M),M.castShadow&&f.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||I.intersectsSprite(M)){G&&gt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ot);const Tt=T.update(M),Ct=M.material;Ct.visible&&p.push(M,Tt,Ct,V,gt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||I.intersectsObject(M))){const Tt=T.update(M),Ct=M.material;if(G&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),gt.copy(M.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),gt.copy(Tt.boundingSphere.center)),gt.applyMatrix4(M.matrixWorld).applyMatrix4(ot)),Array.isArray(Ct)){const Pt=Tt.groups;for(let zt=0,Gt=Pt.length;zt<Gt;zt++){const Lt=Pt[zt],jt=Ct[Lt.materialIndex];jt&&jt.visible&&p.push(M,Tt,jt,V,gt.z,Lt)}}else Ct.visible&&p.push(M,Tt,Ct,V,gt.z,null)}}const ut=M.children;for(let Tt=0,Ct=ut.length;Tt<Ct;Tt++)Vr(ut[Tt],F,V,G)}function Go(M,F,V,G){const O=M.opaque,ut=M.transmissive,Tt=M.transparent;f.setupLightsView(V),q===!0&&rt.setGlobalState(S.clippingPlanes,V),G&&xt.viewport(A.copy(G)),O.length>0&&Is(O,F,V),ut.length>0&&Is(ut,F,V),Tt.length>0&&Is(Tt,F,V),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function Wo(M,F,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[G.id]===void 0&&(f.state.transmissionRenderTarget[G.id]=new mi(1,1,{generateMipmaps:!0,type:Ft.has("EXT_color_buffer_half_float")||Ft.has("EXT_color_buffer_float")?Rs:In,minFilter:di,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qt.workingColorSpace}));const ut=f.state.transmissionRenderTarget[G.id],Tt=G.viewport||A;ut.setSize(Tt.z,Tt.w);const Ct=S.getRenderTarget();S.setRenderTarget(ut),S.getClearColor(Z),Q=S.getClearAlpha(),Q<1&&S.setClearColor(16777215,.5),S.clear(),pt&&Ut.render(V);const Pt=S.toneMapping;S.toneMapping=jn;const zt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),f.setupLightsView(G),q===!0&&rt.setGlobalState(S.clippingPlanes,G),Is(M,V,G),E.updateMultisampleRenderTarget(ut),E.updateRenderTargetMipmap(ut),Ft.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let Lt=0,jt=F.length;Lt<jt;Lt++){const ae=F[Lt],oe=ae.object,Ne=ae.geometry,Jt=ae.material,Dt=ae.group;if(Jt.side===Xe&&oe.layers.test(G.layers)){const Sn=Jt.side;Jt.side=ke,Jt.needsUpdate=!0,Xo(oe,V,G,Ne,Jt,Dt),Jt.side=Sn,Jt.needsUpdate=!0,Gt=!0}}Gt===!0&&(E.updateMultisampleRenderTarget(ut),E.updateRenderTargetMipmap(ut))}S.setRenderTarget(Ct),S.setClearColor(Z,Q),zt!==void 0&&(G.viewport=zt),S.toneMapping=Pt}function Is(M,F,V){const G=F.isScene===!0?F.overrideMaterial:null;for(let O=0,ut=M.length;O<ut;O++){const Tt=M[O],Ct=Tt.object,Pt=Tt.geometry,zt=G===null?Tt.material:G,Gt=Tt.group;Ct.layers.test(V.layers)&&Xo(Ct,F,V,Pt,zt,Gt)}}function Xo(M,F,V,G,O,ut){M.onBeforeRender(S,F,V,G,O,ut),M.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),O.onBeforeRender(S,F,V,G,M,ut),O.transparent===!0&&O.side===Xe&&O.forceSinglePass===!1?(O.side=ke,O.needsUpdate=!0,S.renderBufferDirect(V,F,G,O,M,ut),O.side=Zn,O.needsUpdate=!0,S.renderBufferDirect(V,F,G,O,M,ut),O.side=Xe):S.renderBufferDirect(V,F,G,O,M,ut),M.onAfterRender(S,F,V,G,O,ut)}function Ns(M,F,V){F.isScene!==!0&&(F=Rt);const G=St.get(M),O=f.state.lights,ut=f.state.shadowsArray,Tt=O.state.version,Ct=k.getParameters(M,O.state,ut,F,V),Pt=k.getProgramCacheKey(Ct);let zt=G.programs;G.environment=M.isMeshStandardMaterial?F.environment:null,G.fog=F.fog,G.envMap=(M.isMeshStandardMaterial?z:g).get(M.envMap||G.environment),G.envMapRotation=G.environment!==null&&M.envMap===null?F.environmentRotation:M.envMapRotation,zt===void 0&&(M.addEventListener("dispose",kt),zt=new Map,G.programs=zt);let Gt=zt.get(Pt);if(Gt!==void 0){if(G.currentProgram===Gt&&G.lightsStateVersion===Tt)return qo(M,Ct),Gt}else Ct.uniforms=k.getUniforms(M),M.onBeforeCompile(Ct,S),Gt=k.acquireProgram(Ct,Pt),zt.set(Pt,Gt),G.uniforms=Ct.uniforms;const Lt=G.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Lt.clippingPlanes=rt.uniform),qo(M,Ct),G.needsLights=vh(M),G.lightsStateVersion=Tt,G.needsLights&&(Lt.ambientLightColor.value=O.state.ambient,Lt.lightProbe.value=O.state.probe,Lt.directionalLights.value=O.state.directional,Lt.directionalLightShadows.value=O.state.directionalShadow,Lt.spotLights.value=O.state.spot,Lt.spotLightShadows.value=O.state.spotShadow,Lt.rectAreaLights.value=O.state.rectArea,Lt.ltc_1.value=O.state.rectAreaLTC1,Lt.ltc_2.value=O.state.rectAreaLTC2,Lt.pointLights.value=O.state.point,Lt.pointLightShadows.value=O.state.pointShadow,Lt.hemisphereLights.value=O.state.hemi,Lt.directionalShadowMap.value=O.state.directionalShadowMap,Lt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Lt.spotShadowMap.value=O.state.spotShadowMap,Lt.spotLightMatrix.value=O.state.spotLightMatrix,Lt.spotLightMap.value=O.state.spotLightMap,Lt.pointShadowMap.value=O.state.pointShadowMap,Lt.pointShadowMatrix.value=O.state.pointShadowMatrix),G.currentProgram=Gt,G.uniformsList=null,Gt}function Yo(M){if(M.uniformsList===null){const F=M.currentProgram.getUniforms();M.uniformsList=br.seqWithValue(F.seq,M.uniforms)}return M.uniformsList}function qo(M,F){const V=St.get(M);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.batchingColor=F.batchingColor,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.instancingMorph=F.instancingMorph,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function _h(M,F,V,G,O){F.isScene!==!0&&(F=Rt),E.resetTextureUnits();const ut=F.fog,Tt=G.isMeshStandardMaterial?F.environment:null,Ct=D===null?S.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:is,Pt=(G.isMeshStandardMaterial?z:g).get(G.envMap||Tt),zt=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Gt=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Lt=!!V.morphAttributes.position,jt=!!V.morphAttributes.normal,ae=!!V.morphAttributes.color;let oe=jn;G.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(oe=S.toneMapping);const Ne=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Jt=Ne!==void 0?Ne.length:0,Dt=St.get(G),Sn=f.state.lights;if(q===!0&&(tt===!0||M!==x)){const qe=M===x&&G.id===y;rt.setState(G,M,qe)}let Qt=!1;G.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==Sn.state.version||Dt.outputColorSpace!==Ct||O.isBatchedMesh&&Dt.batching===!1||!O.isBatchedMesh&&Dt.batching===!0||O.isBatchedMesh&&Dt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Dt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Dt.instancing===!1||!O.isInstancedMesh&&Dt.instancing===!0||O.isSkinnedMesh&&Dt.skinning===!1||!O.isSkinnedMesh&&Dt.skinning===!0||O.isInstancedMesh&&Dt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Dt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Dt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Dt.instancingMorph===!1&&O.morphTexture!==null||Dt.envMap!==Pt||G.fog===!0&&Dt.fog!==ut||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==rt.numPlanes||Dt.numIntersection!==rt.numIntersection)||Dt.vertexAlphas!==zt||Dt.vertexTangents!==Gt||Dt.morphTargets!==Lt||Dt.morphNormals!==jt||Dt.morphColors!==ae||Dt.toneMapping!==oe||Dt.morphTargetsCount!==Jt)&&(Qt=!0):(Qt=!0,Dt.__version=G.version);let tn=Dt.currentProgram;Qt===!0&&(tn=Ns(G,F,O));let Mi=!1,Ve=!1,os=!1;const le=tn.getUniforms(),hn=Dt.uniforms;if(xt.useProgram(tn.program)&&(Mi=!0,Ve=!0,os=!0),G.id!==y&&(y=G.id,Ve=!0),Mi||x!==M){xt.buffers.depth.getReversed()?(K.copy(M.projectionMatrix),bu(K),Tu(K),le.setValue(C,"projectionMatrix",K)):le.setValue(C,"projectionMatrix",M.projectionMatrix),le.setValue(C,"viewMatrix",M.matrixWorldInverse);const Fn=le.map.cameraPosition;Fn!==void 0&&Fn.setValue(C,ft.setFromMatrixPosition(M.matrixWorld)),Mt.logarithmicDepthBuffer&&le.setValue(C,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&le.setValue(C,"isOrthographic",M.isOrthographicCamera===!0),x!==M&&(x=M,Ve=!0,os=!0)}if(O.isSkinnedMesh){le.setOptional(C,O,"bindMatrix"),le.setOptional(C,O,"bindMatrixInverse");const qe=O.skeleton;qe&&(qe.boneTexture===null&&qe.computeBoneTexture(),le.setValue(C,"boneTexture",qe.boneTexture,E))}O.isBatchedMesh&&(le.setOptional(C,O,"batchingTexture"),le.setValue(C,"batchingTexture",O._matricesTexture,E),le.setOptional(C,O,"batchingIdTexture"),le.setValue(C,"batchingIdTexture",O._indirectTexture,E),le.setOptional(C,O,"batchingColorTexture"),O._colorsTexture!==null&&le.setValue(C,"batchingColorTexture",O._colorsTexture,E));const ls=V.morphAttributes;if((ls.position!==void 0||ls.normal!==void 0||ls.color!==void 0)&&It.update(O,V,tn),(Ve||Dt.receiveShadow!==O.receiveShadow)&&(Dt.receiveShadow=O.receiveShadow,le.setValue(C,"receiveShadow",O.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(hn.envMap.value=Pt,hn.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&F.environment!==null&&(hn.envMapIntensity.value=F.environmentIntensity),Ve&&(le.setValue(C,"toneMappingExposure",S.toneMappingExposure),Dt.needsLights&&gh(hn,os),ut&&G.fog===!0&&B.refreshFogUniforms(hn,ut),B.refreshMaterialUniforms(hn,G,W,et,f.state.transmissionRenderTarget[M.id]),br.upload(C,Yo(Dt),hn,E)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(br.upload(C,Yo(Dt),hn,E),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&le.setValue(C,"center",O.center),le.setValue(C,"modelViewMatrix",O.modelViewMatrix),le.setValue(C,"normalMatrix",O.normalMatrix),le.setValue(C,"modelMatrix",O.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const qe=G.uniformsGroups;for(let Fn=0,On=qe.length;Fn<On;Fn++){const jo=qe[Fn];U.update(jo,tn),U.bind(jo,tn)}}return tn}function gh(M,F){M.ambientLightColor.needsUpdate=F,M.lightProbe.needsUpdate=F,M.directionalLights.needsUpdate=F,M.directionalLightShadows.needsUpdate=F,M.pointLights.needsUpdate=F,M.pointLightShadows.needsUpdate=F,M.spotLights.needsUpdate=F,M.spotLightShadows.needsUpdate=F,M.rectAreaLights.needsUpdate=F,M.hemisphereLights.needsUpdate=F}function vh(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(M,F,V){St.get(M.texture).__webglTexture=F,St.get(M.depthTexture).__webglTexture=V;const G=St.get(M);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||Ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,F){const V=St.get(M);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(M,F=0,V=0){D=M,P=F,R=V;let G=!0,O=null,ut=!1,Tt=!1;if(M){const Pt=St.get(M);if(Pt.__useDefaultFramebuffer!==void 0)xt.bindFramebuffer(C.FRAMEBUFFER,null),G=!1;else if(Pt.__webglFramebuffer===void 0)E.setupRenderTarget(M);else if(Pt.__hasExternalTextures)E.rebindTextures(M,St.get(M.texture).__webglTexture,St.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Lt=M.depthTexture;if(Pt.__boundDepthTexture!==Lt){if(Lt!==null&&St.has(Lt)&&(M.width!==Lt.image.width||M.height!==Lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(M)}}const zt=M.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(Tt=!0);const Gt=St.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Gt[F])?O=Gt[F][V]:O=Gt[F],ut=!0):M.samples>0&&E.useMultisampledRTT(M)===!1?O=St.get(M).__webglMultisampledFramebuffer:Array.isArray(Gt)?O=Gt[V]:O=Gt,A.copy(M.viewport),X.copy(M.scissor),H=M.scissorTest}else A.copy(ht).multiplyScalar(W).floor(),X.copy(nt).multiplyScalar(W).floor(),H=dt;if(xt.bindFramebuffer(C.FRAMEBUFFER,O)&&G&&xt.drawBuffers(M,O),xt.viewport(A),xt.scissor(X),xt.setScissorTest(H),ut){const Pt=St.get(M.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+F,Pt.__webglTexture,V)}else if(Tt){const Pt=St.get(M.texture),zt=F||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Pt.__webglTexture,V||0,zt)}y=-1},this.readRenderTargetPixels=function(M,F,V,G,O,ut,Tt){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=St.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Tt!==void 0&&(Ct=Ct[Tt]),Ct){xt.bindFramebuffer(C.FRAMEBUFFER,Ct);try{const Pt=M.texture,zt=Pt.format,Gt=Pt.type;if(!Mt.textureFormatReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Mt.textureTypeReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=M.width-G&&V>=0&&V<=M.height-O&&C.readPixels(F,V,G,O,Ot.convert(zt),Ot.convert(Gt),ut)}finally{const Pt=D!==null?St.get(D).__webglFramebuffer:null;xt.bindFramebuffer(C.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(M,F,V,G,O,ut,Tt){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=St.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Tt!==void 0&&(Ct=Ct[Tt]),Ct){const Pt=M.texture,zt=Pt.format,Gt=Pt.type;if(!Mt.textureFormatReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Mt.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=M.width-G&&V>=0&&V<=M.height-O){xt.bindFramebuffer(C.FRAMEBUFFER,Ct);const Lt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Lt),C.bufferData(C.PIXEL_PACK_BUFFER,ut.byteLength,C.STREAM_READ),C.readPixels(F,V,G,O,Ot.convert(zt),Ot.convert(Gt),0);const jt=D!==null?St.get(D).__webglFramebuffer:null;xt.bindFramebuffer(C.FRAMEBUFFER,jt);const ae=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Eu(C,ae,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Lt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,ut),C.deleteBuffer(Lt),C.deleteSync(ae),ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,F=null,V=0){M.isTexture!==!0&&(gs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,M=arguments[1]);const G=Math.pow(2,-V),O=Math.floor(M.image.width*G),ut=Math.floor(M.image.height*G),Tt=F!==null?F.x:0,Ct=F!==null?F.y:0;E.setTexture2D(M,0),C.copyTexSubImage2D(C.TEXTURE_2D,V,0,0,Tt,Ct,O,ut),xt.unbindTexture()},this.copyTextureToTexture=function(M,F,V=null,G=null,O=0){M.isTexture!==!0&&(gs("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,M=arguments[1],F=arguments[2],O=arguments[3]||0,V=null);let ut,Tt,Ct,Pt,zt,Gt,Lt,jt,ae;const oe=M.isCompressedTexture?M.mipmaps[O]:M.image;V!==null?(ut=V.max.x-V.min.x,Tt=V.max.y-V.min.y,Ct=V.isBox3?V.max.z-V.min.z:1,Pt=V.min.x,zt=V.min.y,Gt=V.isBox3?V.min.z:0):(ut=oe.width,Tt=oe.height,Ct=oe.depth||1,Pt=0,zt=0,Gt=0),G!==null?(Lt=G.x,jt=G.y,ae=G.z):(Lt=0,jt=0,ae=0);const Ne=Ot.convert(F.format),Jt=Ot.convert(F.type);let Dt;F.isData3DTexture?(E.setTexture3D(F,0),Dt=C.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(E.setTexture2DArray(F,0),Dt=C.TEXTURE_2D_ARRAY):(E.setTexture2D(F,0),Dt=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,F.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,F.unpackAlignment);const Sn=C.getParameter(C.UNPACK_ROW_LENGTH),Qt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),tn=C.getParameter(C.UNPACK_SKIP_PIXELS),Mi=C.getParameter(C.UNPACK_SKIP_ROWS),Ve=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,oe.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,oe.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Pt),C.pixelStorei(C.UNPACK_SKIP_ROWS,zt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Gt);const os=M.isDataArrayTexture||M.isData3DTexture,le=F.isDataArrayTexture||F.isData3DTexture;if(M.isRenderTargetTexture||M.isDepthTexture){const hn=St.get(M),ls=St.get(F),qe=St.get(hn.__renderTarget),Fn=St.get(ls.__renderTarget);xt.bindFramebuffer(C.READ_FRAMEBUFFER,qe.__webglFramebuffer),xt.bindFramebuffer(C.DRAW_FRAMEBUFFER,Fn.__webglFramebuffer);for(let On=0;On<Ct;On++)os&&C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,St.get(M).__webglTexture,O,Gt+On),M.isDepthTexture?(le&&C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,St.get(F).__webglTexture,O,ae+On),C.blitFramebuffer(Pt,zt,ut,Tt,Lt,jt,ut,Tt,C.DEPTH_BUFFER_BIT,C.NEAREST)):le?C.copyTexSubImage3D(Dt,O,Lt,jt,ae+On,Pt,zt,ut,Tt):C.copyTexSubImage2D(Dt,O,Lt,jt,ae+On,Pt,zt,ut,Tt);xt.bindFramebuffer(C.READ_FRAMEBUFFER,null),xt.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else le?M.isDataTexture||M.isData3DTexture?C.texSubImage3D(Dt,O,Lt,jt,ae,ut,Tt,Ct,Ne,Jt,oe.data):F.isCompressedArrayTexture?C.compressedTexSubImage3D(Dt,O,Lt,jt,ae,ut,Tt,Ct,Ne,oe.data):C.texSubImage3D(Dt,O,Lt,jt,ae,ut,Tt,Ct,Ne,Jt,oe):M.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,O,Lt,jt,ut,Tt,Ne,Jt,oe.data):M.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,O,Lt,jt,oe.width,oe.height,Ne,oe.data):C.texSubImage2D(C.TEXTURE_2D,O,Lt,jt,ut,Tt,Ne,Jt,oe);C.pixelStorei(C.UNPACK_ROW_LENGTH,Sn),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Qt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,tn),C.pixelStorei(C.UNPACK_SKIP_ROWS,Mi),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ve),O===0&&F.generateMipmaps&&C.generateMipmap(Dt),xt.unbindTexture()},this.copyTextureToTexture3D=function(M,F,V=null,G=null,O=0){return M.isTexture!==!0&&(gs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,G=arguments[1]||null,M=arguments[2],F=arguments[3],O=arguments[4]||0),gs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,F,V,G,O)},this.initRenderTarget=function(M){St.get(M).__webglFramebuffer===void 0&&E.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?E.setTextureCube(M,0):M.isData3DTexture?E.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?E.setTexture2DArray(M,0):E.setTexture2D(M,0),xt.unbindTexture()},this.resetState=function(){P=0,R=0,D=null,xt.reset(),te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=qt._getUnpackColorSpace()}}class N_ extends me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Zc{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=mo,this.updateRanges=[],this.version=0,this.uuid=Dn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ce=new L;class gn{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=an(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ee(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=an(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=an(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=an(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=an(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),s=ee(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),s=ee(s,this.array),r=ee(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new he(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new gn(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class rs extends Qn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ni;const fs=new L,Fi=new L,Oi=new L,Bi=new Nt,ps=new Nt,Jc=new ne,ir=new L,ms=new L,sr=new L,ql=new Nt,ga=new Nt,jl=new Nt;class Ls extends me{constructor(t=new rs){if(super(),this.isSprite=!0,this.type="Sprite",Ni===void 0){Ni=new ce;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Zc(e,5);Ni.setIndex([0,1,2,0,2,3]),Ni.setAttribute("position",new gn(n,3,0,!1)),Ni.setAttribute("uv",new gn(n,2,3,!1))}this.geometry=Ni,this.material=t,this.center=new Nt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Fi.setFromMatrixScale(this.matrixWorld),Jc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Oi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Fi.multiplyScalar(-Oi.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;rr(ir.set(-.5,-.5,0),Oi,a,Fi,s,r),rr(ms.set(.5,-.5,0),Oi,a,Fi,s,r),rr(sr.set(.5,.5,0),Oi,a,Fi,s,r),ql.set(0,0),ga.set(1,0),jl.set(1,1);let o=t.ray.intersectTriangle(ir,ms,sr,!1,fs);if(o===null&&(rr(ms.set(-.5,.5,0),Oi,a,Fi,s,r),ga.set(0,1),o=t.ray.intersectTriangle(ir,sr,ms,!1,fs),o===null))return;const l=t.ray.origin.distanceTo(fs);l<t.near||l>t.far||e.push({distance:l,point:fs.clone(),uv:Je.getInterpolation(fs,ir,ms,sr,ql,ga,jl,new Nt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function rr(i,t,e,n,s,r){Bi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(ps.x=r*Bi.x-s*Bi.y,ps.y=s*Bi.x+r*Bi.y):ps.copy(Bi),i.copy(t),i.x+=ps.x,i.y+=ps.y,i.applyMatrix4(Jc)}class Nn extends Qn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Lr=new L,Dr=new L,$l=new ne,_s=new Cs,ar=new xi,va=new L,Kl=new L;class kr extends me{constructor(t=new ce,e=new Nn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Lr.fromBufferAttribute(e,s-1),Dr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Lr.distanceTo(Dr);t.setAttribute("lineDistance",new ue(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ar.copy(n.boundingSphere),ar.applyMatrix4(s),ar.radius+=r,t.ray.intersectsSphere(ar)===!1)return;$l.copy(s).invert(),_s.copy(t.ray).applyMatrix4($l);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const m=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let v=m,p=_-1;v<p;v+=c){const f=h.getX(v),w=h.getX(v+1),b=or(this,t,_s,l,f,w);b&&e.push(b)}if(this.isLineLoop){const v=h.getX(_-1),p=h.getX(m),f=or(this,t,_s,l,v,p);f&&e.push(f)}}else{const m=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let v=m,p=_-1;v<p;v+=c){const f=or(this,t,_s,l,v,v+1);f&&e.push(f)}if(this.isLineLoop){const v=or(this,t,_s,l,_-1,m);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function or(i,t,e,n,s,r){const a=i.geometry.attributes.position;if(Lr.fromBufferAttribute(a,s),Dr.fromBufferAttribute(a,r),e.distanceSqToSegment(Lr,Dr,va,Kl)>n)return;va.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(va);if(!(l<t.near||l>t.far))return{distance:l,point:Kl.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Zl=new L,Jl=new L;class $n extends kr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Zl.fromBufferAttribute(e,s),Jl.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Zl.distanceTo(Jl);t.setAttribute("lineDistance",new ue(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class F_ extends Qn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ql=new ne,go=new Cs,lr=new xi,cr=new L;class O_ extends me{constructor(t=new ce,e=new F_){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),lr.copy(n.boundingSphere),lr.applyMatrix4(s),lr.radius+=r,t.ray.intersectsSphere(lr)===!1)return;Ql.copy(s).invert(),go.copy(t.ray).applyMatrix4(Ql);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let _=d,v=m;_<v;_++){const p=c.getX(_);cr.fromBufferAttribute(u,p),tc(cr,p,l,s,t,e,this)}}else{const d=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let _=d,v=m;_<v;_++)cr.fromBufferAttribute(u,_),tc(cr,_,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function tc(i,t,e,n,s,r,a){const o=go.distanceSqToPoint(i);if(o<e){const l=new L;go.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Ds extends Ie{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Fo extends ce{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let u=t;const d=(e-t)/s,m=new L,_=new Nt;for(let v=0;v<=s;v++){for(let p=0;p<=n;p++){const f=r+p/n*a;m.x=u*Math.cos(f),m.y=u*Math.sin(f),l.push(m.x,m.y,m.z),c.push(0,0,1),_.x=(m.x/e+1)/2,_.y=(m.y/e+1)/2,h.push(_.x,_.y)}u+=d}for(let v=0;v<s;v++){const p=v*(n+1);for(let f=0;f<n;f++){const w=f+p,b=w,S=w+n+1,N=w+n+2,P=w+1;o.push(b,S,P),o.push(S,N,P)}}this.setIndex(o),this.setAttribute("position",new ue(l,3)),this.setAttribute("normal",new ue(c,3)),this.setAttribute("uv",new ue(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fo(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class B_ extends ce{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],n=new Set,s=new L,r=new L;if(t.index!==null){const a=t.attributes.position,o=t.index;let l=t.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const u=l[c],d=u.start,m=u.count;for(let _=d,v=d+m;_<v;_+=3)for(let p=0;p<3;p++){const f=o.getX(_+p),w=o.getX(_+(p+1)%3);s.fromBufferAttribute(a,f),r.fromBufferAttribute(a,w),ec(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{const a=t.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const h=3*o+c,u=3*o+(c+1)%3;s.fromBufferAttribute(a,h),r.fromBufferAttribute(a,u),ec(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new ue(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function ec(i,t,e){const n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}class Qc extends Qn{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dc,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=bo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class z_ extends Nn{static get type(){return"LineDashedMaterial"}constructor(t){super(),this.isLineDashedMaterial=!0,this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}class th extends me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const xa=new ne,nc=new L,ic=new L;class k_{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Nt(512,512),this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Io,this._frameExtents=new Nt(1,1),this._viewportCount=1,this._viewports=[new re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;nc.setFromMatrixPosition(t.matrixWorld),e.position.copy(nc),ic.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ic),e.updateMatrixWorld(),xa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(xa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class H_ extends k_{constructor(){super(new Xc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class V_ extends th{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(me.DEFAULT_UP),this.updateMatrix(),this.target=new me,this.shadow=new H_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class G_ extends th{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class W_ extends ce{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class vo extends Zc{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}const sc=new ne;class X_{constructor(t,e,n=0,s=1/0){this.ray=new Cs(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Do,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return sc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(sc),this}intersectObject(t,e=!0,n=[]){return xo(t,this,n,e),n.sort(rc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)xo(t[s],this,n,e);return n.sort(rc),n}}function rc(i,t){return i.distance-t.distance}function xo(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)xo(r[a],t,e,!0)}}class ac{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Te(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const oc=new L,hr=new L;class Y_{constructor(t=new L,e=new L){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){oc.subVectors(t,this.start),hr.subVectors(this.end,this.start);const n=hr.dot(hr);let r=hr.dot(oc)/n;return e&&(r=Te(r,0,1)),r}closestPointToPoint(t,e,n){const s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class q_ extends vi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Eo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Eo);const lc={type:"change"},Oo={type:"start"},eh={type:"end"},ur=new Cs,cc=new Wn,j_=Math.cos(70*Ic.DEG2RAD),fe=new L,Fe=2*Math.PI,se={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ma=1e-6;class $_ extends q_{constructor(t,e=null){super(t,e),this.state=se.NONE,this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Yi.ROTATE,MIDDLE:Yi.DOLLY,RIGHT:Yi.PAN},this.touches={ONE:Wi.ROTATE,TWO:Wi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new _i,this._lastTargetPosition=new L,this._quat=new _i().setFromUnitVectors(t.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ac,this._sphericalDelta=new ac,this._scale=1,this._panOffset=new L,this._rotateStart=new Nt,this._rotateEnd=new Nt,this._rotateDelta=new Nt,this._panStart=new Nt,this._panEnd=new Nt,this._panDelta=new Nt,this._dollyStart=new Nt,this._dollyEnd=new Nt,this._dollyDelta=new Nt,this._dollyDirection=new L,this._mouse=new Nt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Z_.bind(this),this._onPointerDown=K_.bind(this),this._onPointerUp=J_.bind(this),this._onContextMenu=rg.bind(this),this._onMouseWheel=eg.bind(this),this._onKeyDown=ng.bind(this),this._onTouchStart=ig.bind(this),this._onTouchMove=sg.bind(this),this._onMouseDown=Q_.bind(this),this._onMouseMove=tg.bind(this),this._interceptControlDown=ag.bind(this),this._interceptControlUp=og.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(lc),this.update(),this.state=se.NONE}update(t=null){const e=this.object.position;fe.copy(e).sub(this.target),fe.applyQuaternion(this._quat),this._spherical.setFromVector3(fe),this.autoRotate&&this.state===se.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Fe:n>Math.PI&&(n-=Fe),s<-Math.PI?s+=Fe:s>Math.PI&&(s-=Fe),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(fe.setFromSpherical(this._spherical),fe.applyQuaternion(this._quatInverse),e.copy(this.target).add(fe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=fe.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new L(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new L(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=fe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(ur.origin.copy(this.object.position),ur.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ur.direction))<j_?this.object.lookAt(this.target):(cc.setFromNormalAndCoplanarPoint(this.object.up,this.target),ur.intersectPlane(cc,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ma||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ma||this._lastTargetPosition.distanceToSquared(this.target)>Ma?(this.dispatchEvent(lc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Fe/60*this.autoRotateSpeed*t:Fe/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){fe.setFromMatrixColumn(e,0),fe.multiplyScalar(-t),this._panOffset.add(fe)}_panUp(t,e){this.screenSpacePanning===!0?fe.setFromMatrixColumn(e,1):(fe.setFromMatrixColumn(e,0),fe.crossVectors(this.object.up,fe)),fe.multiplyScalar(t),this._panOffset.add(fe)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;fe.copy(s).sub(this.target);let r=fe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Fe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Fe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Fe*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Fe*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Fe*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Fe*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Fe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Fe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Nt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function K_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Z_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function J_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(eh),this.state=se.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Q_(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Yi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=se.DOLLY;break;case Yi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=se.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=se.ROTATE}break;case Yi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=se.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=se.PAN}break;default:this.state=se.NONE}this.state!==se.NONE&&this.dispatchEvent(Oo)}function tg(i){switch(this.state){case se.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case se.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case se.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function eg(i){this.enabled===!1||this.enableZoom===!1||this.state!==se.NONE||(i.preventDefault(),this.dispatchEvent(Oo),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(eh))}function ng(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function ig(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Wi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=se.TOUCH_ROTATE;break;case Wi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=se.TOUCH_PAN;break;default:this.state=se.NONE}break;case 2:switch(this.touches.TWO){case Wi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=se.TOUCH_DOLLY_PAN;break;case Wi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=se.TOUCH_DOLLY_ROTATE;break;default:this.state=se.NONE}break;default:this.state=se.NONE}this.state!==se.NONE&&this.dispatchEvent(Oo)}function sg(i){switch(this._trackPointer(i),this.state){case se.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case se.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case se.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case se.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=se.NONE}}function rg(i){this.enabled!==!1&&i.preventDefault()}function ag(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function og(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const pn={PS:"#ff6fd8",EU:"#33d6e8"},lg={"ON-PS":{color:"#ffffff",label:"琉球海溝",at:[123.6,23.45],edu:"ryu"},"PS/SU":{color:"#ffffff",label:"馬尼拉海溝",at:[120.32,21.05],edu:"man"},"YA-ON":{color:"#b6ff7a",label:"沖繩海槽",at:[123.2,25.05],edu:"oki"},"PS-YA":{color:"#ffd166",label:"碰撞帶（示意）",at:[120.43,21.85],edu:"col"},"YA-SU":{color:"#8899aa",label:null}},cg={PS:"PS",YA:"EU",SU:"EU",ON:"EU",EU:"EU"};function hc(i,t,e=1){const r=document.createElement("canvas"),a=r.getContext("2d");a.font='bold 44px system-ui, "Noto Sans TC", sans-serif',r.width=Math.ceil(a.measureText(i).width)+24,r.height=68,a.font='bold 44px system-ui, "Noto Sans TC", sans-serif',a.fillStyle="rgba(8,12,20,0.6)",a.fillRect(0,0,r.width,r.height),a.fillStyle=t,a.textBaseline="middle",a.fillText(i,12,r.height/2);const o=new Ds(r);o.colorSpace=be;const l=new Ls(new rs({map:o,depthTest:!1,depthWrite:!1,transparent:!0})),c=14*e;return l.scale.set(c*r.width/r.height,c,1),l.renderOrder=10,l}async function hg({scene:i,lid:t,toX:e,toZ:n,DEPTH_SCALE:s,TERRAIN_EXAG:r,LAND_EXAG:a=r}){var W;const[o,l,c,h]=await Promise.all([fetch("./data/plates.json").then($=>$.json()),fetch("./data/terrain_meta.json").then($=>$.json()),fetch("./data/terrain_int16.bin").then($=>$.arrayBuffer()),fetch("./data/plates_grid.bin").then($=>$.arrayBuffer())]),u=new Int16Array(c),d=new Uint8Array(h),{rows:m,cols:_,lat_first:v,lat_last:p,lon_first:f,lon_last:w}=l;let b=!1;const S=$=>$/1e3*s*(b?1:$>0?a:r),N=($,lt)=>{const ht=($-f)/(w-f)*(_-1),nt=(lt-v)/(p-v)*(m-1),dt=Math.max(0,Math.min(_-2,Math.floor(ht))),I=Math.max(0,Math.min(m-2,Math.floor(nt))),q=Math.min(1,Math.max(0,ht-dt)),tt=Math.min(1,Math.max(0,nt-I)),K=(ot,ft)=>u[ot*_+ft];return(K(I,dt)*(1-q)+K(I,dt+1)*q)*(1-tt)+(K(I+1,dt)*(1-q)+K(I+1,dt+1)*q)*tt},P=[],R=new Qe;R.visible=!1,t.add(R);const D=new Qe;D.visible=!1,i.add(D);{const $=new Float32Array(m*_*3),lt=new Float32Array(m*_*4),ht=new Vt(pn.PS),nt=new Vt(pn.EU),dt=o.plate_grid.codes;for(let ot=0;ot<m;ot++){const ft=v+(p-v)*ot/(m-1);for(let gt=0;gt<_;gt++){const Rt=f+(w-f)*gt/(_-1),pt=ot*_+gt;$[pt*3]=e(Rt),$[pt*3+1]=S(u[pt])+.6,$[pt*3+2]=n(ft);const At=d[pt]?cg[dt[d[pt]-1]]:null,C=At==="PS"?ht:nt;lt[pt*4]=C.r,lt[pt*4+1]=C.g,lt[pt*4+2]=C.b,lt[pt*4+3]=At&&u[pt]<=0?1:0}}const I=[];for(let ot=0;ot<m-1;ot++)for(let ft=0;ft<_-1;ft++){const gt=ot*_+ft,Rt=gt+1,pt=gt+_,At=pt+1;I.push(gt,pt,Rt,Rt,pt,At)}const q=new ce;q.setAttribute("position",new he($,3)),q.setAttribute("color",new he(lt,4)),q.setIndex(I);const tt=new Or({vertexColors:!0,transparent:!0,opacity:.28,side:Xe,depthWrite:!1}),K=new ze(q,tt);K.renderOrder=4,R.add(K),P.push(()=>{for(let ot=0;ot<m*_;ot++)$[ot*3+1]=S(u[ot])+.6;q.attributes.position.needsUpdate=!0})}const y={},x=[];for(const $ of o.boundaries)(y[W=$.id]||(y[W]=[])).push($.coords);for(const[$,lt]of Object.entries(y)){const ht=lg[$]||{color:"#8899aa"},nt=[],dt=[];for(const tt of lt)for(let K=0;K<tt.length-1;K++){const[ot,ft]=tt[K],[gt,Rt]=tt[K+1],pt=Math.max(1,Math.ceil(Math.hypot(gt-ot,Rt-ft)/.02));for(let At=0;At<pt;At++){const C=At/pt,Kt=(At+1)/pt,Ft=[ot+(gt-ot)*C,ft+(Rt-ft)*C],Mt=[ot+(gt-ot)*Kt,ft+(Rt-ft)*Kt],xt=N(Ft[0],Ft[1]),Bt=N(Mt[0],Mt[1]);dt.push(xt,Bt),nt.push(e(Ft[0]),S(xt)+1.2,n(Ft[1]),e(Mt[0]),S(Bt)+1.2,n(Mt[1]))}}const I=new ce;I.setAttribute("position",new ue(nt,3));const q=new $n(I,new Nn({color:ht.color,transparent:!0,opacity:.95,depthWrite:!1}));if(q.renderOrder=5,R.add(q),P.push(()=>{const tt=I.attributes.position;for(let K=0;K<dt.length;K++)tt.array[K*3+1]=S(dt[K])+1.2;tt.needsUpdate=!0}),ht.label){const tt=hc(ht.label,ht.color,.85);tt.userData.edu=ht.edu,x.push(tt),tt.position.set(e(ht.at[0]),22,n(ht.at[1])),R.add(tt),P.push(()=>{tt.position.y=b?6:22})}}for(const[$,lt,ht,nt,dt]of[["菲律賓海板塊",pn.PS,123,21.6,"ps"],["歐亞板塊",pn.EU,119.2,25.9,"eu"]]){const I=hc($,lt,1.3);I.userData.edu=dt,x.push(I),I.position.set(e(ht),30,n(nt)),R.add(I),P.push(()=>{I.position.y=b?8:30})}const A={ryu:pn.PS,man:pn.EU};for(const $ of o.slabs){const{lon0:lt,lat0:ht,dlon:nt,dlat:dt,cols:I,rows:q,depth:tt}=$,K=new Float32Array(I*q*3);for(let Mt=0;Mt<q;Mt++)for(let xt=0;xt<I;xt++){const Bt=Mt*I+xt,St=tt[Bt];K[Bt*3]=e(lt+xt*nt),K[Bt*3+1]=St==null?0:-St*s,K[Bt*3+2]=n(ht+Mt*dt)}const ot=[],ft=Mt=>tt[Mt]!=null;for(let Mt=0;Mt<q-1;Mt++)for(let xt=0;xt<I-1;xt++){const Bt=Mt*I+xt,St=Bt+1,E=Bt+I,g=E+1;ft(Bt)&&ft(E)&&ft(St)&&ot.push(Bt,E,St),ft(St)&&ft(E)&&ft(g)&&ot.push(St,E,g)}const gt=new ce;gt.setAttribute("position",new he(K,3)),gt.setIndex(ot),gt.computeVertexNormals();const Rt=new ze(gt,new Qc({color:A[$.id],transparent:!0,opacity:.3,side:Xe,depthWrite:!1}));Rt.renderOrder=1,D.add(Rt);const pt=[],At=[];for(let Mt=50;Mt<$.dmax;Mt+=50)At.push(Mt);const C=(Mt,xt)=>[lt+xt*nt,ht+Mt*dt];for(let Mt=0;Mt<q-1;Mt++)for(let xt=0;xt<I-1;xt++){const Bt=[[Mt,xt],[Mt,xt+1],[Mt+1,xt+1],[Mt+1,xt]],St=Bt.map(([E,g])=>tt[E*I+g]);if(!St.some(E=>E==null))for(const E of At){const g=[];for(let z=0;z<4;z++){const J=St[z],st=St[(z+1)%4];if(J<E==st<E)continue;const T=(E-J)/(st-J),[k,B]=Bt[z],[at,ct]=Bt[(z+1)%4],[rt,mt]=C(k+(at-k)*T,B+(ct-B)*T);g.push(e(rt),-E*s,n(mt))}g.length>=6&&pt.push(...g.slice(0,6))}}const Kt=new ce;Kt.setAttribute("position",new ue(pt,3));const Ft=new $n(Kt,new Nn({color:A[$.id],transparent:!0,opacity:.55,depthWrite:!1}));Ft.renderOrder=1,D.add(Ft)}const X=$=>{R.visible=$,D.visible=$},H=$=>{b!==!!$&&(b=!!$,P.forEach(lt=>lt()))},Z=new X_,Q=new Nt;return{setVisible:X,setReal:H,pickLabel:($,lt,ht)=>{if(!R.visible)return null;Q.set($/innerWidth*2-1,-(lt/innerHeight)*2+1),Z.setFromCamera(Q,ht);const nt=Z.intersectObjects(x,!1)[0];return nt?nt.object.userData.edu:null},labelScreen:$=>x.map(lt=>{const ht=new L;return lt.getWorldPosition(ht),ht.project($),{edu:lt.userData.edu,x:(ht.x+1)/2*innerWidth,y:(1-ht.y)/2*innerHeight,z:ht.z}}),slabs:o.slabs.map($=>({id:$.id,valid:$.valid,dmax:$.dmax})),boundaries:Object.keys(y)}}const uc=new Jn,dr=new L;class nh extends W_{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new ue(t,3)),this.setAttribute("uv",new ue(e,2))}applyMatrix4(t){const e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const n=new vo(e,6,1);return this.setAttribute("instanceStart",new gn(n,3,0)),this.setAttribute("instanceEnd",new gn(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const n=new vo(e,6,1);return this.setAttribute("instanceColorStart",new gn(n,3,0)),this.setAttribute("instanceColorEnd",new gn(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new B_(t.geometry)),this}fromLineSegments(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jn);const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),uc.setFromBufferAttribute(e),this.boundingBox.union(uc))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xi),this.boundingBox===null&&this.computeBoundingBox();const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)dr.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(dr)),dr.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(dr));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(t){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(t)}}_t.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Nt(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Be.line={uniforms:Uo.merge([_t.common,_t.fog,_t.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class ys extends xn{static get type(){return"LineMaterial"}constructor(t){super({uniforms:Uo.clone(Be.line.uniforms),vertexShader:Be.line.vertexShader,fragmentShader:Be.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const ya=new re,dc=new L,fc=new L,ye=new re,Se=new re,un=new re,Sa=new L,Ea=new ne,Ee=new Y_,pc=new L,fr=new Jn,pr=new xi,dn=new re;let mn,fi;function mc(i,t,e){return dn.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),dn.multiplyScalar(1/dn.w),dn.x=fi/e.width,dn.y=fi/e.height,dn.applyMatrix4(i.projectionMatrixInverse),dn.multiplyScalar(1/dn.w),Math.abs(Math.max(dn.x,dn.y))}function ug(i,t){const e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,a=Math.min(n.instanceCount,s.count);for(let o=0,l=a;o<l;o++){Ee.start.fromBufferAttribute(s,o),Ee.end.fromBufferAttribute(r,o),Ee.applyMatrix4(e);const c=new L,h=new L;mn.distanceSqToSegment(Ee.start,Ee.end,h,c),h.distanceTo(c)<fi*.5&&t.push({point:h,pointOnLine:c,distance:mn.origin.distanceTo(h),object:i,face:null,faceIndex:o,uv:null,uv1:null})}}function dg(i,t,e){const n=t.projectionMatrix,r=i.material.resolution,a=i.matrixWorld,o=i.geometry,l=o.attributes.instanceStart,c=o.attributes.instanceEnd,h=Math.min(o.instanceCount,l.count),u=-t.near;mn.at(1,un),un.w=1,un.applyMatrix4(t.matrixWorldInverse),un.applyMatrix4(n),un.multiplyScalar(1/un.w),un.x*=r.x/2,un.y*=r.y/2,un.z=0,Sa.copy(un),Ea.multiplyMatrices(t.matrixWorldInverse,a);for(let d=0,m=h;d<m;d++){if(ye.fromBufferAttribute(l,d),Se.fromBufferAttribute(c,d),ye.w=1,Se.w=1,ye.applyMatrix4(Ea),Se.applyMatrix4(Ea),ye.z>u&&Se.z>u)continue;if(ye.z>u){const b=ye.z-Se.z,S=(ye.z-u)/b;ye.lerp(Se,S)}else if(Se.z>u){const b=Se.z-ye.z,S=(Se.z-u)/b;Se.lerp(ye,S)}ye.applyMatrix4(n),Se.applyMatrix4(n),ye.multiplyScalar(1/ye.w),Se.multiplyScalar(1/Se.w),ye.x*=r.x/2,ye.y*=r.y/2,Se.x*=r.x/2,Se.y*=r.y/2,Ee.start.copy(ye),Ee.start.z=0,Ee.end.copy(Se),Ee.end.z=0;const v=Ee.closestPointToPointParameter(Sa,!0);Ee.at(v,pc);const p=Ic.lerp(ye.z,Se.z,v),f=p>=-1&&p<=1,w=Sa.distanceTo(pc)<fi*.5;if(f&&w){Ee.start.fromBufferAttribute(l,d),Ee.end.fromBufferAttribute(c,d),Ee.start.applyMatrix4(a),Ee.end.applyMatrix4(a);const b=new L,S=new L;mn.distanceSqToSegment(Ee.start,Ee.end,S,b),e.push({point:S,pointOnLine:b,distance:mn.origin.distanceTo(S),object:i,face:null,faceIndex:d,uv:null,uv1:null})}}}class fg extends ze{constructor(t=new nh,e=new ys({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let a=0,o=0,l=e.count;a<l;a++,o+=2)dc.fromBufferAttribute(e,a),fc.fromBufferAttribute(n,a),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+dc.distanceTo(fc);const r=new vo(s,2,1);return t.setAttribute("instanceDistanceStart",new gn(r,1,0)),t.setAttribute("instanceDistanceEnd",new gn(r,1,1)),this}raycast(t,e){const n=this.material.worldUnits,s=t.camera;s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;mn=t.ray;const a=this.matrixWorld,o=this.geometry,l=this.material;fi=l.linewidth+r,o.boundingSphere===null&&o.computeBoundingSphere(),pr.copy(o.boundingSphere).applyMatrix4(a);let c;if(n)c=fi*.5;else{const u=Math.max(s.near,pr.distanceToPoint(mn.origin));c=mc(s,u,l.resolution)}if(pr.radius+=c,mn.intersectsSphere(pr)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),fr.copy(o.boundingBox).applyMatrix4(a);let h;if(n)h=fi*.5;else{const u=Math.max(s.near,fr.distanceToPoint(mn.origin));h=mc(s,u,l.resolution)}fr.expandByScalar(h),mn.intersectsBox(fr)!==!1&&(n?ug(this,e):dg(this,s,e))}onBeforeRender(t){const e=this.material.uniforms;e&&e.resolution&&(t.getViewport(ya),this.material.uniforms.resolution.value.set(ya.z,ya.w))}}class ih extends nh{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){const e=t.length-3,n=new Float32Array(2*e);for(let s=0;s<e;s+=3)n[2*s]=t[s],n[2*s+1]=t[s+1],n[2*s+2]=t[s+2],n[2*s+3]=t[s+3],n[2*s+4]=t[s+4],n[2*s+5]=t[s+5];return super.setPositions(n),this}setColors(t){const e=t.length-3,n=new Float32Array(2*e);for(let s=0;s<e;s+=3)n[2*s]=t[s],n[2*s+1]=t[s+1],n[2*s+2]=t[s+2],n[2*s+3]=t[s+3],n[2*s+4]=t[s+4],n[2*s+5]=t[s+5];return super.setColors(n),this}fromLine(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}}class pg extends fg{constructor(t=new ih,e=new ys({color:Math.random()*16777215})){super(t,e),this.isLine2=!0,this.type="Line2"}}const zi=new Vt("#ff3b30"),ba=new Vt("#ffc14d"),mg=1.8,_g=.8;async function gg({lid:i,toX:t,toZ:e,DEPTH_SCALE:n,TERRAIN_EXAG:s,LAND_EXAG:r=s}){const[a,o,l]=await Promise.all([fetch("./data/faults.json").then(nt=>{if(!nt.ok)throw new Error("faults.json "+nt.status);return nt.json()}),fetch("./data/terrain_meta.json").then(nt=>nt.json()),fetch("./data/terrain_int16.bin").then(nt=>nt.arrayBuffer())]),c=new Int16Array(l),{rows:h,cols:u,lat_first:d,lat_last:m,lon_first:_,lon_last:v}=o;let p=!1;const f=nt=>nt/1e3*n*(p?1:nt>0?r:s),w=(nt,dt)=>{const I=(nt-_)/(v-_)*(u-1),q=(dt-d)/(m-d)*(h-1),tt=Math.max(0,Math.min(u-2,Math.floor(I))),K=Math.max(0,Math.min(h-2,Math.floor(q))),ot=Math.min(1,Math.max(0,I-tt)),ft=Math.min(1,Math.max(0,q-K)),gt=(Rt,pt)=>c[Rt*u+pt];return(gt(K,tt)*(1-ot)+gt(K,tt+1)*ot)*(1-ft)+(gt(K+1,tt)*(1-ot)+gt(K+1,tt+1)*ot)*ft},b=new Qe;b.visible=!1,i.add(b);const S=new ys({color:16777215,vertexColors:!0,linewidth:3,transparent:!0,opacity:1,depthTest:!1,depthWrite:!1,dashed:!1,worldUnits:!1}),N=new ys({color:16777215,vertexColors:!0,linewidth:4.5,transparent:!0,opacity:1,depthTest:!1,depthWrite:!1,dashed:!1,worldUnits:!1}),P=new ys({color:8947848,vertexColors:!1,linewidth:2,transparent:!0,opacity:.45,depthTest:!1,depthWrite:!1,dashed:!1,worldUnits:!1}),R=[S,N,P];let D=null;const y=()=>{const nt=document.querySelector("canvas"),dt=nt&&nt.width&&nt.height?nt.width:innerWidth*devicePixelRatio,I=nt&&nt.width&&nt.height?nt.height:innerHeight*devicePixelRatio;for(const q of R)q.resolution.set(dt,I)};y();const x=nt=>{const dt=[];for(let I=0;I<nt.length;I++){const q=nt[I];if(I===0){dt.push(q);continue}const tt=nt[I-1],K=Math.hypot((q[0]-tt[0])*101.3,(q[1]-tt[1])*111.32),ot=Math.max(1,Math.ceil(K/_g));for(let ft=1;ft<=ot;ft++){const gt=ft/ot;dt.push([tt[0]+(q[0]-tt[0])*gt,tt[1]+(q[1]-tt[1])*gt])}}return dt},A=[],X=[];for(const nt of a){const dt=x(nt.coords);if(dt.length<2)continue;const I=dt.map(([At,C])=>w(At,C)),q=dt.map(([At,C])=>[t(At),e(C)]),tt=dt.length,K=new Float32Array(tt*3),ot=new Float32Array(tt*3),ft=new Float32Array(tt),gt=()=>{let At=0;for(let C=0;C<tt;C++)C&&(At+=Math.hypot(q[C][0]-q[C-1][0],q[C][1]-q[C-1][1])),K[C*3]=q[C][0],K[C*3+1]=f(I[C])+mg,K[C*3+2]=q[C][1],ft[C]=At};gt();const Rt=new ih;Rt.setPositions(K),Rt.setColors(ot);const pt=new pg(Rt,S);pt.computeLineDistances(),pt.renderOrder=6,pt.userData.name=nt.name,b.add(pt),A.push({name:nt.name,line:pt,pos:K,col:ot,along:ft,n:tt,geom:Rt}),X.push(()=>{gt(),Rt.setPositions(K)})}const H=nt=>{for(const dt of A)if(!(D!==null&&dt.name!==D)){for(let I=0;I<dt.n;I++){const q=.5+.5*Math.sin(dt.along[I]*.22-nt*1.2);dt.col[I*3]=zi.r+(ba.r-zi.r)*q,dt.col[I*3+1]=zi.g+(ba.g-zi.g)*q,dt.col[I*3+2]=zi.b+(ba.b-zi.b)*q}dt.geom.setColors(dt.col)}};H(0);const Z=nt=>{b.visible=!!nt},Q=nt=>{if(nt=nt&&A.some(dt=>dt.name===nt)?nt:null,nt!==D){D=nt;for(const dt of A){const I=nt!==null&&dt.name===nt;dt.line.material=nt===null?S:I?N:P,dt.line.renderOrder=I?7:6}}},j=nt=>{p!==!!nt&&(p=!!nt,X.forEach(dt=>dt()))},et=nt=>{y(),b.visible&&H(nt*.001)},W=new ne,$=(nt,dt,I,q=14)=>{if(!b.visible)return null;I.updateMatrixWorld(),W.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse);const tt=W.elements,K=innerWidth,ot=innerHeight,ft=(pt,At,C)=>{const Kt=tt[3]*pt+tt[7]*At+tt[11]*C+tt[15];return Kt<=0?null:[((tt[0]*pt+tt[4]*At+tt[8]*C+tt[12])/Kt+1)/2*K,(1-(tt[1]*pt+tt[5]*At+tt[9]*C+tt[13])/Kt)/2*ot]};let gt=null,Rt=q;for(const pt of A){let At=null;for(let C=0;C<pt.n;C++){const Kt=ft(pt.pos[C*3],pt.pos[C*3+1],pt.pos[C*3+2]);if(!Kt||!At){At=Kt;continue}const[Ft,Mt]=At,[xt,Bt]=Kt,St=xt-Ft,E=Bt-Mt,g=St*St+E*E,z=g>0?Math.max(0,Math.min(1,((nt-Ft)*St+(dt-Mt)*E)/g)):0,J=Math.hypot(nt-(Ft+St*z),dt-(Mt+E*z));J<Rt&&(Rt=J,gt={name:pt.name,d:J}),At=Kt}}return gt},lt=(nt,dt)=>{if(!b.visible)return null;dt.updateMatrixWorld(),W.multiplyMatrices(dt.projectionMatrix,dt.matrixWorldInverse);const I=W.elements,q=innerWidth,tt=innerHeight,K=A.find(At=>At.name===nt)||A[0];if(!K)return null;const ot=K.n/2|0,ft=K.pos[ot*3],gt=K.pos[ot*3+1],Rt=K.pos[ot*3+2],pt=I[3]*ft+I[7]*gt+I[11]*Rt+I[15];return pt<=0?null:[((I[0]*ft+I[4]*gt+I[8]*Rt+I[12])/pt+1)/2*q,(1-(I[1]*ft+I[5]*gt+I[9]*Rt+I[13])/pt)/2*tt]},ht=[...new Set(A.map(nt=>nt.name))];return{setVisible:Z,setReal:j,setSelected:Q,selected:()=>D,tick:et,pick:$,project:lt,names:ht,count:A.length}}const Ze="https://edu.cwa.gov.tw/PopularScience/kids/ec/",As={1:{t:"點有大有小，是什麼意思？",b:["點越大，代表規模越大，也就是地震放出的能量越多。一次地震只有一個規模。","規模每多 1，能量大約多 32 倍。","「震度」不一樣，它是各地搖晃的程度，分 0 到 7 級。"],l:{u:"https://edu.cwa.gov.tw/PopularScience/ec/ec_22.html",n:"地震來臨躲不躲？！—何謂震度（氣象署）"}},2:{t:"顏色代表什麼？震源和震央有什麼不同？",b:["地底下岩石開始錯動的地方叫「震源」，它正上方的地面叫「震央」。","點的顏色代表震源有多深。","一般來說，震源越淺、離震央越近，搖得越厲害。"],l:{u:Ze+"ec_1.html",n:"地動天搖何處來？—震央（氣象署兒童地震）"}},3:{t:"為什麼台灣這麼多地震？",b:["台灣位在歐亞板塊和菲律賓海板塊互相碰撞的地方。","板塊推擠的力量超過岩石能承受的程度，岩石就會破裂、錯動，發生地震。","根據 2008–2017 年統計，台灣每年大約有 3 萬 2 千次地震，大部分我們感覺不到。"],l:{u:Ze+"ec_11.html",n:"天搖地動！為什麼台灣這麼多地震？（氣象署兒童地震）"}},4:{t:"為什麼東北外海的地震可以這麼深？",b:["板塊相撞的地方，密度比較大的板塊會往下鑽到另一塊下面，這叫「隱沒」。","台灣東部地震帶的震源比西部深，可以深到 300 公里左右。","這筆是網站資料裡最深的：{DEEP} 公里。"],l:{u:Ze+"ec_5.html",n:"台灣地牛愛翻身—台灣地震帶之分布情形（氣象署兒童地震）"}},5:{t:"主震和餘震是什麼？",b:["一連串有關連的地震裡，規模最大的叫「主震」。","主震之後接著發生、比較小的一連串地震叫「餘震」。","所以大地震過後，附近的點常會一下子變多，也要繼續留意。"],l:{u:Ze+"ec_2.html",n:"地震的變奏組曲─主震、前震、餘震、群震（氣象署兒童地震）"}},6:{t:"921 集集大地震",b:["1999 年的 921 集集大地震是車籠埔斷層活動造成的，地表裂開約 85 公里。","西部的地震震源比較淺、多在陸地，城鎮又多，所以常造成嚴重災情。"],l:{u:Ze+"ec_11.html",n:"天搖地動！為什麼台灣這麼多地震？（氣象署兒童地震）"}},7:{t:"地震來了怎麼辦？",b:["記住防震三步驟：趴下、掩護、穩住。先趴下保護頭部，再躲到堅固的桌子下，抓住桌腳。","不要躲在櫃子旁邊；在高樓不要搭電梯。"],l:{u:Ze+"ec_14.html",n:"做好準備，地牛翻身我不怕！（氣象署兒童地震）"}},8:{t:"山怎麼這麼高？",b:["為了讓地形看得清楚，網頁把陸地高度放大 15 倍、海底放大 5 倍。","打開「原始高度」就是真實比例。玉山 3,952 公尺，跟深達 300 多公里的地震比起來其實很小。"],l:null,note:"這張是本網站自己的說明（地形放大的設定），沒有外部連結。"}},mr="https://www.ncdr.nat.gov.tw/UploadFile/MessageItem/f7bc875907be41419ba037a851b557a7.pdf",_c=i=>`https://twgeoref.gsmma.gov.tw/GipOpenWeb/wSite/ct?ctNode=1233&mp=105&xItem=${i}`,ki="資料：板塊邊界與範圍來自 PB2002 全球板塊模型（Bird, 2003），台灣附近只能示意。";Object.assign(As,{ryu:{t:"琉球海溝（日本叫「南西諸島海溝」）",b:["這裡是菲律賓海板塊往北鑽到歐亞板塊下面的地方，這種現象叫「隱沒」。","往下鑽的板塊在地底越來越深，可以到 200 多公里深。","這條海溝在日本叫「南西諸島海溝」，沿著琉球群島往東北延伸，北端和日本的「南海海槽」連在一起。","南海海槽在日本四國、紀伊半島南方的外海，那裡也是菲律賓海板塊往下鑽的地方。"],ls:[{u:mr,n:"臺灣地質構造區概述（國家災害防救科技中心，PDF，看 2.7 琉球隱沒帶）"},{u:"https://www.jishin.go.jp/main/chousa/kaikou_pdf/hyuganada_2.pdf",n:"日本地震調查研究推進本部：南西諸島海溝的長期評估（日文 PDF）"},{u:"https://www.jma.go.jp/jma/kishou/know/jishin/nteq/nteq.html",n:"日本氣象廳：南海海槽地震（日文）"}],d:ki},man:{t:"馬尼拉海溝",b:["這裡的方向和琉球海溝相反：南海的海底板塊往菲律賓海板塊下面鑽。","海溝從菲律賓呂宋島西邊往北延伸，長約 1,500 公里，大約到北緯 20 度。","再往北靠近台灣，因為板塊碰撞，海溝的地形就變得不明顯了。"],ls:[{u:_c(146488),n:"地質百科：馬尼拉海溝（經濟部地質調查及礦業管理中心）"}],d:ki},oki:{t:"沖繩海槽",b:["沖繩海槽是一個海底盆地，從日本九州外海延伸到台灣東北外海，長約 1,100 公里。","它是菲律賓海板塊往下鑽的過程中，上面的地殼被「拉開」形成的。","宜蘭到琉球群島一帶的淺地震，以及龜山島附近的地熱和火山活動，都和沖繩海槽的擴張有關。"],ls:[{u:_c(146482),n:"地質百科：沖繩海槽（經濟部地質調查及礦業管理中心）"},{u:"https://scweb.cwa.gov.tw/zh-tw/guidance/faqdetail/54",n:"地震百問 53：台灣地震帶之分布情形（氣象署）"}],d:ki},col:{t:"碰撞帶（示意）",b:["菲律賓海板塊上的呂宋島弧撞上歐亞板塊的大陸邊緣，把地層擠高，形成台灣的高山。","依官方資料，兩個板塊在陸地上的交界大致在東部的花東縱谷；縱谷東邊的海岸山脈原本是火山島弧。","注意：地圖上這條黃線來自全球簡化模型，只是示意，畫在西半部，和真正的交界位置不一樣。"],ls:[{u:Ze+"ec_5.html",n:"台灣地牛愛翻身—台灣地震帶之分布情形（氣象署兒童地震）"},{u:"https://scweb.cwa.gov.tw/zh-tw/guidance/faqdetail/52",n:"地震百問 51：何謂板塊運動？（氣象署）"},{u:mr,n:"臺灣地質構造區概述（國家災害防救科技中心，PDF，看 2.1 海岸山脈）"}],d:ki},ps:{t:"菲律賓海板塊",b:["台灣東南邊的這片海底屬於菲律賓海板塊。","在台灣東北邊，它往下鑽到歐亞板塊下面（琉球海溝）；在台灣南邊，則是南海的海底板塊鑽到它下面（馬尼拉海溝）。","地圖只把海面塗色；台灣本島位在兩個板塊的碰撞帶上，不簡單歸給哪一塊。"],ls:[{u:Ze+"ec_5.html",n:"台灣地牛愛翻身—台灣地震帶之分布情形（氣象署兒童地震）"},{u:mr,n:"臺灣地質構造區概述（國家災害防救科技中心，PDF）"}],d:ki},eu:{t:"歐亞板塊",b:["地球表面像拼圖，由七大板塊和許多小板塊拼成，歐亞板塊是七大板塊之一。","南海的海底屬於歐亞板塊的一部分。","地圖上的藍綠色也包含模型裡幾塊比較小的板塊（揚子、巽他、沖繩），為了好懂合成同一個顏色。"],ls:[{u:Ze+"ec_4.html",n:"漂浮的大地—板塊運動（氣象署兒童地震）"},{u:mr,n:"臺灣地質構造區概述（國家災害防救科技中心，PDF，看 2.1）"}],d:ki},slab:{t:"地下半透明的面是什麼？",b:["地底下這片半透明的面，是科學家估算出來「往下鑽的板塊」的上表面。","面上每一條線代表再深 50 公里，線越多表示鑽得越深。","這是全球模型，台灣附近的細節不一定準，有些深地震並不在這片面上。"],ls:[{u:"https://www.sciencebase.gov/catalog/item/5aa1b00ee4b0b1c392e86467",n:"Slab2 隱沒板塊模型（美國地質調查所 USGS，英文）"}],d:"資料：USGS Slab2（Hayes, 2018, doi:10.5066/F7PV6JNV）。"},yushan:{t:"玉山",b:["玉山是台灣第一高峰，海拔 3,952 公尺，在南投縣、高雄市和嘉義縣交界。","板塊推擠讓地層變厚、抬升，才有這麼高的山；玉山到現在每年還會長高約 5–7 公釐。","網頁的地形大約 1.85 公里一格，尖尖的山頂會被平均掉，所以畫面上的山頂比真實的圓、也比較矮。"],ls:[{u:"https://www.ysnp.gov.tw/StaticPage/Mountain",n:"玉山百岳（玉山國家公園管理處）"},{u:"https://www.ysnp.gov.tw/FAQ/C007000?ID=c7939bca-5d9f-4fde-8c82-9931afbc9289&PageIndex=4&PageType=1",n:"玉山的高度為何？（玉山國家公園常見問答）"}]},fault:{t:"活動斷層",b:["活動斷層是「更新世晚期（距今約十萬年）以來曾經活動過，未來可能再度活動的斷層」。","官方公布的台灣活動斷層分布圖目前有 36 條。自 2025 年 10 月起，不再分成第一類、第二類，每一條都要同等重視。","這個網頁的斷層線是依官方圖層描繪後簡化的示意位置，不是精確位置，請勿用來判斷某一棟房子或某個地點在不在斷層上。"],ls:[{u:"https://fault.gsmma.gov.tw/About/",n:"活動斷層的定義（經濟部地質調查及礦業管理中心）"},{u:"https://fault.gsmma.gov.tw/About/Fault_map",n:"活動斷層分布圖（經濟部地質調查及礦業管理中心）"}],d:"資料：經濟部地質調查及礦業管理中心 2021 1/25,000_臺灣活動斷層分布圖(含名稱)_2021（WMS），本站依其影像描繪簡化示意。"}});const vg=[7,3,"fault",1,2,4,5,6,8],xg=[{g:"給小朋友",items:[{u:"https://edu.cwa.gov.tw/PopularScience/kids/ec_cate.html",n:"氣象署數位科普網：兒童地震",d:"用故事講地震，十幾篇都是寫給小朋友看的。"},{u:Ze+"ec_11.html",n:"為什麼台灣這麼多地震？",d:"板塊、三大地震帶和 921。"},{u:Ze+"ec_2.html",n:"主震、前震、餘震",d:"大地震後為什麼還會一直搖。"},{u:Ze+"ec_14.html",n:"做好準備，地牛翻身我不怕！",d:"防震三步驟和避難包要放什麼。"}]},{g:"給老師家長",items:[{u:"https://scweb.cwa.gov.tw/zh-tw/guidance/faqdetail/26",n:"氣象署地震百問（線上版）",d:"100 個地震問答，這篇講規模，其他各篇講震度等。"},{u:"https://scweb.cwa.gov.tw/eq100/eq100-all.pdf",n:"地震百問 PDF 全本",d:"整本下載，約 26 MB。"},{u:"https://disaster.moe.edu.tw/",n:"教育部防災教育資訊網",d:"教案、學習單和影片。"}]}],rn=i=>String(i).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),fn=(i,t="i")=>`<button type="button" class="ei${t==="i"?"":" wide"}" data-edu="${i}" aria-label="小知識：${rn(As[i].t)}" title="${rn(As[i].t)}"><b>i</b>${t==="i"?"":` ${rn(t)}`}</button>`;function Mg({deepKm:i=()=>null}={}){const t=document.getElementById("eduList");t.innerHTML=`<div class="eh">小卡（點一下打開）<button type="button" id="eduSnd" class="snd" aria-pressed="true" title="滑過小卡的提示音">${yg}<span>提示音</span></button></div>`+vg.map(l=>`<button type="button" class="et" data-edu="${l}"><b>i</b>${rn(As[l].t)}</button>`).join("")+xg.map(l=>`<div class="eh">${l.g}</div>`+l.items.map(c=>`<p><a href="${c.u}" target="_blank" rel="noopener">${rn(c.n)}</a>：${rn(c.d)}</p>`).join("")).join("")+'<p class="en">說明交給官方：小卡只用氣象署原文改寫成白話，想知道更多請點連結。</p>',Sg(t);const e=document.createElement("div");e.id="eduPop",e.hidden=!0,e.innerHTML='<div class="box" role="dialog" aria-modal="true" aria-labelledby="eduT"><button type="button" class="x" aria-label="關閉">✕</button><h3 id="eduT"></h3><div class="eb"></div><div class="ef"></div></div>',document.body.appendChild(e);const n=e.querySelector(".box");let s=null,r=0;const a=l=>{const c=As[l];if(!c)return;s=l;const h=i();e.querySelector("h3").textContent=c.t,e.querySelector(".eb").innerHTML=c.b.map(d=>`<p>${rn(d.replace("{DEEP}",h==null?"312":String(Math.round(h))))}</p>`).join("");const u=c.ls||(c.l?[c.l]:[]);e.querySelector(".ef").innerHTML=(u.length?`<a href="${u[0].u}" target="_blank" rel="noopener">想知道更多 →</a><span>${rn(u[0].n)}</span>`+u.slice(1).map(d=>`<span class="more"><a href="${d.u}" target="_blank" rel="noopener">${rn(d.n)}</a></span>`).join(""):`<span>${rn(c.note)}</span>`)+(c.d?`<span class="src">${rn(c.d)}</span>`:""),r=performance.now(),e.hidden=!1,n.querySelector(".x").focus({preventScroll:!0})},o=()=>{e.hidden=!0,s=null};return e.addEventListener("click",l=>{(l.target.closest(".x")||!n.contains(l.target)&&performance.now()-r>400)&&o()}),addEventListener("keydown",l=>{l.key==="Escape"&&!e.hidden&&o()}),document.addEventListener("click",l=>{const c=l.target.closest("[data-edu]");if(!c)return;l.preventDefault(),l.stopPropagation();const h=c.dataset.edu;a(/^\d+$/.test(h)?+h:h)}),window.__edu=()=>{var l,c;return s===null?null:{n:s,title:e.querySelector("h3").textContent,body:e.querySelector(".eb").textContent,link:((l=e.querySelector(".ef a"))==null?void 0:l.href)||null,links:[...e.querySelectorAll(".ef a")].map(h=>h.href),src:((c=e.querySelector(".ef .src"))==null?void 0:c.textContent)||null}},window.__eduOpen=a,window.__eduClose=o,{open:a,close:o}}const Ta="tq3d.hoverSound",yg='<svg viewBox="0 0 16 16" width="13" height="13" aria-hidden="true"><path d="M2 6h3l4-3v10L5 10H2z" fill="currentColor"/><path class="w" d="M11 5.5a3.5 3.5 0 0 1 0 5M12.8 3.6a6 6 0 0 1 0 8.8" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/><path class="m" d="M11 6l4 4M15 6l-4 4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>';function Sg(i){let t=!0;try{t=localStorage.getItem(Ta)!=="0"}catch{}let e=null,n=!1,s=0,r=0;const a=i.querySelector("#eduSnd"),o=()=>{a.setAttribute("aria-pressed",String(t)),a.classList.toggle("off",!t),a.title=t?"滑過小卡的提示音：開（點一下靜音）":"滑過小卡的提示音：關（點一下打開）"};o(),a.addEventListener("click",u=>{u.stopPropagation(),t=!t;try{localStorage.setItem(Ta,t?"1":"0")}catch{}o()});const l=()=>{n=!0};addEventListener("pointerdown",l,{capture:!0,once:!0}),addEventListener("keydown",l,{capture:!0,once:!0});const c=()=>matchMedia("(hover: hover) and (pointer: fine)").matches,h=()=>{const u=window.AudioContext||window.webkitAudioContext;if(!u)return;e||(e=new u),e.state!=="running"&&e.resume().catch(()=>{});const d=e.currentTime+.005,m=e.createGain();m.gain.value=.05,m.connect(e.destination);const _=(v,p,f,w,b,S)=>{const N=e.createOscillator(),P=e.createGain();N.type=b,N.frequency.setValueAtTime(v,d+f),N.frequency.exponentialRampToValueAtTime(p,d+f+w*.7),P.gain.setValueAtTime(1e-4,d+f),P.gain.exponentialRampToValueAtTime(S,d+f+.004),P.gain.exponentialRampToValueAtTime(1e-4,d+f+w),N.connect(P).connect(m),N.start(d+f),N.stop(d+f+w+.02)};_(2200,3300,0,.05,"triangle",.9),_(4400,4400,.028,.06,"sine",.35),r++};i.querySelectorAll(".et").forEach(u=>u.addEventListener("pointerenter",d=>{if(d.pointerType!=="mouse"||!c()||!t||!n)return;const m=performance.now();if(!(m-s<120)){s=m;try{h()}catch(_){console.warn("hover blip",_)}}})),window.__hoverSound=()=>({on:t,gestured:n,plays:r,ctx:e?e.state:null,stored:(()=>{try{return localStorage.getItem(Ta)}catch{return null}})()})}const Eg=121,sh=23.5,rh=111.32,ah=111.32*Math.cos(sh*Math.PI/180),Ye=1,Ur=5,gi=15,pe=i=>(i-Eg)*ah,De=i=>-(i-sh)*rh,$e={lon0:118,lon1:124,lat0:20,lat1:27},Ir={y0:1990,mMin:3},bg={y0:1935,mMin:-1},Tg=[15,30,70,150,1e9],wg=["0–15 公里","15–30 公里","30–70 公里","70–150 公里","150 公里以上"],gc={depth:["#ff2a2a","#ff9a1f","#ffe633","#33d17a","#3a7bff"],depthCB:["#fde725","#7ad151","#22a884","#2a788e","#7b6cff"],year:["#3a7bff","#33d1c4","#ffe633","#ff9a1f","#ff2a2a"]},wt=i=>document.getElementById(i),Ag=wt("status"),Bo=i=>{Ag.textContent=i},Mn=new I_({antialias:!0,preserveDrawingBuffer:!0});Mn.setPixelRatio(Math.min(window.devicePixelRatio,2));Mn.setSize(window.innerWidth,window.innerHeight);wt("app").appendChild(Mn.domElement);const He=new N_;He.background=new Vt(724759);const Xt=new Ke(45,window.innerWidth/window.innerHeight,1,2e4),Kn=()=>window.innerWidth<=640,Rg=Kn()?[0,1047,1147]:[0,579,679];Xt.position.set(...Rg);const _e=new $_(Xt,Mn.domElement);_e.target.set(0,-100,0);let Oe=null;window.__flying=()=>!!Oe;window.__setView=(i,t,e,n=0,s=-100,r=0)=>{Oe=null,Xt.position.set(i,t,e),_e.target.set(n,s,r),_e.update()};_e.update();He.add(new G_(16777215,.55));const oh=new V_(16777215,1.1);oh.position.set(-300,600,300);He.add(oh);window.addEventListener("resize",()=>{Xt.aspect=window.innerWidth/window.innerHeight,Xt.updateProjectionMatrix(),Mn.setSize(window.innerWidth,window.innerHeight)});let lh=()=>{};{const i=wt("panel"),t=wt("collapse"),e=s=>{i.classList.toggle("collapsed",s),t.textContent=s?"設定":"收合"};e(Kn()),lh=s=>{e(s),s&&(i.scrollTop=0)},t.addEventListener("click",()=>e(!i.classList.contains("collapsed"))),wt("grip").addEventListener("click",()=>{e(!0),i.scrollTop=0});let n=null;i.addEventListener("touchstart",s=>{if(!Kn()||i.classList.contains("collapsed")||s.touches.length!==1||s.target.closest("input,select")){n=null;return}const r=s.touches[0];n={x:r.clientX,y:r.clientY,st:i.scrollTop,head:!!s.target.closest("header"),end:i.scrollTop+i.clientHeight>=i.scrollHeight-2}},{passive:!0}),i.addEventListener("touchend",s=>{if(!n)return;const r=s.changedTouches[0],a=n.y-r.clientY,o=Math.abs(r.clientX-n.x),l=n;n=null,!(a<(l.head?25:60)||o>a*.6)&&(l.head||l.end&&Math.abs(i.scrollTop-l.st)<4)&&(e(!0),i.scrollTop=0)},{passive:!0}),i.addEventListener("touchcancel",()=>{n=null},{passive:!0})}const cn=new Qe;He.add(cn);{const i=wt("lift"),t=wt("liftv");i.addEventListener("input",()=>{cn.position.y=+i.value*Ye,t.textContent=i.value})}const Ue={real:!1,setReal:()=>{},onReal:[],heightAt:()=>0};async function Cg(){const i=await(await fetch("./data/terrain_meta.json")).json(),t=await(await fetch("./data/terrain_int16.bin")).arrayBuffer(),e=new Int16Array(t),{rows:n,cols:s,lat_first:r,lat_last:a,lon_first:o,lon_last:l}=i;if(e.length!==n*s)throw new Error(`terrain size mismatch ${e.length} vs ${n*s}`);const c=new Float32Array(n*s*3),h=new Float32Array(n*s*3),u=new Vt;for(let R=0;R<n;R++){const D=r+(a-r)*R/(n-1);for(let y=0;y<s;y++){const x=o+(l-o)*y/(s-1),A=R*s+y,X=e[A];if(c[A*3]=pe(x),c[A*3+1]=X/1e3*Ye*(X>0?gi:Ur),c[A*3+2]=De(D),X<0){const H=Math.min(1,-X/6e3);u.setRGB(.15*(1-H)+.02,.35*(1-H)+.08,.6*(1-H)+.25)}else{const H=Math.min(1,X/3500);u.setRGB(.25+.45*H,.45+.2*H,.2+.4*H)}h[A*3]=u.r,h[A*3+1]=u.g,h[A*3+2]=u.b}}const d=[],m=[];for(let R=0;R<n-1;R++)for(let D=0;D<s-1;D++){const y=R*s+D,x=y+1,A=y+s,X=A+1;(e[y]>0||e[A]>0||e[x]>0?d:m).push(y,A,x),(e[x]>0||e[A]>0||e[X]>0?d:m).push(x,A,X)}const _=new he(c,3),v=new he(h,3),p=new Qc({vertexColors:!0,transparent:!0,opacity:.6,side:Xe,depthWrite:!1}),f=R=>{const D=new ce;D.setAttribute("position",_),D.setAttribute("color",v),D.setIndex(new he(new Uint32Array(R),1)),D.computeVertexNormals();const y=new ze(D,p);return y.renderOrder=2,cn.add(y),y},w=f(d),b=f(m);Ue.heightAt=(R,D)=>{const y=Math.round((D-r)/(a-r)*(n-1)),x=Math.round((R-o)/(l-o)*(s-1));return y<0||y>=n||x<0||x>=s?0:e[y*s+x]},Ue.setReal=R=>{Ue.real=R;for(let D=0;D<e.length;D++){const y=e[D];c[D*3+1]=y/1e3*Ye*(R?1:y>0?gi:Ur)}_.needsUpdate=!0,w.geometry.computeVertexNormals(),b.geometry.computeVertexNormals(),Ue.onReal.forEach(D=>D(R))};const S=document.getElementById("opacity"),N=document.getElementById("ocean"),P=()=>{p.opacity=+S.value,w.visible=p.opacity>0,b.visible=w.visible&&N.checked};return S.addEventListener("input",P),N.addEventListener("change",P),i}async function Pg(){const i=await(await fetch("./data/county-2025-03-18.geojson")).json(),t=[],e=c=>{for(let h=0;h<c.length-1;h++){const[u,d]=[c[h],c[h+1]];t.push(pe(u[0]),.3,De(u[1]),pe(d[0]),.3,De(d[1]))}},n=c=>c.some(([h,u])=>h>=$e.lon0&&h<=$e.lon1&&u>=$e.lat0&&u<=$e.lat1);let s=0;for(const c of i.features){const h=c.geometry;if(!h)continue;const u=h.type==="Polygon"?[h.coordinates]:h.type==="MultiPolygon"?h.coordinates:[];for(const d of u)for(const m of d)n(m)?e(m):s++}window.__boundarySkipped=()=>s;const r=new ce;r.setAttribute("position",new ue(t,3));const a=new $n(r,new Nn({color:16777215,transparent:!0,opacity:.9}));a.renderOrder=3,cn.add(a);const o=wt("county"),l=()=>{a.visible=o.checked};return o.addEventListener("change",l),l(),window.__county=()=>a.visible,i}async function Lg(){const t=(await(await fetch("./data/earthquakes.csv")).text()).split(`
`),e=t[0].trim().split(","),n=e.indexOf("datetime"),s=e.indexOf("lon"),r=e.indexOf("lat"),a=e.indexOf("magnitude"),o=e.indexOf("depth_km"),l=t.length-1,c=new Float32Array(l*3),h=new Float32Array(l),u=new Float32Array(l),d=new Float32Array(l),m=new Float32Array(l),_=new Float32Array(l),v=new Float32Array(l),p=new Int32Array(l),f=new Int32Array(l),w=[],b=[],S=new Map;let N=0;for(let y=1;y<t.length;y++){const x=t[y];if(!x)continue;const A=x.split(","),X=+A[s],H=+A[r],Z=+A[a],Q=+A[o],j=A[n];if(!isFinite(X)||!isFinite(H)||!isFinite(Z)||!isFinite(Q))continue;const et=+j.slice(0,4),W=((+j.slice(5,7)-1)*31+(+j.slice(8,10)-1))/372;c[N*3]=pe(X),c[N*3+1]=-Q*Ye,c[N*3+2]=De(H),h[N]=Math.min(40,1.2*Math.pow(1.75,Math.max(0,Z-1))),u[N]=et+W,d[N]=Z,m[N]=Q,_[N]=X,v[N]=H,p[N]=+(j.slice(0,4)+j.slice(5,7)+j.slice(8,10)),f[N]=+(j.slice(11,13)+j.slice(14,16)+j.slice(17,19))||0;const $=S.get(et)||new Array(15).fill(0);$[Math.max(0,Math.min(14,Math.floor(Z*2+1e-9)))]++,S.set(et,$),Z>=5&&b.push({yr:et,frac:W,mag:Z,x:c[N*3],y:c[N*3+1],z:c[N*3+2]}),Z>=6&&w.push({dt:j,lon:X,lat:H,mag:Z,dep:Q,yr:et,x:c[N*3],y:c[N*3+1],z:c[N*3+2]}),N++}for(const y of S.values())for(let x=13;x>=0;x--)y[x]+=y[x+1];const P=new ce;P.setAttribute("position",new he(c.subarray(0,N*3),3)),P.setAttribute("color",new he(new Float32Array(N*3),3)),P.setAttribute("size",new he(h.subarray(0,N),1)),P.setAttribute("year",new he(u.subarray(0,N),1)),P.setAttribute("mag",new he(d.subarray(0,N),1));const R=new xn({uniforms:{uY0:{value:Ir.y0},uY1:{value:2025},uM:{value:Ir.mMin},uNow:{value:-1}},vertexShader:`
      attribute float size; attribute float year; attribute float mag;
      uniform float uY0, uY1, uM, uNow;
      varying vec3 vColor; varying float vA;
      void main(){
        if (year < uY0 || year >= uY1 + 1.0 || mag < uM) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); gl_PointSize = 0.0; return; }
        float s = size; vColor = color; vA = clamp(0.12 + size / 12.0, 0.12, 0.9);
        if (uNow >= 0.0) { if (floor(year) == uNow) { s *= 1.4; vA = 0.95; } else { vA *= 0.55; } }
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = clamp(s * 900.0 / -mv.z, 1.0, 64.0); gl_Position = projectionMatrix * mv; }`,fragmentShader:`
      varying vec3 vColor; varying float vA;
      void main(){ vec2 d = gl_PointCoord - 0.5; if (dot(d, d) > 0.25) discard; gl_FragColor = vec4(vColor, vA); }`,vertexColors:!0,transparent:!0,depthWrite:!1}),D=new O_(P,R);return D.renderOrder=1,He.add(D),{n:N,g:P,mat:R,pts:D,yearA:u.subarray(0,N),depA:m.subarray(0,N),magA:d.subarray(0,N),sizeA:h.subarray(0,N),lonA:_,latA:v,ymdA:p,hmsA:f,big:w,m5:b,hist:S}}function Dg(i){const t=[];for(const n of i.features){const s=n.geometry;if(!s)continue;const r=s.type==="Polygon"?[s.coordinates]:s.type==="MultiPolygon"?s.coordinates:[];for(const a of r)t.push({name:n.properties.name,rings:a})}const e=(n,s,r)=>{let a=!1;for(let o=0,l=r.length-1;o<r.length;l=o++){const[c,h]=r[o],[u,d]=r[l];h>s!=d>s&&n<(u-c)*(s-h)/(d-h)+c&&(a=!a)}return a};return(n,s)=>{for(const o of t)if(e(n,s,o.rings[0])&&!o.rings.slice(1).some(l=>e(n,s,l)))return o.name;let r=null,a=1e18;for(const o of t)for(const[l,c]of o.rings[0]){const h=((l-n)*ah)**2+((c-s)*rh)**2;h<a&&(a=h,r=o.name)}return`${r}外海`}}function Ug(){const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d");t.strokeStyle="#ffb347",t.lineWidth=10,t.beginPath(),t.arc(64,64,50,0,Math.PI*2),t.stroke();const e=new Ds(i);e.colorSpace=be;const n=new Ls(new rs({map:e,depthTest:!1,transparent:!0,sizeAttenuation:!1}));n.scale.set(.06,.06,1),n.renderOrder=20;const s=new ce;s.setAttribute("position",new ue([0,0,0,0,0,0],3));const r=new kr(s,new Nn({color:16757575,depthTest:!1,transparent:!0}));r.renderOrder=20;const a=new Qe;return a.add(n,r),a.visible=!1,He.add(a),{grp:a,ring:n,set(o){n.position.set(o.x,o.y,o.z),s.attributes.position.setXYZ(0,o.x,o.y,o.z),s.attributes.position.setXYZ(1,o.x,0,o.z),s.attributes.position.needsUpdate=!0,a.visible=!0}}}const ch=(()=>{const i=new Qe,t=pe(118),e=pe(124),n=e+8,s=0,r=Ye,a=new Nn({color:13621478,transparent:!0,opacity:.85}),o=u=>{const d=new ce;return d.setAttribute("position",new ue(u,3)),d};i.add(new $n(o([n,0,s,n,-350*r,s]),a));const l=[];for(let u=0;u<=350;u+=10){const d=u%50===0?8:3;l.push(n,-u*r,s,n+d,-u*r,s)}for(const u of[30,70,150])l.push(n,-u*r,s,n+8,-u*r,s);i.add(new $n(o(l),a));const c=new z_({color:16777215,dashSize:8,gapSize:6,transparent:!0,opacity:.55});for(const u of[30,70,150]){const d=new kr(o([t,-u*r,s,n,-u*r,s]),c);d.computeLineDistances(),i.add(d)}const h=(u,d,m,_=!1)=>{const v=document.createElement("canvas");v.width=256,v.height=64;const p=v.getContext("2d");p.font=`${m?700:500} 34px system-ui, sans-serif`,p.textBaseline="middle",p.textAlign=_?"right":"left";const f=_?248:8;p.lineWidth=6,p.strokeStyle="rgba(11,15,23,.9)",p.strokeText(u,f,32),p.fillStyle=m?"#ffffff":"#cfd8e6",p.fillText(u,f,32);const w=new Ds(v);w.colorSpace=be;const b=new Ls(new rs({map:w,depthTest:!1,transparent:!0,sizeAttenuation:!1}));b.center.set(_?1:0,.5),b.scale.set(.09,.0225,1),b.position.set(_?t-3:n+11,d,s),b.renderOrder=15,i.add(b)};h("0 km",0,!1);for(const u of[30,70,150])h(`${u} km`,-u*r,!0);for(const u of[50,100,200,250,300])h(`${u}`,-u*r,!1);return h("350 km",-350*r,!1),He.add(i),i})(),Ig=(()=>{const i=new Qe,t=Ye,e=350,n=pe($e.lon0),s=pe($e.lon1),r=De($e.lat1),a=De($e.lat0),o=-e*t,l=_=>{const v=new ce;return v.setAttribute("position",new ue(_,3)),v},c=_=>new Nn({color:9417958,transparent:!0,opacity:_,depthWrite:!1}),h=_=>[n,_,r,s,_,r,s,_,r,s,_,a,s,_,a,n,_,a,n,_,a,n,_,r],u=[...h(0),...h(o)];for(const[_,v]of[[n,r],[s,r],[s,a],[n,a]])u.push(_,0,v,_,o,v);i.add(new $n(l(u),c(.2)));const d=[];for(let _=50;_<e;_+=50)d.push(...h(-_*t));i.add(new $n(l(d),c(.075)));const m=[];for(let _=$e.lon0+1;_<$e.lon1;_++)m.push(pe(_),o,r,pe(_),o,a);for(let _=$e.lat0+1;_<$e.lat1;_++)m.push(n,o,De(_),s,o,De(_));i.add(new $n(l(m),c(.05))),i.children.forEach(_=>{_.renderOrder=0});for(const _ of[100,200,300,350]){const v=document.createElement("canvas");v.width=128,v.height=40;const p=v.getContext("2d");p.font="500 24px system-ui, sans-serif",p.textBaseline="middle",p.textAlign="right",p.fillStyle="#a9c4ea",p.fillText(`${_} km`,120,20);const f=new Ds(v);f.colorSpace=be;const w=new Ls(new rs({map:f,transparent:!0,opacity:.4,depthWrite:!1,sizeAttenuation:!1}));w.center.set(1,.5),w.scale.set(.045,.014,1),w.position.set(n-4,-_*t,a),w.renderOrder=0,i.add(w)}return He.add(i),window.__frame=()=>({visible:i.visible,lines:i.children.filter(_=>_.isLineSegments).map(_=>({n:_.geometry.attributes.position.count/2,opacity:_.material.opacity})),bounds:{x0:n,x1:s,z0:r,z1:a,yb:o}}),i})(),Ng=[30,70,150].map(i=>{const t=document.createElement("div");return t.className="rulerTag",t.textContent=`${i} km`,document.body.appendChild(t),{d:i,el:t,a:new L(pe(118),-i*Ye,0),b:new L(pe(124)+8,-i*Ye,0)}}),_r=new L,gr=new L,oi={lon:120.957,lat:23.47,h:3952},Cn=document.createElement("div");Cn.className="peakTag";document.body.appendChild(Cn);const Hi=new L,Ss=document.createElement("div");Ss.className="peakLine";document.body.appendChild(Ss);const vr=new L,vc=26;function Fg(){const i=Ue.real?1:gi,t=`<b>玉山</b> 3,952 m${fn("yushan")}<br><span>${Ue.real?"原始高度":`高度 ×${gi}`}</span>`;Cn._h!==t&&(Cn.innerHTML=t,Cn._h=t),Hi.set(pe(oi.lon),oi.h/1e3*Ye*i+cn.position.y,De(oi.lat)).project(Xt);const e=Hi.z<1&&Math.abs(Hi.x)<1.05&&Math.abs(Hi.y)<1.05;Cn.style.display=e?"block":"none";let n=!1;if(e){let s=(Hi.x+1)/2*innerWidth,r=(1-Hi.y)/2*innerHeight;if(vr.set(pe(oi.lon),Math.max(0,Ue.heightAt(oi.lon,oi.lat))/1e3*Ye*i+cn.position.y,De(oi.lat)).project(Xt),vr.z<1){const a=(vr.x+1)/2*innerWidth,o=(1-vr.y)/2*innerHeight;Math.hypot(a-s,o-r)<vc&&(s=a,r=o-vc);const l=Math.hypot(a-s,o-r);n=!0,Ss.style.height=l+"px",Ss.style.transform=`translate(${s}px, ${r}px) rotate(${Math.atan2(s-a,o-r)}rad)`}Cn.style.transform=`translate(-50%, -100%) translate(${s}px, ${r}px)`}Ss.style.display=n?"block":"none"}const Us=document.createElement("button");Us.id="compass";Us.title="點一下轉回北方朝上";Us.innerHTML='<svg viewBox="-24 -24 48 48" width="48" height="48"><circle r="21" fill="rgba(15,20,30,.72)" stroke="rgba(255,255,255,.35)"/><g id="cneedle"><path d="M0,-17 L6,0 L0,-3 L-6,0Z" fill="#ff3b30"/><path d="M0,17 L6,0 L0,3 L-6,0Z" fill="#cfd8e6"/><text y="-8" text-anchor="middle" font-size="0" fill="#fff"></text></g></svg><span id="cN">N</span>';document.body.appendChild(Us);const wa=new L,Aa=new L;let Tr=0;function Og(){const i=_e.target;wa.copy(i).project(Xt),Aa.set(i.x,i.y,i.z-50).project(Xt);const t=(Aa.x-wa.x)*innerWidth,e=-(Aa.y-wa.y)*innerHeight;if(Math.hypot(t,e)<.001)return;Tr=Math.atan2(t,-e)*180/Math.PI,wt("cneedle").setAttribute("transform",`rotate(${Tr.toFixed(1)})`);const n=15,s=Tr*Math.PI/180;wt("cN").style.transform=`translate(${(n+13)*Math.sin(s)}px, ${-28*Math.cos(s)}px)`}Us.addEventListener("click",()=>{const i=_e.target,t=Xt.position.clone().sub(i),e=Math.hypot(t.x,t.z),n=Math.atan2(t.x,t.z),s=performance.now(),r=600;let a=-n;a>Math.PI&&(a-=2*Math.PI),a<-Math.PI&&(a+=2*Math.PI);const o=()=>{const l=Math.min(1,(performance.now()-s)/r),c=1-Math.pow(1-l,3),h=n+a*c;Xt.position.set(i.x+e*Math.sin(h),Xt.position.y,i.z+e*Math.cos(h)),_e.update(),l<1&&requestAnimationFrame(o)};o()});window.__compass=()=>Tr;const as=document.createElement("button");as.id="homeBtn";as.title="回到預設視角";as.innerHTML='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#fff" stroke-width="2" stroke-linejoin="round"><path d="M3 11 12 4l9 7"/><path d="M6 10v9h12v-9"/></svg><span>回預設視角</span>';document.body.appendChild(as);as.addEventListener("click",()=>{const i=Kn()?[0,1047,1147]:[0,579,679];Oe={start:performance.now(),p0:Xt.position.clone(),t0:_e.target.clone(),p1:new L(...i),t1:new L(0,-100,0)}});const Bg={top:{d:[[0,1180,330],[0,1700,470]],t:[0,-60,20]},east:{d:[[1150,60,-50],[1700,120,-50]],t:[0,-165,-50]},south:{d:[[30,60,1150],[30,120,1700]],t:[30,-165,0]}};let hh=null;const zo=i=>{hh=i;for(const t of document.querySelectorAll(".vb"))t.classList.toggle("on",t.dataset.view===i)},uh=i=>{const t=Bg[i];t&&(Oe={start:performance.now(),dur:800,p0:Xt.position.clone(),t0:_e.target.clone(),p1:new L(...t.d[Kn()?1:0]),t1:new L(...t.t)},zo(i))};document.querySelectorAll(".vb").forEach(i=>i.addEventListener("click",()=>uh(i.dataset.view)));_e.addEventListener("start",()=>{Oe=null,zo(null)});as.addEventListener("click",()=>zo(null));window.__goView=uh;window.__view=()=>hh;const zg=new L(pe(118.5),-320,De(26.5)),kg=new L(pe(123.5),20,De(20.5));_e.addEventListener("change",()=>{const i=_e.target,t=i.clone().clamp(zg,kg);if(!t.equals(i)){const e=t.sub(i);i.add(e),Xt.position.add(e)}});function Hg(){const i=innerWidth,t=innerHeight;for(const e of Ng){let n=!1;if(ch.visible){_r.copy(e.a).project(Xt),gr.copy(e.b).project(Xt);const s=(_r.x+1)/2*i,r=(1-_r.y)/2*t,a=(gr.x+1)/2*i,o=(1-gr.y)/2*t,l=_r.z<1&&gr.z<1,c=i-6,[h,u,d,m]=s<a?[s,r,a,o]:[a,o,s,r];if(l&&d>c&&h<c){const _=u+(m-u)*(c-h)/(d-h);_>40&&_<t-90&&(n=!0,e.el.style.transform=`translate(-100%, -120%) translate(${c}px, ${_}px)`)}}e.el.style.display=n?"block":"none"}}const Mo=[["台北市",121.564,25.037],["台中市",120.647,24.162],["高雄市",120.312,22.621],["花蓮縣",121.601,23.991],["台南市",120.185,22.992],["台東縣",121.146,22.756],["新竹市",120.968,24.806],["嘉義市",120.449,23.48],["宜蘭縣",121.754,24.752],["新北市",121.465,25.012],["桃園市",121.301,24.993],["基隆市",121.744,25.131],["屏東縣",120.488,22.668],["苗栗縣",120.821,24.56],["彰化縣",120.542,24.076],["南投縣",120.684,23.902],["雲林縣",120.527,23.7],["新竹縣",121.004,24.827],["嘉義縣",120.333,23.459],["澎湖縣",119.566,23.57],["金門縣",118.317,24.437],["連江縣",119.95,26.16]].map(([i,t,e])=>{const n=document.createElement("div");return n.className="cityTag",n.textContent=i,document.body.appendChild(n),{name:i,lon:t,lat:e,el:n}}),Vi=new L;function Vg(){const i=wt("cities").checked,t=Ue.real?1:gi,e=[],n=Cn.style.display!=="none"?(s=>[s.left,s.top,s.right,s.bottom])(Cn.getBoundingClientRect()):null;for(const s of Mo){s===Mo[1]&&n&&e.push(n);let r=!1;if(i&&(Vi.set(pe(s.lon),Math.max(0,Ue.heightAt(s.lon,s.lat))/1e3*Ye*t+cn.position.y,De(s.lat)).project(Xt),r=Vi.z<1&&Math.abs(Vi.x)<1.02&&Math.abs(Vi.y)<1.02,r)){const a=(Vi.x+1)/2*innerWidth,o=(1-Vi.y)/2*innerHeight+4,l=s.name.length*6+2,c=[a-l,o-22,a+l,o];r=!e.some(h=>c[0]<h[2]&&c[2]>h[0]&&c[1]<h[3]&&c[3]>h[1]),r&&(e.push(c),s.el.style.transform=`translate(-50%, -100%) translate(${a}px, ${o}px)`)}s.el.style.display=r?"block":"none"}}window.__cities=()=>Mo.map(i=>({name:i.name,shown:i.el.style.display!=="none"}));let yo=()=>{};const Es=[],dh=new Fo(.9,1,64);dh.rotateX(-Math.PI/2);function xc(i){const t=Math.min(1,Math.max(0,(i.mag-5)/2.5)),e=18+42*t,n=performance.now(),s=(r,a,o,l)=>{const c=new ze(dh,new Or({color:o,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,side:Xe}));c.position.set(i.x,r,i.z),c.renderOrder=25,c.visible=!1,He.add(c),Es.push({m:c,t0:n+a,life:l,R:e})};for(let r=0;r<3;r++)s(i.y,r*220,16773577,1300+900*t);s(cn.position.y+.5,250+-i.y*4,16757575,1500+900*t)}function Gg(i){for(let t=Es.length-1;t>=0;t--){const e=Es[t],n=(i-e.t0)/e.life;if(n<0)continue;if(n>=1){He.remove(e.m),e.m.material.dispose(),Es.splice(t,1);continue}const s=1.5+e.R*(1-(1-n)**2);e.m.visible=!0,e.m.scale.set(s,1,s),e.m.material.opacity=.9*(1-n)}}window.__waves=()=>Es.length;const Ki=[],Wg=(()=>{const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d");t.strokeStyle="#ff3b30",t.lineWidth=12,t.beginPath(),t.arc(64,64,48,0,Math.PI*2),t.stroke();const e=new Ds(i);return e.colorSpace=be,e})(),fh={"1935-04-21":"新竹－臺中地震","1941-12-17":"中埔地震","1951-10-22":"花東縱谷地震","1951-11-25":"花東縱谷地震","1999-09-21":"921 大地震","2024-04-03":"0403 花蓮地震"},Xg=(i,t)=>fh[i.dt.slice(0,10)]||`${i.yr} ${t}地震`;function Yg(i,t,e){const n=performance.now(),s=Math.max(cn.position.y,0)+70,r=new Qe,a=new ce;a.setAttribute("position",new ue([i.x,i.y,i.z,i.x,s,i.z],3));const o=new kr(a,new Nn({color:16726832,depthTest:!1,transparent:!0})),l=new Ls(new rs({map:Wg,depthTest:!1,transparent:!0,sizeAttenuation:!1}));l.position.set(i.x,i.y,i.z),o.renderOrder=l.renderOrder=30,r.add(o,l),He.add(r);const c=document.createElement("div");c.className="m7label";const h=Xg(i,t);c.innerHTML=`<b>${h}</b><br>${i.yr} 年　M${i.mag.toFixed(1)}`,document.body.appendChild(c);const u=wt("m7toast");u.innerHTML=`⚠ ${i.yr} 年　${h}　M${i.mag.toFixed(1)}`,u.classList.add("show"),clearTimeout(u._t),u._t=setTimeout(()=>u.classList.remove("show"),e),Ki.push({grp:r,label:c,t0:n,life:e,top:new L(i.x,s,i.z)})}const Gi=new L;function qg(i){for(let t=Ki.length-1;t>=0;t--){const e=Ki[t],n=(i-e.t0)/e.life;if(n>=1){He.remove(e.grp),e.grp.children.forEach(c=>{var h;(h=c.geometry)==null||h.dispose(),c.material.dispose()}),e.label.remove(),Ki.splice(t,1);continue}const s=n<.1?n/.1:n>.75?(1-n)/.25:1,r=.5+.5*Math.sin(i/110),[a,o]=e.grp.children;a.material.opacity=s*(.6+.4*r),o.material.opacity=s,o.scale.setScalar(.05+.03*r),Gi.copy(e.top).project(Xt);const l=Gi.z<1&&Math.abs(Gi.x)<1.1&&Math.abs(Gi.y)<1.1;e.label.style.display=l?"block":"none",e.label.style.transform=`translate(-50%, -100%) translate(${(Gi.x+1)/2*innerWidth}px, ${(1-Gi.y)/2*innerHeight-6}px)`,e.label.style.opacity=s}}window.__alerts=()=>Ki.map(i=>({text:i.label.textContent,shown:i.label.style.display!=="none"}));const Le={ctx:null,on:!1,tones:0},Ra=new WeakMap;function jg(i){if(Ra.has(i))return Ra.get(i);const t=i.sampleRate*3,e=i.createBuffer(1,t,i.sampleRate),n=e.getChannelData(0);let s=0;for(let r=0;r<t;r++)s=(s+.02*(Math.random()*2-1))/1.02,n[r]=s*3.5;return Ra.set(i,e),e}function Hr(i,t,e=Le.ctx){if(!e)return;const n=Math.min(1,Math.max(0,(i-5)/2.5)),s=e.currentTime+.02+t,r=.12+.2*n,a=1.2+2.3*n,o=.5+.4*n,l=e.createGain();l.connect(e.destination),l.gain.setValueAtTime(1e-4,s),l.gain.exponentialRampToValueAtTime(o,s+r),l.gain.exponentialRampToValueAtTime(1e-4,s+a);const c=e.createBufferSource();c.buffer=jg(e),c.loop=!0;const h=e.createBiquadFilter();h.type="lowpass",h.Q.value=.8,h.frequency.setValueAtTime(220-60*n,s),h.frequency.exponentialRampToValueAtTime(110,s+a);const u=e.createGain();u.gain.value=1.6;const d=e.createOscillator(),m=e.createGain();d.frequency.value=5-2*n,m.gain.value=.8,d.connect(m).connect(u.gain),c.connect(h).connect(u).connect(l);const _=e.createOscillator(),v=e.createGain();_.type="sine",_.frequency.setValueAtTime(55-15*n,s),_.frequency.exponentialRampToValueAtTime(30-5*n,s+a),v.gain.value=.5,_.connect(v).connect(l);for(const p of[c,d,_])p.start(s,p===c?Math.random()*2:void 0),p.stop(s+a+.05);e===Le.ctx&&(Le.tones++,navigator.vibrate&&setTimeout(()=>{Le.on&&navigator.vibrate(Math.round(120+280*n))},Math.max(0,t*1e3)))}window.__renderSeq=async(i,t)=>{const e=new OfflineAudioContext(1,44100*t,44100);for(const[n,s]of i)Hr(n,s,e);return Array.from((await e.startRendering()).getChannelData(0))};window.__renderTone=async i=>{const e=new OfflineAudioContext(1,176400,44100);Hr(i,0,e);const n=(await e.startRendering()).getChannelData(0);let s=0;for(const l of n)s=Math.max(s,Math.abs(l));const r=(l,c)=>{let h=0;const u=8192,d=44100*.3|0;for(let m=l;m<c;m+=5){let _=0,v=0;for(let p=0;p<u;p++){const f=2*Math.PI*m*p/44100;_+=n[d+p]*Math.cos(f),v+=n[d+p]*Math.sin(f)}h+=_*_+v*v}return h},a=[r(15,70),r(70,250),r(250,600),r(600,2e3)],o=a.reduce((l,c)=>l+c);return{peak:+s.toFixed(3),shares:a.map(l=>+(l/o*100).toFixed(1))}};let Yn=null;function $g(){const t=new Uint8Array(4044),e=new DataView(t.buffer),n=(s,r)=>[...r].forEach((a,o)=>t[s+o]=a.charCodeAt(0));return n(0,"RIFF"),e.setUint32(4,4036,!0),n(8,"WAVEfmt "),e.setUint32(16,16,!0),e.setUint16(20,1,!0),e.setUint16(22,1,!0),e.setUint32(24,8e3,!0),e.setUint32(28,8e3,!0),e.setUint16(32,1,!0),e.setUint16(34,8,!0),n(36,"data"),e.setUint32(40,4e3,!0),t.fill(128,44),URL.createObjectURL(new Blob([t],{type:"audio/wav"}))}function ko(){try{navigator.audioSession&&(navigator.audioSession.type="playback")}catch{}Yn||(Yn=new Audio($g()),Yn.loop=!0,Yn.setAttribute("playsinline","")),Yn.play().catch(()=>{});const i=window.AudioContext||window.webkitAudioContext;Le.ctx||(Le.ctx=new i);const t=Le.ctx,e=t.createBufferSource();return e.buffer=t.createBuffer(1,1,22050),e.connect(t.destination),e.start(0),t.state==="running"?Promise.resolve():t.resume()}function ph(i=4){try{ko();const t=Le.ctx,e=t.currentTime+.01,n=1400*Math.pow(.86,Math.max(0,i-3)),s=t.createGain();s.gain.value=.18,s.connect(t.destination);const r=(a,o,l,c,h,u)=>{const d=t.createOscillator(),m=t.createGain();d.type=h,d.frequency.setValueAtTime(a,e+l),d.frequency.exponentialRampToValueAtTime(o,e+l+c*.6),m.gain.setValueAtTime(1e-4,e+l),m.gain.exponentialRampToValueAtTime(u,e+l+.008),m.gain.exponentialRampToValueAtTime(1e-4,e+l+c),d.connect(m).connect(s),d.start(e+l),d.stop(e+l+c+.02)};r(n*.5,n,0,.09,"square",.25),r(n*1.5,n*1.5,.085,.22,"sine",.6),r(n*3,n*3.02,.085,.12,"sine",.15)}catch(t){console.warn("blip",t)}}window.__blip=ph;wt("sound").addEventListener("click",i=>{Le.on=i.target.checked,Le.on?ko().then(()=>Hr(5.2,0)).catch(t=>console.warn("audio",t)):Yn==null||Yn.pause()});(async()=>{var i;try{let t=function(){m=null,a.grp.visible=!1;for(const T of wt("rankList").children)T.classList.remove("sel");st()},e=function(){C>=0&&!Kt(C)&&st()};const[,n,s]=await Promise.all([Cg(),Pg(),Lg()]),r=Dg(n),a=Ug(),o=Math.max(...s.hist.keys());let l=Ir,c=3,h="depth",u=o,d=null,m=null,_=[];const v=s.mat.uniforms,p=s.g.attributes.color,f=()=>{const T=gc[h].map(ct=>new Vt(ct)),k=p.array,B=new Vt;for(let ct=0;ct<s.n;ct++){let rt;if(h==="year"){const mt=Math.min(1,Math.max(0,(s.yearA[ct]-l.y0)/(o+1-l.y0)))*(T.length-1),Ut=Math.min(T.length-2,Math.floor(mt));rt=B.copy(T[Ut]).lerp(T[Ut+1],mt-Ut)}else{let mt=0;for(;s.depA[ct]>Tg[mt];)mt++;rt=T[mt]}k[ct*3]=rt.r,k[ct*3+1]=rt.g,k[ct*3+2]=rt.b}p.needsUpdate=!0;const at=gc[h];wt("legend").innerHTML=h==="year"?`<div class="grad" style="background:linear-gradient(90deg,${at.join(",")})"></div><div class="gl"><span>${l.y0}</span><span>${o}</span></div>`:at.map((ct,rt)=>`<div><span class="sw" style="background:${ct}"></span>${wg[rt]}</div>`).join("")};wt("colorMode").addEventListener("change",T=>{h=T.target.value,f()});const w=wt("year"),b=wt("solo"),S=()=>b.checked,N=()=>c,P=T=>{const k=s.hist.get(T);return k?k[Math.round(c*2)]:0},R=()=>{let T=0;for(let k=S()?u:l.y0;k<=u;k++)T+=P(k);return T},D=wt("yearBars"),y=()=>{let T=1;for(let B=l.y0;B<=o;B++)T=Math.max(T,P(B));let k="";for(let B=l.y0;B<=o;B++)k+=`<i data-y="${B}" title="${B} 年：${P(B).toLocaleString()} 筆" style="height:${(P(B)/T*100).toFixed(1)}%"></i>`;D.innerHTML=k},x=()=>{for(const T of D.children){const k=+T.dataset.y;T.classList.toggle("cur",k===u),T.classList.toggle("fut",S()?k!==u:k>u)}},A=()=>{const T=S();v.uY0.value=T?u:l.y0,v.uM.value=N(),v.uY1.value=u;const k=!T&&(d||u<o);v.uNow.value=k?u:-1,w.min=l.y0,w.max=o,w.value=u,wt("bigYear").textContent=u,wt("bigYear").classList.toggle("on",!!(k||T)),wt("yearText").textContent=T||u===l.y0?`${u} 年`:`${l.y0}–${u} 年`,wt("countText").innerHTML=`<span class="long">　</span>${R().toLocaleString()} 筆${k?`<span class="long">，亮點＝${u} 年</span>`:""}`,wt("magNote").textContent=`目前顯示 ${R().toLocaleString()} 筆`,x(),e()},X=()=>{if(Le.on){const T=s.m5.filter(B=>B.yr===u&&B.mag>=Math.max(6,N())).sort((B,at)=>at.mag-B.mag).slice(0,8),k=$();for(const B of T)Hr(B.mag,B.frac*k/1e3),setTimeout(()=>xc(B),B.frac*k)}if(d){const T=$(),k=1800;for(const B of s.big.filter(at=>at.yr===u&&at.mag>=7&&at.mag>=N()))setTimeout(()=>{d&&(j=Math.max(j,performance.now()+k+250),Yg(B,r(B.lon,B.lat),k),Le.on||xc(B))},((+B.dt.slice(5,7)-1)*31+(+B.dt.slice(8,10)-1))/372*T);_.forEach((B,at)=>{B.yr===u&&setTimeout(()=>{if(!d)return;const ct=wt("rankList").children[at];ct&&(ct.classList.add("live"),ct.scrollIntoView({block:"nearest"}),clearTimeout(ct._t),ct._t=setTimeout(()=>ct.classList.remove("live"),k+250))},((+B.dt.slice(5,7)-1)*31+(+B.dt.slice(8,10)-1))/372*T)})}A()},H=700,Z=[.25,.5,1,2];let Q=1,j=0,et=!1,W=0;const $=()=>H/Q,lt=()=>{clearInterval(d),d=setInterval(()=>{const T=performance.now();if(!(T<j||Ki.length&&T<j+1500)){if(u>=o){if(!et)return ht();if(++W<3)return;W=0,u=l.y0,X();return}u++,X()}},$())},ht=()=>{clearInterval(d),d=null,wt("play").textContent="▶",wt("play").ariaLabel="播放",A()},nt=()=>{u>=o&&(u=l.y0),lt(),wt("play").textContent="❚❚",wt("play").ariaLabel="暫停",X()};wt("speed").addEventListener("click",()=>{Q=Z[(Z.indexOf(Q)+1)%Z.length],wt("speed").textContent=`${Q}x`,wt("speed").ariaLabel=`播放速度 ${Q} 倍`,d&&lt()}),window.__speed=()=>({speed:Q,stepMs:$()}),wt("loop").addEventListener("click",T=>{et=!et,W=0,T.currentTarget.setAttribute("aria-pressed",et)}),window.__loop=()=>et,wt("play").addEventListener("click",()=>{Le.on&&ko().catch(()=>{}),d?ht():nt()}),w.addEventListener("input",()=>{d&&ht(),u=+w.value,A()}),b.addEventListener("change",A),D.addEventListener("pointerup",T=>{const k=D.getBoundingClientRect(),B=D.children.length,at=Math.floor((T.clientX-k.left-7)/(k.width-14)*B);at<0||at>=B||(d&&ht(),u=l.y0+at,A())}),window.__bars=()=>Object.fromEntries([...D.children].map(T=>[T.dataset.y,{n:P(+T.dataset.y),h:T.style.height,cur:T.classList.contains("cur")}]));const dt=T=>`${T.lat.toFixed(2)}°N ${T.lon.toFixed(2)}°E`,I=()=>{_=s.big.filter(T=>T.yr>=l.y0&&T.mag>=c).sort((T,k)=>k.mag-T.mag||T.dt.localeCompare(k.dt)).slice(0,10).map(T=>({...T,place:r(T.lon,T.lat)})),wt("rankScope").textContent=`${l.y0}–${o} 年`,wt("rankList").innerHTML=_.map((T,k)=>`<li data-i="${k}"><div class="m">${T.mag.toFixed(1)}</div><div class="d">${T.dt.slice(0,10)}<i class="sp">　</i><b class="pl">${T.place}</b><br class="xb"><span>深 ${Math.round(T.dep)} 公里 · ${dt(T)}</span></div></li>`).join(""),m=null,a.grp.visible=!1},q=T=>{const k=Xt.position.clone().sub(_e.target).normalize(),B=new L(T.x,T.y,T.z);Oe={start:performance.now(),p0:Xt.position.clone(),t0:_e.target.clone(),p1:B.clone().add(k.multiplyScalar(320)),t1:B}};wt("rankList").addEventListener("click",T=>{const k=T.target.closest("li");if(!k)return;if(m===+k.dataset.i&&a.grp.visible){t();return}const B=_[+k.dataset.i];m=+k.dataset.i;for(const ct of wt("rankList").children)ct.classList.toggle("sel",ct===k);d&&ht(),(S()?u!==B.yr:u<B.yr)&&(u=S()?B.yr:o,A()),a.set(B),q(B);const at=Bt(B.dt,B.mag);at>=0&&J(at)});const tt=T=>{if(wt("rank").classList.toggle("open",T),T&&Kn()&&(wt("panel").classList.add("collapsed"),wt("collapse").textContent="設定"),T&&Kn()?Xt.setViewOffset(innerWidth,innerHeight,0,innerHeight*.1,innerWidth,innerHeight):Xt.clearViewOffset(),!T){a.grp.visible=!1,m=null;for(const k of wt("rankList").children)k.classList.remove("sel")}};wt("rankBtn").addEventListener("click",()=>tt(!wt("rank").classList.contains("open"))),wt("rankClose").addEventListener("click",()=>tt(!1)),wt("allData").addEventListener("change",T=>{d&&ht(),l=T.target.checked?bg:Ir,u=o;const k=wt("magMin");k.min=l.mMin<0?0:3,c<+k.min&&(c=+k.min),k.value=c,ot(),f(),I(),y(),A(),K()});const K=()=>{wt("magVal").textContent=c===0?"全部規模":`M${c.toFixed(1)} 以上`},ot=()=>{const T=wt("magMin");let k="";for(let B=+T.min;B<=+T.max;B++)k+=`<span>${B}</span>`;wt("magTicks").innerHTML=k};let ft="";const gt=(T,k=!0)=>{const B=wt("magMin");if(c=Math.min(+B.max,Math.max(+B.min,Math.round(T*2)/2)),B.value=c,K(),y(),A(),k){const at=s.big.filter(ct=>ct.yr>=l.y0&&ct.mag>=c).length;at!==ft&&(ft=at,I())}};wt("magMin").addEventListener("input",T=>gt(+T.target.value,!1)),wt("magMin").addEventListener("change",T=>gt(+T.target.value,!0)),window.__setMag=gt;const Rt=wt("qcard"),pt=new ne,At=new L;let C=-1;const Kt=T=>s.yearA[T]>=v.uY0.value&&s.yearA[T]<v.uY1.value+1&&s.magA[T]>=v.uM.value,Ft=(T,k)=>{Xt.updateMatrixWorld(),pt.multiplyMatrices(Xt.projectionMatrix,Xt.matrixWorldInverse);const B=pt.elements,at=Xt.matrixWorldInverse.elements,ct=s.g.attributes.position.array,rt=innerWidth,mt=innerHeight,Ut=Mn.getPixelRatio();let It=-1,bt=1e9,Ht=-1,Ot=-1,te=1e9;for(let U=0;U<s.n;U++){if(!Kt(U))continue;const vt=ct[U*3],Y=ct[U*3+1],it=ct[U*3+2],yt=B[3]*vt+B[7]*Y+B[11]*it+B[15];if(yt<=0)continue;const Et=((B[0]*vt+B[4]*Y+B[8]*it+B[12])/yt+1)/2*rt,kt=(1-(B[1]*vt+B[5]*Y+B[9]*it+B[13])/yt)/2*mt,Zt=Math.hypot(Et-T,kt-k);if(Zt>70)continue;const xe=-(at[2]*vt+at[6]*Y+at[10]*it+at[14]),$t=Math.min(64,Math.max(1,s.sizeA[U]*900/xe))/2/Ut;if(Zt<=$t){const Re=s.magA[U];(Re>Ot||Re===Ot&&Zt<te)&&(Ot=Re,te=Zt,Ht=U)}else Zt<=12&&Zt<bt&&(bt=Zt,It=U)}return Ht>=0?Ht:It},Mt=(T,k)=>String(T).padStart(k,"0"),xt=T=>{const k=s.ymdA[T],B=s.hmsA[T];return`${k/1e4|0}-${Mt((k/100|0)%100,2)}-${Mt(k%100,2)} ${Mt(B/1e4|0,2)}:${Mt((B/100|0)%100,2)}:${Mt(B%100,2)}`},Bt=(T,k)=>{for(let B=0;B<s.n;B++)if(Math.abs(s.magA[B]-k)<.01&&xt(B)===T)return B;return-1},St=T=>{const k=xt(T),B=s.magA[T],at=s.lonA[T],ct=s.latA[T],rt=B>=7&&fh[k.slice(0,10)]||null;return{i:T,dt:k,lon:+at.toFixed(3),lat:+ct.toFixed(3),mag:+B.toFixed(2),dep:+s.depA[T].toFixed(2),place:r(at,ct),name:rt}},E=T=>({x:s.g.attributes.position.array[T*3],y:s.g.attributes.position.array[T*3+1],z:s.g.attributes.position.array[T*3+2]});let g=0;for(let T=1;T<s.n;T++)s.depA[T]>s.depA[g]&&(g=T);mh.deepKm=()=>s.depA[g],window.__deep=()=>St(g);const z=T=>T.dt.startsWith("1999-09-21")&&T.mag>=7?fn(6,"這是什麼？"):T.i===g?fn(4,"為什麼這麼深？"):"",J=T=>{const k=St(T);C=T,wt("qbody").innerHTML=`${k.name?`<div class="qn">${k.name}</div>`:""}<div class="qm">M ${k.mag.toFixed(1)}</div><div>${k.dt}</div><div>${k.place}</div><div class="qs">${k.lat.toFixed(2)}°N ${k.lon.toFixed(2)}°E · 深 ${+k.dep.toFixed(1)} 公里</div>`+z(k),Rt.classList.add("show"),a.set(E(T)),yo(),ph(k.mag)},st=()=>{C<0||(C=-1,Rt.classList.remove("show"),m===null&&(a.grp.visible=!1))};yo=()=>{if(C<0)return;const T=E(C);if(At.set(T.x,T.y,T.z).project(Xt),At.z>1||Math.abs(At.x)>1.05||Math.abs(At.y)>1.05){Rt.style.visibility="hidden";return}Rt.style.visibility="";const k=(At.x+1)/2*innerWidth,B=(1-At.y)/2*innerHeight,at=Rt.offsetWidth,ct=Rt.offsetHeight;let rt=k+14,mt=B-ct-14;rt+at>innerWidth-8&&(rt=k-at-14),mt<8&&(mt=B+14),Rt.style.left=`${Math.max(8,Math.min(innerWidth-at-8,rt))}px`,Rt.style.top=`${Math.max(8,Math.min(innerHeight-ct-8,mt))}px`},Rt.querySelector(".x").addEventListener("click",()=>{m!==null?t():st()});{const T=Mn.domElement,k=new Map;let B=null;T.addEventListener("pointerdown",ct=>{k.set(ct.pointerId,1),B=k.size===1?{id:ct.pointerId,x:ct.clientX,y:ct.clientY,t:performance.now()}:null});const at=ct=>{var Ot;if(k.delete(ct.pointerId),!B||B.id!==ct.pointerId||ct.type==="pointercancel"){ct.pointerId===(B==null?void 0:B.id)&&(B=null);return}const rt=Math.hypot(ct.clientX-B.x,ct.clientY-B.y),mt=performance.now()-B.t;if(B=null,Kn()&&!wt("panel").classList.contains("collapsed")){rt<10&&mt<300&&lh(!0);return}if(!(rt<5&&mt<600))return;const It=wr==null?void 0:wr(ct.clientX,ct.clientY);if(It){(Ot=window.__eduOpen)==null||Ot.call(window,It);return}const bt=Ar==null?void 0:Ar(ct.clientX,ct.clientY),Ht=Ft(ct.clientX,ct.clientY);if(bt&&(Ht<0||bt.d<=12)){st(),So(bt.name,ct.clientX,ct.clientY,!0);return}if(Ht>=0){bs(),J(Ht);return}st(),bs()};T.addEventListener("pointerup",at),T.addEventListener("pointercancel",at)}window.__pick=(T,k)=>{const B=Ft(T,k);return B<0?null:St(B)},window.__card=()=>C<0?null:{...St(C),text:wt("qbody").textContent,shown:Rt.classList.contains("show")},window.__project=T=>{Xt.updateMatrixWorld();const k=E(T);return At.set(k.x,k.y,k.z).project(Xt),[(At.x+1)/2*innerWidth,(1-At.y)/2*innerHeight]},window.__find=T=>{for(let k=0;k<s.n;k++)if(xt(k)===T)return k;return-1},f(),I(),y(),A(),window.__state=()=>({scope:l,magMin:N(),year:u,playing:!!d,colorMode:h,visible:R(),uniforms:{y0:v.uY0.value,y1:v.uY1.value,m:v.uM.value,now:v.uNow.value},rankOpen:wt("rank").classList.contains("open"),rank:_.map(T=>({dt:T.dt,mag:T.mag,dep:T.dep,place:T.place})),selected:m,marker:a.grp.visible?a.ring.position.toArray():null,target:_e.target.toArray(),camera:Xt.position.toArray(),sound:Le.on,tones:Le.tones}),(i=window.__introDone)==null||i.call(window),window.__QUAKE_READY__={quakes:s.n,years:[Math.min(...s.hist.keys()),o],visible:R()}}catch(t){console.error(t),Bo("載入失敗："+t.message),window.__QUAKE_READY__={error:String(t)}}})();var wr=null;{const i=wt("plates"),t=wt("platesLegend"),e=(a,o)=>`<div><span class="sw" style="background:${a};opacity:.8"></span>${o}</div>`,n=(a,o)=>`<div><span class="ln" style="background:${a}"></span>${o}</div>`;t.innerHTML='<div class="lbl">板塊</div>'+e(pn.PS,"菲律賓海板塊"+fn("ps"))+e(pn.EU,"歐亞板塊"+fn("eu"))+n("#ffffff","海溝"+fn("ryu","琉球")+fn("man","馬尼拉"))+n("#b6ff7a","沖繩海槽"+fn("oki"))+n("#ffd166","碰撞帶（示意）"+fn("col"))+'<div><span class="sw" style="background:linear-gradient(135deg,'+pn.PS+","+pn.EU+');opacity:.45"></span>地下半透明的面＝往下插的板塊'+fn("slab")+"</div>";let s=null,r=null;i.addEventListener("change",async()=>{if(t.style.display=i.checked?"":"none",!s){if(r||(r=hg({scene:He,lid:cn,toX:pe,toZ:De,DEPTH_SCALE:Ye,TERRAIN_EXAG:Ur,LAND_EXAG:gi}).catch(a=>{console.error(a),Bo("板塊資料載入失敗："+a.message)})),s=await r,!s)return;s.setReal(Ue.real),Ue.onReal.push(a=>s.setReal(a)),wr=(a,o)=>s.pickLabel(a,o,Xt),window.__plateLabels=()=>(Xt.updateMatrixWorld(),s.labelScreen(Xt)),window.__PLATES_READY__={slabs:s.slabs,boundaries:s.boundaries}}s.setVisible(i.checked)})}var Ar=null,Rr=null,So=()=>{},bs=()=>{};{const i=wt("faults"),t=wt("fcard");let e=null,n=null,s=!1,r=null;const a=c=>`<div class="fn">${c}</div><div class="fk">活動斷層</div><div class="fw">位置為示意，非精確</div><div class="fw">更新世晚期（距今約十萬年）以來曾活動，未來可能再活動</div><div class="fs">來源：<a href="https://fault.gsmma.gov.tw/About/Fault_map" target="_blank" rel="noopener">經濟部地質調查及礦業管理中心</a></div>`,o=(c,h)=>{const u=t.offsetWidth,d=t.offsetHeight;let m=c+14,_=h-d-12;m+u>innerWidth-8&&(m=c-u-14),_<8&&(_=h+14),t.style.left=`${Math.max(8,Math.min(innerWidth-u-8,m))}px`,t.style.top=`${Math.max(8,Math.min(innerHeight-d-8,_))}px`};So=(c,h,u,d)=>{r=c,d&&(s=!0),t.innerHTML=a(c),t.classList.add("show"),o(h,u),e==null||e.setSelected(c)},bs=()=>{r=null,s=!1,t.classList.remove("show"),e==null||e.setSelected(null)};const l=async()=>e||(n||(n=gg({lid:cn,toX:pe,toZ:De,DEPTH_SCALE:Ye,TERRAIN_EXAG:Ur,LAND_EXAG:gi}).catch(c=>{console.error(c),Bo("斷層資料載入失敗："+c.message)})),e=await n,e?(e.setReal(Ue.real),Ue.onReal.push(c=>e.setReal(c)),Ar=(c,h)=>e.pick(c,h,Xt),Rr=c=>e.tick(c),window.__faultSel=()=>e.selected(),window.__FAULTS_READY__={names:e.names,count:e.count},window.__faultPoint=c=>(Xt.updateMatrixWorld(),e.project(c,Xt)),e):null);i.addEventListener("change",async()=>{if(!i.checked){e&&e.setVisible(!1),bs();return}const c=await l();if(!c){i.checked=!1;return}c.setVisible(!0)}),Mn.domElement.addEventListener("pointermove",c=>{if(!i.checked||!e||c.buttons||c.pointerType==="touch")return;const h=e.pick(c.clientX,c.clientY,Xt);h?So(h.name,c.clientX,c.clientY,!1):s||bs()}),window.__fault=()=>r&&t.classList.contains("show")?{name:r,text:t.textContent}:null,window.__setFaults=async c=>{if(i.checked=!!c,i.dispatchEvent(new Event("change")),c){const h=await l();return h?{names:h.names,count:h.count}:null}return{off:!0}}}const mh={deepKm:()=>null};Mg({deepKm:()=>mh.deepKm()});Mn.setAnimationLoop(()=>{if(Oe){const t=Math.min(1,(performance.now()-Oe.start)/(Oe.dur||1200)),e=t<.5?2*t*t:1-(-2*t+2)**2/2;Xt.position.lerpVectors(Oe.p0,Oe.p1,e),_e.target.lerpVectors(Oe.t0,Oe.t1,e),t>=1&&(Oe=null)}const i=performance.now();Gg(i),qg(i),Hg(),Fg(),Og(),Vg(),yo(),Rr==null||Rr(i),_e.update(),Mn.render(He,Xt)});wt("ruler").addEventListener("change",i=>{ch.visible=i.target.checked});{const i=wt("frameBox"),t="tq3d.frameBox";try{localStorage.getItem(t)==="0"&&(i.checked=!1)}catch{}const e=()=>{Ig.visible=i.checked};i.addEventListener("change",()=>{e();try{localStorage.setItem(t,i.checked?"1":"0")}catch{}}),e()}window.__setCam=(i,t)=>{Xt.position.set(...i),_e.target.set(...t),_e.update()};wt("realH").addEventListener("change",i=>Ue.setReal(i.target.checked));window.__real=()=>Ue.real;

this.CanvasRenderingContext2D&&!CanvasRenderingContext2D.createImageData&&(CanvasRenderingContext2D.prototype.createImageData=function(a,b){return this.getImageData(0,0,a,b)});
function Fluid(a){function b(u,c,s){for(var a=0;a<m;a++)u[a]=u[a]+s*c[a]}function i(u,c){if(u===1){for(var a=1;a<=l;a++){c[a]=c[a+e];c[a+(n+1)*e]=c[a+n*e]}for(var b=1;a<=n;a++){c[b*e]=-c[1+b*e];c[l+1+b*e]=-c[l+b*e]}}else{if(u===2)for(a=1;a<=l;a++){c[a]=-c[a+e];c[a+(n+1)*e]=-c[a+n*e]}else for(a=1;a<=l;a++){c[a]=c[a+e];c[a+(n+1)*e]=c[a+n*e]}for(b=1;b<=n;b++){c[b*e]=c[1+b*e];c[l+1+b*e]=c[l+b*e]}}a=(n+1)*e;c[0]=0.5*(c[1]+c[e]);c[a]=0.5*(c[1+a]+c[n*e]);c[l+1]=0.5*(c[l]+c[l+1+e]);c[l+1+a]=0.5*(c[l+a]+c[l+
1+n*e])}function t(a,c,b,h,f){if(h===0&&f===1){for(f=1;f<=n;f++){var d=f*e;++d;for(var g=0;g<l;g++){c[d]=b[d];++d}}i(a,c)}else for(var k=1/f,j=0;j<C;j++){for(f=1;f<=n;f++){var D=(f-1)*e,d=f*e,U=(f+1)*e,m=c[d];++d;for(g=1;g<=l;g++)m=c[d]=(b[d]+h*(m+c[++d]+c[++D]+c[++U]))*k}i(a,c)}}function v(a){for(var c=0;c<m;c++)a[c]=a[c]*V}function o(a,c,b,h,f,d){for(var g=d*l,d=d*n,k=l+0.5,j=n+0.5,D=1;D<=n;D++)for(var m=D*e,t=1;t<=l;t++){var o=t-g*h[++m],w=D-d*f[m];o<0.5?o=0.5:o>k&&(o=k);var q=o|0,v=q+1;w<0.5?
w=0.5:w>j&&(w=j);var p=w|0,o=o-q,w=w-p,A=1-w,B=p*e,p=(p+1)*e;c[m]=(1-o)*(A*b[q+B]+w*b[q+p])+o*(A*b[v+B]+w*b[v+p])}i(a,c)}function N(a,c,b,h){for(var f=-0.5/Math.sqrt(l*n),d=1;d<=n;d++)for(var g=d*e,k=(d-1)*e,j=g-1,m=g,o=g+1,g=(d+1)*e,p=1;p<=l;p++){h[++m]=f*(a[++o]-a[++j]+c[++g]-c[++k]);b[m]=0}i(0,h);i(0,b);t(0,b,h,1,4);h=0.5*l;f=0.5*n;for(d=1;d<=n;d++){k=d*e-1;j=d*e;m=d*e+1;o=(d-1)*e;g=(d+1)*e;for(p=1;p<=l;p++){a[++j]-=h*(b[++m]-b[++k]);c[j]=c[j]-f*(b[++g]-b[++o])}}i(1,a);i(2,c)}function O(a,c,b,
h,f){this.setDensityRGB=function(d,g,f){a[d+1+(g+1)*e]=f[0];c[d+1+(g+1)*e]=f[1];b[d+1+(g+1)*e]=f[2]};this.getDensityRGB=function(d,g){return[a[d+1+(g+1)*e],c[d+1+(g+1)*e],b[d+1+(g+1)*e]]};this.setVelocity=function(a,b,c,u){h[a+1+(b+1)*e]=c;f[a+1+(b+1)*e]=u};this.setVelocityInterp=function(a,b,c,u){var f=e;rI=a+2;rJ=b+2;i1=a+2;i2=rI-i1<0?a+3:a+1;j1=b+2;j2=rJ-j1<0?b+3:b+1;diffx=1-(rI-i1);diffy=1-(rJ-j1);vx1=c*diffx*diffy;vy1=u*diffy*diffx;vx2=c*(1-diffx)*diffy;vy2=u*diffy*(1-diffx);vx3=c*diffx*(1-diffy);
vy3=u*(1-diffy)*diffx;vx4=c*(1-diffx)*(1-diffy);vy4=u*(1-diffy)*(1-diffx);if(!(i1<2||i1>e-1||j1<2||j1>f-1)){this.setVelocity(i1,j1,vx1,vy1);this.setVelocity(i2,j1,vx2,vy2);this.setVelocity(i1,j2,vx3,vy3);this.setVelocity(i2,j2,vx4,vy4)}};this.getXVelocity=function(a,b){return h[a+1+(b+1)*e]};this.getYVelocity=function(a,b){return f[a+1+(b+1)*e]};this.width=function(){return l};this.height=function(){return n}}function P(){e=l+2;m=(l+2)*(n+2);F=Array(m);G=Array(m);H=Array(m);I=Array(m);J=Array(m);
K=Array(m);A=Array(m);B=Array(m);E=Array(m);M=Array(m);for(var a=0;a<m;a++){B[a]=M[a]=A[a]=E[a]=0;F[a]=H[a]=J[a]=G[a]=I[a]=K[a]=0}}function W(b){var c=a.getContext("2d"),e=b.width(),h=b.height();a:if(!p||!(p.width==b.width()&&p.height==b.height())){p=document.createElement("canvas");p.width=b.width();p.height=b.height();var f=p.getContext("2d");try{q=f.createImageData(b.width(),b.height())}catch(d){break a}if(q){for(var f=b.width()*b.height()*4,g=3;g<f;g=g+4)q.data[g]=255;q.data[0]=256;q.data[0]>
255&&(Q=true);q.data[0]=0}}if(pong.display&&pong.ball.x<e&&pong.ball.x>0&&pong.ball.y>0&&pong.ball.y<h){pong.ball.vy=pong.ball.vy+b.getYVelocity(Math.round(pong.ball.x),Math.round(pong.ball.y))/5;pong.ball.vx=pong.ball.vx+b.getXVelocity(Math.round(pong.ball.x),Math.round(pong.ball.y))/5}if(q){f=q.data;if(Q)for(g=0;g<e;g++)for(var k=0;k<h;k++){var j=b.getDensity(g,k)*255/5,j=j|0;j>255&&(j=255);f[4*(k*h+g)+1]=j}else for(g=0;g<e;g++)for(k=0;k<h;k++){var j=4*(k*h+g),i=b.getDensityRGB(g,k);f[j+0]=Math.round(i[0]*
255/5);f[j+1]=Math.round(i[1]*255/5);f[j+2]=Math.round(i[2]*255/5)}c.putImageData(q,0,0)}else for(g=0;g<e;g++)for(k=0;k<h;k++){j=b.getDensity(g,k)/5;c.setFillColor(0,j,0,1);c.fillRect(g,k,1,1)}}function X(b){var c=a.getContext("2d");c.save();c.lineWidth=1;var e=a.width/b.width(),h=a.height/b.height();c.fillStyle="black";c.fillRect(0,0,a.width,a.height);c.strokeStyle="rgb(0,255,0)";c.beginPath();for(var f=0;f<b.width();f++)for(var d=0;d<b.height();d++){c.moveTo(f*e+0.5*e,d*h+0.5*h);c.lineTo((f+0.5+
10*b.getXVelocity(f,d))*e,(d+0.5+10*b.getYVelocity(f,d))*h)}c.stroke();c.restore()}var V=0.99,R=function(){};this.update=function(){for(var a=G,c=I,s=K,h=B,f=M,d=0;d<m;d++)a[d]=c[d]=s[d]=0;R(new O(a,c,s,h,f));a=A;c=E;s=B;h=M;f=S;b(a,s,f);b(c,h,f);for(var d=s,s=a,a=d,d=h,h=c,c=d,d=a,g=s,k=c,j=h,p=1;p<=n;p++){var q=p*e;++q;for(var C=0;C<l;C++){d[q]=g[q];k[q]=j[q];++q}}i(1,d);i(2,k);N(a,c,s,h);d=s;s=a;a=d;d=h;h=c;c=d;o(1,a,s,s,h,f);o(2,c,h,s,h,f);N(a,c,s,h);if(B){a=G;c=I;s=K;h=F;f=H;d=J;g=A;k=E;j=S;
v(h);v(f);v(d);b(h,a,j);b(f,c,j);b(d,s,j);t(0,a,h,0,1);t(0,c,f,0,1);t(0,s,d,0,1);o(0,h,a,g,k,j);o(0,f,c,g,k,j);o(0,d,s,g,k,j)}T(new O(F,H,J,A,E))};this.setDisplayFunction=function(a){T=a};this.iterations=function(){return C};this.setIterations=function(a){a>0&&a<=100&&(C=a)};this.setUICallback=function(a){R=a};var C=10,S=0.1,F,G,H,I,J,K,A,B,E,M,l,n,e,m,T;this.reset=P;this.setResolution=function(a,b){var e=b*a;if(e>0&&e<1E6&&(b!=l||a!=n)){l=b;n=a;P();return true}return false};var p,q,Q=false,a=document.getElementById("canvas");
this.toggleDisplayFunction=function(a,b){if(b){a.width=displaySize;a.height=displaySize;return X}a.width=fieldRes;a.height=fieldRes;return W}};function Pong(a){this.canvas=a;this.ctx=this.canvas.getContext("2d");this.theta=0;this.speed_increase=0.7;this.speed=1;this.display=!0;a=function(){this.life=5;this.push=!0;this.suck=!1;this.stream=[0,0,0];this.multiplayer=!1;this.height=this.width=this.y=this.x=0;this.color="red";this.yo=this.xo=this.ay=this.ax=this.vy=this.vx=0;this.out=!1;this.radius=0;this.speed=1};this.ball=new a;this.ai=new a;this.player=new a;this.updatePlayer=function(){this.keyMap.up.on&&(this.player.ay=-this.speed_increase,
this.player.vy<-this.speed&&(this.player.vy=-this.speed));this.player.push=this.keyMap.right.on?!0:!1;this.player.suck=this.keyMap.left.on?!0:!1;this.keyMap.down.on&&(this.player.ay=this.speed_increase,this.player.vy>this.speed&&(this.player.vy=this.speed));if(!this.keyMap.down.on&&!this.keyMap.up.on||this.keyMap.down.on&&this.keyMap.up.on)this.player.ay=0,this.player.vy=0;if(0>this.player.y&&0>this.player.vy||this.player.y+this.player.height>this.ctx.canvas.height&&0<this.player.vy)this.player.ay=
0,this.player.vy=0;this.player.vy+=this.player.ay;this.player.y+=this.player.vy};this.updateAi=function(){var a=0;if(this.ai.multiplayer){this.ai.vy+=this.ai.ay;this.keyMap.up2.on&&(this.ai.ay=-this.speed_increase,this.ai.vy<-this.speed&&(this.ai.vy=-this.speed));this.ai.push=this.keyMap.left2.on?!0:!1;this.ai.suck=this.keyMap.right2.on?!0:!1;this.keyMap.down2.on&&(this.ai.ay=this.speed_increase,this.ai.vy>this.speed&&(this.ai.vy=this.speed));if(!this.keyMap.down2.on&&!this.keyMap.up2.on||this.keyMap.down2.on&&
this.keyMap.up2.on)this.ai.ay=0,this.ai.vy=0;if(0>this.ai.y&&0>this.ai.vy||this.ai.y+this.ai.height>this.ctx.canvas.height&&0<this.ai.vy)this.ai.ay=0,this.ai.vy=0;this.ai.y+=this.ai.vy}else a=this.ai.y+this.ai.height/2,0>this.ball.vx?a<this.ctx.canvas.height/2-this.ctx.canvas.height/10?this.ai.y+=this.speed:a>this.ctx.canvas.height/2+this.ctx.canvas.height/10&&(this.ai.y-=this.speed):0<this.ball.vx&&2<Math.abs(this.ball.y-a)&&(this.ball.y<a?this.ai.y-=this.speed:this.ball.y>a&&(this.ai.y+=this.speed))};
this.updateBall=function(){Math.abs(this.ball.x-this.player.x)<Math.abs(this.ball.vx)&&(this.player.y<this.ball.y+0.1*this.player.height&&this.ball.y<this.player.y+1.1*this.player.height)&&(this.theta=(this.player.y+this.player.height/2-this.ball.y)/(this.player.height/2),this.ball.vx=this.ball.speed*Math.cos(this.theta),this.ball.vy=-this.ball.speed*Math.sin(this.theta));Math.abs(this.ball.x-this.ai.x)<Math.abs(this.ball.vx)&&(this.ai.y<this.ball.y+this.ai.height&&this.ball.y<this.ai.y+this.ai.height)&&
(this.theta=(this.ai.y+this.ai.height/2-this.ball.y)/(this.ai.height/2),this.ball.vx=-this.ball.speed*Math.cos(this.theta),this.ball.vy=this.ball.speed*Math.sin(this.theta));if(0>this.ball.y+this.ball.vy&&0>this.ball.vy||this.ball.y+this.ball.radius+this.ball.vy>this.ctx.canvas.height&&0<this.ball.vy)this.ball.vy=-this.ball.vy;if(0>this.ball.x&&0>this.ball.vx||this.ball.x>this.ctx.canvas.width&&0<this.ball.vx)if(0>this.ball.x&&(this.player.life-=1),this.ball.x>this.ctx.canvas.width&&(this.ai.life-=
1),this.ball.xo=this.ball.x,this.ball.yo=this.ball.y,this.ball.out=!0,this.ball.x=(this.ctx.canvas.width-this.ball.radius)/2,this.ball.y=this.ctx.canvas.height/2,this.theta=2*Math.random()*Math.PI,this.theta>Math.PI/4&&this.theta<3*Math.PI/4&&(this.theta=1===Math.round(Math.random())?Math.PI/4:3*Math.PI/4),this.theta>Math.PI+Math.PI/4&&this.theta<3*Math.PI/4+Math.PI&&(this.theta=1===Math.round(Math.random())?Math.PI/4+Math.PI:3*Math.PI/4+Math.PI),this.ball.vx=this.ball.speed*Math.cos(this.theta),
this.ball.vy=this.ball.speed*Math.sin(this.theta),1===Math.round(Math.random()))this.ball.vy=-this.ball.vy;this.ball.x+=this.ball.vx;this.ball.y+=this.ball.vy};this.distance=function(a,i){return Math.sqrt(Math.pow(i.x-a.x,2)+Math.pow(i.y-a.y,2))};this.update=function(){this.display?(this.updatePlayer(),this.updateAi(),this.updateBall()):(this.player.push=!0,this.ai.push=!0)};this.clear=function(){this.ctx.save();this.ctx.setTransform(1,0,0,1,0,0);this.ctx.clearRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height);
this.ctx.restore()};this.drawRectangle=function(a,i,t,v,o){this.ctx.fillStyle=o instanceof Array?"rgb("+Math.floor(o[0])+","+Math.floor(o[1])+","+Math.floor(o[2])+")":o;this.ctx.fillRect(a,i,t,v)};this.drawPlayer=function(a){this.drawRectangle(a.x,a.y,a.width,a.height,a.color)};this.drawBall=function(a){this.ctx.beginPath();this.ctx.lineWidth=0.5;this.ctx.fillStyle="black";this.ctx.strokeStyle="white";this.ctx.arc(a.x,a.y,a.radius,0,2*Math.PI,!1);this.ctx.fill();this.ctx.stroke()};this.render=function(){this.display&&
(this.drawPlayer(this.player),this.drawPlayer(this.ai),this.drawBall(this.ball))};this.loop=function(){this.update();this.render()};this.init=function(){var a=this.ctx.canvas.width/75,i=this.ctx.canvas.height/6,t=this.ctx.canvas.width,v=this.ctx.canvas.height;this.player.life=5;this.ai.life=5;this.ai.width=a;this.ai.height=i;this.ai.x=t-this.ai.width;this.ai.y=v/2;this.player.width=a;this.player.height=i;this.player.y=v/2;this.ball.radius=2*a;this.theta=Math.PI;this.theta>Math.PI/4&&this.theta<3*
Math.PI/4&&(this.theta=1===Math.round(Math.random())?Math.PI/4:3*Math.PI/4);this.theta>Math.PI+Math.PI/4&&this.theta<3*Math.PI/4+Math.PI&&(this.theta=1===Math.round(Math.random())?Math.PI/4+Math.PI:3*Math.PI/4+Math.PI);this.ball.vx=this.ball.speed*Math.cos(this.theta);this.ball.vy=this.ball.speed*Math.sin(this.theta);this.ball.x=this.ctx.canvas.width/2;this.ball.y=this.ctx.canvas.height/2};this.keyMap={left:{code:65,on:!1},up:{code:87,on:!1},right:{code:68,on:!1},down:{code:83,on:!1},left2:{code:74,
on:!1},up2:{code:73,on:!1},right2:{code:76,on:!1},down2:{code:75,on:!1}}};var res,displaySize=512,fieldRes,clear_id,running=!1,canvas=document.getElementById("canvas"),ctx=canvas.getContext("2d"),L=75,distanceRotators=[0,201,401];function multiplayer(){pong.ai.multiplayer?(pong.ai.multiplayer=!1,pong.ai.push=!0,document.getElementById("multiplayer").innerHTML="Begin Multiplayer"):(pong.ai.multiplayer=!0,document.getElementById("multiplayer").innerHTML="Begin Single Player");restart()}
function restart(){field.reset();pong.display=!1;pong.init();pong.clear();run_coul=!0}function rotator(a){if(0<=a&&200>=a)return[200-(100+a),100];if(200<a&&400>=a)return[-100+(a-200),100-(a-200)];if(400<a&&600>=a)return[100,-100+(a-400)]}var field,pong,counter=0,suck_counter_1=100,suck_counter_2=100,fps=0,suck_on=!1,ball_caught=!1,suck_on2=!1,ball_caught2=!1;
function prepareFrame(a){60==fps&&(fps=0);(0==pong.player.life||0==pong.ai.life)&&restart();fps++;var b=rotator(distanceRotators[0]),i=rotator(distanceRotators[1]),t=rotator(distanceRotators[2]);pong.player.color=cielabToRGB(L,b[0],b[1],[0.9642,1,0.8249]);pong.ai.color=cielabToRGB(L,i[0],i[1],[0.9642,1,0.8249]);pong.ball.color=cielabToRGB(L,t[0],t[1],[0.9642,1,0.8249]);for(b=0;3>b;b++)distanceRotators[b]++,600<distanceRotators[b]&&(distanceRotators[b]=0);a.setDensityRGB(Math.floor(pong.ball.x+pong.ball.radius/
2),Math.floor(pong.ball.y+pong.ball.radius/2),pong.ball.color);pong.player.push&&(a.setVelocity(Math.floor(pong.player.x+pong.player.width/2),Math.floor(pong.player.y+pong.player.height/2),50,0),a.setDensityRGB(Math.floor(pong.player.x+pong.player.width/2),Math.floor(pong.player.y+pong.player.height/2),pong.player.color));if(pong.ball.out&&(pong.ball.xo>canvas.width/2?(b=canvas.width-1,i=-1):(i=1,b=0),a.setDensityRGB(b,Math.floor(pong.ball.yo+pong.ball.radius/2),pong.ball.color),a.setVelocity(b,Math.floor(pong.ball.yo+
pong.ball.radius/2),500*i,0),counter++,12==counter))pong.ball.out=!1,counter=0;pong.player.suck&&(!suck_on&&30<suck_counter_1&&(suck_on=!0),suck_on&&(b=pong.distance(pong.player,pong.ball),20>Math.abs(b)&&(ball_caught=!0,pong.ball.x=pong.player.x+10+Math.random(),pong.ball.y=pong.player.y+pong.player.height/2+Math.random(),pong.ball.vx=0,pong.ball.vy=0,suck_counter_1--,0==suck_counter_1&&(a.setVelocity(0,Math.floor(pong.player.y+pong.player.height/2),5E3,0),a.setDensityRGB(0,Math.floor(pong.player.y+
pong.player.height/2),pong.player.color),ball_caught=suck_on=!1))));suck_on&&(!pong.player.suck&&ball_caught)&&(a.setVelocity(0,Math.floor(pong.player.y+pong.player.height/2),5E3,0),a.setDensityRGB(0,Math.floor(pong.player.y+pong.player.height/2),pong.player.color),ball_caught=suck_on=!1);100>suck_counter_1&&1==fps%10&&(suck_counter_1+=2);pong.ai.push&&(a.setVelocity(Math.floor(pong.ai.x+pong.ai.width/2),Math.floor(pong.ai.y+pong.ai.height/2),-50,0),a.setDensityRGB(Math.floor(pong.ai.x+pong.ai.width/
2),Math.floor(pong.ai.y+pong.ai.height/2),pong.ai.color));!pong.ai.multiplayer&&90<=suck_counter_2&&(pong.ai.suck=!0);pong.ai.suck&&(!suck_on2&&30<suck_counter_2&&(suck_on2=!0),suck_on2&&(b=pong.distance(pong.ai,pong.ball),i=20,pong.ai.multiplayer||(i=15),Math.abs(b)<i&&(ball_caught2=!0,pong.ball.x=pong.ai.x-10+Math.random(),pong.ball.y=pong.ai.y+pong.ai.height/2+Math.random(),pong.ball.vx=0,pong.ball.vy=0,suck_counter_2--,b=0,pong.ai.multiplayer||(b=80),suck_counter_2<=b&&(a.setVelocity(Math.floor(pong.ai.x+
pong.ai.width/2),Math.floor(pong.ai.y+pong.ai.height/2),-5E3,0),a.setDensityRGB(Math.floor(pong.ai.x+pong.ai.width/2),Math.floor(pong.ai.y+pong.ai.height/2),pong.ai.color),suck_on2=!1,ball_caught2=pong.ai.suck=!1))));suck_on2&&(!pong.ai.suck&&ball_caught2)&&(a.setVelocity(Math.floor(pong.ai.x+pong.ai.width/2),Math.floor(pong.ai.y+pong.ai.height/2),-5E3,0),a.setDensityRGB(Math.floor(pong.ai.x+pong.ai.width/2),Math.floor(pong.ai.y+pong.ai.height/2),pong.ai.color),ball_caught2=suck_on2=!1);100>suck_counter_2&&
1==fps%10&&(suck_counter_2+=2)}function drawLives(){ctx.fillStyle="black";ctx.fillRect(0,canvas.height-5,canvas.width,4);ctx.fillStyle=arrayToRGBA(pong.ai.color);ctx.fillRect(canvas.width/2+canvas.width/2*(1-pong.ai.life/5),canvas.height-4,(canvas.width/2-1)*pong.ai.life/5,2);ctx.fillStyle=arrayToRGBA(pong.player.color);ctx.fillRect(1,canvas.height-4,(canvas.width/2-2)*pong.player.life/5,2)}
function switchAnimation(){running?(running=!1,document.getElementById("switch").innerHTML="Unpause"):(running=!0,document.getElementById("switch").innerHTML="Pause")}var white=[0.9642,1,0.8249];function cielabToRGB(a,b,i,t){x=255*t[0]*inverseCielab(1/116*(a+16)+0.002*b);y=255*t[1]*inverseCielab(1/116*(a+16));z=255*t[2]*inverseCielab(1/116*(a+16)+0.005*i);return[x,y,z]}function inverseCielab(a){return a>6/29?Math.pow(a,3):3*Math.pow(6/29,2)*(a-4/29)}function startAnimation(){running=!0}
window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1E3/60)}}();(function animloop(){requestAnimFrame(animloop);updateFrame()})();var filterStrength=20,frameTime=0,lastLoop=new Date,thisLoop,avg=Array(120),avg_index=0,avgs=0,avgs_index=0,benchmarking=!1;
function run_benchmark(){var a=(thisLoop=new Date)-lastLoop;frameTime+=(a-frameTime)/filterStrength;lastLoop=thisLoop;avg[avg_index]=1E3/frameTime;if(6<avg_index){for(var b=a=0;b<avg_index;b++)a+=avg[avg_index];1<avgs_index&&(60>avgs&&updateRes(24),benchmarking=!1);avgs+=a/avg_index;avgs_index++;avg_index=0}avg_index++}var coul=0,coul_incr=0,symbols=[3,2,1,"GO!"],coul_switch=!0,run_coul=!0,cout_color=[];
function count_down(){coul++;0==cout_color.length&&(cout_color=pong.ai.color);60==coul&&(cout_color=0==coul_incr%2?pong.player.color:pong.ai.color,coul=0,coul_incr++);if(4==coul_incr)coul_incr=0,run_coul=!1,field.reset(),pong.display=!0,pong.player.suck=!1,pong.init(),pong.clear();else{var a=canvas.width/2-8,b=canvas.width/2+16;3==coul_incr&&(a-=16);ctx.font="bold 34px Arial";ctx.fillStyle="black";ctx.fillText(symbols[coul_incr],a-1,b+2);ctx.fillStyle=arrayToRGBA(cout_color);ctx.font="bold 32px Arial";
ctx.fillText(symbols[coul_incr],a,b)}}function arrayToRGBA(a){return"rgb("+Math.floor(a[0])+","+Math.floor(a[1])+","+Math.floor(a[2])+")"}
function updateFrame(){running&&(benchmarking&&run_benchmark(),field.update(),pong.loop(),ctx.fillStyle="black",ctx.fillRect(0,1,canvas.width,4),ctx.fillStyle=arrayToRGBA(pong.ai.color),ctx.fillRect(1,2,(canvas.width/2-2)*suck_counter_1/100,2),ctx.fillStyle=arrayToRGBA(pong.player.color),ctx.fillRect(canvas.width/2+canvas.width/2*(1-suck_counter_2/100),2,(canvas.width/2-1)*suck_counter_2/100,2),drawLives(),run_coul&&count_down())}var r=96;
function updateRes(a){canvas.width=a;fieldRes=canvas.height=a;field.setResolution(a,a);pong.display=!1;pong.init()}var keyDown=function(a){for(var b in pong.keyMap)if(pong.keyMap.hasOwnProperty(b)&&a.keyCode===pong.keyMap[b].code){pong.keyMap[b].on=!0;break}},keyUp=function(a){for(var b in pong.keyMap)if(pong.keyMap.hasOwnProperty(b)&&a.keyCode===pong.keyMap[b].code){pong.keyMap[b].on=!1;break}};
function begin(){field=new Fluid(canvas);field.setUICallback(prepareFrame);field.setDisplayFunction(field.toggleDisplayFunction(canvas,0));pong=new Pong(canvas);window.addEventListener("keydown",keyDown,!1);window.addEventListener("keyup",keyUp,!1);updateRes(r);startAnimation()}begin();

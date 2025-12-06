// Garden Gnome Software - Skin
// Pano2VR 6.1.13/18080
// Filename: JEMCO.ggsk
// Generated 2025-12-03T15:26:21

function pano2vrSkin(player,base) {
	player.addVariable('opt_3d_preview', 2, true);
	player.addVariable('opt_thumbnail_menu_tooltip', 2, true);
	player.addVariable('vis_thumbnail_menu', 2, false);
	player.addVariable('opt_3d_preview_1', 2, true);
	player.addVariable('opt_hotspot_preview', 2, true);
	player.addVariable('vis_map', 2, false);
	player.addVariable('vis_map_close_desktop', 2, true);
	player.addVariable('vis_map_close_mobile', 2, true);
	player.addVariable('pos_controller', 1, 0);
	player.addVariable('ht_anim', 2, false);
	player.addVariable('vis_image_popup', 2, false);
	player.addVariable('vis_image_popup_1', 2, false);
	player.addVariable('vis_image_popup_2', 2, false);
	player.addVariable('vis_image_popup_3', 2, false);
	player.addVariable('vis_website', 2, false);
	player.addVariable('opt_url', 2, false);
	player.addVariable('vis_website_1', 2, false);
	player.addVariable('opt_url_1', 2, false);
	player.addVariable('open_tag', 0, "");
	player.addVariable('close_nodes', 2, false);
	player.addVariable('category_visible', 2, false);
	player.addVariable('category_follow', 2, true);
	player.addVariable('vis_map_1', 2, false);
	player.addVariable('opt_thumbnail_menu_tooltip_1', 2, true);
	player.addVariable('vis_thumbnail_menu_1', 2, false);
	player.addVariable('opt_3d_preview_2', 2, true);
	player.addVariable('opt_hotspot_preview_1', 2, true);
	player.addVariable('vis_info_popup', 2, false);
	player.addVariable('vis_map_2', 2, false);
	player.addVariable('vis_map_close_desktop_1', 2, true);
	player.addVariable('vis_map_close_mobile_1', 2, true);
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._button_direction=document.createElement('div');
		el.ggId="button_direction";
		el.ggDx=501;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 5px;';
		hs+='height : 62px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 82px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_direction.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_direction.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._button_image_right=document.createElement('div');
		els=me._button_image_right__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMWMwLDMxLDI1LjEsNTYuMSw1Ni4xLDU2LjFzNTYuMS0yNS4xLDU2LjEtNTYuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMTguOSwzNjYtMTQ0LDM0MC45LTE3NSwzNDAuOXogTS0xNDksMzk4LjFsLTMwLjEsMzAuMWMtMC42LDAuNi0xLjYsMC42LTIuMiwwbC0xMS4zLTExLjNjLTAuNi0wLjYtMC42LTEuNiwwLTIuMmwxNy43LTE3LjcmI3hkOyYjeGE7JiN4OTsmI3g5O2wtMTcuNy0xNy43Yy0wLjYtMC42LTAuNi0xLjYsMC0yLjJsMTEuMy0xMS4zYzAuNi0wLjYsMS42'+
			'LTAuNiwyLjIsMGwzMC4xLDMwYzAuMywwLjMsMC40LDAuNywwLjQsMS4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtDLTE0OC41LDM5Ny40LTE0OC42LDM5Ny44LTE0OSwzOTguMXoiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE5Mi41LDM3OS4zbDE3LjcsMTcuN2wtMTcuNywxNy43Yy0wLjYsMC42LTAuNiwxLjYsMCwyLjJsMTEuMywxMS4zYzAuNiwwLjYsMS42LDAuNiwyLjIsMGwzMC4xLTMwLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjMtMC4zLDAuNS0wLjcsMC40LTEuMWMwLTAuNC0wLjEtMC44LTAuNC0xLjFsLTMwLjEtMzBjLTAuNi0wLjYtMS'+
			'42LTAuNi0yLjIsMGwtMTEuMywxMS4zQy0xOTMuMSwzNzcuNy0xOTMuMSwzNzguNy0xOTIuNSwzNzkuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7eiIvPgogPC9nPgo8L3N2Zz4K';
		me._button_image_right__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_right__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40YzAsMzQuNCwyNy45LDYyLjQsNjIuNCw2Mi40czYyLjQtMjcuOSw2Mi40LTYyLjQmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTEyLjYsMzYyLjYtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiBNLTE0Ni4xLDM5OC4ybC0zMy41LDMzLjRjLTAuNywwLjctMS43LDAuNy0yLjQsMGwtMTIuNS0xMi41Yy0wLjctMC43LTAuNy0xLjcsMC0yLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2wxOS43LTE5LjdsLTE5LjctMTkuN2MtMC43LTAuNy0wLjctMS43LDAtMi40bDEyLjUtMTIuNWMw'+
			'LjctMC43LDEuNy0wLjcsMi40LDBsMzMuNSwzMy40YzAuMywwLjMsMC41LDAuOCwwLjUsMS4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtDLTE0NS42LDM5Ny40LTE0NS43LDM5Ny45LTE0Ni4xLDM5OC4yeiIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTk0LjQsMzc3LjNsMTkuNywxOS43bC0xOS43LDE5LjdjLTAuNywwLjctMC43LDEuNywwLDIuNGwxMi41LDEyLjVjMC43LDAuNywxLjcsMC43LDIuNCwwbDMzLjUtMzMuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMy0wLjMsMC41LTAuOCwwLjUtMS4zYzAtMC40LTAuMi0wLjktMC41LTEuMmwtMzMuNS'+
			'0zMy40Yy0wLjctMC43LTEuNy0wLjctMi40LDBsLTEyLjUsMTIuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xOTUuMSwzNzUuNi0xOTUuMSwzNzYuNi0xOTQuNCwzNzcuM3oiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._button_image_right__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_image_right";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 51px;';
		hs+='position : absolute;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_image_right.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_right.onmouseover=function (e) {
			me._button_image_right__img.style.visibility='hidden';
			me._button_image_right__imgo.style.visibility='inherit';
		}
		me._button_image_right.onmouseout=function (e) {
			me._button_image_right__img.style.visibility='inherit';
			me._button_image_right__imgo.style.visibility='hidden';
			me.elementMouseDown['button_image_right']=false;
		}
		me._button_image_right.onmousedown=function (e) {
			me.elementMouseDown['button_image_right']=true;
		}
		me._button_image_right.onmouseup=function (e) {
			me.elementMouseDown['button_image_right']=false;
		}
		me._button_image_right.ontouchend=function (e) {
			me.elementMouseDown['button_image_right']=false;
		}
		me._button_image_right.ggUpdatePosition=function (useTransition) {
		}
		me._button_direction.appendChild(me._button_image_right);
		el=me._button_image_left=document.createElement('div');
		els=me._button_image_left__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzQwLjhjLTMxLDAtNTYuMiwyNS4xLTU2LjIsNTYuMnMyNS4xLDU2LjIsNTYuMiw1Ni4yczU2LjItMjUuMSw1Ni4yLTU2LjImI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTE4LjgsMzY2LTE0NCwzNDAuOC0xNzUsMzQwLjh6IE0tMTU3LjUsNDE2LjlsLTExLjMsMTEuM2MtMC42LDAuNi0xLjUsMC42LTIuMiwwbC0zMC4yLTMwLjFjLTAuMy0wLjMtMC40LTAuNy0wLjQtMS4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0wLjUsMC4xLTAuOCwwLjQtMS4ybDMwLjItMzAuMWMwLjYtMC42LDEuNS0wLjYsMi4yLDBsMTEuMywxMS4zYzAu'+
			'NiwwLjYsMC42LDEuNSwwLDIuMmwtMTcuNywxNy43bDE3LjcsMTcuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xNTYuOSw0MTUuNC0xNTYuOSw0MTYuMy0xNTcuNSw0MTYuOXoiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE1Ny41LDQxNC43bC0xNy43LTE3LjdsMTcuNy0xNy43YzAuNi0wLjYsMC42LTEuNSwwLTIuMmwtMTEuMy0xMS4zYy0wLjYtMC42LTEuNS0wLjYtMi4yLDBsLTMwLjIsMzAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjMsMC4zLTAuNCwwLjctMC40LDEuMmMwLDAuNCwwLjIsMC44LDAuNCwxLjFsMzAuMiwzMC4xYzAuNiwwLj'+
			'YsMS41LDAuNiwyLjIsMGwxMS4zLTExLjNDLTE1Ni45LDQxNi4zLTE1Ni45LDQxNS40LTE1Ny41LDQxNC43JiN4ZDsmI3hhOyYjeDk7JiN4OTt6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._button_image_left__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_left__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRzNjIuNC0yNy45LDYyLjQtNjIuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMTIuNiwzNjIuNi0xNDAuNiwzMzQuNi0xNzUsMzM0LjZ6IE0tMTU1LjYsNDE5LjFsLTEyLjUsMTIuNWMtMC43LDAuNy0xLjcsMC43LTIuNCwwbC0zMy41LTMzLjRjLTAuMy0wLjMtMC41LTAuOC0wLjUtMS4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0wLjUsMC4xLTAuOSwwLjUtMS4zbDMzLjUtMzMuNGMwLjctMC43LDEuNy0wLjcsMi40LDBsMTIuNSwx'+
			'Mi41YzAuNywwLjcsMC43LDEuNywwLDIuNGwtMTkuNywxOS43bDE5LjcsMTkuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xNTQuOSw0MTcuNC0xNTQuOSw0MTguNC0xNTUuNiw0MTkuMXoiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE1NS42LDQxNi43bC0xOS43LTE5LjdsMTkuNy0xOS43YzAuNy0wLjcsMC43LTEuNywwLTIuNGwtMTIuNS0xMi41Yy0wLjctMC43LTEuNy0wLjctMi40LDBsLTMzLjUsMzMuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjMsMC4zLTAuNSwwLjgtMC41LDEuM2MwLDAuNCwwLjIsMC45LDAuNSwxLjJsMzMuNSwzMy40Yz'+
			'AuNywwLjcsMS43LDAuNywyLjQsMGwxMi41LTEyLjVDLTE1NC45LDQxOC40LTE1NC45LDQxNy40LTE1NS42LDQxNi43JiN4ZDsmI3hhOyYjeDk7JiN4OTt6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._button_image_left__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_image_left";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_image_left.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_left.onmouseover=function (e) {
			me._button_image_left__img.style.visibility='hidden';
			me._button_image_left__imgo.style.visibility='inherit';
		}
		me._button_image_left.onmouseout=function (e) {
			me._button_image_left__img.style.visibility='inherit';
			me._button_image_left__imgo.style.visibility='hidden';
			me.elementMouseDown['button_image_left']=false;
		}
		me._button_image_left.onmousedown=function (e) {
			me.elementMouseDown['button_image_left']=true;
		}
		me._button_image_left.onmouseup=function (e) {
			me.elementMouseDown['button_image_left']=false;
		}
		me._button_image_left.ontouchend=function (e) {
			me.elementMouseDown['button_image_left']=false;
		}
		me._button_image_left.ggUpdatePosition=function (useTransition) {
		}
		me._button_direction.appendChild(me._button_image_left);
		el=me._button_image_down=document.createElement('div');
		els=me._button_image_down__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7eiBNLTE0My44LDM5Mi45bC0zMCwzMC4xYy0wLjMsMC4zLTAuNywwLjQtMS4xLDAuNGMtMC40LDAtMC44LTAuMS0xLjEtMC40bC0zMC4xLTMwLjFjLTAuNi0wLjYtMC42LTEuNiwwLTIuMmwxMS4zLTExLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjYtMC42LDEuNi0wLjYsMi4yLDBsMTcuNywxNy43bDE3LjctMTcu'+
			'N2MwLjYtMC42LDEuNi0wLjYsMi4yLDBsMTEuMywxMS4zQy0xNDMuMiwzOTEuNC0xNDMuMiwzOTIuMy0xNDMuOCwzOTIuOXoiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE1Ny4zLDM3OS41bC0xNy43LDE3LjdsLTE3LjctMTcuN2MtMC42LTAuNi0xLjYtMC42LTIuMiwwbC0xMS4zLDExLjNjLTAuNiwwLjYtMC42LDEuNiwwLDIuMmwzMC4xLDMwLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjMsMC4zLDAuNywwLjUsMS4xLDAuNGMwLjQsMCwwLjgtMC4xLDEuMS0wLjRsMzAtMzAuMWMwLjYtMC42LDAuNi0xLjYsMC0yLjJsLTExLjMtMTEuM0MtMT'+
			'U1LjcsMzc4LjktMTU2LjcsMzc4LjktMTU3LjMsMzc5LjV6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._button_image_down__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_down__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRjMzQuNCwwLDYyLjQtMjcuOSw2Mi40LTYyLjQmI3hkOyYjeGE7JiN4OTsmI3g5O1MtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiBNLTE0MC40LDM5Mi41bC0zMy40LDMzLjVjLTAuMywwLjMtMC44LDAuNS0xLjIsMC41Yy0wLjUsMC0wLjktMC4xLTEuMy0wLjVsLTMzLjQtMzMuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjctMC43LTAuNy0xLjcsMC0yLjRsMTIuNS0xMi41YzAuNy0wLjcsMS43LTAuNywyLjQsMGwxOS43LDE5Ljds'+
			'MTkuNy0xOS43YzAuNy0wLjcsMS43LTAuNywyLjQsMGwxMi41LDEyLjUmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTM5LjcsMzkwLjctMTM5LjcsMzkxLjgtMTQwLjQsMzkyLjV6Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNTUuMywzNzcuNmwtMTkuNywxOS43bC0xOS43LTE5LjdjLTAuNy0wLjctMS43LTAuNy0yLjQsMGwtMTIuNSwxMi41Yy0wLjcsMC43LTAuNywxLjcsMCwyLjRsMzMuNCwzMy41JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLDAuMywwLjgsMC41LDEuMywwLjVjMC40LDAsMC45LTAuMiwxLjItMC41bDMzLjQtMzMuNWMwLjctMC'+
			'43LDAuNy0xLjcsMC0yLjRsLTEyLjUtMTIuNUMtMTUzLjYsMzc2LjktMTU0LjYsMzc2LjktMTU1LjMsMzc3LjYmI3hkOyYjeGE7JiN4OTsmI3g5O3oiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._button_image_down__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_image_down";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 31px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_image_down.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_down.onmouseover=function (e) {
			me._button_image_down__img.style.visibility='hidden';
			me._button_image_down__imgo.style.visibility='inherit';
		}
		me._button_image_down.onmouseout=function (e) {
			me._button_image_down__img.style.visibility='inherit';
			me._button_image_down__imgo.style.visibility='hidden';
			me.elementMouseDown['button_image_down']=false;
		}
		me._button_image_down.onmousedown=function (e) {
			me.elementMouseDown['button_image_down']=true;
		}
		me._button_image_down.onmouseup=function (e) {
			me.elementMouseDown['button_image_down']=false;
		}
		me._button_image_down.ontouchend=function (e) {
			me.elementMouseDown['button_image_down']=false;
		}
		me._button_image_down.ggUpdatePosition=function (useTransition) {
		}
		me._button_direction.appendChild(me._button_image_down);
		el=me._button_image_up=document.createElement('div');
		els=me._button_image_up__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7eiBNLTE0My44LDQwMy4ybC0xMS4zLDExLjNjLTAuNiwwLjYtMS42LDAuNi0yLjIsMGwtMTcuNy0xNy43bC0xNy43LDE3LjdjLTAuNiwwLjYtMS42LDAuNi0yLjIsMGwtMTEuMy0xMS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNi0wLjYtMC42LTEuNiwwLTIuMmwzMC0zMC4xYzAuMy0wLjMsMC43LTAuNCwxLjEt'+
			'MC40YzAuNCwwLDAuOCwwLjEsMS4xLDAuNGwzMC4xLDMwLjFDLTE0My4yLDQwMS43LTE0My4yLDQwMi42LTE0My44LDQwMy4yeiIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTkyLjcsNDE0LjVsMTcuNy0xNy43bDE3LjcsMTcuN2MwLjYsMC42LDEuNiwwLjYsMi4yLDBsMTEuMy0xMS4zYzAuNi0wLjYsMC42LTEuNiwwLTIuMmwtMzAuMS0zMC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMy0wLjMtMC43LTAuNS0xLjEtMC40Yy0wLjQsMC0wLjgsMC4xLTEuMSwwLjRsLTMwLDMwLjFjLTAuNiwwLjYtMC42LDEuNiwwLDIuMmwxMS4zLDExLjMmI3'+
			'hkOyYjeGE7JiN4OTsmI3g5O0MtMTk0LjMsNDE1LjEtMTkzLjMsNDE1LjEtMTkyLjcsNDE0LjV6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._button_image_up__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_up__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRjMzQuNCwwLDYyLjQtMjcuOSw2Mi40LTYyLjQmI3hkOyYjeGE7JiN4OTsmI3g5O1MtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiBNLTE0MC40LDQwMy45bC0xMi41LDEyLjVjLTAuNywwLjctMS43LDAuNy0yLjQsMGwtMTkuNy0xOS43bC0xOS43LDE5LjdjLTAuNywwLjctMS43LDAuNy0yLjQsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7bC0xMi41LTEyLjVjLTAuNy0wLjctMC43LTEuNywwLTIuNGwzMy40LTMzLjVjMC4zLTAuMywwLjgt'+
			'MC41LDEuMi0wLjVjMC41LDAsMC45LDAuMSwxLjMsMC41bDMzLjQsMzMuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMzkuNyw0MDIuMi0xMzkuNyw0MDMuMy0xNDAuNCw0MDMuOXoiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE5NC43LDQxNi40bDE5LjctMTkuN2wxOS43LDE5LjdjMC43LDAuNywxLjcsMC43LDIuNCwwbDEyLjUtMTIuNWMwLjctMC43LDAuNy0xLjcsMC0yLjRsLTMzLjQtMzMuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjMtMC4zLTAuOC0wLjUtMS4zLTAuNWMtMC40LDAtMC45LDAuMi0xLjIsMC41bC0zMy40LDMzLjVjLTAuNy'+
			'wwLjctMC43LDEuNywwLDIuNGwxMi41LDEyLjUmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTk2LjQsNDE3LjEtMTk1LjQsNDE3LjEtMTk0LjcsNDE2LjR6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._button_image_up__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_image_up";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_image_up.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_up.onmouseover=function (e) {
			me._button_image_up__img.style.visibility='hidden';
			me._button_image_up__imgo.style.visibility='inherit';
		}
		me._button_image_up.onmouseout=function (e) {
			me._button_image_up__img.style.visibility='inherit';
			me._button_image_up__imgo.style.visibility='hidden';
			me.elementMouseDown['button_image_up']=false;
		}
		me._button_image_up.onmousedown=function (e) {
			me.elementMouseDown['button_image_up']=true;
		}
		me._button_image_up.onmouseup=function (e) {
			me.elementMouseDown['button_image_up']=false;
		}
		me._button_image_up.ontouchend=function (e) {
			me.elementMouseDown['button_image_up']=false;
		}
		me._button_image_up.ggUpdatePosition=function (useTransition) {
		}
		me._button_direction.appendChild(me._button_image_up);
		me.divSkin.appendChild(me._button_direction);
		el=me._timer_1=document.createElement('div');
		el.ggTimestamp=this.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=750;
		el.ggId="Timer 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 28px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._timer_1.ggIsActive=function() {
			return (me._timer_1.ggTimestamp==0 ? false : (Math.floor((me.ggCurrentTime - me._timer_1.ggTimestamp) / me._timer_1.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._timer_1.ggActivate=function () {
			player.setVariableValue('ht_anim', true);
		}
		me._timer_1.ggDeactivate=function () {
			player.setVariableValue('ht_anim', false);
		}
		me._timer_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._timer_1);
		el=me._media_controls=document.createElement('div');
		el.ggId="media_controls";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 8px;';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 310px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._media_controls.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._media_controls.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._media_seekbar=document.createElement('div');
		me._media_seekbar__playhead=document.createElement('div');
		me._media_seekbar.mediaEl = null;
		me._media_seekbar.fromBufferSource = false;
		el.ggId="media_seekbar";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_seekbar ";
		el.ggType='seekbar';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 18px;';
		hs+='left : -4px;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 250px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._media_seekbar.connectToMediaEl = function() {
			var disableSeekbar = function() {
				me._media_seekbar__playhead.style.visibility = 'hidden';
				me._media_seekbar.style.background = '#f2d76a';
				me._media_seekbar.ggConnected = false;
			}
			if (me._media_seekbar.mediaEl != null) {
				if (me._media_seekbar.fromBufferSource) {
					player.removeEventListener('bufferSoundTimeupdate', me._media_seekbar.updatePlayback);
					if (me._media_seekbar.ggActivate) {
						player.removeEventListener('bufferSoundPlay', me._media_seekbar.bufferSoundActivate);
					}
					if (me._media_seekbar.ggDeactivate) {
						player.removeEventListener('bufferSoundPause', me._media_seekbar.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundStop', me._media_seekbar.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundEnded', me._media_seekbar.bufferSoundDeactivate);
					}
					if (me._media_seekbar.ggMediaEnded) {
						player.removeEventListener('bufferSoundEnded', me._media_seekbar.bufferSoundMediaEnded);
					}
				} else {
					me._media_seekbar.mediaEl.removeEventListener('progress', me._media_seekbar.updatePlayback);
					me._media_seekbar.mediaEl.removeEventListener('canplay', me._media_seekbar.updatePlayback);
					me._media_seekbar.mediaEl.removeEventListener('timeupdate', me._media_seekbar.updatePlayback);
					if (me._media_seekbar.ggActivate) {
						me._media_seekbar.mediaEl.removeEventListener('play', me._media_seekbar.ggActivate);
					}
					if (me._media_seekbar.ggDeactivate) {
						me._media_seekbar.mediaEl.removeEventListener('ended', me._media_seekbar.ggDeactivate);
						me._media_seekbar.mediaEl.removeEventListener('pause', me._media_seekbar.ggDeactivate);
					}
					if (me._media_seekbar.ggMediaEnded) {
						me._media_seekbar.mediaEl.removeEventListener('ended', me._media_seekbar.ggMediaEnded);
					}
				}
			}
			me._media_seekbar.mediaEl = player.getMediaObject('_background');
			if (me._media_seekbar.mediaEl) {
				me._media_seekbar.fromBufferSource = false;
			} else {
				me._media_seekbar.mediaEl = player.getMediaBufferSourceObject('_background');
				me._media_seekbar.fromBufferSource = true;
			}
			if (me._media_seekbar.mediaEl != null) {
				me._media_seekbar__playhead.style.visibility = 'inherit';
				me._media_seekbar__playhead.style.left = '-1px';
				if (me._media_seekbar.fromBufferSource) {
					player.addListener('bufferSoundTimeupdate', me._media_seekbar.updatePlayback);
					if (me._media_seekbar.ggActivate) {
						me._media_seekbar.bufferSoundActivate = function(args) { if (args['id'] == me._media_seekbar.mediaEl.id) me._media_seekbar.ggActivate(); };
						player.addListener('bufferSoundPlay', me._media_seekbar.bufferSoundActivate);
					}
					if (me._media_seekbar.ggDeactivate) {
						me._media_seekbar.bufferSoundDeactivate = function(args) { if (args['id'] == me._media_seekbar.mediaEl.id) me._media_seekbar.ggDeactivate(); };
						player.addListener('bufferSoundPause', me._media_seekbar.bufferSoundDeactivate);
						player.addListener('bufferSoundStop', me._media_seekbar.bufferSoundDeactivate);
						player.addListener('bufferSoundEnded', me._media_seekbar.bufferSoundDeactivate);
					}
					if (me._media_seekbar.ggMediaEnded) {
						me._media_seekbar.bufferSoundMediaEnded = function(args) { if (args['id'] == me._media_seekbar.mediaEl.id) me._media_seekbar.ggMediaEnded(); };
						player.addListener('bufferSoundEnded', me._media_seekbar.bufferSoundMediaEnded);
					}
				} else {
					me._media_seekbar.mediaEl.addEventListener('progress', me._media_seekbar.updatePlayback);
					me._media_seekbar.mediaEl.addEventListener('canplay', me._media_seekbar.updatePlayback);
					me._media_seekbar.mediaEl.addEventListener('timeupdate', me._media_seekbar.updatePlayback);
					if (me._media_seekbar.ggActivate) {
						me._media_seekbar.mediaEl.addEventListener('play', me._media_seekbar.ggActivate);
					}
					if (me._media_seekbar.ggDeactivate) {
						me._media_seekbar.mediaEl.addEventListener('ended', me._media_seekbar.ggDeactivate);
						me._media_seekbar.mediaEl.addEventListener('pause', me._media_seekbar.ggDeactivate);
					}
					if (me._media_seekbar.ggMediaEnded) {
						me._media_seekbar.mediaEl.addEventListener('ended', me._media_seekbar.ggMediaEnded);
					}
				}
				me._media_seekbar.ggConnected = true;
			} else {
				disableSeekbar();
			}
			var videoEl = me.findElements('_background');
			if (videoEl.length > 0 && !videoEl[0].hasChildNodes()) {
				disableSeekbar();
			}
		}
		me._media_seekbar.updatePlayback = function(args) {
			if (!me._media_seekbar.ggConnected) return;
			if (me._media_seekbar.mediaEl != null) {
				if (me._media_seekbar.mediaEl.readyState || (me._media_seekbar.fromBufferSource && args && args['id'] == me._media_seekbar.mediaEl.id)) {
					if (me._media_seekbar.fromBufferSource) {
						var percent = me._media_seekbar.mediaEl.bufferSoundCurrentTime() / me._media_seekbar.mediaEl.bufferSoundDuration();
					} else {
						var percent = me._media_seekbar.mediaEl.currentTime / me._media_seekbar.mediaEl.duration;
					}
					percent = Math.min(percent, 1.0);
					var playheadpos = Math.round((me._media_seekbar.clientWidth - 2 * 8 + 1) * percent);
					playheadpos += -1;
					me._media_seekbar__playhead.style.left = playheadpos.toString() + 'px';
					var offsetPercent = Math.round(100.0 * (8 / me._media_seekbar.clientWidth));
					var currPos = offsetPercent + Math.round(percent * (100 - 2 * offsetPercent));
					var gradientString ='linear-gradient(90deg, #000000 0%, #000000 ' + currPos + '%';
					if (me._media_seekbar.fromBufferSource) {
						gradientString += ', #ffe270 ' + currPos +'%, #ffe270 100%';
					} else {
						for (var i = 0; i < me._media_seekbar.mediaEl.buffered.length; i++) {
							var rangeStart = Math.round((me._media_seekbar.mediaEl.buffered.start(i) / me._media_seekbar.mediaEl.duration) * 100.0);
							var rangeEnd = Math.ceil((me._media_seekbar.mediaEl.buffered.end(i) / me._media_seekbar.mediaEl.duration) * 100.0);
							if (rangeEnd > currPos) {
								if (rangeStart < currPos) {
									gradientString += ', #ffe270 ' + currPos + '%';
								} else {
									gradientString += ', #f2d76a ' + currPos + '%, #f2d76a ' + rangeStart + '%';
									gradientString += ', #ffe270 ' + rangeStart + '%';
								}
									gradientString += ', #ffe270 ' + rangeEnd + '%';
								currPos = rangeEnd;
							}
						}
						if (currPos < 100) {
							gradientString += ', #f2d76a ' + currPos + '%';
						}
					}
					gradientString += ')';
					me._media_seekbar.style.background = gradientString;
				}
			}
		}
		me._media_seekbar.appendChild(me._media_seekbar__playhead);
		hs+='background: #f2d76a;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 8px;';
		hs+=cssPrefix + 'border-radius: 8px;';
		var hs_playhead = 'height: 18px;';
		hs_playhead += 'width: 18px;';
		hs_playhead += 'border: 0px;';
		hs_playhead += 'position: absolute;';
		hs_playhead += 'left: -1px;';
		hs_playhead += 'top: 0px;';
		hs_playhead += 'border-radius: 9;';
		hs_playhead += cssPrefix + 'border-radius: 9px;';
		hs_playhead += 'background-color: rgba(0,0,0,1);';
		hs_playhead += 'pointer-events: none;';
		me._media_seekbar.setAttribute('style', hs);
		me._media_seekbar__playhead.setAttribute('style', hs_playhead);
		me._media_seekbar.ggIsActive=function() {
			if (me._media_seekbar.mediaEl != null) {
				return (me._media_seekbar.mediaEl.paused == false && me._media_seekbar.mediaEl.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._media_seekbar.onmousedown=function (e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type == 'touchend' || e.type == 'mouseup') {
				if (me._media_seekbar.mediaEl != null) {
					var eventXPos;
					if(e.type == 'touchend') eventXPos = e.layerX; else eventXPos = e.offsetX;
					if (me._media_seekbar.fromBufferSource) {
						var seekpos = (eventXPos / me._media_seekbar.clientWidth) * me._media_seekbar.mediaEl.bufferSoundDuration();
						if (e.type == 'mousemove' || e.type == 'mousedown') {
							me._media_seekbar.mediaEl.bufferSoundSetDragTime(seekpos);
						} else {
							me._media_seekbar.mediaEl.bufferSoundSetTime(seekpos);
						}
					} else {
						var seekpos = (eventXPos / me._media_seekbar.clientWidth) * me._media_seekbar.mediaEl.duration;
						me._media_seekbar.mediaEl.currentTime = seekpos;
					}
				}
			}
		}
		me._media_seekbar.onmouseup=function (e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type == 'touchend' || e.type == 'mouseup') {
				if (me._media_seekbar.mediaEl != null) {
					var eventXPos;
					if(e.type == 'touchend') eventXPos = e.layerX; else eventXPos = e.offsetX;
					if (me._media_seekbar.fromBufferSource) {
						var seekpos = (eventXPos / me._media_seekbar.clientWidth) * me._media_seekbar.mediaEl.bufferSoundDuration();
						if (e.type == 'mousemove' || e.type == 'mousedown') {
							me._media_seekbar.mediaEl.bufferSoundSetDragTime(seekpos);
						} else {
							me._media_seekbar.mediaEl.bufferSoundSetTime(seekpos);
						}
					} else {
						var seekpos = (eventXPos / me._media_seekbar.clientWidth) * me._media_seekbar.mediaEl.duration;
						me._media_seekbar.mediaEl.currentTime = seekpos;
					}
				}
			}
		}
		me._media_seekbar.onmousemove=function (e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type == 'touchend' || e.type == 'mouseup') {
				if (me._media_seekbar.mediaEl != null) {
					var eventXPos;
					if(e.type == 'touchend') eventXPos = e.layerX; else eventXPos = e.offsetX;
					if (me._media_seekbar.fromBufferSource) {
						var seekpos = (eventXPos / me._media_seekbar.clientWidth) * me._media_seekbar.mediaEl.bufferSoundDuration();
						if (e.type == 'mousemove' || e.type == 'mousedown') {
							me._media_seekbar.mediaEl.bufferSoundSetDragTime(seekpos);
						} else {
							me._media_seekbar.mediaEl.bufferSoundSetTime(seekpos);
						}
					} else {
						var seekpos = (eventXPos / me._media_seekbar.clientWidth) * me._media_seekbar.mediaEl.duration;
						me._media_seekbar.mediaEl.currentTime = seekpos;
					}
				}
			}
		}
		me._media_seekbar.ontouchend=function (e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type == 'touchend' || e.type == 'mouseup') {
				if (me._media_seekbar.mediaEl != null) {
					var eventXPos;
					if(e.type == 'touchend') eventXPos = e.layerX; else eventXPos = e.offsetX;
					if (me._media_seekbar.fromBufferSource) {
						var seekpos = (eventXPos / me._media_seekbar.clientWidth) * me._media_seekbar.mediaEl.bufferSoundDuration();
						if (e.type == 'mousemove' || e.type == 'mousedown') {
							me._media_seekbar.mediaEl.bufferSoundSetDragTime(seekpos);
						} else {
							me._media_seekbar.mediaEl.bufferSoundSetTime(seekpos);
						}
					} else {
						var seekpos = (eventXPos / me._media_seekbar.clientWidth) * me._media_seekbar.mediaEl.duration;
						me._media_seekbar.mediaEl.currentTime = seekpos;
					}
				}
			}
		}
		me._media_seekbar.ggActivate=function () {
			me._media_play.style[domTransition]='none';
			me._media_play.style.visibility='hidden';
			me._media_play.ggVisible=false;
			me._media_pause.style[domTransition]='none';
			me._media_pause.style.visibility=(Number(me._media_pause.style.opacity)>0||!me._media_pause.style.opacity)?'inherit':'hidden';
			me._media_pause.ggVisible=true;
		}
		me._media_seekbar.ggDeactivate=function () {
			me._media_play.style[domTransition]='none';
			me._media_play.style.visibility=(Number(me._media_play.style.opacity)>0||!me._media_play.style.opacity)?'inherit':'hidden';
			me._media_play.ggVisible=true;
			me._media_pause.style[domTransition]='none';
			me._media_pause.style.visibility='hidden';
			me._media_pause.ggVisible=false;
		}
		me._media_seekbar.ggUpdatePosition=function (useTransition) {
			me._media_seekbar.updatePlayback();
		}
		me._media_seekbar.ggNodeChange=function () {
			me._media_seekbar.connectToMediaEl();
		}
		me._media_controls.appendChild(me._media_seekbar);
		el=me._media_pause=document.createElement('div');
		els=me._media_pause__img=document.createElement('img');
		els.className='ggskin ggskin_media_pause';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAKuElEQVRogcVaa1RTVxb+7r1JuCBPQSCoFYyWKNDRtjx1BKpLWllIpYoddaqu6VTRZWWmdTH1UdsOTu1SodrWooz1UVwt1mpLlQIzPgBFsEyRQoOFylPRlIcQHklu7mN+YCKSAEkA+/3JWvfsc/b+svc5e++zDiEIAsYCVVVVtE6no3Q6nZimacbPz693TBQ9gGg0FsnLy/MpLy//Y1lZ2eLbt2/LOjo63LRaLd3d3e3GsixsbW17XVxclI6OjvddXV2Vvr6+V0JDQ79ZvHixYjT0AwBhrUcKCwulBQUFi/Pz818pLS0NU6lU4DgOAEDTNGxtbSEWi0GSJBiGQU9PD7RabZ9SgoCDgwN8fHwaIyMjv4iIiMiIjY2tHB0iFavMmnBVleBx8ODBAyUlJV'+
			'F1dXVOADDB1RnhoXK8vkIG+RQbONAcSEIASfAgCIAXCLAcBS1L4HYLj/Szjcgr/BU1tc3Q6XRwdnbGvHnzcjds2LAxyuvzW2YZEpBhPZF3vp626fjx47vq6+sdRCIRFs2fjU+3/gGeLgxIcGbp14MHhd86JfjqQgve2X8Z7fc74ebmhtjY2KObN2/eFIAPekadSGHHOum2bduyi4uLZ5Ekib+8HIadr8ng7qC2yPjB0KuzwVcXVdiwMxu9vb3w8/O7u3Xr1rgVAdnFo0bki8rokKSkpEstLS30ROl4nDsYBflEZlQIDESnmsbChEKUVdSBpmm8+eabG99eUn3QpPAAIuRQC+/Lm70yMTHxWlNTE700+hlUnR07EgDgZKvBtaMhOPpBLBiGQUpKyievfWSXbs7cQYnsvxi4LDU19WhbWxvS34/DiZ1TISbHjoTBIILD'+
			'ygU2uHA8Hl1dXThy5MirW05I3x12nqmPmYqYwNTU1GMadY9437ZovBptBwL86Fs9BObM5KE4vwY2NjbYt2/f2ztPyxKHkjciUsa+4ZiUlHT57t27duGhcmxe6gBgbLL/cPCdqEXekZfg7uaC/fv3p35za6n/YLJGRLZs2ZLb2Nho5/OEB06/P31sLTUDc/0FJK2bi+7ubiQnJ3+joLbSpuQeIbL/YuCykpKSECcnJxzau/6xh9NgSIx3wlN+3rhx44YsLS3tn6ZkDERqx71HffnllzsZhsG+7UsQHBz8+CwdBgR4XEyPBM/zOHPmzObCjnXSgTIGIqdOnXqlsrLSb4KbM9YuZEG3HH281g4DZ1s1Fsx7Cnfu3BGnpaV9OHDckBBDQkKqKioq5JeOL0WQr2XlBgDUt/SF7mQ3FhTBmpThQaGpVQyeB7zdtSAsPES6GR'+
			'q+MVno6WVw5cqVcf7+/obWgASAzMzMQIVCIadtxAj0tfyE2pHeillxpzE96jhC11wDLxh3BwIozE/4EfJFJzF1wRG89I8aAIRFeuwlGswJnIbOzk5kZmZu6D9GAkBOTs6mrq4uJP890uINrtLQSP4oF46OjvDy8kJVTTPKTNSvP9WTKP7fr/D09MT06dNxNrsESpXJA2hI7EmcCZIkce7cOWMiRUVFLwDAyihXixdWawnQNA2e56FWqyGRSFB7x7iYvK3UwsnJCQzDgGEY2NraorPb8lNxsqsOHh4eqK2t9cnJyZEZiJSWljo3Nja6PTHJAw60dSUIx3EQBAEikQg8z6O5XWQUn+NoSlCr1RCJRNDpdCBJEuSQlZ5pkASH+WFTwTAMqqqqAg3fa2pq5BqNBpFhcqvzxsAu05SBIurRDSEIglVEAGDZwskQiURoamoy'+
			'ZHqypqbmaQBYHTPZulXR17rqjSMIAjxvfGCwHAS9nB4Cb9lm1yNANg4cx+HmzZtz9d/IhoaGEIIg8ISHjVWL9gdBEA+8Y2ygiOo76geSsQYu9n26WlpaDImRVCqVEwVBwDjbkSsAjMNMD71HRoMMLRFAkiRYlhVXV1eLAYDs7u52JggCImpEaxtAmhH4PM/3ec/KqlpE8no9PizLUgBAisVizWi4W4+hrpf0YwbPWJgQDSAAlmXBsiwoihIAgHR2dm4VBAGMzro1LdI/Sn8Yy/V5naKoRrFYzAIA6e7u3iAIAjp7LK+vgL6Wq3/cD2Vsf4+MhFSPltRf8rVPnTqVAwDS29u7FAAUdUNfIw0GAn37Qh/3PM+bzA8CHpLkeX7IEBwO99r7/vQpU6ZU67+Rfn5+xQBw6NQvsLSI0xvYl9xIg3G8ibxK4KFH+stag7xrbe'+
			'A4Dr6+vvn6b6RMJmtwcnJCQfFNcCaqVnOg37wPQ8zYSMGknFXakFd0G4IgQCqVPvSIr6+v1s/Pr0Kr1aJeac0ZLBiKQP0ltreHYGQlx/UVlQRBgKIocBwH3gqvaFkJfihvwPjx47mwsLArBiIA8Nxzz52gKArrk0stXniCIwuKotDW1gae59HV1YXQAHsjuWfkdgTDMFCr1ejo6ADDMJjibjmR/HIN2tvbMXv27PyZM2dqHiESFxd32NPTU3eh8CdoOctKFYpg0XJ1LYJn+2DGNA/kn1xh8k7YxU6NG1lrMFnqBH/5JPySsxYSyrJqWwCJ7QdKIQgCVq1ata3/mKHVjYuLyy4sLHwhPjoAn7zhZZGCPiX69Dbcv6yPOsu9cf0XCiHxn0MulysVCoVn/zHDQbls2bL3JBKJ7lBGATSs5QVkX/9tjnHmyhlrWLQuC4Ig'+
			'YPXq1W8NHDUQ+ZP/+eKgoKD/SiQSvHWwAdYcxWOJrGss2u93Ijg4+GZ8fPyJgeOPpK7t27evcHV11Rw6WYTL5Y/PyOFwr5PGhncvwtXVFevWrdvo073DqAx5hMgzktSOhISETRqNBrEbv0XtbyPvUUYKHS/B+l0VaGntQExMzOdrn71w0ZScUTGxNUbx7+XLl3/d09OLyDXn0c1YftMxWhBAIuZvN/BtznXMmDGjcceOHWsHkzXZPOzevTs+PDy8uKuHwbMv56HndyDDg8KixJ+Re6kMPj4+XR9//HGQqZDSwySRKapt/O7du6ODg4PzaxvuYc7qS7jX+fjIMJwE8xN+RO6lMjz55JOt6enpAXOd0pRDzRm0nQuk97enpKQ8Hx4eXqSoboL3ggycL+Ex1qdZUxuNoFX5uHy1ErNmzarbu3dv+Hz3ow3DzRuyL53B7t'+
			'L8J8VjzpIlS87yPI9VW77Hn9+tw/1e29Gz/AF0vATvfNYOnwXH8JOiDhERET8cPnz46RjvTLNeR5h1s5S5XRy3Z8+eeKlUqjx5pgheERl479h99OpsIJi3xCAgoOMlyC0V4Bl5Bskf5cHFxQWJiYm7jh07FvKszYcdZq9kyYOB6+rXxx84cODTgoKCxU1NTbS9vT0Whvtj+6tyTJtEYZyNzoyHAwQ0rAR3Wgn867ManM6+AZVKBUdHR0REROQmJCRsfH5ixvCvH0by8kGP7+qXz8zNzf1rVlbW+ubmZprjONjZ2cFfPgnREdPgL3OA4zgK9nYUJGISai2P1g4dbjX1IOM7BW7Vt6C3txcsy8Ld3R3z5s3LevHFFz9Y+dT3RWYbMSgRK3D16lWP69evRxYUFLyiUCgClUqlm0qlAkVRYFkW/e+x9L8ODg7w9PRslclk'+
			'PwcFBX0dGhqaHRUVZd77kyEwIiL90dDQQNbW1k4sLy8PUSqV07VarZ1KpfLiOE5E03T3hAkTqp2dne/JZLJKqVTaHBQU1D4qih9g1Ij83vg/GY2MaQnjREgAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		me._media_pause__img.ggOverSrc=hs;
		el.ggId="media_pause";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='left : 256px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._media_pause.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._media_pause.onclick=function (e) {
				player.pauseSound("_background");
		}
		me._media_pause.onmouseover=function (e) {
			me._media_pause__img.src=me._media_pause__img.ggOverSrc;
		}
		me._media_pause.onmouseout=function (e) {
			me._media_pause__img.src=me._media_pause__img.ggNormalSrc;
		}
		me._media_pause.ggUpdatePosition=function (useTransition) {
		}
		me._media_controls.appendChild(me._media_pause);
		el=me._media_play=document.createElement('div');
		els=me._media_play__img=document.createElement('img');
		els.className='ggskin ggskin_media_play';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		me._media_play__img.ggOverSrc=hs;
		el.ggId="media_play";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='left : 256px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._media_play.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._media_play.onclick=function (e) {
				player.playSound("_background","1");
		}
		me._media_play.onmouseover=function (e) {
			me._media_play__img.src=me._media_play__img.ggOverSrc;
		}
		me._media_play.onmouseout=function (e) {
			me._media_play__img.src=me._media_play__img.ggNormalSrc;
		}
		me._media_play.ggUpdatePosition=function (useTransition) {
		}
		me._media_controls.appendChild(me._media_play);
		el=me._media_stop=document.createElement('div');
		els=me._media_stop__img=document.createElement('img');
		els.className='ggskin ggskin_media_stop';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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'+
			'5oD2htqa+j/gb4o1aUCKmgAAAABJRU5ErkJggg==';
		me._media_stop__img.ggOverSrc=hs;
		el.ggId="media_stop";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='left : 286px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._media_stop.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._media_stop.onclick=function (e) {
				player.stopSound("_background");
		}
		me._media_stop.onmouseover=function (e) {
			me._media_stop__img.src=me._media_stop__img.ggOverSrc;
		}
		me._media_stop.onmouseout=function (e) {
			me._media_stop__img.src=me._media_stop__img.ggNormalSrc;
		}
		me._media_stop.ggUpdatePosition=function (useTransition) {
		}
		me._media_controls.appendChild(me._media_stop);
		me.divSkin.appendChild(me._media_controls);
		el=me._container_3=document.createElement('div');
		el.ggId="Container 3";
		el.ggDx=-4;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 46px;';
		hs+='height : 33px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 337px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_3.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._container_3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._gyro=document.createElement('div');
		el.ggId="gyro";
		el.ggDx=-57;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 33px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 33px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gyro.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gyro.onclick=function (e) {
			player.setUseGyro(!(player.getUseGyro()));
		}
		me._gyro.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._gyro_off=document.createElement('div');
		els=me._gyro_off__img=document.createElement('img');
		els.className='ggskin ggskin_gyro_off';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAYAAAA4E5OyAAAYN0lEQVR4nM1cd1STWdP/JXSIQEIvgobeBFdQUVdRBMR1LWBbRXABxYYi6vvufroqll1dC2BbsaAEO6Di2gUbCgi6CwiEFooKJkhC7yXfHyyBmIq6nvd3Ts7JvXNnnnkmz713Zu48IeArYfW6DZNqOZx5tRy2I5tdY8ypqVGrb6iXb2pslGltbYGsnByUlZW5JJJql7KSUhdFU7NeQ0OzQp1M+UtDU5N2JGJ/+tfQk/BvCV6/6WfZ2tra0Iqy0h/zc3PMoKgu4+DgACsrK1CpVBgaGoJCoUBVVRVKSkro6upCc3MzGhoa0NTUhHfv3qG0tBQFBQXIzMyEErGz08zcosR4OPWsujo5ImL/bx3/ht5f3CCr124Yx2AUH7h3587YUeNc8N1338HFxQW6ur'+
			'qfJbeiogJpaWm4desWXqU9hcc0j3QTE7MNRw8dSP1CqgP4ggZZvmrtoqJC+tbsfIaFn58fZs2a9dlGEAUWi4Xr168jNjYWtubGxeYWVrtPHj8S8yVkf7ZBVgWHTiwqKjj0uqDUfuXKlfDy8oKcnNyX0E0iOjs7kZiYiGPHjsHGfFi2mbn5pj8ORzz4HJmfZZCZc+bev/3giVtwcDD8/f0hKyv7OeI+GV1dXaDRaIiIiMA012+T/7yeMPVTZX2SQVasDvm+qJD+WxdR0SYsLOxfmxqDBYvFwo4dO9DVUsswt7T+9dTxI9GDlTFogyxY5Bt9JSHxx5/+bzN8fX0Hy/5VkJCQgK1bt8J75rSLcZfOLxoM76AMMmvO3HspL/52P378OOzs7Aan5VdGQUEBli1bhnGO9kk3rse7ScsntUGmfz87JYfOmECj0aCnp/dpWn5l'+
			'MJlMLF26FDZmxqm3byaOl4ZHKoN4zpiVynjDdD579izIZPKgFWOz2cjMzERGRgYKCwtRUVEBTs0HcNvrhTMokqGlpQUjIyOYm5tj9OjRcHJygoaGxqCvXV9fj6VLl2K4gVb6nVs3nCWNl2iQmXPm3s+hM9wuX74MVVXVQSlTXFyM+Ph4JCcno+ptObgdTYPi5ykpT4L+0GFwdXXF3LlzYWZmNij+xsZGzJ8/HyOsTB7cuBbvLvZa4ojzf/CJefA41ffq1auD2kkYDAZoNBquX7+OjgaWyHEyKpogEokgkUgAgLa2NnR0dKC7uUYkj7yqDry8vODr64vhw4dLrROTyYSXlxfcXMbFXrl4TuRuINIgy1etXXDyzLlLcXFxsLGxkeqi7e3tOH/+PE6fPg1OFUOALkvSgq2tLaytrWFpaQltbW3Iy8tDTU0NMjIyaGhoQE'+
			'tLCz58+AA6nY6CggK8fv0anY3VArJ0jC0RGBiIhQsXSu3/5Ofnw9vbG0EBvt5RRyOvChsj0iCTXd3zJ06dbrVw4UKRwpOTk+Hl5QUDAwO8f/8eYWFheHLvusBYveHW8Pb2xuTJk2FoaCj11GtsbER1dTWSkpKQkJCAt8U5AmPcvp+PzZs3Q0dHRyqZ58+fR+rj+3kPk+7ZCqMLNcisOfPu1jZ3eERFRYkUHBkZieMRv2H0RA/4+fnh0KFDKMzmj9D1qTZYuHAhZs+eDS0tLakUFoWmpiYkJycjJiYGBTmvwO1u59EsHZyxa9cuqZ/kVatWYYgCUeh2LCMweG3ohEsJN3afOnUKQ4YMESnU0NAQhYwKZDy9hzu3bqLmfUU/UZGMxX6BCAsLw+TJk6GioiKVouIgLy8PIpEIJpOJfHohMMAgNcx3eJqaiZEjR0q11o0a'+
			'NQrbduyiBgUtS32ZkV46kCZgEDV18o0Zs7x0J0+eLFaoqqoqyGQybt++DW5XGwCAQCCCok/Fli1bEBQUNOhdSRTodDrCw8Oxb98+ZKU/4jNGH5rqapCS9hJOTk7Q1tYWK49EIkFBQQF5OX+PKGUUHx9I45syQavXzbt+896VpKQkiQsVi8VCUFAQinIywOX29ApTouDo0aOQZExpweFwQKPREBsbixZOpQCdoESBrKwsuppqeDqYjxiDEydOSFxTurq64O7ujhkeU5YOTB3wPSFqaupxXvMWatnb24sV1traii1btiAz5T4Abm+nIhloqwWzph7Ozs5ip5s0SE5OxubNm3Ev8RI6Wxv5aKa2TpjptQCBgYH45ptvkJrxF3o6mgEAbFYlKlkcTJkyReyPSiQSoaKigsz0FJuK8rLDff08g6wJ2Tj2/qPnP+/btw8yMg'+
			'IziQ+XL19GTFQEr03Wo+LAgQNgsevx6nkS/sqhY/z48WCz2bh16xbS0tLQ2NgIOTk5idOosbERR48exZ49e/DhbREfbbjVNwjZ+BPWrVsHDw8PUKlU1NTU4OaNRL5pVFZMh6auIUaMGCH2Wubm5th38JDGUr+ljzIz0ioAgGdCRnFRuK+vr8TkTllZGU6ePMlrE+SUsWnTJkyZMgVWVlYIDQ1FVvojLFy4EO3t7Wio7l1sCfIkKKqoYtSoUfDw8ICLiws0NTX5ZDMYDOzatQvpj+/w9ZM0h8LHxwd+fn5QV1fnoz179kwgBOByexAVFQVnZ2dQqVSR9yIrK4slS5aAnp25D8AYHiFk40+KBDll7tOM11x6GVPs54cfV3HRO0+4ALiL/Ffz0R+nZ3O1jSz4xgj7GFs4cP9vxz7uq7xSLr2MyT11LoFraGonMO5bt5nc'+
			'+JvJQnV5lJbFx0OQU+YSiHK89g8/rpJ4P4/Ts7kEGQVuyMaf5YF/npC6urp1jmMnSPQVSktLcfVqv4OnO8wKy5Yt4xvT1taGtrY2vj6CPAnobOEtfABQUZiFX7dmITU1Ffb29jh16hSa2e/6fz2SFtasWQM/Pz8oKioK1Sc5ORmVjDxe22v+IuTk5KD4dQaA3ryIj4+P2KdER0cHTuNdUFfL2QDgNyIAvK0o93F3FxvzAADi4uLQXs/ktRctWiSw76ekpPRPEwIRADDMxBybftmNabN/gNwQ/i3x8d1riNy7nc8YRub2iIqKQlBQkEhjsFgsnDlzhmdkZYoB/P394e/vzxvT0cDCxYsXJd7X9OnTUV5e6gcARABglBSZOTuLj4xra2uRlJTEa/e54x+jqak/oiUokaE7zApl9L/w8uVL7NixA7GxsZjzgz/UdIYJvc'+
			'6U6d44d+4cxo0bJ1afs2fPopKRy2t7enqCSqXCzc0NQ836F9OkpCRwOByxslxcXJD3OscUAIjBIRtH1rVyFUxMTMQyZWRkoLKiP2CbO3cuKBSKwDgLCwsQ5JQBANzOVixfvhxjJk3Dw9sJCA4OhpmZGbZt2wYjIyOh1+ns7BSYch8jOzsbly9f5rVVtY0RFBQEAFBRUeH7oVhVb5GRkSFWno6ODmSUKTIrg9e7Ejkctq+jo6NYBqDXINzOFgCA3BBtkc6XmZkZFEm9OwG3swV0Oh0RERFwGDsZL57cRXBwMIKDg5Gb9VIof8qDGwgICEBubq5QeltbGyIjI9FaW8XrW7p0KYYOHcprf/vtt5Al9a6H3I4miQYBgJEjR6KuljOXWFtb62RpaSmRobCwkPfd2tqaT4GBMDQ0xMiRI3ntW7duoaGhAUePHsU341yR+vAW'+
			'Uh7c4BlXmWKAFSE/Q3eYFY/nbXEONmzYADqdLiD/1KlTSHt0m9ceMXoSFi3izyMbGRnxBXpFRfz+jDBYWlqilsP5hsjhsI3FrcJ9qKjoD95sbW15SR1hmD59Ou97C6cSFy5cQEdHBwgE/uBa28gC+/btw7p16xAZGQlD0/7E9ZuibAQHByM/P5/Xl5aWhhMnTvDayhQDbNq0CWpqanxySSQSXxJ8oO6iQKVSwWHXGBE5bDbZ0NBQIgO7+j2A3p1DUgpv4sSJfDeXmJiIwMBAvHqexDeOTCbDwcEBADBixAhERUXBZtQEHr2SkYvQ0FBUVlaiqqoKv/zyC1+yaNmyZRA13c3MzHi7HPuDYILpYxgYGIDDZqsRGxvqFYQtjh+jLx9KUCJLzLpraWnBz8+Pp1AdswyMvP41Q113OExtnVCYnY7Vq1eDyezdyqlUKiIiIm'+
			'A+ot9prCjMQlhYGMLCwvh2lYnusxAYGChSB11dXRCUehPiIpPZA6ChoYG6+joFYmNjg8xgwnQZGRmpUnazZ8/GRPeZAv3qusOxe/dunD59GraO3yIr/RGCg4Px/n3vE2hoaIgDBw7AwKQ/oZXy4Aae3k/ktY3M7bF161axesjKykqMyQaCRCKhpbmZSOxo7yAoKCgMilGaowgSiSQ0uJo/fz6mTJkCbW1tHDp0CPZjXJD7MgXr169HVVXvzmFqaooDBw7w+RN9UNMZhrCwMBgYGIi9vrq6uth17mMoKyujpaUZRFlZWXR1dUnNCEBgcRSG58+f4+zZswL9d+7cQXZ2NgBAT08PBw8ehP0YF2S/eIz169fznhR7e3tMmzZNgN/f3x9jx44dlL7SoKurC7JyciAqKSn1tLS0SM3Y1taGxsZGsWPKy8uxdetWNH54I0Dr'+
			'21LLy8sBAPr6+ggPD4fNqAnIyXiCkJAQVFdXIzk5GVeuXBHg//vvv/m8YVGor6+XalwfmpuboayszCUqKat0Nzc3S83Y3t4u1pNsamrC9u3bUVXaH3S5TJuD8a4zeO1KRi7Wr1+Pd+964xc9PT0cPnwYI52nICfjCQICArBlyxbUs8oF5D+5l4jExESB/o/R0dGB7u5uqe+r1yAq3URlFZWOhoYGiQwE+d75yG2t5e0KwnDq1Cm8eHKX1za2cMDOnTuxfft2GFs48PoLstIQEhKC0tLeHK+enh6OHDkCC/uxKMnNRB2zrPe6RDmMmTQNFP3e0ILL7UFMTIzE+ITJZILbWtsrQ0FN7FigN1ZTHaLaQaRoaNT2/VLioKGtx1NooNc6EE+fPuVbN+RVdRAWFgZNTU0YGhri4MGDfAtl3qtnCAoK4rnpL1++FLjRqd/NQV'+
			'RUFDw9PXl9b4tz8OzZM5G69vT0IDc3lxcJa2pLPrOpqqqCOoXSQKRQNCr6fiVxMDY25n3Pz88XmJ91dXUIDw/nSw+sXr0aY8b0+xTW1taIjIzkM8q7ktdYu3YtwsPD8Z///EcgbcjhcFBfXw9fX18okfV5/eKmTVNTE5+HKyrMGIiysjJQKBpviGQyObOgoEAig7m5Oe97fn4+WCz+M1sajYaCrDRe22XaHL7cRB+srKwEttT3Zfk4cWgvz5gEeRJcv5uLUeOn4tXzJAQEBIBIJGLGjP51KCsrC6Ke7Ldv32LgPVlYWEi8PzqdDjJF4xVRnUyJyczMlMjg6OjIC+vb65l8uZHS0lLExsby2iTNoQgNDRXpONnZ2SE6OhoT3WcJpTuNHY/Dhw/jyJEjsHX8FiW5mVi7di0MDAx4OrQ21qKkpEQo/8OHD9HTwgbQm/N1'+
			'cnKSeH9ZWVlQJ5MTiEcjD2RRlIntooT3YezYsdA36g8C4+Pj0bddnzx5Ek01b3k0Hx8fifEOgUAAkUgUSispKcG2bdtQXV2NqKgojHedAfrfqb1Gl+3NoHE7W4SuZWw2GwkJCby2joExRo8eLVYXJpOJntba7j8OhycTAcDEzKIoLS1NLBOFQoGrqyuv/a7kNZKSksBgMHD//n1ev5G5PZYuXSpWVlpaGnx9ffH47jWhdE4VA3GxJ7BgwQLs3bsXLi4uMDS1A7uyBNzW/kVXWAwWHx8PVkX/dJk6darEQpsnT57A2tauBPgnhWhoZHxu4E2Jwvz58/lyotHR0Thz5gzvVI1AlIO/v79AON6H1tZWHDt2DEFBQXx+iqq2MTZs3oXJnl5849vq3uPGlRj8uu1nVL4p46Op6QzDx2lPJpPJl0OVG6INUdULA3Hz5k0MG2'+
			'4SDfyTdVdXJ0e8Snu6l8ViiT0CNDExgbe3Ny6d/QMAUPT6FYro/RHocMsRmDpVeIloXl4eDh48iNSHt/j6qdajEBYWBkdHRzQ3N+OqszMuXryIMvpfvDHcnk6go5OPT1FRke8MqaenB8eOHeN7Ory9vSEpNcpkMvEq9TG+dXY8CPxzcpee+qzb87sZHtU1tUMlLUBGRkZ48CgFLQ1sgNsDdPfX4M/0WoCPs/d1dXU4fvw4du7cyZcCAHoTyr///jv6Mnby8vKwt7eHp6cnLGzs0dFDBLu+BZ3dBKC7HQQCEUO0hkJT1xDMcjr+yqFj3LhxUFVVRWJiIg4f2ANwe71Tsh4V27dvFzqtBuL8+fMgq6q8iD17+gQw4ORuONVkPY1GSw8ICIC8vLxIAVQqFStWrMDOzaH8BEUyn89RXV2Nhw8fgkaj8f3aQO8uFBgYiICA'+
			'AKE7EYVCwcyZMzFz5kxUVlaivLwcRUVFIJFIcHR0BIlEwsaNG5Hx9B5++ukn/Pjjj9izZw9fzciKFSskPh2dnZ2g0WhYOHfWxr4+vrB1ylSP3HEu7jaLFy8WK6i9vR0bNmxA8q14Xp8sSQubN2+Gvr4+0tPTkZKSgpJcwe38m3GuCA0NxahRo8ReQxKqq6uxefNmPEv6EwQlCt9iO3XGPOzfvx+S0hpXrlzBo3s3ih4/TOI5Kh+XQ3hdvXEnITk5WeIZb185xMCqIXlVHfT09KCr6YPAeLIeFUuWLIGPj89nVwb0ISMjA8uWLeMV9hEIRJiPGI3jx49LLJzp6uqCm5sbvvd0XXLyjyPn+voFEhtuHtP/tnYY7bBixQqJCuXn52PVqlV8C9nHGKJlBHd3dyxfvlzkWcyn4ObNm9i/fz+q3xT116fIk/DHidOYNGmSRP'+
			'6TJ08i51VadtK92w4D+wU8Iwsr65WHDx9GZaVggcrH6ItNdIwFjzEI8iR4Lw7EhQsXsGvXri9mjKqqKuzevRv//e9/waoo6DeGnDK4HU2Ijo4W6dL3gclk4tChQ7CwtFr3MU0g6ZiRnvpu1szvx9y8c99s1izhrvVA6OrqwtHREa/pxahh9itCAAHdkAGFQoG+vj6UlJQk360YfPjwARcuXMDu3bvxLOlPcDtbeTRLB2fs2PUrauqakfH0HlTUNMRm1TZs2AA7C2rSuZjTOz+mCc3CFtDzzpuZUOc3NLdpSVPkr63de5JXVV0LRuE/Dhe3G2zWOzxJvot7yU/Q3NwMFRUVKCgoSFzs+lBXV4eSkhJcunQJO3bsQNLNODRw+o8UCAQips6Yi71798LOzg5OTk5QVtWAm5ubyEqG2NhYVJUX5d29/afQw2yRydGg1evm'+
			'RZ2mXYmLi4OtrdCSTgF0dXXh4sWLOH36tNB1haisATs7O9jY2PAKd+Xk5HhFMPX19ejo6ACLxUJubi7y8/ORn5/Pt4P0gaJvguXLl2Px4sVSF+7m5eVhntcsBC0LmH38aKTQ/IGE0u4lZx88fu432NLusrIyxMbG4tq1a2irey9yXF9pd1/ZZnNzM3p6eqQq7fbx8ZHoZwzEgNJu2pWL5/xEjZO6+P/ChQuDfhOitLQUly5dQlJSEphVlVIdGAlVUp4EXQMjuLq6YsGCBTA1NR0UP4fDwaJFi2Bvbfp5xf99mP797JSSivcTYmJiBGq8pAGbzcbLly/x4sULFBUV4c2bN/jw4QPQViucQcjrIY6OjgI1adKgvr4efn5+MDXWe3rrxjWJ+/FgXiB6ll9cMf7MmTP/M+/YSQKLxUJAQAAshhtI/QKR8AyNENz+8/qEEV'+
			'YmD7y8vHgHTf/LeP36Nby9vWFtZpwsrTGAQRgEAG5ci3d3nzLh9A/z5iA6OhpcLnfwmn4F0Gg0LJg3F1MnjTsz2FdWP+k11ZXBIW5FBQUHW7tlbHfu3Al9fX3JTF8B79+/x7Zt2yDHbc8zt7D6+fjRiD8HK+OzXmSeNWfe3T/vPfRYs2YNAgMDv9ob3R+js7MT0dHROHLkCL5zm3Q/8Vq8x6fKkr5eQAgKC/LPrVy58m5hXo7j7wcidOXl5WFpaTmoMoTPQWdnJ+Li4rB27VoQu1qy3N1c552LOf3r58j8Yn+GELR6nVdxYcGOv3KLbHx9feHl5SX1W06DRU1NDeLj40Gj0eBgbUo3s7AMO3Hs0GXJnJLxxf8uY9Xa0DFlpYzwu3fuOo9ynghPT8/eEispyrbEgcFgIC0tDQ8ePEBmWgqmuU9NNzEzX/+l/2jlX/tD'+
			'lZCNP8vX1dWGvCkv8yug55m3Q1F25MiRvD9U0dXVhYaGBpSVlXmRcGtrK1paWsBms8FkMlFWVob8/HxkZmaCrExsNzE1Lx5qZHxBnUwOj9i/R3wx6yfiXzPIx1gTsnFsLYe9oJbDGc3hsI3r6urUGurrFdpaW2Ta2tqIAKCoqNijqKTcraqm1q6url5Ppmi8oVAoL9TJlJijkQeyvoae/w/Chh4aPk9EnAAAAABJRU5ErkJggg==';
		me._gyro_off__img.ggOverSrc=hs;
		el.ggId="gyro_off";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 33px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 33px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gyro_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gyro_off.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getUseGyro() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._gyro_off.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._gyro_off.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._gyro_off.style[domTransition]='opacity 0s';
				if (me._gyro_off.ggCurrentLogicStateAlpha == 0) {
					me._gyro_off.style.visibility=me._gyro_off.ggVisible?'inherit':'hidden';
					me._gyro_off.style.opacity=1;
				}
				else {
					me._gyro_off.style.visibility="hidden";
					me._gyro_off.style.opacity=0;
				}
			}
		}
		me._gyro_off.onmouseover=function (e) {
			me._gyro_off__img.src=me._gyro_off__img.ggOverSrc;
			me.elementMouseOver['gyro_off']=true;
			me._tt_g_close.logicBlock_visible();
		}
		me._gyro_off.onmouseout=function (e) {
			me._gyro_off__img.src=me._gyro_off__img.ggNormalSrc;
			me.elementMouseOver['gyro_off']=false;
			me._tt_g_close.logicBlock_visible();
		}
		me._gyro_off.ontouchend=function (e) {
			me.elementMouseOver['gyro_off']=false;
			me._tt_g_close.logicBlock_visible();
		}
		me._gyro_off.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_g_close=document.createElement('div');
		els=me._tt_g_close__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_G_CLOSE";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='bottom : 38px;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._tt_g_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_g_close.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_g_close.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_g_close.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_g_close.style[domTransition]='left 0s, bottom 0s';
				if (me._tt_g_close.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_g_close.style.bottom='-25px';
					me._tt_g_close.ggUpdatePosition(true);
				}
				else {
					me._tt_g_close.ggDx=0;
					me._tt_g_close.style.bottom='38px';
					me._tt_g_close.ggUpdatePosition(true);
				}
			}
		}
		me._tt_g_close.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['gyro_off'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_g_close.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_g_close.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_g_close.style[domTransition]='left 0s, bottom 0s';
				if (me._tt_g_close.ggCurrentLogicStateVisible == 0) {
					me._tt_g_close.style.visibility=(Number(me._tt_g_close.style.opacity)>0||!me._tt_g_close.style.opacity)?'inherit':'hidden';
					me._tt_g_close.ggVisible=true;
				}
				else {
					me._tt_g_close.style.visibility="hidden";
					me._tt_g_close.ggVisible=false;
				}
			}
		}
		me._tt_g_close.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('vis_thumbnail_menu_1') == false))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._tt_g_close.ggCurrentLogicStateText != newLogicStateText) {
				me._tt_g_close.ggCurrentLogicStateText = newLogicStateText;
				me._tt_g_close.style[domTransition]='left 0s, bottom 0s';
				if (me._tt_g_close.ggCurrentLogicStateText == 0) {
					me._tt_g_close.ggText="\u063a\u06cc\u0631\u0641\u0639\u0627\u0644 \u0633\u0627\u0632\u06cc";
					me._tt_g_close__text.innerHTML=me._tt_g_close.ggText;
					if (me._tt_g_close.ggUpdateText) {
					me._tt_g_close.ggUpdateText=function() {
						var hs="\u063a\u06cc\u0631\u0641\u0639\u0627\u0644 \u0633\u0627\u0632\u06cc";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_g_close.ggUpdatePosition) me._tt_g_close.ggUpdatePosition();
					}
				}
				else {
					me._tt_g_close.ggText="";
					me._tt_g_close__text.innerHTML=me._tt_g_close.ggText;
					if (me._tt_g_close.ggUpdateText) {
					me._tt_g_close.ggUpdateText=function() {
						var hs="";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_g_close.ggUpdatePosition) me._tt_g_close.ggUpdatePosition();
					}
				}
			}
		}
		me._tt_g_close.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._gyro_off.appendChild(me._tt_g_close);
		me._gyro.appendChild(me._gyro_off);
		el=me._gyro_on=document.createElement('div');
		els=me._gyro_on__img=document.createElement('img');
		els.className='ggskin ggskin_gyro_on';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAYAAAA4E5OyAAAWYElEQVR4nMWcd0CT197HP4QwE5bsMERcDAH3Xqh1r1atXaJVrxa1jra31dqqra2197Zaq9ZRteKs49ZZLWpx71YBGSIKCoS9CTuB949IIIQMHH2/f+U8Z+Q8v3POb5/HiH8O3kBPIAhoD3gBjoAtYAlUAzKgACgBHgMJQDRwGUj5JyZp9BLHFgCDgNeBEd6eNu49O7sQ5OtI+9Z2eLlb42hvga21GZYWQqrlNchKqykoqqBEVs3jtGISHhUQfT+Xy7ekpEhLHgIRwCHgPKB4GZN+GQRpCYQKBEafDOrtweuj2zIi2At3V/FzDfrwcSER19I4dDKR89dTUShqvwU2AU9ewJxVeJEE6QyEuruKZ86bFsTb432emwjakJ5Vyu7f4vlpVzQp0pJfUBLm9o'+
			'sY+0UQpBWwsHVLm/mL53QlZKIvpibGL2BY/aiqVrD3SALfbLxNYnLhemA9kPg8Yz4vQT4Vi0y+XragBwtndsJEKHjO4Z4NcnkN63dGsXzNDUpkVZ8DXz3rWM+6lH7AF+OGen9yKmw8I4K9MBa8TP6sGwKBEb06uzJ1oh9PpMWD4hPzWwEZgLS5Yz3LW0w3MzXe/t1n/Zg3LegZur98hB2OZ87SCMrK5aHA5ub0be4OWeIhsfoxfM94xg9r3cyu/xw6+jkyZog3p88/Hl1UUiVHqccYhOYQZKVPa7svLhycgG+bFs2f5T8MZ0dLJo1uy5lLKYOy88pNUeowemHokVnVNdB5yR+7x2NvZ97syWXnlXH5ZjqXbkqJScjj4ZNCsnLKqKxqWrcyNzPGxVFE65Y2dGhvT7/ubvTrIcHJ3rLZ/11QVMnwKUe5FZm5Gliir70h'+
			'BPk0wMfh60uHJ2JrbdasycQ+yGPnoThOnEsmOaWYqupnUy5NTYxp5WnNmCGtmDbJD/929s3qX1RSSb8Jh7l3P3cpsEpXW30EmenuKv75+tHJzVKy4h/mszEsmj2/3aeopFJrO5GlCcYCI6zEphgZQVm5nMoqBaVl1Vr72FiZETLRh3lTg2jnbWfwnNIyZPQaf4C0DNks4Gdt7XQRpKOFufDuld8m0bmDk0F/WlGpYNPuaNZuu0tqeolGvVhkQpcAJzr5OxHgY4/EWYypqYAWNuYYGxtRWFxJaZmcjOxSouNziYrP4e/obIplVRpjeXva8OGszsx6qwNCA/Wfu7E59B5/gIpKRSBwr6k2ugiyZcvqwbNmvdVB6+AnzyUTMtGXlm5WpKaXMH/5RY6GP9Jo27aVLVMn+jJqUCu8PKwNPnpFJZWkZ5Vy4mwyYYfjiEvM12'+
			'gzeUw71izrj8RZZNCYm3ZHM2fp+U3AnKbqtUmZxeOGen/y36X9tA68Ze89Vqy5QVxiHnY25sz97DwRV1PV2rTztmPxnG6sXT6AkcFeuDiJMDcTGjRxAHMzIY4tLOjTTULIBF/829kjzSolM6eU2lplm9gHeVy5nU6XACdcnfQTpVuQM/fu53WLf5jfpDhuaod4iUUmybHnpuDpZqV14Mdpxcxe/CdnLqVgbGyEQlHb4EWMCZ0SyPzpHfFyt9Y7SUMRk5DHpt3RbP81VkNCtfGyZe+Pw+je0UXvONJMGX6DdlMsq2pHI9unqR3yxcqPevcYOchL56C21mY42Flw8GQi8qfEMDICD4kVa5f35+PQrs2WStoQFZfLsu+v8+m317hwI02N+HXIL6wg4moa/bpL9O4Ua7Ep5mZCwi8+ATjdsK7xDgny9rSJvH8hRK+hlp5V'+
			'yviZJ/grOku1fS3MhRzaPJJRg1rpe0eDkJNXzoawKDaGRZFXUKFRb2EuRCgUICutUs2ha6Azx7aP0ctT5PIa/AbvJjG5sDsNXAeNd8gX3yzu01Xftisrl/PekgjOXq736pmbGVNRqSArp4zg3u7YWD3f7jhxLonZSyLYfyyB8gq5Wl3nDk6ETPDlg1md6NXZlYs3pFQ9PULpWaVIM2WMHuKtU/oIBEaIRaYcO5MkBI7VPW9IEE83F/GenWtewdhY9+74eX8M/93yt6rs5iJm1w/DyM4t48+rqdyOymJIX0+y88o5ePIBEddSKS6pQigUYGejm1BFJZV8vf42//76Co9Ti9XqAn0d+OrfvVjxQU9eHd6a9t52ZOeWs+9ogtoxikvMQ+IsoluQs87/6tDenl2H4zsVlVTtAgoBGrL80HnTgvQ6dx4kFfBdA2KYCAV8s7'+
			'gPowe3IsjXgSkLw7l4Q8qASYepqJSTmVMGKLVNsciEPl0lvDaiNSOCvXB2UFfF4x/m88GXl/jjgrpX0MnektCQAOa/25EWtuqmw9nLKRoMtrYW/rPpbwb19qB9a+3Km4lQwNypQXy86koo8DHU8xChUCioTr05AxdH3fbCwhUXWbcjsr48oxNrl/dXldOzSun72kGSG61uY3Rob8977wQwbZIfIksTzl1J4f3PL3D/UYFau7GveLN8UY8mlUNppowhb/6m6mMiFKCoqaWmRrlb5r/bkXVfDNA5j/SsUjx7bkehqBUCirqzERzcy10vMRIeFRB2OF5VbuNly0ezO6u1KSuv1jjzpibGGDVi3zEJecz7/AJTFoaz+qe/eHPeH2rEEItM+HZJX37dOEKrpnz8bBIJSfV9pk/2p5O/o6ocdjiehEYEbgyJs4jBfTwABoMy'+
			'VAAw3hD/xo6DsRQW19sms98OwM1F3cY5cylFdUzqiODTxo41y/rz9qs+WItN1dof+eMRS1ZfJTe/XPXMv509R7eN4ePQLliYN63IpWeVsm5HpEq62NuZs3BmJxbO6KRqU1RSydZ9MXrfa9KotgCToJ4gwcG93XV2yiuo4PiZJFW5Th1vjIZ2h4W5kDZetkTH53L1dgYbvxrI2X2v8q+3OmjVFSaObMu5/a/VrZpW/LgjUm31J45si09rO8YPa41f23p/zfGzSeTklTc1hAojlWrCSFASRCJxFvnqc/pcuinl0ZMiVXnaJD8c7S002gX6OKh0mOrqGj6a3ZlhA1py+FQik+ecxr+dPT9+MZDWLW2a/J+qagVl5dqtXYBbkZn8vL9+5V0cLfk4tAugPGohDRYqRVrC5Vu6XasSZxFtvGwlQBsB0LdvN4nODqAkSLW8Bg'+
			'ArsalW5cu3bQusnh6LankN0fG57Fs/nAE93Qi/+ITJc04zec4pbt7NbLL/8bNJjHn3OH/fy26yvrxCzoq1N8kvrFfU5k/viLdnPYGH9W+JWGQCKAl86aZ+X3PPzi4APQVAYKCvg94O9+7nqn538nfE27NpG6WVhzW9OruqygdOPKCgqJLDm0cR3Nud3yOSOX42SUVceztzli/qQRsvW1WfuMR8pi46Q1Rcrsb432+9w+nzj1Xlft3deO+dQLU23i1t1BhxTEKe3vcL9HEACBQA7XXJ6jo8fFyo+t0lwEm1C5rCpNFtVb/zCirYsvceFZUKBI1ETSsPa3auGcqKRT3Zt344Pg3mEfsgj8lzT3E3Nkf1LOJaKv/ZXK8D2duZs+qT3hrKnrXYlK6B9UpZw7lrw1MatBcAXoZYpBnZ9ZKjIdNqCsMGtFR7ub1H7jN2+nH+'+
			'bOQecGhhQY+nZkK3IGeObBtDry71uyvhUQEhC8N5Ii0hRVrCnKXnKWnAtD+a3QVtx92vbQuVlKuTerrQ0s0aoKUAcHQ0wHlb5w+1MBfiIdHuFgAlk3v/3Y6qCaVnlaqttMRZROcOTtyOymJS6O+kZcgA8Gltx771w9VWNyYhj/nLLjB/+QU1qTJuqDcfzlLXgRrC3VWsEtnanNkN4eRgAeAkAGxtrbVv/8YQGgsMctlNec2HcUM1dRuJs4gtqwdzcudY+nSVcPGGlDfmnla5HL3crQlbO1RN5T5+NoljDUS+fzt71n0xUKdFLhQKEOqxyRriqX5kLQDMm+PFshKb4mCnKW6bateUcTXjDX9GD26Fq5OI/RuG07+HG1f/SuedBeGkSJVE8Wvbgl1rhzYZ/3F1ErFh5UBa6nBeAdjbmuvkc40hsjQBEAkAufwpxzcERk'+
			'ZoqOFN4dyVFH5sYPPU4X+nHnIrUilyPSRW7P5hGP17uHHpppR3FoSrdkr3ji5MGNlGo/+imZ0Y2Eu3EvkseCr1qgWATKbD7d8YZeVynaEFgMTkQuZ+doGsXE1mFpeYT8iiMyQmKzm/p5sVe9YNo1cXVy7fkvL2/HAysks5cS6J7b/GavS/fiejSS98Y+QXVagxYH2QlVYDyARASXM6VlTKKa/QzqRKZFW8v+wCDxoYXa8Ob83owfWKXMKjAt5ZEM7jNKVF7CGx4sDGEQzs5c7lW1JGTzvOe0siyMgu1Rj/aPgj9h65r3eeVVU1yBWG7/ynNCgRAIUNDTZtqPOTlFfIScvQjLnU4butd+p8lYDSzN+0ahDrVw6kQ/v6iNutyEzeer/ewvWQWHFo00i6BTlzJyab9CwlMQQCI4YNaKmSbLW1sGFnlJox2BTSMkpUVreZ'+
			'qf4Qdm5BOUCuAHhct1K64OpkqZqQNs0v/OITNb5hY2XGhpXBODtY4uVuze4fhqkxyut/Z/DqzBMqNf3K7XQNQ2zSqLYc3TaGiQ34SVxivpr7sjFqamq5E5OjsoQNCU+kpssAUgVAgj6fAaCmWt+NzdE4n/mFFSz7/oaae2Dp+90Y0NNNVe7o78j+DSPUiHL/UQFvzjvNsu+v8+6HZ2m8OLn55RQUVTB3apCat2zvkQStcy2WVXE3tt4WamjnaMPTI/5AAERHx2vaDI3RcLtHxuaQlilTq9+wM0olPUDJNxbO7ERjBPk5sOuHoWrabmJyISvX3VIR09TEmEmj2jK4jwd/Xk1l9LTjCARGvDG2narPjbsZGsSrQ1JKEQ3fKcBHf3A8Stk+SgBcvnwrXW+HPt0kKoWssLiSE2eTVXX3HxWwISxKVXayt2TlR720Kk5dA5'+
			'05uXMc44Z6N1k/sJcbB34aycFNI+nTVcKdmGzenHealm7WqjGLS6qIbyK0CfD7n48pK1fyD6FQQN/u+q35p9b3TQGQkZFdGtdU3LQhgnu5q/kwfjkYq4rSf7/1jtrZnxMSqDdlQSAwQqAlLy3+YQHzPj9PelYpR7eNZvTgVty8m8nGXVGqRamW1xB9X3NnZ+eVEXY4TlX2cremfw83jXYNIc2U8fBxoRR4WLeE589fS9XVB4cWFowZUi867z8q4NiZJOIf5nPkj4eq5/7t7Jk/vaPOsSKupTL07SMc+UMzMA6Qml7CT7ui6T/xEJ98c5URwV74tLYjRVqi5q91bKGpMe88GK/myBr7irfeRJun7oTTUO9CPHo0PElbexWmT/ZX84n+sP0uP+6IVEXVBAIjFs7oqDX2UlYuZ9WG24yfeVJNT3FxtOS7z/rx2gh1zbSg'+
			'qJIdB2J5f9kFklLU+YWrk4jg3upuRmmmjC1767McrMWmzHzTX+97HTiRCHAA6uMy589fTyU9q1RnCNC3TQumTvJl/S9KfvH3vWw1J06Ajz1jtfCFOzHZLPvuBr9HJKs9D/JzYMPKYPp2kzC7tJpBvd3Zui9GjSnW1NRSVaOuDFqYC9X0i5qaWlZtuE1SSv3umDrJV28+nDRTRoTydERAfeSutrYWM4cW5v36ddd93rw9bTj5ZzKFxZXU1oKipj5iFjLBVyM7Mb+wgtU//cWiFZeIjMtRq5swsg2/fD+0zluFqakx3Tu6MGlUWzr5OyJX1JBfWIFCUYtCUYuRETg7WOLmIubh40JuR2UxqI8HttZm7D2SwOffXVfpHm4uYn78cmCTx6ohNu++x9nLKf8BzoJ6sNtD4ixKSbr6rl7NbvOee4R+qp7UZ25mzP+2jKYua0'+
			'BpjySzMSyKxmLd0d6Cj2Z1YdG/9Gc/P5GWkJhcQExCHtZiU/p2k2BtZcbUReGcuZTCkL6eLJjRkVmf/Kmm6q//cqDePNqqagVt+oWRml7SCuV1FI3o/08/fR0cGjolUKNzQ1RUKghZGM6h3+tTK8QiE9Z83h9PNysuXE/jzKUU7sRoOoqDe7uz8qNe9OmqXxTqQkZ2KbMXR3DiXBIW5kI1Zvv66LaErR2GuZnuhd3+aywzPz63HZhZ96wxQQK83K2jEy6G6I3x1qVD3I7KUj2zsTJDUVNTZzmqwd1VzJyQQOaEBD53ZkAdLt2UMnb6CZX1bWSk1HGO/DxaI4DWGHJ5Db6DdvPwcWFXQOWobfzW2YXFlXYiS5Oe+kITVmJTugY5c+5KCgVFyglVVimoqla3MJ0dLJnymg9bvx3C2Fe8m5VSpQsHTjxgwfKLZObUHxNT'+
			'E2O2rh5sUJLgmp/vcuDEg/XAjobPm9KMPC0thE/iIkL0eqVAabW+Oe8PNe5eN7l3X/dj/vSOep3SzUGKtIR1OyLZvCdapY2CUiOVy2sY2t+TLasH60zlkmbK8Anehay0ujWgpm80dS6KquU1FYnJhUPeGt9e7wTdXMT07SYhMi4XaUP75impHVpY4CmxqnPRPTMyc8rYvOceH3x5iRPnklVxHVB61zavGkReQQVnLqVga22m06sWsjCce/fzPgOON67TxiiuJiYXuro6ibo29IBrg8RZxKhBrUjPkqlcA7W1Sj5z8lwyx88lUVJahVhkioW50OBjk19YQVxiPtv2x7BgxUUOnHhAboPUKiMjJQPd8d0rdAlwol8PN2ytzRg3tLVWk39jWBRrt93dBCxuql6XdzTI3Mw48spvr9MlwLDE3Wp5DVv33mPNz3c1jhCApY'+
			'WQroHOdO5Qn7hrYiJQmfUFRRVUVdUgzZRxJyabyNgc7sbmaKRXgNKh9O/ZXQidEmBw4u6dmGx6jTtIVbWiA6Dpn0R/avcMd1fxtuamdj9IKmBjWDS7f4tXMdymUJfaXReHlZVWo6ipNSi1O3RKYLNuZTRI7f4XsE1bO4OT/88fmNDsmxD3HxWwbX8Mx88mkSItMShg1BRMTYxp6W7FmCHezHjDv9lMOievnEFv/I+YhLznTv6vw8qugc6fhe8Zr5HjZQiy88q4ejuDizfSiEnI49GTIjJzSqmoNPx6SN/uEo2cNENQUFTJsHeOcDsq60tgub72zbli9lWAj8PSU2HjXtr10xeN9KxSRk07RmRszipgqSF9mnOjKiI7t6z60O+Jg/t2k+jVBP+/8Vd0FkPfOULCo4LPgRWG9mvunbvLxbKqJ2GH4seLRab07ORqUBTv'+
			'n8aGnVG8Mfc0+YUVM4B1zen7LNdUI2tqaveFX3xi/Fd0dre+3STYvKCc9udFanoJIQvP8MP2u5sUitppwJnmjvGs93bzgVOJyYWVW/fdGyIQGNGjk4veDOiXhapqBd9vvcvkuae4dz/vU5R363L09WsKL2LDewAferlbL/g4tAvTJ/sbFCl7EaiqVrDzUDyrN94mObV4HfADT/0az4oXyQECgFCJsyh03rQgpk70M/iWU3ORlVvGLwfj2BgWRVqGbCvKjyFopho8A14GS/QAQo2NjZYE9/Jgwsg2DB/Y8rkvEsU/zOf8tTSOnXlExLU05PKa1SgJ8UI/tPIyZYQxEAxMAIZ7ull59ezkQpCfI+297XB3FeNob4FYZILIQqm6l5ZXIyutJievnLQMGQ+SC4iMzeHyrXQyskvjUX5I5RhKh7CmgfMC8E8KTU/UP7njjv'+
			'KTO2Kg7myVovzsTg6QBjxAeRQuo/y4wUvH/wFwVrblrNw1kwAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		me._gyro_on__img.ggOverSrc=hs;
		el.ggId="gyro_on";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 33px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 33px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gyro_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gyro_on.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getUseGyro() == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._gyro_on.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._gyro_on.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._gyro_on.style[domTransition]='opacity 0s';
				if (me._gyro_on.ggCurrentLogicStateAlpha == 0) {
					me._gyro_on.style.visibility=me._gyro_on.ggVisible?'inherit':'hidden';
					me._gyro_on.style.opacity=1;
				}
				else {
					me._gyro_on.style.visibility="hidden";
					me._gyro_on.style.opacity=0;
				}
			}
		}
		me._gyro_on.onmouseover=function (e) {
			me._gyro_on__img.src=me._gyro_on__img.ggOverSrc;
			me.elementMouseOver['gyro_on']=true;
			me._tt_g_open.logicBlock_visible();
		}
		me._gyro_on.onmouseout=function (e) {
			me._gyro_on__img.src=me._gyro_on__img.ggNormalSrc;
			me.elementMouseOver['gyro_on']=false;
			me._tt_g_open.logicBlock_visible();
		}
		me._gyro_on.ontouchend=function (e) {
			me.elementMouseOver['gyro_on']=false;
			me._tt_g_open.logicBlock_visible();
		}
		me._gyro_on.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_g_open=document.createElement('div');
		els=me._tt_g_open__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_G_open";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='bottom : 38px;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._tt_g_open.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_g_open.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_g_open.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_g_open.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_g_open.style[domTransition]='left 0s, bottom 0s';
				if (me._tt_g_open.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_g_open.style.bottom='-25px';
					me._tt_g_open.ggUpdatePosition(true);
				}
				else {
					me._tt_g_open.ggDx=0;
					me._tt_g_open.style.bottom='38px';
					me._tt_g_open.ggUpdatePosition(true);
				}
			}
		}
		me._tt_g_open.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['gyro_on'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_g_open.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_g_open.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_g_open.style[domTransition]='left 0s, bottom 0s';
				if (me._tt_g_open.ggCurrentLogicStateVisible == 0) {
					me._tt_g_open.style.visibility=(Number(me._tt_g_open.style.opacity)>0||!me._tt_g_open.style.opacity)?'inherit':'hidden';
					me._tt_g_open.ggVisible=true;
				}
				else {
					me._tt_g_open.style.visibility="hidden";
					me._tt_g_open.ggVisible=false;
				}
			}
		}
		me._tt_g_open.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('vis_thumbnail_menu_1') == false))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._tt_g_open.ggCurrentLogicStateText != newLogicStateText) {
				me._tt_g_open.ggCurrentLogicStateText = newLogicStateText;
				me._tt_g_open.style[domTransition]='left 0s, bottom 0s';
				if (me._tt_g_open.ggCurrentLogicStateText == 0) {
					me._tt_g_open.ggText="\u0698\u06cc\u0631\u0648\u0633\u06a9\u0648\u067e";
					me._tt_g_open__text.innerHTML=me._tt_g_open.ggText;
					if (me._tt_g_open.ggUpdateText) {
					me._tt_g_open.ggUpdateText=function() {
						var hs="\u0698\u06cc\u0631\u0648\u0633\u06a9\u0648\u067e";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_g_open.ggUpdatePosition) me._tt_g_open.ggUpdatePosition();
					}
				}
				else {
					me._tt_g_open.ggText="";
					me._tt_g_open__text.innerHTML=me._tt_g_open.ggText;
					if (me._tt_g_open.ggUpdateText) {
					me._tt_g_open.ggUpdateText=function() {
						var hs="";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_g_open.ggUpdatePosition) me._tt_g_open.ggUpdatePosition();
					}
				}
			}
		}
		me._tt_g_open.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._gyro_on.appendChild(me._tt_g_open);
		me._gyro.appendChild(me._gyro_on);
		me._container_3.appendChild(me._gyro);
		el=me._enter_vr=document.createElement('div');
		els=me._enter_vr__img=document.createElement('img');
		els.className='ggskin ggskin_enter_vr';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAYAAAA4E5OyAAAKJElEQVR4nOWceXAUVR7HPz2ZHDCTBCQhB0nnAASCJAY5FcUEFzl2lywKWrurREFrB5BmtVY5FcUQtbZYegHjhZKl2CoWQRAXS7SIcmkElgTkCFdC5yIcJjIzHJmZ9P4RwplJejIX4OfP7t977zvfed39bkFVJHyBIMrJwEAgDegBJAERQDhgBGyABagFzEAZUAIUA9tURVJ8otNbhgiirAMygfHAyGQxPG5gejRpKRH0SO5IUnw4EXeFEB4ajNEQiM3egMVqo/aXi5gtNsoqzlFyrJbig6fZtrMKpdJ8FNgMrAYKVEVyeEW3pw0RRDkBMOl0wiuZ98cz/rfdGZmRSFyM0a18j5bVsXlHBau/OELB9+U4HOrbQJ6qSCc8obsJjxkiiHJfwBQXY5w0NT'+
			'uNP2X1dNsEZ1TVWFmx9iDv/msvSqX5ExqN2emJvN02RBDlJGB614TwaTMm9+Ppx3sRFBjgCW2tUm9zsPKzEnKX7uRIad1iYLGqSEfcydMtQwRRnmU0BOa8Kg1k+qR0AvU6d7S0Gbu9gcXLi3lt4Q+YLfVzVUV6s615tckQQZRTgKljhieblszP8Nqj4SpVNVamvfYtazYezafxMSp0NQ+XDRFE+dngoIBlf5/zIFOz01wtzyfkf3qQybM3c/6C3aQq0nuupHWpjguiPDM+NnTZtrXjblkzACY83ovv1z1BQpfQPEGUZ7uSVrMhgijP79m144Lta8fRLzXKdZU+JrVXBNs/G889PTq9KYhyjtZ0mgwRRHlBv9SoOdvWjic+NrTtKn1Ml2gjWz4dx4B7o2cJopyrJU2rhgiiPKtPz4iZX//7D3TqGOK+Sh/TMTyYTSuz'+
			'6NMzYoYgyrNai2/REEGUJ8XFGHM25o+hQ1iw51T6mPDQYDbmjyEuxpgjiPJzLcU6NUQQ5Xvbheg/XL/sd7fMZ9Ud4mKMfP7x7wkJDvhAEOU+zuJaqiGmRfOG0veezl6Q5x/Se0ey8NWHAEzOYpo1RBDlGWOGJz///B/v8ZY2v2F6KpWxI7uZnH2Ob2qYCaKcaDQElu7/5inELrfPF8UVKk9aSMlcwTlL/d039n2aqyF/nTtt4B1rBjR+jue9OAjghRvvXVdDBFFOSxbDiw59+7TfOmq+wm5vIGXYCo6U1g24dujgxl9tetl03x1vBoBer2PmlP5wwwv2Sg0RRFnsEm08cXx7ts/GM/yNzd5A9weXc6LSnKwqUilcX0NMU7PTfjVmAATqdUyZkAbX1BJBVSQEUdbr9TpbeeFEoiPb+0+hH6iqsSIOWobDoepVRXLoL1'+
			'/PyBgcp9mM7buqmPX2Dgr3nORSvVcGv90i1BjE6MxE5NeH0rlTy78pNsrAsAfi2bRFGQZsanpksrIe7aq5wHfydrOlsPKWNAPAbKln1YbD5C7ZpSl+3OjuAOPg6jskI+P+OM0F/lRy1kWJvkdV4avvtM1QjMpMAhgFoBNEOTY2ytCrV7e7NBdmsze0RaPPuXjJrikuNspAt8QOsYIod9MBQ4b0j/WuMj+hqtpjB/WNBhikA1JTe0V4SdLtQ2rPCIBUPdCjR9eOTgP/lrOVkmN1AIwZnszEJ3v7RKAnyZq0gYbLT3myGMaieUNvirnsQQ89kJgYF+Y0sy2FVfxYdBKA7kkdPK/WB2zcXHblvZfeO7LZmIQuYQAJOiAyspVv9a+BzhHtADrrgA4dwoL8LMf/hBmDAMJ0QEhIsL6V8DsfQ/tAAIMOsNtvk3aFN7n8jrHp'+
			'AIvlvM3PcvyPxWoDsOgBs9lSHxUV4Z8Xq6F9IGJsKIb2gdT+cpHyKgv1Nt/3kcyWegCzHqirO3fJ5wIAUrrfxYJXHmBgejQdwoKpPmXli29KeSV3Gxcuamt2e4oztRcAzuiBsrKKc/2cTWCn944kJDgAVW1s1HiKUGMQyxcOp3/a1XKT4sN44Zk0uid1YPzkjU3/mts80D8Wh0NFVVWnbanyKgtAuR4oKTlW6zSz93IzPSLqWgztA1nz/ujrzLiWR4bE80J2GrlLd7rUH3FGwarHWo05fLwW4LAO2Lv34Bn3S3WBR4cm8MgQ0el9vV7HX/7cB51O8Jmm4kYPinXA1q0/VrmUWHBDp16v4zcPiq3mER8byvCHEtpeEK7pLNxzEqBQpypSdfUp64EDR37WnDjAjX8uJDiAu5O19YnGjtA+itccQUHaBswrT1o4WlZXqS'+
			'rS0aYRs4KCHeWaC0p3YwI8KqI9PbtqG4waPSyJjuFtX4YxZniyprgvC8oAvoSrQ4jr1n11XHNBc6cN4P77YlwSp9MJ3Ns7kuULhxPT2aApTUxnAwtffYjITu1cKisoMIDscSlNE1GtsmrDEYBVcHUaIiAgQLArP0wkNkqb2DuFypMWxEEf09CgBqiK1KADUBXJ4XCoufmfHvC3Pp+z8rMSGhrUd1RFaoDrZ+7yliwvvmWnFrxBvc3BkvxigLyma1cMURWpvKrGmvfxqv3+0OYXVqw5RHmVeZmqSGVN126c5s97J2+3XzpXvsZub+Ctd3fBNbUDbjBEVaR9ZRXn5IUf7vGlNr+waFkRR8vqFquKtPva680tBFk4Xy7kRKXZR9J8T+VJC68v+gFg0Y33bjJEVSTl/AX7jCmzC3yhzS9MmVOAxWqboyrSTY2vZpcKqYr0'+
			'9n83l77//sp93lfnY5bmF7N+0/E8VZGaXf/e0tqpvOnzvmP3vlNekuZ7/vfTKV58YyvAUmcxTg1RFan44iXHpKxJG6iotnhDn0+pqLYwZuIG6m2O51RFctq2aHF1napIyyqqLbNHTVjP2dqLnlfpI06fvcDIp9dRUW2ZrSrSRy3FtrrcUFWkBfsOnXlzxFPr+Lnu9jOl9pdLjM5ez08lZ99QFWlBa/Ga1l+qijR3196anIfHr7mtHp+qGiuZT65hZ3HNAlWRXtOSRvOCVFWR5uw7dGb24KxVVya/b2V27a1hcNYqivafnqsqkuZtZi6t0FUVaUFFteWZIWNX84+P9nhkANgbLFlezJCxq1EqzRNd3bLa1m2q3YHpozOTJr+bk3HLrIsvrzIzde63fP718TxgiapILo9nuLuReUb7dvrcOdMG8NLzff226Lfe5mDRR0'+
			'XM/2chFqttlqpImvbXNYcntrrHAy8lxoVJL5vu49knehOscXDXXeptDpavPshbS3dSWn5OBhZd25VvC548DKEPYIqNMpimZqcx4fEUrw1H1pw5zyf/OcDS/GIqqi0f0LiLu8gTeXvjuIx4wBQQIMzMGBzPY6O6MeLhBFpatqWFg0d/pmBHBes3HWPzjgrs9oa3aDTCowetePNAlQAgA3gMGCF2CU0clB5NWkokPZI7EhdjJLJTO4yGQAztAgGwXrBhsdo4ffYCFdUWDpfWUrT/NFt/rKL6lPUgUACsBzariuSV2XCvGXJTQaIsAoO4euROHBBJ43E7Tc+WlcZjd04DFcBhoAjYqipStS90/h/eo7cTuwnMlwAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		me._enter_vr__img.ggOverSrc=hs;
		el.ggId="enter_vr";
		el.ggDx=-97;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 33px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 33px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._enter_vr.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._enter_vr.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.hasVR() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._enter_vr.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._enter_vr.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._enter_vr.style[domTransition]='';
				if (me._enter_vr.ggCurrentLogicStateVisible == 0) {
					me._enter_vr.style.visibility=(Number(me._enter_vr.style.opacity)>0||!me._enter_vr.style.opacity)?'inherit':'hidden';
					me._enter_vr.ggVisible=true;
				}
				else {
					me._enter_vr.style.visibility=(Number(me._enter_vr.style.opacity)>0||!me._enter_vr.style.opacity)?'inherit':'hidden';
					me._enter_vr.ggVisible=true;
				}
			}
		}
		me._enter_vr.onclick=function (e) {
			player.enterVR();
		}
		me._enter_vr.onmouseover=function (e) {
			me._enter_vr__img.src=me._enter_vr__img.ggOverSrc;
			me.elementMouseOver['enter_vr']=true;
			me._tt_vr_open.logicBlock_visible();
		}
		me._enter_vr.onmouseout=function (e) {
			me._enter_vr__img.src=me._enter_vr__img.ggNormalSrc;
			me.elementMouseOver['enter_vr']=false;
			me._tt_vr_open.logicBlock_visible();
		}
		me._enter_vr.ontouchend=function (e) {
			me.elementMouseOver['enter_vr']=false;
			me._tt_vr_open.logicBlock_visible();
		}
		me._enter_vr.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._tt_vr_open=document.createElement('div');
		els=me._tt_vr_open__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_VR_open";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='bottom : 38px;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._tt_vr_open.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_vr_open.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_vr_open.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_vr_open.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_vr_open.style[domTransition]='left 0s, bottom 0s';
				if (me._tt_vr_open.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_vr_open.style.bottom='-25px';
					me._tt_vr_open.ggUpdatePosition(true);
				}
				else {
					me._tt_vr_open.ggDx=0;
					me._tt_vr_open.style.bottom='38px';
					me._tt_vr_open.ggUpdatePosition(true);
				}
			}
		}
		me._tt_vr_open.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['enter_vr'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_vr_open.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_vr_open.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_vr_open.style[domTransition]='left 0s, bottom 0s';
				if (me._tt_vr_open.ggCurrentLogicStateVisible == 0) {
					me._tt_vr_open.style.visibility=(Number(me._tt_vr_open.style.opacity)>0||!me._tt_vr_open.style.opacity)?'inherit':'hidden';
					me._tt_vr_open.ggVisible=true;
				}
				else {
					me._tt_vr_open.style.visibility="hidden";
					me._tt_vr_open.ggVisible=false;
				}
			}
		}
		me._tt_vr_open.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('vis_thumbnail_menu_1') == false))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._tt_vr_open.ggCurrentLogicStateText != newLogicStateText) {
				me._tt_vr_open.ggCurrentLogicStateText = newLogicStateText;
				me._tt_vr_open.style[domTransition]='left 0s, bottom 0s';
				if (me._tt_vr_open.ggCurrentLogicStateText == 0) {
					me._tt_vr_open.ggText="VR \u0639\u06cc\u0646\u06a9";
					me._tt_vr_open__text.innerHTML=me._tt_vr_open.ggText;
					if (me._tt_vr_open.ggUpdateText) {
					me._tt_vr_open.ggUpdateText=function() {
						var hs="VR \u0639\u06cc\u0646\u06a9";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_vr_open.ggUpdatePosition) me._tt_vr_open.ggUpdatePosition();
					}
				}
				else {
					me._tt_vr_open.ggText="";
					me._tt_vr_open__text.innerHTML=me._tt_vr_open.ggText;
					if (me._tt_vr_open.ggUpdateText) {
					me._tt_vr_open.ggUpdateText=function() {
						var hs="";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_vr_open.ggUpdatePosition) me._tt_vr_open.ggUpdatePosition();
					}
				}
			}
		}
		me._tt_vr_open.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._enter_vr.appendChild(me._tt_vr_open);
		me._container_3.appendChild(me._enter_vr);
		el=me._button_auto_rotate=document.createElement('div');
		el.ggId="button_auto_rotate";
		el.ggDx=-17;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 33px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 33px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_auto_rotate.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_auto_rotate.onclick=function (e) {
			player.toggleAutorotate();
		}
		me._button_auto_rotate.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._stop_rotate_image=document.createElement('div');
		els=me._stop_rotate_image__img=document.createElement('img');
		els.className='ggskin ggskin_stop_rotate_image';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		me._stop_rotate_image__img.ggOverSrc=hs;
		el.ggId="stop_rotate_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 33px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 33px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._stop_rotate_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._stop_rotate_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsAutorotating() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._stop_rotate_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._stop_rotate_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._stop_rotate_image.style[domTransition]='';
				if (me._stop_rotate_image.ggCurrentLogicStateVisible == 0) {
					me._stop_rotate_image.style.visibility=(Number(me._stop_rotate_image.style.opacity)>0||!me._stop_rotate_image.style.opacity)?'inherit':'hidden';
					me._stop_rotate_image.ggVisible=true;
				}
				else {
					me._stop_rotate_image.style.visibility="hidden";
					me._stop_rotate_image.ggVisible=false;
				}
			}
		}
		me._stop_rotate_image.onmouseover=function (e) {
			me._stop_rotate_image__img.src=me._stop_rotate_image__img.ggOverSrc;
			me.elementMouseOver['stop_rotate_image']=true;
			me._tt_rotation_of.logicBlock_visible();
		}
		me._stop_rotate_image.onmouseout=function (e) {
			me._stop_rotate_image__img.src=me._stop_rotate_image__img.ggNormalSrc;
			me.elementMouseOver['stop_rotate_image']=false;
			me._tt_rotation_of.logicBlock_visible();
		}
		me._stop_rotate_image.ontouchend=function (e) {
			me.elementMouseOver['stop_rotate_image']=false;
			me._tt_rotation_of.logicBlock_visible();
		}
		me._stop_rotate_image.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_rotation_of=document.createElement('div');
		els=me._tt_rotation_of__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_rotation_of";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='bottom : 38px;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._tt_rotation_of.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_rotation_of.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_rotation_of.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_rotation_of.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_rotation_of.style[domTransition]='left 0s, bottom 0s';
				if (me._tt_rotation_of.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_rotation_of.style.bottom='-25px';
					me._tt_rotation_of.ggUpdatePosition(true);
				}
				else {
					me._tt_rotation_of.ggDx=0;
					me._tt_rotation_of.style.bottom='38px';
					me._tt_rotation_of.ggUpdatePosition(true);
				}
			}
		}
		me._tt_rotation_of.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['stop_rotate_image'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_rotation_of.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_rotation_of.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_rotation_of.style[domTransition]='left 0s, bottom 0s';
				if (me._tt_rotation_of.ggCurrentLogicStateVisible == 0) {
					me._tt_rotation_of.style.visibility=(Number(me._tt_rotation_of.style.opacity)>0||!me._tt_rotation_of.style.opacity)?'inherit':'hidden';
					me._tt_rotation_of.ggVisible=true;
				}
				else {
					me._tt_rotation_of.style.visibility="hidden";
					me._tt_rotation_of.ggVisible=false;
				}
			}
		}
		me._tt_rotation_of.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('vis_thumbnail_menu_1') == false))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._tt_rotation_of.ggCurrentLogicStateText != newLogicStateText) {
				me._tt_rotation_of.ggCurrentLogicStateText = newLogicStateText;
				me._tt_rotation_of.style[domTransition]='left 0s, bottom 0s';
				if (me._tt_rotation_of.ggCurrentLogicStateText == 0) {
					me._tt_rotation_of.ggText="\u0644\u063a\u0648 \u0686\u0631\u062e\u0634 ";
					me._tt_rotation_of__text.innerHTML=me._tt_rotation_of.ggText;
					if (me._tt_rotation_of.ggUpdateText) {
					me._tt_rotation_of.ggUpdateText=function() {
						var hs="\u0644\u063a\u0648 \u0686\u0631\u062e\u0634 ";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_rotation_of.ggUpdatePosition) me._tt_rotation_of.ggUpdatePosition();
					}
				}
				else {
					me._tt_rotation_of.ggText="";
					me._tt_rotation_of__text.innerHTML=me._tt_rotation_of.ggText;
					if (me._tt_rotation_of.ggUpdateText) {
					me._tt_rotation_of.ggUpdateText=function() {
						var hs="";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_rotation_of.ggUpdatePosition) me._tt_rotation_of.ggUpdatePosition();
					}
				}
			}
		}
		me._tt_rotation_of.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._stop_rotate_image.appendChild(me._tt_rotation_of);
		me._button_auto_rotate.appendChild(me._stop_rotate_image);
		el=me._start_rotate_image=document.createElement('div');
		els=me._start_rotate_image__img=document.createElement('img');
		els.className='ggskin ggskin_start_rotate_image';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAYAAAA4E5OyAAAOhUlEQVR4nOWcaXhUZZbHf1V1K6mkskKWyh6IMRAkYQsEJdgExEbpITMKthuklW4nwqiP+ii4tUu3OjPqtKOMW2uDKDOIit2OoFETIkuCCCFACFkgS63Zl6pKJVV1q+ZDEQwhS1WoJK3z/3jve84999Q55z3LW1fC+GEqkAmkAylAIhAOhAD+gA0wAe2AEagDKoETwH6gYTyElIwhbymQDawBVkyND47NnKMifXo4KUmhJMYGET7Zj5AgX/z9BGx2ByazjfbOHowmG3WaLirPtnPiTAv7v9fSoDXWAAXALqAQEMdC6LFQSAKQJ5VKHs2+Oo41K5NZsSSR2KiAy2JaU9dBwSENu/63msJiNaLo/FfgDaDeCzJfgDcVMgfIi40KWL8xN53bc6ZdthKGgq'+
			'7RzPZPK/iv90/QoDX+BZdijniDtzcUMgV4ICkh+L5N985j7c3T8ZHLvMB2ZFhtIh/uruSFLUeoru14DXgNqL4cnperkMcClPI/PnX/Ah5YPxu5IL1MdqOD3e7gta1l/P6VEowm65PAH0bLa7Q/ZSrwzKrlUx/dsy2HFUsSkUnHMj4PD6lUwsI5Uay7OZV6bVd2RXXbFEAPaD3lNZq3uMvXR/buS09ksTE3fRTkY49tH1dw7+MFdFvsecCbntB6aiGb46ID//OrD3LIuT7JQ9Lxw6zUcH61bCp7C+tWdhqtdlx5jFvwRCHPTUsKfWbfRzcx/YpJnks5zogM92f1ymTyv2vIbmq1+ODKYUaEuwp5fl5a5OMFO29CFaEcvZTjjKAAH25dlUJhsSZLazApgG9HonFHIY/NnBb2+8KdNzEpRHH5Uo4z/BQCa1Ym80VB3aKm'+
			'lm4bI7jPSEF1fWxUwDvFn90yZknWeEGjN7EwZycavel3wDtDrRtOIbP8FELpgU9XM+eqCO9LOAEoLW/m6pyd9PSKacDJwdYM5zLPbPnDkrkrl04ZG+kmAFERSiaHKviioA7gi8HWDKWQTauWT3303x/PGivZJgwZ6ZGcPNOaUVHTNuh2PJjLJAYo5bXl39xJfEzg2Es4AdAaTKRmb6fLZL2SAbXPYBbyzHMPX73ghuzEcRFuIhAU4IPCV+CronqAvf3vDbSQ9KnxwcfP7Fs7YYXaeMFud5C6dDvVtR3z6dc6GPjWeY/kzf3ZKwNAEKRs3pABkNf/en8LiY9RBdSfO5g7bv2MiYbN7iA5ayv1WuNUoBYutpC8jbnp/2+UASAXpGxYlw79rKTPQgRBkNrUh+9GFe4/IcJNFHSNZuIz30UUnQIgCuevL1myMNZryrD02D'+
			'l5poWz9Z00tVpo0BrR6I2o9SaaWrrpMlmxWh3Y7CI2m+MiWrlciiCT4uMjI1ApRxWhJC4qgITYIBJiAomKUDIlPphpSaH4KYQhJHAf0ZFKll4TR/53DUuB/D6OOZfb37DZHewr1rCvWEPluXYqz7ajbzIjik7sogO73YFddCKKDpzO4fn0obXdglpvovRUE4JwXlFyGTEqJclTQkhJCiVrfgzXZsZclquvvjGZ/O8aVgP5fS5z+nTBndNH0+eo1xrZ+bcq8r+rp7qug84uK5YeO1bbmIxNLsBHLsNPIRAS5ENSQgjXX5vArauuJC7a82RS12gmJuPPOiBGAkRHRyq12iPrPWay64tqPvvqLKcqW2lps3gsiDcRNsmPq1Imk3N9Er/+hyuJDPPM/ZMXb6OmriNZABYtyoj2iLjgkJo3t5+kqERLU2u3R7RjhZY2C/uK'+
			'NZRXtVJyTE/enWksXhDjNn3mHBU1dR2ZApCWNj3MLSKnE/YW1vHUy8UcPdnkkcDBgb6oIvwJDvTFTyHDRy67EBcEweW5NpsD0eGKM71WkZ5ekfbOXgxNZrpMVree09xq4X/+VoVGb2LzhgzcLUHSpoUBpAlASkpSqFtEJcf0PPrCAU5Vtg67TuErQxWuJCLMnxiVkoSYIJISgomPCWRSiIIAfzm+vjIEmRS5XHohM7baXMFXdDjp6bFjtthoaetBrTNytr6Tcw2daA0mmtssGJq6h41TB47oePKlYiLD/Zk7c+R+znkdpAhAYmJskFsKefODk8MqIypCydT4YDLSI5mXFsEViSFMiQ8iYrJ3tnNDczdn6zuoru3gSFkjpeXN1DZ0Ymge3G2PnWripbeO8t+vrxiRd0JMEECCAISHuynw3n11g14PDfZl1oxwVt+YzP'+
			'LFCSQlBA/LRxSdSKUSJB5OhVTh/qjC/blmXjTrbk7lbH0HX+6r59Mvayg91UxHV+8lNF/uc28WHhHmBxAhACEhQT5uETW3XrqThAb7ct9ds7h3bZrblqBvMtPW0UNiXBBBAe49eyAkErgiMYSNuSHclpPCy28f4+0dpy7Z7QZT0mA4L0eQFFAofEef8a1ansTdt8zwyC3Kq1p55PkDvLjlB6w2cdhEzR1MClHw0O/msHxx/Kh5KP3lAEopYLfbHSMsHxpFJRq+PajGEx6BAT60d/by0ltHue+pIgzN5lE/vw+f7Kmh+Kh+1PTnM2SbFDCZum1uEfn7XWpJDTojm144yLoH8ykqcW+2LJVIEGQSbHYH739SwdoH8ik5ZnBf+n44+IOO3zz0NU+9XEyDznjJfYWveym9yWwDMAmA0WiyRrqT2WXNj+lru12AKDppbOnm'+
			'kz01lBwzMOeqCJZlxfGLzFjiYwIHLcD8/QR8zwtq6bFTWKxm/SNmHr5nDrmrU4eVwWoTqanrpKhEQ1GJltLyZtQ6I5Ye+yVrJRJYMFs14nsBGF15jlEAOtwNPP98x0wOlxoGDVS9VpFzDa5c4dBRHe+qyomOdBVh05ImERcdSGiwLxFh/qj1Rnp7f8whRNFJeVUrT71cQtW5Dv7lN+lEDTIytdkdFJVo2fziQXSNZvRNw7tabFQgD98z1613a2m3ALQIQF2dpmvevLTIEYmuy4rnj49czXOvHh5y7wdXnaNrdAnrpxCYHKogNFiB0l8gJMgXc7edmrrOS+jUOiOvbT1OdW0HD/52NgvnRl10XxSdNGiNbmXJibFBPP1gptuBVq0zAagFoLLybLtbREp/OffcPhN/P4G3Pjzplt9beuxo9CY0epNbzzCZbXy8pxpDs5'+
			'n7757FjdlTLnI7H5+RY0LW/Bg25qazZmWyW88EqDrXDlAlACdOVLS4TSiTSchdnUpSQjA7PqukqETLuYZOeq3eLfcPHNGdz0w7uW1VCnHRgUgkQ89efeQykqeEkH1NLLfnTHM7dvShzKWDMgHYv/97nccCZ82PYcFsFd8eULN3Xx0lxwxoDSZa23u8ppyaug52fFbJglmqC30O0fFj0uKnEAgN9iUuOpAFs1TckJ3I8sUJHmfAAIdLDQCHBUCvbzKfPl3dlpqa7FmDyEcuY8WSRFYsSaTsdAslpXqKj+o5dqqZljYLlh47NruDnl47ouhZ9iUXpMxImczGdekXijOnE3zkUqIilIRP9mPBbBVzZ0ZwzbxorkqZ7BH//tAaTNTUdWiBmj7nLCw8pPZYIf2RnhpGemoY99w+kwatke/LDFRUt6M1mDjX0In+fAlvtYpY'+
			'ekRM3dYhleSnEFiUEc2zDy0kc86Ppi+TSUibHsarz1xL1vwYr/WA9xbWwfkJXp9xLVu2KP7rr3f8o1ceMBAOhxNDczdqnZEuk5XDpQY+2H2GgcFcIgG5IGP9rTPYdO+8UbUDR4PrbtvNNwcargO++dFCitXoGs1ER3r/yJRUKiEqQokq3B+nE4IDffj2oPoShURHBvDYxgxuXZVCSJCv1+UYDFqDiYJDajh/Bq1vUCWKovOFbR+fHrMHSyQuxchkLqMcWPvMS4vkvZeu485/mkZosO+oAuNo8OHuShwO578BDrh4cvfG61vLvL59DoaB1W3u6lS2vnId2VfHEjjKdsBoYLWJvL6tDFxn5YGLFaLWNZrfeG9n+ZgLYjRbUeuMKHxlPPvQQp5+MJMZV05GGOch+/ZPzqDWGd/F9d8c4NI8Z2ZibNCJyqK1P/sZr93uYH'+
			'r2dmrqOuYBR/uuD3zrpo6u3lClvzzT09HETw2vvFPKzs+rXgPe6399sNAV7+8n1J8uWEvCz/hI1bQl72My25KAc/3vDea0Dd0W+6YNjxeOj3QTgA1PFGIy255ggDJg6FOIB6trO6KiIpRutQV+StiyrYz/+HPpG8Cmwe4Pt9unK3xlxw98usatQc9PAcdONbFw1UdYbeJVwKDb6XD7XFlPr7g+Z/3nbvcy/p6h0ZtYdffnWG3ibxlCGTDy4f/SLpPV9s0B9dI1K68ctMn8U0Bzq4Xlt++mpq7zceDV4da6k2zsb2rpFgoOaRbffMMVXjm1M55o7+xlxdrPOF7e/Czw3Ejr3c2+CnWNZvnewvrFv1o2laDA8UuvLwe6RjPX37GbYyebngeedIfGk3S0oKml27bri+qlizKiiVH9ff9d5IcTjSy/YzeVZ9ufBJ52l87T'+
			'/Hx/l8lav21XRU6A0ofM2VHjVpV6gte3lvHrDXtp6+i5mxFixkCMpmA57nA4d3xVVC/74URTxqKMaILHqXcxEtQ6I2sfyOdP75a+IYrOXCDfUx6jreDagD3VtR29b+84uUwqlbBgtgqZbGKOhFttIi+/XcotG/Zw8kzrY8BmoHk0vLxh8HHAQ4mxQfc/kjeXu26Zga8bsxNvwGoT2bqrghe3HKFW3fUq8Cf6lfKjgTcjwEwgLzpSmbcxN511N6eOSTsSoLGlm798dJot28rQ6E1v42rwHPcG77EIiXFAnkwm2bxkYRw33XAFv/xFAu4e2xoKFTVtFB7S8Nf8sxQc0mC3O17EpQivfmhlLPcIGbAEuAn4ZXxMYGLmbBXpqeGkTA0lNiqA8Ml+BCjlKP3kAJgtNkxmG82tFjR6E1W17Rwvb2b/9zr0TeYKXB9S+Suuhv'+
			'Cl434vYDw3zXgu/uROLK5P7gQAfb5lxvXZnWZAA1ThcoX9uD5uMOb4PzowkKw3kfnoAAAAAElFTkSuQmCC';
		me._start_rotate_image__img.ggOverSrc=hs;
		el.ggId="start_rotate_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 33px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 33px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._start_rotate_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._start_rotate_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsAutorotating() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._start_rotate_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._start_rotate_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._start_rotate_image.style[domTransition]='';
				if (me._start_rotate_image.ggCurrentLogicStateVisible == 0) {
					me._start_rotate_image.style.visibility="hidden";
					me._start_rotate_image.ggVisible=false;
				}
				else {
					me._start_rotate_image.style.visibility=(Number(me._start_rotate_image.style.opacity)>0||!me._start_rotate_image.style.opacity)?'inherit':'hidden';
					me._start_rotate_image.ggVisible=true;
				}
			}
		}
		me._start_rotate_image.onmouseover=function (e) {
			me._start_rotate_image__img.src=me._start_rotate_image__img.ggOverSrc;
			me.elementMouseOver['start_rotate_image']=true;
			me._tt_rotation_on.logicBlock_visible();
		}
		me._start_rotate_image.onmouseout=function (e) {
			me._start_rotate_image__img.src=me._start_rotate_image__img.ggNormalSrc;
			me.elementMouseOver['start_rotate_image']=false;
			me._tt_rotation_on.logicBlock_visible();
		}
		me._start_rotate_image.ontouchend=function (e) {
			me.elementMouseOver['start_rotate_image']=false;
			me._tt_rotation_on.logicBlock_visible();
		}
		me._start_rotate_image.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_rotation_on=document.createElement('div');
		els=me._tt_rotation_on__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_rotation_on";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='bottom : 38px;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._tt_rotation_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_rotation_on.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_rotation_on.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_rotation_on.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_rotation_on.style[domTransition]='left 0s, bottom 0s';
				if (me._tt_rotation_on.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_rotation_on.style.bottom='-25px';
					me._tt_rotation_on.ggUpdatePosition(true);
				}
				else {
					me._tt_rotation_on.ggDx=0;
					me._tt_rotation_on.style.bottom='38px';
					me._tt_rotation_on.ggUpdatePosition(true);
				}
			}
		}
		me._tt_rotation_on.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['start_rotate_image'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_rotation_on.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_rotation_on.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_rotation_on.style[domTransition]='left 0s, bottom 0s';
				if (me._tt_rotation_on.ggCurrentLogicStateVisible == 0) {
					me._tt_rotation_on.style.visibility=(Number(me._tt_rotation_on.style.opacity)>0||!me._tt_rotation_on.style.opacity)?'inherit':'hidden';
					me._tt_rotation_on.ggVisible=true;
				}
				else {
					me._tt_rotation_on.style.visibility="hidden";
					me._tt_rotation_on.ggVisible=false;
				}
			}
		}
		me._tt_rotation_on.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('vis_thumbnail_menu_1') == false))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._tt_rotation_on.ggCurrentLogicStateText != newLogicStateText) {
				me._tt_rotation_on.ggCurrentLogicStateText = newLogicStateText;
				me._tt_rotation_on.style[domTransition]='left 0s, bottom 0s';
				if (me._tt_rotation_on.ggCurrentLogicStateText == 0) {
					me._tt_rotation_on.ggText="\u0686\u0631\u062e\u0634 \u062e\u0648\u062f\u06a9\u0627\u0631";
					me._tt_rotation_on__text.innerHTML=me._tt_rotation_on.ggText;
					if (me._tt_rotation_on.ggUpdateText) {
					me._tt_rotation_on.ggUpdateText=function() {
						var hs="\u0686\u0631\u062e\u0634 \u062e\u0648\u062f\u06a9\u0627\u0631";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_rotation_on.ggUpdatePosition) me._tt_rotation_on.ggUpdatePosition();
					}
				}
				else {
					me._tt_rotation_on.ggText="";
					me._tt_rotation_on__text.innerHTML=me._tt_rotation_on.ggText;
					if (me._tt_rotation_on.ggUpdateText) {
					me._tt_rotation_on.ggUpdateText=function() {
						var hs="";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_rotation_on.ggUpdatePosition) me._tt_rotation_on.ggUpdatePosition();
					}
				}
			}
		}
		me._tt_rotation_on.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._start_rotate_image.appendChild(me._tt_rotation_on);
		me._button_auto_rotate.appendChild(me._start_rotate_image);
		me._container_3.appendChild(me._button_auto_rotate);
		el=me._button_fullscreen=document.createElement('div');
		el.ggId="button_fullscreen";
		el.ggDx=23;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 33px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 33px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_fullscreen.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._button_fullscreen.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._button_image_normalscreen=document.createElement('div');
		els=me._button_image_normalscreen__img=document.createElement('img');
		els.className='ggskin ggskin_button_image_normalscreen';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		me._button_image_normalscreen__img.ggOverSrc=hs;
		el.ggId="button_image_normalscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 33px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 33px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_image_normalscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_normalscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_image_normalscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_image_normalscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_image_normalscreen.style[domTransition]='';
				if (me._button_image_normalscreen.ggCurrentLogicStateVisible == 0) {
					me._button_image_normalscreen.style.visibility=(Number(me._button_image_normalscreen.style.opacity)>0||!me._button_image_normalscreen.style.opacity)?'inherit':'hidden';
					me._button_image_normalscreen.ggVisible=true;
				}
				else {
					me._button_image_normalscreen.style.visibility="hidden";
					me._button_image_normalscreen.ggVisible=false;
				}
			}
		}
		me._button_image_normalscreen.onmouseover=function (e) {
			me._button_image_normalscreen__img.src=me._button_image_normalscreen__img.ggOverSrc;
			me.elementMouseOver['button_image_normalscreen']=true;
			me._full_off_.logicBlock_visible();
		}
		me._button_image_normalscreen.onmouseout=function (e) {
			me._button_image_normalscreen__img.src=me._button_image_normalscreen__img.ggNormalSrc;
			me.elementMouseOver['button_image_normalscreen']=false;
			me._full_off_.logicBlock_visible();
		}
		me._button_image_normalscreen.ontouchend=function (e) {
			me.elementMouseOver['button_image_normalscreen']=false;
			me._full_off_.logicBlock_visible();
		}
		me._button_image_normalscreen.ggUpdatePosition=function (useTransition) {
		}
		el=me._full_off_=document.createElement('div');
		els=me._full_off___text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="FULL_off ";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='bottom : 38px;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._full_off_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._full_off_.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._full_off_.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._full_off_.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._full_off_.style[domTransition]='left 0s, bottom 0s';
				if (me._full_off_.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._full_off_.style.bottom='-25px';
					me._full_off_.ggUpdatePosition(true);
				}
				else {
					me._full_off_.ggDx=0;
					me._full_off_.style.bottom='38px';
					me._full_off_.ggUpdatePosition(true);
				}
			}
		}
		me._full_off_.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['button_image_normalscreen'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._full_off_.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._full_off_.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._full_off_.style[domTransition]='left 0s, bottom 0s';
				if (me._full_off_.ggCurrentLogicStateVisible == 0) {
					me._full_off_.style.visibility=(Number(me._full_off_.style.opacity)>0||!me._full_off_.style.opacity)?'inherit':'hidden';
					me._full_off_.ggVisible=true;
				}
				else {
					me._full_off_.style.visibility="hidden";
					me._full_off_.ggVisible=false;
				}
			}
		}
		me._full_off_.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('vis_thumbnail_menu_1') == false))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._full_off_.ggCurrentLogicStateText != newLogicStateText) {
				me._full_off_.ggCurrentLogicStateText = newLogicStateText;
				me._full_off_.style[domTransition]='left 0s, bottom 0s';
				if (me._full_off_.ggCurrentLogicStateText == 0) {
					me._full_off_.ggText="\u0645\u0639\u0645\u0648\u0644\u06cc ";
					me._full_off___text.innerHTML=me._full_off_.ggText;
					if (me._full_off_.ggUpdateText) {
					me._full_off_.ggUpdateText=function() {
						var hs="\u0645\u0639\u0645\u0648\u0644\u06cc ";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._full_off_.ggUpdatePosition) me._full_off_.ggUpdatePosition();
					}
				}
				else {
					me._full_off_.ggText="";
					me._full_off___text.innerHTML=me._full_off_.ggText;
					if (me._full_off_.ggUpdateText) {
					me._full_off_.ggUpdateText=function() {
						var hs="";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._full_off_.ggUpdatePosition) me._full_off_.ggUpdatePosition();
					}
				}
			}
		}
		me._full_off_.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._button_image_normalscreen.appendChild(me._full_off_);
		me._button_fullscreen.appendChild(me._button_image_normalscreen);
		el=me._button_image_fullscreen=document.createElement('div');
		els=me._button_image_fullscreen__img=document.createElement('img');
		els.className='ggskin ggskin_button_image_fullscreen';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		me._button_image_fullscreen__img.ggOverSrc=hs;
		el.ggId="button_image_fullscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 33px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 33px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_image_fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_fullscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_image_fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_image_fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_image_fullscreen.style[domTransition]='';
				if (me._button_image_fullscreen.ggCurrentLogicStateVisible == 0) {
					me._button_image_fullscreen.style.visibility="hidden";
					me._button_image_fullscreen.ggVisible=false;
				}
				else {
					me._button_image_fullscreen.style.visibility=(Number(me._button_image_fullscreen.style.opacity)>0||!me._button_image_fullscreen.style.opacity)?'inherit':'hidden';
					me._button_image_fullscreen.ggVisible=true;
				}
			}
		}
		me._button_image_fullscreen.onmouseover=function (e) {
			me._button_image_fullscreen__img.src=me._button_image_fullscreen__img.ggOverSrc;
			me.elementMouseOver['button_image_fullscreen']=true;
			me._ful_on.logicBlock_visible();
		}
		me._button_image_fullscreen.onmouseout=function (e) {
			me._button_image_fullscreen__img.src=me._button_image_fullscreen__img.ggNormalSrc;
			me.elementMouseOver['button_image_fullscreen']=false;
			me._ful_on.logicBlock_visible();
		}
		me._button_image_fullscreen.ontouchend=function (e) {
			me.elementMouseOver['button_image_fullscreen']=false;
			me._ful_on.logicBlock_visible();
		}
		me._button_image_fullscreen.ggUpdatePosition=function (useTransition) {
		}
		el=me._ful_on=document.createElement('div');
		els=me._ful_on__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="FUL_on";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='bottom : 38px;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._ful_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ful_on.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._ful_on.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._ful_on.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._ful_on.style[domTransition]='left 0s, bottom 0s';
				if (me._ful_on.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._ful_on.style.bottom='-25px';
					me._ful_on.ggUpdatePosition(true);
				}
				else {
					me._ful_on.ggDx=0;
					me._ful_on.style.bottom='38px';
					me._ful_on.ggUpdatePosition(true);
				}
			}
		}
		me._ful_on.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['button_image_fullscreen'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ful_on.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ful_on.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ful_on.style[domTransition]='left 0s, bottom 0s';
				if (me._ful_on.ggCurrentLogicStateVisible == 0) {
					me._ful_on.style.visibility=(Number(me._ful_on.style.opacity)>0||!me._ful_on.style.opacity)?'inherit':'hidden';
					me._ful_on.ggVisible=true;
				}
				else {
					me._ful_on.style.visibility="hidden";
					me._ful_on.ggVisible=false;
				}
			}
		}
		me._ful_on.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('vis_thumbnail_menu_1') == false))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._ful_on.ggCurrentLogicStateText != newLogicStateText) {
				me._ful_on.ggCurrentLogicStateText = newLogicStateText;
				me._ful_on.style[domTransition]='left 0s, bottom 0s';
				if (me._ful_on.ggCurrentLogicStateText == 0) {
					me._ful_on.ggText="\u062a\u0645\u0627\u0645 \u0635\u0641\u062d\u0647";
					me._ful_on__text.innerHTML=me._ful_on.ggText;
					if (me._ful_on.ggUpdateText) {
					me._ful_on.ggUpdateText=function() {
						var hs="\u062a\u0645\u0627\u0645 \u0635\u0641\u062d\u0647";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._ful_on.ggUpdatePosition) me._ful_on.ggUpdatePosition();
					}
				}
				else {
					me._ful_on.ggText="";
					me._ful_on__text.innerHTML=me._ful_on.ggText;
					if (me._ful_on.ggUpdateText) {
					me._ful_on.ggUpdateText=function() {
						var hs="";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._ful_on.ggUpdatePosition) me._ful_on.ggUpdatePosition();
					}
				}
			}
		}
		me._ful_on.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._button_image_fullscreen.appendChild(me._ful_on);
		me._button_fullscreen.appendChild(me._button_image_fullscreen);
		me._container_3.appendChild(me._button_fullscreen);
		el=me._more_not=document.createElement('div');
		els=me._more_not__img=document.createElement('img');
		els.className='ggskin ggskin_more_not';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="MORE_NOT";
		el.ggDx=142;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 33px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 33px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._more_not.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._more_not.onmouseover=function (e) {
			me.elementMouseOver['more_not']=true;
			me._tt_more_not_open.logicBlock_visible();
		}
		me._more_not.onmouseout=function (e) {
			me.elementMouseDown['more_not']=false;
			me.elementMouseOver['more_not']=false;
			me._tt_more_not_open.logicBlock_visible();
		}
		me._more_not.onmousedown=function (e) {
			me.elementMouseDown['more_not']=true;
		}
		me._more_not.onmouseup=function (e) {
			me.elementMouseDown['more_not']=false;
		}
		me._more_not.ontouchend=function (e) {
			me.elementMouseDown['more_not']=false;
			me.elementMouseOver['more_not']=false;
			me._tt_more_not_open.logicBlock_visible();
		}
		me._more_not.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._tt_more_not_open=document.createElement('div');
		els=me._tt_more_not_open__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_more_not_open";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='bottom : 38px;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._tt_more_not_open.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_more_not_open.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_more_not_open.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_more_not_open.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_more_not_open.style[domTransition]='left 0s, bottom 0s';
				if (me._tt_more_not_open.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_more_not_open.style.bottom='-25px';
					me._tt_more_not_open.ggUpdatePosition(true);
				}
				else {
					me._tt_more_not_open.ggDx=0;
					me._tt_more_not_open.style.bottom='38px';
					me._tt_more_not_open.ggUpdatePosition(true);
				}
			}
		}
		me._tt_more_not_open.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['more_not'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_more_not_open.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_more_not_open.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_more_not_open.style[domTransition]='left 0s, bottom 0s';
				if (me._tt_more_not_open.ggCurrentLogicStateVisible == 0) {
					me._tt_more_not_open.style.visibility=(Number(me._tt_more_not_open.style.opacity)>0||!me._tt_more_not_open.style.opacity)?'inherit':'hidden';
					me._tt_more_not_open.ggVisible=true;
				}
				else {
					me._tt_more_not_open.style.visibility="hidden";
					me._tt_more_not_open.ggVisible=false;
				}
			}
		}
		me._tt_more_not_open.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('vis_thumbnail_menu_1') == false))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._tt_more_not_open.ggCurrentLogicStateText != newLogicStateText) {
				me._tt_more_not_open.ggCurrentLogicStateText = newLogicStateText;
				me._tt_more_not_open.style[domTransition]='left 0s, bottom 0s';
				if (me._tt_more_not_open.ggCurrentLogicStateText == 0) {
					me._tt_more_not_open.ggText="\u0627\u0628\u0632\u0627\u0631 \u0628\u06cc\u0634\u062a\u0631";
					me._tt_more_not_open__text.innerHTML=me._tt_more_not_open.ggText;
					if (me._tt_more_not_open.ggUpdateText) {
					me._tt_more_not_open.ggUpdateText=function() {
						var hs="\u0627\u0628\u0632\u0627\u0631 \u0628\u06cc\u0634\u062a\u0631";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_more_not_open.ggUpdatePosition) me._tt_more_not_open.ggUpdatePosition();
					}
				}
				else {
					me._tt_more_not_open.ggText="";
					me._tt_more_not_open__text.innerHTML=me._tt_more_not_open.ggText;
					if (me._tt_more_not_open.ggUpdateText) {
					me._tt_more_not_open.ggUpdateText=function() {
						var hs="";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_more_not_open.ggUpdatePosition) me._tt_more_not_open.ggUpdatePosition();
					}
				}
			}
		}
		me._tt_more_not_open.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._more_not.appendChild(me._tt_more_not_open);
		me._container_3.appendChild(me._more_not);
		el=me._zoomout=document.createElement('div');
		els=me._zoomout__img=document.createElement('img');
		els.className='ggskin ggskin_zoomout';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		me._zoomout__img.ggOverSrc=hs;
		el.ggId="zoomout";
		el.ggDx=103;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 33px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 33px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._zoomout.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zoomout.onmouseover=function (e) {
			me._zoomout__img.src=me._zoomout__img.ggOverSrc;
			me.elementMouseOver['zoomout']=true;
			me._tt_zoomout_open.logicBlock_visible();
		}
		me._zoomout.onmouseout=function (e) {
			me._zoomout__img.src=me._zoomout__img.ggNormalSrc;
			me.elementMouseDown['zoomout']=false;
			me.elementMouseOver['zoomout']=false;
			me._tt_zoomout_open.logicBlock_visible();
		}
		me._zoomout.onmousedown=function (e) {
			me.elementMouseDown['zoomout']=true;
		}
		me._zoomout.onmouseup=function (e) {
			me.elementMouseDown['zoomout']=false;
		}
		me._zoomout.ontouchend=function (e) {
			me.elementMouseDown['zoomout']=false;
			me.elementMouseOver['zoomout']=false;
			me._tt_zoomout_open.logicBlock_visible();
		}
		me._zoomout.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._tt_zoomout_open=document.createElement('div');
		els=me._tt_zoomout_open__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ZOOMOUT_open";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='bottom : 38px;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._tt_zoomout_open.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_zoomout_open.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_zoomout_open.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_zoomout_open.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_zoomout_open.style[domTransition]='left 0s, bottom 0s';
				if (me._tt_zoomout_open.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_zoomout_open.style.bottom='-25px';
					me._tt_zoomout_open.ggUpdatePosition(true);
				}
				else {
					me._tt_zoomout_open.ggDx=0;
					me._tt_zoomout_open.style.bottom='38px';
					me._tt_zoomout_open.ggUpdatePosition(true);
				}
			}
		}
		me._tt_zoomout_open.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['zoomout'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_zoomout_open.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_zoomout_open.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_zoomout_open.style[domTransition]='left 0s, bottom 0s';
				if (me._tt_zoomout_open.ggCurrentLogicStateVisible == 0) {
					me._tt_zoomout_open.style.visibility=(Number(me._tt_zoomout_open.style.opacity)>0||!me._tt_zoomout_open.style.opacity)?'inherit':'hidden';
					me._tt_zoomout_open.ggVisible=true;
				}
				else {
					me._tt_zoomout_open.style.visibility="hidden";
					me._tt_zoomout_open.ggVisible=false;
				}
			}
		}
		me._tt_zoomout_open.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('vis_thumbnail_menu_1') == false))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._tt_zoomout_open.ggCurrentLogicStateText != newLogicStateText) {
				me._tt_zoomout_open.ggCurrentLogicStateText = newLogicStateText;
				me._tt_zoomout_open.style[domTransition]='left 0s, bottom 0s';
				if (me._tt_zoomout_open.ggCurrentLogicStateText == 0) {
					me._tt_zoomout_open.ggText="\u062f\u0648\u0631 \u0646\u0645\u0627\u06cc\u06cc";
					me._tt_zoomout_open__text.innerHTML=me._tt_zoomout_open.ggText;
					if (me._tt_zoomout_open.ggUpdateText) {
					me._tt_zoomout_open.ggUpdateText=function() {
						var hs="\u062f\u0648\u0631 \u0646\u0645\u0627\u06cc\u06cc";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_zoomout_open.ggUpdatePosition) me._tt_zoomout_open.ggUpdatePosition();
					}
				}
				else {
					me._tt_zoomout_open.ggText="";
					me._tt_zoomout_open__text.innerHTML=me._tt_zoomout_open.ggText;
					if (me._tt_zoomout_open.ggUpdateText) {
					me._tt_zoomout_open.ggUpdateText=function() {
						var hs="";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_zoomout_open.ggUpdatePosition) me._tt_zoomout_open.ggUpdatePosition();
					}
				}
			}
		}
		me._tt_zoomout_open.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._zoomout.appendChild(me._tt_zoomout_open);
		me._container_3.appendChild(me._zoomout);
		el=me._zoomin=document.createElement('div');
		els=me._zoomin__img=document.createElement('img');
		els.className='ggskin ggskin_zoomin';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		me._zoomin__img.ggOverSrc=hs;
		el.ggId="zoomin";
		el.ggDx=63;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 1px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._zoomin.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zoomin.onmouseover=function (e) {
			me._zoomin__img.src=me._zoomin__img.ggOverSrc;
			me.elementMouseOver['zoomin']=true;
			me._tt_zoomin_open.logicBlock_visible();
		}
		me._zoomin.onmouseout=function (e) {
			me._zoomin__img.src=me._zoomin__img.ggNormalSrc;
			me.elementMouseDown['zoomin']=false;
			me.elementMouseOver['zoomin']=false;
			me._tt_zoomin_open.logicBlock_visible();
		}
		me._zoomin.onmousedown=function (e) {
			me.elementMouseDown['zoomin']=true;
		}
		me._zoomin.onmouseup=function (e) {
			me.elementMouseDown['zoomin']=false;
		}
		me._zoomin.ontouchend=function (e) {
			me.elementMouseDown['zoomin']=false;
			me.elementMouseOver['zoomin']=false;
			me._tt_zoomin_open.logicBlock_visible();
		}
		me._zoomin.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._tt_zoomin_open=document.createElement('div');
		els=me._tt_zoomin_open__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ZOOMIN_open";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='bottom : 38px;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._tt_zoomin_open.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_zoomin_open.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_zoomin_open.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_zoomin_open.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_zoomin_open.style[domTransition]='left 0s, bottom 0s';
				if (me._tt_zoomin_open.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_zoomin_open.style.bottom='-25px';
					me._tt_zoomin_open.ggUpdatePosition(true);
				}
				else {
					me._tt_zoomin_open.ggDx=0;
					me._tt_zoomin_open.style.bottom='38px';
					me._tt_zoomin_open.ggUpdatePosition(true);
				}
			}
		}
		me._tt_zoomin_open.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['zoomin'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_zoomin_open.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_zoomin_open.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_zoomin_open.style[domTransition]='left 0s, bottom 0s';
				if (me._tt_zoomin_open.ggCurrentLogicStateVisible == 0) {
					me._tt_zoomin_open.style.visibility=(Number(me._tt_zoomin_open.style.opacity)>0||!me._tt_zoomin_open.style.opacity)?'inherit':'hidden';
					me._tt_zoomin_open.ggVisible=true;
				}
				else {
					me._tt_zoomin_open.style.visibility="hidden";
					me._tt_zoomin_open.ggVisible=false;
				}
			}
		}
		me._tt_zoomin_open.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('vis_thumbnail_menu_1') == false))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._tt_zoomin_open.ggCurrentLogicStateText != newLogicStateText) {
				me._tt_zoomin_open.ggCurrentLogicStateText = newLogicStateText;
				me._tt_zoomin_open.style[domTransition]='left 0s, bottom 0s';
				if (me._tt_zoomin_open.ggCurrentLogicStateText == 0) {
					me._tt_zoomin_open.ggText="\u0628\u0632\u0631\u06af \u0646\u0645\u0627\u06cc\u06cc";
					me._tt_zoomin_open__text.innerHTML=me._tt_zoomin_open.ggText;
					if (me._tt_zoomin_open.ggUpdateText) {
					me._tt_zoomin_open.ggUpdateText=function() {
						var hs="\u0628\u0632\u0631\u06af \u0646\u0645\u0627\u06cc\u06cc";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_zoomin_open.ggUpdatePosition) me._tt_zoomin_open.ggUpdatePosition();
					}
				}
				else {
					me._tt_zoomin_open.ggText="";
					me._tt_zoomin_open__text.innerHTML=me._tt_zoomin_open.ggText;
					if (me._tt_zoomin_open.ggUpdateText) {
					me._tt_zoomin_open.ggUpdateText=function() {
						var hs="";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_zoomin_open.ggUpdatePosition) me._tt_zoomin_open.ggUpdatePosition();
					}
				}
			}
		}
		me._tt_zoomin_open.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._zoomin.appendChild(me._tt_zoomin_open);
		me._container_3.appendChild(me._zoomin);
		el=me._thumbnail=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="thumbnail";
		el.ggDx=-137;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 33px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 33px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail.onclick=function (e) {
			player.setVariableValue('vis_thumbnail_menu', !player.getVariableValue('vis_thumbnail_menu'));
		}
		me._thumbnail.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._thumbnail_hide_button=document.createElement('div');
		els=me._thumbnail_hide_button__img=document.createElement('img');
		els.className='ggskin ggskin_thumbnail_hide_button';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_hide_button";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 33px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 33px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_hide_button.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_hide_button.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_thumbnail_menu') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_hide_button.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_hide_button.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_hide_button.style[domTransition]='opacity 0s';
				if (me._thumbnail_hide_button.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_hide_button.style.visibility="hidden";
					me._thumbnail_hide_button.style.opacity=0;
				}
				else {
					me._thumbnail_hide_button.style.visibility=me._thumbnail_hide_button.ggVisible?'inherit':'hidden';
					me._thumbnail_hide_button.style.opacity=1;
				}
			}
		}
		me._thumbnail_hide_button.onmouseover=function (e) {
			me.elementMouseOver['thumbnail_hide_button']=true;
			me._tt_thumbnail_close.logicBlock_visible();
		}
		me._thumbnail_hide_button.onmouseout=function (e) {
			me.elementMouseOver['thumbnail_hide_button']=false;
			me._tt_thumbnail_close.logicBlock_visible();
		}
		me._thumbnail_hide_button.ontouchend=function (e) {
			me.elementMouseOver['thumbnail_hide_button']=false;
			me._tt_thumbnail_close.logicBlock_visible();
		}
		me._thumbnail_hide_button.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_thumbnail_close=document.createElement('div');
		els=me._tt_thumbnail_close__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_thumbnail_close";
		el.ggDx=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='bottom : 37px;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._tt_thumbnail_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_thumbnail_close.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_thumbnail_close.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_thumbnail_close.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_thumbnail_close.style[domTransition]='left 0s, bottom 0s';
				if (me._tt_thumbnail_close.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_thumbnail_close.style.bottom='-25px';
					me._tt_thumbnail_close.ggUpdatePosition(true);
				}
				else {
					me._tt_thumbnail_close.ggDx=1;
					me._tt_thumbnail_close.style.bottom='37px';
					me._tt_thumbnail_close.ggUpdatePosition(true);
				}
			}
		}
		me._tt_thumbnail_close.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['thumbnail_hide_button'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_thumbnail_close.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_thumbnail_close.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_thumbnail_close.style[domTransition]='left 0s, bottom 0s';
				if (me._tt_thumbnail_close.ggCurrentLogicStateVisible == 0) {
					me._tt_thumbnail_close.style.visibility=(Number(me._tt_thumbnail_close.style.opacity)>0||!me._tt_thumbnail_close.style.opacity)?'inherit':'hidden';
					me._tt_thumbnail_close.ggVisible=true;
				}
				else {
					me._tt_thumbnail_close.style.visibility="hidden";
					me._tt_thumbnail_close.ggVisible=false;
				}
			}
		}
		me._tt_thumbnail_close.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('vis_thumbnail_menu_1') == false))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('vis_thumbnail_menu_1') == true))
			)
			{
				newLogicStateText = 1;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._tt_thumbnail_close.ggCurrentLogicStateText != newLogicStateText) {
				me._tt_thumbnail_close.ggCurrentLogicStateText = newLogicStateText;
				me._tt_thumbnail_close.style[domTransition]='left 0s, bottom 0s';
				if (me._tt_thumbnail_close.ggCurrentLogicStateText == 0) {
					me._tt_thumbnail_close.ggText=" \u0628\u0633\u062a\u0646 \u06af\u0627\u0644\u0631\u06cc";
					me._tt_thumbnail_close__text.innerHTML=me._tt_thumbnail_close.ggText;
					if (me._tt_thumbnail_close.ggUpdateText) {
					me._tt_thumbnail_close.ggUpdateText=function() {
						var hs=" \u0628\u0633\u062a\u0646 \u06af\u0627\u0644\u0631\u06cc";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_thumbnail_close.ggUpdatePosition) me._tt_thumbnail_close.ggUpdatePosition();
					}
				}
				else if (me._tt_thumbnail_close.ggCurrentLogicStateText == 1) {
					me._tt_thumbnail_close.ggText="\u0628\u0633\u062a\u0646 \u06af\u0627\u0644\u0631\u06cc ";
					me._tt_thumbnail_close__text.innerHTML=me._tt_thumbnail_close.ggText;
					if (me._tt_thumbnail_close.ggUpdateText) {
					me._tt_thumbnail_close.ggUpdateText=function() {
						var hs="\u0628\u0633\u062a\u0646 \u06af\u0627\u0644\u0631\u06cc ";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_thumbnail_close.ggUpdatePosition) me._tt_thumbnail_close.ggUpdatePosition();
					}
				}
				else {
					me._tt_thumbnail_close.ggText="";
					me._tt_thumbnail_close__text.innerHTML=me._tt_thumbnail_close.ggText;
					if (me._tt_thumbnail_close.ggUpdateText) {
					me._tt_thumbnail_close.ggUpdateText=function() {
						var hs="";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_thumbnail_close.ggUpdatePosition) me._tt_thumbnail_close.ggUpdatePosition();
					}
				}
			}
		}
		me._tt_thumbnail_close.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._thumbnail_hide_button.appendChild(me._tt_thumbnail_close);
		me._thumbnail.appendChild(me._thumbnail_hide_button);
		el=me._thumbnail_show_button=document.createElement('div');
		els=me._thumbnail_show_button__img=document.createElement('img');
		els.className='ggskin ggskin_thumbnail_show_button';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_show_button";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 33px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 33px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_show_button.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_show_button.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_thumbnail_menu') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_show_button.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_show_button.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_show_button.style[domTransition]='opacity 0s';
				if (me._thumbnail_show_button.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_show_button.style.visibility=me._thumbnail_show_button.ggVisible?'inherit':'hidden';
					me._thumbnail_show_button.style.opacity=1;
				}
				else {
					me._thumbnail_show_button.style.visibility="hidden";
					me._thumbnail_show_button.style.opacity=0;
				}
			}
		}
		me._thumbnail_show_button.onmouseover=function (e) {
			me.elementMouseOver['thumbnail_show_button']=true;
			me._tt_thumbnail_open.logicBlock_visible();
		}
		me._thumbnail_show_button.onmouseout=function (e) {
			me.elementMouseOver['thumbnail_show_button']=false;
			me._tt_thumbnail_open.logicBlock_visible();
		}
		me._thumbnail_show_button.ontouchend=function (e) {
			me.elementMouseOver['thumbnail_show_button']=false;
			me._tt_thumbnail_open.logicBlock_visible();
		}
		me._thumbnail_show_button.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_thumbnail_open=document.createElement('div');
		els=me._tt_thumbnail_open__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_thumbnail_open";
		el.ggDx=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='bottom : 38px;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._tt_thumbnail_open.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_thumbnail_open.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_thumbnail_open.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_thumbnail_open.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_thumbnail_open.style[domTransition]='left 0s, bottom 0s';
				if (me._tt_thumbnail_open.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_thumbnail_open.style.bottom='-25px';
					me._tt_thumbnail_open.ggUpdatePosition(true);
				}
				else {
					me._tt_thumbnail_open.ggDx=1;
					me._tt_thumbnail_open.style.bottom='38px';
					me._tt_thumbnail_open.ggUpdatePosition(true);
				}
			}
		}
		me._tt_thumbnail_open.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['thumbnail_show_button'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_thumbnail_open.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_thumbnail_open.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_thumbnail_open.style[domTransition]='left 0s, bottom 0s';
				if (me._tt_thumbnail_open.ggCurrentLogicStateVisible == 0) {
					me._tt_thumbnail_open.style.visibility=(Number(me._tt_thumbnail_open.style.opacity)>0||!me._tt_thumbnail_open.style.opacity)?'inherit':'hidden';
					me._tt_thumbnail_open.ggVisible=true;
				}
				else {
					me._tt_thumbnail_open.style.visibility="hidden";
					me._tt_thumbnail_open.ggVisible=false;
				}
			}
		}
		me._tt_thumbnail_open.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('vis_thumbnail_menu_1') == false))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('vis_thumbnail_menu_1') == true))
			)
			{
				newLogicStateText = 1;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._tt_thumbnail_open.ggCurrentLogicStateText != newLogicStateText) {
				me._tt_thumbnail_open.ggCurrentLogicStateText = newLogicStateText;
				me._tt_thumbnail_open.style[domTransition]='left 0s, bottom 0s';
				if (me._tt_thumbnail_open.ggCurrentLogicStateText == 0) {
					me._tt_thumbnail_open.ggText=" \u06af\u0627\u0644\u0631\u06cc ";
					me._tt_thumbnail_open__text.innerHTML=me._tt_thumbnail_open.ggText;
					if (me._tt_thumbnail_open.ggUpdateText) {
					me._tt_thumbnail_open.ggUpdateText=function() {
						var hs=" \u06af\u0627\u0644\u0631\u06cc ";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_thumbnail_open.ggUpdatePosition) me._tt_thumbnail_open.ggUpdatePosition();
					}
				}
				else if (me._tt_thumbnail_open.ggCurrentLogicStateText == 1) {
					me._tt_thumbnail_open.ggText=" \u06af\u0627\u0644\u0631\u06cc ";
					me._tt_thumbnail_open__text.innerHTML=me._tt_thumbnail_open.ggText;
					if (me._tt_thumbnail_open.ggUpdateText) {
					me._tt_thumbnail_open.ggUpdateText=function() {
						var hs=" \u06af\u0627\u0644\u0631\u06cc ";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_thumbnail_open.ggUpdatePosition) me._tt_thumbnail_open.ggUpdatePosition();
					}
				}
				else {
					me._tt_thumbnail_open.ggText="";
					me._tt_thumbnail_open__text.innerHTML=me._tt_thumbnail_open.ggText;
					if (me._tt_thumbnail_open.ggUpdateText) {
					me._tt_thumbnail_open.ggUpdateText=function() {
						var hs="";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_thumbnail_open.ggUpdatePosition) me._tt_thumbnail_open.ggUpdatePosition();
					}
				}
			}
		}
		me._tt_thumbnail_open.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._thumbnail_show_button.appendChild(me._tt_thumbnail_open);
		me._thumbnail.appendChild(me._thumbnail_show_button);
		me._container_3.appendChild(me._thumbnail);
		me.divSkin.appendChild(me._container_3);
		el=me._container_2=document.createElement('div');
		el.ggId="Container 2";
		el.ggDx=-4;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 46px;';
		hs+='height : 34px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 316px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._container_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._link_to_paresh=document.createElement('div');
		els=me._link_to_paresh__img=document.createElement('img');
		els.className='ggskin ggskin_link_to_paresh';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="link to paresh";
		el.ggDx=-137;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 33px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 33px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._link_to_paresh.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._link_to_paresh.onclick=function (e) {
			player.openUrl("https:\/\/moon-co.ir\/","");
		}
		me._link_to_paresh.onmouseover=function (e) {
			me.elementMouseOver['link_to_paresh']=true;
			me._tt_moon_open.logicBlock_visible();
		}
		me._link_to_paresh.onmouseout=function (e) {
			me.elementMouseOver['link_to_paresh']=false;
			me._tt_moon_open.logicBlock_visible();
		}
		me._link_to_paresh.ontouchend=function (e) {
			me.elementMouseOver['link_to_paresh']=false;
			me._tt_moon_open.logicBlock_visible();
		}
		me._link_to_paresh.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._tt_moon_open=document.createElement('div');
		els=me._tt_moon_open__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_moon_open";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='bottom : 38px;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._tt_moon_open.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_moon_open.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_moon_open.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_moon_open.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_moon_open.style[domTransition]='left 0s, bottom 0s';
				if (me._tt_moon_open.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_moon_open.style.bottom='-25px';
					me._tt_moon_open.ggUpdatePosition(true);
				}
				else {
					me._tt_moon_open.ggDx=0;
					me._tt_moon_open.style.bottom='38px';
					me._tt_moon_open.ggUpdatePosition(true);
				}
			}
		}
		me._tt_moon_open.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['link_to_paresh'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_moon_open.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_moon_open.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_moon_open.style[domTransition]='left 0s, bottom 0s';
				if (me._tt_moon_open.ggCurrentLogicStateVisible == 0) {
					me._tt_moon_open.style.visibility=(Number(me._tt_moon_open.style.opacity)>0||!me._tt_moon_open.style.opacity)?'inherit':'hidden';
					me._tt_moon_open.ggVisible=true;
				}
				else {
					me._tt_moon_open.style.visibility="hidden";
					me._tt_moon_open.ggVisible=false;
				}
			}
		}
		me._tt_moon_open.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('vis_thumbnail_menu_1') == false))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._tt_moon_open.ggCurrentLogicStateText != newLogicStateText) {
				me._tt_moon_open.ggCurrentLogicStateText = newLogicStateText;
				me._tt_moon_open.style[domTransition]='left 0s, bottom 0s';
				if (me._tt_moon_open.ggCurrentLogicStateText == 0) {
					me._tt_moon_open.ggText="\u0648\u0628\u0633\u0627\u06cc\u062a \u067e\u0631\u0634";
					me._tt_moon_open__text.innerHTML=me._tt_moon_open.ggText;
					if (me._tt_moon_open.ggUpdateText) {
					me._tt_moon_open.ggUpdateText=function() {
						var hs="\u0648\u0628\u0633\u0627\u06cc\u062a \u067e\u0631\u0634";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_moon_open.ggUpdatePosition) me._tt_moon_open.ggUpdatePosition();
					}
				}
				else {
					me._tt_moon_open.ggText="";
					me._tt_moon_open__text.innerHTML=me._tt_moon_open.ggText;
					if (me._tt_moon_open.ggUpdateText) {
					me._tt_moon_open.ggUpdateText=function() {
						var hs="";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_moon_open.ggUpdatePosition) me._tt_moon_open.ggUpdatePosition();
					}
				}
			}
		}
		me._tt_moon_open.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._link_to_paresh.appendChild(me._tt_moon_open);
		me._container_2.appendChild(me._link_to_paresh);
		el=me._link_to_fa_tour_active=document.createElement('div');
		els=me._link_to_fa_tour_active__img=document.createElement('img');
		els.className='ggskin ggskin_link_to_fa_tour_active';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAKSElEQVRYhb2YW4yd11WAv7Uv/38uc+aMZ8Yzji8xbrFjXJK0wWqdpIESU6QCCQ+tUIUQiBeQkHgACZU+REjkhQcKolVUQanoA1CoogiXUNUBRVClyG2aNnc3jVs7juykGdtzP+e/7bV4OGdi59Z4xhbrfzhb/9577W+vs9dae/0y87e3ACAIMbRYqldorKHtWgQXKLUa9YlHRBDkPW1p3RpcuLOmuVVgt8Pd4MT1PQ5BMAxFUdMSWADOOfEvisk3a5pveXgBGIAgItSaaLmMqdgjd5FKG1bqNZqUEBEAAlchiqFmB1ou+1gg/LKIfMCJu6FNCzDAsPHYjZbH48TlwG5gt8GHEs3HBTkJfEMtHfMunBCkuBqGdwVVs5lc4j1tn/9G27XuCuInFBsD2T'+
			'vOszf1CRDEt0FuM+w2zH7FzL6SSP8iwnPXCnqw41t/2HPte6PLdoOhVwC8GebdRZDxb3DhQGPpU6r8Ao7POuRBN+69alADMbgjk+xPur71a16cV9vA2izcW3RfXlxCdM7uqqz6qYGVsx1rf6kleQHNW+b5zj3zwGiv3gUKLQGOToaJ+3qh8zGPdyq2Beu9uwiCE8Eh/ZLmjlLruuNb3/PimmEqUbPXnelNoJFCq9v7ceK+ydD9JYeQ0OsOeKUY4MUTxbeHWhwearXW8tnjydSSpitBd4x35lHRn84k/tlMNvWrDhnvaBRyZBxK3vDIFe+upv12ejZAxBFdbBda3jZMxfkg4Rk1JdnIdYNaDcBKtTjjQ/v3Z+PMPUVTXrakCU5GjnPlXzHyY0NMMDHMbOQqo9c4BERIpoDhRMaHZ8Ohxs441mkYXgLB/NxaGn66pDkz'+
			'E/vf7GRtkiphtVrBiXNVqj46Hac/AcRhKkFGizWaAMO7MFrADBgBNJrw4shcQIFkikMwM5SEE4fDYWJjD3U0JFJqCD4QXMBMMRsBlzZKLg7el6h/1zn3TBC/sp4GhA/feAcr1dp718riE/PZ7N5WzGm0QdUQJ5RaUjU1vdghukip1chizlFpTdJEx7fx3lNrjTOPoazWawjCttYUmFGkGu8cZsqwLhDxTGQdDCWlBu8Ctdas1UNyH8hCdm83dB6dzqb++fD2mwk7e7vyXcZRr+4X16uBZD6S+ww1I5mS+4iZUTTF6Bi40Zltx4x2aLNSrbFcrtKObdohJ2kiqeJFqK0mqRFlZHHDmMw6BBe5WCxTNAWdmJO5iBOP4ChTRZ1Kakvb85B9cls2+V8/v/ODr4Uj22+98blLp47O5dumX11fwDCm8z61JoqmpN+aJIrnlf'+
			'UFBJjMejTW4JzQzydphRxTpZt3mWr1WSvXUIxtWZ9BM2RheJF+1iPzkfWmYDLr0ssmEIGlUpjOp2iFnCJVRBdp+4xLxRJrdUH0/vad3bm7J7LOv4bfPvDxQ6dXz34g9xl1GjlW5iOqRmMJ7wJehKKpcCJkPpI0oabjM2ZUWhN9IMScWivUIDdPYw1lqshdjnNCnRqcOIJ4Gm1Ilog+w4lQpxoRR5RApRXJDBFmt8X+0V2d+f8M/Xzig+/PD9143YPjO2fDzcrNGLcE4CAQr1WbnnuF6oUXqJeWyPpT5HfdCdk1qwWYN+xOB+zcsgozqu+fZPj4t9EgDJ99mkt/cT/12jLNyjLrjz5KffalawWdFJEjDpjbqobyu09w8f77Wf/6ccL8PK7VovnhacL27Yj3rH3tayz+5WeoT526FtAusN8B01uZ3Zw7x+qDD1G9+AN8'+
			'v48OhhAj5jw6GOD7feL8HOvHj7P0wAPo8vJWQTNgtxs3NiVWVwz/5xuUTzxBfsuthN07saIY53DQ4RAdDnHdLmHHDsonnySdO7dVUAE6V1WKvAW0LKlfOo2hhNntpPOvwLDAVEEV3+9jwwHVqVNkBw9iKytocVUVxzvKlkAlRMK+fYSXzoIqxbe/g98+R9y1i2z/fsLevVTPn6Q5c4b43v2Yc+D9NYNu+kYseU77w3dhRYmuLpMWL7L6bw8x9Zu/Ref226meeoq1Y8eI+/YRb9wDzuHntuyzACZm9iowv+mpKVGdOY3VNenHr7H0uc/RnD+PdTrY0hLtQ4eY+tNPgSpuaoq4cxc4txXIBCxjZs/aViUlM1WzlGz5C39vz3c79l2wF2/ab2vHj5uZmaZmy+rHsqqq3wrAj4FDbCXpbVhIoP3Ro8z/zWepTp6k83O3kR'+
			'8+POpy13Y2gUUT+V9Rsy8J/M61atsQGw6RVgvkuiX751T1z8Pgsce+44ri17WppwgBabWQELCqhpSgabCmQWKEdhtxDqoKaxosJVBF8hzpdkdliipUNakYQNIRdKuFpITVFaQGq0Y3Jel2Ic+gqrF6tJ41DeIE6bSRLCeV5Zmqqp8Mw0ceeap57LEXGu8+hPP46WmsKqFJ4DxUJVoMkO4ErtPFygIDXMxIVQmDAa7TQSZ62GAAbgSrKyujmDo7C86j6+sQAhICur4GTYPr9yEEbFjgYoSUaBYXIQbi3HZ0cWlVt03/tz9y5Ef+j+bmSsze46enD6fVVafr66O6yEaWkalJXK+Hrq6O0qCmEWie4WdmQIRmYQHKEkKEuoGmwU9Pg3foxUUoClRH1nK9HnFudpS9XluAukGiBwSJEdfrYlWFLi1hZfmcpfQZNz3zajCz'+
			'BUnpkebpp++uV1d/VlMidDqIGVpVyMQELs9Ji4toWeI6HcBoRPC9SahK6kuXkJjhu12sLDEzXK+HNQ3N4iI+RsiyUShrtUi9LmlllWZ5Bddu4/MMbRokRFw7J60PSBcv1XH3ruNh+9z3JXjC8MQJpa5P6MLCw8BehZ6KjKvNUTZwzmE6+uok476NtgBmCgiNyLhsBhv3YUraqN/HOhHBDMQUlcvzeF2nYWonioneP7mXztacO0/QlRUwu2hmxwIcAT7yukLGMSslZKO9oRAuK9/Y0hiS8bjLXwCMK3WaGe6KcVeOHW/0gk71v6jt1vMUBdY0hPrgTaMRKX1PLlz4oj/78t4E+64mbvykALTVPgdmwpcthAfFOUME8Z5g2fiW531Z75j/qqwPbnAXL/6xwo6rgb2e4gBttR5KN+z4a2211hGB1ACG/4M9u18faJP90p'+
			'z/kRsMRIriZ4CJ/1fIGB9ubjpwX5qd+YEMhm9IGm+8JZhClr1a79nzdzY19YCIbPm2uxkRqEzkK2nH/KfT3NyzkvQNZxre7j5qBll2Pu3c+fmwtrYsKf0eZgfsOlSqb08pF8z7L4P+Fc6d4cro8BNBN8S5C8AX8P40MX5SyvJuU72e57YghMctxn8Qswepy9W3A3x30JEMzfv/SNu2PeMvXbpH6vpeM7sZ1Wm2ZmETkRUTOQ08rHn+j8T4QxkO3votfJOgAAqcwbnP60T3YZr0EVeWR82590tdz5lZG2i9gy4FCkQGiKwj8qKG8O8W49epmzNiVl1tebGZmqkBTuPcy2l25pjFbI9cWLhZyvJ9oraPUZWwDegANbACLODcGfP+Sc3zZ4jxZanrRaDcxLoA/B9w4qb62RkozgAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="link to FA TOUR ACTIVE";
		el.ggDx=-97;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 33px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 33px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._link_to_fa_tour_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._link_to_fa_tour_active.onclick=function (e) {
			me._language.ggVisible = !me._language.ggVisible;
			var flag=me._language.ggVisible;
			me._language.style[domTransition]='none';
			me._language.style.visibility=((flag)&&(Number(me._language.style.opacity)>0||!me._language.style.opacity))?'inherit':'hidden';
		}
		me._link_to_fa_tour_active.onmouseover=function (e) {
			me.elementMouseOver['link_to_fa_tour_active']=true;
			me._tt_lan1_open.logicBlock_visible();
		}
		me._link_to_fa_tour_active.onmouseout=function (e) {
			me.elementMouseOver['link_to_fa_tour_active']=false;
			me._tt_lan1_open.logicBlock_visible();
		}
		me._link_to_fa_tour_active.ontouchend=function (e) {
			me.elementMouseOver['link_to_fa_tour_active']=false;
			me._tt_lan1_open.logicBlock_visible();
		}
		me._link_to_fa_tour_active.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._tt_lan1_open=document.createElement('div');
		els=me._tt_lan1_open__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_LAN1_open";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='bottom : 38px;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._tt_lan1_open.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_lan1_open.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_lan1_open.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_lan1_open.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_lan1_open.style[domTransition]='left 0s, bottom 0s';
				if (me._tt_lan1_open.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_lan1_open.style.bottom='-25px';
					me._tt_lan1_open.ggUpdatePosition(true);
				}
				else {
					me._tt_lan1_open.ggDx=0;
					me._tt_lan1_open.style.bottom='38px';
					me._tt_lan1_open.ggUpdatePosition(true);
				}
			}
		}
		me._tt_lan1_open.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['link_to_fa_tour_active'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_lan1_open.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_lan1_open.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_lan1_open.style[domTransition]='left 0s, bottom 0s';
				if (me._tt_lan1_open.ggCurrentLogicStateVisible == 0) {
					me._tt_lan1_open.style.visibility=(Number(me._tt_lan1_open.style.opacity)>0||!me._tt_lan1_open.style.opacity)?'inherit':'hidden';
					me._tt_lan1_open.ggVisible=true;
				}
				else {
					me._tt_lan1_open.style.visibility="hidden";
					me._tt_lan1_open.ggVisible=false;
				}
			}
		}
		me._tt_lan1_open.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('vis_thumbnail_menu_1') == false))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._tt_lan1_open.ggCurrentLogicStateText != newLogicStateText) {
				me._tt_lan1_open.ggCurrentLogicStateText = newLogicStateText;
				me._tt_lan1_open.style[domTransition]='left 0s, bottom 0s';
				if (me._tt_lan1_open.ggCurrentLogicStateText == 0) {
					me._tt_lan1_open.ggText="\u0627\u0646\u062a\u062e\u0627\u0628 \u0632\u0628\u0627\u0646";
					me._tt_lan1_open__text.innerHTML=me._tt_lan1_open.ggText;
					if (me._tt_lan1_open.ggUpdateText) {
					me._tt_lan1_open.ggUpdateText=function() {
						var hs="\u0627\u0646\u062a\u062e\u0627\u0628 \u0632\u0628\u0627\u0646";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_lan1_open.ggUpdatePosition) me._tt_lan1_open.ggUpdatePosition();
					}
				}
				else {
					me._tt_lan1_open.ggText="";
					me._tt_lan1_open__text.innerHTML=me._tt_lan1_open.ggText;
					if (me._tt_lan1_open.ggUpdateText) {
					me._tt_lan1_open.ggUpdateText=function() {
						var hs="";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_lan1_open.ggUpdatePosition) me._tt_lan1_open.ggUpdatePosition();
					}
				}
			}
		}
		me._tt_lan1_open.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._link_to_fa_tour_active.appendChild(me._tt_lan1_open);
		me._container_2.appendChild(me._link_to_fa_tour_active);
		el=me._language=document.createElement('div');
		el.ggId="LANGUAGE";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 72px;';
		hs+='left : 45px;';
		hs+='position : absolute;';
		hs+='top : -77px;';
		hs+='visibility : hidden;';
		hs+='width : 33px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._language.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._language.ggUpdatePosition=function (useTransition) {
		}
		el=me._link_to_eng_tour=document.createElement('div');
		els=me._link_to_eng_tour__img=document.createElement('img');
		els.className='ggskin ggskin_link_to_eng_tour';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="link to ENG TOUR";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 39px;';
		hs+='cursor : pointer;';
		hs+='height : 33px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 33px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._link_to_eng_tour.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._link_to_eng_tour.onclick=function (e) {
			player.openUrl("https:\/\/jemcomotor.com\/","");
		}
		me._link_to_eng_tour.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._language.appendChild(me._link_to_eng_tour);
		el=me._link_to_ar_tour=document.createElement('div');
		els=me._link_to_ar_tour__img=document.createElement('img');
		els.className='ggskin ggskin_link_to_ar_tour';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="link to AR TOUR";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 33px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 33px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._link_to_ar_tour.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._link_to_ar_tour.onclick=function (e) {
			player.openUrl("https:\/\/jemcomotor.com\/","");
		}
		me._link_to_ar_tour.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._language.appendChild(me._link_to_ar_tour);
		me._container_2.appendChild(me._language);
		el=me._link_to_site=document.createElement('div');
		els=me._link_to_site__img=document.createElement('img');
		els.className='ggskin ggskin_link_to_site';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="link to site";
		el.ggDx=-57;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 33px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 33px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._link_to_site.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._link_to_site.onclick=function (e) {
			player.openUrl("https:\/\/jemcomotor.com\/","_blank");
		}
		me._link_to_site.onmouseover=function (e) {
			me.elementMouseOver['link_to_site']=true;
			me._tt_menu_open.logicBlock_visible();
		}
		me._link_to_site.onmouseout=function (e) {
			me.elementMouseOver['link_to_site']=false;
			me._tt_menu_open.logicBlock_visible();
		}
		me._link_to_site.ontouchend=function (e) {
			me.elementMouseOver['link_to_site']=false;
			me._tt_menu_open.logicBlock_visible();
		}
		me._link_to_site.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._tt_menu_open=document.createElement('div');
		els=me._tt_menu_open__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_menu_open";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='bottom : 38px;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._tt_menu_open.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_menu_open.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_menu_open.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_menu_open.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_menu_open.style[domTransition]='left 0s, bottom 0s';
				if (me._tt_menu_open.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_menu_open.style.bottom='-25px';
					me._tt_menu_open.ggUpdatePosition(true);
				}
				else {
					me._tt_menu_open.ggDx=0;
					me._tt_menu_open.style.bottom='38px';
					me._tt_menu_open.ggUpdatePosition(true);
				}
			}
		}
		me._tt_menu_open.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['link_to_site'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_menu_open.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_menu_open.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_menu_open.style[domTransition]='left 0s, bottom 0s';
				if (me._tt_menu_open.ggCurrentLogicStateVisible == 0) {
					me._tt_menu_open.style.visibility=(Number(me._tt_menu_open.style.opacity)>0||!me._tt_menu_open.style.opacity)?'inherit':'hidden';
					me._tt_menu_open.ggVisible=true;
				}
				else {
					me._tt_menu_open.style.visibility="hidden";
					me._tt_menu_open.ggVisible=false;
				}
			}
		}
		me._tt_menu_open.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('vis_thumbnail_menu_1') == false))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._tt_menu_open.ggCurrentLogicStateText != newLogicStateText) {
				me._tt_menu_open.ggCurrentLogicStateText = newLogicStateText;
				me._tt_menu_open.style[domTransition]='left 0s, bottom 0s';
				if (me._tt_menu_open.ggCurrentLogicStateText == 0) {
					me._tt_menu_open.ggText="\u0633\u0627\u06cc\u062a \u06a9\u0627\u0631\u062e\u0627\u0646\u0647";
					me._tt_menu_open__text.innerHTML=me._tt_menu_open.ggText;
					if (me._tt_menu_open.ggUpdateText) {
					me._tt_menu_open.ggUpdateText=function() {
						var hs="\u0633\u0627\u06cc\u062a \u06a9\u0627\u0631\u062e\u0627\u0646\u0647";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_menu_open.ggUpdatePosition) me._tt_menu_open.ggUpdatePosition();
					}
				}
				else {
					me._tt_menu_open.ggText="";
					me._tt_menu_open__text.innerHTML=me._tt_menu_open.ggText;
					if (me._tt_menu_open.ggUpdateText) {
					me._tt_menu_open.ggUpdateText=function() {
						var hs="";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_menu_open.ggUpdatePosition) me._tt_menu_open.ggUpdatePosition();
					}
				}
			}
		}
		me._tt_menu_open.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._link_to_site.appendChild(me._tt_menu_open);
		me._container_2.appendChild(me._link_to_site);
		el=me._button_link_to_instagram=document.createElement('div');
		els=me._button_link_to_instagram__img=document.createElement('img');
		els.className='ggskin ggskin_button_link_to_instagram';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		me._button_link_to_instagram__img.ggOverSrc=hs;
		el.ggId="button_link to instagram";
		el.ggDx=-17;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 33px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 33px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_link_to_instagram.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_link_to_instagram.onclick=function (e) {
			player.openUrl("https:\/\/instagram.com\/_u\/jemcomotor\/","");
		}
		me._button_link_to_instagram.onmouseover=function (e) {
			me._button_link_to_instagram__img.src=me._button_link_to_instagram__img.ggOverSrc;
			me.elementMouseOver['button_link_to_instagram']=true;
			me._tt_insta_open.logicBlock_visible();
		}
		me._button_link_to_instagram.onmouseout=function (e) {
			me._button_link_to_instagram__img.src=me._button_link_to_instagram__img.ggNormalSrc;
			me.elementMouseOver['button_link_to_instagram']=false;
			me._tt_insta_open.logicBlock_visible();
		}
		me._button_link_to_instagram.ontouchend=function (e) {
			me.elementMouseOver['button_link_to_instagram']=false;
			me._tt_insta_open.logicBlock_visible();
		}
		me._button_link_to_instagram.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._tt_insta_open=document.createElement('div');
		els=me._tt_insta_open__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_insta_open";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='bottom : 38px;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._tt_insta_open.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_insta_open.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_insta_open.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_insta_open.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_insta_open.style[domTransition]='left 0s, bottom 0s';
				if (me._tt_insta_open.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_insta_open.style.bottom='-25px';
					me._tt_insta_open.ggUpdatePosition(true);
				}
				else {
					me._tt_insta_open.ggDx=0;
					me._tt_insta_open.style.bottom='38px';
					me._tt_insta_open.ggUpdatePosition(true);
				}
			}
		}
		me._tt_insta_open.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['button_link_to_instagram'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_insta_open.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_insta_open.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_insta_open.style[domTransition]='left 0s, bottom 0s';
				if (me._tt_insta_open.ggCurrentLogicStateVisible == 0) {
					me._tt_insta_open.style.visibility=(Number(me._tt_insta_open.style.opacity)>0||!me._tt_insta_open.style.opacity)?'inherit':'hidden';
					me._tt_insta_open.ggVisible=true;
				}
				else {
					me._tt_insta_open.style.visibility="hidden";
					me._tt_insta_open.ggVisible=false;
				}
			}
		}
		me._tt_insta_open.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('vis_thumbnail_menu_1') == false))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._tt_insta_open.ggCurrentLogicStateText != newLogicStateText) {
				me._tt_insta_open.ggCurrentLogicStateText = newLogicStateText;
				me._tt_insta_open.style[domTransition]='left 0s, bottom 0s';
				if (me._tt_insta_open.ggCurrentLogicStateText == 0) {
					me._tt_insta_open.ggText="\u0627\u06cc\u0646\u0633\u062a\u0627\u06af\u0631\u0627\u0645 ";
					me._tt_insta_open__text.innerHTML=me._tt_insta_open.ggText;
					if (me._tt_insta_open.ggUpdateText) {
					me._tt_insta_open.ggUpdateText=function() {
						var hs="\u0627\u06cc\u0646\u0633\u062a\u0627\u06af\u0631\u0627\u0645 ";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_insta_open.ggUpdatePosition) me._tt_insta_open.ggUpdatePosition();
					}
				}
				else {
					me._tt_insta_open.ggText="";
					me._tt_insta_open__text.innerHTML=me._tt_insta_open.ggText;
					if (me._tt_insta_open.ggUpdateText) {
					me._tt_insta_open.ggUpdateText=function() {
						var hs="";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_insta_open.ggUpdatePosition) me._tt_insta_open.ggUpdatePosition();
					}
				}
			}
		}
		me._tt_insta_open.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._button_link_to_instagram.appendChild(me._tt_insta_open);
		me._container_2.appendChild(me._button_link_to_instagram);
		el=me._button_link_to_whatsapp=document.createElement('div');
		els=me._button_link_to_whatsapp__img=document.createElement('img');
		els.className='ggskin ggskin_button_link_to_whatsapp';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		me._button_link_to_whatsapp__img.ggOverSrc=hs;
		el.ggId="button_link to Whatsapp";
		el.ggDx=23;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 33px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 33px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_link_to_whatsapp.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_link_to_whatsapp.onclick=function (e) {
			player.openUrl("tel:02177532544","");
		}
		me._button_link_to_whatsapp.onmouseover=function (e) {
			me._button_link_to_whatsapp__img.src=me._button_link_to_whatsapp__img.ggOverSrc;
			me.elementMouseOver['button_link_to_whatsapp']=true;
			me._tt_whats_open.logicBlock_visible();
		}
		me._button_link_to_whatsapp.onmouseout=function (e) {
			me._button_link_to_whatsapp__img.src=me._button_link_to_whatsapp__img.ggNormalSrc;
			me.elementMouseOver['button_link_to_whatsapp']=false;
			me._tt_whats_open.logicBlock_visible();
		}
		me._button_link_to_whatsapp.ontouchend=function (e) {
			me.elementMouseOver['button_link_to_whatsapp']=false;
			me._tt_whats_open.logicBlock_visible();
		}
		me._button_link_to_whatsapp.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._tt_whats_open=document.createElement('div');
		els=me._tt_whats_open__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_whats_open";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='bottom : 38px;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._tt_whats_open.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_whats_open.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_whats_open.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_whats_open.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_whats_open.style[domTransition]='left 0s, bottom 0s';
				if (me._tt_whats_open.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_whats_open.style.bottom='-25px';
					me._tt_whats_open.ggUpdatePosition(true);
				}
				else {
					me._tt_whats_open.ggDx=0;
					me._tt_whats_open.style.bottom='38px';
					me._tt_whats_open.ggUpdatePosition(true);
				}
			}
		}
		me._tt_whats_open.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['button_link_to_whatsapp'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_whats_open.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_whats_open.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_whats_open.style[domTransition]='left 0s, bottom 0s';
				if (me._tt_whats_open.ggCurrentLogicStateVisible == 0) {
					me._tt_whats_open.style.visibility=(Number(me._tt_whats_open.style.opacity)>0||!me._tt_whats_open.style.opacity)?'inherit':'hidden';
					me._tt_whats_open.ggVisible=true;
				}
				else {
					me._tt_whats_open.style.visibility="hidden";
					me._tt_whats_open.ggVisible=false;
				}
			}
		}
		me._tt_whats_open.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('vis_thumbnail_menu_1') == false))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._tt_whats_open.ggCurrentLogicStateText != newLogicStateText) {
				me._tt_whats_open.ggCurrentLogicStateText = newLogicStateText;
				me._tt_whats_open.style[domTransition]='left 0s, bottom 0s';
				if (me._tt_whats_open.ggCurrentLogicStateText == 0) {
					me._tt_whats_open.ggText="\u062a\u0644\u0641\u0646 \u062a\u0645\u0627\u0633";
					me._tt_whats_open__text.innerHTML=me._tt_whats_open.ggText;
					if (me._tt_whats_open.ggUpdateText) {
					me._tt_whats_open.ggUpdateText=function() {
						var hs="\u062a\u0644\u0641\u0646 \u062a\u0645\u0627\u0633";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_whats_open.ggUpdatePosition) me._tt_whats_open.ggUpdatePosition();
					}
				}
				else {
					me._tt_whats_open.ggText="";
					me._tt_whats_open__text.innerHTML=me._tt_whats_open.ggText;
					if (me._tt_whats_open.ggUpdateText) {
					me._tt_whats_open.ggUpdateText=function() {
						var hs="";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_whats_open.ggUpdatePosition) me._tt_whats_open.ggUpdatePosition();
					}
				}
			}
		}
		me._tt_whats_open.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._button_link_to_whatsapp.appendChild(me._tt_whats_open);
		me._container_2.appendChild(me._button_link_to_whatsapp);
		el=me._button_toggle_map=document.createElement('div');
		el.ggId="button_toggle_map";
		el.ggDx=63;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 1px;';
		hs+='height : 34px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 33px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_toggle_map.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_toggle_map.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._button_open_map=document.createElement('div');
		els=me._button_open_map__img=document.createElement('img');
		els.className='ggskin ggskin_button_open_map';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		me._button_open_map__img.ggOverSrc=hs;
		el.ggId="button_open_map";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_open_map.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_open_map.onclick=function (e) {
			player.openUrl("https:\/\/map.jemcomotor.com\/","");
		}
		me._button_open_map.onmouseover=function (e) {
			me._button_open_map__img.src=me._button_open_map__img.ggOverSrc;
			me.elementMouseOver['button_open_map']=true;
			me._tt_location_open.logicBlock_visible();
		}
		me._button_open_map.onmouseout=function (e) {
			me._button_open_map__img.src=me._button_open_map__img.ggNormalSrc;
			me.elementMouseOver['button_open_map']=false;
			me._tt_location_open.logicBlock_visible();
		}
		me._button_open_map.ontouchend=function (e) {
			me.elementMouseOver['button_open_map']=false;
			me._tt_location_open.logicBlock_visible();
		}
		me._button_open_map.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._tt_location_open=document.createElement('div');
		els=me._tt_location_open__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_location_open";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='bottom : 38px;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._tt_location_open.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_location_open.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_location_open.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_location_open.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_location_open.style[domTransition]='left 0s, bottom 0s';
				if (me._tt_location_open.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_location_open.style.bottom='-25px';
					me._tt_location_open.ggUpdatePosition(true);
				}
				else {
					me._tt_location_open.ggDx=0;
					me._tt_location_open.style.bottom='38px';
					me._tt_location_open.ggUpdatePosition(true);
				}
			}
		}
		me._tt_location_open.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['button_open_map'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_location_open.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_location_open.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_location_open.style[domTransition]='left 0s, bottom 0s';
				if (me._tt_location_open.ggCurrentLogicStateVisible == 0) {
					me._tt_location_open.style.visibility=(Number(me._tt_location_open.style.opacity)>0||!me._tt_location_open.style.opacity)?'inherit':'hidden';
					me._tt_location_open.ggVisible=true;
				}
				else {
					me._tt_location_open.style.visibility="hidden";
					me._tt_location_open.ggVisible=false;
				}
			}
		}
		me._tt_location_open.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('vis_thumbnail_menu_1') == false))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._tt_location_open.ggCurrentLogicStateText != newLogicStateText) {
				me._tt_location_open.ggCurrentLogicStateText = newLogicStateText;
				me._tt_location_open.style[domTransition]='left 0s, bottom 0s';
				if (me._tt_location_open.ggCurrentLogicStateText == 0) {
					me._tt_location_open.ggText="\u0645\u0648\u0642\u0639\u06cc\u062a \u062c\u063a\u0631\u0627\u0641\u06cc\u0627\u06cc\u06cc";
					me._tt_location_open__text.innerHTML=me._tt_location_open.ggText;
					if (me._tt_location_open.ggUpdateText) {
					me._tt_location_open.ggUpdateText=function() {
						var hs="\u0645\u0648\u0642\u0639\u06cc\u062a \u062c\u063a\u0631\u0627\u0641\u06cc\u0627\u06cc\u06cc";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_location_open.ggUpdatePosition) me._tt_location_open.ggUpdatePosition();
					}
				}
				else {
					me._tt_location_open.ggText="";
					me._tt_location_open__text.innerHTML=me._tt_location_open.ggText;
					if (me._tt_location_open.ggUpdateText) {
					me._tt_location_open.ggUpdateText=function() {
						var hs="";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_location_open.ggUpdatePosition) me._tt_location_open.ggUpdatePosition();
					}
				}
			}
		}
		me._tt_location_open.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._button_open_map.appendChild(me._tt_location_open);
		me._button_toggle_map.appendChild(me._button_open_map);
		el=me._button_close_map=document.createElement('div');
		els=me._button_close_map__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjIuMCI+CiAgPHBhdGggZmlsbD0iI2ZmZmZmZiIgZD0iTS0xMzkuMywzNTcuOGMwLjQsMCwwLjksMC4yLDEuMiwwLjVsMS44LDEuOGMwLjcsMC43LDAuNywxLjcsMCwyLjRsLTczLjMsNzMuM2MtMC4zLDAuMy0wLjgsMC41LTEuMiwwLjUmI3hkOyYjeGE7JiN4OTsmI3g5O3MtMC45LTAuMi0xLjItMC41bC0xLjgtMS44Yy0wLjctMC43LTAuNy0xLjcsMC0yLjRsNzMuMy03My4zQy0xNDAuMSwzNTgtMTM5LjcsMzU3LjgtMTM5LjMsMzU3LjgiIG9wYWNpdHk9IjEuMCIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiLz4KPC9zdmc+'+
			'Cg==';
		me._button_close_map__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="button_close_map";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 33px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 33px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_close_map.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_close_map.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_map') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_close_map.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_close_map.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_close_map.style[domTransition]='';
				if (me._button_close_map.ggCurrentLogicStateVisible == 0) {
					me._button_close_map.style.visibility=(Number(me._button_close_map.style.opacity)>0||!me._button_close_map.style.opacity)?'inherit':'hidden';
					me._button_close_map.ggVisible=true;
				}
				else {
					me._button_close_map.style.visibility="hidden";
					me._button_close_map.ggVisible=false;
				}
			}
		}
		me._button_close_map.ggUpdatePosition=function (useTransition) {
		}
		me._button_toggle_map.appendChild(me._button_close_map);
		me._container_2.appendChild(me._button_toggle_map);
		el=me._button_mute=document.createElement('div');
		el.ggId="button_mute";
		el.ggDx=103;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 33px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 33px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_mute.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_mute.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._unmute=document.createElement('div');
		els=me._unmute__img=document.createElement('img');
		els.className='ggskin ggskin_unmute';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		me._unmute__img.ggOverSrc=hs;
		el.ggId="unmute";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 33px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 33px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._unmute.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._unmute.onclick=function (e) {
			player.setVolume("_main",1);
			me._unmute.style[domTransition]='none';
			me._unmute.style.visibility='hidden';
			me._unmute.ggVisible=false;
			me._mute.style[domTransition]='none';
			me._mute.style.visibility=(Number(me._mute.style.opacity)>0||!me._mute.style.opacity)?'inherit':'hidden';
			me._mute.ggVisible=true;
		}
		me._unmute.onmouseover=function (e) {
			me._unmute__img.src=me._unmute__img.ggOverSrc;
		}
		me._unmute.onmouseout=function (e) {
			me._unmute__img.src=me._unmute__img.ggNormalSrc;
		}
		me._unmute.ggUpdatePosition=function (useTransition) {
		}
		me._button_mute.appendChild(me._unmute);
		el=me._mute=document.createElement('div');
		els=me._mute__img=document.createElement('img');
		els.className='ggskin ggskin_mute';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		me._mute__img.ggOverSrc=hs;
		el.ggId="mute";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 33px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 33px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._mute.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mute.onclick=function (e) {
			player.setVolume("_main",0);
			me._mute.style[domTransition]='none';
			me._mute.style.visibility='hidden';
			me._mute.ggVisible=false;
			me._unmute.style[domTransition]='none';
			me._unmute.style.visibility=(Number(me._unmute.style.opacity)>0||!me._unmute.style.opacity)?'inherit':'hidden';
			me._unmute.ggVisible=true;
		}
		me._mute.onmouseover=function (e) {
			me._mute__img.src=me._mute__img.ggOverSrc;
			me.elementMouseOver['mute']=true;
			me._tt_mute.logicBlock_visible();
		}
		me._mute.onmouseout=function (e) {
			me._mute__img.src=me._mute__img.ggNormalSrc;
			me.elementMouseOver['mute']=false;
			me._tt_mute.logicBlock_visible();
		}
		me._mute.ontouchend=function (e) {
			me.elementMouseOver['mute']=false;
			me._tt_mute.logicBlock_visible();
		}
		me._mute.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_mute=document.createElement('div');
		els=me._tt_mute__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_mute";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='bottom : 38px;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._tt_mute.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_mute.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_mute.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_mute.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_mute.style[domTransition]='left 0s, bottom 0s';
				if (me._tt_mute.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_mute.style.bottom='-25px';
					me._tt_mute.ggUpdatePosition(true);
				}
				else {
					me._tt_mute.ggDx=0;
					me._tt_mute.style.bottom='38px';
					me._tt_mute.ggUpdatePosition(true);
				}
			}
		}
		me._tt_mute.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['mute'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_mute.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_mute.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_mute.style[domTransition]='left 0s, bottom 0s';
				if (me._tt_mute.ggCurrentLogicStateVisible == 0) {
					me._tt_mute.style.visibility=(Number(me._tt_mute.style.opacity)>0||!me._tt_mute.style.opacity)?'inherit':'hidden';
					me._tt_mute.ggVisible=true;
				}
				else {
					me._tt_mute.style.visibility="hidden";
					me._tt_mute.ggVisible=false;
				}
			}
		}
		me._tt_mute.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('vis_thumbnail_menu_1') == false))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('vis_thumbnail_menu_1') == true))
			)
			{
				newLogicStateText = 1;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._tt_mute.ggCurrentLogicStateText != newLogicStateText) {
				me._tt_mute.ggCurrentLogicStateText = newLogicStateText;
				me._tt_mute.style[domTransition]='left 0s, bottom 0s';
				if (me._tt_mute.ggCurrentLogicStateText == 0) {
					me._tt_mute.ggText="\u0628\u06cc\u0635\u062f\u0627";
					me._tt_mute__text.innerHTML=me._tt_mute.ggText;
					if (me._tt_mute.ggUpdateText) {
					me._tt_mute.ggUpdateText=function() {
						var hs="\u0628\u06cc\u0635\u062f\u0627";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_mute.ggUpdatePosition) me._tt_mute.ggUpdatePosition();
					}
				}
				else if (me._tt_mute.ggCurrentLogicStateText == 1) {
					me._tt_mute.ggText="\u0648\u0635\u0644 \u0635\u062f\u0627";
					me._tt_mute__text.innerHTML=me._tt_mute.ggText;
					if (me._tt_mute.ggUpdateText) {
					me._tt_mute.ggUpdateText=function() {
						var hs="\u0648\u0635\u0644 \u0635\u062f\u0627";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_mute.ggUpdatePosition) me._tt_mute.ggUpdatePosition();
					}
				}
				else {
					me._tt_mute.ggText="";
					me._tt_mute__text.innerHTML=me._tt_mute.ggText;
					if (me._tt_mute.ggUpdateText) {
					me._tt_mute.ggUpdateText=function() {
						var hs="";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_mute.ggUpdatePosition) me._tt_mute.ggUpdatePosition();
					}
				}
			}
		}
		me._tt_mute.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._mute.appendChild(me._tt_mute);
		me._button_mute.appendChild(me._mute);
		me._container_2.appendChild(me._button_mute);
		el=me._more=document.createElement('div');
		els=me._more__img=document.createElement('img');
		els.className='ggskin ggskin_more';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="MORE";
		el.ggDx=142;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 33px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 33px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._more.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._more.onmouseover=function (e) {
			me.elementMouseOver['more']=true;
			me._tt_more_open.logicBlock_visible();
		}
		me._more.onmouseout=function (e) {
			me.elementMouseDown['more']=false;
			me.elementMouseOver['more']=false;
			me._tt_more_open.logicBlock_visible();
		}
		me._more.onmousedown=function (e) {
			me.elementMouseDown['more']=true;
		}
		me._more.onmouseup=function (e) {
			me.elementMouseDown['more']=false;
		}
		me._more.ontouchend=function (e) {
			me.elementMouseDown['more']=false;
			me.elementMouseOver['more']=false;
			me._tt_more_open.logicBlock_visible();
		}
		me._more.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._tt_more_open=document.createElement('div');
		els=me._tt_more_open__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_more_open";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='bottom : 38px;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u0627\u0628\u0632\u0627\u0631";
		el.appendChild(els);
		me._tt_more_open.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_more_open.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_more_open.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_more_open.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_more_open.style[domTransition]='left 0s, bottom 0s';
				if (me._tt_more_open.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_more_open.style.bottom='-25px';
					me._tt_more_open.ggUpdatePosition(true);
				}
				else {
					me._tt_more_open.ggDx=0;
					me._tt_more_open.style.bottom='38px';
					me._tt_more_open.ggUpdatePosition(true);
				}
			}
		}
		me._tt_more_open.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['more'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_more_open.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_more_open.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_more_open.style[domTransition]='left 0s, bottom 0s';
				if (me._tt_more_open.ggCurrentLogicStateVisible == 0) {
					me._tt_more_open.style.visibility=(Number(me._tt_more_open.style.opacity)>0||!me._tt_more_open.style.opacity)?'inherit':'hidden';
					me._tt_more_open.ggVisible=true;
				}
				else {
					me._tt_more_open.style.visibility="hidden";
					me._tt_more_open.ggVisible=false;
				}
			}
		}
		me._tt_more_open.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('vis_thumbnail_menu_1') == false))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._tt_more_open.ggCurrentLogicStateText != newLogicStateText) {
				me._tt_more_open.ggCurrentLogicStateText = newLogicStateText;
				me._tt_more_open.style[domTransition]='left 0s, bottom 0s';
				if (me._tt_more_open.ggCurrentLogicStateText == 0) {
					me._tt_more_open.ggText="\u0627\u0628\u0632\u0627\u0631 \u0628\u06cc\u0634\u062a\u0631";
					me._tt_more_open__text.innerHTML=me._tt_more_open.ggText;
					if (me._tt_more_open.ggUpdateText) {
					me._tt_more_open.ggUpdateText=function() {
						var hs="\u0627\u0628\u0632\u0627\u0631 \u0628\u06cc\u0634\u062a\u0631";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_more_open.ggUpdatePosition) me._tt_more_open.ggUpdatePosition();
					}
				}
				else {
					me._tt_more_open.ggText="\u0627\u0628\u0632\u0627\u0631";
					me._tt_more_open__text.innerHTML=me._tt_more_open.ggText;
					if (me._tt_more_open.ggUpdateText) {
					me._tt_more_open.ggUpdateText=function() {
						var hs="\u0627\u0628\u0632\u0627\u0631";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_more_open.ggUpdatePosition) me._tt_more_open.ggUpdatePosition();
					}
				}
			}
		}
		me._tt_more_open.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._more.appendChild(me._tt_more_open);
		me._container_2.appendChild(me._more);
		me.divSkin.appendChild(me._container_2);
		el=me._svg_51=document.createElement('div');
		els=me._svg_51__img=document.createElement('img');
		els.className='ggskin ggskin_svg_51';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('alt','\u0631\u0627\u0647\u0646\u0645\u0627');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 51";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_51.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._svg_51.onclick=function (e) {
			player.openUrl("https:\/\/shahroodut.ac.ir\/vtour\/fa\/guide","_blank");
		}
		me._svg_51.onmouseover=function (e) {
			me.elementMouseOver['svg_51']=true;
			me._tt_help_open.logicBlock_visible();
		}
		me._svg_51.onmouseout=function (e) {
			me.elementMouseOver['svg_51']=false;
			me._tt_help_open.logicBlock_visible();
		}
		me._svg_51.ontouchend=function (e) {
			me.elementMouseOver['svg_51']=false;
			me._tt_help_open.logicBlock_visible();
		}
		me._svg_51.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_help_open=document.createElement('div');
		els=me._tt_help_open__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_help_open";
		el.ggDx=-49;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 8px;';
		hs+='visibility : hidden;';
		hs+='width : 66px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._tt_help_open.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_help_open.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_help_open.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_help_open.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_help_open.style[domTransition]='left 0s, top 0s';
				if (me._tt_help_open.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_help_open.style.top='-25px';
					me._tt_help_open.ggUpdatePosition(true);
				}
				else {
					me._tt_help_open.ggDx=-49;
					me._tt_help_open.style.top='8px';
					me._tt_help_open.ggUpdatePosition(true);
				}
			}
		}
		me._tt_help_open.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['svg_51'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_help_open.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_help_open.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_help_open.style[domTransition]='left 0s, top 0s';
				if (me._tt_help_open.ggCurrentLogicStateVisible == 0) {
					me._tt_help_open.style.visibility=(Number(me._tt_help_open.style.opacity)>0||!me._tt_help_open.style.opacity)?'inherit':'hidden';
					me._tt_help_open.ggVisible=true;
				}
				else {
					me._tt_help_open.style.visibility="hidden";
					me._tt_help_open.ggVisible=false;
				}
			}
		}
		me._tt_help_open.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('vis_thumbnail_menu_1') == false))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._tt_help_open.ggCurrentLogicStateText != newLogicStateText) {
				me._tt_help_open.ggCurrentLogicStateText = newLogicStateText;
				me._tt_help_open.style[domTransition]='left 0s, top 0s';
				if (me._tt_help_open.ggCurrentLogicStateText == 0) {
					me._tt_help_open.ggText="\u0631\u0627\u0647\u0646\u0645\u0627";
					me._tt_help_open__text.innerHTML=me._tt_help_open.ggText;
					if (me._tt_help_open.ggUpdateText) {
					me._tt_help_open.ggUpdateText=function() {
						var hs="\u0631\u0627\u0647\u0646\u0645\u0627";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_help_open.ggUpdatePosition) me._tt_help_open.ggUpdatePosition();
					}
				}
				else {
					me._tt_help_open.ggText="";
					me._tt_help_open__text.innerHTML=me._tt_help_open.ggText;
					if (me._tt_help_open.ggUpdateText) {
					me._tt_help_open.ggUpdateText=function() {
						var hs="";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_help_open.ggUpdatePosition) me._tt_help_open.ggUpdatePosition();
					}
				}
			}
		}
		me._tt_help_open.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((64-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._svg_51.appendChild(me._tt_help_open);
		me.divSkin.appendChild(me._svg_51);
		el=me._thumbnail_menu=document.createElement('div');
		els=me._thumbnail_menu__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		hs ='';
		hs+='height : 73px;';
		hs+='left : 50%;';
		hs+='margin-left : -57.5px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 115px;';
		hs+="";
		els.setAttribute('style',hs);
		me._thumbnail_menu.ggScrollByX = function(diffX) {
			if(!me._thumbnail_menu.ggHorScrollVisible || diffX == 0 || me._thumbnail_menu.ggHPercentVisible >= 1.0) return;
			me._thumbnail_menu.ggScrollPosX = (me._thumbnail_menu__horScrollFg.offsetLeft + diffX);
			me._thumbnail_menu.ggScrollPosX = Math.max(me._thumbnail_menu.ggScrollPosX, 0);
			me._thumbnail_menu.ggScrollPosX = Math.min(me._thumbnail_menu.ggScrollPosX, me._thumbnail_menu__horScrollBg.offsetWidth - me._thumbnail_menu__horScrollFg.offsetWidth);
			me._thumbnail_menu__horScrollFg.style.left = me._thumbnail_menu.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnail_menu.ggScrollPosX / (me._thumbnail_menu__horScrollBg.offsetWidth - me._thumbnail_menu__horScrollFg.offsetWidth);
			me._thumbnail_menu__content.style.left = -(Math.round((me._thumbnail_menu.ggContentWidth * (1.0 - me._thumbnail_menu.ggHPercentVisible)) * percentScrolled)) + me._thumbnail_menu.ggContentLeftOffset + 'px';
			me._thumbnail_menu.ggScrollPosXPercent = (me._thumbnail_menu__horScrollFg.offsetLeft / me._thumbnail_menu__horScrollBg.offsetWidth);
		}
		me._thumbnail_menu.ggScrollByXSmooth = function(diffX) {
			if(!me._thumbnail_menu.ggHorScrollVisible || diffX == 0 || me._thumbnail_menu.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._thumbnail_menu.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._thumbnail_menu.ggScrollPosX >= me._thumbnail_menu__horScrollBg.offsetWidth - me._thumbnail_menu__horScrollFg.offsetWidth)) {
					me._thumbnail_menu.ggScrollPosX = Math.min(me._thumbnail_menu.ggScrollPosX, me._thumbnail_menu__horScrollBg.offsetWidth - me._thumbnail_menu__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._thumbnail_menu.ggScrollPosX <= 0)) {
					me._thumbnail_menu.ggScrollPosX = Math.max(me._thumbnail_menu.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._thumbnail_menu__horScrollFg.style.left = me._thumbnail_menu.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnail_menu.ggScrollPosX / (me._thumbnail_menu__horScrollBg.offsetWidth - me._thumbnail_menu__horScrollFg.offsetWidth);
			me._thumbnail_menu__content.style.left = -(Math.round((me._thumbnail_menu.ggContentWidth * (1.0 - me._thumbnail_menu.ggHPercentVisible)) * percentScrolled)) + me._thumbnail_menu.ggContentLeftOffset + 'px';
			me._thumbnail_menu.ggScrollPosXPercent = (me._thumbnail_menu__horScrollFg.offsetLeft / me._thumbnail_menu__horScrollBg.offsetWidth);
			}, 10);
		}
		me._thumbnail_menu.ggScrollByY = function(diffY) {
			if(!me._thumbnail_menu.ggVertScrollVisible || diffY == 0 || me._thumbnail_menu.ggVPercentVisible >= 1.0) return;
			me._thumbnail_menu.ggScrollPosY = (me._thumbnail_menu__vertScrollFg.offsetTop + diffY);
			me._thumbnail_menu.ggScrollPosY = Math.max(me._thumbnail_menu.ggScrollPosY, 0);
			me._thumbnail_menu.ggScrollPosY = Math.min(me._thumbnail_menu.ggScrollPosY, me._thumbnail_menu__vertScrollBg.offsetHeight - me._thumbnail_menu__vertScrollFg.offsetHeight);
			me._thumbnail_menu__vertScrollFg.style.top = me._thumbnail_menu.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnail_menu.ggScrollPosY / (me._thumbnail_menu__vertScrollBg.offsetHeight - me._thumbnail_menu__vertScrollFg.offsetHeight);
			me._thumbnail_menu__content.style.top = -(Math.round((me._thumbnail_menu.ggContentHeight * (1.0 - me._thumbnail_menu.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_menu.ggContentTopOffset + 'px';
			me._thumbnail_menu.ggScrollPosYPercent = (me._thumbnail_menu__vertScrollFg.offsetTop / me._thumbnail_menu__vertScrollBg.offsetHeight);
		}
		me._thumbnail_menu.ggScrollByYSmooth = function(diffY) {
			if(!me._thumbnail_menu.ggVertScrollVisible || diffY == 0 || me._thumbnail_menu.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._thumbnail_menu.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._thumbnail_menu.ggScrollPosY >= me._thumbnail_menu__vertScrollBg.offsetHeight - me._thumbnail_menu__vertScrollFg.offsetHeight)) {
					me._thumbnail_menu.ggScrollPosY = Math.min(me._thumbnail_menu.ggScrollPosY, me._thumbnail_menu__vertScrollBg.offsetHeight - me._thumbnail_menu__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._thumbnail_menu.ggScrollPosY <= 0)) {
					me._thumbnail_menu.ggScrollPosY = Math.max(me._thumbnail_menu.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._thumbnail_menu__vertScrollFg.style.top = me._thumbnail_menu.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnail_menu.ggScrollPosY / (me._thumbnail_menu__vertScrollBg.offsetHeight - me._thumbnail_menu__vertScrollFg.offsetHeight);
			me._thumbnail_menu__content.style.top = -(Math.round((me._thumbnail_menu.ggContentHeight * (1.0 - me._thumbnail_menu.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_menu.ggContentTopOffset + 'px';
			me._thumbnail_menu.ggScrollPosYPercent = (me._thumbnail_menu__vertScrollFg.offsetTop / me._thumbnail_menu__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._thumbnail_menu.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._thumbnail_menu.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._thumbnail_menu.ggHPercentVisible);
					me._thumbnail_menu.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._thumbnail_menu.clientWidth - (me._thumbnail_menu.ggVertScrollVisible ? 15 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._thumbnail_menu.clientWidth - (me._thumbnail_menu.ggVertScrollVisible ? 15 : 0))) * me._thumbnail_menu.ggHPercentVisible);
					me._thumbnail_menu.ggScrollByXSmooth(diffX);
				}
			}
			if (me._thumbnail_menu.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._thumbnail_menu.ggVPercentVisible);
					me._thumbnail_menu.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._thumbnail_menu.clientHeight - (me._thumbnail_menu.ggHorScrollVisible ? 15 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._thumbnail_menu.clientHeight - (me._thumbnail_menu.ggHorScrollVisible ? 15 : 0))) * me._thumbnail_menu.ggVPercentVisible);
					me._thumbnail_menu.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._thumbnail_menu.ggDragLastX = t ? t[0].clientX : e.clientX;
			me._thumbnail_menu.ggDragLastY = t ? t[0].clientY : e.clientY;
			me._thumbnail_menu__content.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_menu.ggDragInertiaX *= 0.65;
					me._thumbnail_menu.ggDragInertiaY *= 0.65;
					me._thumbnail_menu.ggScrollByX(me._thumbnail_menu.ggDragInertiaX);
					me._thumbnail_menu.ggScrollByY(me._thumbnail_menu.ggDragInertiaY);
					if (Math.abs(me._thumbnail_menu.ggDragInertiaX) < 1.0 && Math.abs(me._thumbnail_menu.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				me._thumbnail_menu__content.ontouchend = null;
				me._thumbnail_menu__content.ontouchmove = null;
				me._thumbnail_menu__content.onpointerup = null;
				me._thumbnail_menu__content.onpointermove = null;
			}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			me._thumbnail_menu__content.onpointerup = me._thumbnail_menu__content.ontouchend;
		}
			me._thumbnail_menu__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = ((t ? t[0].clientX : e.clientX) - me._thumbnail_menu.ggDragLastX) * me._thumbnail_menu.ggHPercentVisible;
				var diffY = ((t ? t[0].clientY : e.clientY) - me._thumbnail_menu.ggDragLastY) * me._thumbnail_menu.ggVPercentVisible;
				me._thumbnail_menu.ggDragInertiaX = -diffX;
				me._thumbnail_menu.ggDragInertiaY = -diffY;
				me._thumbnail_menu.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._thumbnail_menu.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._thumbnail_menu.ggScrollByX(-diffX);
				me._thumbnail_menu.ggScrollByY(-diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._thumbnail_menu__content.onpointermove = me._thumbnail_menu__content.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = els.ontouchstart;
		}
		elHorScrollBg = me._thumbnail_menu__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 305px; height: 15px; background-color: rgba(0,0,0,0.392157); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._thumbnail_menu__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 305px; height: 15px; background-color: rgba(0,0,0,1); pointer-events: auto;');
		me._thumbnail_menu.ggScrollPosX = 0;
		me._thumbnail_menu.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbnail_menu.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_menu.ggDragInertiaX *= 0.65;
					me._thumbnail_menu.ggScrollByX(me._thumbnail_menu.ggDragInertiaX);
					if (Math.abs(me._thumbnail_menu.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._thumbnail_menu.ggDragLastX;
				me._thumbnail_menu.ggDragInertiaX = diffX;
				me._thumbnail_menu.ggDragLastX = e.clientX;
				me._thumbnail_menu.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._thumbnail_menu.ggDragLastX = t ? t[0].clientX : e.clientX;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_menu.ggDragInertiaX *= 0.65;
					me._thumbnail_menu.ggScrollByX(me._thumbnail_menu.ggDragInertiaX);
					if (Math.abs(me._thumbnail_menu.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me._thumbnail_menu.ggDragLastX;
				me._thumbnail_menu.ggDragInertiaX = diffX;
				me._thumbnail_menu.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._thumbnail_menu.ggScrollByX(diffX);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elHorScrollFg.onpointerdown = elHorScrollFg.ontouchstart;
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._thumbnail_menu.ggScrollWidth;
			if (e.offsetX < me._thumbnail_menu.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnail_menu.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._thumbnail_menu__horScrollBg.getBoundingClientRect();
			var diffX = me._thumbnail_menu.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._thumbnail_menu.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnail_menu.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me._thumbnail_menu.ggScrollByXSmooth(30 * me._thumbnail_menu.ggHPercentVisible * wheelDelta);
		});
		elCornerBg = me._thumbnail_menu__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 15px; height: 15px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="thumbnail_menu";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 85px;';
		hs+='height : 84px;';
		hs+='left : -10000px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 80.2632%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_menu.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnail_menu.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_thumbnail_menu') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_menu.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_menu.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_menu.style[domTransition]='opacity 500ms ease 0ms';
				if (me._thumbnail_menu.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._thumbnail_menu.style.opacity == 0.0) { me._thumbnail_menu.style.visibility="hidden"; } }, 505);
					me._thumbnail_menu.style.opacity=0;
				}
				else {
					me._thumbnail_menu.style.visibility=me._thumbnail_menu.ggVisible?'inherit':'hidden';
					me._thumbnail_menu.style.opacity=1;
				}
			}
		}
		me._thumbnail_menu.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
			}
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				this.ggContentWidth = 0;
				this.ggContentHeight = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none') {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				var contentWidth = maxX - minX;
				var contentHeight = maxY - minY;
				this.ggContentWidth = contentWidth;
				this.ggContentHeight = contentHeight;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.width = contentWidth + 'px';
				this.ggContent.style.height = contentHeight + 'px';
				var containerWidth = offsetWidthWithScale;
				if (this.ggVertScrollVisible) containerWidth -= 15;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = ((contentWidth/-2) - (this.ggVertScrollVisible ? (15/2) : 0)) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if (contentWidth > Math.ceil(offsetWidthWithScale)) {
					me._thumbnail_menu__horScrollBg.style.visibility = 'inherit';
					me._thumbnail_menu__horScrollFg.style.visibility = 'inherit';
					me._thumbnail_menu.ggHorScrollVisible = true;
				} else {
					me._thumbnail_menu__horScrollBg.style.visibility = 'hidden';
					me._thumbnail_menu__horScrollFg.style.visibility = 'hidden';
					me._thumbnail_menu.ggHorScrollVisible = false;
				}
				if(me._thumbnail_menu.ggHorScrollVisible) {
					me._thumbnail_menu.ggAvailableHeight = me._thumbnail_menu.clientHeight - 15;
					if (me._thumbnail_menu.ggVertScrollVisible) {
						me._thumbnail_menu.ggAvailableWidth = me._thumbnail_menu.clientWidth - 15;
						me._thumbnail_menu.ggAvailableWidthWithScale = me._thumbnail_menu.getBoundingClientRect().width - me._thumbnail_menu__horScrollBg.getBoundingClientRect().height;
					} else {
						me._thumbnail_menu.ggAvailableWidth = me._thumbnail_menu.clientWidth;
						me._thumbnail_menu.ggAvailableWidthWithScale = me._thumbnail_menu.getBoundingClientRect().width;
					}
					me._thumbnail_menu__horScrollBg.style.width = me._thumbnail_menu.ggAvailableWidth + 'px';
					me._thumbnail_menu.ggHPercentVisible = contentWidth != 0 ? me._thumbnail_menu.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me._thumbnail_menu.ggHPercentVisible > 1.0) me._thumbnail_menu.ggHPercentVisible = 1.0;
					me._thumbnail_menu.ggScrollWidth = Math.round(me._thumbnail_menu__horScrollBg.offsetWidth * me._thumbnail_menu.ggHPercentVisible);
					me._thumbnail_menu__horScrollFg.style.width = me._thumbnail_menu.ggScrollWidth + 'px';
					me._thumbnail_menu.ggScrollPosX = me._thumbnail_menu.ggScrollPosXPercent * me._thumbnail_menu.ggAvailableWidth;
					me._thumbnail_menu.ggScrollPosX = Math.min(me._thumbnail_menu.ggScrollPosX, me._thumbnail_menu__horScrollBg.offsetWidth - me._thumbnail_menu__horScrollFg.offsetWidth);
					me._thumbnail_menu__horScrollFg.style.left = me._thumbnail_menu.ggScrollPosX + 'px';
					if (me._thumbnail_menu.ggHPercentVisible < 1.0) {
						let percentScrolled = me._thumbnail_menu.ggScrollPosX / (me._thumbnail_menu__horScrollBg.offsetWidth - me._thumbnail_menu__horScrollFg.offsetWidth);
						me._thumbnail_menu__content.style.left = -(Math.round((me._thumbnail_menu.ggContentWidth * (1.0 - me._thumbnail_menu.ggHPercentVisible)) * percentScrolled)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me._thumbnail_menu.ggAvailableHeight = me._thumbnail_menu.clientHeight;
					me._thumbnail_menu.ggScrollPosX = 0;
					me._thumbnail_menu.ggScrollPosXPercent = 0.0;
				}
				if(horScrollWasVisible != me._thumbnail_menu.ggHorScrollVisible || vertScrollWasVisible != me._thumbnail_menu.ggVertScrollVisible) {
					me.updateSize(me._thumbnail_menu);
					me._thumbnail_menu.ggUpdatePosition();
				}
			}
		}
		el=me._thumbnail_cloner=document.createElement('div');
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggWidth = 96;
		el.ggHeight = 62;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		me._thumbnail_cloner.callChildLogicBlocks_changenode = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._checkmark_tick && me._thumbnail_cloner.ggInstances[i]._checkmark_tick.logicBlock_alpha) {
						me._thumbnail_cloner.ggInstances[i]._checkmark_tick.logicBlock_alpha();
					}
				}
			}
		}
		me._thumbnail_cloner.callChildLogicBlocks_mouseover = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._thumbnail_active && me._thumbnail_cloner.ggInstances[i]._thumbnail_active.logicBlock_bordercolor) {
						me._thumbnail_cloner.ggInstances[i]._thumbnail_active.logicBlock_bordercolor();
					}
				}
			}
		}
		me._thumbnail_cloner.callChildLogicBlocks_mouseover = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._checkmark_tick && me._thumbnail_cloner.ggInstances[i]._checkmark_tick.logicBlock_alpha) {
						me._thumbnail_cloner.ggInstances[i]._checkmark_tick.logicBlock_alpha();
					}
				}
			}
		}
		me._thumbnail_cloner.callChildLogicBlocks_active = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._thumbnail_active && me._thumbnail_cloner.ggInstances[i]._thumbnail_active.logicBlock_bordercolor) {
						me._thumbnail_cloner.ggInstances[i]._thumbnail_active.logicBlock_bordercolor();
					}
					if (me._thumbnail_cloner.ggInstances[i]._checkmark_tick && me._thumbnail_cloner.ggInstances[i]._checkmark_tick.logicBlock_visible) {
						me._thumbnail_cloner.ggInstances[i]._checkmark_tick.logicBlock_visible();
					}
				}
			}
		}
		me._thumbnail_cloner.callChildLogicBlocks_changevisitednodes = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._checkmark_tick && me._thumbnail_cloner.ggInstances[i]._checkmark_tick.logicBlock_visible) {
						me._thumbnail_cloner.ggInstances[i]._checkmark_tick.logicBlock_visible();
					}
				}
			}
		}
		me._thumbnail_cloner.callChildLogicBlocks_activehotspotchanged = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._checkmark_tick && me._thumbnail_cloner.ggInstances[i]._checkmark_tick.logicBlock_alpha) {
						me._thumbnail_cloner.ggInstances[i]._checkmark_tick.logicBlock_alpha();
					}
				}
			}
		}
		el.ggUpdate = function(filter) {
			if(me._thumbnail_cloner.ggUpdating == true) return;
			me._thumbnail_cloner.ggUpdating = true;
			var el=me._thumbnail_cloner;
			var curNumRows = 0;
			curNumRows = el.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._thumbnail_cloner.ggUpdating = false;
				return;
			} else {
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			for (var i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) == -1) passed = false;
					}
				}
				if (passed) {
				var parameter={};
				parameter.top=(row * me._thumbnail_cloner.ggHeight) + 'px';
				parameter.left=(column * me._thumbnail_cloner.ggWidth) + 'px';
				parameter.width=me._thumbnail_cloner.ggWidth + 'px';
				parameter.height=me._thumbnail_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_thumbnail_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
				}
			}
			me._thumbnail_cloner.callChildLogicBlocks_changenode();
			me._thumbnail_cloner.callChildLogicBlocks_mouseover();
			me._thumbnail_cloner.callChildLogicBlocks_mouseover();
			me._thumbnail_cloner.callChildLogicBlocks_active();
			me._thumbnail_cloner.callChildLogicBlocks_changevisitednodes();
			me._thumbnail_cloner.callChildLogicBlocks_activehotspotchanged();
			me._thumbnail_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._thumbnail_cloner.parentNode.classList.contains('ggskin_subelement') && me._thumbnail_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._thumbnail_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="thumbnail_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 62px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 96px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._thumbnail_cloner.childNodes.length; i++) {
				var child=me._thumbnail_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._thumbnail_cloner.ggUpdatePosition=function (useTransition) {
				me._thumbnail_cloner.ggUpdate();
		}
		me._thumbnail_cloner.ggNodeChange=function () {
			me._thumbnail_cloner.ggUpdateConditionNodeChange();
		}
		me._thumbnail_menu__content.appendChild(me._thumbnail_cloner);
		me.divSkin.appendChild(me._thumbnail_menu);
		el=me._screentint_info=document.createElement('div');
		el.ggId="screentint_info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._screentint_info.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._screentint_info.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_info_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._screentint_info.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._screentint_info.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._screentint_info.style[domTransition]='';
				if (me._screentint_info.ggCurrentLogicStateVisible == 0) {
					me._screentint_info.style.visibility=(Number(me._screentint_info.style.opacity)>0||!me._screentint_info.style.opacity)?'inherit':'hidden';
					me._screentint_info.ggVisible=true;
				}
				else {
					me._screentint_info.style.visibility="hidden";
					me._screentint_info.ggVisible=false;
				}
			}
		}
		me._screentint_info.onclick=function (e) {
			player.setVariableValue('vis_info_popup', false);
			me._info_title.ggText="";
			me._info_title.ggTextDiv.innerHTML=me._info_title.ggText;
			if (me._info_title.ggUpdateText) {
				me._info_title.ggUpdateText=function() {
					var hs="";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._info_title.ggUpdatePosition) {
				me._info_title.ggUpdatePosition();
			}
			me._info_title.ggTextDiv.scrollTop = 0;
			me._info_text_body.ggText="";
			me._info_text_body.ggTextDiv.innerHTML=me._info_text_body.ggText;
			if (me._info_text_body.ggUpdateText) {
				me._info_text_body.ggUpdateText=function() {
					var hs="";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._info_text_body.ggUpdatePosition) {
				me._info_text_body.ggUpdatePosition();
			}
			me._info_text_body.ggTextDiv.scrollTop = 0;
		}
		me._screentint_info.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._screentint_info);
		el=me._information=document.createElement('div');
		el.ggId="information";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 250px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 300px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._information.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._information.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_info_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._information.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._information.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._information.style[domTransition]='';
				if (me._information.ggCurrentLogicStateVisible == 0) {
					me._information.style.visibility=(Number(me._information.style.opacity)>0||!me._information.style.opacity)?'inherit':'hidden';
					me._information.ggVisible=true;
				}
				else {
					me._information.style.visibility="hidden";
					me._information.ggVisible=false;
				}
			}
		}
		me._information.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._informationbg=document.createElement('div');
		el.ggId="informationbg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 10px;';
		hs+='border-radius : 10px;';
		hs+='background : rgba(0,0,0,0.509804);';
		hs+='border : 2px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 250px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._informationbg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._informationbg.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._informationbg);
		el=me._info_text_body=document.createElement('div');
		els=me._info_text_body__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_text_body";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 193px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 45px;';
		hs+='visibility : inherit;';
		hs+='width : 276px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 276px;';
		hs+='height: 193px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: right;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._info_text_body.ggUpdateText=function() {
			var hs=player.hotspot.description;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_text_body.ggUpdateText();
		player.addListener('activehotspotchanged', function() {
			me._info_text_body.ggUpdateText();
		});
		el.appendChild(els);
		me._info_text_body.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_text_body.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._info_text_body);
		el=me._info_title=document.createElement('div');
		els=me._info_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 245px;';
		hs+='pointer-events:auto;';
		hs+='font-weight: bold;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 245px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: right;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._info_title.ggUpdateText=function() {
			var hs=player.hotspot.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_title.ggUpdateText();
		player.addListener('activehotspotchanged', function() {
			me._info_title.ggUpdateText();
		});
		el.appendChild(els);
		me._info_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_title.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._info_title);
		el=me._ht_info_close=document.createElement('div');
		els=me._ht_info_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGhlaWdodD0iMzJweCIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMzJweCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMC'+
			'AwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIHg9IjBweCIgeT0iMHB4Ij4KIDxnIG9wYWNpdHk9IjAuNCI+CiAgPHBhdGggZD0iTTIxLjEzMiwxOS40MzlMMTcuNjkyLDE2bDMuNDQtMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNSwwLTEuNjkzJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LTAuNDY3LTEuMjI1LTAuNDY3LTEuNjkxLDAuMDAxTDE2LDE0LjMwOGwtMy40NDEtMy40NDFjLTAuNDY3LTAuNDY3LTEuMjI0LTAuNDY3LTEuNjkxLDAuMDAx'+
			'JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI0LDAsMS42OUwxNC4zMDksMTZsLTMuNDQsMy40NGMtMC40NjcsMC40NjctMC40NjcsMS4yMjYsMCwxLjY5MmMwLjQ2NywwLjQ2NywxLjIyNiwwLjQ2NywxLjY5MiwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMy40NC0zLjQ0bDMuNDM5LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI1LDAuNDY4LDEuNjkxLDAuMDAxQzIxLjU5OSwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy00Ljg4Mi00Ljg4Mi0xMi43OTYtNC44ODItMTcuNjc4LDBjLTQuODgxLDQuOD'+
			'gxLTQuODgxLDEyLjc5NSwwLDE3LjY3OGM0Ljg4MSw0Ljg4LDEyLjc5Niw0Ljg4LDE3LjY3OCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjkuNzIsMTkuOTU2LDI5LjcyLDEyLjA0MiwyNC44MzksNy4xNjF6IE0xNiwyNi4xMDZjLTIuNTg5LTAuMDAxLTUuMTctMC45ODUtNy4xNDYtMi45NjFTNS44OTUsMTguNTksNS44OTQsMTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTIuNTkxLDAuOTg0LTUuMTcsMi45Ni03LjE0N0MxMC44Myw2Ljg3OCwxMy40MDksNS44OTQsMTYsNS44OTRjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuOTc2LDEuOTc3LDIu'+
			'OTU3LDQuNTU2LDIuOTYsNy4xNDdjLTAuMDAxLDIuNTkxLTAuOTg1LDUuMTY5LTIuOTYsNy4xNDhDMjEuMTY5LDI1LjEyMiwxOC41OTEsMjYuMTA2LDE2LDI2LjEwNnoiIHN0cm9rZT0iIzNDM0MzQyIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0yMS4xMzIsMTkuNDM5TDE3LjY5MiwxNmwzLjQ0LTMuNDRjMC40NjgtMC40NjcsMC40NjgtMS4yMjUsMC0xLjY5MyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5MSwwLjAwMUwxNiwxNC4zMDhsLTMuNDQxLTMuNDQxYy0wLjQ2Ny0wLjQ2Ny0xLjIyNC'+
			'0wLjQ2Ny0xLjY5MSwwLjAwMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNCwwLDEuNjlMMTQuMzA5LDE2bC0zLjQ0LDMuNDRjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI2LDAsMS42OTJjMC40NjcsMC40NjcsMS4yMjYsMC40NjcsMS42OTIsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7bDMuNDQtMy40NGwzLjQzOSwzLjQzOWMwLjQ2OCwwLjQ2OCwxLjIyNSwwLjQ2OCwxLjY5MSwwLjAwMUMyMS41OTksMjAuNjY0LDIxLjYsMTkuOTA3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtNC44ODItNC44ODItMTIuNzk2LTQuODgyLTE3'+
			'LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTUsMCwxNy42NzhjNC44ODEsNC44OCwxMi43OTYsNC44OCwxNy42NzgsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzI5LjcyLDE5Ljk1NiwyOS43MiwxMi4wNDIsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU4OS0wLjAwMS01LjE3LTAuOTg1LTcuMTQ2LTIuOTYxUzUuODk1LDE4LjU5LDUuODk0LDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0yLjU5MSwwLjk4NC01LjE3LDIuOTYtNy4xNDdDMTAuODMsNi44NzgsMTMuNDA5LDUuODk0LDE2LDUuODk0YzIuNTkxLDAuMDAxLDUuMTcsMC45ODQsNy4xNDcsMi45NTkmI3hkOyYjeGE7JiN4OTsmI3'+
			'g5O2MxLjk3NiwxLjk3NywyLjk1Nyw0LjU1NiwyLjk2LDcuMTQ3Yy0wLjAwMSwyLjU5MS0wLjk4NSw1LjE2OS0yLjk2LDcuMTQ4QzIxLjE2OSwyNS4xMjIsMTguNTkxLDI2LjEwNiwxNiwyNi4xMDZ6IiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMC4yIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_close__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGhlaWdodD0iMzJweCIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMzJweCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMC'+
			'AwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIHg9IjBweCIgeT0iMHB4Ij4KIDxnIG9wYWNpdHk9IjAuNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTMsMTZsMy40MzktMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNiwwLjAwMS0xLjY5MyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5Miww'+
			'LjAwMWwtMy40NCwzLjQ0bC0zLjQ0MS0zLjQ0MWMtMC40NjgtMC40NjgtMS4yMjUtMC40NjctMS42OTMsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNSwwLDEuNjkyTDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ni0wLjQ2NywxLjIyNCwwLDEuNjkxYzAuNDY3LDAuNDY3LDEuMjI2LDAuNDY3LDEuNjkyLDAuMDAxJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMy40NC0zLjQ0bDMuNDQsMy40MzljMC40NjgsMC40NjgsMS4yMjQsMC40NjcsMS42OTEsMEMyMS41OTgsMjAuNjY0LDIxLjYsMTkuOTA3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjEmI3hkOy'+
			'YjeGE7JiN4OTsmI3g5O2MtNC44ODItNC44ODItMTIuNzk2LTQuODgyLTE3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTYsMCwxNy42NzhjNC44ODIsNC44ODEsMTIuNzk2LDQuODgxLDE3LjY3OCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjkuNzIsMTkuOTU3LDI5LjcyMSwxMi4wNDMsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU5LDAtNS4xNzEtMC45ODQtNy4xNDYtMi45NTlDNi44NzgsMjEuMTcsNS44OTUsMTguNTkxLDUuODk0LDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0yLjU5MSwwLjk4My01LjE3LDIuOTU5LTcuMTQ3YzEuOTc3LTEuOTc2LDQuNTU2LTIuOTU5LDcuMTQ4'+
			'LTIuOTZjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuOTc1LDEuOTc3LDIuOTU3LDQuNTU2LDIuOTU5LDcuMTQ3Yy0wLjAwMSwyLjU5Mi0wLjk4NCw1LjE3LTIuOTYsNy4xNDhDMjEuMTcsMjUuMTIzLDE4LjU5MSwyNi4xMDcsMTYsMjYuMTA2eiIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIvPgogPC9nPgogPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTMsMTZsMy40MzktMy'+
			'40NCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNDY4LTAuNDY3LDAuNDY4LTEuMjI2LDAuMDAxLTEuNjkzYy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5MiwwLjAwMWwtMy40NCwzLjQ0bC0zLjQ0MS0zLjQ0MSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2OC0wLjQ2OC0xLjIyNS0wLjQ2Ny0xLjY5MywwYy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNSwwLDEuNjkyTDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ni0wLjQ2NywxLjIyNCwwLDEuNjkxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC40NjcsMC40NjcsMS4yMjYsMC40NjcsMS42OTIsMC4wMDFsMy40NC0zLjQ0bDMuNDQsMy40Mzlj'+
			'MC40NjgsMC40NjgsMS4yMjQsMC40NjcsMS42OTEsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzIxLjU5OCwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MWMtNC44ODItNC44ODItMTIuNzk2LTQuODgyLTE3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTYsMCwxNy42NzgmI3hkOyYjeGE7JiN4OTsmI3g5O2M0Ljg4Miw0Ljg4MSwxMi43OTYsNC44ODEsMTcuNjc4LDBDMjkuNzIsMTkuOTU3LDI5LjcyMSwxMi4wNDMsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU5LDAtNS4xNzEtMC45ODQtNy4xNDYtMi45NTkmI3hkOyYjeGE7JiN4OTsmI3g5O0M2Lj'+
			'g3OCwyMS4xNyw1Ljg5NSwxOC41OTEsNS44OTQsMTZjMC0yLjU5MSwwLjk4My01LjE3LDIuOTU5LTcuMTQ3YzEuOTc3LTEuOTc2LDQuNTU2LTIuOTU5LDcuMTQ4LTIuOTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MyLjU5MSwwLjAwMSw1LjE3LDAuOTg0LDcuMTQ3LDIuOTU5YzEuOTc1LDEuOTc3LDIuOTU3LDQuNTU2LDIuOTU5LDcuMTQ3Yy0wLjAwMSwyLjU5Mi0wLjk4NCw1LjE3LTIuOTYsNy4xNDgmI3hkOyYjeGE7JiN4OTsmI3g5O0MyMS4xNywyNS4xMjMsMTguNTkxLDI2LjEwNywxNiwyNi4xMDZ6IiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMC4yIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_info_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 1px;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_info_close.onclick=function (e) {
			player.setVariableValue('vis_info_popup', false);
		}
		me._ht_info_close.onmouseover=function (e) {
			me._ht_info_close__img.style.visibility='hidden';
			me._ht_info_close__imgo.style.visibility='inherit';
		}
		me._ht_info_close.onmouseout=function (e) {
			me._ht_info_close__img.style.visibility='inherit';
			me._ht_info_close__imgo.style.visibility='hidden';
		}
		me._ht_info_close.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._ht_info_close);
		me.divSkin.appendChild(me._information);
		el=me._menu_background=document.createElement('div');
		el.ggId="menu_background";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #262626;';
		hs+='border : 0px solid #646464;';
		hs+='cursor : default;';
		hs+='height : 419px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 178px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._menu_background.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu_background.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('category_visible') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._menu_background.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._menu_background.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._menu_background.style[domTransition]='opacity 500ms ease 0ms';
				if (me._menu_background.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._menu_background.style.opacity == 0.0) { me._menu_background.style.visibility="hidden"; } }, 505);
					me._menu_background.style.opacity=0;
				}
				else {
					me._menu_background.style.visibility=me._menu_background.ggVisible?'inherit':'hidden';
					me._menu_background.style.opacity=1;
				}
			}
		}
		me._menu_background.ggUpdatePosition=function (useTransition) {
		}
		el=me._category_scroller=document.createElement('div');
		els=me._category_scroller__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		hs ='';
		hs+='height : 141px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 154px;';
		hs+="";
		els.setAttribute('style',hs);
		me._category_scroller.ggScrollByX = function(diffX) {
			if(!me._category_scroller.ggHorScrollVisible || diffX == 0 || me._category_scroller.ggHPercentVisible >= 1.0) return;
			me._category_scroller.ggScrollPosX = (me._category_scroller__horScrollFg.offsetLeft + diffX);
			me._category_scroller.ggScrollPosX = Math.max(me._category_scroller.ggScrollPosX, 0);
			me._category_scroller.ggScrollPosX = Math.min(me._category_scroller.ggScrollPosX, me._category_scroller__horScrollBg.offsetWidth - me._category_scroller__horScrollFg.offsetWidth);
			me._category_scroller__horScrollFg.style.left = me._category_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._category_scroller.ggScrollPosX / (me._category_scroller__horScrollBg.offsetWidth - me._category_scroller__horScrollFg.offsetWidth);
			me._category_scroller__content.style.left = -(Math.round((me._category_scroller.ggContentWidth * (1.0 - me._category_scroller.ggHPercentVisible)) * percentScrolled)) + me._category_scroller.ggContentLeftOffset + 'px';
			me._category_scroller.ggScrollPosXPercent = (me._category_scroller__horScrollFg.offsetLeft / me._category_scroller__horScrollBg.offsetWidth);
		}
		me._category_scroller.ggScrollByXSmooth = function(diffX) {
			if(!me._category_scroller.ggHorScrollVisible || diffX == 0 || me._category_scroller.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._category_scroller.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._category_scroller.ggScrollPosX >= me._category_scroller__horScrollBg.offsetWidth - me._category_scroller__horScrollFg.offsetWidth)) {
					me._category_scroller.ggScrollPosX = Math.min(me._category_scroller.ggScrollPosX, me._category_scroller__horScrollBg.offsetWidth - me._category_scroller__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._category_scroller.ggScrollPosX <= 0)) {
					me._category_scroller.ggScrollPosX = Math.max(me._category_scroller.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._category_scroller__horScrollFg.style.left = me._category_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._category_scroller.ggScrollPosX / (me._category_scroller__horScrollBg.offsetWidth - me._category_scroller__horScrollFg.offsetWidth);
			me._category_scroller__content.style.left = -(Math.round((me._category_scroller.ggContentWidth * (1.0 - me._category_scroller.ggHPercentVisible)) * percentScrolled)) + me._category_scroller.ggContentLeftOffset + 'px';
			me._category_scroller.ggScrollPosXPercent = (me._category_scroller__horScrollFg.offsetLeft / me._category_scroller__horScrollBg.offsetWidth);
			}, 10);
		}
		me._category_scroller.ggScrollByY = function(diffY) {
			if(!me._category_scroller.ggVertScrollVisible || diffY == 0 || me._category_scroller.ggVPercentVisible >= 1.0) return;
			me._category_scroller.ggScrollPosY = (me._category_scroller__vertScrollFg.offsetTop + diffY);
			me._category_scroller.ggScrollPosY = Math.max(me._category_scroller.ggScrollPosY, 0);
			me._category_scroller.ggScrollPosY = Math.min(me._category_scroller.ggScrollPosY, me._category_scroller__vertScrollBg.offsetHeight - me._category_scroller__vertScrollFg.offsetHeight);
			me._category_scroller__vertScrollFg.style.top = me._category_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._category_scroller.ggScrollPosY / (me._category_scroller__vertScrollBg.offsetHeight - me._category_scroller__vertScrollFg.offsetHeight);
			me._category_scroller__content.style.top = -(Math.round((me._category_scroller.ggContentHeight * (1.0 - me._category_scroller.ggVPercentVisible)) * percentScrolled)) + me._category_scroller.ggContentTopOffset + 'px';
			me._category_scroller.ggScrollPosYPercent = (me._category_scroller__vertScrollFg.offsetTop / me._category_scroller__vertScrollBg.offsetHeight);
		}
		me._category_scroller.ggScrollByYSmooth = function(diffY) {
			if(!me._category_scroller.ggVertScrollVisible || diffY == 0 || me._category_scroller.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._category_scroller.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._category_scroller.ggScrollPosY >= me._category_scroller__vertScrollBg.offsetHeight - me._category_scroller__vertScrollFg.offsetHeight)) {
					me._category_scroller.ggScrollPosY = Math.min(me._category_scroller.ggScrollPosY, me._category_scroller__vertScrollBg.offsetHeight - me._category_scroller__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._category_scroller.ggScrollPosY <= 0)) {
					me._category_scroller.ggScrollPosY = Math.max(me._category_scroller.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._category_scroller__vertScrollFg.style.top = me._category_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._category_scroller.ggScrollPosY / (me._category_scroller__vertScrollBg.offsetHeight - me._category_scroller__vertScrollFg.offsetHeight);
			me._category_scroller__content.style.top = -(Math.round((me._category_scroller.ggContentHeight * (1.0 - me._category_scroller.ggVPercentVisible)) * percentScrolled)) + me._category_scroller.ggContentTopOffset + 'px';
			me._category_scroller.ggScrollPosYPercent = (me._category_scroller__vertScrollFg.offsetTop / me._category_scroller__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._category_scroller.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._category_scroller.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._category_scroller.ggHPercentVisible);
					me._category_scroller.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._category_scroller.clientWidth - (me._category_scroller.ggVertScrollVisible ? 10 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._category_scroller.clientWidth - (me._category_scroller.ggVertScrollVisible ? 10 : 0))) * me._category_scroller.ggHPercentVisible);
					me._category_scroller.ggScrollByXSmooth(diffX);
				}
			}
			if (me._category_scroller.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._category_scroller.ggVPercentVisible);
					me._category_scroller.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._category_scroller.clientHeight - (me._category_scroller.ggHorScrollVisible ? 10 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._category_scroller.clientHeight - (me._category_scroller.ggHorScrollVisible ? 10 : 0))) * me._category_scroller.ggVPercentVisible);
					me._category_scroller.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._category_scroller.ggDragLastX = t ? t[0].clientX : e.clientX;
			me._category_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
			me._category_scroller__content.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._category_scroller.ggDragInertiaX *= 0.65;
					me._category_scroller.ggDragInertiaY *= 0.65;
					me._category_scroller.ggScrollByX(me._category_scroller.ggDragInertiaX);
					me._category_scroller.ggScrollByY(me._category_scroller.ggDragInertiaY);
					if (Math.abs(me._category_scroller.ggDragInertiaX) < 1.0 && Math.abs(me._category_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				me._category_scroller__content.ontouchend = null;
				me._category_scroller__content.ontouchmove = null;
				me._category_scroller__content.onpointerup = null;
				me._category_scroller__content.onpointermove = null;
			}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			me._category_scroller__content.onpointerup = me._category_scroller__content.ontouchend;
		}
			me._category_scroller__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = ((t ? t[0].clientX : e.clientX) - me._category_scroller.ggDragLastX) * me._category_scroller.ggHPercentVisible;
				var diffY = ((t ? t[0].clientY : e.clientY) - me._category_scroller.ggDragLastY) * me._category_scroller.ggVPercentVisible;
				me._category_scroller.ggDragInertiaX = -diffX;
				me._category_scroller.ggDragInertiaY = -diffY;
				me._category_scroller.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._category_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._category_scroller.ggScrollByX(-diffX);
				me._category_scroller.ggScrollByY(-diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._category_scroller__content.onpointermove = me._category_scroller__content.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = els.ontouchstart;
		}
		elHorScrollBg = me._category_scroller__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 165px; height: 10px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._category_scroller__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 165px; height: 10px; background-color: rgba(255,226,111,1); pointer-events: auto;');
		me._category_scroller.ggScrollPosX = 0;
		me._category_scroller.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._category_scroller.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._category_scroller.ggDragInertiaX *= 0.65;
					me._category_scroller.ggScrollByX(me._category_scroller.ggDragInertiaX);
					if (Math.abs(me._category_scroller.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._category_scroller.ggDragLastX;
				me._category_scroller.ggDragInertiaX = diffX;
				me._category_scroller.ggDragLastX = e.clientX;
				me._category_scroller.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._category_scroller.ggDragLastX = t ? t[0].clientX : e.clientX;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._category_scroller.ggDragInertiaX *= 0.65;
					me._category_scroller.ggScrollByX(me._category_scroller.ggDragInertiaX);
					if (Math.abs(me._category_scroller.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me._category_scroller.ggDragLastX;
				me._category_scroller.ggDragInertiaX = diffX;
				me._category_scroller.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._category_scroller.ggScrollByX(diffX);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elHorScrollFg.onpointerdown = elHorScrollFg.ontouchstart;
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._category_scroller.ggScrollWidth;
			if (e.offsetX < me._category_scroller.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._category_scroller.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._category_scroller__horScrollBg.getBoundingClientRect();
			var diffX = me._category_scroller.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._category_scroller.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._category_scroller.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me._category_scroller.ggScrollByXSmooth(30 * me._category_scroller.ggHPercentVisible * wheelDelta);
		});
		elVertScrollBg = me._category_scroller__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 10px; height: 341px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._category_scroller__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 10px; height: 341px; background-color: rgba(255,226,111,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._category_scroller.ggScrollPosY = 0;
		me._category_scroller.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._category_scroller.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._category_scroller.ggDragInertiaY *= 0.65;
					me._category_scroller.ggScrollByY(me._category_scroller.ggDragInertiaY);
					if (Math.abs(me._category_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._category_scroller.ggDragLastY;
				me._category_scroller.ggDragInertiaY = diffY;
				me._category_scroller.ggDragLastY = e.clientY;
				me._category_scroller.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._category_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._category_scroller.ggDragInertiaY *= 0.65;
					me._category_scroller.ggScrollByY(me._category_scroller.ggDragInertiaY);
					if (Math.abs(me._category_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._category_scroller.ggDragLastY;
				me._category_scroller.ggDragInertiaY = diffY;
				me._category_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._category_scroller.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._category_scroller.ggScrollHeight;
			if (e.offsetY < me._category_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._category_scroller.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._category_scroller__vertScrollBg.getBoundingClientRect();
			var diffY = me._category_scroller.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._category_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._category_scroller.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._category_scroller.ggScrollByYSmooth(30 * me._category_scroller.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._category_scroller__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 10px; height: 10px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="category_scroller";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 341px;';
		hs+='left : 5px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 48px;';
		hs+='visibility : inherit;';
		hs+='width : 165px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._category_scroller.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._category_scroller.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				this.ggContentWidth = 0;
				this.ggContentHeight = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none') {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				var contentWidth = maxX - minX;
				var contentHeight = maxY - minY;
				this.ggContentWidth = contentWidth;
				this.ggContentHeight = contentHeight;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.width = contentWidth + 'px';
				this.ggContent.style.height = contentHeight + 'px';
				this.ggContent.style.left = -(Math.round(me._category_scroller.ggScrollPosX / me._category_scroller.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._category_scroller.ggScrollPosY / me._category_scroller.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if (contentWidth > Math.ceil(offsetWidthWithScale)) {
					me._category_scroller__horScrollBg.style.visibility = 'inherit';
					me._category_scroller__horScrollFg.style.visibility = 'inherit';
					me._category_scroller.ggHorScrollVisible = true;
				} else {
					me._category_scroller__horScrollBg.style.visibility = 'hidden';
					me._category_scroller__horScrollFg.style.visibility = 'hidden';
					me._category_scroller.ggHorScrollVisible = false;
				}
				if ((me._category_scroller.ggHorScrollVisible && contentHeight > this.clientHeight - 10) || (!me._category_scroller.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._category_scroller__vertScrollBg.style.visibility = 'inherit';
					me._category_scroller__vertScrollFg.style.visibility = 'inherit';
					me._category_scroller.ggVertScrollVisible = true;
					if (!me._category_scroller.ggHorScrollVisible && (contentWidth > offsetWidthWithScale - me._category_scroller__vertScrollBg.getBoundingClientRect().width)) {
						me._category_scroller__horScrollBg.style.visibility = 'inherit';
						me._category_scroller__horScrollFg.style.visibility = 'inherit';
						me._category_scroller.ggHorScrollVisible = true;
					}
				} else {
					me._category_scroller__vertScrollBg.style.visibility = 'hidden';
					me._category_scroller__vertScrollFg.style.visibility = 'hidden';
					me._category_scroller.ggVertScrollVisible = false;
				}
				if(me._category_scroller.ggHorScrollVisible) {
					me._category_scroller.ggAvailableHeight = me._category_scroller.clientHeight - 10;
					if (me._category_scroller.ggVertScrollVisible) {
						me._category_scroller.ggAvailableWidth = me._category_scroller.clientWidth - 10;
						me._category_scroller.ggAvailableWidthWithScale = me._category_scroller.getBoundingClientRect().width - me._category_scroller__horScrollBg.getBoundingClientRect().height;
					} else {
						me._category_scroller.ggAvailableWidth = me._category_scroller.clientWidth;
						me._category_scroller.ggAvailableWidthWithScale = me._category_scroller.getBoundingClientRect().width;
					}
					me._category_scroller__horScrollBg.style.width = me._category_scroller.ggAvailableWidth + 'px';
					me._category_scroller.ggHPercentVisible = contentWidth != 0 ? me._category_scroller.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me._category_scroller.ggHPercentVisible > 1.0) me._category_scroller.ggHPercentVisible = 1.0;
					me._category_scroller.ggScrollWidth = Math.round(me._category_scroller__horScrollBg.offsetWidth * me._category_scroller.ggHPercentVisible);
					me._category_scroller__horScrollFg.style.width = me._category_scroller.ggScrollWidth + 'px';
					me._category_scroller.ggScrollPosX = me._category_scroller.ggScrollPosXPercent * me._category_scroller.ggAvailableWidth;
					me._category_scroller.ggScrollPosX = Math.min(me._category_scroller.ggScrollPosX, me._category_scroller__horScrollBg.offsetWidth - me._category_scroller__horScrollFg.offsetWidth);
					me._category_scroller__horScrollFg.style.left = me._category_scroller.ggScrollPosX + 'px';
					if (me._category_scroller.ggHPercentVisible < 1.0) {
						let percentScrolled = me._category_scroller.ggScrollPosX / (me._category_scroller__horScrollBg.offsetWidth - me._category_scroller__horScrollFg.offsetWidth);
						me._category_scroller__content.style.left = -(Math.round((me._category_scroller.ggContentWidth * (1.0 - me._category_scroller.ggHPercentVisible)) * percentScrolled)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me._category_scroller.ggAvailableHeight = me._category_scroller.clientHeight;
					me._category_scroller.ggScrollPosX = 0;
					me._category_scroller.ggScrollPosXPercent = 0.0;
					me._category_scroller__content.style.left = this.ggContentLeftOffset + 'px';
				}
				if(me._category_scroller.ggVertScrollVisible) {
					me._category_scroller.ggAvailableWidth = me._category_scroller.clientWidth - 10;
					if (me._category_scroller.ggHorScrollVisible) {
						me._category_scroller.ggAvailableHeight = me._category_scroller.clientHeight - 10;
						me._category_scroller.ggAvailableHeightWithScale = me._category_scroller.getBoundingClientRect().height - me._category_scroller__vertScrollBg.getBoundingClientRect().width;
						me._category_scroller__cornerBg.style.visibility = 'inherit';
					} else {
						me._category_scroller.ggAvailableHeight = me._category_scroller.clientHeight;
						me._category_scroller.ggAvailableHeightWithScale = me._category_scroller.getBoundingClientRect().height;
						me._category_scroller__cornerBg.style.visibility = 'hidden';
					}
					me._category_scroller__vertScrollBg.style.height = me._category_scroller.ggAvailableHeight + 'px';
					me._category_scroller.ggVPercentVisible = contentHeight != 0 ? me._category_scroller.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._category_scroller.ggVPercentVisible > 1.0) me._category_scroller.ggVPercentVisible = 1.0;
					me._category_scroller.ggScrollHeight =  Math.round(me._category_scroller__vertScrollBg.offsetHeight * me._category_scroller.ggVPercentVisible);
					me._category_scroller__vertScrollFg.style.height = me._category_scroller.ggScrollHeight + 'px';
					me._category_scroller.ggScrollPosY = me._category_scroller.ggScrollPosYPercent * me._category_scroller.ggAvailableHeight;
					me._category_scroller.ggScrollPosY = Math.min(me._category_scroller.ggScrollPosY, me._category_scroller__vertScrollBg.offsetHeight - me._category_scroller__vertScrollFg.offsetHeight);
					me._category_scroller__vertScrollFg.style.top = me._category_scroller.ggScrollPosY + 'px';
					if (me._category_scroller.ggVPercentVisible < 1.0) {
						let percentScrolled = me._category_scroller.ggScrollPosY / (me._category_scroller__vertScrollBg.offsetHeight - me._category_scroller__vertScrollFg.offsetHeight);
						me._category_scroller__content.style.top = -(Math.round((me._category_scroller.ggContentHeight * (1.0 - me._category_scroller.ggVPercentVisible)) * percentScrolled)) + me._category_scroller.ggContentTopOffset + 'px';
					}
				} else {
					me._category_scroller.ggAvailableWidth = me._category_scroller.clientWidth;
					me._category_scroller.ggScrollPosY = 0;
					me._category_scroller.ggScrollPosYPercent = 0.0;
					me._category_scroller__content.style.top = this.ggContentTopOffset + 'px';
					me._category_scroller__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._category_scroller.ggHorScrollVisible || vertScrollWasVisible != me._category_scroller.ggVertScrollVisible) {
					me.updateSize(me._category_scroller);
					me._category_scroller.ggUpdatePosition();
				}
			}
		}
		el=me._category_cloner=document.createElement('div');
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggWidth = 150;
		el.ggHeight = 128;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		me._category_cloner.callChildLogicBlocks_changenode = function(){
			if(me._category_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._category_cloner.ggInstances.length; i++) {
					if (me._category_cloner.ggInstances[i]._category && me._category_cloner.ggInstances[i]._category.logicBlock_backgroundcolor) {
						me._category_cloner.ggInstances[i]._category.logicBlock_backgroundcolor();
					}
					me._category_cloner.ggInstances[i]._node_cloner.callChildLogicBlocks_changenode();
				}
			}
		}
		me._category_cloner.callChildLogicBlocks_mouseover = function(){
			if(me._category_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._category_cloner.ggInstances.length; i++) {
					if (me._category_cloner.ggInstances[i]._category && me._category_cloner.ggInstances[i]._category.logicBlock_backgroundcolor) {
						me._category_cloner.ggInstances[i]._category.logicBlock_backgroundcolor();
					}
				}
			}
		}
		me._category_cloner.callChildLogicBlocks_active = function(){
			if(me._category_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._category_cloner.ggInstances.length; i++) {
					me._category_cloner.ggInstances[i]._node_cloner.callChildLogicBlocks_active();
				}
			}
		}
		me._category_cloner.callChildLogicBlocks_changevisitednodes = function(){
			if(me._category_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._category_cloner.ggInstances.length; i++) {
					me._category_cloner.ggInstances[i]._node_cloner.callChildLogicBlocks_changevisitednodes();
				}
			}
		}
		me._category_cloner.callChildLogicBlocks_activehotspotchanged = function(){
			if(me._category_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._category_cloner.ggInstances.length; i++) {
					me._category_cloner.ggInstances[i]._node_cloner.callChildLogicBlocks_activehotspotchanged();
				}
			}
		}
		me._category_cloner.callChildLogicBlocks_varchanged_open_tag = function(){
			if(me._category_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._category_cloner.ggInstances.length; i++) {
					if (me._category_cloner.ggInstances[i]._category && me._category_cloner.ggInstances[i]._category.logicBlock_backgroundcolor) {
						me._category_cloner.ggInstances[i]._category.logicBlock_backgroundcolor();
					}
				}
			}
		}
		el.ggAutoPosition = function(init) {
			var currYPos = 0;
			var numElements = me._category_cloner.ggInstances.length;
			var currElement = 0;
			for (var i=0; i<me._category_cloner.ggNumRows; i++) {
				var rowMaxHeight = 0;
				for (var j=0; j<me._category_cloner.ggNumCols; j++) {
					if (numElements > currElement) {
						if (!init) {
							if (me._category_cloner.childNodes[currElement].clientHeight < me._category_cloner.childNodes[currElement].scrollHeight && currElement < (numElements - 1)) {
								me._category_cloner.childNodes[currElement].style.transition = 'top ' + 1.5 + 's, height ' + 1.5 + 's';
							} else {
								me._category_cloner.childNodes[currElement].style.transition = 'top ' + 1.5 + 's';
							}
						}
						me._category_cloner.childNodes[currElement].style.overflow = 'hidden';
						me._category_cloner.childNodes[currElement].style['top'] = currYPos + 'px';
						me._category_cloner.childNodes[currElement].style['height'] ='0px';
						rowMaxHeight = Math.max(rowMaxHeight, me._category_cloner.childNodes[currElement].scrollHeight);
						me._category_cloner.childNodes[currElement].style['height'] = rowMaxHeight + 'px';
					}
					currElement++;
				}
				currYPos += rowMaxHeight;
			}
			setTimeout(function() {
				var p = me._category_cloner.parentElement;
				while (p != null && p !== me.divSkin) {
					if (p.ggType && p.ggType == 'scrollarea') {
						if (p.ggUpdatePosition) {
							p.ggUpdatePosition();
						}
					}
					p = p.parentElement;
				}
			}, 1500);
		}
		el.ggUpdate = function(filter) {
			if(me._category_cloner.ggUpdating == true) return;
			me._category_cloner.ggUpdating = true;
			var el=me._category_cloner;
			var curNumCols = 0;
			curNumCols = me._category_cloner.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._category_cloner.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var firstNode;
			for (var i=0; i < el.ggTagTable.length; i++) {
				var cItem = el.ggTagTable[i];
				firstNode = '';
				cItem.nodecount = 0;
				for (var j=0; j < tourNodes.length; j++) {
					var nodeData = player.getNodeUserdata(tourNodes[j]);
					if ((nodeData['tags'].indexOf(cItem.tag) != -1) || (cItem.tag=='')) {
						var passed = true;
						if (filter.length > 0) {
							for (var k=0; k < filter.length; k++) {
								if (nodeData['tags'].indexOf(filter[k]) == -1) passed = false;
							}
						}
						if (passed) {
							cItem.nodecount++;
							if (firstNode == '') firstNode = tourNodes[j];
						}
					}
				}
				cItem.firstnode=firstNode;
				if (cItem.nodecount == 0) continue;
				var nodeId = {};
				nodeId['tag'] = cItem.tag;
				nodeId['title'] = cItem.title;
				nodeId['nodecount'] = cItem.nodecount;
				nodeId['firstnode'] = cItem.firstnode;
				var parameter={};
				parameter.top=(row * me._category_cloner.ggHeight) + 'px';
				parameter.left=(column * me._category_cloner.ggWidth) + 'px';
				parameter.width=me._category_cloner.ggWidth + 'px';
				parameter.height=me._category_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				var inst = new SkinCloner_category_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				inst.__div.style['height'] = '0px';
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._category_cloner.callChildLogicBlocks_changenode();
			me._category_cloner.callChildLogicBlocks_mouseover();
			me._category_cloner.callChildLogicBlocks_active();
			me._category_cloner.callChildLogicBlocks_changevisitednodes();
			me._category_cloner.callChildLogicBlocks_activehotspotchanged();
			me._category_cloner.callChildLogicBlocks_varchanged_open_tag();
			me._category_cloner.ggAutoPosition(true);
			me._category_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._category_cloner.parentNode.classList.contains('ggskin_subelement') && me._category_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._category_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggTagTable = [
			{tag:"START",title:"\u06a9\u0627\u0631\u062e\u0627\u0646\u0647 \u0627\u0644\u06a9\u062a\u0631\u0648\u0645\u0648\u062a\u0648\u0631 \u062c\u0645\u06a9\u0648"},
			{tag:"هوایی",title:"\u062a\u0635\u0627\u0648\u06cc\u0631 \u0647\u0648\u0627\u06cc\u06cc"},
			{tag:"110",title:"\u0633\u0627\u0644\u0646 \u0645\u0648\u0646\u062a\u0627\u0698 \u0641\u0634\u0627\u0631\u0636\u0639\u06cc\u0641"},
			{tag:"120",title:"\u0633\u0627\u0644\u0646 \u0645\u0648\u0646\u062a\u0627\u0698 \u0641\u0634\u0627\u0631\u0642\u0648\u06cc"},
			{tag:"HOTEL",title:"\u0645\u06cc\u0647\u0645\u0627\u0646 \u0633\u0631\u0627"},
			];
		el.ggId="category_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 128px;';
		hs+='left : 5px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._category_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._category_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._category_cloner.childNodes.length; i++) {
				var child=me._category_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._category_cloner.ggUpdatePosition=function (useTransition) {
				me._category_cloner.ggUpdate();
		}
		me._category_cloner.ggNodeChange=function () {
			me._category_cloner.ggUpdateConditionNodeChange();
		}
		me._category_scroller__content.appendChild(me._category_cloner);
		me._menu_background.appendChild(me._category_scroller);
		el=me._text_1=document.createElement('div');
		els=me._text_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 19px;';
		hs+='position : absolute;';
		hs+='top : 394px;';
		hs+='visibility : inherit;';
		hs+='width : 138px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 1px solid #262626;';
		hs+='color: rgba(255,218,107,1);';
		hs+='font-size: 11px;';
		hs+='font-weight: lighter;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="POWER BY PARESH TEAM";
		el.appendChild(els);
		me._text_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_1.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((140-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._menu_background.appendChild(me._text_1);
		me.divSkin.appendChild(me._menu_background);
		el=me._menu_open=document.createElement('div');
		els=me._menu_open__img=document.createElement('img');
		els.className='ggskin ggskin_menu_open';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAyCAYAAAATIfj2AAACaUlEQVRoge2av09TURiGn1tEpcXeaKM2kVxJRxxYDAImClITGJBN/wamO6mDhh9FjcLERIwzCa0DIZBAoCDWKP4FhkBs4MRJbeUUIpTlOkjT2qkUk9Oe3Gc64/su3/nOe17DETYAhjV+G+gHugGT6kACC8CEI+z3AIYjbAxrfDhkmQMvHrfT3XEV89wZtTJLRO5mWVjd5snoJ75uyxFH2AMG0BWyzPjnmQdcDNSp1lgWP9P73LgXJSlkuAYYe/Mq3HS9+bJqXWXjraulIVhPbG7TZwBSfun3++tPq9Z1IjJ7h5hNExmPaiH/Gw+wtJQQqnWcmCMPS9oNBY8j7OWkkJHWvijR2Q3kbla1vpKRu1misxu09kVJCjniCHvZ0PJi1Qktp5xWuIYqHddQpe'+
			'MaqnS0M3QqdzCs8ZvkV5+AMkXHI0V+9fkI+UxhqLHBP/jsYRvdHY0Ezp9VK7NEUr8OWFjd4unYGlvfMsOOsIcMoDNkmStrM/e5FPCq1lgW31O/aeuLkRSyqwYYff2y61pLc1C1rrLxeWu5EvTx1s0UqgAPsLiY2Fat48QUZgp3Qpa5XM2Zwo/Ufu4ZHvY4wl5JChlp6Z1icnqd9M6Ban0lk945YHJ6nZbeKZJCRoozhdzF2gNcUCn0GKSBeYovVp3QcspphWuo0nENVTquoUpHO0OFmcIt8qtPNX2n5FafBBT1FJ4/aqens7p6CvPv/vYUjpbTQS2+JAufD1r0FHxet6dQPWjTU4h/EABxLYZCQU/h7j89hdjcJpm9Q9X6Siazd0hsbrOwpxAvzBQ6yIf1foU6j0OGfFi/CvAHvIs0yfjejxoAAAAASUVORK5CYII='+
			'';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQYAAADTCAYAAABjsb0UAAADaUlEQVR4nO3dwa6CMBAF0Cn6/19swtuIEcdi+xJibM/ZUombud4mUEtcotfa/Qng20rP4mvHWoEAv2ub36aAaAkGgQDjaAqIpfEmwFgOZ7vWGAQCjK/aHt41BqEAc0kz/2krAUzoNRi0BZjTbvaX2gVgOo8MsJUAki0YtAUg4p4FGgOQLKEtAHurxgAkPS9R/dt6U0rgbOXa9QLlIY0BSAQDkAgGIBEMQCIYgEQwAIlgAJISF08+AnsaA5AIBiBZovOPKIDhFY0BSLZg0BqAiHsWaAxA8hwMWgPM7ZEBr41BOMCcdrNvKwEk74JBa4C5pJmvHe22LfS4NIyrWgI+bSW0BxjT4Wy3HAarPcA4mn7se06JFhDwu7R/AAAAAAAAAAAAAAAAAAAAAAAAAA'+
			'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4mhKX7s+sJ3wP4FylZ/G1Y61AgN+1zW9TQLQEg0CAcTQFxNJ4E2Ash7NdawwCAcZXbQ/vGoNQgLmkmf+0lQAm9BoM2gLMaTf7S+0CMJ1HBthKAMkWDNoCEHHPAo0BSJbQFoC9VWMAEsEAJD1vV/7berNbgbOVa9eb1Yc0BiARDEAiGIBEMACJYAASwQAkggFISlw8Eg3saQxAskTnH1EAwysaA5BswaA1ABH3LNAYgOQ5GLQGmNsjA14bg3CAOe1m31YCSN4Fg9YAc0kzXzvBaVvoqUgYV7UEfNpKaA8wpsPZbjnzUXuAcTT92PccBisg4Hdp/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8DUlLt2fWU/4HsC5'+
			'Ss/ia8dagQC/a5vfpoBoCQaBAONoCoil8SbAWA5nu9YYBAKMr9oe3jUGoQBzSTP/aSsBTOg1GLQFmNNu9pfaBWA6jwywlQCSLRi0BSDingUaA5AsoS0Ae6vGACQ9L1F1WW+KCJytXLtemmymMQCJYAASwQAkggFIBAOQCAYgEQxAUuLiyUdgT2MAEsEAJEt0/hEFMLyiMQDJFgxaAxBxzwKNAUieg0FrgLk9MuC1MQgHmNNu9m0lgORdMGgNMJc087Wj3baFHpeGcVVLwKethPYAYzqc7ZbDYLUHGEfTj33PKdECAn5XV/v/A9LfTxKCniOJAAAAAElFTkSuQmCC';
		me._menu_open__img.ggDownSrc=hs;
		el.ggId="menu_open";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._menu_open.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu_open.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('category_visible') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._menu_open.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._menu_open.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._menu_open.style[domTransition]='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._menu_open.ggCurrentLogicStatePosition == 0) {
					me._menu_open.style.left='140px';
					me._menu_open.style.top='12px';
				}
				else {
					me._menu_open.style.left='10px';
					me._menu_open.style.top='12px';
				}
			}
		}
		me._menu_open.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['menu_open'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((player.getVariableValue('category_visible') == false))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._menu_open.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._menu_open.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._menu_open.style[domTransition]='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._menu_open.ggCurrentLogicStateAlpha == 0) {
					me._menu_open.style.visibility=me._menu_open.ggVisible?'inherit':'hidden';
					me._menu_open.style.opacity=1;
				}
				else if (me._menu_open.ggCurrentLogicStateAlpha == 1) {
					me._menu_open.style.visibility=me._menu_open.ggVisible?'inherit':'hidden';
					me._menu_open.style.opacity=0.6;
				}
				else {
					me._menu_open.style.visibility=me._menu_open.ggVisible?'inherit':'hidden';
					me._menu_open.style.opacity=1;
				}
			}
		}
		me._menu_open.onclick=function (e) {
			player.setVariableValue('category_visible', !player.getVariableValue('category_visible'));
		}
		me._menu_open.onmouseover=function (e) {
			me.elementMouseOver['menu_open']=true;
			me._menu_open.logicBlock_alpha();
		}
		me._menu_open.onmouseout=function (e) {
			me.elementMouseOver['menu_open']=false;
			me._menu_open.logicBlock_alpha();
		}
		me._menu_open.onmousedown=function (e) {
			me._menu_open__img.src=me._menu_open__img.ggDownSrc;
		}
		me._menu_open.onmouseup=function (e) {
			me._menu_open__img.src=me._menu_open__img.ggNormalSrc;
		}
		me._menu_open.ontouchend=function (e) {
			me.elementMouseOver['menu_open']=false;
			me._menu_open.logicBlock_alpha();
		}
		me._menu_open.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._menu_open);
		el=me._image_2=document.createElement('div');
		els=me._image_2__img=document.createElement('img');
		els.className='ggskin ggskin_image_2';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 188px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 292px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._loading_text=document.createElement('div');
		els=me._loading_text__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="loading text";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._loading_text.ggUpdateText=function() {
			var hs="<b>"+(player.getPercentLoaded()*100.0).toFixed(0)+"%<\/b>";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._loading_text.ggUpdateText();
		player.addListener('downloadprogress', function() {
			me._loading_text.ggUpdateText();
		});
		el.appendChild(els);
		me._loading_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loading_text.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._image_2.appendChild(me._loading_text);
		me.divSkin.appendChild(me._image_2);
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
		player.addListener('configloaded', function() {
			me._thumbnail_cloner.ggUpdate();
			me._category_cloner.ggUpdate();
		});
		player.addListener('imagesready', function() {
			me._thumbnail_menu.ggUpdatePosition();
			me._category_scroller.ggUpdatePosition();
			me._image_2.style[domTransition]='none';
			me._image_2.style.visibility='hidden';
			me._image_2.ggVisible=false;
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	me.callChildLogicBlocksHotspot_ht_node_1_changenode = function(){
		if(hotspotTemplates['ht_node_1']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node_1'].length; i++) {
				if (hotspotTemplates['ht_node_1'][i]._chevron_black_1 && hotspotTemplates['ht_node_1'][i]._chevron_black_1.logicBlock_visible) {
					hotspotTemplates['ht_node_1'][i]._chevron_black_1.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node_1'][i]._chevron_white_1 && hotspotTemplates['ht_node_1'][i]._chevron_white_1.logicBlock_visible) {
					hotspotTemplates['ht_node_1'][i]._chevron_white_1.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node_1'][i]._hs_preview_image_1 && hotspotTemplates['ht_node_1'][i]._hs_preview_image_1.logicBlock_alpha) {
					hotspotTemplates['ht_node_1'][i]._hs_preview_image_1.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node_1'][i]._tt_ht_3d_1 && hotspotTemplates['ht_node_1'][i]._tt_ht_3d_1.logicBlock_visible) {
					hotspotTemplates['ht_node_1'][i]._tt_ht_3d_1.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node_1'][i]._ht_node_customimage_1 && hotspotTemplates['ht_node_1'][i]._ht_node_customimage_1.logicBlock_visible) {
					hotspotTemplates['ht_node_1'][i]._ht_node_customimage_1.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node_1'][i]._hs_tt_1 && hotspotTemplates['ht_node_1'][i]._hs_tt_1.logicBlock_visible) {
					hotspotTemplates['ht_node_1'][i]._hs_tt_1.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_1_configloaded = function(){
		if(hotspotTemplates['ht_node_1']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node_1'].length; i++) {
				if (hotspotTemplates['ht_node_1'][i]._hs_preview_image_1 && hotspotTemplates['ht_node_1'][i]._hs_preview_image_1.logicBlock_alpha) {
					hotspotTemplates['ht_node_1'][i]._hs_preview_image_1.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node_1'][i]._tt_ht_3d_1 && hotspotTemplates['ht_node_1'][i]._tt_ht_3d_1.logicBlock_visible) {
					hotspotTemplates['ht_node_1'][i]._tt_ht_3d_1.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_1_mouseover = function(){
		if(hotspotTemplates['ht_node_1']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node_1'].length; i++) {
				if (hotspotTemplates['ht_node_1'][i]._chevron_black_1 && hotspotTemplates['ht_node_1'][i]._chevron_black_1.logicBlock_alpha) {
					hotspotTemplates['ht_node_1'][i]._chevron_black_1.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node_1'][i]._chevron_white_1 && hotspotTemplates['ht_node_1'][i]._chevron_white_1.logicBlock_alpha) {
					hotspotTemplates['ht_node_1'][i]._chevron_white_1.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node_1'][i]._hs_preview_image_1 && hotspotTemplates['ht_node_1'][i]._hs_preview_image_1.logicBlock_alpha) {
					hotspotTemplates['ht_node_1'][i]._hs_preview_image_1.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node_1'][i]._tt_ht_3d_1 && hotspotTemplates['ht_node_1'][i]._tt_ht_3d_1.logicBlock_visible) {
					hotspotTemplates['ht_node_1'][i]._tt_ht_3d_1.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_1_active = function(){
		if(hotspotTemplates['ht_node_1']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node_1'].length; i++) {
				if (hotspotTemplates['ht_node_1'][i]._hs_visited_1 && hotspotTemplates['ht_node_1'][i]._hs_visited_1.logicBlock_visible) {
					hotspotTemplates['ht_node_1'][i]._hs_visited_1.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_1_changevisitednodes = function(){
		if(hotspotTemplates['ht_node_1']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node_1'].length; i++) {
				if (hotspotTemplates['ht_node_1'][i]._hs_visited_1 && hotspotTemplates['ht_node_1'][i]._hs_visited_1.logicBlock_visible) {
					hotspotTemplates['ht_node_1'][i]._hs_visited_1.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_1_activehotspotchanged = function(){
		if(hotspotTemplates['ht_node_1']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node_1'].length; i++) {
				if (hotspotTemplates['ht_node_1'][i]._chevron_black_1 && hotspotTemplates['ht_node_1'][i]._chevron_black_1.logicBlock_visible) {
					hotspotTemplates['ht_node_1'][i]._chevron_black_1.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node_1'][i]._chevron_white_1 && hotspotTemplates['ht_node_1'][i]._chevron_white_1.logicBlock_visible) {
					hotspotTemplates['ht_node_1'][i]._chevron_white_1.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node_1'][i]._tt_ht_3d_1 && hotspotTemplates['ht_node_1'][i]._tt_ht_3d_1.logicBlock_visible) {
					hotspotTemplates['ht_node_1'][i]._tt_ht_3d_1.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node_1'][i]._ht_node_customimage_1 && hotspotTemplates['ht_node_1'][i]._ht_node_customimage_1.logicBlock_visible) {
					hotspotTemplates['ht_node_1'][i]._ht_node_customimage_1.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node_1'][i]._hs_tt_1 && hotspotTemplates['ht_node_1'][i]._hs_tt_1.logicBlock_visible) {
					hotspotTemplates['ht_node_1'][i]._hs_tt_1.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_1_varchanged_opt_3d_preview_2 = function(){
		if(hotspotTemplates['ht_node_1']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node_1'].length; i++) {
				if (hotspotTemplates['ht_node_1'][i]._hs_preview_image_1 && hotspotTemplates['ht_node_1'][i]._hs_preview_image_1.logicBlock_alpha) {
					hotspotTemplates['ht_node_1'][i]._hs_preview_image_1.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node_1'][i]._tt_ht_3d_1 && hotspotTemplates['ht_node_1'][i]._tt_ht_3d_1.logicBlock_visible) {
					hotspotTemplates['ht_node_1'][i]._tt_ht_3d_1.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_changenode = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._chevron_black && hotspotTemplates['ht_node'][i]._chevron_black.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._chevron_black.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._chevron_white && hotspotTemplates['ht_node'][i]._chevron_white.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._chevron_white.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._hs_preview_image && hotspotTemplates['ht_node'][i]._hs_preview_image.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._hs_preview_image.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_3d && hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._ht_node_customimage && hotspotTemplates['ht_node'][i]._ht_node_customimage.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_node_customimage.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._hs_tt && hotspotTemplates['ht_node'][i]._hs_tt.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._hs_tt.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_configloaded = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hs_preview_image && hotspotTemplates['ht_node'][i]._hs_preview_image.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._hs_preview_image.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_3d && hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_mouseover = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._chevron_black && hotspotTemplates['ht_node'][i]._chevron_black.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._chevron_black.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._chevron_white && hotspotTemplates['ht_node'][i]._chevron_white.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._chevron_white.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._hs_preview_image && hotspotTemplates['ht_node'][i]._hs_preview_image.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._hs_preview_image.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_3d && hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_active = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hs_visited && hotspotTemplates['ht_node'][i]._hs_visited.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._hs_visited.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_changevisitednodes = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hs_visited && hotspotTemplates['ht_node'][i]._hs_visited.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._hs_visited.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_activehotspotchanged = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._chevron_black && hotspotTemplates['ht_node'][i]._chevron_black.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._chevron_black.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._chevron_white && hotspotTemplates['ht_node'][i]._chevron_white.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._chevron_white.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_3d && hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._ht_node_customimage && hotspotTemplates['ht_node'][i]._ht_node_customimage.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_node_customimage.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._hs_tt && hotspotTemplates['ht_node'][i]._hs_tt.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._hs_tt.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_varchanged_opt_3d_preview_2 = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hs_preview_image && hotspotTemplates['ht_node'][i]._hs_preview_image.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._hs_preview_image.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_3d && hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_hotspot_1_sizechanged = function(){
		if(hotspotTemplates['Hotspot 1']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot 1'].length; i++) {
				if (hotspotTemplates['Hotspot 1'][i]._hotspot_1.logicBlock_visible) {
					hotspotTemplates['Hotspot 1'][i]._hotspot_1.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_hotspot_1_changenode = function(){
		if(hotspotTemplates['Hotspot 1']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot 1'].length; i++) {
				if (hotspotTemplates['Hotspot 1'][i]._hotspot_1.logicBlock_visible) {
					hotspotTemplates['Hotspot 1'][i]._hotspot_1.logicBlock_visible();
				}
				if (hotspotTemplates['Hotspot 1'][i]._tt_ht_node && hotspotTemplates['Hotspot 1'][i]._tt_ht_node.logicBlock_visible) {
					hotspotTemplates['Hotspot 1'][i]._tt_ht_node.logicBlock_visible();
				}
				if (hotspotTemplates['Hotspot 1'][i]._rectangle_10 && hotspotTemplates['Hotspot 1'][i]._rectangle_10.logicBlock_scaling) {
					hotspotTemplates['Hotspot 1'][i]._rectangle_10.logicBlock_scaling();
				}
				if (hotspotTemplates['Hotspot 1'][i]._rectangle_10 && hotspotTemplates['Hotspot 1'][i]._rectangle_10.logicBlock_alpha) {
					hotspotTemplates['Hotspot 1'][i]._rectangle_10.logicBlock_alpha();
				}
				if (hotspotTemplates['Hotspot 1'][i]._rectangle_20 && hotspotTemplates['Hotspot 1'][i]._rectangle_20.logicBlock_scaling) {
					hotspotTemplates['Hotspot 1'][i]._rectangle_20.logicBlock_scaling();
				}
				if (hotspotTemplates['Hotspot 1'][i]._rectangle_20 && hotspotTemplates['Hotspot 1'][i]._rectangle_20.logicBlock_alpha) {
					hotspotTemplates['Hotspot 1'][i]._rectangle_20.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_hotspot_1_configloaded = function(){
		if(hotspotTemplates['Hotspot 1']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot 1'].length; i++) {
				if (hotspotTemplates['Hotspot 1'][i]._tt_ht_node && hotspotTemplates['Hotspot 1'][i]._tt_ht_node.logicBlock_visible) {
					hotspotTemplates['Hotspot 1'][i]._tt_ht_node.logicBlock_visible();
				}
				if (hotspotTemplates['Hotspot 1'][i]._tt_ht_node && hotspotTemplates['Hotspot 1'][i]._tt_ht_node.logicBlock_position) {
					hotspotTemplates['Hotspot 1'][i]._tt_ht_node.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_hotspot_1_mouseover = function(){
		if(hotspotTemplates['Hotspot 1']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot 1'].length; i++) {
				if (hotspotTemplates['Hotspot 1'][i]._tt_ht_node && hotspotTemplates['Hotspot 1'][i]._tt_ht_node.logicBlock_visible) {
					hotspotTemplates['Hotspot 1'][i]._tt_ht_node.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_hotspot_1_hastouch = function(){
		if(hotspotTemplates['Hotspot 1']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot 1'].length; i++) {
				if (hotspotTemplates['Hotspot 1'][i]._tt_ht_node && hotspotTemplates['Hotspot 1'][i]._tt_ht_node.logicBlock_position) {
					hotspotTemplates['Hotspot 1'][i]._tt_ht_node.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_hotspot_1_activehotspotchanged = function(){
		if(hotspotTemplates['Hotspot 1']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot 1'].length; i++) {
				if (hotspotTemplates['Hotspot 1'][i]._tt_ht_node && hotspotTemplates['Hotspot 1'][i]._tt_ht_node.logicBlock_visible) {
					hotspotTemplates['Hotspot 1'][i]._tt_ht_node.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_hotspot_1_varchanged_vis_info_popup = function(){
		if(hotspotTemplates['Hotspot 1']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot 1'].length; i++) {
				if (hotspotTemplates['Hotspot 1'][i]._hotspot_1.logicBlock_visible) {
					hotspotTemplates['Hotspot 1'][i]._hotspot_1.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_hotspot_1_varchanged_opt_hotspot_preview_1 = function(){
		if(hotspotTemplates['Hotspot 1']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot 1'].length; i++) {
				if (hotspotTemplates['Hotspot 1'][i]._tt_ht_node && hotspotTemplates['Hotspot 1'][i]._tt_ht_node.logicBlock_visible) {
					hotspotTemplates['Hotspot 1'][i]._tt_ht_node.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_hotspot_1_varchanged_ht_anim = function(){
		if(hotspotTemplates['Hotspot 1']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot 1'].length; i++) {
				if (hotspotTemplates['Hotspot 1'][i]._rectangle_10 && hotspotTemplates['Hotspot 1'][i]._rectangle_10.logicBlock_scaling) {
					hotspotTemplates['Hotspot 1'][i]._rectangle_10.logicBlock_scaling();
				}
				if (hotspotTemplates['Hotspot 1'][i]._rectangle_10 && hotspotTemplates['Hotspot 1'][i]._rectangle_10.logicBlock_alpha) {
					hotspotTemplates['Hotspot 1'][i]._rectangle_10.logicBlock_alpha();
				}
				if (hotspotTemplates['Hotspot 1'][i]._rectangle_20 && hotspotTemplates['Hotspot 1'][i]._rectangle_20.logicBlock_scaling) {
					hotspotTemplates['Hotspot 1'][i]._rectangle_20.logicBlock_scaling();
				}
				if (hotspotTemplates['Hotspot 1'][i]._rectangle_20 && hotspotTemplates['Hotspot 1'][i]._rectangle_20.logicBlock_alpha) {
					hotspotTemplates['Hotspot 1'][i]._rectangle_20.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_changenode = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._ht_info_image && hotspotTemplates['ht_info'][i]._ht_info_image.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._ht_info_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_info'][i]._ht_info_customimage && hotspotTemplates['ht_info'][i]._ht_info_customimage.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._ht_info_customimage.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_configloaded = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._tt_information && hotspotTemplates['ht_info'][i]._tt_information.logicBlock_position) {
					hotspotTemplates['ht_info'][i]._tt_information.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_mouseover = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._tt_information && hotspotTemplates['ht_info'][i]._tt_information.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._tt_information.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_hastouch = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._tt_information && hotspotTemplates['ht_info'][i]._tt_information.logicBlock_position) {
					hotspotTemplates['ht_info'][i]._tt_information.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_activehotspotchanged = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._ht_info_image && hotspotTemplates['ht_info'][i]._ht_info_image.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._ht_info_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_info'][i]._ht_info_customimage && hotspotTemplates['ht_info'][i]._ht_info_customimage.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._ht_info_customimage.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_hotspot_2_sizechanged = function(){
		if(hotspotTemplates['Hotspot 2']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot 2'].length; i++) {
				if (hotspotTemplates['Hotspot 2'][i]._hotspot_2.logicBlock_visible) {
					hotspotTemplates['Hotspot 2'][i]._hotspot_2.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_hotspot_2_changenode = function(){
		if(hotspotTemplates['Hotspot 2']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot 2'].length; i++) {
				if (hotspotTemplates['Hotspot 2'][i]._hotspot_2.logicBlock_visible) {
					hotspotTemplates['Hotspot 2'][i]._hotspot_2.logicBlock_visible();
				}
				if (hotspotTemplates['Hotspot 2'][i]._tt_ht_node2 && hotspotTemplates['Hotspot 2'][i]._tt_ht_node2.logicBlock_visible) {
					hotspotTemplates['Hotspot 2'][i]._tt_ht_node2.logicBlock_visible();
				}
				if (hotspotTemplates['Hotspot 2'][i]._rectangle_1 && hotspotTemplates['Hotspot 2'][i]._rectangle_1.logicBlock_scaling) {
					hotspotTemplates['Hotspot 2'][i]._rectangle_1.logicBlock_scaling();
				}
				if (hotspotTemplates['Hotspot 2'][i]._rectangle_1 && hotspotTemplates['Hotspot 2'][i]._rectangle_1.logicBlock_alpha) {
					hotspotTemplates['Hotspot 2'][i]._rectangle_1.logicBlock_alpha();
				}
				if (hotspotTemplates['Hotspot 2'][i]._rectangle_2 && hotspotTemplates['Hotspot 2'][i]._rectangle_2.logicBlock_scaling) {
					hotspotTemplates['Hotspot 2'][i]._rectangle_2.logicBlock_scaling();
				}
				if (hotspotTemplates['Hotspot 2'][i]._rectangle_2 && hotspotTemplates['Hotspot 2'][i]._rectangle_2.logicBlock_alpha) {
					hotspotTemplates['Hotspot 2'][i]._rectangle_2.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_hotspot_2_configloaded = function(){
		if(hotspotTemplates['Hotspot 2']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot 2'].length; i++) {
				if (hotspotTemplates['Hotspot 2'][i]._tt_ht_node2 && hotspotTemplates['Hotspot 2'][i]._tt_ht_node2.logicBlock_visible) {
					hotspotTemplates['Hotspot 2'][i]._tt_ht_node2.logicBlock_visible();
				}
				if (hotspotTemplates['Hotspot 2'][i]._tt_ht_node2 && hotspotTemplates['Hotspot 2'][i]._tt_ht_node2.logicBlock_position) {
					hotspotTemplates['Hotspot 2'][i]._tt_ht_node2.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_hotspot_2_mouseover = function(){
		if(hotspotTemplates['Hotspot 2']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot 2'].length; i++) {
				if (hotspotTemplates['Hotspot 2'][i]._tt_ht_node2 && hotspotTemplates['Hotspot 2'][i]._tt_ht_node2.logicBlock_visible) {
					hotspotTemplates['Hotspot 2'][i]._tt_ht_node2.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_hotspot_2_hastouch = function(){
		if(hotspotTemplates['Hotspot 2']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot 2'].length; i++) {
				if (hotspotTemplates['Hotspot 2'][i]._tt_ht_node2 && hotspotTemplates['Hotspot 2'][i]._tt_ht_node2.logicBlock_position) {
					hotspotTemplates['Hotspot 2'][i]._tt_ht_node2.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_hotspot_2_activehotspotchanged = function(){
		if(hotspotTemplates['Hotspot 2']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot 2'].length; i++) {
				if (hotspotTemplates['Hotspot 2'][i]._tt_ht_node2 && hotspotTemplates['Hotspot 2'][i]._tt_ht_node2.logicBlock_visible) {
					hotspotTemplates['Hotspot 2'][i]._tt_ht_node2.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_hotspot_2_varchanged_vis_info_popup = function(){
		if(hotspotTemplates['Hotspot 2']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot 2'].length; i++) {
				if (hotspotTemplates['Hotspot 2'][i]._hotspot_2.logicBlock_visible) {
					hotspotTemplates['Hotspot 2'][i]._hotspot_2.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_hotspot_2_varchanged_opt_hotspot_preview_1 = function(){
		if(hotspotTemplates['Hotspot 2']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot 2'].length; i++) {
				if (hotspotTemplates['Hotspot 2'][i]._tt_ht_node2 && hotspotTemplates['Hotspot 2'][i]._tt_ht_node2.logicBlock_visible) {
					hotspotTemplates['Hotspot 2'][i]._tt_ht_node2.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_hotspot_2_varchanged_ht_anim = function(){
		if(hotspotTemplates['Hotspot 2']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot 2'].length; i++) {
				if (hotspotTemplates['Hotspot 2'][i]._rectangle_1 && hotspotTemplates['Hotspot 2'][i]._rectangle_1.logicBlock_scaling) {
					hotspotTemplates['Hotspot 2'][i]._rectangle_1.logicBlock_scaling();
				}
				if (hotspotTemplates['Hotspot 2'][i]._rectangle_1 && hotspotTemplates['Hotspot 2'][i]._rectangle_1.logicBlock_alpha) {
					hotspotTemplates['Hotspot 2'][i]._rectangle_1.logicBlock_alpha();
				}
				if (hotspotTemplates['Hotspot 2'][i]._rectangle_2 && hotspotTemplates['Hotspot 2'][i]._rectangle_2.logicBlock_scaling) {
					hotspotTemplates['Hotspot 2'][i]._rectangle_2.logicBlock_scaling();
				}
				if (hotspotTemplates['Hotspot 2'][i]._rectangle_2 && hotspotTemplates['Hotspot 2'][i]._rectangle_2.logicBlock_alpha) {
					hotspotTemplates['Hotspot 2'][i]._rectangle_2.logicBlock_alpha();
				}
			}
		}
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
		if (me.elementMouseDown['button_image_right']) {
			player.changePanLog(-0.5,true);
		}
		if (me.elementMouseDown['button_image_left']) {
			player.changePanLog(0.5,true);
		}
		if (me.elementMouseDown['button_image_down']) {
			player.changeTiltLog(-0.5,true);
		}
		if (me.elementMouseDown['button_image_up']) {
			player.changeTiltLog(0.5,true);
		}
		if (me._timer_1.ggLastIsActive!=me._timer_1.ggIsActive()) {
			me._timer_1.ggLastIsActive=me._timer_1.ggIsActive();
			if (me._timer_1.ggLastIsActive) {
				player.setVariableValue('ht_anim', true);
			} else {
				player.setVariableValue('ht_anim', false);
			}
		}
		if (me.elementMouseDown['more_not']) {
			me._more_not.style[domTransition]='none';
			me._more_not.style.visibility='hidden';
			me._more_not.ggVisible=false;
			me._container_3.style[domTransition]='none';
			me._container_3.style.visibility='hidden';
			me._container_3.ggVisible=false;
			me._container_2.style[domTransition]='none';
			me._container_2.style.visibility=(Number(me._container_2.style.opacity)>0||!me._container_2.style.opacity)?'inherit':'hidden';
			me._container_2.ggVisible=true;
			me._more.style[domTransition]='none';
			me._more.style.visibility=(Number(me._more.style.opacity)>0||!me._more.style.opacity)?'inherit':'hidden';
			me._more.ggVisible=true;
		}
		if (me.elementMouseDown['zoomout']) {
			player.changeFovLog(0.5,true);
		}
		if (me.elementMouseDown['zoomin']) {
			player.changeFovLog(-0.5,true);
		}
		if (me.elementMouseDown['more']) {
			me._container_3.style[domTransition]='none';
			me._container_3.style.visibility=(Number(me._container_3.style.opacity)>0||!me._container_3.style.opacity)?'inherit':'hidden';
			me._container_3.ggVisible=true;
			me._more.style[domTransition]='none';
			me._more.style.visibility='hidden';
			me._more.ggVisible=false;
			me._container_2.style[domTransition]='none';
			me._container_2.style.visibility='hidden';
			me._container_2.ggVisible=false;
			me._more_not.style[domTransition]='none';
			me._more_not.style.visibility=(Number(me._more_not.style.opacity)>0||!me._more_not.style.opacity)?'inherit':'hidden';
			me._more_not.ggVisible=true;
		}
		if (!player.getLockedKeyboard()) {
			switch(me.skinKeyPressed) {
				case 37:
					player.changePanLog(0.5,true);
					break;
				case 38:
					player.changeTiltLog(0.5,true);
					break;
				case 39:
					player.changePanLog(-0.5,true);
					break;
				case 40:
					player.changeTiltLog(-0.5,true);
					break;
			}
		}
	};
	player.addListener('timer', me.skinTimerEvent);
	function SkinHotspotClass_ht_node_1(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node_1=document.createElement('div');
		el.ggId="ht_node_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 190px;';
		hs+='position : absolute;';
		hs+='top : 240px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		hs+='transform-style: preserve-3d;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node_1.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node_1.onclick=function (e) {
			player.openNext(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node_1.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node_1.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node_1']=true;
			me._chevron_black_1.logicBlock_alpha();
			me._chevron_white_1.logicBlock_alpha();
			me._hs_preview_image_1.logicBlock_alpha();
			me._tt_ht_3d_1.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node_1.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node_1']=false;
			me._chevron_black_1.logicBlock_alpha();
			me._chevron_white_1.logicBlock_alpha();
			me._hs_preview_image_1.logicBlock_alpha();
			me._tt_ht_3d_1.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node_1.ontouchend=function (e) {
			me.elementMouseOver['ht_node_1']=false;
			me._chevron_black_1.logicBlock_alpha();
			me._chevron_white_1.logicBlock_alpha();
			me._hs_preview_image_1.logicBlock_alpha();
			me._tt_ht_3d_1.logicBlock_visible();
		}
		me._ht_node_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._chevron_black_1=document.createElement('div');
		els=me._chevron_black_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMDAgMTAwMDsiIHZlcnNpb249IjEuMCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwMDAgMTAwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9Ij'+
			'BweCIgeT0iMHB4Ij4KIDxnPgogIDxwYXRoIGQ9Ik0zNC45LDQzOS43bDQwMC00MDFjMTcuOS0xNy45LDQxLjctMjUuNCw2NS4yLTI0YzIzLjQtMS40LDQ3LjIsNi4xLDY1LjEsMjRsNDAwLDQwMWMzMy4yLDMzLjMsMzMuMiw4Ny40LDAsMTIwLjcmI3hhOyYjeDk7JiN4OTtjLTMzLjIsMzMuMy04Ny4xLDMzLjMtMTIwLjQsMEw1MDAsMjE0LjdMMTU1LjIsNTYwLjRjLTMzLjIsMzMuMy04Ny4xLDMzLjMtMTIwLjQsMFMxLjcsNDczLDM0LjksNDM5Ljd6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._chevron_black_1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_black_1";
		el.ggDx=-11;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.4;';
		hs+='position : absolute;';
		hs+='top : -134px;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._chevron_black_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_black_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._chevron_black_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._chevron_black_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._chevron_black_1.style[domTransition]='opacity 500ms ease 0ms';
				if (me._chevron_black_1.ggCurrentLogicStateVisible == 0) {
					me._chevron_black_1.style.visibility="hidden";
					me._chevron_black_1.ggVisible=false;
				}
				else {
					me._chevron_black_1.style.visibility=(Number(me._chevron_black_1.style.opacity)>0||!me._chevron_black_1.style.opacity)?'inherit':'hidden';
					me._chevron_black_1.ggVisible=true;
				}
			}
		}
		me._chevron_black_1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node_1'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_black_1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_black_1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_black_1.style[domTransition]='opacity 500ms ease 0ms';
				if (me._chevron_black_1.ggCurrentLogicStateAlpha == 0) {
					me._chevron_black_1.style.visibility=me._chevron_black_1.ggVisible?'inherit':'hidden';
					me._chevron_black_1.style.opacity=1;
				}
				else {
					me._chevron_black_1.style.visibility=me._chevron_black_1.ggVisible?'inherit':'hidden';
					me._chevron_black_1.style.opacity=0.4;
				}
			}
		}
		me._chevron_black_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_node_1.appendChild(me._chevron_black_1);
		el=me._chevron_white_1=document.createElement('div');
		els=me._chevron_white_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMDAgMTAwMDsiIHZlcnNpb249IjEuMCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwMDAgMTAwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9Ij'+
			'BweCIgeT0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8Zz4KICA8cGF0aCBkPSJNMzQuOSw0MzkuN2w0MDAtNDAxYzE3LjktMTcuOSw0MS43LTI1LjQsNjUuMi0yNGMyMy40LTEuNCw0Ny4yLDYuMSw2NS4xLDI0bDQwMCw0MDEmI3hhOyYjeDk7JiN4OTtjMzMuMiwzMy4zLDMzLjIsODcuNCwwLDEyMC43Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDBMNTAwLDIxNC43TDE1NS4yLDU2MC40Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDAmI3hhOyYjeDk7JiN4OTtTMS43LDQ3MywzNC45LDQzOS43eiIgY2xhc3M9InN0MCIv'+
			'PgogPC9nPgo8L3N2Zz4K';
		me._chevron_white_1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_white_1";
		el.ggDx=-11;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -140px;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		hs+='transform:translate3d(0px,0px,1px);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._chevron_white_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_white_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._chevron_white_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._chevron_white_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._chevron_white_1.style[domTransition]='opacity 500ms ease 0ms';
				if (me._chevron_white_1.ggCurrentLogicStateVisible == 0) {
					me._chevron_white_1.style.visibility="hidden";
					me._chevron_white_1.ggVisible=false;
				}
				else {
					me._chevron_white_1.style.visibility=(Number(me._chevron_white_1.style.opacity)>0||!me._chevron_white_1.style.opacity)?'inherit':'hidden';
					me._chevron_white_1.ggVisible=true;
				}
			}
		}
		me._chevron_white_1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node_1'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_white_1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_white_1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_white_1.style[domTransition]='opacity 500ms ease 0ms';
				if (me._chevron_white_1.ggCurrentLogicStateAlpha == 0) {
					me._chevron_white_1.style.visibility=me._chevron_white_1.ggVisible?'inherit':'hidden';
					me._chevron_white_1.style.opacity=1;
				}
				else {
					me._chevron_white_1.style.visibility=me._chevron_white_1.ggVisible?'inherit':'hidden';
					me._chevron_white_1.style.opacity=1;
				}
			}
		}
		me._chevron_white_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_node_1.appendChild(me._chevron_white_1);
		el=me._hs_preview_image_1=document.createElement('div');
		els=me._hs_preview_image_1__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/hs_preview_image_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hs_preview_image_1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='z-index: -5;';
		hs+='height : 90px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -220px;';
		hs+='visibility : hidden;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		hs+='border-radius: 5px; overflow: hidden; box-shadow: 0px 0px 2px #000000; transform:translate3d(0px,0px,90px) rotateX(-90deg) scale(1.5); transform-style: preserve-3d; -webkit-backface-visibility: hidden; backface-visibility: hidden;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hs_preview_image_1.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._hs_preview_image_1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node_1'] == true)) && 
				((player.getVariableValue('opt_3d_preview_2') == true)) && 
				((player.getIsTour() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hs_preview_image_1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hs_preview_image_1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hs_preview_image_1.style[domTransition]='opacity 500ms ease 0ms';
				if (me._hs_preview_image_1.ggCurrentLogicStateAlpha == 0) {
					me._hs_preview_image_1.style.visibility=me._hs_preview_image_1.ggVisible?'inherit':'hidden';
					me._hs_preview_image_1.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._hs_preview_image_1.style.opacity == 0.0) { me._hs_preview_image_1.style.visibility="hidden"; } }, 505);
					me._hs_preview_image_1.style.opacity=0;
				}
			}
		}
		me._hs_preview_image_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._hs_tt_1=document.createElement('div');
		els=me._hs_tt_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="hs_tt_1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 140px;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.196078);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._hs_tt_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_tt_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.title == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_tt_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_tt_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_tt_1.style[domTransition]='';
				if (me._hs_tt_1.ggCurrentLogicStateVisible == 0) {
					me._hs_tt_1.style.visibility="hidden";
					me._hs_tt_1.ggVisible=false;
				}
				else {
					me._hs_tt_1.style.visibility=(Number(me._hs_tt_1.style.opacity)>0||!me._hs_tt_1.style.opacity)?'inherit':'hidden';
					me._hs_tt_1.ggVisible=true;
				}
			}
		}
		me._hs_tt_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._hs_preview_image_1.appendChild(me._hs_tt_1);
		el=me._hs_visited_1=document.createElement('div');
		els=me._hs_visited_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgLTI0MCAzMzIgMTMwIDEzMDsiIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbm'+
			'siIHg9IjBweCIgeT0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojMDAwMDAwO30mI3hkOwoJLnN0MXtmaWxsOiNGRkZGRkY7fSYjeGQ7Cjwvc3R5bGU+CiA8ZyBpZD0iTGF5ZXJfMV8xXyIvPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGQ9Ik0tMTIyLjEsMzQxLjVoLTEwNS44Yy0xLjQsMC0yLjYsMS4xLTIuNiwyLjZ2MTA1LjhjMCwxLjQsMS4xLDIuNiwyLjYsMi42aDEwNS44YzEuNCwwLDIuNi0xLjEsMi42LTIuNlYzNDQuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMTkuNiwzNDIuNy0xMjAuNywzNDEuNS0xMjIuMSwzNDEuNXogTS0xMzIuOCwzODEu'+
			'N2wtNTAuOCw1MC44Yy0wLjMsMC4zLTAuOCwwLjUtMS4yLDAuNWMtMC41LDAtMC45LTAuMS0xLjMtMC41bC0zMS43LTMxLjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC43LTAuNy0wLjctMS43LDAtMi40bDEyLjUtMTIuNWMwLjctMC43LDEuNy0wLjcsMi40LDBsMTgsMThsMzcuMS0zNy4xYzAuNy0wLjcsMS43LTAuNywyLjQsMGwxMi41LDEyLjUmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTMyLjEsMzc5LjktMTMyLjEsMzgxLTEzMi44LDM4MS43eiIgY2xhc3M9InN0MCIvPgogIDxwYXRoIGQ9Ik0tMTQ3LjcsMzY2LjhsLTM3LjEsMzcuMWwtMTgtMThjLTAuNy0wLjctMS43LTAuNy0yLjQsMGwtMTIuNS'+
			'wxMi41Yy0wLjcsMC43LTAuNywxLjcsMCwyLjRsMzEuNywzMS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLDAuMywwLjgsMC41LDEuMywwLjVjMC40LDAsMC45LTAuMiwxLjItMC41bDUwLjgtNTAuOWMwLjctMC43LDAuNy0xLjcsMC0yLjRsLTEyLjUtMTIuNUMtMTQ1LjksMzY2LjEtMTQ3LDM2Ni4xLTE0Ny43LDM2Ni44eiIgY2xhc3M9InN0MSIvPgogPC9nPgo8L3N2Zz4K';
		me._hs_visited_1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hs_visited_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 5px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hs_visited_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_visited_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._hs_visited_1.ggIsActive() == true)) || 
				((player.nodeVisited(me._hs_visited_1.ggElementNodeId()) == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_visited_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_visited_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_visited_1.style[domTransition]='';
				if (me._hs_visited_1.ggCurrentLogicStateVisible == 0) {
					me._hs_visited_1.style.visibility=(Number(me._hs_visited_1.style.opacity)>0||!me._hs_visited_1.style.opacity)?'inherit':'hidden';
					me._hs_visited_1.ggVisible=true;
				}
				else {
					me._hs_visited_1.style.visibility="hidden";
					me._hs_visited_1.ggVisible=false;
				}
			}
		}
		me._hs_visited_1.ggUpdatePosition=function (useTransition) {
		}
		me._hs_preview_image_1.appendChild(me._hs_visited_1);
		me._ht_node_1.appendChild(me._hs_preview_image_1);
		el=me.__code_1=document.createElement('div');
		els=me.__code_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="_code_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 37px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -39px;';
		hs+='visibility : hidden;';
		hs+='width : 66px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 68px;';
		hs+='height: 39px;';
		hs+='pointer-events: none;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
this.onUpdatePosition=function(player,hotspot) {
var vs=player.getViewerSize();
var y=vs.height * (1/6*(1+Math.cos(player.getTilt() * Math.PI/90.0)));
var hs= 'translate3d(0px,0px,-1000px) perspective(500px) translate3d(0px,' + (y) + 'px,0px) ';
hs += 'rotateZ(' + ( player.getRoll()).toFixed(10) + 'deg) ';
hs += 'rotateX(' + ( player.getTilt()).toFixed(10) + 'deg) ';
hs += 'rotateY(' + (-player.getPan()).toFixed(10)  + 'deg) ';
hs += 'rotateY(' + ( hotspot.pan).toFixed(2)  + 'deg) ';
hs += 'rotateX(' + (-hotspot.tilt).toFixed(2) + 'deg) ';
hs += 'rotateX(90deg) ';
this.__div.style.transform=hs;
this.__div.style.left = vs.width / 2 + "px";
this.__div.style.top = vs.height / 2 + "px";
};
		el.appendChild(els);
		me.__code_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__code_1.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_1.appendChild(me.__code_1);
		el=me._tt_ht_3d_1=document.createElement('div');
		els=me._tt_ht_3d_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_3d_1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -170px;';
		hs+='visibility : hidden;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		hs+='transform:translate3d(0px,0px,40px) rotateX(-90deg); font-size: 15px; -webkit-backface-visibility: hidden; backface-visibility: hidden;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.666667);';
		hs+='border: 1px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_3d_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_3d_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsTour() == false)) && 
				((me.hotspot.title != "")) && 
				((me.elementMouseOver['ht_node_1'] == true)) && 
				((player.getVariableValue('opt_3d_preview_2') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_3d_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_3d_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_3d_1.style[domTransition]='';
				if (me._tt_ht_3d_1.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_3d_1.style.visibility=(Number(me._tt_ht_3d_1.style.opacity)>0||!me._tt_ht_3d_1.style.opacity)?'inherit':'hidden';
					me._tt_ht_3d_1.ggVisible=true;
				}
				else {
					me._tt_ht_3d_1.style.visibility="hidden";
					me._tt_ht_3d_1.ggVisible=false;
				}
			}
		}
		me._tt_ht_3d_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((142-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_node_1.appendChild(me._tt_ht_3d_1);
		el=me._ht_node_customimage_1=document.createElement('div');
		els=me._ht_node_customimage_1__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._ht_node_customimage_1.ggUpdatePosition();}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_node_CustomImage_1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -140px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node_customimage_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_customimage_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_customimage_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_customimage_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_customimage_1.style[domTransition]='';
				if (me._ht_node_customimage_1.ggCurrentLogicStateVisible == 0) {
					me._ht_node_customimage_1.style.visibility="hidden";
					me._ht_node_customimage_1__img.src = '';
					me._ht_node_customimage_1.ggVisible=false;
				}
				else {
					me._ht_node_customimage_1.style.visibility=(Number(me._ht_node_customimage_1.style.opacity)>0||!me._ht_node_customimage_1.style.opacity)?'inherit':'hidden';
					me._ht_node_customimage_1.ggSubElement.src=me._ht_node_customimage_1.ggText;
					me._ht_node_customimage_1.ggVisible=true;
				}
			}
		}
		me._ht_node_customimage_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			var parentWidth = me._ht_node_customimage_1.clientWidth;
			var parentHeight = me._ht_node_customimage_1.clientHeight;
			var img = me._ht_node_customimage_1__img;
			var aspectRatioDiv = me._ht_node_customimage_1.clientWidth / me._ht_node_customimage_1.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._ht_node_1.appendChild(me._ht_node_customimage_1);
		if ((hotspot) && (hotspot.customimage)) {
			el.style.width=hotspot.customimagewidth + 'px';
			el.style.height=hotspot.customimageheight + 'px';
		}
		me.__div = me._ht_node_1;
	};
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 190px;';
		hs+='position : absolute;';
		hs+='top : 240px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		hs+='transform-style: preserve-3d;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.onclick=function (e) {
			player.openNext(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			me._chevron_black.logicBlock_alpha();
			me._chevron_white.logicBlock_alpha();
			me._hs_preview_image.logicBlock_alpha();
			me._tt_ht_3d.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node']=false;
			me._chevron_black.logicBlock_alpha();
			me._chevron_white.logicBlock_alpha();
			me._hs_preview_image.logicBlock_alpha();
			me._tt_ht_3d.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.ontouchend=function (e) {
			me.elementMouseOver['ht_node']=false;
			me._chevron_black.logicBlock_alpha();
			me._chevron_white.logicBlock_alpha();
			me._hs_preview_image.logicBlock_alpha();
			me._tt_ht_3d.logicBlock_visible();
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._chevron_black=document.createElement('div');
		els=me._chevron_black__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMDAgMTAwMDsiIHZlcnNpb249IjEuMCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwMDAgMTAwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9Ij'+
			'BweCIgeT0iMHB4Ij4KIDxnPgogIDxwYXRoIGQ9Ik0zNC45LDQzOS43bDQwMC00MDFjMTcuOS0xNy45LDQxLjctMjUuNCw2NS4yLTI0YzIzLjQtMS40LDQ3LjIsNi4xLDY1LjEsMjRsNDAwLDQwMWMzMy4yLDMzLjMsMzMuMiw4Ny40LDAsMTIwLjcmI3hhOyYjeDk7JiN4OTtjLTMzLjIsMzMuMy04Ny4xLDMzLjMtMTIwLjQsMEw1MDAsMjE0LjdMMTU1LjIsNTYwLjRjLTMzLjIsMzMuMy04Ny4xLDMzLjMtMTIwLjQsMFMxLjcsNDczLDM0LjksNDM5Ljd6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._chevron_black__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_black";
		el.ggDx=-11;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.4;';
		hs+='position : absolute;';
		hs+='top : -134px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._chevron_black.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_black.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._chevron_black.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._chevron_black.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._chevron_black.style[domTransition]='opacity 500ms ease 0ms';
				if (me._chevron_black.ggCurrentLogicStateVisible == 0) {
					me._chevron_black.style.visibility="hidden";
					me._chevron_black.ggVisible=false;
				}
				else {
					me._chevron_black.style.visibility=(Number(me._chevron_black.style.opacity)>0||!me._chevron_black.style.opacity)?'inherit':'hidden';
					me._chevron_black.ggVisible=true;
				}
			}
		}
		me._chevron_black.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_black.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_black.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_black.style[domTransition]='opacity 500ms ease 0ms';
				if (me._chevron_black.ggCurrentLogicStateAlpha == 0) {
					me._chevron_black.style.visibility=me._chevron_black.ggVisible?'inherit':'hidden';
					me._chevron_black.style.opacity=1;
				}
				else {
					me._chevron_black.style.visibility=me._chevron_black.ggVisible?'inherit':'hidden';
					me._chevron_black.style.opacity=0.4;
				}
			}
		}
		me._chevron_black.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_node.appendChild(me._chevron_black);
		el=me._chevron_white=document.createElement('div');
		els=me._chevron_white__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMDAgMTAwMDsiIHZlcnNpb249IjEuMCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwMDAgMTAwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9Ij'+
			'BweCIgeT0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8Zz4KICA8cGF0aCBkPSJNMzQuOSw0MzkuN2w0MDAtNDAxYzE3LjktMTcuOSw0MS43LTI1LjQsNjUuMi0yNGMyMy40LTEuNCw0Ny4yLDYuMSw2NS4xLDI0bDQwMCw0MDEmI3hhOyYjeDk7JiN4OTtjMzMuMiwzMy4zLDMzLjIsODcuNCwwLDEyMC43Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDBMNTAwLDIxNC43TDE1NS4yLDU2MC40Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDAmI3hhOyYjeDk7JiN4OTtTMS43LDQ3MywzNC45LDQzOS43eiIgY2xhc3M9InN0MCIv'+
			'PgogPC9nPgo8L3N2Zz4K';
		me._chevron_white__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_white";
		el.ggDx=-11;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -140px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		hs+='transform:translate3d(0px,0px,1px);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._chevron_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_white.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._chevron_white.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._chevron_white.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._chevron_white.style[domTransition]='opacity 500ms ease 0ms';
				if (me._chevron_white.ggCurrentLogicStateVisible == 0) {
					me._chevron_white.style.visibility="hidden";
					me._chevron_white.ggVisible=false;
				}
				else {
					me._chevron_white.style.visibility=(Number(me._chevron_white.style.opacity)>0||!me._chevron_white.style.opacity)?'inherit':'hidden';
					me._chevron_white.ggVisible=true;
				}
			}
		}
		me._chevron_white.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_white.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_white.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_white.style[domTransition]='opacity 500ms ease 0ms';
				if (me._chevron_white.ggCurrentLogicStateAlpha == 0) {
					me._chevron_white.style.visibility=me._chevron_white.ggVisible?'inherit':'hidden';
					me._chevron_white.style.opacity=1;
				}
				else {
					me._chevron_white.style.visibility=me._chevron_white.ggVisible?'inherit':'hidden';
					me._chevron_white.style.opacity=1;
				}
			}
		}
		me._chevron_white.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_node.appendChild(me._chevron_white);
		el=me._hs_preview_image=document.createElement('div');
		els=me._hs_preview_image__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/hs_preview_image_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hs_preview_image";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='z-index: -5;';
		hs+='height : 90px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -220px;';
		hs+='visibility : hidden;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		hs+='border-radius: 5px; overflow: hidden; box-shadow: 0px 0px 2px #000000; transform:translate3d(0px,0px,90px) rotateX(-90deg) scale(1.5); transform-style: preserve-3d; -webkit-backface-visibility: hidden; backface-visibility: hidden;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hs_preview_image.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._hs_preview_image.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true)) && 
				((player.getVariableValue('opt_3d_preview_2') == true)) && 
				((player.getIsTour() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hs_preview_image.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hs_preview_image.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hs_preview_image.style[domTransition]='opacity 500ms ease 0ms';
				if (me._hs_preview_image.ggCurrentLogicStateAlpha == 0) {
					me._hs_preview_image.style.visibility=me._hs_preview_image.ggVisible?'inherit':'hidden';
					me._hs_preview_image.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._hs_preview_image.style.opacity == 0.0) { me._hs_preview_image.style.visibility="hidden"; } }, 505);
					me._hs_preview_image.style.opacity=0;
				}
			}
		}
		me._hs_preview_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._hs_tt=document.createElement('div');
		els=me._hs_tt__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="hs_tt";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 140px;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.196078);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._hs_tt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_tt.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.title == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_tt.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_tt.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_tt.style[domTransition]='';
				if (me._hs_tt.ggCurrentLogicStateVisible == 0) {
					me._hs_tt.style.visibility="hidden";
					me._hs_tt.ggVisible=false;
				}
				else {
					me._hs_tt.style.visibility=(Number(me._hs_tt.style.opacity)>0||!me._hs_tt.style.opacity)?'inherit':'hidden';
					me._hs_tt.ggVisible=true;
				}
			}
		}
		me._hs_tt.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._hs_preview_image.appendChild(me._hs_tt);
		el=me._hs_visited=document.createElement('div');
		els=me._hs_visited__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgLTI0MCAzMzIgMTMwIDEzMDsiIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbm'+
			'siIHg9IjBweCIgeT0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojMDAwMDAwO30mI3hkOwoJLnN0MXtmaWxsOiNGRkZGRkY7fSYjeGQ7Cjwvc3R5bGU+CiA8ZyBpZD0iTGF5ZXJfMV8xXyIvPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGQ9Ik0tMTIyLjEsMzQxLjVoLTEwNS44Yy0xLjQsMC0yLjYsMS4xLTIuNiwyLjZ2MTA1LjhjMCwxLjQsMS4xLDIuNiwyLjYsMi42aDEwNS44YzEuNCwwLDIuNi0xLjEsMi42LTIuNlYzNDQuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMTkuNiwzNDIuNy0xMjAuNywzNDEuNS0xMjIuMSwzNDEuNXogTS0xMzIuOCwzODEu'+
			'N2wtNTAuOCw1MC44Yy0wLjMsMC4zLTAuOCwwLjUtMS4yLDAuNWMtMC41LDAtMC45LTAuMS0xLjMtMC41bC0zMS43LTMxLjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC43LTAuNy0wLjctMS43LDAtMi40bDEyLjUtMTIuNWMwLjctMC43LDEuNy0wLjcsMi40LDBsMTgsMThsMzcuMS0zNy4xYzAuNy0wLjcsMS43LTAuNywyLjQsMGwxMi41LDEyLjUmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTMyLjEsMzc5LjktMTMyLjEsMzgxLTEzMi44LDM4MS43eiIgY2xhc3M9InN0MCIvPgogIDxwYXRoIGQ9Ik0tMTQ3LjcsMzY2LjhsLTM3LjEsMzcuMWwtMTgtMThjLTAuNy0wLjctMS43LTAuNy0yLjQsMGwtMTIuNS'+
			'wxMi41Yy0wLjcsMC43LTAuNywxLjcsMCwyLjRsMzEuNywzMS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLDAuMywwLjgsMC41LDEuMywwLjVjMC40LDAsMC45LTAuMiwxLjItMC41bDUwLjgtNTAuOWMwLjctMC43LDAuNy0xLjcsMC0yLjRsLTEyLjUtMTIuNUMtMTQ1LjksMzY2LjEtMTQ3LDM2Ni4xLTE0Ny43LDM2Ni44eiIgY2xhc3M9InN0MSIvPgogPC9nPgo8L3N2Zz4K';
		me._hs_visited__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hs_visited";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 5px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hs_visited.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_visited.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._hs_visited.ggIsActive() == true)) || 
				((player.nodeVisited(me._hs_visited.ggElementNodeId()) == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_visited.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_visited.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_visited.style[domTransition]='';
				if (me._hs_visited.ggCurrentLogicStateVisible == 0) {
					me._hs_visited.style.visibility=(Number(me._hs_visited.style.opacity)>0||!me._hs_visited.style.opacity)?'inherit':'hidden';
					me._hs_visited.ggVisible=true;
				}
				else {
					me._hs_visited.style.visibility="hidden";
					me._hs_visited.ggVisible=false;
				}
			}
		}
		me._hs_visited.ggUpdatePosition=function (useTransition) {
		}
		me._hs_preview_image.appendChild(me._hs_visited);
		me._ht_node.appendChild(me._hs_preview_image);
		el=me.__code=document.createElement('div');
		els=me.__code__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="_code";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 37px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -39px;';
		hs+='visibility : hidden;';
		hs+='width : 66px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 68px;';
		hs+='height: 39px;';
		hs+='pointer-events: none;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
this.onUpdatePosition=function(player,hotspot) {
var vs=player.getViewerSize();
var y=vs.height * (1/6*(1+Math.cos(player.getTilt() * Math.PI/90.0)));
var hs= 'translate3d(0px,0px,-1000px) perspective(500px) translate3d(0px,' + (y) + 'px,0px) ';
hs += 'rotateZ(' + ( player.getRoll()).toFixed(10) + 'deg) ';
hs += 'rotateX(' + ( player.getTilt()).toFixed(10) + 'deg) ';
hs += 'rotateY(' + (-player.getPan()).toFixed(10)  + 'deg) ';
hs += 'rotateY(' + ( hotspot.pan).toFixed(2)  + 'deg) ';
hs += 'rotateX(' + (-hotspot.tilt).toFixed(2) + 'deg) ';
hs += 'rotateX(90deg) ';
this.__div.style.transform=hs;
this.__div.style.left = vs.width / 2 + "px";
this.__div.style.top = vs.height / 2 + "px";
};
		el.appendChild(els);
		me.__code.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__code.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me.__code);
		el=me._tt_ht_3d=document.createElement('div');
		els=me._tt_ht_3d__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_3d";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -170px;';
		hs+='visibility : hidden;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		hs+='transform:translate3d(0px,0px,40px) rotateX(-90deg); font-size: 15px; -webkit-backface-visibility: hidden; backface-visibility: hidden;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.666667);';
		hs+='border: 1px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_3d.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_3d.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsTour() == false)) && 
				((me.hotspot.title != "")) && 
				((me.elementMouseOver['ht_node'] == true)) && 
				((player.getVariableValue('opt_3d_preview_2') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_3d.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_3d.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_3d.style[domTransition]='';
				if (me._tt_ht_3d.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_3d.style.visibility=(Number(me._tt_ht_3d.style.opacity)>0||!me._tt_ht_3d.style.opacity)?'inherit':'hidden';
					me._tt_ht_3d.ggVisible=true;
				}
				else {
					me._tt_ht_3d.style.visibility="hidden";
					me._tt_ht_3d.ggVisible=false;
				}
			}
		}
		me._tt_ht_3d.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((142-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_node.appendChild(me._tt_ht_3d);
		el=me._ht_node_customimage=document.createElement('div');
		els=me._ht_node_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._ht_node_customimage.ggUpdatePosition();}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_node_CustomImage";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -140px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_customimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_customimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_customimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_customimage.style[domTransition]='';
				if (me._ht_node_customimage.ggCurrentLogicStateVisible == 0) {
					me._ht_node_customimage.style.visibility="hidden";
					me._ht_node_customimage__img.src = '';
					me._ht_node_customimage.ggVisible=false;
				}
				else {
					me._ht_node_customimage.style.visibility=(Number(me._ht_node_customimage.style.opacity)>0||!me._ht_node_customimage.style.opacity)?'inherit':'hidden';
					me._ht_node_customimage.ggSubElement.src=me._ht_node_customimage.ggText;
					me._ht_node_customimage.ggVisible=true;
				}
			}
		}
		me._ht_node_customimage.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			var parentWidth = me._ht_node_customimage.clientWidth;
			var parentHeight = me._ht_node_customimage.clientHeight;
			var img = me._ht_node_customimage__img;
			var aspectRatioDiv = me._ht_node_customimage.clientWidth / me._ht_node_customimage.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._ht_node.appendChild(me._ht_node_customimage);
		if ((hotspot) && (hotspot.customimage)) {
			el.style.width=hotspot.customimagewidth + 'px';
			el.style.height=hotspot.customimageheight + 'px';
		}
		me.__div = me._ht_node;
	};
	function SkinHotspotClass_hotspot_1(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hotspot_1=document.createElement('div');
		el.ggId="Hotspot 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 319px;';
		hs+='position : absolute;';
		hs+='top : 237px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot_1.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._hotspot_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_userdata') == true)) || 
				((player.getVariableValue('vis_info_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hotspot_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hotspot_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hotspot_1.style[domTransition]='';
				if (me._hotspot_1.ggCurrentLogicStateVisible == 0) {
					me._hotspot_1.style.visibility=(Number(me._hotspot_1.style.opacity)>0||!me._hotspot_1.style.opacity)?'inherit':'hidden';
					me._hotspot_1.ggVisible=true;
				}
				else {
					me._hotspot_1.style.visibility=(Number(me._hotspot_1.style.opacity)>0||!me._hotspot_1.style.opacity)?'inherit':'hidden';
					me._hotspot_1.ggVisible=true;
				}
			}
		}
		me._hotspot_1.onclick=function (e) {
			player.openNext(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_1.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_1.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me._tt_ht_node.style[domTransition]='none';
			me._tt_ht_node.style.visibility=(Number(me._tt_ht_node.style.opacity)>0||!me._tt_ht_node.style.opacity)?'inherit':'hidden';
			me._tt_ht_node.ggVisible=true;
			me.elementMouseOver['hotspot_1']=true;
			me._tt_ht_node.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_1.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me._tt_ht_node.style[domTransition]='none';
			me._tt_ht_node.style.visibility='hidden';
			me._tt_ht_node.ggVisible=false;
			me.elementMouseOver['hotspot_1']=false;
			me._tt_ht_node.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_1.ontouchend=function (e) {
			me.elementMouseOver['hotspot_1']=false;
			me._tt_ht_node.logicBlock_visible();
		}
		me._hotspot_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_image0=document.createElement('div');
		el.ggId="ht_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 44px;';
		hs+='left : -20px;';
		hs+='position : absolute;';
		hs+='top : -22px;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image0.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_10=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.4,sy:0.4 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='border : 4px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 35px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._rectangle_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_10.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_anim') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rectangle_10.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rectangle_10.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rectangle_10.style[domTransition]='' + cssPrefix + 'transform 750ms ease 0ms, opacity 750ms ease 0ms';
				if (me._rectangle_10.ggCurrentLogicStateScaling == 0) {
					me._rectangle_10.ggParameter.sx = 1;
					me._rectangle_10.ggParameter.sy = 1;
					me._rectangle_10.style[domTransform]=parameterToTransform(me._rectangle_10.ggParameter);
				}
				else {
					me._rectangle_10.ggParameter.sx = 0.4;
					me._rectangle_10.ggParameter.sy = 0.4;
					me._rectangle_10.style[domTransform]=parameterToTransform(me._rectangle_10.ggParameter);
				}
			}
		}
		me._rectangle_10.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_anim') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._rectangle_10.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._rectangle_10.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._rectangle_10.style[domTransition]='' + cssPrefix + 'transform 750ms ease 0ms, opacity 750ms ease 0ms';
				if (me._rectangle_10.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._rectangle_10.style.opacity == 0.0) { me._rectangle_10.style.visibility="hidden"; } }, 755);
					me._rectangle_10.style.opacity=0;
				}
				else {
					me._rectangle_10.style.visibility=me._rectangle_10.ggVisible?'inherit':'hidden';
					me._rectangle_10.style.opacity=1;
				}
			}
		}
		me._rectangle_10.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image0.appendChild(me._rectangle_10);
		el=me._rectangle_20=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.4,sy:0.4 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='border : 4px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 35px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._rectangle_20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_20.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_anim') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rectangle_20.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rectangle_20.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rectangle_20.style[domTransition]='' + cssPrefix + 'transform 750ms ease 0ms, opacity 750ms ease 0ms';
				if (me._rectangle_20.ggCurrentLogicStateScaling == 0) {
					me._rectangle_20.ggParameter.sx = 1;
					me._rectangle_20.ggParameter.sy = 1;
					me._rectangle_20.style[domTransform]=parameterToTransform(me._rectangle_20.ggParameter);
				}
				else {
					me._rectangle_20.ggParameter.sx = 0.4;
					me._rectangle_20.ggParameter.sy = 0.4;
					me._rectangle_20.style[domTransform]=parameterToTransform(me._rectangle_20.ggParameter);
				}
			}
		}
		me._rectangle_20.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_anim') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._rectangle_20.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._rectangle_20.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._rectangle_20.style[domTransition]='' + cssPrefix + 'transform 750ms ease 0ms, opacity 750ms ease 0ms';
				if (me._rectangle_20.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._rectangle_20.style.opacity == 0.0) { me._rectangle_20.style.visibility="hidden"; } }, 755);
					me._rectangle_20.style.opacity=0;
				}
				else {
					me._rectangle_20.style.visibility=me._rectangle_20.ggVisible?'inherit':'hidden';
					me._rectangle_20.style.opacity=1;
				}
			}
		}
		me._rectangle_20.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image0.appendChild(me._rectangle_20);
		me._hotspot_1.appendChild(me._ht_image0);
		el=me._tt_ht_node=document.createElement('div');
		els=me._tt_ht_node__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_node";
		el.ggDx=3;
		el.ggDy=25;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.666667);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_node.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_node.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_ht_node.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_ht_node.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_ht_node.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_node.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					this.ggDy = -47;
					me._tt_ht_node.ggUpdatePosition(true);
				}
				else {
					me._tt_ht_node.ggDx=3;
					me._tt_ht_node.ggDy=25;
					me._tt_ht_node.ggUpdatePosition(true);
				}
			}
		}
		me._tt_ht_node.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['hotspot_1'] == true)) && 
				((me.hotspot.title != "")) && 
				((player.getIsTour() == false)) && 
				((player.getVariableValue('opt_hotspot_preview_1') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((me.elementMouseOver['hotspot_1'] == true)) && 
				((me.hotspot.title != "")) && 
				((player.getIsTour() == true)) && 
				((player.getVariableValue('opt_hotspot_preview_1') == false))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((me.elementMouseOver['hotspot_1'] == true)) && 
				((me.hotspot.title != "")) && 
				((player.getIsTour() == false)) && 
				((player.getVariableValue('opt_hotspot_preview_1') == true))
			)
			{
				newLogicStateVisible = 2;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_node.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_node.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_node.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_node.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_node.style.visibility=(Number(me._tt_ht_node.style.opacity)>0||!me._tt_ht_node.style.opacity)?'inherit':'hidden';
					me._tt_ht_node.ggVisible=true;
				}
				else if (me._tt_ht_node.ggCurrentLogicStateVisible == 1) {
					me._tt_ht_node.style.visibility=(Number(me._tt_ht_node.style.opacity)>0||!me._tt_ht_node.style.opacity)?'inherit':'hidden';
					me._tt_ht_node.ggVisible=true;
				}
				else if (me._tt_ht_node.ggCurrentLogicStateVisible == 2) {
					me._tt_ht_node.style.visibility=(Number(me._tt_ht_node.style.opacity)>0||!me._tt_ht_node.style.opacity)?'inherit':'hidden';
					me._tt_ht_node.ggVisible=true;
				}
				else {
					me._tt_ht_node.style.visibility="hidden";
					me._tt_ht_node.ggVisible=false;
				}
			}
		}
		me._tt_ht_node.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._hotspot_1.appendChild(me._tt_ht_node);
		me.__div = me._hotspot_1;
	};
	function SkinHotspotClass_ht_info(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_info=document.createElement('div');
		el.ggId="ht_info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 94px;';
		hs+='position : absolute;';
		hs+='top : 211px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_info.onclick=function (e) {
			skin._info_title.ggText=me.hotspot.title;
			skin._info_title.ggTextDiv.innerHTML=skin._info_title.ggText;
			if (skin._info_title.ggUpdateText) {
				skin._info_title.ggUpdateText=function() {
					var hs=me.hotspot.title;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_title.ggUpdatePosition) {
				skin._info_title.ggUpdatePosition();
			}
			skin._info_title.ggTextDiv.scrollTop = 0;
			skin._info_text_body.ggText=me.hotspot.description;
			skin._info_text_body.ggTextDiv.innerHTML=skin._info_text_body.ggText;
			if (skin._info_text_body.ggUpdateText) {
				skin._info_text_body.ggUpdateText=function() {
					var hs=me.hotspot.description;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_text_body.ggUpdatePosition) {
				skin._info_text_body.ggUpdatePosition();
			}
			skin._info_text_body.ggTextDiv.scrollTop = 0;
			player.setVariableValue('vis_info_popup', true);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_info']=true;
			me._tt_information.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_info']=false;
			me._tt_information.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info.ontouchend=function (e) {
			me.elementMouseOver['ht_info']=false;
			me._tt_information.logicBlock_visible();
		}
		me._ht_info.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_image=document.createElement('div');
		els=me._ht_info_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgYmFzZVByb2ZpbGU9ImJhc2ljIiBoZWlnaHQ9IjMycHgiIHZlcnNpb249IjEuMSIgd2lkdGg9IjMycHgiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sOnNwYW'+
			'NlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ij4KIDxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0zLjUsMTZDMy41LDkuMDk2LDkuMDk2LDMuNSwxNiwzLjVsMCwwYzYuOTAzLDAsMTIuNDk5LDUuNTk2LDEyLjUsMTIuNWwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuMDAxLDYuOTAzLTUuNTk3LDEyLjQ5OS0xMi41LDEyLjVsMCwwQzkuMDk2LDI4LjQ5OSwzLjUsMjIuOTAzLDMuNSwxNkwzLjUsMTZ6IE04Ljg1NCw4'+
			'Ljg1MyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0M3LjAyMiwxMC42ODYsNS44OTQsMTMuMjA1LDUuODkzLDE2bDAsMGMwLjAwMSwyLjc5NSwxLjEyOSw1LjMxNCwyLjk2MSw3LjE0NmwwLDBjMS44MzIsMS44MzEsNC4zNTIsMi45Niw3LjE0NiwyLjk2bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MyLjc5NSwwLDUuMzE0LTEuMTI5LDcuMTQ3LTIuOTZsMCwwYzEuODMxLTEuODMyLDIuOTU5LTQuMzUyLDIuOTYtNy4xNDZsMCwwYy0wLjAwMS0yLjc5NS0xLjEyOS01LjMxNC0yLjk2LTcuMTQ3bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MyMS4zMTMsNy4wMj'+
			'IsMTguNzk1LDUuODkzLDE2LDUuODkybDAsMEMxMy4yMDUsNS44OTMsMTAuNjg2LDcuMDIyLDguODU0LDguODUzTDguODU0LDguODUzeiIvPgogIDwvZz4KICA8Zz4KICAgPHBhdGggZD0iTTE0Ljk2MywxMC4wNVY5LjUyMWMwLTAuNjYxLDAuNTM2LTEuMTk2LDEuMTk3LTEuMTk2bDAsMGMwLjY2LDAsMS4xOTYsMC41MzYsMS4xOTYsMS4xOTZsMCwwdjAuNTI5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAsMC42NjEtMC41MzYsMS4xOTYtMS4xOTYsMS4xOTZsMCwwQzE1LjUsMTEuMjQ3LDE0Ljk2MywxMC43MTEsMTQuOTYzLDEwLjA1TDE0Ljk2MywxMC4wNXoiLz4KICAgPGc+CiAgICA8'+
			'cGF0aCBkPSJNMTguNTMyLDIwLjM5MWgtMS4xNzZ2LTYuNDczYzAtMC4wMjEtMC4wMDUtMC4wNDItMC4wMDYtMC4wNjNjMC0wLjAxNCwwLjAwNC0wLjAyNiwwLjAwNC0wLjA0JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC0wLjY2MS0wLjUzNi0xLjE5Ni0xLjE5Ni0xLjE5NmgtMi4yMjZjLTAuNjYxLDAtMS4xOTcsMC41MzYtMS4xOTcsMS4xOTZjMCwwLjY2LDAuNTM2LDEuMTk2LDEuMTk3LDEuMTk2aDEuMDMxdjUuMzc5aC0xLjIwNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjY2MSwwLTEuMTk3LDAuNTM1LTEuMTk3LDEuMTk2YzAsMC42NiwwLjUzNi'+
			'wxLjE5NiwxLjE5NywxLjE5Nmg0Ljc3NWMwLjY2LDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MxOS43MjksMjAuOTI2LDE5LjE5MiwyMC4zOTEsMTguNTMyLDIwLjM5MXoiLz4KICAgPC9nPgogIDwvZz4KIDwvZz4KIDxnIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjIiPgogIDxnPgogICA8cGF0aCBkPSJNMy41LDE2QzMuNSw5LjA5Niw5LjA5NiwzLjUsMTYsMy41bDAsMGM2LjkwMywwLDEyLjQ5OSw1LjU5NiwxMi41LDEyLjVsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0w'+
			'LjAwMSw2LjkwMy01LjU5NywxMi40OTktMTIuNSwxMi41bDAsMEM5LjA5NiwyOC40OTksMy41LDIyLjkwMywzLjUsMTZMMy41LDE2eiBNOC44NTQsOC44NTMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtDNy4wMjIsMTAuNjg2LDUuODk0LDEzLjIwNSw1Ljg5MywxNmwwLDBjMC4wMDEsMi43OTUsMS4xMjksNS4zMTQsMi45NjEsNy4xNDZsMCwwYzEuODMyLDEuODMxLDQuMzUyLDIuOTYsNy4xNDYsMi45NmwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMi43OTUsMCw1LjMxNC0xLjEyOSw3LjE0Ny0yLjk2bDAsMGMxLjgzMS0xLjgzMiwyLjk1OS00LjM1MiwyLjk2LTcuMTQ2bD'+
			'AsMGMtMC4wMDEtMi43OTUtMS4xMjktNS4zMTQtMi45Ni03LjE0N2wwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtDMjEuMzEzLDcuMDIyLDE4Ljc5NSw1Ljg5MywxNiw1Ljg5MmwwLDBDMTMuMjA1LDUuODkzLDEwLjY4Niw3LjAyMiw4Ljg1NCw4Ljg1M0w4Ljg1NCw4Ljg1M3oiLz4KICA8L2c+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0xNC45NjMsMTAuMDVWOS41MjFjMC0wLjY2MSwwLjUzNi0xLjE5NiwxLjE5Ny0xLjE5NmwwLDBjMC42NiwwLDEuMTk2LDAuNTM2LDEuMTk2LDEuMTk2bDAsMHYwLjUyOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLDAuNjYxLTAuNTM2LDEuMTk2'+
			'LTEuMTk2LDEuMTk2bDAsMEMxNS41LDExLjI0NywxNC45NjMsMTAuNzExLDE0Ljk2MywxMC4wNUwxNC45NjMsMTAuMDV6Ii8+CiAgIDxnPgogICAgPHBhdGggZD0iTTE4LjUzMiwyMC4zOTFoLTEuMTc2di02LjQ3M2MwLTAuMDIxLTAuMDA1LTAuMDQyLTAuMDA2LTAuMDYzYzAtMC4wMTQsMC4wMDQtMC4wMjYsMC4wMDQtMC4wNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAtMC42NjEtMC41MzYtMS4xOTYtMS4xOTYtMS4xOTZoLTIuMjI2Yy0wLjY2MSwwLTEuMTk3LDAuNTM2LTEuMTk3LDEuMTk2YzAsMC42NiwwLjUzNiwxLjE5NiwxLjE5NywxLjE5NmgxLjAzMXY1LjM3OWgtMS'+
			'4yMDcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC42NjEsMC0xLjE5NywwLjUzNS0xLjE5NywxLjE5NmMwLDAuNjYsMC41MzYsMS4xOTYsMS4xOTcsMS4xOTZoNC43NzVjMC42NiwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7JiN4OTtDMTkuNzI5LDIwLjkyNiwxOS4xOTIsMjAuMzkxLDE4LjUzMiwyMC4zOTF6Ii8+CiAgIDwvZz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgYmFzZVByb2ZpbGU9ImJhc2ljIiBoZWlnaHQ9IjMycHgiIHZlcnNpb249IjEuMSIgd2lkdGg9IjMycHgiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sOnNwYW'+
			'NlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ij4KIDxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiIHN0cm9rZS13aWR0aD0iMS41Ij4KICA8Zz4KICAgPHBhdGggZD0iTTMuNSwxNkMzLjUsOS4wOTYsOS4wOTYsMy41LDE2LDMuNWwwLDBjNi45MDMsMCwxMi40OTksNS41OTYsMTIuNSwxMi41bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC4wMDEsNi45MDMtNS41OTcsMTIuNDk5LTEy'+
			'LjUsMTIuNWwwLDBDOS4wOTYsMjguNDk5LDMuNSwyMi45MDMsMy41LDE2TDMuNSwxNnogTTguODU0LDguODUzJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7QzcuMDIyLDEwLjY4Niw1Ljg5NCwxMy4yMDUsNS44OTMsMTZsMCwwYzAuMDAxLDIuNzk1LDEuMTI5LDUuMzE0LDIuOTYxLDcuMTQ2bDAsMGMxLjgzMiwxLjgzMSw0LjM1MiwyLjk2LDcuMTQ2LDIuOTZsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzIuNzk1LDAsNS4zMTQtMS4xMjksNy4xNDctMi45NmwwLDBjMS44MzEtMS44MzIsMi45NTktNC4zNTIsMi45Ni03LjE0NmwwLDBjLTAuMDAxLTIuNzk1LTEuMTI5LTUuMz'+
			'E0LTIuOTYtNy4xNDdsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7QzIxLjMxMyw3LjAyMiwxOC43OTUsNS44OTMsMTYsNS44OTJsMCwwQzEzLjIwNSw1Ljg5MywxMC42ODYsNy4wMjIsOC44NTQsOC44NTNMOC44NTQsOC44NTN6Ii8+CiAgPC9nPgogIDxnPgogICA8cGF0aCBkPSJNMTQuOTYzLDEwLjA1VjkuNTIxYzAtMC42NjEsMC41MzYtMS4xOTYsMS4xOTctMS4xOTZsMCwwYzAuNjYsMCwxLjE5NiwwLjUzNiwxLjE5NiwxLjE5NmwwLDB2MC41MjkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMCwwLjY2MS0wLjUzNiwxLjE5Ni0xLjE5NiwxLjE5NmwwLDBDMTUuNSwxMS4y'+
			'NDcsMTQuOTYzLDEwLjcxMSwxNC45NjMsMTAuMDVMMTQuOTYzLDEwLjA1eiIvPgogICA8Zz4KICAgIDxwYXRoIGQ9Ik0xOC41MzIsMjAuMzkxaC0xLjE3NnYtNi40NzNjMC0wLjAyMS0wLjAwNS0wLjA0Mi0wLjAwNi0wLjA2M2MwLTAuMDE0LDAuMDA0LTAuMDI2LDAuMDA0LTAuMDQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLTAuNjYxLTAuNTM2LTEuMTk2LTEuMTk2LTEuMTk2aC0yLjIyNmMtMC42NjEsMC0xLjE5NywwLjUzNi0xLjE5NywxLjE5NmMwLDAuNjYsMC41MzYsMS4xOTYsMS4xOTcsMS4xOTZoMS4wMzF2NS4zNzloLTEuMjA3JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3'+
			'g5OyYjeDk7JiN4OTtjLTAuNjYxLDAtMS4xOTcsMC41MzUtMS4xOTcsMS4xOTZjMCwwLjY2LDAuNTM2LDEuMTk2LDEuMTk3LDEuMTk2aDQuNzc1YzAuNjYsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5OyYjeDk7QzE5LjcyOSwyMC45MjYsMTkuMTkyLDIwLjM5MSwxOC41MzIsMjAuMzkxeiIvPgogICA8L2c+CiAgPC9nPgogPC9nPgogPGcgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjMDAwMDAwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiIHN0cm9rZS13aWR0aD0iMC4yIj4KICA8Zz4K'+
			'ICAgPHBhdGggZD0iTTMuNSwxNkMzLjUsOS4wOTYsOS4wOTYsMy41LDE2LDMuNWwwLDBjNi45MDMsMCwxMi40OTksNS41OTYsMTIuNSwxMi41bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC4wMDEsNi45MDMtNS41OTcsMTIuNDk5LTEyLjUsMTIuNWwwLDBDOS4wOTYsMjguNDk5LDMuNSwyMi45MDMsMy41LDE2TDMuNSwxNnogTTguODU0LDguODUzJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7QzcuMDIyLDEwLjY4Niw1Ljg5NCwxMy4yMDUsNS44OTMsMTZsMCwwYzAuMDAxLDIuNzk1LDEuMTI5LDUuMzE0LDIuOTYxLDcuMTQ2bDAsMGMxLjgzMiwxLjgzMSw0LjM1MiwyLj'+
			'k2LDcuMTQ2LDIuOTZsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzIuNzk1LDAsNS4zMTQtMS4xMjksNy4xNDctMi45NmwwLDBjMS44MzEtMS44MzIsMi45NTktNC4zNTIsMi45Ni03LjE0NmwwLDBjLTAuMDAxLTIuNzk1LTEuMTI5LTUuMzE0LTIuOTYtNy4xNDdsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7QzIxLjMxMyw3LjAyMiwxOC43OTUsNS44OTMsMTYsNS44OTJsMCwwQzEzLjIwNSw1Ljg5MywxMC42ODYsNy4wMjIsOC44NTQsOC44NTNMOC44NTQsOC44NTN6Ii8+CiAgPC9nPgogIDxnPgogICA8cGF0aCBkPSJNMTQuOTYzLDEwLjA1VjkuNTIxYzAtMC42NjEs'+
			'MC41MzYtMS4xOTYsMS4xOTctMS4xOTZsMCwwYzAuNjYsMCwxLjE5NiwwLjUzNiwxLjE5NiwxLjE5NmwwLDB2MC41MjkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMCwwLjY2MS0wLjUzNiwxLjE5Ni0xLjE5NiwxLjE5NmwwLDBDMTUuNSwxMS4yNDcsMTQuOTYzLDEwLjcxMSwxNC45NjMsMTAuMDVMMTQuOTYzLDEwLjA1eiIvPgogICA8Zz4KICAgIDxwYXRoIGQ9Ik0xOC41MzIsMjAuMzkxaC0xLjE3NnYtNi40NzNjMC0wLjAyMS0wLjAwNS0wLjA0Mi0wLjAwNi0wLjA2M2MwLTAuMDE0LDAuMDA0LTAuMDI2LDAuMDA0LTAuMDQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTsmI3g5O2'+
			'MwLTAuNjYxLTAuNTM2LTEuMTk2LTEuMTk2LTEuMTk2aC0yLjIyNmMtMC42NjEsMC0xLjE5NywwLjUzNi0xLjE5NywxLjE5NmMwLDAuNjYsMC41MzYsMS4xOTYsMS4xOTcsMS4xOTZoMS4wMzF2NS4zNzloLTEuMjA3JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNjYxLDAtMS4xOTcsMC41MzUtMS4xOTcsMS4xOTZjMCwwLjY2LDAuNTM2LDEuMTk2LDEuMTk3LDEuMTk2aDQuNzc1YzAuNjYsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5OyYjeDk7QzE5LjcyOSwyMC45MjYsMTkuMTkyLDIwLjM5MSwxOC41MzIsMjAuMzkxeiIv'+
			'PgogICA8L2c+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._ht_info_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_info_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 64px;';
		hs+='left : -32px;';
		hs+='position : absolute;';
		hs+='top : -32px;';
		hs+='visibility : inherit;';
		hs+='width : 64px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info_image.style[domTransition]='';
				if (me._ht_info_image.ggCurrentLogicStateVisible == 0) {
					me._ht_info_image.style.visibility="hidden";
					me._ht_info_image.ggVisible=false;
				}
				else {
					me._ht_info_image.style.visibility=(Number(me._ht_info_image.style.opacity)>0||!me._ht_info_image.style.opacity)?'inherit':'hidden';
					me._ht_info_image.ggVisible=true;
				}
			}
		}
		me._ht_info_image.onmouseover=function (e) {
			me._ht_info_image__img.style.visibility='hidden';
			me._ht_info_image__imgo.style.visibility='inherit';
		}
		me._ht_info_image.onmouseout=function (e) {
			me._ht_info_image__img.style.visibility='inherit';
			me._ht_info_image__imgo.style.visibility='hidden';
		}
		me._ht_info_image.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info.appendChild(me._ht_info_image);
		el=me._tt_information=document.createElement('div');
		els=me._tt_information__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_information";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 33px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_information.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_information.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_information.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_information.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_information.style[domTransition]='left 0s, top 0s';
				if (me._tt_information.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_information.style.top='-47px';
					me._tt_information.ggUpdatePosition(true);
				}
				else {
					me._tt_information.ggDx=0;
					me._tt_information.style.top='33px';
					me._tt_information.ggUpdatePosition(true);
				}
			}
		}
		me._tt_information.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_info'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_information.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_information.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_information.style[domTransition]='left 0s, top 0s';
				if (me._tt_information.ggCurrentLogicStateVisible == 0) {
					me._tt_information.style.visibility=(Number(me._tt_information.style.opacity)>0||!me._tt_information.style.opacity)?'inherit':'hidden';
					me._tt_information.ggVisible=true;
				}
				else {
					me._tt_information.style.visibility="hidden";
					me._tt_information.ggVisible=false;
				}
			}
		}
		me._tt_information.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_info.appendChild(me._tt_information);
		el=me._ht_info_customimage=document.createElement('div');
		els=me._ht_info_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._ht_info_customimage.ggUpdatePosition();}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_info_CustomImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_customimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info_customimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info_customimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info_customimage.style[domTransition]='';
				if (me._ht_info_customimage.ggCurrentLogicStateVisible == 0) {
					me._ht_info_customimage.style.visibility="hidden";
					me._ht_info_customimage__img.src = '';
					me._ht_info_customimage.ggVisible=false;
				}
				else {
					me._ht_info_customimage.style.visibility=(Number(me._ht_info_customimage.style.opacity)>0||!me._ht_info_customimage.style.opacity)?'inherit':'hidden';
					me._ht_info_customimage.ggSubElement.src=me._ht_info_customimage.ggText;
					me._ht_info_customimage.ggVisible=true;
				}
			}
		}
		me._ht_info_customimage.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			var parentWidth = me._ht_info_customimage.clientWidth;
			var parentHeight = me._ht_info_customimage.clientHeight;
			var img = me._ht_info_customimage__img;
			var aspectRatioDiv = me._ht_info_customimage.clientWidth / me._ht_info_customimage.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._ht_info.appendChild(me._ht_info_customimage);
		if ((hotspot) && (hotspot.customimage)) {
			el.style.width=hotspot.customimagewidth + 'px';
			el.style.height=hotspot.customimageheight + 'px';
		}
		me.__div = me._ht_info;
	};
	function SkinHotspotClass_hotspot_2(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hotspot_2=document.createElement('div');
		el.ggId="Hotspot 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 321px;';
		hs+='position : absolute;';
		hs+='top : 237px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot_2.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._hotspot_2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_userdata') == true)) || 
				((player.getVariableValue('vis_info_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hotspot_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hotspot_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hotspot_2.style[domTransition]='';
				if (me._hotspot_2.ggCurrentLogicStateVisible == 0) {
					me._hotspot_2.style.visibility=(Number(me._hotspot_2.style.opacity)>0||!me._hotspot_2.style.opacity)?'inherit':'hidden';
					me._hotspot_2.ggVisible=true;
				}
				else {
					me._hotspot_2.style.visibility=(Number(me._hotspot_2.style.opacity)>0||!me._hotspot_2.style.opacity)?'inherit':'hidden';
					me._hotspot_2.ggVisible=true;
				}
			}
		}
		me._hotspot_2.onclick=function (e) {
			player.openNext(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_2.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_2.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me._tt_ht_node2.style[domTransition]='none';
			me._tt_ht_node2.style.visibility=(Number(me._tt_ht_node2.style.opacity)>0||!me._tt_ht_node2.style.opacity)?'inherit':'hidden';
			me._tt_ht_node2.ggVisible=true;
			me.elementMouseOver['hotspot_2']=true;
			me._tt_ht_node2.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_2.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me._tt_ht_node2.style[domTransition]='none';
			me._tt_ht_node2.style.visibility='hidden';
			me._tt_ht_node2.ggVisible=false;
			me.elementMouseOver['hotspot_2']=false;
			me._tt_ht_node2.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_2.ontouchend=function (e) {
			me.elementMouseOver['hotspot_2']=false;
			me._tt_ht_node2.logicBlock_visible();
		}
		me._hotspot_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_image=document.createElement('div');
		el.ggId="ht_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 44px;';
		hs+='left : -22px;';
		hs+='position : absolute;';
		hs+='top : -22px;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_1=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.4,sy:0.4 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='border : 4px solid #ffd766;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -3px;';
		hs+='position : absolute;';
		hs+='top : -3px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._rectangle_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_anim') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rectangle_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rectangle_1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rectangle_1.style[domTransition]='' + cssPrefix + 'transform 750ms ease 0ms, opacity 750ms ease 0ms';
				if (me._rectangle_1.ggCurrentLogicStateScaling == 0) {
					me._rectangle_1.ggParameter.sx = 1;
					me._rectangle_1.ggParameter.sy = 1;
					me._rectangle_1.style[domTransform]=parameterToTransform(me._rectangle_1.ggParameter);
				}
				else {
					me._rectangle_1.ggParameter.sx = 0.4;
					me._rectangle_1.ggParameter.sy = 0.4;
					me._rectangle_1.style[domTransform]=parameterToTransform(me._rectangle_1.ggParameter);
				}
			}
		}
		me._rectangle_1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_anim') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._rectangle_1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._rectangle_1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._rectangle_1.style[domTransition]='' + cssPrefix + 'transform 750ms ease 0ms, opacity 750ms ease 0ms';
				if (me._rectangle_1.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._rectangle_1.style.opacity == 0.0) { me._rectangle_1.style.visibility="hidden"; } }, 755);
					me._rectangle_1.style.opacity=0;
				}
				else {
					me._rectangle_1.style.visibility=me._rectangle_1.ggVisible?'inherit':'hidden';
					me._rectangle_1.style.opacity=1;
				}
			}
		}
		me._rectangle_1.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image.appendChild(me._rectangle_1);
		el=me._rectangle_2=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.4,sy:0.4 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='border : 4px solid #ffd766;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -3px;';
		hs+='position : absolute;';
		hs+='top : -3px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._rectangle_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_anim') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rectangle_2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rectangle_2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rectangle_2.style[domTransition]='' + cssPrefix + 'transform 750ms ease 0ms, opacity 750ms ease 0ms';
				if (me._rectangle_2.ggCurrentLogicStateScaling == 0) {
					me._rectangle_2.ggParameter.sx = 1;
					me._rectangle_2.ggParameter.sy = 1;
					me._rectangle_2.style[domTransform]=parameterToTransform(me._rectangle_2.ggParameter);
				}
				else {
					me._rectangle_2.ggParameter.sx = 0.4;
					me._rectangle_2.ggParameter.sy = 0.4;
					me._rectangle_2.style[domTransform]=parameterToTransform(me._rectangle_2.ggParameter);
				}
			}
		}
		me._rectangle_2.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_anim') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._rectangle_2.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._rectangle_2.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._rectangle_2.style[domTransition]='' + cssPrefix + 'transform 750ms ease 0ms, opacity 750ms ease 0ms';
				if (me._rectangle_2.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._rectangle_2.style.opacity == 0.0) { me._rectangle_2.style.visibility="hidden"; } }, 755);
					me._rectangle_2.style.opacity=0;
				}
				else {
					me._rectangle_2.style.visibility=me._rectangle_2.ggVisible?'inherit':'hidden';
					me._rectangle_2.style.opacity=1;
				}
			}
		}
		me._rectangle_2.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image.appendChild(me._rectangle_2);
		me._hotspot_2.appendChild(me._ht_image);
		el=me._tt_ht_node2=document.createElement('div');
		els=me._tt_ht_node2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_node2";
		el.ggDx=3;
		el.ggDy=25;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.666667);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_node2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_node2.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_ht_node2.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_ht_node2.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_ht_node2.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_node2.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					this.ggDy = -47;
					me._tt_ht_node2.ggUpdatePosition(true);
				}
				else {
					me._tt_ht_node2.ggDx=3;
					me._tt_ht_node2.ggDy=25;
					me._tt_ht_node2.ggUpdatePosition(true);
				}
			}
		}
		me._tt_ht_node2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['hotspot_2'] == true)) && 
				((me.hotspot.title != "")) && 
				((player.getIsTour() == false)) && 
				((player.getVariableValue('opt_hotspot_preview_1') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((me.elementMouseOver['hotspot_2'] == true)) && 
				((me.hotspot.title != "")) && 
				((player.getIsTour() == true)) && 
				((player.getVariableValue('opt_hotspot_preview_1') == false))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((me.elementMouseOver['hotspot_2'] == true)) && 
				((me.hotspot.title != "")) && 
				((player.getIsTour() == false)) && 
				((player.getVariableValue('opt_hotspot_preview_1') == true))
			)
			{
				newLogicStateVisible = 2;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_node2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_node2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_node2.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_node2.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_node2.style.visibility=(Number(me._tt_ht_node2.style.opacity)>0||!me._tt_ht_node2.style.opacity)?'inherit':'hidden';
					me._tt_ht_node2.ggVisible=true;
				}
				else if (me._tt_ht_node2.ggCurrentLogicStateVisible == 1) {
					me._tt_ht_node2.style.visibility=(Number(me._tt_ht_node2.style.opacity)>0||!me._tt_ht_node2.style.opacity)?'inherit':'hidden';
					me._tt_ht_node2.ggVisible=true;
				}
				else if (me._tt_ht_node2.ggCurrentLogicStateVisible == 2) {
					me._tt_ht_node2.style.visibility=(Number(me._tt_ht_node2.style.opacity)>0||!me._tt_ht_node2.style.opacity)?'inherit':'hidden';
					me._tt_ht_node2.ggVisible=true;
				}
				else {
					me._tt_ht_node2.style.visibility="hidden";
					me._tt_ht_node2.ggVisible=false;
				}
			}
		}
		me._tt_ht_node2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._hotspot_2.appendChild(me._tt_ht_node2);
		me.__div = me._hotspot_2;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		if (hotspot.skinid=='ht_node_1') {
			hotspot.skinid = 'ht_node_1';
			hsinst = new SkinHotspotClass_ht_node_1(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_node_1_changenode();;
			me.callChildLogicBlocksHotspot_ht_node_1_configloaded();;
			me.callChildLogicBlocksHotspot_ht_node_1_mouseover();;
			me.callChildLogicBlocksHotspot_ht_node_1_active();;
			me.callChildLogicBlocksHotspot_ht_node_1_changevisitednodes();;
			me.callChildLogicBlocksHotspot_ht_node_1_activehotspotchanged();;
			me.callChildLogicBlocksHotspot_ht_node_1_varchanged_opt_3d_preview_2();;
		} else
		if (hotspot.skinid=='ht_node') {
			hotspot.skinid = 'ht_node';
			hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_node_changenode();;
			me.callChildLogicBlocksHotspot_ht_node_configloaded();;
			me.callChildLogicBlocksHotspot_ht_node_mouseover();;
			me.callChildLogicBlocksHotspot_ht_node_active();;
			me.callChildLogicBlocksHotspot_ht_node_changevisitednodes();;
			me.callChildLogicBlocksHotspot_ht_node_activehotspotchanged();;
			me.callChildLogicBlocksHotspot_ht_node_varchanged_opt_3d_preview_2();;
		} else
		if (hotspot.skinid=='Hotspot 1') {
			hotspot.skinid = 'Hotspot 1';
			hsinst = new SkinHotspotClass_hotspot_1(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_hotspot_1_sizechanged();;
			me.callChildLogicBlocksHotspot_hotspot_1_changenode();;
			me.callChildLogicBlocksHotspot_hotspot_1_configloaded();;
			me.callChildLogicBlocksHotspot_hotspot_1_mouseover();;
			me.callChildLogicBlocksHotspot_hotspot_1_hastouch();;
			me.callChildLogicBlocksHotspot_hotspot_1_activehotspotchanged();;
			me.callChildLogicBlocksHotspot_hotspot_1_varchanged_vis_info_popup();;
			me.callChildLogicBlocksHotspot_hotspot_1_varchanged_opt_hotspot_preview_1();;
			me.callChildLogicBlocksHotspot_hotspot_1_varchanged_ht_anim();;
		} else
		if (hotspot.skinid=='ht_info') {
			hotspot.skinid = 'ht_info';
			hsinst = new SkinHotspotClass_ht_info(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_info_changenode();;
			me.callChildLogicBlocksHotspot_ht_info_configloaded();;
			me.callChildLogicBlocksHotspot_ht_info_mouseover();;
			me.callChildLogicBlocksHotspot_ht_info_hastouch();;
			me.callChildLogicBlocksHotspot_ht_info_activehotspotchanged();;
		} else
		{
			hotspot.skinid = 'Hotspot 2';
			hsinst = new SkinHotspotClass_hotspot_2(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_hotspot_2_sizechanged();;
			me.callChildLogicBlocksHotspot_hotspot_2_changenode();;
			me.callChildLogicBlocksHotspot_hotspot_2_configloaded();;
			me.callChildLogicBlocksHotspot_hotspot_2_mouseover();;
			me.callChildLogicBlocksHotspot_hotspot_2_hastouch();;
			me.callChildLogicBlocksHotspot_hotspot_2_activehotspotchanged();;
			me.callChildLogicBlocksHotspot_hotspot_2_varchanged_vis_info_popup();;
			me.callChildLogicBlocksHotspot_hotspot_2_varchanged_opt_hotspot_preview_1();;
			me.callChildLogicBlocksHotspot_hotspot_2_varchanged_ht_anim();;
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		if(hotspotTemplates['ht_node_1']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node_1'].length; i++) {
				hotspotTemplates['ht_node_1'][i] = null;
			}
		}
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				hotspotTemplates['ht_node'][i] = null;
			}
		}
		if(hotspotTemplates['Hotspot 1']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot 1'].length; i++) {
				hotspotTemplates['Hotspot 1'][i] = null;
			}
		}
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				hotspotTemplates['ht_info'][i] = null;
			}
		}
		if(hotspotTemplates['Hotspot 2']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot 2'].length; i++) {
				hotspotTemplates['Hotspot 2'][i] = null;
			}
		}
		hotspotTemplates = [];
	}
	function SkinCloner_thumbnail_cloner_Class(nodeId, parentScope,ggParent,parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.__div=document.createElement('div');
		me.__div.setAttribute('style','position: absolute;width: 96px; height: 62px; visibility: inherit; overflow: visible;');
		me.__div.style.left=parameter.left;
		me.__div.style.top=parameter.top;
		me.__div.style.width=parameter.width;
		me.__div.style.height=parameter.height;
		me.__div.ggIsActive = function() {
			return player.getCurrentNode()==me.ggNodeId;
		}
		me.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._thumbnail_nodeimage=document.createElement('div');
		els=me._thumbnail_nodeimage__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/hs_preview_image_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_nodeImage";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.62,sy:0.58 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 90px;';
		hs+='left : -24px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._thumbnail_nodeimage.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_nodeimage.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumbnail_nodeimage);
		el=me._thumbnail_active=document.createElement('div');
		el.ggId="thumbnail active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 51px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_active.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me._thumbnail_active.ggIsActive() == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				((me.elementMouseOver['thumbnail_active'] == true))
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._thumbnail_active.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._thumbnail_active.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._thumbnail_active.style[domTransition]='border-color 0s';
				if (me._thumbnail_active.ggCurrentLogicStateBorderColor == 0) {
					me._thumbnail_active.style.borderColor="rgba(192,192,192,1)";
				}
				else if (me._thumbnail_active.ggCurrentLogicStateBorderColor == 1) {
					me._thumbnail_active.style.borderColor="rgba(192,192,192,1)";
				}
				else {
					me._thumbnail_active.style.borderColor="rgba(0,0,0,1)";
				}
			}
		}
		me._thumbnail_active.onclick=function (e) {
			if (
				(
					((me._thumbnail_active.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
		}
		me._thumbnail_active.onmouseover=function (e) {
			me.elementMouseOver['thumbnail_active']=true;
			me._checkmark_tick.logicBlock_alpha();
			me._thumbnail_active.logicBlock_bordercolor();
		}
		me._thumbnail_active.onmouseout=function (e) {
			me.elementMouseOver['thumbnail_active']=false;
			me._checkmark_tick.logicBlock_alpha();
			me._thumbnail_active.logicBlock_bordercolor();
		}
		me._thumbnail_active.ontouchend=function (e) {
			me.elementMouseOver['thumbnail_active']=false;
			me._checkmark_tick.logicBlock_alpha();
			me._thumbnail_active.logicBlock_bordercolor();
		}
		me._thumbnail_active.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnail_title=document.createElement('div');
		els=me._thumbnail_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumbnail_title";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 51px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 85px;';
		hs+='height: 51px;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.392157);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,226,111,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.ggUserdata.title;
		el.appendChild(els);
		me._thumbnail_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_title.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._thumbnail_active.appendChild(me._thumbnail_title);
		el=me._checkmark_tick=document.createElement('div');
		els=me._checkmark_tick__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgLTI0MCAzMzIgMTMwIDEzMDsiIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbm'+
			'siIHg9IjBweCIgeT0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojMDAwMDAwO30mI3hkOwoJLnN0MXtmaWxsOiNGRkZGRkY7fSYjeGQ7Cjwvc3R5bGU+CiA8ZyBpZD0iTGF5ZXJfMV8xXyIvPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGQ9Ik0tMTIyLjEsMzQxLjVoLTEwNS44Yy0xLjQsMC0yLjYsMS4xLTIuNiwyLjZ2MTA1LjhjMCwxLjQsMS4xLDIuNiwyLjYsMi42aDEwNS44YzEuNCwwLDIuNi0xLjEsMi42LTIuNlYzNDQuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMTkuNiwzNDIuNy0xMjAuNywzNDEuNS0xMjIuMSwzNDEuNXogTS0xMzIuOCwzODEu'+
			'N2wtNTAuOCw1MC44Yy0wLjMsMC4zLTAuOCwwLjUtMS4yLDAuNWMtMC41LDAtMC45LTAuMS0xLjMtMC41bC0zMS43LTMxLjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC43LTAuNy0wLjctMS43LDAtMi40bDEyLjUtMTIuNWMwLjctMC43LDEuNy0wLjcsMi40LDBsMTgsMThsMzcuMS0zNy4xYzAuNy0wLjcsMS43LTAuNywyLjQsMGwxMi41LDEyLjUmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTMyLjEsMzc5LjktMTMyLjEsMzgxLTEzMi44LDM4MS43eiIgY2xhc3M9InN0MCIvPgogIDxwYXRoIGQ9Ik0tMTQ3LjcsMzY2LjhsLTM3LjEsMzcuMWwtMTgtMThjLTAuNy0wLjctMS43LTAuNy0yLjQsMGwtMTIuNS'+
			'wxMi41Yy0wLjcsMC43LTAuNywxLjcsMCwyLjRsMzEuNywzMS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLDAuMywwLjgsMC41LDEuMywwLjVjMC40LDAsMC45LTAuMiwxLjItMC41bDUwLjgtNTAuOWMwLjctMC43LDAuNy0xLjcsMC0yLjRsLTEyLjUtMTIuNUMtMTQ1LjksMzY2LjEtMTQ3LDM2Ni4xLTE0Ny43LDM2Ni44eiIgY2xhc3M9InN0MSIvPgogPC9nPgo8L3N2Zz4K';
		me._checkmark_tick__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="checkmark_tick";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 19px;';
		hs+='position : absolute;';
		hs+='right : 3px;';
		hs+='top : 29px;';
		hs+='visibility : hidden;';
		hs+='width : 19px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._checkmark_tick.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._checkmark_tick.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._checkmark_tick.ggElementNodeId()) == true)) || 
				((me._checkmark_tick.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._checkmark_tick.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._checkmark_tick.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._checkmark_tick.style[domTransition]='opacity 500ms ease 0ms';
				if (me._checkmark_tick.ggCurrentLogicStateVisible == 0) {
					me._checkmark_tick.style.visibility=(Number(me._checkmark_tick.style.opacity)>0||!me._checkmark_tick.style.opacity)?'inherit':'hidden';
					me._checkmark_tick.ggVisible=true;
				}
				else {
					me._checkmark_tick.style.visibility="hidden";
					me._checkmark_tick.ggVisible=false;
				}
			}
		}
		me._checkmark_tick.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['thumbnail_active'] == true)) && 
				((me.ggUserdata.title != ""))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._checkmark_tick.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._checkmark_tick.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._checkmark_tick.style[domTransition]='opacity 500ms ease 0ms';
				if (me._checkmark_tick.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._checkmark_tick.style.opacity == 0.0) { me._checkmark_tick.style.visibility="hidden"; } }, 505);
					me._checkmark_tick.style.opacity=0;
				}
				else {
					me._checkmark_tick.style.visibility=me._checkmark_tick.ggVisible?'inherit':'hidden';
					me._checkmark_tick.style.opacity=1;
				}
			}
		}
		me._checkmark_tick.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_active.appendChild(me._checkmark_tick);
		me.__div.appendChild(me._thumbnail_active);
	};
	function SkinCloner_category_cloner_Class(item, parentScope,ggParent,parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggTag = item['tag'];
		me.ggTitle = item['title'];
		me.ggNodeCount = item['nodecount'];
		me.ggNodeId=item['firstnode'];
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.__div=document.createElement('div');
		me.__div.setAttribute('style','position: absolute;width: 150px; height: 128px; visibility: inherit; overflow: visible;');
		me.__div.style.left=parameter.left;
		me.__div.style.top=parameter.top;
		me.__div.style.width=parameter.width;
		me.__div.style.height=parameter.height;
		me.__div.ggIsActive = function() {
			var tags = player.userdata.tags;
			if (tags.indexOf(me.ggTag) == -1) return false;
			for(var i=0;i<me.ggParent.ggCurrentFilter.length;i++) {
				if (tags.indexOf(me.ggParent.ggCurrentFilter[i])==-1) return false;
			}
			return true;
		}
		me.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._node_cloner=document.createElement('div');
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggWidth = 141;
		el.ggHeight = 100;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		me._node_cloner.callChildLogicBlocks_changenode = function(){
			if(me._node_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._node_cloner.ggInstances.length; i++) {
					if (me._node_cloner.ggInstances[i]._node_title && me._node_cloner.ggInstances[i]._node_title.logicBlock_visible) {
						me._node_cloner.ggInstances[i]._node_title.logicBlock_visible();
					}
				}
			}
		}
		me._node_cloner.callChildLogicBlocks_active = function(){
			if(me._node_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._node_cloner.ggInstances.length; i++) {
					if (me._node_cloner.ggInstances[i]._node_visited && me._node_cloner.ggInstances[i]._node_visited.logicBlock_bordercolor) {
						me._node_cloner.ggInstances[i]._node_visited.logicBlock_bordercolor();
					}
				}
			}
		}
		me._node_cloner.callChildLogicBlocks_changevisitednodes = function(){
			if(me._node_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._node_cloner.ggInstances.length; i++) {
					if (me._node_cloner.ggInstances[i]._node_visited && me._node_cloner.ggInstances[i]._node_visited.logicBlock_bordercolor) {
						me._node_cloner.ggInstances[i]._node_visited.logicBlock_bordercolor();
					}
				}
			}
		}
		me._node_cloner.callChildLogicBlocks_activehotspotchanged = function(){
			if(me._node_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._node_cloner.ggInstances.length; i++) {
					if (me._node_cloner.ggInstances[i]._node_title && me._node_cloner.ggInstances[i]._node_title.logicBlock_visible) {
						me._node_cloner.ggInstances[i]._node_title.logicBlock_visible();
					}
				}
			}
		}
		el.ggUpdate = function(filter) {
			if(me._node_cloner.ggUpdating == true) return;
			me._node_cloner.ggUpdating = true;
			var el=me._node_cloner;
			var curNumCols = 0;
			curNumCols = me._node_cloner.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._node_cloner.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			for (var i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) == -1) passed = false;
					}
				}
				if (passed) {
				var parameter={};
				parameter.top=(row * me._node_cloner.ggHeight) + 'px';
				parameter.left=(column * me._node_cloner.ggWidth) + 'px';
				parameter.width=me._node_cloner.ggWidth + 'px';
				parameter.height=me._node_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_node_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
				}
			}
			me._node_cloner.callChildLogicBlocks_changenode();
			me._node_cloner.callChildLogicBlocks_active();
			me._node_cloner.callChildLogicBlocks_changevisitednodes();
			me._node_cloner.callChildLogicBlocks_activehotspotchanged();
			me._node_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._node_cloner.parentNode.classList.contains('ggskin_subelement') && me._node_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._node_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="node_cloner";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 100px;';
		hs+='left : -10000px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 40px;';
		hs+='visibility : inherit;';
		hs+='width : 141px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._node_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._node_cloner.childNodes.length; i++) {
				var child=me._node_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._node_cloner.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.ggWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
				me._node_cloner.ggUpdate();
		}
		me._node_cloner.ggNodeChange=function () {
			me._node_cloner.ggUpdateConditionNodeChange();
		}
		me.__div.appendChild(me._node_cloner);
		el=me._category=document.createElement('div');
		els=me._category__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="category";
		el.ggDx=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 27px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 141px;';
		hs+='pointer-events:auto;';
		hs+='https:\/\/fonts.googleapis.com\/css2?family=El+Messiri&display=swap';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 141px;';
		hs+='height: auto;';
		hs+='background: #ebd066;';
		hs+='border: 0px solid #ffffff;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 1px 1px 1px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML=me.ggTitle;
		el.appendChild(els);
		me._category.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._category.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['category'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else if (
				((player.getVariableValue('open_tag') == me.ggTag))
			)
			{
				newLogicStateBackgroundColor = 1;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._category.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._category.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._category__text.style[domTransition]='background-color 0s';
				if (me._category.ggCurrentLogicStateBackgroundColor == 0) {
					me._category__text.style.backgroundColor="rgba(255,170,255,1)";
				}
				else if (me._category.ggCurrentLogicStateBackgroundColor == 1) {
					me._category__text.style.backgroundColor="rgba(255,226,111,1)";
				}
				else {
					me._category__text.style.backgroundColor="rgba(235,208,102,1)";
				}
			}
		}
		me._category.onclick=function (e) {
			if (
				(
					((player.getVariableValue('open_tag') == me.ggTag))
				)
			) {
				player.setVariableValue('close_nodes', true);
			}
			if (
				(
					((player.getVariableValue('open_tag') != me.ggTag))
				)
			) {
				player.setVariableValue('close_nodes', false);
			}
			if (
				(
					((player.getVariableValue('open_tag') != me.ggTag))
				)
			) {
				player.setVariableValue('open_tag', me.ggTag);
			}
			if (
				(
					((player.getVariableValue('close_nodes') == true))
				)
			) {
				player.setVariableValue('open_tag', "_nop_");
			}
		}
		me._category.onmouseover=function (e) {
			me.elementMouseOver['category']=true;
			me._category.logicBlock_backgroundcolor();
		}
		me._category.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._category__text)
					return;
				}
			}
			me.elementMouseOver['category']=false;
			me._category.logicBlock_backgroundcolor();
		}
		me._category.ontouchend=function (e) {
			me.elementMouseOver['category']=false;
			me._category.logicBlock_backgroundcolor();
		}
		me._category.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._category.ggNodeChange=function () {
			if (
				(
					((me._category.ggIsActive() == true)) && 
					((player.getVariableValue('category_follow') == true))
				)
			) {
				player.setVariableValue('open_tag', me.ggTag);
			}
		}
		me.__div.appendChild(me._category);
		me._node_cloner.style['display']='none';
		var p = me._node_cloner.parentElement;
		while (p != null && p!==this.divSkin) {
			if (p.ggType && p.ggType == 'cloner') {
				if (p.ggAutoPosition) {
					p.ggAutoPosition(false);
				}
			}
			if (p.ggType && p.ggType == 'scrollarea') {
				if (p.ggUpdatePosition) {
					p.ggUpdatePosition();
				}
			}
			p = p.parentElement;
		}
		skin.updateSize(me._node_cloner);
		me.event_varchanged_open_tag=function() {if (
			(
				((player.getVariableValue('open_tag') != me.ggTag))
			)
		) {
			me._node_cloner.ggText="_nop_";
			if (me._node_cloner.ggText=='') {
				me._node_cloner.ggUpdate([]);
			} else {
				me._node_cloner.ggUpdate(me._node_cloner.ggText.split(','));
			}
			skin.updateSize(skin.divSkin);
		}
		if (
			(
				((player.getVariableValue('open_tag') != me.ggTag))
			)
		) {
			me._node_cloner.style['display']='none';
			var p = me._node_cloner.parentElement;
			while (p != null && p!==this.divSkin) {
				if (p.ggType && p.ggType == 'cloner') {
					if (p.ggAutoPosition) {
						p.ggAutoPosition(false);
					}
				}
				if (p.ggType && p.ggType == 'scrollarea') {
					if (p.ggUpdatePosition) {
						p.ggUpdatePosition();
					}
				}
				p = p.parentElement;
			}
			skin.updateSize(me._node_cloner);
		}
		if (
			(
				((player.getVariableValue('open_tag') == me.ggTag))
			)
		) {
			me._node_cloner.ggText=me.ggTag;
			if (me._node_cloner.ggText=='') {
				me._node_cloner.ggUpdate([]);
			} else {
				me._node_cloner.ggUpdate(me._node_cloner.ggText.split(','));
			}
			skin.updateSize(skin.divSkin);
		}
		if (
			(
				((player.getVariableValue('open_tag') == me.ggTag))
			)
		) {
			me._node_cloner.style['display']='inline';
			var p = me._node_cloner.parentElement;
			while (p != null && p!==this.divSkin) {
				if (p.ggType && p.ggType == 'cloner') {
					if (p.ggAutoPosition) {
						p.ggAutoPosition(false);
					}
				}
				if (p.ggType && p.ggType == 'scrollarea') {
					if (p.ggUpdatePosition) {
						p.ggUpdatePosition();
					}
				}
				p = p.parentElement;
			}
			skin.updateSize(me._node_cloner);
		}};
	};
	function SkinCloner_node_cloner_Class(nodeId, parentScope,ggParent,parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.__div=document.createElement('div');
		me.__div.setAttribute('style','position: absolute;width: 141px; height: 100px; visibility: inherit; overflow: visible;');
		me.__div.style.left=parameter.left;
		me.__div.style.top=parameter.top;
		me.__div.style.width=parameter.width;
		me.__div.style.height=parameter.height;
		me.__div.ggIsActive = function() {
			return player.getCurrentNode()==me.ggNodeId;
		}
		me.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._node_image=document.createElement('div');
		els=me._node_image__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/node_image_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="node_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 89px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 137px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._node_image.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._node_image.onclick=function (e) {
			if (
				(
					((me._node_image.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}",player.hotspot.target);
			}
		}
		me._node_image.ggUpdatePosition=function (useTransition) {
		}
		el=me._node_title=document.createElement('div');
		els=me._node_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 136px;';
		hs+='pointer-events:auto;';
		hs+='https:\/\/fonts.googleapis.com\/css2?family=El+Messiri&display=swap';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 136px;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.392157);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 1px 2px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.ggUserdata.title;
		el.appendChild(els);
		me._node_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_title.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.title == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node_title.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node_title.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._node_title.style[domTransition]='';
				if (me._node_title.ggCurrentLogicStateVisible == 0) {
					me._node_title.style.visibility="hidden";
					me._node_title.ggVisible=false;
				}
				else {
					me._node_title.style.visibility=(Number(me._node_title.style.opacity)>0||!me._node_title.style.opacity)?'inherit':'hidden';
					me._node_title.ggVisible=true;
				}
			}
		}
		me._node_title.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._node_image.appendChild(me._node_title);
		el=me._node_visited=document.createElement('div');
		el.ggId="node_visited";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 4px;';
		hs+='border-radius : 4px;';
		hs+='border : 3px solid #ebd066;';
		hs+='cursor : default;';
		hs+='height : 87px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 135px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._node_visited.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_visited.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me._node_visited.ggIsActive() == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				((player.nodeVisited(me._node_visited.ggElementNodeId()) == true))
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._node_visited.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._node_visited.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._node_visited.style[domTransition]='border-color 0s';
				if (me._node_visited.ggCurrentLogicStateBorderColor == 0) {
					me._node_visited.style.borderColor="rgba(255,85,255,1)";
				}
				else if (me._node_visited.ggCurrentLogicStateBorderColor == 1) {
					me._node_visited.style.borderColor="rgba(0,0,0,1)";
				}
				else {
					me._node_visited.style.borderColor="rgba(235,208,102,1)";
				}
			}
		}
		me._node_visited.ggUpdatePosition=function (useTransition) {
		}
		me._node_image.appendChild(me._node_visited);
		me.__div.appendChild(me._node_image);
	};
	player.addListener('varchanged_open_tag', function() {
		var inst_j=skin;
		for(var i = 0; i < inst_j._category_cloner.ggInstances.length; i++) {
			var inst_i=inst_j._category_cloner.ggInstances[i];
			inst_i.event_varchanged_open_tag();
		}
	});
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: "El Messiri", sans-serif; font-size: 14px; } .ggskin.tooltip { font-family: "El Messiri", sans-serif; font-size: 14px; }'));
	document.head.appendChild(style);
	me._button_image_normalscreen.logicBlock_visible();
	me._button_image_fullscreen.logicBlock_visible();
	me._gyro_off.logicBlock_alpha();
	me._tt_g_close.logicBlock_text();
	me._gyro_on.logicBlock_alpha();
	me._tt_g_open.logicBlock_text();
	me._tt_vr_open.logicBlock_text();
	me._stop_rotate_image.logicBlock_visible();
	me._tt_rotation_of.logicBlock_text();
	me._start_rotate_image.logicBlock_visible();
	me._tt_rotation_on.logicBlock_text();
	me._full_off_.logicBlock_text();
	me._ful_on.logicBlock_text();
	me._tt_more_not_open.logicBlock_text();
	me._tt_zoomout_open.logicBlock_text();
	me._tt_zoomin_open.logicBlock_text();
	me._thumbnail_hide_button.logicBlock_alpha();
	me._tt_thumbnail_close.logicBlock_text();
	me._thumbnail_show_button.logicBlock_alpha();
	me._tt_thumbnail_open.logicBlock_text();
	me._tt_moon_open.logicBlock_text();
	me._tt_lan1_open.logicBlock_text();
	me._tt_menu_open.logicBlock_text();
	me._tt_insta_open.logicBlock_text();
	me._tt_whats_open.logicBlock_text();
	me._tt_location_open.logicBlock_text();
	me._button_close_map.logicBlock_visible();
	me._tt_mute.logicBlock_text();
	me._tt_more_open.logicBlock_text();
	me._tt_help_open.logicBlock_text();
	me._thumbnail_menu.logicBlock_alpha();
	me._screentint_info.logicBlock_visible();
	me._information.logicBlock_visible();
	me._menu_background.logicBlock_alpha();
	me._menu_open.logicBlock_position();
	me._menu_open.logicBlock_alpha();
	me._tt_g_close.logicBlock_position();
	me._tt_g_open.logicBlock_position();
	me._tt_vr_open.logicBlock_position();
	me._tt_rotation_of.logicBlock_position();
	me._tt_rotation_on.logicBlock_position();
	me._full_off_.logicBlock_position();
	me._ful_on.logicBlock_position();
	me._tt_more_not_open.logicBlock_position();
	me._tt_zoomout_open.logicBlock_position();
	me._tt_zoomin_open.logicBlock_position();
	me._tt_thumbnail_close.logicBlock_position();
	me._tt_thumbnail_open.logicBlock_position();
	me._tt_moon_open.logicBlock_position();
	me._tt_lan1_open.logicBlock_position();
	me._tt_menu_open.logicBlock_position();
	me._tt_insta_open.logicBlock_position();
	me._tt_whats_open.logicBlock_position();
	me._tt_location_open.logicBlock_position();
	me._tt_mute.logicBlock_position();
	me._tt_more_open.logicBlock_position();
	me._tt_help_open.logicBlock_position();
	me._enter_vr.logicBlock_visible();
	player.addListener('fullscreenenter', function(args) { me._button_image_normalscreen.logicBlock_visible();me._button_image_fullscreen.logicBlock_visible(); });
	player.addListener('fullscreenexit', function(args) { me._button_image_normalscreen.logicBlock_visible();me._button_image_fullscreen.logicBlock_visible(); });
	player.addListener('changenode', function(args) { me._gyro_off.logicBlock_alpha();me._tt_g_close.logicBlock_text();me._gyro_on.logicBlock_alpha();me._tt_g_open.logicBlock_text();me._tt_vr_open.logicBlock_text();me._stop_rotate_image.logicBlock_visible();me._tt_rotation_of.logicBlock_text();me._start_rotate_image.logicBlock_visible();me._tt_rotation_on.logicBlock_text();me._full_off_.logicBlock_text();me._ful_on.logicBlock_text();me._tt_more_not_open.logicBlock_text();me._tt_zoomout_open.logicBlock_text();me._tt_zoomin_open.logicBlock_text();me._thumbnail_hide_button.logicBlock_alpha();me._tt_thumbnail_close.logicBlock_text();me._thumbnail_show_button.logicBlock_alpha();me._tt_thumbnail_open.logicBlock_text();me._tt_moon_open.logicBlock_text();me._tt_lan1_open.logicBlock_text();me._tt_menu_open.logicBlock_text();me._tt_insta_open.logicBlock_text();me._tt_whats_open.logicBlock_text();me._tt_location_open.logicBlock_text();me._button_close_map.logicBlock_visible();me._tt_mute.logicBlock_text();me._tt_more_open.logicBlock_text();me._tt_help_open.logicBlock_text();me._thumbnail_menu.logicBlock_alpha();me._screentint_info.logicBlock_visible();me._information.logicBlock_visible();me._menu_background.logicBlock_alpha();me._menu_open.logicBlock_position();me._menu_open.logicBlock_alpha(); });
	player.addListener('configloaded', function(args) { me._tt_g_close.logicBlock_position();me._tt_g_open.logicBlock_position();me._tt_vr_open.logicBlock_position();me._tt_rotation_of.logicBlock_position();me._tt_rotation_on.logicBlock_position();me._full_off_.logicBlock_position();me._ful_on.logicBlock_position();me._tt_more_not_open.logicBlock_position();me._tt_zoomout_open.logicBlock_position();me._tt_zoomin_open.logicBlock_position();me._tt_thumbnail_close.logicBlock_position();me._tt_thumbnail_open.logicBlock_position();me._tt_moon_open.logicBlock_position();me._tt_lan1_open.logicBlock_position();me._tt_menu_open.logicBlock_position();me._tt_insta_open.logicBlock_position();me._tt_whats_open.logicBlock_position();me._tt_location_open.logicBlock_position();me._tt_mute.logicBlock_position();me._tt_more_open.logicBlock_position();me._tt_help_open.logicBlock_position(); });
	player.addListener('autorotatechanged', function(args) { me._stop_rotate_image.logicBlock_visible();me._start_rotate_image.logicBlock_visible(); });
	player.addListener('gyrochanged', function(args) { me._gyro_off.logicBlock_alpha();me._gyro_on.logicBlock_alpha(); });
	player.addListener('vrchanged', function(args) { me._enter_vr.logicBlock_visible(); });
	player.addListener('hastouch', function(args) { me._tt_g_close.logicBlock_position();me._tt_g_open.logicBlock_position();me._tt_vr_open.logicBlock_position();me._tt_rotation_of.logicBlock_position();me._tt_rotation_on.logicBlock_position();me._full_off_.logicBlock_position();me._ful_on.logicBlock_position();me._tt_more_not_open.logicBlock_position();me._tt_zoomout_open.logicBlock_position();me._tt_zoomin_open.logicBlock_position();me._tt_thumbnail_close.logicBlock_position();me._tt_thumbnail_open.logicBlock_position();me._tt_moon_open.logicBlock_position();me._tt_lan1_open.logicBlock_position();me._tt_menu_open.logicBlock_position();me._tt_insta_open.logicBlock_position();me._tt_whats_open.logicBlock_position();me._tt_location_open.logicBlock_position();me._tt_mute.logicBlock_position();me._tt_more_open.logicBlock_position();me._tt_help_open.logicBlock_position(); });
	player.addListener('varchanged_vis_thumbnail_menu', function(args) { me._thumbnail_hide_button.logicBlock_alpha();me._thumbnail_show_button.logicBlock_alpha();me._thumbnail_menu.logicBlock_alpha(); });
	player.addListener('varchanged_vis_info_popup', function(args) { me._screentint_info.logicBlock_visible();me._information.logicBlock_visible(); });
	player.addListener('varchanged_category_visible', function(args) { me._menu_background.logicBlock_alpha();me._menu_open.logicBlock_position();me._menu_open.logicBlock_alpha(); });
	player.addListener('varchanged_vis_thumbnail_menu_1', function(args) { me._tt_g_close.logicBlock_text();me._tt_g_open.logicBlock_text();me._tt_vr_open.logicBlock_text();me._tt_rotation_of.logicBlock_text();me._tt_rotation_on.logicBlock_text();me._full_off_.logicBlock_text();me._ful_on.logicBlock_text();me._tt_more_not_open.logicBlock_text();me._tt_zoomout_open.logicBlock_text();me._tt_zoomin_open.logicBlock_text();me._tt_thumbnail_close.logicBlock_text();me._tt_thumbnail_open.logicBlock_text();me._tt_moon_open.logicBlock_text();me._tt_lan1_open.logicBlock_text();me._tt_menu_open.logicBlock_text();me._tt_insta_open.logicBlock_text();me._tt_whats_open.logicBlock_text();me._tt_location_open.logicBlock_text();me._tt_mute.logicBlock_text();me._tt_more_open.logicBlock_text();me._tt_help_open.logicBlock_text(); });
	player.addListener('varchanged_vis_map', function(args) { me._button_close_map.logicBlock_visible(); });
	player.addListener('changenode', function(args) { me._thumbnail_cloner.callChildLogicBlocks_changenode();me._category_cloner.callChildLogicBlocks_changenode(); });
	player.addListener('mouseover', function(args) { me._thumbnail_cloner.callChildLogicBlocks_mouseover();me._category_cloner.callChildLogicBlocks_mouseover(); });
	player.addListener('mouseover', function(args) { me._thumbnail_cloner.callChildLogicBlocks_mouseover(); });
	player.addListener('changenode', function(args) { me._thumbnail_cloner.callChildLogicBlocks_active();me._category_cloner.callChildLogicBlocks_active(); });
	player.addListener('changevisitednodes', function(args) { me._thumbnail_cloner.callChildLogicBlocks_changevisitednodes();me._category_cloner.callChildLogicBlocks_changevisitednodes(); });
	player.addListener('activehotspotchanged', function(args) { me._thumbnail_cloner.callChildLogicBlocks_activehotspotchanged();me._category_cloner.callChildLogicBlocks_activehotspotchanged(); });
	player.addListener('varchanged_open_tag', function(args) { me._category_cloner.callChildLogicBlocks_varchanged_open_tag(); });
	player.addListener('sizechanged', function(args) { me.callChildLogicBlocksHotspot_hotspot_1_sizechanged();me.callChildLogicBlocksHotspot_hotspot_2_sizechanged(); });
	player.addListener('changenode', function(args) { me.callChildLogicBlocksHotspot_ht_node_1_changenode();me.callChildLogicBlocksHotspot_ht_node_changenode();me.callChildLogicBlocksHotspot_hotspot_1_changenode();me.callChildLogicBlocksHotspot_ht_info_changenode();me.callChildLogicBlocksHotspot_hotspot_2_changenode(); });
	player.addListener('configloaded', function(args) { me.callChildLogicBlocksHotspot_ht_node_1_configloaded();me.callChildLogicBlocksHotspot_ht_node_configloaded();me.callChildLogicBlocksHotspot_hotspot_1_configloaded();me.callChildLogicBlocksHotspot_ht_info_configloaded();me.callChildLogicBlocksHotspot_hotspot_2_configloaded(); });
	player.addListener('mouseover', function(args) { me.callChildLogicBlocksHotspot_ht_node_1_mouseover();me.callChildLogicBlocksHotspot_ht_node_mouseover();me.callChildLogicBlocksHotspot_hotspot_1_mouseover();me.callChildLogicBlocksHotspot_ht_info_mouseover();me.callChildLogicBlocksHotspot_hotspot_2_mouseover(); });
	player.addListener('changenode', function(args) { me.callChildLogicBlocksHotspot_ht_node_1_active();me.callChildLogicBlocksHotspot_ht_node_active(); });
	player.addListener('changevisitednodes', function(args) { me.callChildLogicBlocksHotspot_ht_node_1_changevisitednodes();me.callChildLogicBlocksHotspot_ht_node_changevisitednodes(); });
	player.addListener('hastouch', function(args) { me.callChildLogicBlocksHotspot_hotspot_1_hastouch();me.callChildLogicBlocksHotspot_ht_info_hastouch();me.callChildLogicBlocksHotspot_hotspot_2_hastouch(); });
	player.addListener('activehotspotchanged', function(args) { me.callChildLogicBlocksHotspot_ht_node_1_activehotspotchanged();me.callChildLogicBlocksHotspot_ht_node_activehotspotchanged();me.callChildLogicBlocksHotspot_hotspot_1_activehotspotchanged();me.callChildLogicBlocksHotspot_ht_info_activehotspotchanged();me.callChildLogicBlocksHotspot_hotspot_2_activehotspotchanged(); });
	player.addListener('varchanged_vis_info_popup', function(args) { me.callChildLogicBlocksHotspot_hotspot_1_varchanged_vis_info_popup();me.callChildLogicBlocksHotspot_hotspot_2_varchanged_vis_info_popup(); });
	player.addListener('varchanged_opt_3d_preview_2', function(args) { me.callChildLogicBlocksHotspot_ht_node_1_varchanged_opt_3d_preview_2();me.callChildLogicBlocksHotspot_ht_node_varchanged_opt_3d_preview_2(); });
	player.addListener('varchanged_opt_hotspot_preview_1', function(args) { me.callChildLogicBlocksHotspot_hotspot_1_varchanged_opt_hotspot_preview_1();me.callChildLogicBlocksHotspot_hotspot_2_varchanged_opt_hotspot_preview_1(); });
	player.addListener('varchanged_ht_anim', function(args) { me.callChildLogicBlocksHotspot_hotspot_1_varchanged_ht_anim();me.callChildLogicBlocksHotspot_hotspot_2_varchanged_ht_anim(); });
	player.addListener('hotspotsremoved', function(args) { me.removeSkinHotspots(); });
	document.addEventListener('keydown', function(e) {
		var key = e.which || e.keyCode;
		me.skinKeyPressed = key;
	});
	document.addEventListener('keyup', function(e) {
		var key = e.which || e.keyCode;
		me.skinKeyPressed = 0;
	});
	me.skinTimerEvent();
};var JEMCO_FA_03_pano2vrSkin = pano2vrSkin;
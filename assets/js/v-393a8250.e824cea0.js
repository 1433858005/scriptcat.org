(self.webpackChunkscriptcat_org=self.webpackChunkscriptcat_org||[]).push([[424],{2729:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-393a8250",path:"/dev/background.html",title:"后台脚本",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:3,title:"Promise",slug:"promise",children:[]}],filePathRelative:"dev/background.md",git:{updatedTime:1622043305e3,contributors:[]}}},8966:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>e});const p=(0,a(6252).uE)('<h1 id="后台脚本"><a class="header-anchor" href="#后台脚本">#</a> 后台脚本</h1><blockquote><p>定时脚本也属于后台脚本的一种.</p></blockquote><p>后台脚本由<code>@background</code>属性声明,后台脚本将允许在开启脚本或者浏览器启动后,让脚本在后台持续运行.</p><h3 id="promise"><a class="header-anchor" href="#promise">#</a> Promise</h3><blockquote><p>十分推荐这种写法,也便于脚本管理器的脚本监控</p></blockquote><p>脚本返回<code>Promise</code>对象,管理器可以将返回的内容当作日志记录下来.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// ==UserScript==</span>\n<span class="token comment">// @name         Promise测试demo</span>\n<span class="token comment">// @namespace    wyz</span>\n<span class="token comment">// @version      1.0.0</span>\n<span class="token comment">// @author       wyz</span>\n<span class="token comment">// @background</span>\n<span class="token comment">// ==/UserScript==</span>\n<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&quot;ok&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    <span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>',7),e={render:function(n,s){return p}}}}]);
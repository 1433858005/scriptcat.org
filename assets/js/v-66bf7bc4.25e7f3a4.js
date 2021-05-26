(self.webpackChunkscriptcat_org=self.webpackChunkscriptcat_org||[]).push([[910],{9665:(n,s,e)=>{"use strict";e.r(s),e.d(s,{data:()=>a});const a={key:"v-66bf7bc4",path:"/dev/config.html",title:"用户配置",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"dev/config.md",git:{updatedTime:1622043305e3,contributors:[]}}},5031:(n,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>d});var a=e(6252);const r=(0,a.Wm)("h1",{id:"用户配置"},[(0,a.Wm)("a",{class:"header-anchor",href:"#用户配置"},"#"),(0,a.Uk)(" 用户配置")],-1),l=(0,a.Wm)("blockquote",null,[(0,a.Wm)("p",null,"当前文档为定义,暂未实现")],-1),p=(0,a.Wm)("code",null,"==UserConfig==",-1),i=(0,a.Uk)(" 中的内容,应该在"),c=(0,a.Wm)("code",null,"==UserScript==",-1),b=(0,a.Uk)(" 后方,表示脚本的一些用户配置.配置信息的描述使用"),u={href:"https://yaml.org/",target:"_blank",rel:"noopener noreferrer"},t=(0,a.Uk)("yaml"),o=(0,a.Uk)("格式来进行编写:"),m=(0,a.uE)('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/* ==UserConfig==\ngroup1:\n  configA:   # 键值为group.config,例如本键为:group1.configA\n    title: 配置A\n    description: 这是一个文本类型的配置\n    min: 2    # 文本最短2个字符\n    max: 18 # 文本最长18个字符\n  configB:\n    title: 配置B\n    description: 这是一个选择框的配置\n  configC:\n    title: 配置C\n    description: 这是一个列表选择的配置\n    value: [1,2,3,4,5]\n  configD:\n    title: 配置D\n    description: 这是一个数字的配置\n    min: 10  # 最小值\n    max: 16  # 最大值\n    unit: 分 # 表示单位\n---\ngroup2:\n  configX:\n    title: 配置A\n    description: 这是一个文本类型的配置\n ==/UserConfig== */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>在此处定义完成后,将会在控制面板中显示配置按钮,供用户配置,开发者使用<code>GM_getValue</code>获取配置的值,key使用<code>group.config</code>来表示.</p>',2),d={render:function(n,s){const e=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.j4)(a.HY,null,[r,l,(0,a.Wm)("p",null,[p,i,c,b,(0,a.Wm)("a",u,[t,(0,a.Wm)(e)]),o]),m],64)}}}}]);
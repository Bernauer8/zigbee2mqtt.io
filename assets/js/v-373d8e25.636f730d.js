"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[44070],{909990:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i=JSON.parse('{"key":"v-373d8e25","path":"/devices/ZNXNKG02LM.html","title":"Xiaomi ZNXNKG02LM control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Xiaomi ZNXNKG02LM control via MQTT","description":"Integrate your Xiaomi ZNXNKG02LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-10-01T17:18:02.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Operation mode (enum)","slug":"operation-mode-enum","link":"#operation-mode-enum","children":[]},{"level":3,"title":"Action rotation angle (numeric)","slug":"action-rotation-angle-numeric","link":"#action-rotation-angle-numeric","children":[]},{"level":3,"title":"Action rotation angle speed (numeric)","slug":"action-rotation-angle-speed-numeric","link":"#action-rotation-angle-speed-numeric","children":[]},{"level":3,"title":"Action rotation percent (numeric)","slug":"action-rotation-percent-numeric","link":"#action-rotation-percent-numeric","children":[]},{"level":3,"title":"Action rotation percent speed (numeric)","slug":"action-rotation-percent-speed-numeric","link":"#action-rotation-percent-speed-numeric","children":[]},{"level":3,"title":"Action rotation time (numeric)","slug":"action-rotation-time-numeric","link":"#action-rotation-time-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1700765303000},"filePathRelative":"devices/ZNXNKG02LM.md"}')},64734:(e,t,o)=>{o.r(t),o.d(t,{default:()=>v});var i=o(166252);const n=(0,i._)("h1",{id:"xiaomi-znxnkg02lm",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#xiaomi-znxnkg02lm","aria-hidden":"true"},"#"),(0,i.Uk)(" Xiaomi ZNXNKG02LM")],-1),a=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th")])],-1),r=(0,i._)("tr",null,[(0,i._)("td",null,"Model"),(0,i._)("td",null,"ZNXNKG02LM")],-1),d=(0,i._)("td",null,"Vendor",-1),c=(0,i._)("tr",null,[(0,i._)("td",null,"Description"),(0,i._)("td",null,"Aqara knob H1 (wireless)")],-1),l=(0,i._)("tr",null,[(0,i._)("td",null,"Exposes"),(0,i._)("td",null,"battery, voltage, action, operation_mode, action_rotation_angle, action_rotation_angle_speed, action_rotation_percent, action_rotation_percent_speed, action_rotation_time, linkquality")],-1),s=(0,i._)("tr",null,[(0,i._)("td",null,"Picture"),(0,i._)("td",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZNXNKG02LM.jpg",alt:"Xiaomi ZNXNKG02LM"})])],-1),u=(0,i._)("h2",{id:"notes",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),(0,i.Uk)(" Notes")],-1),h=(0,i._)("h3",{id:"pairing",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#pairing","aria-hidden":"true"},"#"),(0,i.Uk)(" Pairing")],-1),p=(0,i._)("p",null,"Press and hold the button on the device until the blue light starts blinking, release it and the pairing should begin. If you're having problems pairing, try keeping the device alive (press the button every second) after pairing started, until pairing completed",-1),m=(0,i._)("h2",{id:"options",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,i.Uk)(" Options")],-1),g=(0,i.uE)('<ul><li><code>legacy</code>: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported.. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>single</code>, <code>double</code>, <code>hold</code>, <code>release</code>, <code>start_rotating</code>, <code>rotation</code>, <code>stop_rotating</code>.</p><h3 id="operation-mode-enum" tabindex="-1"><a class="header-anchor" href="#operation-mode-enum" aria-hidden="true">#</a> Operation mode (enum)</h3><p>Button mode. Value can be found in the published state on the <code>operation_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;operation_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;operation_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>event</code>, <code>command</code>.</p><h3 id="action-rotation-angle-numeric" tabindex="-1"><a class="header-anchor" href="#action-rotation-angle-numeric" aria-hidden="true">#</a> Action rotation angle (numeric)</h3><p>Rotation angle. Value can be found in the published state on the <code>action_rotation_angle</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>*</code>.</p><h3 id="action-rotation-angle-speed-numeric" tabindex="-1"><a class="header-anchor" href="#action-rotation-angle-speed-numeric" aria-hidden="true">#</a> Action rotation angle speed (numeric)</h3><p>Rotation angle speed. Value can be found in the published state on the <code>action_rotation_angle_speed</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>*</code>.</p><h3 id="action-rotation-percent-numeric" tabindex="-1"><a class="header-anchor" href="#action-rotation-percent-numeric" aria-hidden="true">#</a> Action rotation percent (numeric)</h3><p>Rotation percent. Value can be found in the published state on the <code>action_rotation_percent</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="action-rotation-percent-speed-numeric" tabindex="-1"><a class="header-anchor" href="#action-rotation-percent-speed-numeric" aria-hidden="true">#</a> Action rotation percent speed (numeric)</h3><p>Rotation percent speed. Value can be found in the published state on the <code>action_rotation_percent_speed</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="action-rotation-time-numeric" tabindex="-1"><a class="header-anchor" href="#action-rotation-time-numeric" aria-hidden="true">#</a> Action rotation time (numeric)</h3><p>Rotation time. Value can be found in the published state on the <code>action_rotation_time</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>ms</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',22),b={},v=(0,o(983744).Z)(b,[["render",function(e,t){const o=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.kq)(" !!!! "),(0,i.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,i.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,i.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,i.kq)(" !!!! "),n,(0,i._)("table",null,[a,(0,i._)("tbody",null,[r,(0,i._)("tr",null,[d,(0,i._)("td",null,[(0,i.Wm)(o,{to:"/supported-devices/#v=Xiaomi"},{default:(0,i.w5)((()=>[(0,i.Uk)("Xiaomi")])),_:1})])]),c,l,s])]),(0,i.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),u,h,p,(0,i.kq)(" Notes END: Do not edit below this line "),m,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[(0,i.Uk)("How to use device type specific configuration")])),_:1})])]),g])}]])}}]);
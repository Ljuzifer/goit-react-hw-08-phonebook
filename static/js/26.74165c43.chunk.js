"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[26],{3026:function(n,r,t){t.r(r),t.d(r,{default:function(){return J}});var e,o,i,a=t(2791),s=t(9434),d=t(4270),u=t(8427),p=t(168),l=t(5867),c=l.zo.div(e||(e=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 4px;\n  border: 1px solid #2a2a2a;\n  border-radius: 4px;\n"]))),x=l.zo.p(o||(o=(0,p.Z)(["\n  margin-top: 0;\n  margin-bottom: 0;\n"]))),f=l.zo.button(i||(i=(0,p.Z)(["\n  border: none;\n  font: inherit;\n  cursor: pointer;\n  outline: none;\n  margin-left: auto;\n  border-radius: 4px;\n  padding: 8px 12px;\n  background-color: #3f51b5;\n  color: #fff;\n\n  &:hover,\n  &:focus {\n    background-color: #303f9f;\n  }\n\n  &:active {\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n  }\n"]))),g=t(184);function b(n){var r=n.id,t=n.text,e=(0,s.I0)();return(0,g.jsxs)(c,{children:[(0,g.jsx)(x,{children:t}),(0,g.jsx)(f,{type:"button",onClick:function(){return e((0,u._5)(r))},children:"Delete"})]})}var h,m,k,v,j=function(n){return n.tasks.loading},w=function(n){return n.tasks.filter},y=function(n){return n.tasks.items},z=l.zo.ul(h||(h=(0,p.Z)(["\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 12px;\n"])));function Z(){var n={tasks:(0,s.v9)(y),filter:(0,s.v9)(w),loading:(0,s.v9)(j)}.tasks;return(0,g.jsx)(z,{children:n.map((function(n){var r=n.id,t=n.text;return(0,g.jsx)("li",{children:(0,g.jsx)(b,{id:r,text:t})},r)}))})}var _,I=l.zo.form(m||(m=(0,p.Z)(["\n  display: flex;\n  width: 100%;\n  gap: 4px;\n  margin-bottom: 12px;\n"]))),C=l.zo.input(k||(k=(0,p.Z)(["\n  flex-grow: 1;\n  padding: 8px;\n  border: 1px solid rgba(33, 33, 33, 0.2);\n  border-radius: 4px;\n  font: inherit;\n  line-height: 16px;\n  letter-spacing: 0.01em;\n  resize: none;\n"]))),q=l.zo.button(v||(v=(0,p.Z)(["\n  border: none;\n  font: inherit;\n  cursor: pointer;\n  outline: none;\n  padding: 0 8px;\n  border-radius: 4px;\n  background-color: #3f51b5;\n  color: #fff;\n\n  &:hover,\n  &:focus {\n    background-color: #303f9f;\n  }\n\n  &:active {\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n  }\n"])));function D(){var n=(0,s.I0)();return(0,g.jsxs)(I,{onSubmit:function(r){r.preventDefault();var t=r.currentTarget,e=t.elements.text.value;if(""!==e)return n((0,u.gI)(e)),void t.reset();alert("Task cannot be empty. Enter some text!")},children:[(0,g.jsx)(C,{name:"text"}),(0,g.jsx)(q,{type:"submit",children:"Add task"})]})}var E=(0,l.vJ)(_||(_=(0,p.Z)(["\nbody{\n    background-image: url('https://kartinki.pics/uploads/posts/2021-07/1625655309_10-kartinkin-com-p-biblioteka-art-art-krasivo-11.jpg');\n}\n"])));function J(){var n=(0,s.I0)(),r=(0,s.v9)(j);return(0,a.useEffect)((function(){n((0,u.Jv)())}),[n]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(d.q,{children:(0,g.jsx)("title",{children:"Your tasks"})}),(0,g.jsx)(D,{}),(0,g.jsx)("div",{children:r&&"Request in progress..."}),(0,g.jsx)(Z,{}),(0,g.jsx)(E,{})]})}}}]);
//# sourceMappingURL=26.74165c43.chunk.js.map
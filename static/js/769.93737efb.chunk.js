(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[769],{5769:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return N}});var r,a,o,i,c,s,u=t(9439),l=t(2791),d=t(9434),p=t(8097),f=t(2007),m=t.n(f),x=t(2286),b=t(168),h=t(6444),y=h.ZP.form(r||(r=(0,b.Z)(["\n  padding: 20px;\n  border: 1px solid #000000;\n  border-radius: 4px;\n"]))),g=h.ZP.div(a||(a=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  row-gap: 15px;\n"]))),v=h.ZP.label(o||(o=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  row-gap: 5px;\n  width: 200px;\n"]))),Z=h.ZP.button(i||(i=(0,b.Z)(["\n  display: block;\n  width: 95px;\n  margin: 0;\n  cursor: pointer;\n  border-radius: 5px;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    background-color: #4caf50;\n  }\n"]))),j=t(184),k=function(){var n=(0,l.useState)(""),e=(0,u.Z)(n,2),t=e[0],r=e[1],a=(0,l.useState)(""),o=(0,u.Z)(a,2),i=o[0],c=o[1],s=(0,d.I0)(),f=(0,d.v9)(x.oy),m=function(n){var e=n.currentTarget.name,t=n.currentTarget.value;switch(e){case"name":r(t);break;case"number":c(t);break;default:return}},b=function(){r(""),c("")};return(0,j.jsx)(y,{onSubmit:function(n){if(n.preventDefault(),f.find((function(e){return e.name.toLocaleLowerCase()===n.currentTarget.name.value.toLocaleLowerCase()})))return alert("".concat(n.currentTarget.name.value," is already in contacs."));s((0,p.uK)({name:t,number:i})),b()},children:(0,j.jsxs)(g,{children:[(0,j.jsxs)(v,{children:["Name",(0,j.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:t,onChange:m})]}),(0,j.jsxs)(v,{children:["Number",(0,j.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:i,onChange:m})]}),(0,j.jsx)(Z,{type:"submit",children:"Add contacts"})]})})};k.protoTypes={onSubmit:m().func.isRequired};var C,P,w,T,_,O=h.ZP.li(c||(c=(0,b.Z)(["\n  display: flex;\n  justify-content: space-between;\n  & :not(:last-child) {\n    margin-bottom: 5px;\n  }\n"]))),I=h.ZP.button(s||(s=(0,b.Z)(["\n  border-radius: 5px;\n  cursor: pointer;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  & :hover {\n    background-color: #4caf50;\n  }\n"]))),A=function(n){var e=n.name,t=n.number,r=n.id,a=n.onDeleteContact;return(0,j.jsxs)(O,{children:[(0,j.jsxs)("span",{children:[e,": ",t]}),(0,j.jsx)(I,{type:"button",onClick:function(){return a(r)},children:"Delete"})]})},D=h.ZP.li(C||(C=(0,b.Z)(["\n  list-style: none;\n  padding: 0;\n  margin: 20px 0 0 0;\n"]))),S=function(){var n=(0,d.I0)(),e=(0,d.v9)(x.DI);return(0,l.useEffect)((function(){n((0,p.yF)())}),[n]),(0,j.jsx)(D,{children:e.map((function(e){var t=e.name,r=e.number,a=e.id;return(0,j.jsx)(A,{id:a,name:t,number:r,onDeleteContact:function(){return n((0,p.GK)(a))}},a)}))})},z=t(6895),E=h.ZP.label(P||(P=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  row-gap: 5px;\n  width: 200px;\n"]))),L=function(){var n=(0,d.I0)(),e=(0,d.v9)(x.AD);return(0,j.jsxs)(E,{children:["Find contacts by name",(0,j.jsx)("input",{type:"text",value:e,onChange:function(e){return n((0,z.xO)(e.currentTarget.value))}})]})},R=h.ZP.h2(w||(w=(0,b.Z)(["\n  text-align: center;\n  font-size: 26px;\n  margin-bottom: 20px;\n"]))),F=h.ZP.div(T||(T=(0,b.Z)(["\n  margin: 0 auto;\n  padding: 20px;\n  background-color: #f8f8f8;\n"]))),q=h.ZP.div(_||(_=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border-radius: 4px;\n"]))),N=function(){var n=(0,d.I0)(),e=(0,d.v9)(x.C2);return(0,l.useEffect)((function(){n((0,p.yF)())}),[n]),(0,j.jsxs)(F,{children:[(0,j.jsx)(R,{children:"Phone book"}),(0,j.jsx)(k,{}),(0,j.jsx)(R,{children:"Contacts"}),(0,j.jsxs)(q,{children:[(0,j.jsx)(L,{}),e?(0,j.jsx)("h2",{children:"Contactbook is empty, please add your first contact!"}):(0,j.jsx)(S,{})]})]})}},888:function(n,e,t){"use strict";var r=t(9047);function a(){}function o(){}o.resetWarningCache=a,n.exports=function(){function n(n,e,t,a,o,i){if(i!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function e(){return n}n.isRequired=n;var t={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:o,resetWarningCache:a};return t.PropTypes=t,t}},2007:function(n,e,t){n.exports=t(888)()},9047:function(n){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=769.93737efb.chunk.js.map
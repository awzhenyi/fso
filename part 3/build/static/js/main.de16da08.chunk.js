(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{40:function(e,n,t){},41:function(e,n,t){"use strict";t.r(n);var c=t(1),s=t.n(c),o=t(15),r=t.n(o),a=t(4),u=t(0),i=function(e){var n=e.newFilter,t=e.setNewFilter;return Object(u.jsx)("form",{onSubmit:function(e){e.preventDefault()},children:Object(u.jsx)("input",{value:n,onChange:function(e){t(e.target.value)}})})},b=t(16),l=t(3),j=t.n(l),d="/api/persons",m=function(e){var n=e.persons,t=e.setPersons,c=e.newName,s=e.setNewName,o=e.newNumber,r=e.setNewNumber,a=e.setSuccessMessage;return Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault();var u,i={name:c,number:o};if(n.some((function(e){return e.name===i.name}))){if(!window.confirm("".concat(c," already exists to the phonebook, update his/her number?")))return;var l,m=Object(b.a)(n);try{var f=function(){var e=l.value;e.name===i.name&&(!function(e,n){j.a.put("".concat(d,"/").concat(e),n)}(e.id,i),j.a.get(d).then((function(n){t(n.data),a("Updated phone number of ".concat(e.name," to ").concat(i.number)),setTimeout((function(){a(null)}),5e3)})),s(""),r(""))};for(m.s();!(l=m.n()).done;)f()}catch(h){m.e(h)}finally{m.f()}}else(u=i,j.a.post(d,u)).then((function(e){t(n.concat(e.data)),a("Created new entry: ".concat(i.name," with phone number : ").concat(i.number)),setTimeout((function(){a(null)}),5e3),s(""),r("")}))},children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Add New Person"}),"name: ",Object(u.jsx)("input",{value:c,onChange:function(e){s(e.target.value)}}),Object(u.jsxs)("div",{children:["number: ",Object(u.jsx)("input",{value:o,onChange:function(e){r(e.target.value)}})]})]}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{type:"submit",children:"add"})})]})},f=function(e){var n=e.id,t=e.personName,c=e.personNumber,s=e.persons,o=e.setPersons,r=e.setSuccessMessage;return Object(u.jsxs)("div",{className:"person",children:[t,c,Object(u.jsx)("button",{onClick:function(){window.confirm("Do you want to delete this entry?")&&(function(e){return j.a.delete("".concat(d,"/").concat(e))}(n).then((function(e){console.log(e)})),r("Deleted entry of ".concat(t," : ").concat(c)),setTimeout((function(){r(null)}),5e3),o(s.filter((function(e){return e.id!==n}))))},children:"delete"})]})},h=function(){var e=Object(c.useState)([]),n=Object(a.a)(e,2),t=n[0],s=n[1],o=Object(c.useState)(""),r=Object(a.a)(o,2),b=r[0],l=r[1],d=Object(c.useState)(""),h=Object(a.a)(d,2),p=h[0],O=h[1],v=Object(c.useState)(""),w=Object(a.a)(v,2),x=w[0],N=w[1],g=Object(c.useState)(null),S=Object(a.a)(g,2),y=S[0],k=S[1];return Object(c.useEffect)((function(){j.a.get("/api/persons").then((function(e){console.log(e.data),s(function(e){var n=[];return e.forEach((function(e){var t=e.name,c=e.number,s={id:e.id,name:t,number:c};n.push(s)})),n}(e.data))}))}),[]),Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Phonebook"}),null!==y?Object(u.jsx)("div",{className:"message",children:y}):null,Object(u.jsx)("h2",{children:"Filter By"}),Object(u.jsx)(i,{newFilter:x,setNewFilter:N}),Object(u.jsx)(m,{persons:t,setPersons:s,newName:b,setNewName:l,newNumber:p,setNewNumber:O,setSuccessMessage:k}),Object(u.jsx)("h2",{children:"Numbers"}),t.filter((function(e){return e.name.toLowerCase().includes(x)})).map((function(e){return Object(u.jsx)(f,{id:e.id,personName:e.name,personNumber:e.number,persons:t,setPersons:s,setSuccessMessage:k},e.id)}))]})};t(40);r.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(h,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.de16da08.chunk.js.map
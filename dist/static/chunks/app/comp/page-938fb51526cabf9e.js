(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6],{3566:function(e,t,a){Promise.resolve().then(a.bind(a,6610))},6610:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return o}});var s=a(7437),n=a(129),r=a(8324),l=a(2265);let c=e=>{let{titulo:t,nombre:a,telefono:n}=e;return(0,s.jsxs)("table",{className:"table-auto w-50 whitespace-no-wrap mx-auto",children:[(0,s.jsxs)("thead",{children:[(0,s.jsx)("tr",{children:(0,s.jsx)("th",{className:"bg-blueFirst rounded-tl rounded-tr text-center text-gray-200",colSpan:"3",children:t})}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{className:"text-center px-2  title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200 rounded-bl",children:"Nombres"}),(0,s.jsx)("th",{className:"text-center px-2 py-1 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200",children:"Telefono"}),(0,s.jsx)("th",{className:"text-center px-2 py-1 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200",children:"Whatsapp"})]})]}),(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"px-2 py-3 text-sm text-center text-gray-900",children:a}),(0,s.jsx)("td",{className:"px-2 py-3 text-sm text-center text-blue-500",children:(0,s.jsx)("a",{href:"tel:+51".concat(n),children:n})}),(0,s.jsx)("td",{className:"px-2 py-3 text-sm text-center text-gray-900",children:(0,s.jsx)("a",{className:"text-blue-500 text-sm",href:"https://wa.me/+51".concat(n),children:"Click para acceder"})})]})})]})};function i(e){let{part:t}=e,[a,n]=(0,l.useState)(t),[r,c]=(0,l.useState)(null);return(0,l.useState)(()=>{1===t?(n("1"),c("cancelado")):2===t?(n("2"),c("contactado")):3===t&&(n("3"),c("confirmado"))},[t]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"flex justify-evenly py-3",children:[(0,s.jsx)("button",{type:"button",className:"border ".concat("contactado"===r?"bg-yellow-600 text-white":"border-yellow-600 hover:bg-yellow-600 hover:text-white bg-white text-yellow-600"," font-bold py-2 px-4 rounded text-sm"),onClick:()=>{n("2"),c("contactado")},children:"Contactado"}),(0,s.jsx)("button",{type:"button",className:"border ".concat("confirmado"===r?"bg-green-600 text-white":"border-green-600 hover:bg-green-600 hover:text-white bg-white text-green-600"," font-bold py-2 px-4 rounded text-sm"),onClick:()=>{n("3"),c("confirmado")},children:"Confirmado"}),(0,s.jsx)("button",{type:"button",className:"border ".concat("cancelado"===r?"bg-red-500 text-white":"border-red-500 hover:bg-red-500 hover:text-white bg-white text-red-500"," font-bold py-2 px-4 rounded text-sm"),onClick:()=>{n("1"),c("cancelado")},children:"Cancelado"})]}),(0,s.jsx)("input",{type:"hidden",value:a})]})}function o(e){let{nombres:t,apellidos:a,edad:o,estaca:d,barrio:x,telefono:m,nom_c1:h,telef_c1:u,nom_c2:b,telef_c2:p,participacion:g,inf_med:f,inf_alim:j,dieta:y}=e,[N,v]=(0,l.useState)(!1);(0,l.useEffect)(()=>{"Si"===y?v(!0):v(!1)},[y]);let[w,k]=(0,l.useState)(!1),C=O(m),F=O(u),S=O(p),E=F&&F.trim().length>0,T=S&&S.trim().length>0,_=I(h),V=I(b);function A(){k(!1)}function O(e){let t=e.replace(/[\s+]/g,"");"51"===t.charAt(0)&&(t=t.slice(1));let a=t.indexOf("9");return -1!==a&&(t=t.slice(a)),t}function I(e){return e.toLowerCase().split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ")}return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("button",{className:"text-white text-sm bg-redFirst border-0 py-1 px-4 focus:outline-none hover:bg-redSecond rounded",type:"button",onClick:function(){k(!0)},children:"Editar"}),(0,s.jsx)(n.u,{appear:!0,show:w,as:l.Fragment,children:(0,s.jsxs)(r.V,{as:"div",className:"relative z-10",onClose:A,children:[(0,s.jsx)(n.u.Child,{as:l.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,s.jsx)("div",{className:"fixed inset-0 bg-black/25"})}),(0,s.jsx)("div",{className:"fixed inset-0 overflow-y-auto",children:(0,s.jsx)("div",{className:"flex min-h-full items-center justify-center p-4 text-center",children:(0,s.jsx)(n.u.Child,{as:l.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:(0,s.jsxs)(r.V.Panel,{className:"max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",children:[(0,s.jsxs)(r.V.Title,{as:"h3",className:"text-lg font-medium leading-6 text-gray-900",children:[t+" "+a," (",o,")"]}),(0,s.jsxs)("div",{className:"mt-2 flex flex-nowrap text-center",children:[(0,s.jsxs)("div",{className:"mx-4",children:[(0,s.jsx)("h3",{className:"text-black",children:"Estaca"}),(0,s.jsx)("p",{className:"text-sm text-gray-500",children:d})]}),(0,s.jsxs)("div",{className:"mx-4",children:[(0,s.jsx)("h3",{className:"text-black",children:"Unidad"}),(0,s.jsx)("p",{className:"text-sm text-gray-500",children:x})]}),(0,s.jsxs)("div",{className:"mb-3 mx-4",children:[(0,s.jsx)("h3",{className:"text-black",children:"Llamar"}),(0,s.jsx)("a",{className:"text-sm text-blue-500",href:"tel:+51".concat(C),children:C})]}),(0,s.jsxs)("div",{className:"mb-3 mx-4",children:[(0,s.jsx)("h3",{className:"text-black",children:"Whatsapp"}),(0,s.jsx)("a",{className:"text-blue-500 text-sm",href:"https://wa.me/+51".concat(C),children:"Click para acceder"})]})]}),(0,s.jsxs)("div",{children:[E&&(0,s.jsx)(c,{titulo:T?"Contacto 1":"Contacto",nombre:_,telefono:F}),!E&&T&&(0,s.jsx)(c,{titulo:"Contacto",nombre:V,telefono:S}),T&&E&&(0,s.jsx)(c,{titulo:"Contacto 2",nombre:V,telefono:S})]}),(0,s.jsxs)("form",{action:"",children:[(0,s.jsx)(i,{part:g}),(0,s.jsxs)("div",{children:[(0,s.jsx)("hr",{className:"my-4"}),(0,s.jsx)("label",{className:"block text-sm font-medium leading-6 text-gray-900 mb-2",children:"Informaci\xf3n M\xe9dica"}),(0,s.jsx)("input",{type:"text",className:"block w-full rounded-md border-0 py-1.5 pl-2 pr-2 mb-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-black sm:text-sm ",defaultValue:f}),(0,s.jsx)("label",{className:"block text-sm font-medium leading-6 text-gray-900 mb-2",children:"Informaci\xf3n Alimenticia"}),(0,s.jsx)("input",{type:"text",className:"block w-full rounded-md border-0 py-1.5 pl-2 pr-2 mb-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-black sm:text-sm ",defaultValue:j}),(0,s.jsxs)("div",{className:"relative flex gap-x-3",children:[(0,s.jsx)("div",{className:"flex h-6 items-center",children:(0,s.jsx)("input",{type:"checkbox",id:"dieta",name:"dieta",className:"h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600",defaultChecked:N,onChange:e=>v(e.target.checked)})}),(0,s.jsxs)("div",{className:"text-sm leading-6",children:[(0,s.jsx)("label",{className:"font-medium text-gray-900",children:"Necesita dieta"}),(0,s.jsx)("p",{className:"text-gray-500",children:"Solo marcar si lo indica los padres"})]})]})]})]}),(0,s.jsx)("div",{className:"mt-4",children:(0,s.jsx)("button",{type:"submit",className:"inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",onClick:A,children:"Guardar"})})]})})})})]})})]})}}},function(e){e.O(0,[247,971,69,744],function(){return e(e.s=3566)}),_N_E=e.O()}]);
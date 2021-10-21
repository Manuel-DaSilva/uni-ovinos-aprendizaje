"use strict";(self.webpackChunkovinos_simulacion=self.webpackChunkovinos_simulacion||[]).push([[937],{9937:(Z,c,r)=>{r.r(c),r.d(c,{TestModule:()=>q});var i=r(8583),a=r(80),e=r(639);const l=[{text:"random question",answers:["answer 1","answer 2","answer 3","answer 4"],correctAnswerIndex:0,imageUrl:"https://picsum.photos/200/300"},{text:"random question 2 ",answers:["answer 1","answer 2","answer 3","answer 4"],correctAnswerIndex:1},{text:"random question 3",answers:["answer 1","answer 2","answer 3","answer 4"],correctAnswerIndex:2},{text:"random question 4 ",answers:["answer 1","answer 2","answer 3","answer 4"],correctAnswerIndex:4},{text:"random question 5",answers:["answer 1","answer 2","answer 3","answer 4"],correctAnswerIndex:6,imageUrl:"https://picsum.photos/200/300"},{text:"random question 6",answers:["answer 1","answer 2","answer 3","answer 4"],correctAnswerIndex:0}];let u=(()=>{class t{constructor(){}getRandomQuestion(){const s=l,o=Math.floor(Math.random()*l.length);return console.log(o),s[o]}}return t.\u0275fac=function(s){return new(s||t)},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var m=r(4207),p=r(3758);function d(t,n){if(1&t&&e._UZ(0,"img",8),2&t){const s=e.oxw(2);e.Q6J("src",s.question.imageUrl,e.LSH)("alt",s.question.text)}}function f(t,n){if(1&t){const s=e.EpF();e.TgZ(0,"li",10),e.NdJ("click",function(){const Q=e.CHM(s).index;return e.oxw(3).answerQuestion(Q)}),e._UZ(1,"button",11),e.qZA()}if(2&t){const s=n.$implicit;e.xp6(1),e.Q6J("label",s)}}function w(t,n){if(1&t&&(e.TgZ(0,"ul"),e.YNc(1,f,2,1,"li",9),e.qZA()),2&t){const s=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",s.question.answers)}}function g(t,n){if(1&t&&e._UZ(0,"p-messages",14),2&t){const s=e.oxw(3);e.Q6J("value",s.successMessage)("enableService",!1)}}function _(t,n){if(1&t&&e._UZ(0,"p-messages",14),2&t){const s=e.oxw(3);e.Q6J("value",s.errorMessage)("enableService",!1)}}function x(t,n){if(1&t){const s=e.EpF();e.YNc(0,g,1,2,"p-messages",12),e.YNc(1,_,1,2,"p-messages",12),e.TgZ(2,"button",13),e.NdJ("click",function(){return e.CHM(s),e.oxw(2).refreshQuestion()}),e.qZA()}if(2&t){const s=e.oxw(2);e.Q6J("ngIf",s.wasCorrect),e.xp6(1),e.Q6J("ngIf",!s.wasCorrect)}}function v(t,n){if(1&t&&(e.TgZ(0,"div",2),e.TgZ(1,"div",3),e.YNc(2,d,1,2,"img",4),e.qZA(),e.TgZ(3,"p",5),e.TgZ(4,"b"),e._uU(5,"Pregunta: "),e.qZA(),e._uU(6),e.qZA(),e._UZ(7,"hr"),e.YNc(8,w,2,1,"ul",6),e.YNc(9,x,3,2,"ng-template",null,7,e.W1O),e.qZA()),2&t){const s=e.MAs(10),o=e.oxw();e.xp6(2),e.Q6J("ngIf",o.question.imageUrl),e.xp6(4),e.Oqu(o.question.text),e.xp6(2),e.Q6J("ngIf",o.showOptions)("ngIfElse",s)}}const h=[{path:"",component:(()=>{class t{constructor(s){this.questionService=s,this.question=null,this.showOptions=!0,this.wasCorrect=!1,this.errorMessage=[{severity:"error",summary:"Incorrecto",detail:"La respuesta fue incorrecta."}],this.successMessage=[{severity:"success",summary:"Correcto",detail:"Respondiste bien la pregunta!"}],this.refreshQuestion()}refreshQuestion(){this.question=this.questionService.getRandomQuestion(),this.showOptions=!0,console.log(this.question)}answerQuestion(s){var o;s===(null===(o=this.question)||void 0===o?void 0:o.correctAnswerIndex)?(console.log("Correct!"),this.wasCorrect=!0):(console.log("wrong!"),this.wasCorrect=!1),this.showOptions=!1}}return t.\u0275fac=function(s){return new(s||t)(e.Y36(u))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-test"]],decls:2,vars:1,consts:[[1,"flex","justify-center","fadeIn"],["class","w-full max-w-md mt-8 md:mt-14",4,"ngIf"],[1,"w-full","max-w-md","mt-8","md:mt-14"],[1,"flex","justify-center"],["class","rounded-md max-h-48 w-auto mb-8",3,"src","alt",4,"ngIf"],[1,"flex-grow","mb-8"],[4,"ngIf","ngIfElse"],["refreshButton",""],[1,"rounded-md","max-h-48","w-auto","mb-8",3,"src","alt"],["class","mb-4 w-full",3,"click",4,"ngFor","ngForOf"],[1,"mb-4","w-full",3,"click"],["pButton","","type","button",1,"w-full",3,"label"],[3,"value","enableService",4,"ngIf"],["pButton","","icon","pi pi-refresh","type","button","label","Generar otra pregunta",1,"w-full","p-button-outlined","p-button-success",3,"click"],[3,"value","enableService"]],template:function(s,o){1&s&&(e.TgZ(0,"div",0),e.YNc(1,v,11,4,"div",1),e.qZA()),2&s&&(e.xp6(1),e.Q6J("ngIf",o.question))},directives:[i.O5,i.sg,m.Hq,p.V],encapsulation:2}),t})()}];let T=(()=>{class t{}return t.\u0275fac=function(s){return new(s||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[a.Bz.forChild(h)],a.Bz]}),t})();var C=r(954);let q=(()=>{class t{}return t.\u0275fac=function(s){return new(s||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[i.ez,T,C.m]]}),t})()}}]);
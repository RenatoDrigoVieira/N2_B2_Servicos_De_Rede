"use strict";(self.webpackChunkdocker_services_orchestrator_frontend=self.webpackChunkdocker_services_orchestrator_frontend||[]).push([[514],{4514:(D,d,a)=>{a.r(d),a.d(d,{ContainersModule:()=>O});var r=a(3075),u=a(7423),p=a(4904),c=a(1125),s=a(4106),C=a(8099),f=a(7531),i=a(4999),g=a(843),h=a(5029),t=a(5e3);function x(n,o){1&n&&(t.TgZ(0,"th",15),t._uU(1,"ID."),t.qZA())}function Z(n,o){if(1&n&&(t.TgZ(0,"td",16),t._uU(1),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.Oqu(e.id)}}function v(n,o){1&n&&(t.TgZ(0,"th",15),t._uU(1,"Nome."),t.qZA())}function T(n,o){if(1&n&&(t.TgZ(0,"td",16),t._uU(1),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.Oqu(e.name)}}function y(n,o){1&n&&(t.TgZ(0,"th",15),t._uU(1,"A\xe7\xe3o"),t.qZA())}function _(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"td",16)(1,"div")(2,"button",17),t.NdJ("click",function(){const U=t.CHM(e).$implicit;return t.oxw().deleteContainer(U.id)}),t.TgZ(3,"mat-icon"),t._uU(4,"delete"),t.qZA()()()()}}function w(n,o){1&n&&t._UZ(0,"tr",18)}function N(n,o){1&n&&t._UZ(0,"tr",19)}const M=g.Bz.forChild([{path:"",component:(()=>{class n{constructor(e){this.dialog=e,this.containerForm=new r.cw({name:new r.NI("",[r.kI.required])}),this.dataSource=[{id:"1",name:"teste"}],this.displayedColumns=["id","name","action"]}ngOnInit(){}ngOnDestroy(){}createContainer(){}deleteContainer(e){this.dialog.open(h.V,{height:"170px",width:"300px"}).afterClosed().subscribe(l=>{})}removeAllContainers(){}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p.uw))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-containers"]],decls:29,vars:4,consts:[[1,"create-container"],[3,"formGroup","ngSubmit"],["matInput","","formControlName","name"],["mat-raised-button","","color","primary","type","submit"],[1,"list-containers"],[1,"remove-all"],["mat-raised-button","","color","primary",3,"click"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","action"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-icon-button","","color","primary",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(e,m){1&e&&(t.TgZ(0,"div",0)(1,"mat-accordion")(2,"mat-expansion-panel")(3,"mat-expansion-panel-header")(4,"mat-panel-title"),t._uU(5," Criar novo container "),t.qZA()(),t.TgZ(6,"form",1),t.NdJ("ngSubmit",function(){return m.createContainer()}),t.TgZ(7,"mat-form-field")(8,"mat-label"),t._uU(9,"Nome do container"),t.qZA(),t._UZ(10,"input",2),t.qZA(),t.TgZ(11,"button",3),t._uU(12,"Criar"),t.qZA()()()()(),t.TgZ(13,"div",4)(14,"div",5)(15,"button",6),t.NdJ("click",function(){return m.removeAllContainers()}),t._uU(16," Excluir todos os containers "),t.qZA()(),t.TgZ(17,"table",7),t.ynx(18,8),t.YNc(19,x,2,0,"th",9),t.YNc(20,Z,2,1,"td",10),t.BQk(),t.ynx(21,11),t.YNc(22,v,2,0,"th",9),t.YNc(23,T,2,1,"td",10),t.BQk(),t.ynx(24,12),t.YNc(25,y,2,0,"th",9),t.YNc(26,_,5,0,"td",10),t.BQk(),t.YNc(27,w,1,0,"tr",13),t.YNc(28,N,1,0,"tr",14),t.qZA()()),2&e&&(t.xp6(6),t.Q6J("formGroup",m.containerForm),t.xp6(11),t.Q6J("dataSource",m.dataSource),t.xp6(10),t.Q6J("matHeaderRowDef",m.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",m.displayedColumns))},directives:[c.pp,c.ib,c.yz,c.yK,r._Y,r.JL,r.sg,s.KE,s.hX,f.Nt,r.Fj,r.JJ,r.u,u.lW,i.BZ,i.w1,i.fO,i.ge,i.Dz,i.ev,C.Hw,i.as,i.XQ,i.nj,i.Gk],styles:[".create-container[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;justify-content:center;margin-top:20px}.create-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:20px}.list-containers[_ngcontent-%COMP%]{width:100%;margin-top:40px;display:column;align-items:center;justify-content:center}.list-containers[_ngcontent-%COMP%]   .remove-all[_ngcontent-%COMP%]{width:98%;display:flex;align-items:flex-end;justify-content:flex-end}table[_ngcontent-%COMP%]{width:98%;margin-top:10px}mat-accordion[_ngcontent-%COMP%]{width:90%}mat-expansion-panel[_ngcontent-%COMP%]{width:100%}mat-form-field[_ngcontent-%COMP%]{width:90%}.mat-column-name[_ngcontent-%COMP%]{width:70%!important}"]}),n})()}]);let O=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[M,c.To,f.c,s.lN,r.UX,u.ot,i.p0,C.Ps,p.Is]]}),n})()}}]);
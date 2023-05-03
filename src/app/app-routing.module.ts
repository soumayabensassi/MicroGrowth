


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPublicationComponent } from './Component/add-publication/add-publication.component';
import { ChangemdpComponent } from './Component/changemdp/changemdp.component';
import { CommentComponent } from './Component/comment/comment.component';
import { ConfirmeCompteComponent } from './Component/confirme-compte/confirme-compte.component';
import { HomePageComponent } from './Component/home-page/home-page.component';
import { ProfilComponent } from './Component/profil/profil.component';
import { PublicationComponent } from './Component/publication/publication.component';
import { SigninComponent } from './Component/signin/signin.component';
import { SignupComponent } from './Component/signup/signup.component';
import { UpdatepasswordComponent } from './Component/updatepassword/updatepassword.component';
import { WritemsgComponent } from './Component/writemsg/writemsg.component';
import { HomepageBACKComponent } from './Component/homepage-back/homepage-back.component';
import { ListUserBACKComponent } from './Component/list-user-back/list-user-back.component';
import { ListPublictaionBACKComponent } from './Component/list-publictaion-back/list-publictaion-back.component';
import { AllTemplateAdminComponentComponent } from './Component/all-template-admin-component/all-template-admin-component.component';
import { AllTemplateUserComponentComponent } from './Component/all-template-user-component/all-template-user-component.component';
import { AccountComponent } from './Component/Banking/account/account.component';
import { AdminaccountComponent } from './Component/Banking/account/admin/adminaccount/adminaccount.component';
import { AdminTransactionComponent } from './Component/Banking/account/admin/admin-transaction/admin-transaction.component';
import { UpdateBankAccountComponent } from './Component/Banking/account/admin/update-bank-account/update-bank-account.component';
import {MakeTransactionComponent} from "./Component/Banking/make-transaction/make-transaction.component";
import {SuccesfultransferComponent} from "./Component/Banking/make-transaction/succesfultransfer/succesfultransfer.component";
import {
  TransfernotallowedComponent
} from "./Component/Banking/make-transaction/transfernotallowed/transfernotallowed.component";
import {TransactionhistoryComponent} from "./Component/Banking/account/transactionhistory/transactionhistory.component";
import {DownloadsuccesfullComponent} from "./Component/Banking/account/downloadsuccesfull/downloadsuccesfull.component";

const routes: Routes = [  {
  path:'admin',
  component:AllTemplateAdminComponentComponent,
  children:[
    {path:'',component:HomepageBACKComponent},
    {path:'listuser',component:ListUserBACKComponent},
    {path:'listbank',component:AdminaccountComponent},
    {path:'listpublicationback',component:ListPublictaionBACKComponent},
    {path:'listtransaction',component:AdminTransactionComponent},
    { path: 'updatebankaccount/:id', component: UpdateBankAccountComponent }
  ]

},
{
  path:'',
  component: AllTemplateUserComponentComponent,
  children:[
    {path:'',component:HomePageComponent},
    {path:'publication',component:PublicationComponent},
{path:'msg',component:WritemsgComponent},
{path:'user/profil',component:ProfilComponent},
{path:'comment/:idPUB',component:CommentComponent},
{path:'updatepPassword/:token/:email',component:UpdatepasswordComponent},
{path:'confirmeCompte/:email',component:ConfirmeCompteComponent},
{path:'signin',component:SigninComponent},
{path:'homePage',component:HomePageComponent},
{path:'addPublication',component:AddPublicationComponent},
{path:'updatePublication/:id',component:AddPublicationComponent},
{path:'forgetPAssword',component:ChangemdpComponent},
{path:'signup',component:SignupComponent},
{path:'user/bankingaccount',component:AccountComponent},
    {path:'user/bankingaccount/makeTransaction/:id',component:MakeTransactionComponent},
    {path:'succesfultransfer',component:SuccesfultransferComponent},
    {path:'transfernotallowed',component:TransfernotallowedComponent},
    {path:'transactionhistory/:id',component:TransactionhistoryComponent},
    {path:'downloadsuccesfull',component:DownloadsuccesfullComponent}
   ]
}
];






@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

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
import{ListCreditBackComponent} from './Component/list-credit-back/list-credit-back.component';
import{AddCreditUserComponent} from './Component/add-credit-user/add-credit-user.component';
import{ListPacksCreditsComponent} from './Component/list-packs-credits/list-packs-credits.component';
import { CreditDetailsFrontComponent } from './Component/credit-details-front/credit-details-front.component';
import { ListMyCreditsFrontComponent } from './Component/list-my-credits-front/list-my-credits-front.component';
import { TableauAmoCreditComponent } from './Component/tableau-amo-credit/tableau-amo-credit.component';
import { AddCreditAdminComponent } from './Component/add-credit-admin/add-credit-admin.component';



const routes: Routes = [  {
  path:'admin',
  component:AllTemplateAdminComponentComponent,
  children:[
    {path:'',component:HomepageBACKComponent},
    {path:'listuser',component:ListUserBACKComponent},
    {path:'listpublicationback',component:ListPublictaionBACKComponent},
    {path:'listcreditback',component:ListCreditBackComponent},
    {path:'addCreditByAdmin',component:AddCreditAdminComponent},

    
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
{path:'creditpack/:idpack',component:CreditDetailsFrontComponent},
{path:'updatepPassword/:token/:email',component:UpdatepasswordComponent},
{path:'confirmeCompte/:email',component:ConfirmeCompteComponent},
{path:'signin',component:SigninComponent},
{path:'homePage',component:HomePageComponent},
{path:'addPublication',component:AddPublicationComponent},
{path:'updatePublication/:id',component:AddPublicationComponent},
{path:'forgetPAssword',component:ChangemdpComponent},
{path:'signup',component:SignupComponent},
{path:'addCreditUser',component:AddCreditUserComponent},
{path:'listPacksCredits',component:ListPacksCreditsComponent},
{path:'ListMyCreditsFrontComponent',component:ListMyCreditsFrontComponent},
{path:'afficherTableauCredit/:id',component:TableauAmoCreditComponent},





  ]
}
];






@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

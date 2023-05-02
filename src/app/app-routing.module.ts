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
import { TrainingComponent } from './Component/training/training.component';
import { ListTrainingBackComponent } from './Component/list-training-back/list-training-back.component';
import { AddtrainingComponent } from './Component/addtraining/addtraining.component';
import { ComplaintComponent } from './Component/complaint/complaint.component';
import { ListComplaintBackComponent } from './Component/list-complaint-back/list-complaint-back.component';
import { Complaint } from './Models/complaint';
import { TrainingdetailComponent } from './Component/trainingdetail/trainingdetail.component';


const routes: Routes = [  {
  path:'admin',
  component:AllTemplateAdminComponentComponent,
  children:[
    {path:'',component:HomepageBACKComponent},
    {path:'listuser',component:ListUserBACKComponent},
    {path:'listpublicationback',component:ListPublictaionBACKComponent},
    {path:'listtrainingback',component:ListTrainingBackComponent},
    {path:'addTraining',component:AddtrainingComponent},
    {path:'updateTraining/:id',component:AddtrainingComponent},
    {path:'listcomplaintback',component:ListComplaintBackComponent}
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
{path:'training',component:TrainingComponent},
{path:'complaint',component:ComplaintComponent},
{path:'updatecomplaint/:id',component:ComplaintComponent} ,
{path:'detail/:id',component:TrainingdetailComponent} 


  ]
}
];






@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

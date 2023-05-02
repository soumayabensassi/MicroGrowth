import { IntrestCalculatorComponent } from './Component/intrest-calculator/intrest-calculator.component';
import { InvestorComponent } from './Component/investor/investor.component';
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
import { InsuranceComponent } from './Component/Insurance-add-back/insurance.component';
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
import { InsuranceKpiBackComponent } from './Component/insurance-kpi-back/insurance-kpi-back.component';
import { InsuranceShowBackComponent } from './Component/insurance-show-back/insurance-show-back.component';
import { InsuranceModifyBackComponent } from './Component/insurance-modify-back/insurance-modify-back.component';
import { AgentComponent } from './Component/agent/agent.component';
import { InsuranceKpisComponent } from './Component/insurance-kpi-front/insurance-kpis.component';
import { CheckInsuranceComponent } from './Component/check-insurance/check-insurance.component';
import { pathToFileURL } from 'url';
import { SimulateInsuranceComponent } from './Component/simulate-insurance/simulate-insurance.component';
import { ListProjetsBackComponent } from './Component/list-projets-back/list-projets-back.component';
import { StartupAddUserComponent } from './Component/startup-add-user/startup-add-user.component';
import { ListInvestmentBackComponent } from './Component/list-investment-back/list-investment-back.component';
import { BourseComponent } from './Component/bourse/bourse.component';

import { PageNotFoundComponent } from './Component/page-not-found/page-not-found.component';
import { AuthGuard } from './Auth/auth.guard';




const routes: Routes = [{
  path: 'admin',
  component: AllTemplateAdminComponentComponent,
  children: [
    { path: '', component: HomepageBACKComponent },
    { path: 'listuser', component: ListUserBACKComponent },
    { path: 'listpublicationback', component: ListPublictaionBACKComponent },
    { path: 'listproject', component: ListProjetsBackComponent },
    { path: 'Insurance-kpi-back', component: InsuranceKpiBackComponent },
    { path: 'Insurance-show-back', component: InsuranceShowBackComponent },
    { path: 'Insurance-modify-back', component: InsuranceModifyBackComponent },
    { path: 'listinvestissement', component: ListInvestmentBackComponent },
    { path: 'calculator', component: IntrestCalculatorComponent },
    { path: 'listtrainingback', component: ListTrainingBackComponent },
    { path: 'addTraining', component: AddtrainingComponent },
    { path: 'updateTraining/:id', component: AddtrainingComponent },
    { path: 'listcomplaintback', component: ListComplaintBackComponent }
  ], canActivate: [AuthGuard], data: { roles: ['[ROLE_ADMIN]'] }

},


{
  path: '',
  component: AllTemplateUserComponentComponent,

  children: [
    { path: '', component: HomePageComponent },
    { path: 'publication', component: PublicationComponent },
    { path: 'msg', component: WritemsgComponent },
    { path: 'user/profil', component: ProfilComponent },
    { path: 'comment/:idPUB', component: CommentComponent },
    { path: 'updatepPassword/:token/:email', component: UpdatepasswordComponent },
    { path: 'confirmeCompte/:email', component: ConfirmeCompteComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'homePage', component: HomePageComponent },
    { path: 'addPublication', component: AddPublicationComponent },
    { path: 'updatePublication/:id', component: AddPublicationComponent },
    { path: 'forgetPAssword', component: ChangemdpComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'homepageBack', component: HomepageBACKComponent },
    { path: 'agent', component: AgentComponent },
    { path: 'Kpi-f', component: InsuranceKpisComponent },
    { path: 'Insurance', component: InsuranceComponent },
    { path: 'check-insurance', component: CheckInsuranceComponent },
    { path: 'simulate-insurance', component: SimulateInsuranceComponent },
    { path: 'notfound', component: PageNotFoundComponent },
    { path: 'project', component: StartupAddUserComponent },
    { path: 'investor', component: InvestorComponent },
    { path: 'investinStock', component: BourseComponent },
    { path: 'training', component: TrainingComponent },
    { path: 'complaint', component: ComplaintComponent },
    { path: 'updatecomplaint/:id', component: ComplaintComponent },
    { path: 'detail/:id', component: TrainingdetailComponent }
  ]
},
];






@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

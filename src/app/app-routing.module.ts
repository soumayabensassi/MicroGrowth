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

import { AccountComponent } from './Component/Banking/account/account.component';
import { AdminaccountComponent } from './Component/Banking/account/admin/adminaccount/adminaccount.component';
import { AdminTransactionComponent } from './Component/Banking/account/admin/admin-transaction/admin-transaction.component';
import { UpdateBankAccountComponent } from './Component/Banking/account/admin/update-bank-account/update-bank-account.component';
import { MakeTransactionComponent } from "./Component/Banking/make-transaction/make-transaction.component";
import { SuccesfultransferComponent } from "./Component/Banking/make-transaction/succesfultransfer/succesfultransfer.component";
import {
  TransfernotallowedComponent
} from "./Component/Banking/make-transaction/transfernotallowed/transfernotallowed.component";
import { TransactionhistoryComponent } from "./Component/Banking/account/transactionhistory/transactionhistory.component";
import { DownloadsuccesfullComponent } from "./Component/Banking/account/downloadsuccesfull/downloadsuccesfull.component";
import { ListCreditBackComponent } from './Component/list-credit-back/list-credit-back.component';
import { AddCreditUserComponent } from './Component/add-credit-user/add-credit-user.component';
import { ListPacksCreditsComponent } from './Component/list-packs-credits/list-packs-credits.component';
import { CreditDetailsFrontComponent } from './Component/credit-details-front/credit-details-front.component';
import { ListMyCreditsFrontComponent } from './Component/list-my-credits-front/list-my-credits-front.component';
import { TableauAmoCreditComponent } from './Component/tableau-amo-credit/tableau-amo-credit.component';
import { AddCreditAdminComponent } from './Component/add-credit-admin/add-credit-admin.component';
import { SimulationCreditFrontComponent } from './Component/simulation-credit-front/simulation-credit-front.component';
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
import { EditInbComponent } from './Component/editInb/editInb.component';
import { EditProjectComponent } from './Component/edit-project/edit-project.component';
import { PageNotFoundComponent } from './Component/page-not-found/page-not-found.component';
import { AuthGuard } from './Auth/auth.guard';
import { ChatComponent } from './Component/chat/chat.component';
import { ListCreditPackBackComponent } from './Component/list-credit-pack-back/list-credit-pack-back.component';
import { AccordeIntreviewBackComponent } from './Component/accorde-intreview-back/accorde-intreview-back.component';
import { ListIntreviewBackComponent } from './Component/list-intreview-back/list-intreview-back.component';
import { ListPenalitiesBackComponent } from './Component/list-penalities-back/list-penalities-back.component';
import { ListCreditPackDemandeComponent } from './Component/list-credit-pack-demande/list-credit-pack-demande.component';




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
    { path: 'listcomplaintback', component: ListComplaintBackComponent },
    { path: 'listcomplaintback', component: ListComplaintBackComponent },
    { path: 'homepageBack', component: HomepageBACKComponent },
    { path: 'listcreditback', component: ListCreditBackComponent },
    { path: 'addCreditByAdmin', component: AddCreditAdminComponent },
    { path: 'listbank', component: AdminaccountComponent },
    { path: 'listtransaction', component: AdminTransactionComponent },
    { path: 'updatebankaccount/:id', component: UpdateBankAccountComponent },
    {path:'listbank',component:AdminaccountComponent},
    {path:'listtransaction',component:AdminTransactionComponent},
    { path: 'updatebankaccount/:id', component: UpdateBankAccountComponent },
    {path:'listcreditback',component:ListCreditBackComponent},
    {path:'ListCreditBackPack',component:ListCreditPackBackComponent},
    {path:'AccorderInterview/:id',component:AccordeIntreviewBackComponent},
    {path:'ListIntreviewBackComponent',component:ListIntreviewBackComponent},
    {path:'ListPenalitiesBackComponent',component:ListPenalitiesBackComponent},
    {path:'ListCreditPackDemandeComponent',component:ListCreditPackDemandeComponent},
  {path:'addCreditByAdmin',component:AddCreditAdminComponent},
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
    { path: 'agent', component: AgentComponent },
    { path: 'Kpi-f', component: InsuranceKpisComponent },
    { path: 'Insurance', component: InsuranceComponent },
    { path: 'check-insurance', component: CheckInsuranceComponent },
    { path: 'simulate-insurance', component: SimulateInsuranceComponent },
    { path: 'project', component: StartupAddUserComponent },
    { path: 'investor', component: InvestorComponent },
    { path: 'investinStock', component: BourseComponent },
    { path: 'training', component: TrainingComponent },
    { path: 'complaint', component: ComplaintComponent },
    { path: 'updatecomplaint/:id', component: ComplaintComponent },
    { path: 'detail/:id', component: TrainingdetailComponent },
    { path: 'addCreditUser', component: AddCreditUserComponent },
    { path: 'listPacksCredits', component: ListPacksCreditsComponent },
    { path: 'ListMyCreditsFrontComponent', component: ListMyCreditsFrontComponent },
    { path: 'afficherTableauCredit/:id', component: TableauAmoCreditComponent },
    { path: 'SimulationCreditFrontComponent', component: SimulationCreditFrontComponent },
    { path: 'creditpack/:id', component: CreditDetailsFrontComponent },
    { path: 'user/bankingaccount', component: AccountComponent },
    { path: 'user/bankingaccount/makeTransaction/:id', component: MakeTransactionComponent },
    { path: 'succesfultransfer', component: SuccesfultransferComponent },
    { path: 'transfernotallowed', component: TransfernotallowedComponent },
    { path: 'transactionhistory/:id', component: TransactionhistoryComponent },
    { path: 'downloadsuccesfull', component: DownloadsuccesfullComponent },
    { path: 'editinv/:id', component: EditInbComponent },
    { path: 'editP/:id', component: EditProjectComponent },
    { path: 'notfound', component: PageNotFoundComponent },
    { path: 'chat', component: ChatComponent },
   
  ]
},
];






@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

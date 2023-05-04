import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Component/footer/footer.component';
import { HeaderComponent } from './Component/header/header.component';
import { HomePageComponent } from './Component/home-page/home-page.component';
import { SignupComponent } from './Component/signup/signup.component';
import { SigninComponent } from './Component/signin/signin.component';
import { PublicationComponent } from './Component/publication/publication.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from  '@angular/common/http';
import { CommentComponent } from './Component/comment/comment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmeCompteComponent } from './Component/confirme-compte/confirme-compte.component';
import { ChangemdpComponent } from './Component/changemdp/changemdp.component';
import { UpdatepasswordComponent } from './Component/updatepassword/updatepassword.component';
import { WritemsgComponent } from './Component/writemsg/writemsg.component';
import { AddPublicationComponent } from './Component/add-publication/add-publication.component';
import { ProfilComponent } from './Component/profil/profil.component';
import { DashboardBACKComponent } from './Component/dashboard-back/dashboard-back.component';
import { HomepageBACKComponent } from './Component/homepage-back/homepage-back.component';
import { InsuranceComponent } from './Component/Insurance-add-back/insurance.component';
import { InsuranceKpisComponent } from './Component/insurance-kpi-front/insurance-kpis.component';
import { ListUserBACKComponent } from './Component/list-user-back/list-user-back.component';
import { ListPublictaionBACKComponent } from './Component/list-publictaion-back/list-publictaion-back.component';
import { AllTemplateUserComponentComponent } from './Component/all-template-user-component/all-template-user-component.component';
import { AllTemplateAdminComponentComponent } from './Component/all-template-admin-component/all-template-admin-component.component';
import { AccountComponent } from './Component/Banking/account/account.component';
import { AdminaccountComponent } from './Component/Banking/account/admin/adminaccount/adminaccount.component';
import { UpdateBankAccountComponent } from './Component/Banking/account/admin/update-bank-account/update-bank-account.component';
import { MakeTransactionComponent } from './Component/Banking/make-transaction/make-transaction.component';
import { SuccesfultransferComponent } from './Component/Banking/make-transaction/succesfultransfer/succesfultransfer.component';
import { TransfernotallowedComponent } from './Component/Banking/make-transaction/transfernotallowed/transfernotallowed.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import { TransactionhistoryComponent } from './Component/Banking/account/transactionhistory/transactionhistory.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatIconModule} from "@angular/material/icon";
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { DownloadsuccesfullComponent } from './Component/Banking/account/downloadsuccesfull/downloadsuccesfull.component';
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
import { SearchComponent } from './Component/search/search.component';
import { TrainingdetailComponent } from './Component/trainingdetail/trainingdetail.component';


import { InsuranceKpiBackComponent } from './Component/insurance-kpi-back/insurance-kpi-back.component';
import { AgentComponent } from './Component/agent/agent.component';
import { InsuranceShowBackComponent } from './Component/insurance-show-back/insurance-show-back.component';
import { InsuranceModifyBackComponent } from './Component/insurance-modify-back/insurance-modify-back.component';
import { CheckInsuranceComponent } from './Component/check-insurance/check-insurance.component';
import { SimulateInsuranceComponent } from './Component/simulate-insurance/simulate-insurance.component';
import { ListProjetsBackComponent } from './Component/list-projets-back/list-projets-back.component';
import { StartupAddUserComponent } from './Component/startup-add-user/startup-add-user.component';
import { ListInvestmentBackComponent } from './Component/list-investment-back/list-investment-back.component';
import { InvestorComponent } from './Component/investor/investor.component';
import { BourseComponent } from './Component/bourse/bourse.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { PageNotFoundComponent } from './Component/page-not-found/page-not-found.component';
import { AuthGuard } from './Auth/auth.guard';
import { AuthInterceptor } from './Auth/auth.interceptor';
import { IntrestCalculatorComponent } from './Component/intrest-calculator/intrest-calculator.component';
import { UserService } from './service/user.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomePageComponent,
    SignupComponent,
    SigninComponent,
    PublicationComponent,
    CommentComponent,
    ConfirmeCompteComponent,
    ChangemdpComponent,
    UpdatepasswordComponent,
    WritemsgComponent,
    AddPublicationComponent,
    ProfilComponent,
    DashboardBACKComponent,
    HomepageBACKComponent,
    InsuranceComponent,
    InsuranceKpisComponent,
    ListUserBACKComponent,
    ListPublictaionBACKComponent,
    AllTemplateUserComponentComponent,
    AllTemplateAdminComponentComponent,
    AccountComponent,
    AdminaccountComponent,
    UpdateBankAccountComponent,
    MakeTransactionComponent,
    SuccesfultransferComponent,
    TransfernotallowedComponent,
    TransactionhistoryComponent,
    DownloadsuccesfullComponent,



    ListCreditBackComponent,
    AddCreditUserComponent,
    ListPacksCreditsComponent,
    CreditDetailsFrontComponent,
    ListMyCreditsFrontComponent,
    TableauAmoCreditComponent,
    AddCreditAdminComponent,
    SimulationCreditFrontComponent,
    TrainingComponent,
    ListTrainingBackComponent,
    AddtrainingComponent,
    ComplaintComponent,
    ListComplaintBackComponent,
    SearchComponent,
    TrainingdetailComponent,
    InsuranceKpiBackComponent,
    AgentComponent,
    InsuranceShowBackComponent,
    InsuranceModifyBackComponent,
    CheckInsuranceComponent,
    SimulateInsuranceComponent,
    ListProjetsBackComponent,
    StartupAddUserComponent,
    ListInvestmentBackComponent,
    InvestorComponent,
    BourseComponent,
    IntrestCalculatorComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    CalendarModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    NgxPaginationModule,
  ],
  
  providers: [AuthGuard,{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
  },UserService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }

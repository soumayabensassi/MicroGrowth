import { NgModule } from '@angular/core';
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
import { UserService } from './service/user.service';
import { PageNotFoundComponent } from './Component/page-not-found/page-not-found.component';
import { AuthGuard } from './Auth/auth.guard';
import { AuthInterceptor } from './Auth/auth.interceptor';
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
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [AuthGuard,{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
  },UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }import { IntrestCalculatorComponent } from './Component/intrest-calculator/intrest-calculator.component';


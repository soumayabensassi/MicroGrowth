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
import {HttpClientModule} from  '@angular/common/http';
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
import { ListUserBACKComponent } from './Component/list-user-back/list-user-back.component';
import { ListPublictaionBACKComponent } from './Component/list-publictaion-back/list-publictaion-back.component';
import { AllTemplateUserComponentComponent } from './Component/all-template-user-component/all-template-user-component.component';
import { AllTemplateAdminComponentComponent } from './Component/all-template-admin-component/all-template-admin-component.component';
import { AccountComponent } from './Component/Banking/account/account.component';
import { AdminaccountComponent } from './Component/Banking/account/admin/adminaccount/adminaccount.component';
import { AdminTransactionComponent } from './Component/Banking/account/admin/admin-transaction/admin-transaction.component';
import { UpdateBankAccountComponent } from './Component/Banking/account/admin/update-bank-account/update-bank-account.component';
import { MakeTransactionComponent } from './Component/Banking/make-transaction/make-transaction.component';
import { SuccesfultransferComponent } from './Component/Banking/make-transaction/succesfultransfer/succesfultransfer.component';
import { TransfernotallowedComponent } from './Component/Banking/make-transaction/transfernotallowed/transfernotallowed.component';
 import {CommonModule} from "@angular/common";
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
    MatButtonToggleModule, MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs'; 
import {MatDialogModule} from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// Material Navigation
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
// Material Layout
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';

import { MatTreeModule } from '@angular/material/tree';
// Material Buttons & Indicators
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';
// Material Popups & Modals
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
// Material Data tables
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './myComponents/footer/footer.component';
import { HeaderComponent } from './myComponents/header/header.component';
import { NavbarComponent } from './myComponents/navbar/navbar.component';
import { ContactcardComponent } from './myComponents/contactcard/contactcard.component';
import { HomesliderComponent } from './myComponents/homeslider/homeslider.component';
import { CovidcardComponent } from './myComponents/covidcard/covidcard.component';
import { VaccinecardComponent } from './myComponents/vaccinecard/vaccinecard.component';
import { ServicecardComponent } from './myComponents/servicecard/servicecard.component';
import { CommentcardComponent } from './myComponents/commentcard/commentcard.component';
import { WhyuscardComponent } from './myComponents/whyuscard/whyuscard.component';
import { CoutercardComponent } from './myComponents/coutercard/coutercard.component';
import { ContentComponent } from './myComponents/content/content.component';
import { FaqComponent } from './myComponents/faq/faq.component';
import { FaqQuesComponent } from './myComponents/faq-ques/faq-ques.component';
import { HospialListComponent } from './myComponents/hospial-list/hospial-list.component';
import { HospitalContactComponent } from './myComponents/hospital-contact/hospital-contact.component';
import { HospitalDoctorsComponent } from './myComponents/hospital-doctors/hospital-doctors.component';
import { HospitalImageComponent } from './myComponents/hospital-image/hospital-image.component';
import { HospitalListItemComponent } from './myComponents/hospital-list-item/hospital-list-item.component';
import { HospitalLocationComponent } from './myComponents/hospital-location/hospital-location.component';
import { HospitalOverviewComponent } from './myComponents/hospital-overview/hospital-overview.component';
import { HospitalviewComponent } from './myComponents/hospitalview/hospitalview.component';
import { AboutusHomeComponent } from './myComponents/aboutus-home/aboutus-home.component';
import { ContactusHomeComponent } from './myComponents/contactus-home/contactus-home.component';
import { ErrorHomeComponent } from './myComponents/error-home/error-home.component';
import { ApplicationDocComponent } from './myComponents/application-doc/application-doc.component';
import { ApplicationDoctoHospitalComponent } from './myComponents/application-docto-hospital/application-docto-hospital.component';
import { ApplicationFormComponent } from './myComponents/application-form/application-form.component';
import { ApplicationHosComponent } from './myComponents/application-hos/application-hos.component';
import { ApplicationComponent } from './myComponents/application/application.component';
import { AboutusComponent } from './myComponents/aboutus/aboutus.component';
import { Contactcard2Component } from './myComponents/contactcard2/contactcard2.component';
import { SigninComponent } from './myComponents/signin/signin.component';
import { SignupComponent } from './myComponents/signup/signup.component';
import { DoctorViewComponent } from './myComponents/doctor-view/doctor-view.component';
import { DoctorPatientComponent } from './myComponents/doctor-patient/doctor-patient.component';
import { DoctorOverviewComponent } from './myComponents/doctor-overview/doctor-overview.component';
import { DoctorLocationComponent } from './myComponents/doctor-location/doctor-location.component';
import { DoctorListComponent } from './myComponents/doctor-list/doctor-list.component';
import { DoctorItemComponent } from './myComponents/doctor-item/doctor-item.component';
import { DoctorDetailsCardComponent } from './myComponents/doctor-details-card/doctor-details-card.component';
import { DoctorContactComponent } from './myComponents/doctor-contact/doctor-contact.component';
import { DiseasesHomeComponent } from './myComponents/diseases-home/diseases-home.component';
import { DiseasesCardComponent } from './myComponents/diseases-card/diseases-card.component';
import { ClinicHomeComponent } from './myComponents/clinic-home/clinic-home.component';
import { ClinicFormComponent } from './myComponents/clinic-form/clinic-form.component';
import { ClinicCardComponent } from './myComponents/clinic-card/clinic-card.component';
import { ClinicDetailsComponent } from './myComponents/clinic-details/clinic-details.component';
import { HUApplicationItemComponent } from './myComponents/hu-application-item/hu-application-item.component';
import { HUApplicationListComponent } from './myComponents/hu-application-list/hu-application-list.component';
import { HUContactFormComponent } from './myComponents/hu-contact-form/hu-contact-form.component';
import { HUContactHomeComponent } from './myComponents/hu-contact-home/hu-contact-home.component';
import { HUContactItemComponent } from './myComponents/hu-contact-item/hu-contact-item.component';
import { HUContactcardComponent } from './myComponents/hu-contactcard/hu-contactcard.component';
import { HUDetailsFormComponent } from './myComponents/hu-details-form/hu-details-form.component';
import { HUDetailsHomeComponent } from './myComponents/hu-details-home/hu-details-home.component';
import { HUDoctorFormComponent } from './myComponents/hu-doctor-form/hu-doctor-form.component';
import { HUDoctorItemComponent } from './myComponents/hu-doctor-item/hu-doctor-item.component';
import { HUDoctorListComponent } from './myComponents/hu-doctor-list/hu-doctor-list.component';
import { HUEmergencyComponent } from './myComponents/hu-emergency/hu-emergency.component';
import { HUHeaderComponent } from './myComponents/hu-header/hu-header.component';
import { HUNavbarComponent } from './myComponents/hu-navbar/hu-navbar.component';
import { HUNavbarSideComponent } from './myComponents/hu-navbar-side/hu-navbar-side.component';
import { HUProfileComponent } from './myComponents/hu-profile/hu-profile.component';
import { HUUserComponent } from './myComponents/hu-user/hu-user.component';
import { HuApplicationItemAcComponent } from './myComponents/hu-application-item-ac/hu-application-item-ac.component';
import { HuApplicationItemRjComponent } from './myComponents/hu-application-item-rj/hu-application-item-rj.component';
import { HuDoctorItemRqComponent } from './myComponents/hu-doctor-item-rq/hu-doctor-item-rq.component';
import { HuDialogDeleteComponent } from './myComponents/hu-dialog-delete/hu-dialog-delete.component';
import { HuDialogDocDetailsComponent } from './myComponents/hu-dialog-doc-details/hu-dialog-doc-details.component';
import { HuDialogApplicationDetailsComponent } from './myComponents/hu-dialog-application-details/hu-dialog-application-details.component';
import { HuDialogApplicationDeleteComponent } from './myComponents/hu-dialog-application-delete/hu-dialog-application-delete.component';
import { HuDialogSavingComponent } from './myComponents/hu-dialog-saving/hu-dialog-saving.component';
import { AsLoginComponent } from './myComponents/as-login/as-login.component';
import { AsWelcomeComponent } from './myComponents/as-welcome/as-welcome.component';
import { AsDoctorcardComponent } from './myComponents/as-doctorcard/as-doctorcard.component';
import { AsNavbarSideComponent } from './myComponents/as-navbar-side/as-navbar-side.component';
import { AsPharmacyformComponent } from './myComponents/as-pharmacyform/as-pharmacyform.component';
import { AsPatientlistComponent } from './myComponents/as-patientlist/as-patientlist.component';
import { AsPatientcardComponent } from './myComponents/as-patientcard/as-patientcard.component';
import { AsDoctordetailsComponent } from './myComponents/as-doctordetails/as-doctordetails.component';
import { AsNavbarComponent } from './myComponents/as-navbar/as-navbar.component';
import { AsHomeComponent } from './myComponents/as-home/as-home.component';

import { HuWelcomeComponent } from './myComponents/hu-welcome/hu-welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    ContactcardComponent,
    CovidcardComponent,
    VaccinecardComponent,
    ServicecardComponent,
    CommentcardComponent,
    HomesliderComponent,
    WhyuscardComponent,
    CoutercardComponent,
    ContentComponent,
    FaqComponent,
    FaqQuesComponent,
    HospialListComponent,
    HospitalContactComponent,
    HospitalDoctorsComponent,
    HospitalImageComponent,
    HospitalListItemComponent,
    HospitalLocationComponent,
    HospitalOverviewComponent,
    HospitalviewComponent,
    AboutusHomeComponent,
    ContactusHomeComponent,
    ErrorHomeComponent,
    ApplicationDocComponent,
    ApplicationDoctoHospitalComponent,
    ApplicationFormComponent,
    ApplicationHosComponent,
    ApplicationComponent,
    AboutusComponent,
    Contactcard2Component,
    SigninComponent,
    SignupComponent,
    DoctorViewComponent,
    DoctorPatientComponent,
    DoctorOverviewComponent,
    DoctorLocationComponent,
    DoctorListComponent,
    DoctorItemComponent,
    DoctorDetailsCardComponent,
    DoctorContactComponent,
    DiseasesHomeComponent,
    DiseasesCardComponent,
    ClinicHomeComponent,
    ClinicFormComponent,
    ClinicCardComponent,
    ClinicDetailsComponent,
    HUApplicationItemComponent,
    HUApplicationListComponent,
    HUContactFormComponent,
    HUContactHomeComponent,
    HUContactItemComponent,
    HUContactcardComponent,
    HUDetailsFormComponent,
    HUDetailsHomeComponent,
    HUDoctorFormComponent,
    HUDoctorItemComponent,
    HUDoctorListComponent,
    HUEmergencyComponent,
    HUHeaderComponent,
    HUNavbarComponent,
    HUNavbarSideComponent,
    HUProfileComponent,
    HUUserComponent,
    HuApplicationItemAcComponent,
    HuApplicationItemRjComponent,
    HuDoctorItemRqComponent,
    HuDialogDeleteComponent,
    HuDialogDocDetailsComponent,
    HuDialogApplicationDetailsComponent,
    HuDialogApplicationDeleteComponent,
    HuDialogSavingComponent,
    AsLoginComponent,
    AsWelcomeComponent,
    AsDoctorcardComponent,
    AsNavbarSideComponent,
    AsPharmacyformComponent,
    AsPatientlistComponent,
    AsPatientcardComponent,
    AsDoctordetailsComponent,
    AsNavbarComponent,
    AsHomeComponent,
    HuWelcomeComponent,
  ],
  entryComponents:[HuDialogDeleteComponent],
  imports: [
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatListModule,
    MatStepperModule,
    MatTabsModule,
    MatTreeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatRippleModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule.forRoot([
      {path: 'home', component: HomesliderComponent},
      {path: 'faq', component: FaqComponent},
      {path: 'dieases', component: DiseasesHomeComponent},
      {path: 'hospital', component: HospialListComponent},
      {path: 'doctors', component: DoctorListComponent},
      {path: 'appointment', component: ApplicationComponent},
      {path: 'contact', component: ContactusHomeComponent},
      {path: 'aboutus', component: AboutusHomeComponent},
      {path: 'signin', component: SigninComponent},
      {path: 'signup', component: SignupComponent},
      {path: 'clinichome', component: ClinicHomeComponent},
      {path: 'hospitaluser', component: HUUserComponent,
          children:[
            
            {path: 'hu-app-list', component: HUApplicationListComponent},
            {path: 'hu-doc-list', component: HUDoctorListComponent},
            {path: 'hu-doc-form', component: HUDoctorFormComponent},
            {path: 'hu-detail-form', component: HUDetailsFormComponent},
            {path: 'hu-contact-form', component: HUContactHomeComponent},
            {path: 'hu-profile', component: HUProfileComponent},
          ]
        },
      {path: '', redirectTo: '/home', pathMatch: 'full'},
    ]),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatListModule,
    MatStepperModule,
    MatTabsModule,
    MatTreeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatRippleModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule
  ]
})
export class AppModule { }

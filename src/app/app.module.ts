import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ToolbarComponent } from './navigation/toolbar/toolbar.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { AuthService } from './auth/auth.service';
import { TodoService } from './todos/todo.service';
import { TodoEditComponent } from './todos/todo-edit/todo-edit.component';
import { TodosCompletedComponent } from './todos/todos-completed/todos-completed.component';
import { TodosIncompleteComponent } from './todos/todos-incomplete/todos-incomplete.component';
import { UIService } from './ui.service';



@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    SignupComponent,
    LoginComponent,
    WelcomeComponent,
    ToolbarComponent,
    SidenavListComponent,
    TodoEditComponent,
    TodosCompletedComponent,
    TodosIncompleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService, TodoService, UIService],
  bootstrap: [AppComponent]
})
export class AppModule { }

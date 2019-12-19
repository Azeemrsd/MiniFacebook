import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";
import {
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule
} from "@angular/material";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatExpansionModule } from "@angular/material/expansion";

import { AppComponent } from "./app.component";
import { PostCreateComponent } from "./Posts/post-create/post-create.component";
import { PostsComponent } from "./Posts/posts.component";

@NgModule({
  declarations: [AppComponent, PostCreateComponent, PostsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,

    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

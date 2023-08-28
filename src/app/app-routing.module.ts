import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LandingComponent } from "./pages/landing/landing.component";
import { PostComponent } from "./pages/post/post.component";

const routes: Routes = [
  {
    path: "",
    component: LandingComponent,
  },
  {
    path: "post/:id",
    component: PostComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

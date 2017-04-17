import { DirectoryComponent } from "./directory/directory.component";
import { HomeComponent } from "./home/home.component";
import { RouterModule } from "@angular/router";

const APP_ROUTES = [
  { path: 'directory', component: DirectoryComponent },
  { path: '', component: HomeComponent}
];

export const APP_ROUTES_PROVIDER = {
  provideRouter(APP_ROUTES){return APP_ROUTES}
};

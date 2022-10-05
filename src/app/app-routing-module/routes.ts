import { Routes } from "@angular/router";
import { ListContainerComponent } from "../components/container/list-container/list-container.component";
import { AllowListGuard } from "./guards/allow-list.guard";

export const routes: Routes = [
  { path: 'list', component: ListContainerComponent, canActivate: [AllowListGuard] },
];

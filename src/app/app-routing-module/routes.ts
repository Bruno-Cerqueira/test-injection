import { Routes } from "@angular/router";
import { ListContainerComponent } from "../components/container/list-container/list-container.component";
import { MultiDirectiveComponent } from "../multi-directive/multi-directive.component";
import { AllowExitListGuard } from "./guards/allow-exit-list.guard";
import { AllowListGuard } from "./guards/allow-list.guard";

export const routes: Routes = [
  { path: 'list', component: ListContainerComponent, canActivate: [AllowListGuard], canDeactivate: [AllowExitListGuard] },
  { path: '', component: MultiDirectiveComponent },
];

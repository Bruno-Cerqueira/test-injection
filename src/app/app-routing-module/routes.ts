import { Routes } from "@angular/router";
import { CounterContainerComponent } from "../components/container/counter-container/counter-container.component";
import { ListContainerComponent } from "../components/container/list-container/list-container.component";
import { AllowExitListGuard } from "./guards/allow-exit-list.guard";
import { AllowListGuard } from "./guards/allow-list.guard";

export const routes: Routes = [
  { path: 'list', component: ListContainerComponent, canActivate: [AllowListGuard], canDeactivate: [AllowExitListGuard] },
  { path: 'counter-list', component: CounterContainerComponent },
  { path: '', redirectTo: 'counter-list', pathMatch: 'full' },
];

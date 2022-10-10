import { Routes } from "@angular/router";
import { ListContainerComponent } from "../components/container/list-container/list-container.component";
import { MultiDirectiveComponent } from "../multi-directive/multi-directive.component";
import { CounterComponent } from "../store-data/components/counter/counter.component";
import { AllowExitListGuard } from "./guards/allow-exit-list.guard";
import { AllowListGuard } from "./guards/allow-list.guard";

export const routes: Routes = [
  { path: 'list', component: ListContainerComponent, canActivate: [AllowListGuard], canDeactivate: [AllowExitListGuard] },
  { path: 'counter-list', component: CounterComponent },
  { path: '', redirectTo: 'counter-list', pathMatch: 'full' },
];

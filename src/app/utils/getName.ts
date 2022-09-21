import { inject } from "@angular/core"
import { map, Observable } from "rxjs"
import { UserToken } from "../services/admin.service"
import { User, UserService } from "../services/user.service"


export const getName = (): Observable<String> => {
  return inject(UserToken).user.pipe(map((data: User)=> data.name))
}
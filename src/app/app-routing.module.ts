import { SkeletonComponent } from '@layout/skeleton/skeleton.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SkeletonComponent,
    children: [
      {
        path: '',
        loadChildren: ()=>
        import('@modules/user/user.module').then((m) => m.UserModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}

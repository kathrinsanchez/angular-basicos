import { NgModule } from "@angular/core";
import { AppModule } from '../app.module';
import { AppComponent } from '../app.component';
import { ContadorComponent } from './contador/contador.component';

@NgModule({
    declarations: [
        ContadorComponent
    ],
    exports: [
        ContadorComponent
    ]
})

export class ContadorModule {}
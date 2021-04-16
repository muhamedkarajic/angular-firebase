import { MatIconModule } from "@angular/material/icon";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { DragDropModule } from "@angular/cdk/drag-drop";

@NgModule({
	imports: [
		CommonModule,
		MatToolbarModule,
		MatIconModule,
		MatCardModule,
		DragDropModule
	],
	exports: [MatToolbarModule, MatIconModule, MatCardModule, DragDropModule]
})
export class MaterialModule {}

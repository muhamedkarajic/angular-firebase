import { Component } from "@angular/core";
import { Task } from "src/models/task.module";
import { CdkDragDrop, transferArrayItem } from "@angular/cdk/drag-drop";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"]
})
export class AppComponent {
	todo: Task[] = [
		{ id: "1", title: "Drink water", description: "You should drink water" },
		{ id: "2", title: "Learn Firebase", description: "NoSQL Database" }
	];
	inProgress: Task[] = [];
	done: Task[] = [];

	drop(event: CdkDragDrop<Task[]>): void {
		if (event.previousContainer === event.container) return;
		transferArrayItem(
			event.previousContainer.data,
			event.container.data,
			event.previousIndex,
			event.currentIndex
		);
	}

	// eslint-disable-next-line @typescript-eslint/no-empty-function
	edit(list: string, task: Task): void {}
}

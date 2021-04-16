import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Task } from "src/models/task.module";
@Component({
	selector: "task",
	templateUrl: "./task.component.html",
	styleUrls: ["./task.component.scss"]
})
export class TaskComponent {
	@Input() task: Task;
	@Output() edit = new EventEmitter<Task>();
}

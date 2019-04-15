import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-hello",
  templateUrl: "./hello.component.html",
  styleUrls: ["./hello.component.css"]
})
export class HelloComponent implements OnInit {
  myvariable = "Marcsi";
  i = 0;

  constructor() {}
  doSomeTask() {
    console.log(`Called ${this.i++} times`);
  }
  ngOnInit() {}
}

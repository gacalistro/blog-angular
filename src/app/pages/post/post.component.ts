import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"],
})
export class PostComponent implements OnInit {
  postIndex: number = 0;

  constructor(private postId: ActivatedRoute) {}

  ngOnInit(): void {
    this.postId.paramMap.subscribe((value) => {
      const index: number = Number(value.get("id") ?? 1) - 1;
      this.postIndex = index;
    });
  }
}

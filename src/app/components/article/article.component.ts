import { Component, Input, OnChanges } from "@angular/core";
import { posts, PostProps } from "src/constants";

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.css"],
})
export class ArticleComponent implements OnChanges {
  @Input() postIndex: number = 0;

  post: PostProps | undefined = undefined;

  ngOnChanges(): void {
    this.post = posts[this.postIndex];
  }
}

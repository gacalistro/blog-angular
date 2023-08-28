import { Component } from "@angular/core";
import { PostProps, posts } from "src/constants";

@Component({
  selector: "app-primary-section",
  templateUrl: "./primary-section.component.html",
  styleUrls: ["./primary-section.component.css"],
})
export class PrimarySectionComponent {
  highlightedPost: PostProps = posts[0];
  secondaryPosts: PostProps[] = posts.slice(1);
}

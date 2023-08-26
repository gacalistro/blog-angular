import { Component } from "@angular/core";
import { navRoutes } from "src/enums/nav-routes";

type NavItem = {
  name: string;
  url: string;
};

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent {
  navItemList: NavItem[] = Object.keys(navRoutes).map((item) => {
    return {
      name: item,
      url: navRoutes[item as keyof typeof navRoutes],
    };
  });
}

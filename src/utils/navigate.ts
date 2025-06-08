// utils/navigate.ts
import type { NavigateFunction } from "react-router-dom";

// Method 1: Navigation utility class
class NavigationUtils {
  private navigate: NavigateFunction | null = null;

  setNavigate(navigateFunction: NavigateFunction) {
    this.navigate = navigateFunction;
  }

  goTo(path: string) {
    if (this.navigate) {
      this.navigate(path);
    } else {
      console.warn("Navigate function not initialized");
    }
  }

  goToSignIn() {
    this.goTo("/signin");
  }

  goToSignUp() {
    this.goTo("/signup");
  }

  goToDashboard() {
    this.goTo("/dashboard");
  }

  goBack() {
    if (this.navigate) {
      this.navigate(-1);
    }
  }

  replace(path: string) {
    if (this.navigate) {
      this.navigate(path, { replace: true });
    }
  }
}

export const navigationUtils = new NavigationUtils();
// Frontend code (e.g., in a services/api file)
import api from "@/api";

async function connectGoogle() {
  try {
    const res = await api.post("/connect/google/initiate");

    if (res.data.authUrl) {
      window.open(res.data.authUrl, "googleAuth", "width=500,height=600");

      return new Promise((resolve, reject) => {
        // Add a timeout to reject if the user closes the popup manually
        const timeout = setTimeout(() => {
          reject(new Error("Authentication timed out or was cancelled."));
        }, 2 * 60 * 1000); // 2-minute timeout

        window.addEventListener(
          "message",
          (event) => {
            // Important: Always verify the origin of the message for security
            if (event.origin !== "http://localhost:3000") {
              // Your backend origin
              return;
            }

            if (event.data?.type === "OAUTH_SUCCESS") {
              clearTimeout(timeout);
              resolve(true);
              // DO NOT close the window here. The popup will close itself.
              // authWindow?.close(); <-- REMOVE THIS LINE
            } else if (event.data?.type === "OAUTH_ERROR") {
              clearTimeout(timeout);
              reject(new Error(event.data.payload.message || "OAuth failed."));
              // The popup should also close itself on error.
            }
          },
          { once: true }
        );
      });
    } else {
      throw new Error("Auth URL not provided by server.");
    }
  } catch (error) {
    console.error("Failed to connect Google account:", error);
    throw error;
  }
}

export default connectGoogle;

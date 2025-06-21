import api from "@/api";

async function connectGoogle() {
  try {
    const res = await api.post("/connect/google/initiate");

    if (res.data.authUrl) {
      const authWindow = window.open(
        res.data.authUrl,
        "googleAuth",
        "width=500,height=600"
      );

      return new Promise((resolve, reject) => {
        window.addEventListener(
          "message",
          (event) => {
            if (event.data?.type === "OAUTH_SUCCESS") {
              resolve(true);
              authWindow?.close();
            } else if (event.data?.type === "OAUTH_ERROR") {
              reject(new Error(event.data.payload.message));

              authWindow?.close();
            }
          },
          { once: true }
        );
      });
    } else {
      throw new Error("Auth URL not provided by server.");
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default connectGoogle;

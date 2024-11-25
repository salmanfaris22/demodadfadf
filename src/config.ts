export const config = {
    apiBaseUrl: import.meta.env.VITE_APP_API_BASE_URL as string,
    imagePath: import.meta.env.VITE_APP_IMAGE_PATH as string,
    mint: import.meta.env.VITE_APP_MINT as string,
    receiver: import.meta.env.VITE_APP_RECEIVER as string,
    sseUrl: import.meta.env.VITE_APP_SSE_URL as string,
};

export default function manifest() {
    return {
        display: "standalone",
        icons: [
            {
                src: "/favicon.ico",
                sizes: "32x32",
                type: "image/png",
            },
        ],
    };
}
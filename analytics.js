(function () {
    const analyticsConfig = {
        provider: "cloudflare-web-analytics",
        token: "a35932a9065a4c2cb1fb29ff567f273c" // Cloudflare Web Analytics token
    };

    if (analyticsConfig.provider !== "cloudflare-web-analytics" || !analyticsConfig.token) {
        return;
    }

    const token = analyticsConfig.token.trim();
    if (!token) {
        return;
    }

    const beaconConfig = JSON.stringify({ token: token });

    const cloudflareScript = document.createElement("script");
    cloudflareScript.defer = true;
    cloudflareScript.src = "https://static.cloudflareinsights.com/beacon.min.js";
    cloudflareScript.setAttribute("data-cf-beacon", beaconConfig);
    document.head.appendChild(cloudflareScript);
})();

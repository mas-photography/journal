export function setupMarkdownImages() {
    const hintImages = () => {
        document.querySelectorAll<HTMLImageElement>('.prose img').forEach((img) => {
            if (!img.loading) img.loading = 'lazy';
            img.decoding = 'async';
        });
    };

    if ('requestIdleCallback' in window) {
        (window as any).requestIdleCallback(hintImages, { timeout: 1000 });
    } else {
        setTimeout(hintImages, 0);
    }
}

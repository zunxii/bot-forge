import FirecrawlApp from "firecrawl";
import { CrawlResult, FirecrawlPage } from "./types";
import { normalizeUrl, mapFirecrawlPages } from "../utils/crawler";

const DEFAULT_CRAWL_LIMIT = 20;

export async function crawlWebsite(urlInput: string): Promise<CrawlResult> {
    const apiKey = process.env.FIRECRAWL_API_KEY;

    if (!apiKey) {
        return {
            success: false,
            pages: [],
            error: "FIRECRAWL_API_KEY is not set.",
        };
    }

    let url: string;

    try {
        url = normalizeUrl(urlInput);
    } catch (err) {
        return {
            success: false,
            pages: [],
            error: err instanceof Error ? err.message : "Invalid URL.",
        };
    }

    const app = new FirecrawlApp({ apiKey });

    try {
        console.log(`[CRAWLER] Starting crawl: ${url}`);

        const response = await app.crawlUrl(url, {
            limit: DEFAULT_CRAWL_LIMIT,
            scrapeOptions: {
                formats: ["markdown"],
                onlyMainContent: true,
            },
        });

        if (!response?.success) {
            const errorMessage =
                typeof response?.error === "string"
                    ? response.error
                    : "Firecrawl crawl failed.";

            console.error(`[CRAWLER] Crawl failed: ${url}`, response?.error);

            return {
                success: false,
                pages: [],
                error: errorMessage,
            };
        }

        const pages = mapFirecrawlPages(response.data as FirecrawlPage[] | undefined, url);

        console.log(`[CRAWLER] Completed crawl: ${url} (${pages.length} pages)`);

        return {
            success: true,
            pages,
        };
    } catch (error) {
        const message = error instanceof Error ? error.message : "Failed to crawl website.";

        console.error(`[CRAWLER] Unexpected error while crawling ${url}:`, error);

        return {
            success: false,
            pages: [],
            error: message,
        };
    }
}
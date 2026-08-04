// src/lib/rate-limit.ts
// In-memory rate limiter — suitable for single-instance deployments.
// Swap to @upstash/ratelimit for multi-instance / serverless prod.

interface RateLimitRecord {
  count: number;
  resetAt: number;
}

const store = new Map<string, RateLimitRecord>();

// Clean up expired entries every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const [key, record] of store.entries()) {
    if (now > record.resetAt) store.delete(key);
  }
}, 5 * 60 * 1000);

/**
 * Check if the given identifier has exceeded the rate limit.
 * @param key        Unique identifier (e.g. IP address)
 * @param limit      Max requests per window
 * @param windowMs   Window duration in milliseconds
 */
export function rateLimit(
  key: string,
  limit = 5,
  windowMs = 60 * 60 * 1000 // 1 hour default
): { allowed: boolean; remaining: number; resetAt: number } {
  const now = Date.now();
  const record = store.get(key);

  if (!record || now > record.resetAt) {
    // New window
    const resetAt = now + windowMs;
    store.set(key, { count: 1, resetAt });
    return { allowed: true, remaining: limit - 1, resetAt };
  }

  if (record.count >= limit) {
    return { allowed: false, remaining: 0, resetAt: record.resetAt };
  }

  record.count += 1;
  return { allowed: true, remaining: limit - record.count, resetAt: record.resetAt };
}

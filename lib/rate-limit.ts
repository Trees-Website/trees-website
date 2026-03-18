const memoryStore = new Map<string, { count: number; expires: number }>();

export function rateLimit(key: string, limit = 5, windowMs = 60_000) {
  const now = Date.now();
  const current = memoryStore.get(key);

  if (!current || current.expires < now) {
    memoryStore.set(key, { count: 1, expires: now + windowMs });
    return { success: true };
  }

  if (current.count >= limit) {
    return { success: false };
  }

  current.count += 1;
  memoryStore.set(key, current);
  return { success: true };
}
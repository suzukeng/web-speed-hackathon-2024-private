export async function jitter(): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 300 + Math.random() * 100));
}

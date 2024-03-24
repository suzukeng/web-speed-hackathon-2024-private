export async function jitter(): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 100 + Math.random() * 50));
}

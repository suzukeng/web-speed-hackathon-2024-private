export async function jitter(): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 50 + Math.random() * 50));
}

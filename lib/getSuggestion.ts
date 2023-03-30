type PayloadProps = {
  prompt: string;
  style?: string;
  n?: number;
  size?: "256x256" | "512x512" | "1024x1024";
};

const ENDPOINT = "/api/dalle2";

export default async function fetchSuggestion(
  payload: PayloadProps | string
): Promise<void> {
  try {
    const response = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

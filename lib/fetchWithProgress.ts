type ProgressCallback = (progress: number) => void;

export default function fetchWithProgress(
  url: string,
  options: RequestInit,
  onProgress: ProgressCallback,
): Promise<Response> {
  return fetch(url, options).then((response) => {
    const contentLength: any = response.headers.get("Content-Length");
    if (!contentLength) {
      return response;
    }
    let loaded = 0;
    const reader = response.body!.getReader();
    function read(): any {
      return reader.read().then(({ done, value }) => {
        if (done) {
          return response;
        }
        loaded += value.byteLength;
        onProgress(loaded / parseInt(contentLength));
        return read();
      });
    }
    return read();
  });
}

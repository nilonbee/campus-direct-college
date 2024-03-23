type UrlProps = {
  url: string;
};

export default async function fetchLocation({ url }: UrlProps) {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    let country = data.country;
    return country;
  } catch (error) {
    console.error('Error fetching location:', error);
    throw error; // rethrow the error to propagate it to the caller if needed
  }
}
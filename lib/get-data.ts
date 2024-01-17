export async function getData(CollectionName: string, Document?: string) {
  let firebaseEndpoint: string;

  if (Document) {
    firebaseEndpoint = `https://firestore.googleapis.com/v1/projects/ads-company-285a6/databases/(default)/documents/${CollectionName}/${Document}`;
  } else {
    firebaseEndpoint = `https://firestore.googleapis.com/v1/projects/ads-company-285a6/databases/(default)/documents/${CollectionName}`;
  }

  try {
    const response = await fetch(firebaseEndpoint, { cache: "no-store" });
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }

    const data = await response.json();
    if (Document) {
      const formattedData: any = {};

      for (const field in data.fields) {
        if (Object.prototype.hasOwnProperty.call(data.fields, field)) {
          formattedData[field] = data.fields[field].stringValue || null;
        }
      }

      return formattedData;
    } else {
      const documents = data.documents.map((doc: any) => {
        const formattedDoc: any = {
          id: doc.name.split("/").pop(),
        };

        for (const field in doc.fields) {
          if (Object.prototype.hasOwnProperty.call(doc.fields, field)) {
            formattedDoc[field] = doc.fields[field].stringValue || null;
          }
        }

        return formattedDoc;
      });

      return documents;
    }
  } catch (error) {
    console.error("Lỗi khi lấy dữ liệu:", error);
    throw new Error("Failed to fetch data.");
  }
}

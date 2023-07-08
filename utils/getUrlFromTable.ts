
export default function getUrlFromTable(image:string) {

    const img = image && typeof image === "string" ? JSON.parse(image) : "";
    const url = img ? img[0]?.url : "/images/card-logo.svg"
    return url
}
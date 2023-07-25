const projectId = 'mlfoassvjfdizqvcrgjx' // your supabase project id

export default function supabaseLoader({ src, width, quality }) {
  return `https://${projectId}.supabase.co/storage/v1/object/public/project-images/images/${src}?width=${width}&quality=${
    quality || 75
  }`
}
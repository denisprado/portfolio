"use client";

import { ImageLoader } from "next/image";
const projectId = "mlfoassvjfdizqvcrgjx"; // your supabase project id

const supabaseLoader = ({
  src,
  width,
  quality,
}: {
  src: string;
  width?: number;
  quality?: number;
}) => {
  return `https://${projectId}.supabase.co/storage/v1/object/public/albums/${src}?width=${
    width || 100
  }&quality=${quality || 75}`;
};

export default supabaseLoader;

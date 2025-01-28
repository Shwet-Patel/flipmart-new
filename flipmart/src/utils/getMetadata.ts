import type { Metadata } from "next";

export function generateMetadata(name:string): Metadata {
    return {
      title: name,
    }
  }
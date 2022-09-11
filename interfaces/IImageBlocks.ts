// This is the interface for the 
// Blocks.tsx component, naming was
// changed to IImageBlocks.ts to avoid confusion
// with the pre-existing IBlocks.ts

export interface IImageBlocks {
    // blockType: string
    heading1?: string
    heading2?: string
    image1?: string
    image2?: string
    text1?: string
    text2?: string
    uid: number
    ctas1?: ICtas[]
    ctas2?: ICtas[]
  }

  interface ICtas {
    link?: string
    isBlank?: string
    label?: string
  }
  
import MarketPlatforms from "../../StaticDataStructures/MarketPlatforms";

interface IItem {
  id: string,
  shoppingSessionId?: string,
  label?: string,
  brand?: string,
  type?: string,
  cost?: number,
  descriptiveTags?: string[],
  imageUri?: string,
  isProcessed: boolean,
  isSold: boolean,
  marketPlatform?: MarketPlatforms,
  listedPrice?: number,
  addDescriptiveTag(tag: string): void,
  removeDescriptiveTag(tag: string): void
}

export default IItem

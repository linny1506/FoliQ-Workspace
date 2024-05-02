export interface GroceryItem {
    records: Record[]
    offset: string
  }
  
  export interface Record {
    id: string
    createdTime: string
    fields: Fields
  }
  
  export interface Fields {
    Count: number
    Item: string
    Notes: string
  }
  
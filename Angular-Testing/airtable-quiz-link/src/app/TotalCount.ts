/**
 * @description airtable json model
 */
export interface TotalCount {
    records: Record[]
    offset: string
  }
  
  export interface Record {
    id: string
    createdTime: string
    fields: Fields
  }
  
  export interface Fields {
    Value: number
    Count: number
    Coin: string
    Category: string
  }
  
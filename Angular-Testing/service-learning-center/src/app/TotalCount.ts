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
    Count: number
    Coin: string
  }
  
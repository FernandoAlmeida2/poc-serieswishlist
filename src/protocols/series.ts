export type Series = {
    id?: number,
    name: string,
    platform: string,
    genre: string,
    review: string,
    status: string,
    rate: number
  }

  export type NewSeries = {
    name: string,
    platform: string,
    genre: string,
  }

  export type UpdateSeries = Omit<Series, "id" | "platform" | "genre" >
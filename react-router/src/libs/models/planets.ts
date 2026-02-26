export interface Meta {
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
}

export interface Links {
  first: string;
  previous: string;
  next: string;
  last: string;
}

export interface PlanetsInput {
  page: number;
  limit: number;
  name?: string;
  isDestroyed?: boolean;
}

export interface Planet {
  id: number;
  name: string;
  isDestroyed: boolean;
  description: string;
  image: string;
  deletedAt: Date | null;
}

export interface PlanetsResponse {
  items: Planet[];
  meta: Meta;
  links: Links;
}

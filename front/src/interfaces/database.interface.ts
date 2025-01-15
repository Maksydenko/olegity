export type TypeJson =
  | string
  | number
  | boolean
  | null
  | {
      [key: string]: TypeJson;
    }
  | TypeJson[];

export interface IDatabase {
  public: {
    Tables: {
      table: {};
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
